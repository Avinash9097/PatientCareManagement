import React, { useEffect } from 'react';

export default function UserManagement({ onClose }) {
  useEffect(() => {
    const qs = (sel) => document.querySelector(sel);
    const qsa = (sel) => Array.from(document.querySelectorAll(sel));

    const closeBtn = qs('#closeUserManagement');
    const tabBtns = qsa('.um-tab');
    const contentDivs = qsa('.um-content');

    const onCloseClick = () => { if (typeof onClose === 'function') onClose(); };

    const onTabClick = (e) => {
      const tab = e.currentTarget;
      const targetTab = tab.dataset.tab;

      // Remove active class from all tabs
      tabBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('text-blue-600', 'border-blue-600');
        btn.classList.add('text-neutral-600', 'border-transparent');
      });

      // Add active class to clicked tab
      tab.classList.add('active');
      tab.classList.remove('text-neutral-600', 'border-transparent');
      tab.classList.add('text-blue-600', 'border-blue-600');

      // Hide all content divs
      contentDivs.forEach(div => div.classList.add('hidden'));

      // Show target content div
      const targetContent = qs(`#um${targetTab.charAt(0).toUpperCase() + targetTab.slice(1)}`);
      if (targetContent) targetContent.classList.remove('hidden');
    };

    if (closeBtn) closeBtn.addEventListener('click', onCloseClick);
    tabBtns.forEach(btn => btn.addEventListener('click', onTabClick));

    return () => {
      if (closeBtn) closeBtn.removeEventListener('click', onCloseClick);
      tabBtns.forEach(btn => btn.removeEventListener('click', onTabClick));
    };
  }, [onClose]);

  return (
    <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: `
<!-- User Management View -->
<div id="userManagementView" class="flex flex-col h-full bg-neutral-50">
    <!-- Enhanced Header with Stats -->
    <div class="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white">
        <div class="h-16 px-6 flex items-center justify-between">
            <div class="flex items-center gap-4">
                <div
                    class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor"
                        stroke-width="2" viewBox="0 0 24 24">
                        <path
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <div>
                    <h2 class="text-lg font-bold">User Management</h2>
                    <p class="text-xs text-blue-100">Manage users, roles, and permissions</p>
                </div>
            </div>
            <button id="closeUserManagement"
                class="h-9 w-9 rounded-lg hover:bg-white/20 transition-colors">
                <svg class="w-5 h-5 mx-auto" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path d="M6 6l12 12M6 18L18 6" />
                </svg>
            </button>
        </div>

        <!-- Stats Bar -->
        <div class="px-6 pb-4">
            <div class="grid grid-cols-4 gap-4">
                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div class="text-2xl font-bold" id="totalUsersCount">22</div>
                    <div class="text-xs text-blue-100">Total Users</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div class="text-2xl font-bold text-green-200" id="activeUsersCount">18</div>
                    <div class="text-xs text-blue-100">Active Now</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div class="text-2xl font-bold text-amber-200" id="pendingUsersCount">3</div>
                    <div class="text-xs text-blue-100">Pending</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div class="text-2xl font-bold text-red-200" id="inactiveUsersCount">1</div>
                    <div class="text-xs text-blue-100">Inactive</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Enhanced Tabs with Icons -->
    <div class="bg-white border-b border-neutral-200 shadow-sm">
        <div class="flex overflow-x-auto px-6">
            <button
                class="um-tab active px-6 py-4 text-sm font-semibold text-blue-600 border-b-3 border-blue-600 whitespace-nowrap flex items-center gap-2 transition-all"
                data-tab="users">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Users</span>
                <span
                    class="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">22</span>
            </button>
            <button
                class="um-tab px-6 py-4 text-sm font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 border-b-3 border-transparent hover:border-neutral-300 whitespace-nowrap flex items-center gap-2 transition-all"
                data-tab="roles">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Roles</span>
                <span
                    class="px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded-full text-xs font-bold">4</span>
            </button>
            <button
                class="um-tab px-6 py-4 text-sm font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 border-b-3 border-transparent hover:border-neutral-300 whitespace-nowrap flex items-center gap-2 transition-all"
                data-tab="permissions">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Permissions</span>
            </button>
            <button
                class="um-tab px-6 py-4 text-sm font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 border-b-3 border-transparent hover:border-neutral-300 whitespace-nowrap flex items-center gap-2 transition-all"
                data-tab="activity">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Activity Log</span>
            </button>
        </div>
    </div>

    <!-- Tab Content -->
    <div class="flex-1 overflow-y-auto p-6">
        <!-- Users Tab -->
        <div id="umUsers" class="um-content">
            <!-- Enhanced Search and Filter Bar -->
            <div class="mb-6 bg-white rounded-xl shadow-sm border border-neutral-200 p-4">
                <div class="flex items-center justify-between gap-4">
                    <div class="flex-1 flex items-center gap-3">
                        <div class="relative flex-1 max-w-md">
                            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
                                fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input type="text" id="searchUsers"
                                placeholder="Search by name, email, or ID..."
                                class="w-full h-10 pl-10 pr-4 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>
                        <select id="filterUserRole"
                            class="h-10 px-4 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                            <option value="">All Roles</option>
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                            <option value="staff">Staff</option>
                            <option value="viewer">Viewer</option>
                        </select>
                        <select id="filterUserStatus"
                            class="h-10 px-4 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                            <option value="">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="pending">Pending</option>
                            <option value="suspended">Suspended</option>
                        </select>
                        <button id="clearUserFilters"
                            class="h-10 px-4 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Clear
                        </button>
                    </div>
                    <div class="flex items-center gap-2">
                        <button id="exportUsersBtn"
                            class="h-10 px-4 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Export
                        </button>
                        <button id="addUserBtn"
                            class="h-10 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30 flex items-center gap-2 transition-all">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path d="M12 4v16m8-8H4" />
                            </svg>
                            Add New User
                        </button>
                    </div>
                </div>
            </div>

            <!-- Enhanced Users Table with Better UI -->
            <div class="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                <table class="w-full">
                    <thead
                        class="bg-gradient-to-r from-neutral-50 to-neutral-100 border-b-2 border-neutral-200">
                        <tr>
                            <th
                                class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-700">
                                <input type="checkbox" id="selectAllUsers"
                                    class="w-4 h-4 rounded border-neutral-300 text-blue-600">
                            </th>
                            <th
                                class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-700">
                                User</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-700">
                                Email</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-700">
                                Role</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-700">
                                Department</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-700">
                                Status</th>
                            <th
                                class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-700">
                                Last Login</th>
                            <th
                                class="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-neutral-700">
                                Actions</th>
                        </tr>
                    </thead>
                    <tbody id="usersTableBody" class="divide-y divide-neutral-200 bg-white">
                        <!-- Enhanced Sample Users -->
                        <tr class="hover:bg-blue-50/50 transition-colors" data-user-id="USR001">
                            <td class="px-6 py-4">
                                <input type="checkbox"
                                    class="user-checkbox w-4 h-4 rounded border-neutral-300 text-blue-600">
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="relative">
                                        <div
                                            class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-md">
                                            JD
                                        </div>
                                        <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                                            title="Online"></div>
                                    </div>
                                    <div>
                                        <div class="text-sm font-semibold text-neutral-900">John Doe
                                        </div>
                                        <div class="text-xs text-neutral-500">ID: USR001</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-neutral-700">john.doe@xyz.com</div>
                                <div class="text-xs text-neutral-500">+1 (555) 123-4567</div>
                            </td>
                            <td class="px-6 py-4">
                                <span
                                    class="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 text-xs font-bold rounded-full border border-purple-300">
                                    Admin
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">Administration</td>
                            <td class="px-6 py-4">
                                <span
                                    class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full border border-green-300">
                                    <span
                                        class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Active
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">2 hours ago</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center justify-center gap-2">
                                    <button
                                        class="edit-user-btn p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition-colors"
                                        title="Edit">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="view-user-btn p-2 rounded-lg hover:bg-neutral-100 text-neutral-600 transition-colors"
                                        title="View Profile">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="delete-user-btn p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                                        title="Delete">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="hover:bg-blue-50/50 transition-colors" data-user-id="USR002">
                            <td class="px-6 py-4">
                                <input type="checkbox"
                                    class="user-checkbox w-4 h-4 rounded border-neutral-300 text-blue-600">
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="relative">
                                        <div
                                            class="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white text-sm font-bold flex items-center justify-center shadow-md">
                                            JS
                                        </div>
                                        <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                                            title="Online"></div>
                                    </div>
                                    <div>
                                        <div class="text-sm font-semibold text-neutral-900">Jane
                                            Smith</div>
                                        <div class="text-xs text-neutral-500">ID: USR002</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-neutral-700">jane.smith@xyz.com</div>
                                <div class="text-xs text-neutral-500">+1 (555) 234-5678</div>
                            </td>
                            <td class="px-6 py-4">
                                <span
                                    class="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-xs font-bold rounded-full border border-blue-300">
                                    Manager
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">Clinical</td>
                            <td class="px-6 py-4">
                                <span
                                    class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full border border-green-300">
                                    <span
                                        class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Active
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">5 hours ago</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center justify-center gap-2">
                                    <button
                                        class="edit-user-btn p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition-colors"
                                        title="Edit">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="view-user-btn p-2 rounded-lg hover:bg-neutral-100 text-neutral-600 transition-colors"
                                        title="View Profile">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="delete-user-btn p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                                        title="Delete">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="hover:bg-blue-50/50 transition-colors" data-user-id="USR003">
                            <td class="px-6 py-4">
                                <input type="checkbox"
                                    class="user-checkbox w-4 h-4 rounded border-neutral-300 text-blue-600">
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="relative">
                                        <div
                                            class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white text-sm font-bold flex items-center justify-center shadow-md">
                                            MB
                                        </div>
                                        <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"
                                            title="Offline"></div>
                                    </div>
                                    <div>
                                        <div class="text-sm font-semibold text-neutral-900">Mike
                                            Brown</div>
                                        <div class="text-xs text-neutral-500">ID: USR003</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-neutral-700">mike.brown@xyz.com</div>
                                <div class="text-xs text-neutral-500">+1 (555) 345-6789</div>
                            </td>
                            <td class="px-6 py-4">
                                <span
                                    class="px-3 py-1.5 bg-gradient-to-r from-teal-100 to-teal-200 text-teal-700 text-xs font-bold rounded-full border border-teal-300">
                                    Staff
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">Operations</td>
                            <td class="px-6 py-4">
                                <span
                                    class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full border border-yellow-300">
                                    <span class="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                    Inactive
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">5 days ago</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center justify-center gap-2">
                                    <button
                                        class="edit-user-btn p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition-colors"
                                        title="Edit">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="view-user-btn p-2 rounded-lg hover:bg-neutral-100 text-neutral-600 transition-colors"
                                        title="View Profile">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="delete-user-btn p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                                        title="Delete">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="hover:bg-blue-50/50 transition-colors" data-user-id="USR004">
                            <td class="px-6 py-4">
                                <input type="checkbox"
                                    class="user-checkbox w-4 h-4 rounded border-neutral-300 text-blue-600">
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="relative">
                                        <div
                                            class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-white text-sm font-bold flex items-center justify-center shadow-md">
                                            SW
                                        </div>
                                        <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-white"
                                            title="Away"></div>
                                    </div>
                                    <div>
                                        <div class="text-sm font-semibold text-neutral-900">Sarah
                                            Williams</div>
                                        <div class="text-xs text-neutral-500">ID: USR004</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-neutral-700">sarah.w@xyz.com</div>
                                <div class="text-xs text-neutral-500">+1 (555) 456-7890</div>
                            </td>
                            <td class="px-6 py-4">
                                <span
                                    class="px-3 py-1.5 bg-gradient-to-r from-teal-100 to-teal-200 text-teal-700 text-xs font-bold rounded-full border border-teal-300">
                                    Staff
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">Nursing</td>
                            <td class="px-6 py-4">
                                <span
                                    class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full border border-amber-300">
                                    <span class="w-2 h-2 bg-amber-500 rounded-full"></span>
                                    Pending
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-neutral-600">Never logged in</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center justify-center gap-2">
                                    <button
                                        class="edit-user-btn p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition-colors"
                                        title="Edit">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="view-user-btn p-2 rounded-lg hover:bg-neutral-100 text-neutral-600 transition-colors"
                                        title="View Profile">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                    <button
                                        class="delete-user-btn p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                                        title="Delete">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                            stroke-width="2" viewBox="0 0 24 24">
                                            <path
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="mt-6 flex items-center justify-between">
                <div class="text-sm text-neutral-600">
                    Showing <span class="font-semibold">1-4</span> of <span
                        class="font-semibold">22</span> users
                </div>
                <div class="flex items-center gap-2">
                    <button
                        class="px-4 py-2 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled>
                        Previous
                    </button>
                    <button
                        class="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold">
                        1
                    </button>
                    <button
                        class="px-4 py-2 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50">
                        2
                    </button>
                    <button
                        class="px-4 py-2 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50">
                        3
                    </button>
                    <span class="px-2 text-neutral-500">...</span>
                    <button
                        class="px-4 py-2 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50">
                        6
                    </button>
                    <button
                        class="px-4 py-2 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50">
                        Next
                    </button>
                </div>
            </div>
        </div>

        <!-- Roles Tab -->
        <div id="umRoles" class="um-content hidden">
            <div class="mb-4 flex items-center justify-between">
                <div>
                    <h3 class="text-lg font-semibold text-neutral-900">Roles & Responsibilities</h3>
                    <p class="text-sm text-neutral-500">Define roles and assign permissions</p>
                </div>
                <button id="addRoleBtn"
                    class="h-9 px-4 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path d="M12 4v16m8-8H4" />
                    </svg>
                    Add Role
                </button>
            </div>

            <!-- Roles Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- Admin Role -->
                <div class="bg-white rounded-lg border-2 border-purple-200 p-5">
                    <div class="flex items-start justify-between mb-3">
                        <div
                            class="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor"
                                stroke-width="2" viewBox="0 0 24 24">
                                <path
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <button class="text-neutral-400 hover:text-neutral-600">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                    <h4 class="text-base font-semibold text-neutral-900 mb-1">Admin</h4>
                    <p class="text-xs text-neutral-600 mb-4">Full system access and control</p>
                    <div class="space-y-2 mb-4">
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            All Permissions
                        </div>
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            User Management
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                        <span class="text-neutral-500">2 users</span>
                        <button class="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                    </div>
                </div>

                <!-- Manager Role -->
                <div class="bg-white rounded-lg border-2 border-blue-200 p-5">
                    <div class="flex items-start justify-between mb-3">
                        <div
                            class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                stroke-width="2" viewBox="0 0 24 24">
                                <path
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <button class="text-neutral-400 hover:text-neutral-600">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                    <h4 class="text-base font-semibold text-neutral-900 mb-1">Manager</h4>
                    <p class="text-xs text-neutral-600 mb-4">Manage patients and staff</p>
                    <div class="space-y-2 mb-4">
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            Patient Management
                        </div>
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            Report Access
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                        <span class="text-neutral-500">5 users</span>
                        <button class="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                    </div>
                </div>

                <!-- Staff Role -->
                <div class="bg-white rounded-lg border-2 border-teal-200 p-5">
                    <div class="flex items-start justify-between mb-3">
                        <div
                            class="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                            <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor"
                                stroke-width="2" viewBox="0 0 24 24">
                                <path
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <button class="text-neutral-400 hover:text-neutral-600">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                    <h4 class="text-base font-semibold text-neutral-900 mb-1">Staff</h4>
                    <p class="text-xs text-neutral-600 mb-4">Basic patient care access</p>
                    <div class="space-y-2 mb-4">
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            View Patients
                        </div>
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            Update Records
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                        <span class="text-neutral-500">12 users</span>
                        <button class="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                    </div>
                </div>

                <!-- Viewer Role -->
                <div class="bg-white rounded-lg border-2 border-neutral-200 p-5">
                    <div class="flex items-start justify-between mb-3">
                        <div
                            class="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                            <svg class="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor"
                                stroke-width="2" viewBox="0 0 24 24">
                                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <button class="text-neutral-400 hover:text-neutral-600">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                    <h4 class="text-base font-semibold text-neutral-900 mb-1">Viewer</h4>
                    <p class="text-xs text-neutral-600 mb-4">Read-only access</p>
                    <div class="space-y-2 mb-4">
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-green-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                            </svg>
                            View Only
                        </div>
                        <div class="flex items-center gap-2 text-xs text-neutral-700">
                            <svg class="w-4 h-4 text-red-600" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                            </svg>
                            No Edit Rights
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                        <span class="text-neutral-500">3 users</span>
                        <button class="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Permissions Tab -->
        <div id="umPermissions" class="um-content hidden">
            <div class="mb-4">
                <h3 class="text-lg font-semibold text-neutral-900">Permission Matrix</h3>
                <p class="text-sm text-neutral-500">Granular permission control for each role</p>
            </div>

            <!-- Permission Matrix Table -->
            <div class="bg-white rounded-lg border border-neutral-200 overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-neutral-50 border-b border-neutral-200">
                        <tr>
                            <th
                                class="px-4 py-3 text-left text-xs font-semibold text-neutral-600 sticky left-0 bg-neutral-50">
                                Permission</th>
                            <th class="px-4 py-3 text-center text-xs font-semibold text-purple-600">
                                Admin</th>
                            <th class="px-4 py-3 text-center text-xs font-semibold text-blue-600">
                                Manager</th>
                            <th class="px-4 py-3 text-center text-xs font-semibold text-teal-600">
                                Staff</th>
                            <th
                                class="px-4 py-3 text-center text-xs font-semibold text-neutral-600">
                                Viewer</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-neutral-200">
                        <!-- Patient Management -->
                        <tr class="hover:bg-neutral-50">
                            <td
                                class="px-4 py-3 text-sm font-medium text-neutral-900 sticky left-0 bg-white">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-neutral-400" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    View Patients
                                </div>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked disabled
                                    class="w-4 h-4 rounded border-purple-300 text-purple-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-blue-300 text-blue-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-teal-300 text-teal-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-neutral-300 text-neutral-600">
                            </td>
                        </tr>
                        <tr class="hover:bg-neutral-50">
                            <td
                                class="px-4 py-3 text-sm font-medium text-neutral-900 sticky left-0 bg-white">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-neutral-400" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit Patients
                                </div>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked disabled
                                    class="w-4 h-4 rounded border-purple-300 text-purple-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-blue-300 text-blue-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-teal-300 text-teal-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-neutral-300 text-neutral-600">
                            </td>
                        </tr>
                        <tr class="hover:bg-neutral-50">
                            <td
                                class="px-4 py-3 text-sm font-medium text-neutral-900 sticky left-0 bg-white">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-neutral-400" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Delete Patients
                                </div>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked disabled
                                    class="w-4 h-4 rounded border-purple-300 text-purple-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-blue-300 text-blue-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-teal-300 text-teal-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-neutral-300 text-neutral-600">
                            </td>
                        </tr>
                        <!-- User Management -->
                        <tr class="hover:bg-neutral-50">
                            <td
                                class="px-4 py-3 text-sm font-medium text-neutral-900 sticky left-0 bg-white">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-neutral-400" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    Manage Users
                                </div>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked disabled
                                    class="w-4 h-4 rounded border-purple-300 text-purple-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-blue-300 text-blue-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-teal-300 text-teal-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-neutral-300 text-neutral-600">
                            </td>
                        </tr>
                        <!-- Reports -->
                        <tr class="hover:bg-neutral-50">
                            <td
                                class="px-4 py-3 text-sm font-medium text-neutral-900 sticky left-0 bg-white">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-neutral-400" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    View Reports
                                </div>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked disabled
                                    class="w-4 h-4 rounded border-purple-300 text-purple-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-blue-300 text-blue-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-teal-300 text-teal-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-neutral-300 text-neutral-600">
                            </td>
                        </tr>
                        <tr class="hover:bg-neutral-50">
                            <td
                                class="px-4 py-3 text-sm font-medium text-neutral-900 sticky left-0 bg-white">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-neutral-400" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Export Data
                                </div>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked disabled
                                    class="w-4 h-4 rounded border-purple-300 text-purple-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked
                                    class="w-4 h-4 rounded border-blue-300 text-blue-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-teal-300 text-teal-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-neutral-300 text-neutral-600">
                            </td>
                        </tr>
                        <!-- System Settings -->
                        <tr class="hover:bg-neutral-50">
                            <td
                                class="px-4 py-3 text-sm font-medium text-neutral-900 sticky left-0 bg-white">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-neutral-400" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    System Settings
                                </div>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox" checked disabled
                                    class="w-4 h-4 rounded border-purple-300 text-purple-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-blue-300 text-blue-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-teal-300 text-teal-600">
                            </td>
                            <td class="px-4 py-3 text-center">
                                <input type="checkbox"
                                    class="w-4 h-4 rounded border-neutral-300 text-neutral-600">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Save Changes Button -->
            <div
                class="mt-6 flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                        stroke-width="2" viewBox="0 0 24 24">
                        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                        <div class="text-sm font-semibold text-blue-900">Changes will affect all
                            users</div>
                        <div class="text-xs text-blue-700">Make sure to review permissions before
                            saving</div>
                    </div>
                </div>
                <button id="savePermissionsBtn"
                    class="h-10 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 shadow-lg flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                    Save Changes
                </button>
            </div>
        </div>

        <!-- Activity Log Tab -->
        <div id="umActivity" class="um-content hidden">
            <div class="mb-6">
                <h3 class="text-lg font-semibold text-neutral-900">User Activity Log</h3>
                <p class="text-sm text-neutral-500">Track all user activities and changes</p>
            </div>

            <!-- Activity Timeline -->
            <div class="space-y-4">
                <div
                    class="bg-white rounded-lg border border-neutral-200 p-4 hover:shadow-md transition-shadow">
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div
                                class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                <svg class="w-5 h-5 text-green-600" fill="none"
                                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <h4 class="text-sm font-semibold text-neutral-900">User Login
                                    </h4>
                                    <p class="text-sm text-neutral-600 mt-1"><span
                                            class="font-medium">John Doe</span> logged in from <span
                                            class="text-blue-600">192.168.1.100</span></p>
                                </div>
                                <span class="text-xs text-neutral-500">2 hours ago</span>
                            </div>
                            <div class="mt-2 flex items-center gap-2">
                                <span
                                    class="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Success</span>
                                <span class="text-xs text-neutral-500">IP: 192.168.1.100</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white rounded-lg border border-neutral-200 p-4 hover:shadow-md transition-shadow">
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div
                                class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <h4 class="text-sm font-semibold text-neutral-900">User Updated
                                    </h4>
                                    <p class="text-sm text-neutral-600 mt-1"><span
                                            class="font-medium">Jane Smith</span> updated user <span
                                            class="font-medium">Mike Brown</span></p>
                                </div>
                                <span class="text-xs text-neutral-500">5 hours ago</span>
                            </div>
                            <div class="mt-2 flex items-center gap-2">
                                <span
                                    class="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">Update</span>
                                <span class="text-xs text-neutral-500">Changed: Role, Status</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white rounded-lg border border-neutral-200 p-4 hover:shadow-md transition-shadow">
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div
                                class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                <svg class="w-5 h-5 text-purple-600" fill="none"
                                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <h4 class="text-sm font-semibold text-neutral-900">New User
                                        Created</h4>
                                    <p class="text-sm text-neutral-600 mt-1"><span
                                            class="font-medium">John Doe</span> created new user
                                        <span class="font-medium">Sarah Williams</span>
                                    </p>
                                </div>
                                <span class="text-xs text-neutral-500">1 day ago</span>
                            </div>
                            <div class="mt-2 flex items-center gap-2">
                                <span
                                    class="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded">Create</span>
                                <span class="text-xs text-neutral-500">Role: Staff</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white rounded-lg border border-red-200 p-4 hover:shadow-md transition-shadow">
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div
                                class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <h4 class="text-sm font-semibold text-neutral-900">Failed Login
                                        Attempt</h4>
                                    <p class="text-sm text-neutral-600 mt-1">Failed login attempt
                                        for <span class="font-medium">admin@xyz.com</span></p>
                                </div>
                                <span class="text-xs text-neutral-500">2 days ago</span>
                            </div>
                            <div class="mt-2 flex items-center gap-2">
                                <span
                                    class="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded">Failed</span>
                                <span class="text-xs text-neutral-500">IP: 203.0.113.45</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white rounded-lg border border-neutral-200 p-4 hover:shadow-md transition-shadow">
                    <div class="flex gap-4">
                        <div class="flex-shrink-0">
                            <div
                                class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                                <svg class="w-5 h-5 text-amber-600" fill="none"
                                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-start justify-between">
                                <div>
                                    <h4 class="text-sm font-semibold text-neutral-900">Permission
                                        Changed</h4>
                                    <p class="text-sm text-neutral-600 mt-1"><span
                                            class="font-medium">Jane Smith</span> updated
                                        permissions for <span class="font-medium">Manager</span>
                                        role</p>
                                </div>
                                <span class="text-xs text-neutral-500">3 days ago</span>
                            </div>
                            <div class="mt-2 flex items-center gap-2">
                                <span
                                    class="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded">Permission</span>
                                <span class="text-xs text-neutral-500">Added: Export Data</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Load More -->
            <div class="mt-6 text-center">
                <button
                    class="h-10 px-6 rounded-lg border border-neutral-300 text-sm hover:bg-neutral-50 flex items-center gap-2 mx-auto">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Load More Activity
                </button>
            </div>
        </div>
    </div>
</div>` }} />
  );
}
