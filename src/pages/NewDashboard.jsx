import React, { useState } from 'react';

export default function NewDashboard({ onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  function TabButton({ name, label }) {
    const active = activeTab === name;
    const base = active ? 'px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap' : 'px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap';
    const color = active ? 'text-indigo-600 border-indigo-600' : 'text-neutral-600 border-transparent hover:text-neutral-900 hover:border-neutral-300';
    return (
      <button
        onClick={() => setActiveTab(name)}
        aria-pressed={active}
        className={`dash-tab ${base} ${color}`}
        data-tab={name}
      >
        {label}
      </button>
    );
  }

  return (
    <div id="dashboardView" className="flex flex-col h-full">
      {/* Header */}
      <div className="h-14 px-4 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-indigo-50 to-white">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <div>
            <h2 className="text-base font-semibold text-neutral-900">XYZ Plan Dashboard</h2>
            <p className="text-xs text-neutral-500">Real-time insights and analytics</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-8 px-3 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export
          </button>
          <button id="closeDashboard" className="h-8 w-8 rounded-lg hover:bg-neutral-100" onClick={onClose}>
            <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dashboard Tabs */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="flex overflow-x-auto px-4">
          {/* manage active tab with state */}
          <TabButton name="overview" label="Overview" />
          <TabButton name="patients" label="Patient Analytics" />
          <TabButton name="care" label="Care Quality" />
          <TabButton name="financial" label="Financial" />
          <TabButton name="operations" label="Operations" />
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-neutral-50">
        {/* Overview Dashboard */}
        <div id="dashOverview" className={activeTab === 'overview' ? 'dash-content' : 'dash-content hidden'}>
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Total Patients */}
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-semibold text-neutral-600">Total Patients</div>
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-bold text-neutral-900">1,248</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs text-green-600 font-medium">↑ 12%</span>
                <span className="text-xs text-neutral-500">vs last month</span>
              </div>
            </div>

            {/* Active Care Plans */}
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-semibold text-neutral-600">Active Care Plans</div>
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-bold text-neutral-900">892</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs text-green-600 font-medium">↑ 8%</span>
                <span className="text-xs text-neutral-500">completion rate</span>
              </div>
            </div>

            {/* Avg Response Time */}
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-semibold text-neutral-600">Avg Response Time</div>
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-bold text-neutral-900">2.4h</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs text-green-600 font-medium">↓ 18%</span>
                <span className="text-xs text-neutral-500">improvement</span>
              </div>
            </div>

            {/* Patient Satisfaction */}
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-semibold text-neutral-600">Patient Satisfaction</div>
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-bold text-neutral-900">4.8/5.0</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs text-green-600 font-medium">↑ 0.3</span>
                <span className="text-xs text-neutral-500">from 4.5</span>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {/* Patient Enrollment Trend */}
            <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-neutral-900">Patient Enrollment Trend</h3>
                <select className="text-xs border border-neutral-300 rounded px-2 py-1">
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-600">January</span>
                  <span className="text-xs font-semibold">198</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-600">February</span>
                  <span className="text-xs font-semibold">215</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '82%' }} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-600">March</span>
                  <span className="text-xs font-semibold">243</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-600">April</span>
                  <span className="text-xs font-semibold">264</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>

            {/* Risk Distribution */}
            <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">Patient Risk Distribution</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-neutral-600">High Risk</span>
                    <span className="text-xs font-semibold text-red-600">156 (12.5%)</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '12.5%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-neutral-600">Medium Risk</span>
                    <span className="text-xs font-semibold text-yellow-600">437 (35%)</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-3">
                    <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '35%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-neutral-600">Low Risk</span>
                    <span className="text-xs font-semibold text-green-600">655 (52.5%)</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '52.5%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities & Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Recent Activities */}
            <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">Recent Activities</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 pb-3 border-b border-neutral-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-neutral-900">Care Plan Updated</p>
                    <p className="text-xs text-neutral-500">Patient #1024 care plan reviewed</p>
                    <p className="text-xs text-neutral-400 mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-3 border-b border-neutral-100">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-neutral-900">New Patient Enrolled</p>
                    <p className="text-xs text-neutral-500">Sarah Johnson added to system</p>
                    <p className="text-xs text-neutral-400 mt-1">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-neutral-900">Message Received</p>
                    <p className="text-xs text-neutral-500">Dr. Smith sent care notes</p>
                    <p className="text-xs text-neutral-400 mt-1">5 hours ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Critical Alerts */}
            <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">Critical Alerts</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-red-900">High Risk Patient Alert</p>
                    <p className="text-xs text-red-700">Patient #1087 - Vitals abnormal</p>
                    <button className="text-xs text-red-600 font-medium hover:text-red-700 mt-1">Review Now →</button>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-amber-900">Medication Review Due</p>
                    <p className="text-xs text-amber-700">15 patients need review today</p>
                    <button className="text-xs text-amber-600 font-medium hover:text-amber-700 mt-1">View List →</button>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-blue-900">Upcoming Appointments</p>
                    <p className="text-xs text-blue-700">28 scheduled for tomorrow</p>
                    <button className="text-xs text-blue-600 font-medium hover:text-blue-700 mt-1">View Schedule →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Analytics Dashboard */}
        <div id="dashPatients" className={activeTab === 'patients' ? 'dash-content' : 'dash-content hidden'}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            {/* Demographics */}
            <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">Age Demographics</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>18-35 years</span>
                    <span className="font-semibold">18%</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '18%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>36-50 years</span>
                    <span className="font-semibold">28%</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '28%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>51-65 years</span>
                    <span className="font-semibold">35%</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '35%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>65+ years</span>
                    <span className="font-semibold">19%</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '19%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Gender Distribution */}
            <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">Gender Distribution</h3>
              <div className="flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">52%</div>
                  <div className="text-xs text-neutral-600">Female</div>
                </div>
                <div className="mx-6 h-20 w-px bg-neutral-200" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">48%</div>
                  <div className="text-xs text-neutral-600">Male</div>
                </div>
              </div>
            </div>

            {/* Chronic Conditions */}
            <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">Top Chronic Conditions</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-neutral-50 rounded">
                  <span className="text-xs text-neutral-700">Hypertension</span>
                  <span className="text-xs font-semibold text-neutral-900">432</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-neutral-50 rounded">
                  <span className="text-xs text-neutral-700">Diabetes Type 2</span>
                  <span className="text-xs font-semibold text-neutral-900">368</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-neutral-50 rounded">
                  <span className="text-xs text-neutral-700">COPD</span>
                  <span className="text-xs font-semibold text-neutral-900">245</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-neutral-50 rounded">
                  <span className="text-xs text-neutral-700">Heart Disease</span>
                  <span className="text-xs font-semibold text-neutral-900">198</span>
                </div>
              </div>
            </div>
          </div>

          {/* Patient Engagement */}
          <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm mb-4">
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Patient Engagement Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">87%</div>
                <div className="text-xs text-neutral-600 mt-1">Portal Usage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">92%</div>
                <div className="text-xs text-neutral-600 mt-1">Appointment Adherence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">78%</div>
                <div className="text-xs text-neutral-600 mt-1">Medication Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">4.6/5</div>
                <div className="text-xs text-neutral-600 mt-1">Satisfaction Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* Care Quality Dashboard */}
        <div id="dashCare" className={activeTab === 'care' ? 'dash-content' : 'dash-content hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="text-xs font-semibold text-neutral-600 mb-2">Care Plan Adherence</div>
              <div className="text-2xl font-bold text-green-600">94%</div>
              <div className="text-xs text-neutral-500 mt-1">Target: 90%</div>
            </div>
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="text-xs font-semibold text-neutral-600 mb-2">Quality Score</div>
              <div className="text-2xl font-bold text-blue-600">8.7/10</div>
              <div className="text-xs text-neutral-500 mt-1">Industry Avg: 7.5</div>
            </div>
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="text-xs font-semibold text-neutral-600 mb-2">Readmission Rate</div>
              <div className="text-2xl font-bold text-amber-600">4.2%</div>
              <div className="text-xs text-neutral-500 mt-1">↓ 1.3% vs last quarter</div>
            </div>
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="text-xs font-semibold text-neutral-600 mb-2">Preventive Care</div>
              <div className="text-2xl font-bold text-purple-600">89%</div>
              <div className="text-xs text-neutral-500 mt-1">Screening completion</div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-neutral-900 mb-4">Quality Indicators by Category</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-medium">Clinical Outcomes</span>
                  <span className="font-semibold text-green-600">Excellent (95%)</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '95%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-medium">Patient Safety</span>
                  <span className="font-semibold text-green-600">Excellent (92%)</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-medium">Care Coordination</span>
                  <span className="font-semibold text-blue-600">Good (88%)</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '88%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="font-medium">Documentation Quality</span>
                  <span className="font-semibold text-amber-600">Fair (76%)</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-3">
                  <div className="bg-amber-500 h-3 rounded-full" style={{ width: '76%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Dashboard */}
        <div id="dashFinancial" className={activeTab === 'financial' ? 'dash-content' : 'dash-content hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="text-xs font-semibold text-neutral-600 mb-2">Monthly Revenue</div>
              <div className="text-2xl font-bold text-green-600">$1.2M</div>
              <div className="text-xs text-green-600 mt-1">↑ 15% MoM</div>
            </div>
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="text-xs font-semibold text-neutral-600 mb-2">Operating Costs</div>
              <div className="text-2xl font-bold text-neutral-900">$845K</div>
              <div className="text-xs text-green-600 mt-1">↓ 3% efficiency gain</div>
            </div>
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="text-xs font-semibold text-neutral-600 mb-2">Claims Pending</div>
              <div className="text-2xl font-bold text-amber-600">$234K</div>
              <div className="text-xs text-neutral-500 mt-1">128 claims</div>
            </div>
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="text-xs font-semibold text-neutral-600 mb-2">Collection Rate</div>
              <div className="text-2xl font-bold text-blue-600">96.5%</div>
              <div className="text-xs text-green-600 mt-1">Above target</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">Revenue by Payer</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <span className="text-xs font-medium">Medicare</span>
                  <span className="text-sm font-bold text-blue-600">$485K (40%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="text-xs font-medium">Private Insurance</span>
                  <span className="text-sm font-bold text-green-600">$425K (35%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                  <span className="text-xs font-medium">Medicaid</span>
                  <span className="text-sm font-bold text-purple-600">$215K (18%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded">
                  <span className="text-xs font-medium">Self-Pay</span>
                  <span className="text-sm font-bold text-neutral-600">$75K (7%)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">Cost Breakdown</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Personnel</span>
                    <span className="font-semibold">$420K (50%)</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2">
                    <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '50%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Facilities</span>
                    <span className="font-semibold">$210K (25%)</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '25%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Technology</span>
                    <span className="font-semibold">$125K (15%)</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '15%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Other</span>
                    <span className="font-semibold">$90K (10%)</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '10%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operations Dashboard */}
        <div id="dashOperations" className={activeTab === 'operations' ? 'dash-content' : 'dash-content hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="text-xs font-semibold text-neutral-600 mb-2">Staff Utilization</div>
              <div className="text-2xl font-bold text-blue-600">87%</div>
              <div className="text-xs text-neutral-500 mt-1">Optimal range: 80-90%</div>
            </div>
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="text-xs font-semibold text-neutral-600 mb-2">Avg Wait Time</div>
              <div className="text-2xl font-bold text-green-600">12min</div>
              <div className="text-xs text-green-600 mt-1">↓ 3min improvement</div>
            </div>
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="text-xs font-semibold text-neutral-600 mb-2">Task Completion</div>
              <div className="text-2xl font-bold text-purple-600">94%</div>
              <div className="text-xs text-neutral-500 mt-1">On-time rate</div>
            </div>
            <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-sm">
              <div className="text-xs font-semibold text-neutral-600 mb-2">System Uptime</div>
              <div className="text-2xl font-bold text-green-600">99.8%</div>
              <div className="text-xs text-neutral-500 mt-1">Last 30 days</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">Team Performance</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-neutral-200 rounded">
                  <div>
                    <div className="text-xs font-medium text-neutral-900">Care Coordinators</div>
                    <div className="text-xs text-neutral-500">24 active staff</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-600">98%</div>
                    <div className="text-xs text-neutral-500">efficiency</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-neutral-200 rounded">
                  <div>
                    <div className="text-xs font-medium text-neutral-900">Nurses</div>
                    <div className="text-xs text-neutral-500">18 active staff</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-blue-600">92%</div>
                    <div className="text-xs text-neutral-500">efficiency</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-neutral-200 rounded">
                  <div>
                    <div className="text-xs font-medium text-neutral-900">Admin Staff</div>
                    <div className="text-xs text-neutral-500">12 active staff</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-purple-600">89%</div>
                    <div className="text-xs text-neutral-500">efficiency</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">Resource Allocation</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="font-medium">Direct Patient Care</span>
                    <span className="font-semibold">65%</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="font-medium">Documentation</span>
                    <span className="font-semibold">20%</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '20%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="font-medium">Coordination</span>
                    <span className="font-semibold">10%</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full" style={{ width: '10%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="font-medium">Training</span>
                    <span className="font-semibold">5%</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-3">
                    <div className="bg-amber-500 h-3 rounded-full" style={{ width: '5%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
