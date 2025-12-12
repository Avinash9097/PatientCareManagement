import React, { useEffect } from 'react';

export default function EmailTemplates({ onClose }) {
  useEffect(() => {
    const qs = (sel) => document.querySelector(sel);
    const qsa = (sel) => Array.from(document.querySelectorAll(sel));

    const closeBtn = qs('#closeEmailTemplates');
    const createBtn = qs('#createNewTemplate');
    const previewBtns = qsa('.template-preview-btn');
    const editBtns = qsa('.template-edit-btn');
    const menuBtns = qsa('.template-menu-btn');

    const onCloseClick = () => { if (typeof onClose === 'function') onClose(); };
    const onCreateClick = () => { /* Handle create new template */ };
    const onPreviewClick = (e) => { /* Handle preview */ };
    const onEditClick = (e) => { /* Handle edit */ };
    const onMenuClick = (e) => { /* Handle menu */ };

    if (closeBtn) closeBtn.addEventListener('click', onCloseClick);
    if (createBtn) createBtn.addEventListener('click', onCreateClick);
    previewBtns.forEach(btn => btn.addEventListener('click', onPreviewClick));
    editBtns.forEach(btn => btn.addEventListener('click', onEditClick));
    menuBtns.forEach(btn => btn.addEventListener('click', onMenuClick));

    return () => {
      if (closeBtn) closeBtn.removeEventListener('click', onCloseClick);
      if (createBtn) createBtn.removeEventListener('click', onCreateClick);
      previewBtns.forEach(btn => btn.removeEventListener('click', onPreviewClick));
      editBtns.forEach(btn => btn.removeEventListener('click', onEditClick));
      menuBtns.forEach(btn => btn.removeEventListener('click', onMenuClick));
    };
  }, [onClose]);

  return (
    <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: `
<!-- ========== EMAIL TEMPLATES VIEW ========== -->
<div id="emailTemplatesView" class="flex flex-col h-full bg-neutral-50">
    <!-- Header -->
    <div class="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white">
        <div class="px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div>
                    <h2 class="text-xl font-bold">Email Templates</h2>
                    <p class="text-sm text-indigo-100">Professional email templates for care communications</p>
                </div>
            </div>
            <button id="closeEmailTemplates" class="h-9 w-9 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Stats Bar -->
        <div class="px-6 pb-4 grid grid-cols-4 gap-4">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">12</div>
                <div class="text-xs text-indigo-100">Total Templates</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">8</div>
                <div class="text-xs text-indigo-100">Active Templates</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">247</div>
                <div class="text-xs text-indigo-100">Sent This Month</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">94%</div>
                <div class="text-xs text-indigo-100">Open Rate</div>
            </div>
        </div>
    </div>

    <!-- Content -->
    <div class="flex-1 overflow-y-auto p-6">
        <!-- Action Bar -->
        <div class="bg-white rounded-lg border border-neutral-200 p-4 mb-6 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="relative">
                    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" placeholder="Search templates..." class="h-10 pl-10 pr-4 w-80 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <select class="h-10 px-4 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-indigo-500">
                    <option>All Categories</option>
                    <option>Appointments</option>
                    <option>Care Updates</option>
                    <option>Billing</option>
                    <option>Reminders</option>
                    <option>Notifications</option>
                </select>
            </div>
            <button id="createNewTemplate" class="h-10 px-6 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-medium flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M12 4v16m8-8H4" />
                </svg>
                Create Template
            </button>
        </div>

        <!-- Templates Grid -->
        <div class="grid grid-cols-2 gap-6">
            <!-- Template Card 1: Appointment Confirmation -->
            <div class="bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-900 mb-1">Appointment Confirmation</h3>
                                <p class="text-sm text-neutral-600">Sent when appointments are scheduled</p>
                            </div>
                        </div>
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
                    </div>

                    <div class="bg-neutral-50 rounded-lg p-4 mb-4 text-sm text-neutral-700">
                        <p class="font-medium mb-2">Subject: Your Appointment is Confirmed</p>
                        <p class="text-xs">Dear {{patient_name}}, Your appointment with {{provider_name}} is confirmed for {{appointment_date}} at {{appointment_time}}...</p>
                    </div>

                    <div class="flex items-center justify-between text-xs text-neutral-500 mb-4">
                        <span>📊 Sent 45 times</span>
                        <span>📬 98% open rate</span>
                        <span>🕐 Updated 2 days ago</span>
                    </div>

                    <div class="flex gap-2">
                        <button class="template-preview-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Preview</button>
                        <button class="template-edit-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Edit</button>
                        <button class="template-menu-btn h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Template Card 2: Appointment Reminder -->
            <div class="bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-900 mb-1">Appointment Reminder</h3>
                                <p class="text-sm text-neutral-600">24-hour reminder before appointment</p>
                            </div>
                        </div>
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
                    </div>

                    <div class="bg-neutral-50 rounded-lg p-4 mb-4 text-sm text-neutral-700">
                        <p class="font-medium mb-2">Subject: Reminder: Appointment Tomorrow</p>
                        <p class="text-xs">Hi {{patient_name}}, This is a friendly reminder about your upcoming appointment tomorrow at {{appointment_time}}...</p>
                    </div>

                    <div class="flex items-center justify-between text-xs text-neutral-500 mb-4">
                        <span>📊 Sent 89 times</span>
                        <span>📬 96% open rate</span>
                        <span>🕐 Updated 5 days ago</span>
                    </div>

                    <div class="flex gap-2">
                        <button class="template-preview-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Preview</button>
                        <button class="template-edit-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Edit</button>
                        <button class="template-menu-btn h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Template Card 3: Care Plan Update -->
            <div class="bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-900 mb-1">Care Plan Update</h3>
                                <p class="text-sm text-neutral-600">Notify about care plan changes</p>
                            </div>
                        </div>
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
                    </div>

                    <div class="bg-neutral-50 rounded-lg p-4 mb-4 text-sm text-neutral-700">
                        <p class="font-medium mb-2">Subject: Your Care Plan Has Been Updated</p>
                        <p class="text-xs">Dear {{patient_name}}, We wanted to inform you about an update to your care plan. {{update_description}}...</p>
                    </div>

                    <div class="flex items-center justify-between text-xs text-neutral-500 mb-4">
                        <span>📊 Sent 32 times</span>
                        <span>📬 92% open rate</span>
                        <span>🕐 Updated 1 week ago</span>
                    </div>

                    <div class="flex gap-2">
                        <button class="template-preview-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Preview</button>
                        <button class="template-edit-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Edit</button>
                        <button class="template-menu-btn h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Template Card 4: Billing Statement -->
            <div class="bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-900 mb-1">Billing Statement</h3>
                                <p class="text-sm text-neutral-600">Monthly billing statements</p>
                            </div>
                        </div>
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
                    </div>

                    <div class="bg-neutral-50 rounded-lg p-4 mb-4 text-sm text-neutral-700">
                        <p class="font-medium mb-2">Subject: Your Monthly Care Statement</p>
                        <p class="text-xs">Dear {{patient_name}}, Your statement for {{billing_period}} is now available. Total amount: {{total_amount}}...</p>
                    </div>

                    <div class="flex items-center justify-between text-xs text-neutral-500 mb-4">
                        <span>📊 Sent 67 times</span>
                        <span>📬 89% open rate</span>
                        <span>🕐 Updated 3 days ago</span>
                    </div>

                    <div class="flex gap-2">
                        <button class="template-preview-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Preview</button>
                        <button class="template-edit-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Edit</button>
                        <button class="template-menu-btn h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Template Card 5: Welcome Email -->
            <div class="bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-900 mb-1">Welcome Email</h3>
                                <p class="text-sm text-neutral-600">First email to new patients</p>
                            </div>
                        </div>
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
                    </div>

                    <div class="bg-neutral-50 rounded-lg p-4 mb-4 text-sm text-neutral-700">
                        <p class="font-medium mb-2">Subject: Welcome to Our Care Family!</p>
                        <p class="text-xs">Dear {{patient_name}}, Welcome! We're thrilled to have you join our care community. Here's what you need to know...</p>
                    </div>

                    <div class="flex items-center justify-between text-xs text-neutral-500 mb-4">
                        <span>📊 Sent 14 times</span>
                        <span>📬 100% open rate</span>
                        <span>🕐 Updated 1 month ago</span>
                    </div>

                    <div class="flex gap-2">
                        <button class="template-preview-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Preview</button>
                        <button class="template-edit-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Edit</button>
                        <button class="template-menu-btn h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Template Card 6: Medication Reminder -->
            <div class="bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-start gap-3">
                            <div class="w-12 h-12 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold text-neutral-900 mb-1">Medication Reminder</h3>
                                <p class="text-sm text-neutral-600">Prescription refill reminders</p>
                            </div>
                        </div>
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600">Draft</span>
                    </div>

                    <div class="bg-neutral-50 rounded-lg p-4 mb-4 text-sm text-neutral-700">
                        <p class="font-medium mb-2">Subject: Time to Refill Your Prescription</p>
                        <p class="text-xs">Hi {{patient_name}}, It's time to refill your prescription for {{medication_name}}. Please contact us to arrange...</p>
                    </div>

                    <div class="flex items-center justify-between text-xs text-neutral-500 mb-4">
                        <span>📊 Not yet sent</span>
                        <span>📬 — open rate</span>
                        <span>🕐 Created today</span>
                    </div>

                    <div class="flex gap-2">
                        <button class="template-preview-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Preview</button>
                        <button class="template-edit-btn flex-1 h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">Edit</button>
                        <button class="template-menu-btn h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
` }} />
  );
}