import React, { useState, useEffect, useMemo } from 'react';

const STORAGE_KEY = 'rbac_demo_v1';
const nowISO = () => new Date().toISOString().slice(0, 19).replace('T', ' ');

const defaultState = {
    users: [
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
        { id: 3, name: 'Carlos Diaz', email: 'carlos@example.com' },
        { id: 4, name: 'Divya Patel', email: 'divya@example.com' },
        { id: 5, name: 'Ethan Park', email: 'ethan@example.com' },
    ],
    roles: [
        { id: 'admin', name: 'Administrator', desc: 'Full system access', users: [1], updated_at: nowISO() },
        { id: 'supervisor', name: 'Supervisor', desc: 'Approve workflows, manage teams', users: [2, 3], updated_at: nowISO() },
        { id: 'navigator', name: 'Care Navigator', desc: 'Manage patients, tasks, referrals', users: [4, 5], updated_at: nowISO() },
        { id: 'viewer', name: 'MCP Viewer', desc: 'Read-only access', users: [], updated_at: nowISO() },
    ],
    modules: [
        'Patients', 'Referrals', 'Authorizations', 'Assessments', 'CarePlans', 'Tasks', 'Docs', 'Settings'
    ],
    // permissions: roleId -> module -> {view,create,edit,delete}
    perms: {},
    audit: []
};

// Initialize default perms (view only for viewer, full for admin)
function initPerms(state) {
    if (Object.keys(state.perms).length) return;
    state.roles.forEach(r => {
        state.perms[r.id] = {};
        state.modules.forEach(m => {
            state.perms[r.id][m] = { view: r.id !== 'viewer' ? true : true, create: r.id === 'admin', edit: r.id === 'admin', delete: r.id === 'admin' };
        });
    });
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            const s = structuredClone(defaultState);
            initPerms(s);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
            return s;
        }
        return JSON.parse(raw);
    } catch (e) {
        console.error("Failed to load state", e);
        const s = structuredClone(defaultState);
        initPerms(s);
        return s;
    }
}

