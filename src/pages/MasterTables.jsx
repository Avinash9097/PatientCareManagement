import React, { useEffect } from 'react';

export default function MasterTables({ onClose }) {
  useEffect(() => {
    const qs = (sel) => document.querySelector(sel);
    const qsa = (sel) => Array.from(document.querySelectorAll(sel));

    const closeBtn = qs('#closeMasterTables');
    const cardEls = qsa('.master-table-card');
    const detailEl = qs('#masterTableDetail');
    const backBtn = qs('#backToMasterList');
    const addBtn = qs('#addNewRecord');
    const recordModal = qs('#recordModal');
    const closeModalBtn = qs('#closeModal');
    const cancelModalBtn = qs('#cancelModal');

    const onCloseClick = () => { if (typeof onClose === 'function') onClose(); };
    const onCardClick = (e) => {
      const card = e.currentTarget;
      const table = card.dataset.table || 'Table';
      const titleEl = qs('#masterTableTitle');
      const subtitleEl = qs('#masterTableSubtitle');
      if (titleEl) titleEl.textContent = table.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      if (subtitleEl) subtitleEl.textContent = `Manage ${table} entries`;
      if (detailEl) detailEl.classList.remove('hidden');
    };
    const onBack = () => { if (detailEl) detailEl.classList.add('hidden'); };
    const onAdd = () => { if (recordModal) recordModal.classList.remove('hidden'); };
    const onCloseModal = () => { if (recordModal) recordModal.classList.add('hidden'); };

    if (closeBtn) closeBtn.addEventListener('click', onCloseClick);
    cardEls.forEach((el) => el.addEventListener('click', onCardClick));
    if (backBtn) backBtn.addEventListener('click', onBack);
    if (addBtn) addBtn.addEventListener('click', onAdd);
    if (closeModalBtn) closeModalBtn.addEventListener('click', onCloseModal);
    if (cancelModalBtn) cancelModalBtn.addEventListener('click', onCloseModal);

    return () => {
      if (closeBtn) closeBtn.removeEventListener('click', onCloseClick);
      cardEls.forEach((el) => el.removeEventListener('click', onCardClick));
      if (backBtn) backBtn.removeEventListener('click', onBack);
      if (addBtn) addBtn.removeEventListener('click', onAdd);
      if (closeModalBtn) closeModalBtn.removeEventListener('click', onCloseModal);
      if (cancelModalBtn) cancelModalBtn.removeEventListener('click', onCloseModal);
    };
  }, [onClose]);

  return (
    <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: `
<!-- ========== MASTER TABLES MANAGEMENT VIEW ========== -->
<div id="masterTablesView" class="flex flex-col h-full">
    <!-- Header -->
    <div class="h-14 px-4 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-purple-50 to-white">
        <div class="flex items-center gap-3">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <div>
                <h2 class="text-base font-semibold text-neutral-900">Master Tables Management</h2>
                <p class="text-xs text-neutral-500">Configure application-wide settings and reference data</p>
            </div>
        </div>
        <button id="closeMasterTables" class="h-8 w-8 rounded-lg hover:bg-neutral-100">
            <svg class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path d="M6 6l12 12M6 18L18 6" />
            </svg>
        </button>
    </div>

    <!-- Categories Grid -->
    <div class="flex-1 overflow-y-auto p-6 bg-neutral-50">
        <div class="max-w-7xl mx-auto">
            <!-- Search and Filter Bar -->
            <div class="mb-6 flex items-center gap-4">
                <div class="flex-1 relative">
                    <input type="text" id="masterTableSearch" class="w-full h-10 rounded-lg border border-neutral-300 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Search master tables...">
                    <svg class="w-4 h-4 absolute left-3 top-3 text-neutral-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <select class="h-10 px-4 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>All Categories</option>
                    <option>Clinical</option>
                    <option>Administrative</option>
                    <option>Financial</option>
                    <option>Operational</option>
                    <option>System</option>
                </select>
            </div>

            <div class="space-y-6">
                <div class="bg-white rounded-lg border border-neutral-200 p-6">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-base font-semibold text-neutral-900">Clinical Tables</h3>
                                <p class="text-xs text-neutral-500">Medical and care-related reference data</p>
                            </div>
                        </div>
                        <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">8 Tables</span>
                    </div>
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="diagnosis-codes">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" /></svg>
                                <span class="text-xs text-neutral-600">1,248</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Diagnosis Codes</h4>
                            <p class="text-xs text-neutral-500">ICD-10 diagnosis codes</p>
                        </button>
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="medications">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" /></svg>
                                <span class="text-xs text-neutral-600">3,542</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Medications</h4>
                            <p class="text-xs text-neutral-500">Drug database & formulary</p>
                        </button>
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="procedures">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>
                                <span class="text-xs text-neutral-600">486</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Procedures</h4>
                            <p class="text-xs text-neutral-500">CPT & procedure codes</p>
                        </button>
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="care-levels">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                                <span class="text-xs text-neutral-600">12</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Care Levels</h4>
                            <p class="text-xs text-neutral-500">Levels of care definitions</p>
                        </button>
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="vital-signs">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                                <span class="text-xs text-neutral-600">24</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Vital Signs</h4>
                            <p class="text-xs text-neutral-500">Vitals parameters & ranges</p>
                        </button>
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="allergies">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" /></svg>
                                <span class="text-xs text-neutral-600">856</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Allergies</h4>
                            <p class="text-xs text-neutral-500">Common allergens & reactions</p>
                        </button>
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="lab-tests">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.122l1.027 1.027a4 4 0 01-2.171.102l-.47-.1a4 4 0 01-2.265-1.615l1.027-1.027A3 3 0 009 8.172z" /></svg>
                                <span class="text-xs text-neutral-600">342</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Lab Tests</h4>
                            <p class="text-xs text-neutral-500">Laboratory test catalog</p>
                        </button>
                        <button class="master-table-card p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-left" data-table="assessments">
                            <div class="flex items-start justify-between mb-2">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9 4a1 1 0 10-2 0v2H9a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V9z" /></svg>
                                <span class="text-xs text-neutral-600">67</span>
                            </div>
                            <h4 class="text-sm font-semibold text-neutral-900 mb-1">Assessments</h4>
                            <p class="text-xs text-neutral-500">Assessment templates</p>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    <!-- Master Table Detail/CRUD View -->
    <div id="masterTableDetail" class="hidden flex-1 flex flex-col h-full bg-neutral-50">
        <div class="h-14 px-4 border-b border-neutral-200 bg-white flex items-center justify-between">
            <div class="flex items-center gap-3">
                <button id="backToMasterList" class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div>
                    <h2 id="masterTableTitle" class="text-base font-semibold text-neutral-900"></h2>
                    <p id="masterTableSubtitle" class="text-xs text-neutral-500"></p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button id="addNewRecord" class="h-9 px-4 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M12 4v16m8-8H4" />
                    </svg>
                    Add New
                </button>
            </div>
        </div>
        <div class="flex-1 p-4">
            <div class="bg-white rounded-lg border border-neutral-200 p-6">
                <p class="text-neutral-600">Select a master table to view and manage records.</p>
            </div>
        </div>
    </div>
</div>

<!-- Add/Edit Record Modal -->
<div id="recordModal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div class="px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
            <div>
                <h3 id="modalTitle" class="text-lg font-semibold text-neutral-900">Add New Record</h3>
                <p id="modalSubtitle" class="text-sm text-neutral-500 mt-1">Fill in the details below</p>
            </div>
            <button id="closeModal" class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div class="flex-1 overflow-y-auto px-6 py-4">
            <form id="recordForm" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-neutral-700 mb-2">Name *</label>
                    <input type="text" name="name" required class="w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter name">
                </div>
                <div>
                    <label class="block text-sm font-medium text-neutral-700 mb-2">Description</label>
                    <textarea name="description" rows="3" class="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter description"></textarea>
                </div>
            </form>
        </div>
        <div class="px-6 py-4 border-t border-neutral-200 flex items-center justify-between">
            <div class="flex items-center gap-3 ml-auto">
                <button type="button" id="cancelModal" class="h-10 px-6 rounded-lg border border-neutral-300 text-sm font-medium hover:bg-neutral-50">Cancel</button>
                <button type="submit" form="recordForm" id="saveRecord" class="h-10 px-6 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700">Save Changes</button>
            </div>
        </div>
    </div>
</div>
` }} />
  );
}
