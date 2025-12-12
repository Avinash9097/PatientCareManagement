import React, { useEffect } from 'react';

export default function Scheduling({ onClose }) {
  useEffect(() => {
    const qs = (sel) => document.querySelector(sel);
    const qsa = (sel) => Array.from(document.querySelectorAll(sel));

    const closeBtn = qs('#closeScheduling');
    const tabBtns = qsa('.schedule-tab');
    const contentDivs = qsa('.schedule-content');

    const onCloseClick = () => { if (typeof onClose === 'function') onClose(); };

    const onTabClick = (e) => {
      const tab = e.currentTarget;
      const targetTab = tab.dataset.tab;

      // Remove active class from all tabs
      tabBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('text-indigo-600', 'border-indigo-600');
        btn.classList.add('text-neutral-600', 'border-transparent');
      });

      // Add active class to clicked tab
      tab.classList.add('active');
      tab.classList.remove('text-neutral-600', 'border-transparent');
      tab.classList.add('text-indigo-600', 'border-indigo-600');

      // Hide all content divs
      contentDivs.forEach(div => div.classList.add('hidden'));

      // Show target content div - map tab names to content IDs
      const tabToContentId = {
        'calendar': 'scheduleCalendar',
        'business-hours': 'scheduleBusinessHours',
        'appointment-types': 'scheduleAppointmentTypes',
        'holidays': 'scheduleHolidays',
        'time-zones': 'scheduleTimeZones'
      };

      const targetContentId = tabToContentId[targetTab];
      const targetContent = qs(`#${targetContentId}`);
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
<!-- ========== SCHEDULING MANAGEMENT VIEW ========== -->
<div id="schedulingView" class="flex flex-col h-full bg-neutral-50">
    <!-- Header -->
    <div class="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white">
        <div class="px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div
                    class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div>
                    <h2 class="text-xl font-bold">Scheduling Management</h2>
                    <p class="text-sm text-indigo-100">Configure appointments, business hours, and
                        availability</p>
                </div>
            </div>
            <button id="closeScheduling"
                class="h-9 w-9 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Stats Bar -->
        <div class="px-6 pb-4 grid grid-cols-4 gap-4">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">48</div>
                <div class="text-xs text-indigo-100">Today's Appointments</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">12</div>
                <div class="text-xs text-indigo-100">Pending Confirmations</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">85%</div>
                <div class="text-xs text-indigo-100">Capacity Utilization</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div class="text-2xl font-bold">3</div>
                <div class="text-xs text-indigo-100">Blocked Time Slots</div>
            </div>
        </div>
    </div>

    <!-- Tabs -->
    <div class="bg-white border-b border-neutral-200 shadow-sm">
        <div class="flex overflow-x-auto px-6">
            <button
                class="schedule-tab active px-4 py-3 text-sm font-medium text-indigo-600 border-b-2 border-indigo-600 whitespace-nowrap flex items-center gap-2"
                data-tab="calendar">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Calendar View
            </button>
            <button
                class="schedule-tab px-4 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent hover:border-neutral-300 whitespace-nowrap flex items-center gap-2"
                data-tab="business-hours">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
            </button>
            <button
                class="schedule-tab px-4 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent hover:border-neutral-300 whitespace-nowrap flex items-center gap-2"
                data-tab="appointment-types">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Appointment Types
            </button>
            <button
                class="schedule-tab px-4 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent hover:border-neutral-300 whitespace-nowrap flex items-center gap-2"
                data-tab="holidays">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Holidays & Closures
            </button>
            <button
                class="schedule-tab px-4 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent hover:border-neutral-300 whitespace-nowrap flex items-center gap-2"
                data-tab="time-zones">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Time Zones
            </button>
        </div>
    </div>

    <!-- Tab Content -->
    <div class="flex-1 overflow-y-auto">
        <!-- Calendar View Tab -->
        <div id="scheduleCalendar" class="schedule-content p-6">
            <div class="max-w-7xl mx-auto">
                <!-- Calendar Controls -->
                <div
                    class="bg-white rounded-lg border border-neutral-200 p-4 mb-4 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <button
                            class="h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">
                            Today
                        </button>
                        <div class="flex items-center gap-2">
                            <button
                                class="h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                class="h-9 w-9 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <div class="text-lg font-semibold text-neutral-900">December 2025</div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button id="syncCalendarBtn"
                            class="h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium flex items-center gap-2"
                            title="Sync with External Calendars">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Sync
                        </button>
                        <div class="w-px h-6 bg-neutral-300"></div>
                        <button
                            class="h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">
                            Day
                        </button>
                        <button
                            class="h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium bg-indigo-50 border-indigo-300 text-indigo-600">
                            Week
                        </button>
                        <button
                            class="h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm font-medium">
                            Month
                        </button>
                        <button
                            class="h-9 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-medium flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path d="M12 4v16m8-8H4" />
                            </svg>
                            New Appointment
                        </button>
                    </div>
                </div>

                <!-- Week Calendar -->
                <div class="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                    <!-- Calendar Header -->
                    <div class="grid grid-cols-8 border-b border-neutral-200 bg-neutral-50">
                        <div class="p-3 text-xs font-semibold text-neutral-500">TIME</div>
                        <div class="p-3 text-center border-l border-neutral-200">
                            <div class="text-xs font-medium text-neutral-500">MON</div>
                            <div class="text-lg font-semibold text-neutral-900">4</div>
                        </div>
                        <div class="p-3 text-center border-l border-neutral-200">
                            <div class="text-xs font-medium text-neutral-500">TUE</div>
                            <div class="text-lg font-semibold text-neutral-900">5</div>
                        </div>
                        <div class="p-3 text-center border-l border-neutral-200">
                            <div class="text-xs font-medium text-neutral-500">WED</div>
                            <div class="text-lg font-semibold text-neutral-900">6</div>
                        </div>
                        <div class="p-3 text-center border-l border-neutral-200 bg-indigo-50">
                            <div class="text-xs font-medium text-indigo-600">THU</div>
                            <div class="text-lg font-semibold text-indigo-600">7</div>
                        </div>
                        <div class="p-3 text-center border-l border-neutral-200">
                            <div class="text-xs font-medium text-neutral-500">FRI</div>
                            <div class="text-lg font-semibold text-neutral-900">8</div>
                        </div>
                        <div class="p-3 text-center border-l border-neutral-200">
                            <div class="text-xs font-medium text-neutral-500">SAT</div>
                            <div class="text-lg font-semibold text-neutral-900">9</div>
                        </div>
                        <div class="p-3 text-center border-l border-neutral-200">
                            <div class="text-xs font-medium text-neutral-500">SUN</div>
                            <div class="text-lg font-semibold text-neutral-900">10</div>
                        </div>
                    </div>

                    <!-- Calendar Body -->
                    <div class="overflow-y-auto max-h-[500px]">
                        <!-- 8:00 AM Row -->
                        <div class="grid grid-cols-8 border-b border-neutral-100">
                            <div class="p-2 text-xs text-neutral-500 border-r border-neutral-200">
                                8:00 AM</div>
                            <div class="p-1 border-r border-neutral-100 relative min-h-[60px]">
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative">
                                <div
                                    class="bg-blue-100 border-l-2 border-blue-500 rounded p-2 text-xs cursor-pointer hover:shadow-md transition-shadow">
                                    <div class="font-semibold text-blue-900">Initial Consultation
                                    </div>
                                    <div class="text-blue-700">John Doe</div>
                                </div>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 border-r border-neutral-100 relative bg-indigo-50/50">
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 relative"></div>
                        </div>

                        <!-- 9:00 AM Row -->
                        <div class="grid grid-cols-8 border-b border-neutral-100">
                            <div class="p-2 text-xs text-neutral-500 border-r border-neutral-200">
                                9:00 AM</div>
                            <div class="p-1 border-r border-neutral-100 relative min-h-[60px]">
                                <div
                                    class="bg-green-100 border-l-2 border-green-500 rounded p-2 text-xs cursor-pointer hover:shadow-md transition-shadow">
                                    <div class="font-semibold text-green-900">Follow-up</div>
                                    <div class="text-green-700">Sarah Wilson</div>
                                </div>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 border-r border-neutral-100 relative">
                                <div
                                    class="bg-purple-100 border-l-2 border-purple-500 rounded p-2 text-xs cursor-pointer hover:shadow-md transition-shadow">
                                    <div class="font-semibold text-purple-900">Assessment</div>
                                    <div class="text-purple-700">Mike Johnson</div>
                                </div>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative bg-indigo-50/50">
                                <div
                                    class="bg-indigo-100 border-l-2 border-indigo-600 rounded p-2 text-xs cursor-pointer hover:shadow-md transition-shadow">
                                    <div class="font-semibold text-indigo-900">Care Review</div>
                                    <div class="text-indigo-700">Emma Davis</div>
                                </div>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 relative"></div>
                        </div>

                        <!-- 10:00 AM Row -->
                        <div class="grid grid-cols-8 border-b border-neutral-100">
                            <div class="p-2 text-xs text-neutral-500 border-r border-neutral-200">
                                10:00 AM</div>
                            <div class="p-1 border-r border-neutral-100 relative min-h-[60px]">
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative">
                                <div
                                    class="bg-amber-100 border-l-2 border-amber-500 rounded p-2 text-xs cursor-pointer hover:shadow-md transition-shadow">
                                    <div class="font-semibold text-amber-900">Check-in</div>
                                    <div class="text-amber-700">Robert Lee</div>
                                </div>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 border-r border-neutral-100 relative bg-indigo-50/50">
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative">
                                <div
                                    class="bg-rose-100 border-l-2 border-rose-500 rounded p-2 text-xs cursor-pointer hover:shadow-md transition-shadow">
                                    <div class="font-semibold text-rose-900">Urgent Care</div>
                                    <div class="text-rose-700">Lisa Brown</div>
                                </div>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 relative"></div>
                        </div>

                        <!-- 11:00 AM Row -->
                        <div class="grid grid-cols-8 border-b border-neutral-100">
                            <div class="p-2 text-xs text-neutral-500 border-r border-neutral-200">
                                11:00 AM</div>
                            <div class="p-1 border-r border-neutral-100 relative min-h-[60px]">
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 border-r border-neutral-100 relative">
                                <div
                                    class="bg-teal-100 border-l-2 border-teal-500 rounded p-2 text-xs cursor-pointer hover:shadow-md transition-shadow">
                                    <div class="font-semibold text-teal-900">Consultation</div>
                                    <div class="text-teal-700">James Miller</div>
                                </div>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative bg-indigo-50/50">
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 relative"></div>
                        </div>

                        <!-- 12:00 PM Row (Lunch Break) -->
                        <div class="grid grid-cols-8 border-b border-neutral-100 bg-neutral-50">
                            <div class="p-2 text-xs text-neutral-500 border-r border-neutral-200">
                                12:00 PM</div>
                            <div
                                class="p-1 border-r border-neutral-100 relative min-h-[60px] bg-neutral-100 flex items-center justify-center">
                                <span class="text-xs text-neutral-500">Lunch</span>
                            </div>
                            <div
                                class="p-1 border-r border-neutral-100 relative bg-neutral-100 flex items-center justify-center">
                                <span class="text-xs text-neutral-500">Lunch</span>
                            </div>
                            <div
                                class="p-1 border-r border-neutral-100 relative bg-neutral-100 flex items-center justify-center">
                                <span class="text-xs text-neutral-500">Lunch</span>
                            </div>
                            <div
                                class="p-1 border-r border-neutral-100 relative bg-indigo-100/50 flex items-center justify-center">
                                <span class="text-xs text-indigo-600">Lunch</span>
                            </div>
                            <div
                                class="p-1 border-r border-neutral-100 relative bg-neutral-100 flex items-center justify-center">
                                <span class="text-xs text-neutral-500">Lunch</span>
                            </div>
                            <div class="p-1 border-r border-neutral-100 relative"></div>
                            <div class="p-1 relative"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Business Hours Tab -->
        <div id="scheduleBusinessHours" class="schedule-content hidden p-6">
            <div class="max-w-4xl mx-auto">
                <div class="bg-white rounded-lg border border-neutral-200 p-6">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h3 class="text-lg font-semibold text-neutral-900">Operating Hours</h3>
                            <p class="text-sm text-neutral-600">Configure your business hours for
                                each day of the week</p>
                        </div>
                        <button
                            class="h-9 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-medium">
                            Save Changes
                        </button>
                    </div>

                    <!-- Days of Week -->
                    <div class="space-y-4">
                        <!-- Monday -->
                        <div
                            class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-indigo-300 transition-colors">
                            <label class="flex items-center gap-3 flex-1">
                                <input type="checkbox" checked
                                    class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                                <span
                                    class="text-sm font-medium text-neutral-900 w-24">Monday</span>
                            </label>
                            <input type="time" value="08:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <span class="text-neutral-500">to</span>
                            <input type="time" value="17:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <button
                                class="h-9 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm">
                                + Add Break
                            </button>
                        </div>

                        <!-- Tuesday -->
                        <div
                            class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-indigo-300 transition-colors">
                            <label class="flex items-center gap-3 flex-1">
                                <input type="checkbox" checked
                                    class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                                <span
                                    class="text-sm font-medium text-neutral-900 w-24">Tuesday</span>
                            </label>
                            <input type="time" value="08:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <span class="text-neutral-500">to</span>
                            <input type="time" value="17:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <button
                                class="h-9 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm">
                                + Add Break
                            </button>
                        </div>

                        <!-- Wednesday -->
                        <div
                            class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-indigo-300 transition-colors">
                            <label class="flex items-center gap-3 flex-1">
                                <input type="checkbox" checked
                                    class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                                <span
                                    class="text-sm font-medium text-neutral-900 w-24">Wednesday</span>
                            </label>
                            <input type="time" value="08:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <span class="text-neutral-500">to</span>
                            <input type="time" value="17:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <button
                                class="h-9 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm">
                                + Add Break
                            </button>
                        </div>

                        <!-- Thursday -->
                        <div
                            class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-indigo-300 transition-colors">
                            <label class="flex items-center gap-3 flex-1">
                                <input type="checkbox" checked
                                    class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                                <span
                                    class="text-sm font-medium text-neutral-900 w-24">Thursday</span>
                            </label>
                            <input type="time" value="08:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <span class="text-neutral-500">to</span>
                            <input type="time" value="17:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <button
                                class="h-9 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm">
                                + Add Break
                            </button>
                        </div>

                        <!-- Friday -->
                        <div
                            class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-indigo-300 transition-colors">
                            <label class="flex items-center gap-3 flex-1">
                                <input type="checkbox" checked
                                    class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                                <span
                                    class="text-sm font-medium text-neutral-900 w-24">Friday</span>
                            </label>
                            <input type="time" value="08:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <span class="text-neutral-500">to</span>
                            <input type="time" value="17:00"
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm focus:ring-2 focus:ring-indigo-500">
                            <button
                                class="h-9 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm">
                                + Add Break
                            </button>
                        </div>

                        <!-- Saturday -->
                        <div
                            class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors opacity-60">
                            <label class="flex items-center gap-3 flex-1">
                                <input type="checkbox"
                                    class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                                <span
                                    class="text-sm font-medium text-neutral-900 w-24">Saturday</span>
                            </label>
                            <input type="time" value="08:00" disabled
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm bg-neutral-50">
                            <span class="text-neutral-500">to</span>
                            <input type="time" value="17:00" disabled
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm bg-neutral-50">
                            <span class="text-sm text-neutral-500 px-3">Closed</span>
                        </div>

                        <!-- Sunday -->
                        <div
                            class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors opacity-60">
                            <label class="flex items-center gap-3 flex-1">
                                <input type="checkbox"
                                    class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                                <span
                                    class="text-sm font-medium text-neutral-900 w-24">Sunday</span>
                            </label>
                            <input type="time" value="08:00" disabled
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm bg-neutral-50">
                            <span class="text-neutral-500">to</span>
                            <input type="time" value="17:00" disabled
                                class="h-9 px-3 rounded-lg border border-neutral-300 text-sm bg-neutral-50">
                            <span class="text-sm text-neutral-500 px-3">Closed</span>
                        </div>
                    </div>

                    <!-- Quick Actions -->
                    <div class="mt-6 pt-6 border-t border-neutral-200 flex items-center gap-3">
                        <button
                            class="h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm">
                            Copy Monday to All Days
                        </button>
                        <button
                            class="h-9 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-sm">
                            Reset to Default
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Appointment Types Tab -->
        <div id="scheduleAppointmentTypes" class="schedule-content hidden p-6">
            <div class="max-w-5xl mx-auto">
                <div class="mb-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900">Appointment Types</h3>
                        <p class="text-sm text-neutral-600">Manage different types of appointments
                            and their durations</p>
                    </div>
                    <button
                        class="h-9 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-medium flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24">
                            <path d="M12 4v16m8-8H4" />
                        </svg>
                        Add Appointment Type
                    </button>
                </div>

                <!-- Appointment Types Grid -->
                <div class="grid md:grid-cols-2 gap-4">
                    <!-- Initial Consultation -->
                    <div
                        class="bg-white rounded-lg border border-neutral-200 p-5 hover:shadow-md transition-shadow">
                        <div class="flex items-start justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                    <svg class="w-5 h-5 text-blue-600" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-neutral-900">Initial Consultation
                                    </h4>
                                    <p class="text-xs text-neutral-500">60 minutes • $150</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked class="sr-only peer">
                                <div
                                    class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600">
                                </div>
                            </label>
                        </div>
                        <p class="text-sm text-neutral-600 mb-3">Comprehensive first-time patient
                            assessment and care plan development</p>
                        <div class="flex items-center gap-2">
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Edit
                            </button>
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Duplicate
                            </button>
                            <span class="ml-auto text-xs text-neutral-500">Used: 142 times</span>
                        </div>
                    </div>

                    <!-- Follow-up Visit -->
                    <div
                        class="bg-white rounded-lg border border-neutral-200 p-5 hover:shadow-md transition-shadow">
                        <div class="flex items-start justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                                    <svg class="w-5 h-5 text-green-600" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-neutral-900">Follow-up Visit</h4>
                                    <p class="text-xs text-neutral-500">30 minutes • $75</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked class="sr-only peer">
                                <div
                                    class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600">
                                </div>
                            </label>
                        </div>
                        <p class="text-sm text-neutral-600 mb-3">Regular check-in and progress
                            monitoring for existing patients</p>
                        <div class="flex items-center gap-2">
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Edit
                            </button>
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Duplicate
                            </button>
                            <span class="ml-auto text-xs text-neutral-500">Used: 328 times</span>
                        </div>
                    </div>

                    <!-- Assessment -->
                    <div
                        class="bg-white rounded-lg border border-neutral-200 p-5 hover:shadow-md transition-shadow">
                        <div class="flex items-start justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                                    <svg class="w-5 h-5 text-purple-600" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-neutral-900">Comprehensive
                                        Assessment</h4>
                                    <p class="text-xs text-neutral-500">90 minutes • $200</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked class="sr-only peer">
                                <div
                                    class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600">
                                </div>
                            </label>
                        </div>
                        <p class="text-sm text-neutral-600 mb-3">Detailed evaluation and
                            comprehensive care planning session</p>
                        <div class="flex items-center gap-2">
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Edit
                            </button>
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Duplicate
                            </button>
                            <span class="ml-auto text-xs text-neutral-500">Used: 87 times</span>
                        </div>
                    </div>

                    <!-- Urgent Care -->
                    <div
                        class="bg-white rounded-lg border border-neutral-200 p-5 hover:shadow-md transition-shadow">
                        <div class="flex items-start justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center">
                                    <svg class="w-5 h-5 text-rose-600" fill="none"
                                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-neutral-900">Urgent Care</h4>
                                    <p class="text-xs text-neutral-500">45 minutes • $125</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked class="sr-only peer">
                                <div
                                    class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600">
                                </div>
                            </label>
                        </div>
                        <p class="text-sm text-neutral-600 mb-3">Priority appointment for urgent
                            care needs and immediate attention</p>
                        <div class="flex items-center gap-2">
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Edit
                            </button>
                            <button
                                class="h-8 px-3 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">
                                Duplicate
                            </button>
                            <span class="ml-auto text-xs text-neutral-500">Used: 54 times</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Holidays Tab -->
        <div id="scheduleHolidays" class="schedule-content hidden p-6">
            <div class="max-w-4xl mx-auto">
                <div class="mb-4 flex items-center justify-between">
                    <div>
                        <h3 class="text-lg font-semibold text-neutral-900">Holidays & Closures</h3>
                        <p class="text-sm text-neutral-600">Manage dates when your facility will be
                            closed</p>
                    </div>
                    <button
                        class="h-9 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-medium flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24">
                            <path d="M12 4v16m8-8H4" />
                        </svg>
                        Add Holiday/Closure
                    </button>
                </div>

                <!-- Holidays List -->
                <div
                    class="bg-white rounded-lg border border-neutral-200 divide-y divide-neutral-200">
                    <!-- Holiday Item -->
                    <div class="p-4 hover:bg-neutral-50 flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-12 h-12 rounded-lg bg-red-100 flex flex-col items-center justify-center">
                                <div class="text-xs text-red-600 font-medium">DEC</div>
                                <div class="text-lg font-bold text-red-600">25</div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-neutral-900">Christmas Day</h4>
                                <p class="text-sm text-neutral-600">December 25, 2025</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <span
                                class="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium">Full
                                Day Closure</span>
                            <button
                                class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </button>
                            <button
                                class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Holiday Item -->
                    <div class="p-4 hover:bg-neutral-50 flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-12 h-12 rounded-lg bg-blue-100 flex flex-col items-center justify-center">
                                <div class="text-xs text-blue-600 font-medium">JAN</div>
                                <div class="text-lg font-bold text-blue-600">1</div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-neutral-900">New Year's Day</h4>
                                <p class="text-sm text-neutral-600">January 1, 2026</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <span
                                class="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">Full
                                Day Closure</span>
                            <button
                                class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </button>
                            <button
                                class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Holiday Item -->
                    <div class="p-4 hover:bg-neutral-50 flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-12 h-12 rounded-lg bg-amber-100 flex flex-col items-center justify-center">
                                <div class="text-xs text-amber-600 font-medium">NOV</div>
                                <div class="text-lg font-bold text-amber-600">28</div>
                            </div>
                            <div>
                                <h4 class="font-semibold text-neutral-900">Thanksgiving Day</h4>
                                <p class="text-sm text-neutral-600">November 28, 2025</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <span
                                class="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">Full
                                Day Closure</span>
                            <button
                                class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </button>
                            <button
                                class="h-8 w-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center">
                                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor"
                                    stroke-width="2" viewBox="0 0 24 24">
                                    <path
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Time Zones Tab -->
        <div id="scheduleTimeZones" class="schedule-content hidden p-6">
            <div class="max-w-3xl mx-auto">
                <div class="bg-white rounded-lg border border-neutral-200 p-6">
                    <h3 class="text-lg font-semibold text-neutral-900 mb-4">Time Zone Settings</h3>

                    <!-- Primary Time Zone -->
                    <div class="mb-6">
                        <label class="block text-sm font-medium text-neutral-700 mb-2">Primary Time
                            Zone</label>
                        <select
                            class="w-full h-10 px-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-indigo-500">
                            <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                            <option>(GMT-06:00) Central Time (US & Canada)</option>
                            <option>(GMT-07:00) Mountain Time (US & Canada)</option>
                            <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                            <option>(GMT+00:00) UTC</option>
                        </select>
                        <p class="text-xs text-neutral-500 mt-2">All appointments will be displayed
                            in this time zone</p>
                    </div>

                    <!-- Automatic Daylight Saving -->
                    <div class="mb-6">
                        <label class="flex items-center gap-3">
                            <input type="checkbox" checked
                                class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                            <div>
                                <div class="text-sm font-medium text-neutral-900">Automatically
                                    adjust for Daylight Saving Time</div>
                                <div class="text-xs text-neutral-500">System will automatically
                                    adjust times when DST begins/ends</div>
                            </div>
                        </label>
                    </div>

                    <!-- Show User's Time Zone -->
                    <div class="mb-6">
                        <label class="flex items-center gap-3">
                            <input type="checkbox" checked
                                class="w-5 h-5 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500">
                            <div>
                                <div class="text-sm font-medium text-neutral-900">Display user's
                                    local time zone</div>
                                <div class="text-xs text-neutral-500">Show appointments in each
                                    user's local time zone</div>
                            </div>
                        </label>
                    </div>

                    <!-- Current Time Display -->
                    <div class="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                        <div class="text-sm text-indigo-900 font-medium mb-2">Current Time</div>
                        <div class="text-2xl font-bold text-indigo-600">2:45 PM EST</div>
                        <div class="text-xs text-indigo-700 mt-1">December 7, 2025</div>
                    </div>

                    <!-- Save Button -->
                    <div class="mt-6 flex justify-end">
                        <button
                            class="h-10 px-6 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-medium">
                            Save Time Zone Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }} />
  );
}