export default function RBC() {
    const [state, setState] = useState(loadState);
    const [globalSearch, setGlobalSearch] = useState('');
    const [selectedRoleForPerms, setSelectedRoleForPerms] = useState('');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [assignModalOpen, setAssignModalOpen] = useState(false);
    const [assignRoleId, setAssignRoleId] = useState('');
    const [assignSelectedUsers, setAssignSelectedUsers] = useState([]);

    // Persist state whenever it changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    // Initialize selected role for permissions view
    useEffect(() => {
        if (!selectedRoleForPerms && state.roles.length > 0) {
            setSelectedRoleForPerms(state.roles[0].id);
        }
    }, [state.roles, selectedRoleForPerms]);

    const pushAudit = (msg) => {
        setState(prev => {
            const newAudit = [{ msg, at: nowISO() }, ...prev.audit].slice(0, 100);
            return { ...prev, audit: newAudit };
        });
    };

    const handleAddRole = () => {
        const id = prompt('New role ID (e.g., billing_manager)');
        if (!id) return;
        if (state.roles.some(r => r.id === id)) {
            alert('Role ID already exists');
            return;
        }
        const name = prompt('Role display name', 'New Role') || 'New Role';
        const desc = prompt('Description', 'Description goes here') || 'Description goes here';

        setState(prev => {
            const newRole = { id, name, desc, users: [], updated_at: nowISO() };
            const newPerms = { ...prev.perms };
            newPerms[id] = {};
            prev.modules.forEach(m => {
                newPerms[id][m] = { view: false, create: false, edit: false, delete: false };
            });

            return {
                ...prev,
                roles: [...prev.roles, newRole],
                perms: newPerms,
                audit: [{ msg: `Created role "${id}"`, at: nowISO() }, ...prev.audit].slice(0, 100)
            };
        });
    };

    const handleEditRole = (id) => {
        const role = state.roles.find(x => x.id === id);
        if (!role) return;
        const name = prompt('Role name', role.name);
        if (name === null) return;
        const desc = prompt('Description', role.desc);
        if (desc === null) return;

        setState(prev => ({
            ...prev,
            roles: prev.roles.map(r => r.id === id ? { ...r, name: name.trim() || r.name, desc: desc.trim() || r.desc, updated_at: nowISO() } : r),
            audit: [{ msg: `Edited role "${id}" → name="${name}", desc updated`, at: nowISO() }, ...prev.audit].slice(0, 100)
        }));
    };

    const handleDeleteRole = (id) => {
        if (!confirm('Delete this role?')) return;
        setState(prev => {
            const newPerms = { ...prev.perms };
            delete newPerms[id];
            return {
                ...prev,
                roles: prev.roles.filter(r => r.id !== id),
                perms: newPerms,
                audit: [{ msg: `Deleted role "${id}"`, at: nowISO() }, ...prev.audit].slice(0, 100)
            };
        });
        if (selectedRoleForPerms === id) {
            setSelectedRoleForPerms(state.roles.length > 1 ? state.roles.find(r => r.id !== id).id : '');
        }
    };

    const handlePermChange = (roleId, mod, key, checked) => {
        setState(prev => ({
            ...prev,
            perms: {
                ...prev.perms,
                [roleId]: {
                    ...prev.perms[roleId],
                    [mod]: {
                        ...prev.perms[roleId][mod],
                        [key]: checked
                    }
                }
            }
        }));
    };

    const handleGrantAll = (mod) => {
        if (!selectedRoleForPerms) return;
        setState(prev => ({
            ...prev,
            perms: {
                ...prev.perms,
                [selectedRoleForPerms]: {
                    ...prev.perms[selectedRoleForPerms],
                    [mod]: { view: true, create: true, edit: true, delete: true }
                }
            }
        }));
    };

    const handleRevokeAll = (mod) => {
        if (!selectedRoleForPerms) return;
        setState(prev => ({
            ...prev,
            perms: {
                ...prev.perms,
                [selectedRoleForPerms]: {
                    ...prev.perms[selectedRoleForPerms],
                    [mod]: { view: false, create: false, edit: false, delete: false }
                }
            }
        }));
    };

    const handleGlobalGrantAll = () => {
        if (!selectedRoleForPerms) return;
        setState(prev => {
            const newRolePerms = {};
            prev.modules.forEach(m => {
                newRolePerms[m] = { view: true, create: true, edit: true, delete: true };
            });
            return {
                ...prev,
                perms: { ...prev.perms, [selectedRoleForPerms]: newRolePerms }
            };
        });
    };

    const handleGlobalRevokeAll = () => {
        if (!selectedRoleForPerms) return;
        setState(prev => {
            const newRolePerms = {};
            prev.modules.forEach(m => {
                newRolePerms[m] = { view: false, create: false, edit: false, delete: false };
            });
            return {
                ...prev,
                perms: { ...prev.perms, [selectedRoleForPerms]: newRolePerms }
            };
        });
    };

    const handleSavePerms = () => {
        pushAudit(`Saved permissions for role "${selectedRoleForPerms}"`);
        alert('Permissions saved');
    };

    const handleAssignSave = () => {
        if (!assignRoleId) return;
        setState(prev => ({
            ...prev,
            roles: prev.roles.map(r => r.id === assignRoleId ? { ...r, users: assignSelectedUsers, updated_at: nowISO() } : r),
            audit: [{ msg: `Updated user assignment for role "${prev.roles.find(r => r.id === assignRoleId)?.name}"`, at: nowISO() }, ...prev.audit].slice(0, 100)
        }));
        setAssignModalOpen(false);
    };

    const handleResetDemo = () => {
        if (!confirm('Reset demo data?')) return;
        localStorage.removeItem(STORAGE_KEY);
        const s = structuredClone(defaultState);
        initPerms(s);
        setState(s);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    };

    const filteredRoles = useMemo(() => {
        const q = globalSearch.trim().toLowerCase();
        return state.roles.filter(r => !q || r.name.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q));
    }, [state.roles, globalSearch]);

    return (
        <div className={`h-full bg-slate-50 text-slate-900 antialiased ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
            <style>{`
                .sidebar-collapsed .label { display: none }
                .sidebar-collapsed .submenu { display: none }
                .sidebar-collapsed .w-56 { width: 4rem }
                .th-sticky { position: sticky; top: 0; z-index: 10 }
            `}</style>

            <div className="min-h-screen grid grid-cols-[auto_1fr]">
                {/* Sidebar */}
                <aside id="sidebar" className={`w-56 transition-all bg-white border-r border-slate-200 shadow-soft flex flex-col`}>
                    <div className="h-14 flex items-center justify-between px-3">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 grid place-items-center rounded-xl bg-sky-500/10 text-sky-500">
                                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                                    <path d="M12 2 2 7l10 5 9.5-4.75V22h-3v-8.5L12 17 2 12v10H0V7z" />
                                </svg>
                            </div>
                            {!sidebarCollapsed && <span className="label font-semibold tracking-tight">Control Tower</span>}
                        </div>
                        <button
                            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                            className="h-9 w-9 rounded-lg hover:bg-slate-100 grid place-items-center"
                            title="Collapse"
                        >
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                                <path d="M7 12l5-5v10zM13 12l5-5v10z" />
                            </svg>
                        </button>
                    </div>

                    <nav className="px-2 pb-4 text-sm flex-1">
                        <a className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-100" href="/dashboard">
                            <svg className="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                            </svg>
                            {!sidebarCollapsed && <span className="label">Dashboard</span>}
                        </a>
                        <div className="mt-2">
                            <button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-100">
                                <svg className="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5C21 16.5 17 14 12 14z" />
                                </svg>
                                {!sidebarCollapsed && <span className="label">Users & Roles</span>}
                            </button>
                            {!sidebarCollapsed && (
                                <div className="submenu ml-9 mt-1 space-y-1">
                                    <a href="#roles" className="block px-2 py-1.5 rounded hover:bg-slate-100">Roles</a>
                                    <a href="#permissions" className="block px-2 py-1.5 rounded hover:bg-slate-100">Permissions</a>
                                    <a href="#audit" className="block px-2 py-1.5 rounded hover:bg-slate-100">Audit Log</a>
                                </div>
                            )}
                        </div>
                        <div className="mt-2">
                            <button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-100">
                                <svg className="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 7 2 12l10 5 10-5z" />
                                </svg>
                                {!sidebarCollapsed && <span className="label">Patients</span>}
                            </button>
                            {!sidebarCollapsed && (
                                <div className="submenu ml-9 mt-1 space-y-1">
                                    <a href="#" className="block px-2 py-1.5 rounded hover:bg-slate-100">Status Board</a>
                                    <a href="#" className="block px-2 py-1.5 rounded hover:bg-slate-100">Referrals</a>
                                </div>
                            )}
                        </div>
                    </nav>
                </aside>

                {/* Main */}
                <main className="min-w-0 h-screen overflow-y-auto">
                    {/* Header */}
                    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
                            <h1 className="text-lg sm:text-xl font-semibold">RBAC Manager</h1>
                            <div className="flex items-center gap-2">
                                <input
                                    value={globalSearch}
                                    onChange={(e) => setGlobalSearch(e.target.value)}
                                    className="rounded-lg border border-slate-300 px-3 py-2 text-sm w-64 max-w-[60vw]"
                                    placeholder="Search roles or users..."
                                />
                                <button className="px-2.5 py-2 rounded-lg border border-slate-300 text-sm">🌙</button>
                                <button onClick={handleResetDemo} className="px-3 py-2 rounded-lg border border-slate-300 text-sm">Reset Demo</button>
                            </div>
                        </div>
                    </header>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">

                        {/* Roles Section */}
                        <section id="roles" className="bg-white rounded-2xl border border-slate-200 shadow-soft">
                            <div className="flex items-center justify-between p-4 border-b border-slate-200">
                                <div>
                                    <h2 className="text-base font-semibold">Roles</h2>
                                    <p className="text-xs text-slate-500">Create roles and assign users</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={handleAddRole} className="px-3 py-2 rounded-lg bg-sky-500 text-white text-sm hover:bg-sky-600">Add Role</button>
                                    <button onClick={() => {
                                        setAssignRoleId(state.roles[0]?.id || '');
                                        setAssignSelectedUsers(state.roles[0]?.users || []);
                                        setAssignModalOpen(true);
                                    }} className="px-3 py-2 rounded-lg border border-slate-300 text-sm hover:bg-slate-50">Assign Users</button>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-slate-100 th-sticky">
                                        <tr className="text-left">
                                            <th className="px-3 py-2 font-semibold">Role</th>
                                            <th className="px-3 py-2 font-semibold">Description</th>
                                            <th className="px-3 py-2 font-semibold">Users</th>
                                            <th className="px-3 py-2 font-semibold">Last Updated</th>
                                            <th className="px-3 py-2 font-semibold">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredRoles.map(r => (
                                            <tr key={r.id} className="border-t border-slate-100 hover:bg-slate-50">
                                                <td className="px-3 py-2"><span className="font-medium">{r.name}</span></td>
                                                <td className="px-3 py-2">{r.desc}</td>
                                                <td className="px-3 py-2">
                                                    {r.users.map(id => state.users.find(u => u.id === id)?.name).filter(Boolean).join(', ') || <span className="text-slate-400">None</span>}
                                                </td>
                                                <td className="px-3 py-2 text-slate-500">{r.updated_at}</td>
                                                <td className="px-3 py-2">
                                                    <div className="flex items-center gap-2">
                                                        <button onClick={() => handleEditRole(r.id)} className="px-2 py-1 rounded border border-slate-300 text-xs hover:bg-slate-100">Edit</button>
                                                        <button onClick={() => handleDeleteRole(r.id)} className="px-2 py-1 rounded border border-rose-300 text-rose-600 text-xs hover:bg-rose-50">Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Permission Matrix */}
                        <section id="permissions" className="bg-white rounded-2xl border border-slate-200 shadow-soft">
                            <div className="flex items-center justify-between p-4 border-b border-slate-200">
                                <div>
                                    <h2 className="text-base font-semibold">Permission Matrix</h2>
                                    <p className="text-xs text-slate-500">Toggle CRUD permissions per role and module</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <select
                                        value={selectedRoleForPerms}
                                        onChange={(e) => setSelectedRoleForPerms(e.target.value)}
                                        className="rounded-md border border-slate-300 px-2 py-1 text-sm"
                                    >
                                        {state.roles.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                                    </select>
                                    <button onClick={handleGlobalGrantAll} className="px-3 py-2 rounded-lg border border-slate-300 text-sm hover:bg-slate-50">Grant All</button>
                                    <button onClick={handleGlobalRevokeAll} className="px-3 py-2 rounded-lg border border-slate-300 text-sm hover:bg-slate-50">Revoke All</button>
                                    <button onClick={handleSavePerms} className="px-3 py-2 rounded-lg bg-sky-500 text-white text-sm hover:bg-sky-600">Save</button>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-slate-100 th-sticky">
                                        <tr className="text-left">
                                            <th className="px-3 py-2 font-semibold">Module</th>
                                            <th className="px-3 py-2 font-semibold">View</th>
                                            <th className="px-3 py-2 font-semibold">Create</th>
                                            <th className="px-3 py-2 font-semibold">Edit</th>
                                            <th className="px-3 py-2 font-semibold">Delete</th>
                                            <th className="px-3 py-2 font-semibold">Module Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedRoleForPerms && state.modules.map(m => {
                                            const p = state.perms[selectedRoleForPerms]?.[m] || { view: false, create: false, edit: false, delete: false };
                                            return (
                                                <tr key={m} className="border-t border-slate-100 hover:bg-slate-50">
                                                    <td className="px-3 py-2 font-medium">{m}</td>
                                                    <td className="px-3 py-2"><input type="checkbox" checked={p.view} onChange={(e) => handlePermChange(selectedRoleForPerms, m, 'view', e.target.checked)} /></td>
                                                    <td className="px-3 py-2"><input type="checkbox" checked={p.create} onChange={(e) => handlePermChange(selectedRoleForPerms, m, 'create', e.target.checked)} /></td>
                                                    <td className="px-3 py-2"><input type="checkbox" checked={p.edit} onChange={(e) => handlePermChange(selectedRoleForPerms, m, 'edit', e.target.checked)} /></td>
                                                    <td className="px-3 py-2"><input type="checkbox" checked={p.delete} onChange={(e) => handlePermChange(selectedRoleForPerms, m, 'delete', e.target.checked)} /></td>
                                                    <td className="px-3 py-2">
                                                        <button onClick={() => handleGrantAll(m)} className="px-2 py-1 rounded border border-slate-300 text-xs hover:bg-slate-50 mr-2">Grant All</button>
                                                        <button onClick={() => handleRevokeAll(m)} className="px-2 py-1 rounded border border-slate-300 text-xs hover:bg-slate-50">Revoke All</button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Audit */}
                        <section id="audit" className="bg-white rounded-2xl border border-slate-200 shadow-soft">
                            <div className="p-4 border-b border-slate-200">
                                <h2 className="text-base font-semibold">Audit Log</h2>
                                <p className="text-xs text-slate-500">Recent permission changes</p>
                            </div>
                            <div className="p-4 space-y-2 text-sm">
                                {state.audit.map((a, i) => (
                                    <div key={i} className="rounded-lg border border-slate-200 px-3 py-2 bg-white">
                                        <div className="text-slate-700">{a.msg}</div>
                                        <div className="text-xs text-slate-500">{a.at}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>
            </div>

            {/* Assign Users Modal */}
            {assignModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={(e) => e.target === e.currentTarget && setAssignModalOpen(false)}>
                    <div className="w-full max-w-xl rounded-2xl bg-white border border-slate-200 shadow-soft">
                        <div className="p-4 flex items-center justify-between border-b border-slate-200">
                            <h3 className="font-semibold">Assign Users to Roles</h3>
                            <button onClick={() => setAssignModalOpen(false)} className="h-9 w-9 rounded-lg grid place-items-center hover:bg-slate-100">✕</button>
                        </div>
                        <div className="p-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-slate-500">Pick Role</label>
                                    <select
                                        value={assignRoleId}
                                        onChange={(e) => {
                                            const rId = e.target.value;
                                            setAssignRoleId(rId);
                                            setAssignSelectedUsers(state.roles.find(r => r.id === rId)?.users || []);
                                        }}
                                        className="w-full rounded-md border border-slate-300 px-2 py-2 text-sm"
                                    >
                                        {state.roles.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-xs text-slate-500">Select Users</label>
                                    <select
                                        multiple
                                        size="8"
                                        value={assignSelectedUsers.map(String)}
                                        onChange={(e) => {
                                            const selected = Array.from(e.target.selectedOptions).map(o => Number(o.value));
                                            setAssignSelectedUsers(selected);
                                        }}
                                        className="w-full rounded-md border border-slate-300 px-2 py-2 text-sm"
                                    >
                                        {state.users.map(u => <option key={u.id} value={u.id}>{u.name} — {u.email}</option>)}
                                    </select>
                                    <p className="text-xs text-slate-500 mt-1">Hold Ctrl/Cmd or Shift to select multiple</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-end gap-2">
                                <button onClick={handleAssignSave} className="px-3 py-2 rounded-lg bg-sky-500 text-white text-sm hover:bg-sky-600">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
