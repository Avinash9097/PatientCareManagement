import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import RightListPane from '../components/RightListPane';
import NewDashboard from './NewDashboard';
import TenantSetup from './TenantSetup';
import DataReporting from './DataReporting';
import MasterTables from './MasterTables';
import EmailTemplates from './EmailTemplates';
import Scheduling from './Scheduling';
import UserManagement from './UserManagement';

/**
 * CarePlanPage.jsx
 * Converted from: /mnt/data/careplanOld.html. :contentReference[oaicite:1]{index=1}
 *
 * Notes:
 * - Keeps Tailwind classes as-is; in a create-react-app or Vite + Tailwind project,
 *   ensure Tailwind is configured properly. If you prefer the CDN, include it in index.html.
 * - Some advanced behaviors (pointer capture resizers) are implemented using pointer events.
 * - All major JS behaviors (sorting, filters, views, drawer, activities, localStorage) are ported.
 */

export default function CarePlanPage() {
    const navigate = useNavigate();
    /* ====== Data & Columns (initial) ====== */
    const initialColumns = [
        { key: "id", label: "ID", width: 80, visible: true, sortable: true },
        { key: "name", label: "Patient", width: 200, visible: true, sortable: true },
        { key: "age", label: "Age", width: 80, visible: true, sortable: true },
        { key: "risk", label: "Risk", width: 110, visible: true, sortable: true },
        { key: "status", label: "Status", width: 140, visible: true, sortable: true },
        { key: "careMgr", label: "Care Mgr", width: 160, visible: true, sortable: true },
        { key: "updated", label: "Updated", width: 160, visible: true, sortable: true },
    ];

    const initialData = [
        { id: 101, name: "Alice Brown", age: 72, risk: "High", status: "Active", careMgr: "J. Patel", updated: "2025-08-02", notes: "CHF | Needs RPM setup" },
        { id: 102, name: "Brian Chen", age: 64, risk: "Medium", status: "Pending", careMgr: "K. Lopez", updated: "2025-07-29", notes: "Post-op follow-up" },
        { id: 103, name: "Chitra Iyer", age: 78, risk: "High", status: "Active", careMgr: "J. Patel", updated: "2025-08-10", notes: "Frequent falls | HHA request" },
        { id: 104, name: "David King", age: 58, risk: "Low", status: "Discharged", careMgr: "M. Singh", updated: "2025-08-07", notes: "PT complete" },
        { id: 105, name: "Ella Garcia", age: 69, risk: "Medium", status: "Active", careMgr: "K. Lopez", updated: "2025-08-03", notes: "Medication review due" },
    ];

    /* ====== Refs to emulate DOM elements if needed ====== */
    const leftBarRef = useRef(null);
    const rightBarRef = useRef(null);
    const listPaneRef = useRef(null);
    const rightListPaneRef = useRef(null);
    const gutterABRef = useRef(null);
    const gutterBCRef = useRef(null);

    /* ====== State ====== */
    const [columns, setColumns] = useState(() => {
        // restore if in localStorage
        try {
            const raw = localStorage.getItem("mcp.cols");
            if (raw) {
                const arr = JSON.parse(raw);
                const cols = initialColumns.map((c) => {
                    const found = arr.find((x) => x.k === c.key);
                    return found ? { ...c, visible: found.v } : c;
                });
                return cols;
            }
        } catch (e) { }
        return initialColumns;
    });

    const [data, setData] = useState(initialData);
    const [sort, setSort] = useState({ key: "updated", dir: "desc" });
    const [filters, setFilters] = useState({});
    const [globalSearch, setGlobalSearch] = useState("");
    const [selected, setSelected] = useState(new Set());
    const [view, setView] = useState("grid"); // 'grid' or 'list'
    const [compactMode, setCompactMode] = useState(""); // "compact","comfortable","dense","striped" - stored as class on table
    const [savedViews, setSavedViews] = useState(() => JSON.parse(localStorage.getItem("mcp.views") || "[]"));
    const [expandedRows, setExpandedRows] = useState(() => new Set());
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerPatient, setDrawerPatient] = useState(null);
    const [activities, setActivities] = useState(() => new Map()); // id -> array of activities
    const [colMenuOpen, setColMenuOpen] = useState(false);
    const [viewsMenuOpen, setViewsMenuOpen] = useState(false);
    const [listViewMenuOpen, setListViewMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("activity"); // 'call', 'message', 'activity'
    const [showToast, setShowToast] = useState(false);
    const [showDashboardPanel, setShowDashboardPanel] = useState(false);
    const [showTenantSetup, setShowTenantSetup] = useState(false);
    const [showDataReporting, setShowDataReporting] = useState(false);
    const [showMasterTables, setShowMasterTables] = useState(false);
    const [showEmailTemplates, setShowEmailTemplates] = useState(false);
    const [showScheduling, setShowScheduling] = useState(false);
    const [showUserManagement, setShowUserManagement] = useState(false);
    const [taskModalOpen, setTaskModalOpen] = useState(false);
    const [taskModalPatient, setTaskModalPatient] = useState(null);
    const [shareModalOpen, setShareModalOpen] = useState(false);
    const [shareModalPatient, setShareModalPatient] = useState(null);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [patientDetailTab, setPatientDetailTab] = useState('overview');

    // Refs for drawer inputs
    const callNumberRef = useRef(null);
    const msgToRef = useRef(null);
    const msgTextRef = useRef(null);

    /* ====== Derived values ====== */
    const visibleColumns = useMemo(() => columns.filter((c) => c.visible), [columns]);

    /* ====== Helpers: persist columns, views ====== */
    useEffect(() => {
        localStorage.setItem("mcp.cols", JSON.stringify(columns.map((c) => ({ k: c.key, v: c.visible }))));
    }, [columns]);

    useEffect(() => {
        localStorage.setItem("mcp.views", JSON.stringify(savedViews));
    }, [savedViews]);

    /* ====== Sorting & Filtering ====== */
    function toggleSort(key) {
        setSort((s) => {
            if (s.key === key) return { key, dir: s.dir === "asc" ? "desc" : "asc" };
            return { key, dir: "asc" };
        });
    }

    function handleFilterChange(key, value) {
        setFilters((f) => ({ ...f, [key]: value }));
    }

    function clearFilters() {
        setFilters({});
        setGlobalSearch("");
    }

    function getFilteredData() {
        const text = globalSearch.trim().toLowerCase();
        const filtered = data.filter((row) => {
            for (const [k, v] of Object.entries(filters)) {
                if (!v) continue;
                const cell = String(row[k] ?? "").toLowerCase();
                if (!cell.includes(v.toLowerCase())) return false;
            }
            if (text) {
                const match = Object.keys(row).some((k) => String(row[k]).toLowerCase().includes(text));
                if (!match) return false;
            }
            return true;
        });
        // sort
        const dir = sort.dir === "asc" ? 1 : -1;
        filtered.sort((a, b) => {
            const va = a[sort.key], vb = b[sort.key];
            if (va == null && vb == null) return 0;
            if (va == null) return -1 * dir;
            if (vb == null) return 1 * dir;
            if (typeof va === "number" && typeof vb === "number") return (va - vb) * dir;
            return String(va).localeCompare(String(vb)) * dir;
        });
        return filtered;
    }

    const rows = useMemo(getFilteredData, [data, filters, globalSearch, sort]);

    /* ====== Select All checkbox ====== */
    function toggleSelectAll(checked) {
        if (checked) {
            setSelected(new Set(rows.map((r) => r.id)));
        } else {
            setSelected(new Set());
        }
    }

    function toggleRowSelect(id, checked) {
        setSelected((prev) => {
            const next = new Set(prev);
            if (checked) next.add(id); else next.delete(id);
            return next;
        });
    }

    /* ====== Row expansion toggle ====== */
    function toggleExpandRow(id) {
        setExpandedRows((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id); else next.add(id);
            return next;
        });
    }

    /* ====== Drawer & Activities ====== */
    function iconSVG(type) {
        if (type === "Call") return (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M6.6 10.8c1.4 2.6 3.9 5.1 6.5 6.5l2.2-2.2a1 1 0 0 1 1-.25c1.1.36 2.3.55 3.5.55a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C11.3 21 3 12.7 3 3.2a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.2.19 2.4.55 3.5a1 1 0 0 1-.25 1L6.6 10.8z" /></svg>);
        if (type === "Message") return (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2zm3 5h10v2H7V9zm0 4h7v2H7v-2z" /></svg>);
        return (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M6 2h12a2 2 0 0 1 2 2v16l-4-3H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /></svg>);
    }

    function addActivity(id, entry) {
        setActivities((prev) => {
            const next = new Map(prev);
            const arr = next.get(id) || [];
            const full = { ts: new Date().toISOString(), type: "Note", status: "info", text: "", progress: 0, live: false, ...entry };
            arr.unshift(full);
            next.set(id, arr);
            return next;
        });
    }

    function completeLiveCall(id) {
        setActivities((prev) => {
            const next = new Map(prev);
            const arr = next.get(id) || [];
            const live = arr.find((a) => a.type === "Call" && a.live);
            if (live) {
                live.live = false;
                live.status = "completed";
                live.progress = 100;
            }
            next.set(id, arr);
            return next;
        });
    }

    function openDrawer(patient, startTab = "activity") {
        setDrawerPatient(patient);
        setDrawerOpen(true);
        setActiveTab(startTab);
        // show requested tab via stateful approach; here we simply set the drawer open and can switch view inside JSX
        if (startTab === "call") {
            addActivity(patient.id, { type: "Call", status: "dialing", text: "Opened dialer", progress: 10, live: true });
        } else if (startTab === "message") {
            addActivity(patient.id, { type: "Message", status: "composing", text: "Composing message", progress: 25 });
        }
    }

    function closeDrawer() {
        setDrawerOpen(false);
        setDrawerPatient(null);
    }

    /* ====== Views handling (save/load) ====== */
    function saveCurrentViewPrompt() {
        const name = window.prompt("Save view as:");
        if (!name) return;
        const viewObj = { name, sort, filters, cols: columns.map((c) => ({ key: c.key, visible: c.visible })) };
        setSavedViews((prev) => [...prev, viewObj]);
        setViewsMenuOpen(true);
    }

    function applySavedView(idx) {
        const vv = savedViews[idx];
        if (!vv) return;
        setSort(vv.sort || { key: "updated", dir: "desc" });
        setFilters(vv.filters || {});
        setColumns((cols) => cols.map((c) => {
            const found = vv.cols.find((x) => x.key === c.key);
            return found ? { ...c, visible: found.visible } : c;
        }));
    }

    function deleteSavedView(idx) {
        setSavedViews((prev) => prev.filter((_, i) => i !== idx));
    }

    /* ====== share link (encode state in hash) */
    function copyShareableLink() {
        const payload = { sort, filters, cols: columns.map((c) => ({ key: c.key, visible: c.visible })) };
        const encoded = encodeURIComponent(btoa(JSON.stringify(payload)));
        const url = window.location.origin + window.location.pathname + "#v=" + encoded;
        navigator.clipboard.writeText(url).then(() => alert("Shareable view link copied to clipboard."));
    }

    /* ====== Row action handlers (call/message/log) ====== */
    function handleRowAction(action, id) {
        const patient = data.find((d) => d.id === id);
        if (!patient) return;
        if (action === "call") {
            openDrawer(patient, "call");
        } else if (action === "msg") {
            openDrawer(patient, "message");
        } else {
            openDrawer(patient, "activity");
        }
    }

    /* ====== Column menu change ====== */
    function toggleColumnVisible(key) {
        setColumns((prev) => prev.map((c) => c.key === key ? { ...c, visible: !c.visible } : c));
    }

    /* ====== init: restore saved views etc. ====== */
    useEffect(() => {
        try {
            const raw = localStorage.getItem("mcp.views");
            if (raw) setSavedViews(JSON.parse(raw));
        } catch (e) { /* ignore */ }
    }, []);

    /* ====== simple resizers for left/right panes (pointer events) ====== */
    useEffect(() => {
        const leftEl = listPaneRef.current;
        const rightEl = rightListPaneRef.current;
        const handleAB = gutterABRef.current;
        const handleBC = gutterBCRef.current;
        if (handleAB && leftEl) {
            let dragging = false, startX = 0, startW = 0;
            const MIN = 220, MAX = 600;
            function apply(px) { leftEl.style.width = Math.min(MAX, Math.max(MIN, px)) + "px"; }
            function onDown(e) { dragging = true; startX = e.clientX; startW = leftEl.getBoundingClientRect().width; handleAB.setPointerCapture?.(e.pointerId); document.body.classList.add("select-none"); }
            function onMove(e) { if (!dragging) return; const dx = e.clientX - startX; apply(startW + dx); }
            function onUp(e) { dragging = false; document.body.classList.remove("select-none"); try { handleAB.releasePointerCapture?.(e.pointerId); } catch (err) { } }
            handleAB.addEventListener("pointerdown", onDown);
            window.addEventListener("pointermove", onMove);
            window.addEventListener("pointerup", onUp);
            return () => {
                handleAB.removeEventListener("pointerdown", onDown);
                window.removeEventListener("pointermove", onMove);
                window.removeEventListener("pointerup", onUp);
            };
        }
        // right resizer
        if (handleBC && rightEl) {
            let dragging = false, startX = 0, startW = 0;
            const MIN = 220, MAX = 560;
            function apply(px) { rightEl.style.width = Math.min(MAX, Math.max(MIN, px)) + "px"; }
            function onDown(e) { dragging = true; startX = e.clientX; startW = rightEl.getBoundingClientRect().width; handleBC.setPointerCapture?.(e.pointerId); document.body.classList.add("select-none"); }
            function onMove(e) { if (!dragging) return; const dx = startX - e.clientX; apply(startW + dx); }
            function onUp(e) { dragging = false; document.body.classList.remove("select-none"); try { handleBC.releasePointerCapture?.(e.pointerId); } catch (err) { } }
            handleBC.addEventListener("pointerdown", onDown);
            window.addEventListener("pointermove", onMove);
            window.addEventListener("pointerup", onUp);
            return () => {
                handleBC.removeEventListener("pointerdown", onDown);
                window.removeEventListener("pointermove", onMove);
                window.removeEventListener("pointerup", onUp);
            };
        }
    }, []);

    /* ====== Activity Timer (Live Calls) ====== */
    useEffect(() => {
        const interval = setInterval(() => {
            setActivities((prev) => {
                let changed = false;
                const next = new Map(prev);
                for (const [id, list] of next.entries()) {
                    const newList = list.map(a => {
                        if (a.type === "Call" && a.live && a.progress < 90) {
                            changed = true;
                            return { ...a, progress: a.progress + 10 };
                        }
                        return a;
                    });
                    if (changed) next.set(id, newList);
                }
                return changed ? next : prev;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    /* ====== Global Click Handler (Close Menus) ====== */
    useEffect(() => {
        function handleClickOutside(e) {
            // Close Col Menu
            if (colMenuOpen && !e.target.closest("#colBtn") && !e.target.closest("#colMenu")) {
                setColMenuOpen(false);
            }
            // Close Views Menu
            if (viewsMenuOpen && !e.target.closest("#saveFilterBtn") && !e.target.closest("#viewsMenu")) {
                setViewsMenuOpen(false);
            }
            // Close Row Menu (if implemented as state, currently it's DOM toggle in original code, but let's leave it for now or fix it)
            const rowMenu = document.getElementById("rowMenu");
            if (rowMenu && !rowMenu.classList.contains("hidden") && !e.target.closest("#rowMenuBtn") && !e.target.closest("#rowMenu")) {
                rowMenu.classList.add("hidden");
            }
            // Close List View Options
            if (listViewMenuOpen && !e.target.closest("#listViewOptionsBtn") && !e.target.closest("#listViewOptionsMenu")) {
                setListViewMenuOpen(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [colMenuOpen, viewsMenuOpen]);

    /* ====== Toast Notification ====== */
    useEffect(() => {
        setShowToast(true);
        const timer = setTimeout(() => setShowToast(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    /* ====== Right Sidebar Button Handlers ====== */
    useEffect(() => {
        const handleEmailTemplatesClick = () => {
            setShowEmailTemplates(true);
        };

        const handleSchedulingClick = () => {
            setShowScheduling(true);
        };

        const emailTemplatesBtn = document.getElementById('openEmailTemplates');
        const schedulingBtn = document.getElementById('openScheduling');
        if (emailTemplatesBtn) {
            emailTemplatesBtn.addEventListener('click', handleEmailTemplatesClick);
        }
        if (schedulingBtn) {
            schedulingBtn.addEventListener('click', handleSchedulingClick);
        }

        return () => {
            if (emailTemplatesBtn) {
                emailTemplatesBtn.removeEventListener('click', handleEmailTemplatesClick);
            }
            if (schedulingBtn) {
                schedulingBtn.removeEventListener('click', handleSchedulingClick);
            }
        };
    }, []);

    /* ====== UI Render helpers ====== */
    function renderRiskBadge(val) {
        const tone = val === "High" ? "bg-red-100 text-red-700" : val === "Medium" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700";
        return <span className={`px-2 py-0.5 rounded ${tone} text-[11px]`}>{val}</span>;
    }

    function renderStatusBadge(val) {
        return <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[11px]">{val}</span>;
    }

    /* ====== UI JSX ====== */
    return (
        <div className="h-screen w-screen bg-neutral-50 text-neutral-900">
            {/* Inline styles from original file */}
            <style>{`
        /* ====== Layout bits ====== */
        .gutter { width: 8px; cursor: col-resize; user-select: none; position: relative; flex: 0 0 8px; touch-action: none }
        .gutter::after { content: ""; position: absolute; inset: 0; width: 2px; margin: 0 auto; background: rgba(0,0,0,.08); border-radius:1px }
        .gutter:hover::after, .gutter:focus-visible::after { background: rgba(0,0,0,.2) }
        .tooltip { position: absolute; left: 100%; top: 50%; transform: translateY(-50%); white-space: nowrap; font-size: 12px; background: rgba(17,24,39,.96); color:#fff; padding:.25rem .5rem; border-radius:.375rem; box-shadow:0 8px 24px rgba(0,0,0,.2); opacity:0; pointer-events:none; transition:opacity .12s ease; margin-left:.5rem }
        .nav-item:hover .tooltip { opacity:1 }
        #rightBar .tooltip { left:auto; right:100%; margin-left:0; margin-right:.5rem }
        .nav-item .tooltip::after { content:""; position:absolute; top:50%; left:-4px; transform:translateY(-50%); border:6px solid transparent; border-right-color: rgba(17,24,39,.96) }
        #rightBar .tooltip::after { left:auto; right:-4px; border-right-color:transparent; border-left-color: rgba(17,24,39,.96) }

        #dataTable.compact td, #dataTable.compact th { padding-top:.25rem; padding-bottom:.25rem }
        #dataTable.comfortable td, #dataTable.comfortable th { padding-top:1rem; padding-bottom:1rem }
        #dataTable.dense td, #dataTable.dense th { padding-top:.1rem; padding-bottom:.1rem; font-size:12px }
        #dataTable.striped tbody tr:nth-child(even) { background-color: #f9fafb }

        /* List View Modes */
        #listWrap.compact { gap: 0.5rem; }
        #listWrap.compact .rc-card-item { padding: 0.5rem; }
        #listWrap.dense { gap: 0.25rem; }
        #listWrap.dense .rc-card-item { padding: 0.35rem; font-size: 12px; }
        #listWrap.comfortable { gap: 1rem; }
        #listWrap.comfortable .rc-card-item { padding: 1.25rem; }
        #listWrap.striped .rc-card-item:nth-child(even) { background-color: #f9fafb; }

        .drawer { position: fixed; top: 56px; right: 0; height: calc(100vh - 56px); width: 420px; background:#fff; border-left:1px solid #e5e7eb; box-shadow:-10px 0 30px rgba(0,0,0,.08); transform: translateX(100%); transition: transform .2s ease; will-change: transform; z-index:50 }
        .drawer.open { transform: translateX(0) }
        .drawer-mask { position: fixed; inset: 56px 0 0 0; background: rgba(17,24,39,.35); backdrop-filter: saturate(120%) blur(1px); opacity:0; pointer-events:none; transition: opacity .2s ease; z-index:40 }
        .drawer-mask.show { opacity:1; pointer-events:auto }

        .activity-item { display:grid; grid-template-columns: 32px 1fr auto; gap:.5rem; align-items:start }
        .activity-icon { width:28px; height:28px; border-radius:.5rem; display:grid; place-items:center }
        .icon-phone { background:#eef2ff; color:#4338ca }
        .icon-msg { background:#ecfeff; color:#0369a1 }
        .icon-note { background:#fef3c7; color:#b45309 }
        .progress { height:8px; border-radius:9999px; background:#f3f4f6; overflow:hidden; border:1px solid #e5e7eb }
        .progress-bar { height:100%; width:0%; background:#111827; border-radius:9999px; transition: width .35s ease }
        .progress--success .progress-bar { background:#16a34a }
        .progress--warning .progress-bar { background:#f59e0b }
        .progress--danger .progress-bar { background:#dc2626 }
        .badge { font-size:10px; border:1px solid #e5e7eb; border-radius:.375rem; padding:.1rem .35rem; color:#525252 }
      `}</style>
            <div className="flex flex-col h-full">
                {/* TOP BAR */}                
                <Header globalSearch={globalSearch} setGlobalSearch={setGlobalSearch} />
                {/* MAIN */}
                <div className="flex flex-1 min-h-0">
                    {/* LEFT ICON SIDEBAR */}
                                        <LeftSidebar
                      leftBarRef={leftBarRef}
                                            onCollapse={() => {
                        const cur = getComputedStyle(leftBarRef.current).width === "16px" ? "4rem" : "16px";
                        leftBarRef.current.style.width = cur;
                      }}
                                                                                        onShowDashboard={() => {
                          setShowTenantSetup(false);
                          setShowDataReporting(false);
                          setShowMasterTables(false);
                          setShowEmailTemplates(false);
                          setShowScheduling(false);
                          setShowUserManagement(false);
                          setShowDashboardPanel(true);
                        }}
                                                                                        onShowTenantSetup={() => {
                          setShowDashboardPanel(false);
                          setShowDataReporting(false);
                          setShowMasterTables(false);
                          setShowEmailTemplates(false);
                          setShowScheduling(false);
                          setShowUserManagement(false);
                          setShowTenantSetup(true);
                        }}
                                                                                        onShowDataReporting={() => {
                          setShowDashboardPanel(false);
                          setShowTenantSetup(false);
                          setShowMasterTables(false);
                          setShowEmailTemplates(false);
                          setShowScheduling(false);
                          setShowUserManagement(false);
                          setShowDataReporting(true);
                        }}
                                                                                        onShowMasterTables={() => {
                          setShowDashboardPanel(false);
                          setShowTenantSetup(false);
                          setShowDataReporting(false);
                          setShowEmailTemplates(false);
                          setShowScheduling(false);
                          setShowUserManagement(false);
                          setShowMasterTables(true);
                        }}
                                                                                        onShowUserManagement={() => { 
                          setShowTenantSetup(false);
                          setShowDataReporting(false);
                          setShowMasterTables(false);
                          setShowEmailTemplates(false);
                          setShowScheduling(false);
                          setShowDashboardPanel(false);
                          setShowUserManagement(true); 
                        }}
                    />

                    {/* APP COLUMN */}
                    <div id="appCol" className="flex-1 min-w-0 flex">
                        {/* LEFT SECONDARY LIST */}
                        <section id="listPane" ref={listPaneRef} className="w-[300px] min-w-[220px] max-w-[440px] bg-white border-r border-neutral-200 flex flex-col">
                            <div className="h-12 px-3 flex items-center justify-between border-b border-neutral-200">
                                <div className="text-sm font-semibold">Patients</div>
                                <div className="flex items-center gap-1">
                                    <button className="h-8 w-8 rounded-lg hover:bg-neutral-100" title="Refresh"
                                        onClick={() => { /* you can add refresh logic */ }}>
                                        <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4v6h6M20 20v-6h-6M20 9a8 8 0 10-3.3 6.5" /></svg>
                                    </button>
                                </div>
                            </div>
                            <div id="listItems" className="flex-1 overflow-y-auto divide-y divide-neutral-200 text-sm">
                                {rows.map((r) => (
                                    <div key={r.id} className={`px-3 py-3 hover:bg-neutral-50 cursor-pointer ${selectedPatient?.id === r.id ? 'bg-blue-50 border-l-2 border-blue-500' : ''}`} onClick={() => {
                                        setSelectedPatient(r);
                                        setPatientDetailTab('overview');
                                    }}>
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm font-medium">{r.name}</div>
                                            <span className="text-[11px] text-neutral-500">{r.updated}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="text-xs text-neutral-500 truncate flex-1">Risk: {r.risk} • {r.status} • {r.careMgr}</div>
                                            {/* Action Icons */}
                                            <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                                                {/* Task Icon */}
                                                <button 
                                                    className="w-5 h-5 rounded flex items-center justify-center hover:bg-purple-100 text-purple-500 transition-colors"
                                                    title="Create Task"
                                                    onClick={(e) => { e.stopPropagation(); setTaskModalPatient(r); setTaskModalOpen(true); }}
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                                    </svg>
                                                </button>
                                                {/* Lightning/Quick Action Icon */}
                                                <button 
                                                    className="w-5 h-5 rounded flex items-center justify-center hover:bg-amber-100 text-amber-500 transition-colors"
                                                    title="Quick Action"
                                                    onClick={(e) => { e.stopPropagation(); openDrawer(r, "action"); }}
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                </button>
                                                {/* Message Icon */}
                                                <button 
                                                    className="w-5 h-5 rounded flex items-center justify-center hover:bg-blue-100 text-blue-500 transition-colors"
                                                    title="Chat"
                                                    onClick={(e) => { e.stopPropagation(); openDrawer(r, "chat"); }}
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                    </svg>
                                                </button>
                                                {/* Share Icon */}
                                                <button 
                                                    className="w-5 h-5 rounded flex items-center justify-center hover:bg-green-100 text-green-500 transition-colors"
                                                    title="Share"
                                                    onClick={(e) => { e.stopPropagation(); setShareModalPatient(r); setShareModalOpen(true); }}
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                        <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Resizer: Patients list <-> Detail */}
                        <div id="gutterAB" ref={gutterABRef} className="gutter" role="separator" aria-orientation="vertical" tabIndex="0" title="Drag to resize"></div>

                        {/* DETAIL PANE */}
                        <section id="detailPane" className="flex-1 min-w-[420px] bg-white flex flex-col">
                            {showTenantSetup ? (
                                <TenantSetup onClose={() => setShowTenantSetup(false)} />
                            ) : showDataReporting ? (
                                <DataReporting onClose={() => setShowDataReporting(false)} />
                            ) : showMasterTables ? (
                                <MasterTables onClose={() => setShowMasterTables(false)} />
                            ) : showEmailTemplates ? (
                                <EmailTemplates onClose={() => setShowEmailTemplates(false)} />
                            ) : showScheduling ? (
                                <Scheduling onClose={() => setShowScheduling(false)} />
                            ) : showUserManagement ? (
                                <UserManagement onClose={() => setShowUserManagement(false)} />
                            ) : showDashboardPanel ? (
                                <NewDashboard onClose={() => setShowDashboardPanel(false)} />
                            ) : selectedPatient ? (
                                /* Patient Detail View */
                                <div className="flex flex-col h-full">
                                    {/* Patient Header */}
                                    <div className="px-5 py-4 border-b border-neutral-200 bg-white">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-green-500 text-white text-lg font-semibold flex items-center justify-center">
                                                    {selectedPatient.name?.split(' ').map(n => n[0]).join('').slice(0, 2) || 'PT'}
                                                </div>
                                                <div>
                                                    <h2 className="text-lg font-semibold text-neutral-900">{selectedPatient.name}</h2>
                                                    <p className="text-sm text-neutral-500">ID: {selectedPatient.id} • Care Manager: {selectedPatient.careMgr}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button className="h-9 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2">
                                                    Patient Info
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                        <path d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                <button 
                                                    onClick={() => setSelectedPatient(null)}
                                                    className="h-9 w-9 rounded-lg hover:bg-neutral-100 flex items-center justify-center"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                        <path d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Patient Tabs */}
                                    <div className="border-b border-neutral-200 bg-white">
                                        <div className="flex gap-1 px-5 overflow-x-auto">
                                            {['Overview', 'Medications', 'Appointments', 'Care Plan', 'Vitals', 'Documents', 'Billing', 'History'].map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setPatientDetailTab(tab.toLowerCase().replace(' ', '-'))}
                                                    className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                                                        patientDetailTab === tab.toLowerCase().replace(' ', '-')
                                                            ? 'text-blue-600 border-blue-600'
                                                            : 'text-neutral-600 border-transparent hover:text-neutral-900 hover:border-neutral-300'
                                                    }`}
                                                >
                                                    {tab}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Timeline Slider */}
                                    <div className="px-5 py-2 bg-white border-b border-neutral-200 flex items-center gap-2">
                                        <button className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-neutral-600">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <div className="flex-1 relative">
                                            <div className="h-1.5 bg-neutral-200 rounded-full">
                                                <div className="h-full w-1/3 bg-neutral-400 rounded-full"></div>
                                            </div>
                                            <div className="absolute left-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-600 rounded-full border-2 border-white shadow cursor-pointer"></div>
                                        </div>
                                        <button className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-neutral-600">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Search and Filters */}
                                    <div className="px-5 py-3 border-b border-neutral-200 bg-white flex items-center gap-3">
                                        <div className="relative flex-1 max-w-md">
                                            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                            <input 
                                                type="text" 
                                                placeholder="Search in current tab..." 
                                                className="w-full h-9 pl-10 pr-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <select className="h-9 px-3 rounded-lg border border-neutral-300 text-sm">
                                                <option>This Month</option>
                                                <option>This Week</option>
                                                <option>Today</option>
                                                <option>All Time</option>
                                            </select>
                                            <select className="h-9 px-3 rounded-lg border border-neutral-300 text-sm">
                                                <option>All Status</option>
                                                <option>Active</option>
                                                <option>Pending</option>
                                                <option>Completed</option>
                                            </select>
                                            <select className="h-9 px-3 rounded-lg border border-neutral-300 text-sm">
                                                <option>Newest First</option>
                                                <option>Oldest First</option>
                                            </select>
                                            <button className="h-9 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                Clear
                                            </button>
                                            <button className="h-9 px-4 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                Export
                                            </button>
                                        </div>
                                    </div>

                                    {/* Patient Content */}
                                    <div className="flex-1 overflow-y-auto p-5 bg-neutral-50">
                                        {/* Overview Tab */}
                                        {patientDetailTab === 'overview' && (
                                            <>
                                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Patient Overview</h3>
                                                <div className="bg-white rounded-xl border border-neutral-200 p-4 mb-4">
                                                    <h4 className="text-sm font-semibold text-neutral-900 mb-3">Recent Activity</h4>
                                                    <p className="text-sm text-neutral-500">No recent activity recorded.</p>
                                                </div>
                                                <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                    <h4 className="text-sm font-semibold text-neutral-900 mb-4">Quick Stats</h4>
                                                    <div className="grid grid-cols-3 gap-6">
                                                        <div>
                                                            <div className="text-3xl font-bold text-blue-600">0</div>
                                                            <div className="text-sm text-neutral-500">Appointments</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-3xl font-bold text-green-600">0</div>
                                                            <div className="text-sm text-neutral-500">Medications</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-3xl font-bold text-purple-600">0</div>
                                                            <div className="text-sm text-neutral-500">Documents</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* Medications Tab */}
                                        {patientDetailTab === 'medications' && (
                                            <>
                                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Medications</h3>
                                                <div className="bg-white rounded-xl border border-neutral-200 p-4 mb-4">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h4 className="text-sm font-semibold text-neutral-900">Current Medications</h4>
                                                        <button className="h-8 px-3 rounded-lg bg-blue-600 text-white text-xs hover:bg-blue-700">+ Add Medication</button>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                                            <div>
                                                                <div className="text-sm font-medium text-neutral-900">Lisinopril 10mg</div>
                                                                <div className="text-xs text-neutral-500">Once daily • Started: Jan 15, 2025</div>
                                                            </div>
                                                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Active</span>
                                                        </div>
                                                        <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                                            <div>
                                                                <div className="text-sm font-medium text-neutral-900">Metformin 500mg</div>
                                                                <div className="text-xs text-neutral-500">Twice daily • Started: Feb 20, 2025</div>
                                                            </div>
                                                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Active</span>
                                                        </div>
                                                        <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                                            <div>
                                                                <div className="text-sm font-medium text-neutral-900">Aspirin 81mg</div>
                                                                <div className="text-xs text-neutral-500">Once daily • Started: Mar 10, 2025</div>
                                                            </div>
                                                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Active</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                    <h4 className="text-sm font-semibold text-neutral-900 mb-3">Medication History</h4>
                                                    <p className="text-sm text-neutral-500">No discontinued medications.</p>
                                                </div>
                                            </>
                                        )}

                                        {/* Appointments Tab */}
                                        {patientDetailTab === 'appointments' && (
                                            <>
                                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Appointments</h3>
                                                <div className="bg-white rounded-xl border border-neutral-200 p-4 mb-4">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h4 className="text-sm font-semibold text-neutral-900">Upcoming Appointments</h4>
                                                        <button className="h-8 px-3 rounded-lg bg-blue-600 text-white text-xs hover:bg-blue-700">+ Schedule</button>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-4 p-3 bg-neutral-50 rounded-lg">
                                                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex flex-col items-center justify-center">
                                                                <span className="text-xs font-bold text-blue-600">DEC</span>
                                                                <span className="text-lg font-bold text-blue-600">15</span>
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="text-sm font-medium text-neutral-900">Follow-up Visit</div>
                                                                <div className="text-xs text-neutral-500">10:00 AM • Dr. Smith • Cardiology</div>
                                                            </div>
                                                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Confirmed</span>
                                                        </div>
                                                        <div className="flex items-center gap-4 p-3 bg-neutral-50 rounded-lg">
                                                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex flex-col items-center justify-center">
                                                                <span className="text-xs font-bold text-purple-600">DEC</span>
                                                                <span className="text-lg font-bold text-purple-600">22</span>
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="text-sm font-medium text-neutral-900">Lab Work</div>
                                                                <div className="text-xs text-neutral-500">9:00 AM • Quest Diagnostics</div>
                                                            </div>
                                                            <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">Pending</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                    <h4 className="text-sm font-semibold text-neutral-900 mb-3">Past Appointments</h4>
                                                    <div className="text-sm text-neutral-500">3 appointments in the last 30 days</div>
                                                </div>
                                            </>
                                        )}

                                        {/* Care Plan Tab */}
                                        {patientDetailTab === 'care-plan' && (
                                            <>
                                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Care Plan</h3>
                                                <div className="bg-white rounded-xl border border-neutral-200 p-4 mb-4">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h4 className="text-sm font-semibold text-neutral-900">Active Goals</h4>
                                                        <button className="h-8 px-3 rounded-lg bg-blue-600 text-white text-xs hover:bg-blue-700">+ Add Goal</button>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div className="p-3 bg-neutral-50 rounded-lg">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <div className="text-sm font-medium text-neutral-900">Blood Pressure Control</div>
                                                                <span className="text-xs text-green-600 font-medium">75% Complete</span>
                                                            </div>
                                                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                                                <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                                                            </div>
                                                            <div className="text-xs text-neutral-500 mt-2">Target: &lt;130/80 mmHg</div>
                                                        </div>
                                                        <div className="p-3 bg-neutral-50 rounded-lg">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <div className="text-sm font-medium text-neutral-900">Weight Management</div>
                                                                <span className="text-xs text-amber-600 font-medium">40% Complete</span>
                                                            </div>
                                                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                                                <div className="bg-amber-500 h-2 rounded-full" style={{width: '40%'}}></div>
                                                            </div>
                                                            <div className="text-xs text-neutral-500 mt-2">Target: Lose 10 lbs</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                    <h4 className="text-sm font-semibold text-neutral-900 mb-3">Care Team Notes</h4>
                                                    <p className="text-sm text-neutral-500">Patient is making good progress. Continue current treatment plan.</p>
                                                </div>
                                            </>
                                        )}

                                        {/* Vitals Tab */}
                                        {patientDetailTab === 'vitals' && (
                                            <>
                                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Vitals</h3>
                                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                                    <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                        <div className="text-xs text-neutral-500 mb-1">Blood Pressure</div>
                                                        <div className="text-2xl font-bold text-neutral-900">128/82</div>
                                                        <div className="text-xs text-green-600">Normal</div>
                                                    </div>
                                                    <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                        <div className="text-xs text-neutral-500 mb-1">Heart Rate</div>
                                                        <div className="text-2xl font-bold text-neutral-900">72 bpm</div>
                                                        <div className="text-xs text-green-600">Normal</div>
                                                    </div>
                                                    <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                        <div className="text-xs text-neutral-500 mb-1">Temperature</div>
                                                        <div className="text-2xl font-bold text-neutral-900">98.6°F</div>
                                                        <div className="text-xs text-green-600">Normal</div>
                                                    </div>
                                                    <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                        <div className="text-xs text-neutral-500 mb-1">Weight</div>
                                                        <div className="text-2xl font-bold text-neutral-900">165 lbs</div>
                                                        <div className="text-xs text-amber-600">+2 lbs from last visit</div>
                                                    </div>
                                                </div>
                                                <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                    <h4 className="text-sm font-semibold text-neutral-900 mb-3">Vitals History</h4>
                                                    <div className="h-40 flex items-center justify-center text-neutral-400 text-sm">Chart placeholder - Vitals trend over time</div>
                                                </div>
                                            </>
                                        )}

                                        {/* Documents Tab */}
                                        {patientDetailTab === 'documents' && (
                                            <>
                                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Documents</h3>
                                                <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h4 className="text-sm font-semibold text-neutral-900">Patient Documents</h4>
                                                        <button className="h-8 px-3 rounded-lg bg-blue-600 text-white text-xs hover:bg-blue-700">+ Upload</button>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 cursor-pointer">
                                                            <div className="flex items-center gap-3">
                                                                <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zm-3 9v6h2v-6h2l-3-3-3 3h2z"/></svg>
                                                                <div>
                                                                    <div className="text-sm font-medium text-neutral-900">Lab Results - Dec 2025.pdf</div>
                                                                    <div className="text-xs text-neutral-500">Uploaded Dec 10, 2025 • 245 KB</div>
                                                                </div>
                                                            </div>
                                                            <button className="text-blue-600 text-xs hover:underline">Download</button>
                                                        </div>
                                                        <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 cursor-pointer">
                                                            <div className="flex items-center gap-3">
                                                                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 12h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>
                                                                <div>
                                                                    <div className="text-sm font-medium text-neutral-900">Insurance Card.png</div>
                                                                    <div className="text-xs text-neutral-500">Uploaded Nov 15, 2025 • 1.2 MB</div>
                                                                </div>
                                                            </div>
                                                            <button className="text-blue-600 text-xs hover:underline">Download</button>
                                                        </div>
                                                        <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 cursor-pointer">
                                                            <div className="flex items-center gap-3">
                                                                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8 12h8v2H8v-2zm0 4h5v2H8v-2z"/></svg>
                                                                <div>
                                                                    <div className="text-sm font-medium text-neutral-900">Consent Form.docx</div>
                                                                    <div className="text-xs text-neutral-500">Uploaded Oct 20, 2025 • 89 KB</div>
                                                                </div>
                                                            </div>
                                                            <button className="text-blue-600 text-xs hover:underline">Download</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* Billing Tab */}
                                        {patientDetailTab === 'billing' && (
                                            <>
                                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Billing</h3>
                                                <div className="grid grid-cols-3 gap-4 mb-4">
                                                    <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                        <div className="text-xs text-neutral-500 mb-1">Total Balance</div>
                                                        <div className="text-2xl font-bold text-neutral-900">$245.00</div>
                                                    </div>
                                                    <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                        <div className="text-xs text-neutral-500 mb-1">Insurance</div>
                                                        <div className="text-2xl font-bold text-green-600">Active</div>
                                                    </div>
                                                    <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                        <div className="text-xs text-neutral-500 mb-1">Last Payment</div>
                                                        <div className="text-2xl font-bold text-neutral-900">$50.00</div>
                                                    </div>
                                                </div>
                                                <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h4 className="text-sm font-semibold text-neutral-900">Recent Invoices</h4>
                                                        <button className="h-8 px-3 rounded-lg bg-green-600 text-white text-xs hover:bg-green-700">Make Payment</button>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                                            <div>
                                                                <div className="text-sm font-medium text-neutral-900">INV-2025-0042</div>
                                                                <div className="text-xs text-neutral-500">Dec 5, 2025 • Office Visit</div>
                                                            </div>
                                                            <div className="text-right">
                                                                <div className="text-sm font-medium text-neutral-900">$125.00</div>
                                                                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Pending</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                                            <div>
                                                                <div className="text-sm font-medium text-neutral-900">INV-2025-0038</div>
                                                                <div className="text-xs text-neutral-500">Nov 20, 2025 • Lab Work</div>
                                                            </div>
                                                            <div className="text-right">
                                                                <div className="text-sm font-medium text-neutral-900">$120.00</div>
                                                                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full">Pending</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* History Tab */}
                                        {patientDetailTab === 'history' && (
                                            <>
                                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Patient History</h3>
                                                <div className="bg-white rounded-xl border border-neutral-200 p-4 mb-4">
                                                    <h4 className="text-sm font-semibold text-neutral-900 mb-4">Timeline</h4>
                                                    <div className="space-y-4">
                                                        <div className="flex gap-3">
                                                            <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                                                            <div>
                                                                <div className="text-sm font-medium text-neutral-900">Office Visit</div>
                                                                <div className="text-xs text-neutral-500">Dec 5, 2025 • Dr. Smith</div>
                                                                <div className="text-xs text-neutral-600 mt-1">Routine follow-up. Blood pressure stable.</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-3">
                                                            <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
                                                            <div>
                                                                <div className="text-sm font-medium text-neutral-900">Lab Results Received</div>
                                                                <div className="text-xs text-neutral-500">Nov 25, 2025</div>
                                                                <div className="text-xs text-neutral-600 mt-1">All values within normal range.</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-3">
                                                            <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
                                                            <div>
                                                                <div className="text-sm font-medium text-neutral-900">Medication Started</div>
                                                                <div className="text-xs text-neutral-500">Nov 20, 2025</div>
                                                                <div className="text-xs text-neutral-600 mt-1">Started Lisinopril 10mg daily.</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-3">
                                                            <div className="w-2 h-2 mt-2 bg-amber-500 rounded-full"></div>
                                                            <div>
                                                                <div className="text-sm font-medium text-neutral-900">Initial Consultation</div>
                                                                <div className="text-xs text-neutral-500">Nov 15, 2025 • Dr. Smith</div>
                                                                <div className="text-xs text-neutral-600 mt-1">Patient enrolled in care management program.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white rounded-xl border border-neutral-200 p-4">
                                                    <h4 className="text-sm font-semibold text-neutral-900 mb-3">Medical History Summary</h4>
                                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                                        <div>
                                                            <div className="text-neutral-500">Conditions</div>
                                                            <div className="text-neutral-900">Hypertension, Type 2 Diabetes</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-neutral-500">Allergies</div>
                                                            <div className="text-neutral-900">Penicillin</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-neutral-500">Surgeries</div>
                                                            <div className="text-neutral-900">Appendectomy (2018)</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-neutral-500">Family History</div>
                                                            <div className="text-neutral-900">Heart disease (father)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Patient Detail Bottom Toolbar */}
                                    <div className="h-12 px-4 border-t border-neutral-200 bg-white flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            {/* Grid/List Toggle */}
                                            <div className="inline-flex rounded-lg border border-neutral-300 overflow-hidden">
                                                <button className="px-3 h-8 text-sm bg-neutral-900 text-white">Grid</button>
                                                <button className="px-3 h-8 text-sm hover:bg-neutral-50">List</button>
                                            </div>

                                            {/* Icon buttons */}
                                            <button className="h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 6h16M4 12h10M4 18h6" /></svg>
                                            </button>
                                            <button className="h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M5 5h14v14H5z" /><path d="M9 5v6l3-2 3 2V5" /></svg>
                                            </button>

                                            {/* Options */}
                                            <button className="h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></svg>
                                                Options
                                            </button>

                                            {/* Clear */}
                                            <button className="h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50">
                                                Clear
                                            </button>

                                            {/* Refresh */}
                                            <button className="h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            {/* Add */}
                                            <button className="h-8 px-4 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700">Add</button>

                                            {/* Delete */}
                                            <button className="h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50">Delete</button>

                                            {/* Clone */}
                                            <button className="h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50">Clone</button>

                                            {/* More options */}
                                            <button className="h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" /></svg>
                                            </button>

                                            {/* Filter */}
                                            <button className="h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 5h18M6 10h12M10 15h4" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                            {false && showDashboardPanel ? (
                                <div id="dashboardView" className="flex flex-col h-full">
                                    <div className="h-14 px-4 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-indigo-50 to-white">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                            <div>
                                                <h2 className="text-base font-semibold text-neutral-900">XYZ Plan Dashboard</h2>
                                                <p className="text-xs text-neutral-500">Real-time insights and analytics</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="h-8 px-3 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50 flex items-center gap-1">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                                Export
                                            </button>
                                            <button className="h-8 w-8 rounded-lg hover:bg-neutral-100" onClick={() => setShowDashboardPanel(false)}>
                                                <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6"/></svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex-1 overflow-y-auto p-6 bg-neutral-50">
                                        <div id="dashOverview" className="dash-content">
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                                <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="text-xs font-semibold text-neutral-600">Total Patients</div>
                                                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                                                        </div>
                                                    </div>
                                                    <div className="text-2xl font-bold text-neutral-900">1,248</div>
                                                    <div className="flex items-center gap-1 mt-1">
                                                        <span className="text-xs text-green-600 font-medium">↑ 12%</span>
                                                        <span className="text-xs text-neutral-500">vs last month</span>
                                                    </div>
                                                </div>
                                                <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">Patient Enrollment Trend (chart placeholder)</div>
                                                <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">Patient Risk Distribution (chart placeholder)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                            <div className="h-12 px-3 lg:px-4 border-b border-neutral-200 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="inline-flex rounded-lg border border-neutral-300 overflow-hidden">
                                        <button id="gridViewBtn" className={`px-3 h-8 text-sm ${view === "grid" ? "bg-neutral-900 text-white" : ""}`} onClick={() => setView("grid")}>Grid</button>
                                        <button id="listViewBtn" className={`px-3 h-8 text-sm ${view === "list" ? "bg-neutral-900 text-white" : ""}`} onClick={() => setView("list")}>List</button>
                                    </div>

                                    <div className="relative">
                                        <button id="colBtn" className="h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2" onClick={(e) => { e.stopPropagation(); setColMenuOpen((s) => !s); }}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 6h16M4 12h10M4 18h6" /></svg>
                                        </button>
                                        {colMenuOpen && (
                                            <div id="colMenu" className="absolute z-10 mt-1 w-56 bg-white border border-neutral-200 rounded-xl shadow">
                                                <div className="p-2 text-xs font-semibold text-neutral-500">Show/Hide Columns</div>
                                                <div id="colChecks" className="max-h-64 overflow-y-auto p-2 space-y-1">
                                                    {columns.map((c) => (
                                                        <label key={c.key} className="flex items-center gap-2 text-sm">
                                                            <input type="checkbox" className="rounded border-neutral-300" checked={c.visible} onChange={() => toggleColumnVisible(c.key)} />
                                                            <span>{c.label}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="relative group">
                                        <button id="saveFilterBtn" className="h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2" title="Save current filters" onClick={() => { saveCurrentViewPrompt(); }}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M5 5h14v14H5z" /><path d="M9 5v6l3-2 3 2V5" /></svg>
                                            <span className="tooltip">Save current filters as a view</span>
                                        </button>
                                        {viewsMenuOpen && (
                                            <div id="viewsMenu" className="absolute z-10 mt-1 w-56 bg-white border border-neutral-200 rounded-xl shadow left-full ml-2">
                                                <div className="p-2 text-xs font-semibold text-neutral-500">Saved Views</div>
                                                <div id="viewsList" className="p-2 space-y-1">
                                                    {savedViews.length === 0 ? <div className="text-xs text-neutral-500">No saved views</div> : savedViews.map((v, i) => (
                                                        <div key={i} className="flex items-center justify-between rounded-lg hover:bg-neutral-50 px-2 py-1">
                                                            <button className="text-sm" onClick={() => applySavedView(i)}>{v.name}</button>
                                                            <div className="flex items-center gap-1">
                                                                <button className="text-[11px] px-2 py-0.5 rounded border border-neutral-300 hover:bg-neutral-100" onClick={() => applySavedView(i)}>Apply</button>
                                                                <button className="text-[11px] px-2 py-0.5 rounded border border-red-200 text-red-600 hover:bg-red-50" onClick={() => deleteSavedView(i)}>Delete</button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="relative">
                                        <button id="listViewOptionsBtn" className={`h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2 ${listViewMenuOpen ? "bg-neutral-100" : ""}`} title="List view options" onClick={(e) => {
                                            e.stopPropagation();
                                            setListViewMenuOpen((s) => !s);
                                        }}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></svg>
                                            Options
                                        </button>
                                        {listViewMenuOpen && (
                                            <div id="listViewOptionsMenu" className="absolute z-10 mt-1 w-48 bg-white border border-neutral-200 rounded-xl shadow right-0">
                                                <div className="p-2 text-xs font-semibold text-neutral-500">Table Density</div>
                                                <div className="p-1 space-y-1">
                                                    {["", "compact", "comfortable", "dense", "striped"].map((opt) => (
                                                        <button key={opt} className={`w-full text-left px-2 py-1.5 rounded-lg text-sm flex items-center justify-between ${compactMode === opt ? "bg-neutral-50 font-medium" : "hover:bg-neutral-50"}`}
                                                            onClick={() => { setCompactMode(opt); setListViewMenuOpen(false); }}>
                                                            <span>{opt === "" ? "Normal" : opt.charAt(0).toUpperCase() + opt.slice(1)}</span>
                                                            {compactMode === opt && <svg className="w-4 h-4 text-neutral-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <button id="clearFilters" className="h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50" title="Clear all filters" onClick={() => { clearFilters(); }}>
                                        Clear
                                    </button>

                                    <button id="shareLink" className="h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2" title="Copy shareable link" onClick={() => copyShareableLink()}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 8a5 5 0 1 0-9.9 1.1" /><path d="M15 8l-7.5 4.5" /><path d="M19 13a5 5 0 1 1-9.9-1.1" /></svg>
                                    </button>
                                </div>

                                <div className="flex items-center gap-1">
                                    <button id="addRow" className="h-8 px-3 rounded-lg bg-neutral-900 text-white text-sm hover:bg-neutral-800" onClick={() => {
                                        // add demo row
                                        const newId = Math.max(...data.map(d => d.id)) + 1;
                                        setData((prev) => [...prev, { id: newId, name: `New Patient ${newId}`, age: 50, risk: "Low", status: "Active", careMgr: "New", updated: (new Date()).toISOString().slice(0, 10), notes: "" }]);
                                    }}>Add</button>
                                    <button id="deleteSelected" className="h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50" onClick={() => {
                                        setData((prev) => prev.filter((r) => !selected.has(r.id)));
                                        setSelected(new Set());
                                    }}>Delete</button>
                                    <button id="cloneSelected" className="h-8 px-3 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50" onClick={() => {
                                        const ids = Array.from(selected);
                                        if (ids.length === 0) return;
                                        setData((prev) => {
                                            const max = Math.max(...prev.map(d => d.id));
                                            let nextId = max + 1;
                                            const clones = prev.filter(p => ids.includes(p.id)).map(p => ({ ...p, id: nextId++ }));
                                            return [...prev, ...clones];
                                        });
                                        setSelected(new Set());
                                    }}>Clone</button>
                                </div>

                                <div className="flex items-center gap-1">
                                    <div className="relative">
                                        <button id="rowMenuBtn" className="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center" title="More options" onClick={(e) => {
                                            const el = document.getElementById("rowMenu");
                                            if (el) el.classList.toggle("hidden");
                                        }}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" /></svg>
                                        </button>
                                        <div id="rowMenu" className="hidden absolute right-0 mt-2 w-40 bg-white border border-neutral-200 rounded-xl shadow z-20">
                                            <button className="w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm" id="menuClone" onClick={() => alert("Clone action")}>Clone</button>
                                            <button className="w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm" id="menuDelete" onClick={() => alert("Delete action")}>Delete</button>
                                            <button className="w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm" id="menuUpdate" onClick={() => alert("Update action")}>Update</button>
                                            <button className="w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm" id="menuRename" onClick={() => alert("Rename action")}>Rename</button>
                                        </div>
                                    </div>

                                    <button id="filterMenuBtn" className="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center" title="Show filters" onClick={() => {
                                        const el = document.getElementById("filterRow");
                                        if (el) el.classList.toggle("hidden");
                                    }}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 5h18M6 10h12M10 15h4" /></svg>
                                    </button>
                                </div>
                            </div>

                            <div id="gridWrap" className={`flex-1 overflow-auto ${view === "list" ? "hidden" : ""}`}>
                                <table id="dataTable" className={`w-full text-sm ${compactMode}`}>
                                    <thead className="sticky top-0 bg-neutral-50 border-b border-neutral-200">
                                        <tr>
                                            <th className="w-10 px-3 py-2"><input id="selectAll" type="checkbox" className="rounded border-neutral-300" onChange={(e) => toggleSelectAll(e.target.checked)} checked={selected.size > 0 && selected.size === rows.length && rows.length > 0} /></th>
                                            {visibleColumns.map((col) => (
                                                <th key={col.key} className="px-3 py-2 text-left font-medium text-xs text-neutral-600 select-none" style={{ width: `${col.width}px` }} data-key={col.key} onClick={() => toggleSort(col.key)}>
                                                    <div className="inline-flex items-center gap-1 cursor-pointer hover:text-neutral-900">
                                                        <span>{col.label}</span>
                                                        <span className="text-neutral-400">{sort.key === col.key ? (sort.dir === "asc" ? "â–²" : "â–¼") : ""}</span>
                                                    </div>
                                                </th>
                                            ))}
                                            <th className="px-3 py-2 text-right font-medium text-xs text-neutral-600" style={{ width: "140px" }}>Actions</th>
                                        </tr>
                                        <tr id="filterRow" className="border-b border-neutral-200">
                                            <td></td>
                                            {visibleColumns.map((col) => (
                                                <td key={col.key} className="px-3 py-2">
                                                    <input
                                                        data-key={col.key}
                                                        type="text"
                                                        placeholder={`Filter ${col.label}`}
                                                        className="w-full h-8 rounded-lg border border-neutral-300 px-2 text-xs focus:outline-none focus:ring focus:ring-neutral-200"
                                                        value={filters[col.key] || ""}
                                                        onChange={(e) => handleFilterChange(col.key, e.target.value)}
                                                    />
                                                </td>
                                            ))}
                                            <td></td>
                                        </tr>
                                    </thead>

                                    <tbody id="tbody" className="divide-y divide-neutral-100">
                                        {rows.map((row) => (
                                            <React.Fragment key={row.id}>
                                                <tr id={`row-${row.id}`} className="hover:bg-neutral-50" onClick={(e) => {
                                                    if (e.target.closest('input[type="checkbox"]')) return;
                                                    if (e.target.closest('.rc-call') || e.target.closest('.rc-msg') || e.target.closest('.rc-log')) return;
                                                    toggleExpandRow(row.id);
                                                }}>
                                                    <td className="px-3 py-2 align-top">
                                                        <input type="checkbox" className="rounded border-neutral-300 rowCheck" data-id={row.id} checked={selected.has(row.id)} onChange={(e) => toggleRowSelect(row.id, e.target.checked)} />
                                                    </td>
                                                    {visibleColumns.map((col) => (
                                                        <td key={col.key} className="px-3 py-2 align-top">
                                                            {col.key === "risk" ? renderRiskBadge(row[col.key]) :
                                                                col.key === "status" ? renderStatusBadge(row[col.key]) :
                                                                    row[col.key] ?? ""}
                                                        </td>
                                                    ))}
                                                    <td className="px-3 py-2 align-top">
                                                        <div className="flex justify-end gap-1">
                                                            <button className="rc-call px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs" data-id={row.id} onClick={(e) => { e.stopPropagation(); handleRowAction("call", row.id); }}>Call</button>
                                                            <button className="rc-msg px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs" data-id={row.id} onClick={(e) => { e.stopPropagation(); handleRowAction("msg", row.id); }}>Msg</button>
                                                            <button className="rc-log px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs" data-id={row.id} onClick={(e) => { e.stopPropagation(); handleRowAction("log", row.id); }}>Log</button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                {/* Expansion Row */}
                                                {!expandedRows.has(row.id) ? null : (
                                                    <tr className="bg-neutral-50/50">
                                                        <td></td>
                                                        <td colSpan={visibleColumns.length + 1}>
                                                            <div className="p-3 rounded-lg border border-neutral-200 text-xs text-neutral-700">
                                                                <div className="font-medium mb-1">{row.name} â€” Notes</div>
                                                                <div className="mb-2">{row.notes || "No notes"}</div>
                                                                <div className="flex gap-2">
                                                                    <button className="px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs">Open Profile</button>
                                                                    <button className="px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs">Create Encounter</button>
                                                                    <button className="px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs">Share</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div id="listWrap" className={` ${view === "list" ? "" : "hidden"} ${compactMode} flex-1 overflow-auto p-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3`}>
                                {rows.map((row) => (
                                    <div key={`card-${row.id}`} className="rc-card-item rounded-2xl border border-neutral-200 bg-white p-3 hover:shadow">
                                        <div className="flex items-start justify-between">
                                            <div className="font-medium">{row.name}</div>
                                            <span className="text-[11px] text-neutral-500">{row.updated}</span>
                                        </div>
                                        <div className="mt-1 text-xs text-neutral-600">ID: {row.id} â€¢ Age: {row.age} â€¢ Care: {row.careMgr}</div>
                                        <div className="mt-2">
                                            <span className={`px-2 py-0.5 rounded ${row.risk === "High" ? "bg-red-100 text-red-700" : row.risk === "Medium" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"} text-[11px]`}>{row.risk}</span>
                                            <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-[11px] ml-1">{row.status}</span>
                                        </div>
                                        <div className="mt-3 text-xs text-neutral-700 line-clamp-2">{row.notes || ""}</div>
                                        <div className="mt-3 flex gap-2">
                                            <button className="px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs">Open</button>
                                            <button className="px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs">Share</button>
                                        </div>
                                        <div className="mt-2 flex justify-end gap-1">
                                            <button className="px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs rc-card" data-act="call" data-id={row.id} onClick={() => { handleRowAction("call", row.id); }}>Call</button>
                                            <button className="px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs rc-card" data-act="msg" data-id={row.id} onClick={() => { handleRowAction("msg", row.id); }}>Msg</button>
                                            <button className="px-2 h-7 rounded border border-neutral-300 hover:bg-neutral-100 text-xs rc-card" data-act="log" data-id={row.id} onClick={() => { handleRowAction("log", row.id); }}>Log</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                    {/* Resizer: Detail (appCol) <-> RIGHT SECONDARY LIST */}
                    <div id="gutterBC" ref={gutterBCRef} className="gutter" role="separator" aria-orientation="vertical" tabIndex="0" title="Drag to resize"></div>

                    {/* RIGHT SECONDARY LIST */}
                    <RightListPane rightListPaneRef={rightListPaneRef} navigate={navigate} />

                    {/* RIGHT ICON SIDEBAR */}
                    <RightSidebar
                      rightBarRef={rightBarRef}
                      onCollapse={() => {
                        const w = getComputedStyle(rightBarRef.current).width === "16px" ? "4rem" : "16px";
                        rightBarRef.current.style.width = w;
                      }}
                    />
                </div >
            </div >

            {/* Share Modal */}
            {shareModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 flex items-center justify-between rounded-t-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white text-base font-semibold">Share Patient Profile</h3>
                                    <p className="text-purple-100 text-xs">{shareModalPatient?.name || 'Patient Name'} • ID: {shareModalPatient?.id || ''}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShareModalOpen(false)}
                                className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-1.5 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Content - Two Column Layout */}
                        <div className="p-5">
                            <div className="grid grid-cols-5 gap-5">
                                {/* Left Column: Patient Info */}
                                <div className="col-span-2 space-y-4">
                                    {/* Patient Card */}
                                    <div className="bg-neutral-50 rounded-xl p-4">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-green-500 text-white text-lg font-semibold flex items-center justify-center">
                                                {shareModalPatient?.name?.split(' ').map(n => n[0]).join('').slice(0, 2) || 'PT'}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-neutral-900">{shareModalPatient?.name || 'Patient Name'}</div>
                                                <div className="text-xs text-neutral-500">#{shareModalPatient?.id || ''}</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-neutral-500">Age:</span>
                                                <span className="font-medium text-neutral-900">{shareModalPatient?.age || '-'}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-neutral-500">Risk:</span>
                                                <span className="font-medium text-neutral-900">{shareModalPatient?.risk || '-'}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-neutral-500">Status:</span>
                                                <span className="font-medium text-neutral-900">{shareModalPatient?.status || '-'}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-neutral-500">Care Mgr:</span>
                                                <span className="font-medium text-neutral-900">{shareModalPatient?.careMgr || '-'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* HIPAA Notice */}
                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                                        <div className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <div>
                                                <div className="text-sm font-semibold text-amber-700">HIPAA Notice</div>
                                                <div className="text-xs text-amber-600">Share only with authorized personnel. Contains PHI.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Share Options */}
                                <div className="col-span-3 space-y-4">
                                    {/* Shareable Link */}
                                    <div>
                                        <label className="block text-sm font-semibold text-neutral-900 mb-2">Shareable Link</label>
                                        <div className="flex gap-2">
                                            <input 
                                                type="text" 
                                                readOnly
                                                value={`${window.location.origin}/patient/${shareModalPatient?.id || ''}`}
                                                className="flex-1 h-10 px-3 rounded-lg border border-neutral-300 bg-neutral-50 text-xs font-mono text-neutral-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            <button 
                                                onClick={() => {
                                                    navigator.clipboard.writeText(`${window.location.origin}/patient/${shareModalPatient?.id || ''}`);
                                                    alert('Link copied to clipboard!');
                                                }}
                                                className="h-10 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                Copy
                                            </button>
                                        </div>
                                        <p className="text-xs text-green-600 mt-2 flex items-center gap-1.5 font-medium">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            Secure link for authorized personnel only
                                        </p>
                                    </div>

                                    {/* Quick Share Options */}
                                    <div>
                                        <label className="block text-sm font-semibold text-neutral-900 mb-2">Quick Share Options</label>
                                        <div className="grid grid-cols-4 gap-3">
                                            <button 
                                                onClick={() => alert('Share via Email')}
                                                className="h-20 rounded-xl border border-neutral-200 hover:border-blue-400 hover:bg-blue-50 font-medium flex flex-col items-center justify-center gap-2 transition-all group bg-white"
                                            >
                                                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-xs text-neutral-600 group-hover:text-blue-700">Email</span>
                                            </button>
                                            <button 
                                                onClick={() => alert('Share via Teams')}
                                                className="h-20 rounded-xl border border-neutral-200 hover:border-indigo-400 hover:bg-indigo-50 font-medium flex flex-col items-center justify-center gap-2 transition-all group bg-white"
                                            >
                                                <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <span className="text-xs text-neutral-600 group-hover:text-indigo-700">Teams</span>
                                            </button>
                                            <button 
                                                onClick={() => alert('Share via Slack')}
                                                className="h-20 rounded-xl border border-neutral-200 hover:border-green-400 hover:bg-green-50 font-medium flex flex-col items-center justify-center gap-2 transition-all group bg-white"
                                            >
                                                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                                <span className="text-xs text-neutral-600 group-hover:text-green-700">Slack</span>
                                            </button>
                                            <button 
                                                onClick={() => alert('Generate QR Code')}
                                                className="h-20 rounded-xl border border-neutral-200 hover:border-purple-400 hover:bg-purple-50 font-medium flex flex-col items-center justify-center gap-2 transition-all group bg-white"
                                            >
                                                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                    <path d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                                </svg>
                                                <span className="text-xs text-neutral-600 group-hover:text-purple-700">QR Code</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-5 py-3 bg-neutral-50 border-t border-neutral-200 flex items-center justify-end gap-2 rounded-b-xl">
                            <button
                                type="button"
                                onClick={() => setShareModalOpen(false)}
                                className="px-6 py-2 text-sm text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-100 rounded-lg font-medium transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Task Creation Modal */}
            {taskModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 flex items-center justify-between rounded-t-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white text-base font-semibold">Create Care Task</h3>
                                    <p className="text-purple-100 text-xs">{taskModalPatient?.name || 'Patient Name'}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setTaskModalOpen(false)}
                                className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-1.5 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-5">
                            <form id="taskForm" className="space-y-3">
                                {/* Row 1: Task Title & Type & Priority */}
                                <div className="grid grid-cols-12 gap-3">
                                    <div className="col-span-6">
                                        <input type="text" id="taskTitle" required
                                            className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Task Title *" />
                                    </div>
                                    <div className="col-span-3">
                                        <select id="taskType" required
                                            className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                                            <option value="">Task Type *</option>
                                            <option value="assessment">Assessment</option>
                                            <option value="medication">Medication Review</option>
                                            <option value="followup">Follow-up</option>
                                            <option value="coordination">Care Coordination</option>
                                            <option value="documentation">Documentation</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-span-3">
                                        <select id="taskPriority" required
                                            className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                                            <option value="">Priority *</option>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                            <option value="urgent">Urgent</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 2: Description & Due Date & Assign To */}
                                <div className="grid grid-cols-12 gap-3">
                                    <div className="col-span-6">
                                        <textarea id="taskDescription" required rows="3"
                                            className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                                            placeholder="Description *"></textarea>
                                    </div>
                                    <div className="col-span-3">
                                        <input type="date" id="taskDueDate" required
                                            className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                                    </div>
                                    <div className="col-span-3">
                                        <select id="taskAssignee" required
                                            className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                                            <option value="">Assign To *</option>
                                            <option value="nurse1">RN Sarah Johnson</option>
                                            <option value="nurse2">RN Michael Chen</option>
                                            <option value="doctor1">Dr. Emily Roberts</option>
                                            <option value="manager1">Care Manager - Jane Smith</option>
                                            <option value="coordinator1">Care Coordinator - Tom Wilson</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 3: Care Categories */}
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-neutral-600 font-medium whitespace-nowrap">Care Categories:</span>
                                    <div className="flex flex-wrap gap-2">
                                        <label className="flex items-center px-2.5 py-1.5 bg-neutral-50 border border-neutral-300 rounded-lg cursor-pointer hover:bg-purple-50 hover:border-purple-300 transition-colors">
                                            <input type="checkbox" value="adl" className="mr-1.5 text-purple-600" />
                                            <span className="text-xs">ADL Support</span>
                                        </label>
                                        <label className="flex items-center px-2.5 py-1.5 bg-neutral-50 border border-neutral-300 rounded-lg cursor-pointer hover:bg-purple-50 hover:border-purple-300 transition-colors">
                                            <input type="checkbox" value="medication" className="mr-1.5 text-purple-600" />
                                            <span className="text-xs">Medication</span>
                                        </label>
                                        <label className="flex items-center px-2.5 py-1.5 bg-neutral-50 border border-neutral-300 rounded-lg cursor-pointer hover:bg-purple-50 hover:border-purple-300 transition-colors">
                                            <input type="checkbox" value="mobility" className="mr-1.5 text-purple-600" />
                                            <span className="text-xs">Mobility</span>
                                        </label>
                                        <label className="flex items-center px-2.5 py-1.5 bg-neutral-50 border border-neutral-300 rounded-lg cursor-pointer hover:bg-purple-50 hover:border-purple-300 transition-colors">
                                            <input type="checkbox" value="nutrition" className="mr-1.5 text-purple-600" />
                                            <span className="text-xs">Nutrition</span>
                                        </label>
                                        <label className="flex items-center px-2.5 py-1.5 bg-neutral-50 border border-neutral-300 rounded-lg cursor-pointer hover:bg-purple-50 hover:border-purple-300 transition-colors">
                                            <input type="checkbox" value="social" className="mr-1.5 text-purple-600" />
                                            <span className="text-xs">Social/Emotional</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Row 4: Notes */}
                                <div>
                                    <textarea id="taskNotes" rows="2"
                                        className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                                        placeholder="Additional Notes (optional)"></textarea>
                                </div>
                            </form>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-5 py-3 bg-neutral-50 border-t border-neutral-200 flex items-center justify-end gap-2 rounded-b-xl">
                            <button
                                type="button"
                                onClick={() => setTaskModalOpen(false)}
                                className="px-5 py-2 text-sm text-neutral-700 hover:bg-neutral-200 rounded-lg font-medium transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    // Handle task creation here
                                    alert(`Task created for ${taskModalPatient?.name}`);
                                    setTaskModalOpen(false);
                                }}
                                className="px-5 py-2 text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg shadow-purple-500/30"
                            >
                                <span className="flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                    Create Task
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* TOAST NOTIFICATION */}
            < div
                id="toastNotify"
                className={`fixed bottom-6 right-6 z-50 w-80 bg-white border border-neutral-200 shadow-2xl rounded-xl p-4 flex items-start gap-3 transition-all duration-500 transform ${showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
                onClick={() => { /* open alerts drawer if implemented */ }}
            >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                </div>
                <div className="flex-1">
                    <div className="text-sm font-semibold text-neutral-900">Welcome back, Dr. Smith</div>
                    <div className="text-xs text-neutral-500 mt-1">You have 3 high-risk patient alerts and 5 new messages requiring attention.</div>
                </div>
                <button className="text-neutral-400 hover:text-neutral-600" onClick={(e) => { e.stopPropagation(); setShowToast(false); }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div >

            {/* Drawer and its mask */}
            < div className={`drawer-mask ${drawerOpen ? "show" : ""}`} onClick={closeDrawer} style={{ display: drawerOpen ? undefined : "none" }}></div >
            <aside id="patientDrawer" className={`drawer ${drawerOpen ? "open" : ""}`} style={{ display: drawerOpen ? undefined : "none" }}>
                <div className="h-12 px-4 border-b border-neutral-200 flex items-center justify-between">
                    <div className="min-w-0">
                        <div id="drawerTitle" className="text-sm font-semibold truncate">{drawerPatient?.name ?? "Patient"}</div>
                        <div id="drawerSub" className="text-[11px] text-neutral-500 truncate">{drawerPatient ? `ID ${drawerPatient.id} â€¢ Care Mgr ${drawerPatient.careMgr} â€¢ ${drawerPatient.status}` : ""}</div>
                    </div>
                    <button id="drawerClose" className="h-8 w-8 rounded-lg hover:bg-neutral-100" title="Close" onClick={closeDrawer}>
                        <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6" /></svg>
                    </button>
                </div>

                <div className="px-3 py-2 border-b border-neutral-200 flex gap-1.5">
                    <button className={`tabBtn px-3 h-8 rounded-lg border text-xs font-medium ${activeTab === "call" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 hover:bg-neutral-50"}`} onClick={() => setActiveTab("call")}>Call</button>
                    <button className={`tabBtn px-3 h-8 rounded-lg border text-xs font-medium ${activeTab === "message" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 hover:bg-neutral-50"}`} onClick={() => setActiveTab("message")}>Message</button>
                    <button className={`tabBtn px-3 h-8 rounded-lg border text-xs font-medium ${activeTab === "chat" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 hover:bg-neutral-50"}`} onClick={() => setActiveTab("chat")}>Chat</button>
                    <button className={`tabBtn px-3 h-8 rounded-lg border text-xs font-medium ${activeTab === "action" ? "bg-green-600 text-white border-green-600" : "border-neutral-300 hover:bg-neutral-50"}`} onClick={() => setActiveTab("action")}>Action</button>
                    <button className={`tabBtn px-3 h-8 rounded-lg border text-xs font-medium ${activeTab === "activity" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 hover:bg-neutral-50"}`} onClick={() => setActiveTab("activity")}>Activity</button>
                </div>

                {/* Tab: Call */}
                <div className={`p-4 space-y-3 ${activeTab === "call" ? "" : "hidden"}`}>
                    <div className="text-xs text-neutral-500">Simulated dialer</div>
                    <input ref={callNumberRef} className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm" placeholder="Enter phone numberâ€¦" />
                    <div className="flex gap-2">
                        <button className="px-3 h-9 rounded-lg bg-neutral-900 text-white text-sm" onClick={() => {
                            if (!drawerPatient) return;
                            const num = callNumberRef.current?.value || "(unknown)";
                            addActivity(drawerPatient.id, { type: "Call", status: "dialing", text: `Dialing ${num}`, progress: 10, live: true });
                        }}>Start Call</button>
                        <button className="px-3 h-9 rounded-lg border border-neutral-300 text-sm" onClick={() => {
                            if (!drawerPatient) return;
                            completeLiveCall(drawerPatient.id);
                            addActivity(drawerPatient.id, { type: "Note", status: "completed", text: "Call finished", progress: 100 });
                        }}>End Call</button>
                    </div>
                </div>

                {/* Tab: Message */}
                <div className={`p-4 space-y-3 ${activeTab === "message" ? "" : "hidden"}`}>
                    <textarea ref={msgTextRef} rows="4" className="w-full rounded-lg border border-neutral-300 p-3 text-sm" placeholder="Type message..."></textarea>
                    <div className="flex items-center justify-between">
                        <input ref={msgToRef} className="h-9 rounded-lg border border-neutral-300 px-3 text-sm w-48" placeholder="To (phone/email)" />
                        <button className="px-3 h-9 rounded-lg bg-neutral-900 text-white text-sm" onClick={() => {
                            if (!drawerPatient) return;
                            const to = msgToRef.current?.value || "(no recipient)";
                            const msg = msgTextRef.current?.value || "(empty)";
                            addActivity(drawerPatient.id, { type: "Message", status: "sent", text: `To ${to}: ${msg}`, progress: 100 });
                            if (msgTextRef.current) msgTextRef.current.value = "";
                        }}>Send</button>
                    </div>
                </div>

                {/* Tab: Chat */}
                <div className={`p-4 flex flex-col h-80 ${activeTab === "chat" ? "" : "hidden"}`}>
                    <div className="flex-1 overflow-y-auto space-y-3 mb-3 border border-neutral-200 rounded-lg p-3 bg-neutral-50">
                        <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center flex-shrink-0">PT</div>
                            <div className="bg-white rounded-lg p-2 shadow-sm max-w-[80%]">
                                <div className="text-xs text-neutral-500 mb-1">{drawerPatient?.name || 'Patient'}</div>
                                <div className="text-sm">Hello, I have a question about my medication.</div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-end">
                            <div className="bg-blue-600 text-white rounded-lg p-2 shadow-sm max-w-[80%]">
                                <div className="text-sm">Of course! How can I help you today?</div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center flex-shrink-0">PT</div>
                            <div className="bg-white rounded-lg p-2 shadow-sm max-w-[80%]">
                                <div className="text-sm">When should I take the new prescription?</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <input className="flex-1 h-9 rounded-lg border border-neutral-300 px-3 text-sm" placeholder="Type a message..." />
                        <button className="px-4 h-9 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700">Send</button>
                    </div>
                </div>

                {/* Tab: Action */}
                <div className={`p-4 space-y-4 overflow-y-auto ${activeTab === "action" ? "" : "hidden"}`} style={{ maxHeight: 'calc(100vh - 200px)' }}>
                    <div className="text-sm font-semibold text-neutral-900">Create Action for Task</div>
                    
                    <select className="w-full h-10 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500">
                        <option value="">Select Action Type *</option>
                        <option value="call">Follow-up Call</option>
                        <option value="visit">Home Visit</option>
                        <option value="medication">Medication Review</option>
                        <option value="referral">Referral</option>
                        <option value="assessment">Assessment</option>
                        <option value="other">Other</option>
                    </select>

                    <select className="w-full h-10 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500">
                        <option value="">Link to Task (Optional)</option>
                        <option value="task1">Medication Review - Due Today</option>
                        <option value="task2">Follow-up Appointment</option>
                        <option value="task3">Care Plan Update</option>
                    </select>

                    <div className="grid grid-cols-2 gap-3">
                        <select className="h-10 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500">
                            <option value="low">Low</option>
                            <option value="medium" selected>Medium</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                        </select>
                        <input type="datetime-local" className="h-10 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                    </div>

                    <textarea rows="3" className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none" placeholder="Describe the action to be taken *"></textarea>

                    <select className="w-full h-10 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500">
                        <option value="">Assign To *</option>
                        <option value="nurse1">RN Sarah Johnson</option>
                        <option value="nurse2">RN Michael Chen</option>
                        <option value="doctor1">Dr. Emily Roberts</option>
                        <option value="manager1">Care Manager - Jane Smith</option>
                    </select>

                    <textarea rows="2" className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none" placeholder="Expected outcome (optional)"></textarea>

                    <div className="flex gap-2">
                        <button className="flex-1 h-10 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 flex items-center justify-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Create Action
                        </button>
                        <button className="px-4 h-10 rounded-lg border border-neutral-300 text-sm font-medium hover:bg-neutral-50">Cancel</button>
                    </div>

                    {/* Recent Actions */}
                    <div className="pt-4 border-t border-neutral-200">
                        <div className="text-sm font-semibold text-neutral-900 mb-3">Recent Actions</div>
                        <div className="space-y-2">
                            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium text-green-800">Follow-up Call Completed</div>
                                    <div className="text-xs text-green-600">2 hours ago</div>
                                </div>
                                <div className="text-xs text-green-700 mt-1">Patient contacted, vitals reviewed</div>
                            </div>
                            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-medium text-blue-800">Medication Reminder Sent</div>
                                    <div className="text-xs text-blue-600">Yesterday</div>
                                </div>
                                <div className="text-xs text-blue-700 mt-1">SMS reminder for prescription refill</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab: Activity */}
                <div className={`p-4 ${activeTab === "activity" ? "" : "hidden"}`}>
                    <div id="activityList" className="space-y-3 text-sm">
                        {(drawerPatient && activities.get(drawerPatient.id) ? activities.get(drawerPatient.id) : []).length ? (
                            (activities.get(drawerPatient.id) || []).map((a, idx) => {
                                const progressClass = a.status === "completed" || a.progress === 100 ? "progress--success" :
                                    a.status === "dialing" || a.status === "ringing" || a.live ? "progress--warning" :
                                        a.status === "failed" ? "progress--danger" : "";
                                return (
                                    <div className="activity-item" key={idx}>
                                        <div className={`activity-icon ${a.type === "Call" ? "icon-phone" : a.type === "Message" ? "icon-msg" : "icon-note"}`}>
                                            <div className="text-[0] leading-none" aria-hidden="true">{iconSVG(a.type)}</div>
                                        </div>
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2">
                                                <div className="font-medium">{a.type}</div>
                                                <span className="badge">{a.status || "info"}</span>
                                            </div>
                                            <div className="text-sm text-neutral-700 truncate">{a.text || ""}</div>
                                            <div className={`mt-2 progress ${progressClass}`} role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={a.progress | 0}>
                                                <div className="progress-bar" style={{ width: `${Math.min(100, Math.max(0, a.progress))}%` }}></div>
                                            </div>
                                        </div>
                                        <div className="text-[11px] text-neutral-500 whitespace-nowrap pl-2">{new Date(a.ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
                                    </div>
                                );
                            })
                        ) : <div className="text-sm text-neutral-500">No activity yet.</div>}
                    </div>
                </div>
            </aside>
        </div >
    );
}
