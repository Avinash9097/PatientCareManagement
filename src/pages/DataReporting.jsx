import React, { useState } from 'react';

export default function DataReporting({ onClose }) {
  const [activeTab, setActiveTab] = useState('builder');

  function TabButton({ id, children }) {
    return (
      <button
        onClick={() => setActiveTab(id)}
        className={
          'px-4 py-3 text-sm font-medium whitespace-nowrap ' +
          (activeTab === id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent hover:border-neutral-300')
        }
      >
        {children}
      </button>
    );
  }

  return (
    <div id="dataReportingView" className="flex flex-col h-full">
      {/* Header */}
      <div className="h-14 px-4 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-blue-50 to-white">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <div>
            <h2 className="text-base font-semibold text-neutral-900">Data Reporting & Analytics</h2>
            <p className="text-xs text-neutral-500">Generate reports, export data, and analyze trends</p>
          </div>
        </div>
        <button id="closeDataReporting" onClick={onClose} className="h-8 w-8 rounded-lg hover:bg-neutral-100">
          <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="flex overflow-x-auto px-4">
          <TabButton id="builder">Report Builder</TabButton>
          <TabButton id="saved">Saved Reports</TabButton>
          <TabButton id="scheduled">Scheduled Reports</TabButton>
          <TabButton id="export">Data Export</TabButton>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-neutral-50">
        {activeTab === 'builder' && (
          <div id="reportBuilder">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Panel: Configuration */}
              <div className="lg:col-span-1 space-y-4">
                <div className="bg-white rounded-lg border border-neutral-200 p-5">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-4">Report Configuration</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-2">Report Name</label>
                      <input type="text" id="reportName" placeholder="Monthly Patient Summary" className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-2">Report Type</label>
                      <select id="reportType" className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select Type</option>
                        <option value="patient">Patient Report</option>
                        <option value="care">Care Plan Report</option>
                        <option value="financial">Financial Report</option>
                        <option value="quality">Quality Metrics</option>
                        <option value="operational">Operational Report</option>
                        <option value="compliance">Compliance Report</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-2">Date Range</label>
                      <select id="dateRange" className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="today">Today</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="last7">Last 7 Days</option>
                        <option value="last30" selected>Last 30 Days</option>
                        <option value="lastMonth">Last Month</option>
                        <option value="last90">Last 90 Days</option>
                        <option value="ytd">Year to Date</option>
                        <option value="custom">Custom Range</option>
                      </select>
                    </div>

                    <div id="customDateRange" className="hidden grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">From</label>
                        <input type="date" id="dateFrom" className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">To</label>
                        <input type="date" id="dateTo" className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-2">Format</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="report-format-btn active h-9 rounded-lg border-2 border-blue-600 bg-blue-50 text-blue-700 text-xs font-medium" data-format="pdf">PDF</button>
                        <button className="report-format-btn h-9 rounded-lg border-2 border-neutral-300 bg-white text-neutral-700 text-xs font-medium hover:border-blue-400" data-format="excel">Excel</button>
                        <button className="report-format-btn h-9 rounded-lg border-2 border-neutral-300 bg-white text-neutral-700 text-xs font-medium hover:border-blue-400" data-format="csv">CSV</button>
                        <button className="report-format-btn h-9 rounded-lg border-2 border-neutral-300 bg-white text-neutral-700 text-xs font-medium hover:border-blue-400" data-format="json">JSON</button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-2">Filters</label>
                      <div className="space-y-2">
                        <select className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm">
                          <option>All Facilities</option>
                          <option>Main Campus</option>
                          <option>North Branch</option>
                          <option>South Branch</option>
                        </select>
                        <select className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm">
                          <option>All Care Levels</option>
                          <option>Independent Living</option>
                          <option>Assisted Living</option>
                          <option>Memory Care</option>
                          <option>Skilled Nursing</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-200">
                      <button id="generateReport" className="w-full h-10 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Generate Report
                      </button>
                      <button className="w-full h-9 mt-2 rounded-lg border border-neutral-300 text-neutral-700 text-sm font-medium hover:bg-neutral-50">Save Template</button>
                    </div>
                  </div>
                </div>

                {/* Quick Reports */}
                <div className="bg-white rounded-lg border border-neutral-200 p-5">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-3">Quick Reports</h3>
                  <div className="space-y-2">
                    <button className="w-full h-9 rounded-lg border border-neutral-300 text-left px-3 text-xs hover:bg-neutral-50 flex items-center justify-between">
                      <span>Daily Census</span>
                      <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <button className="w-full h-9 rounded-lg border border-neutral-300 text-left px-3 text-xs hover:bg-neutral-50 flex items-center justify-between">
                      <span>Medication Report</span>
                      <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <button className="w-full h-9 rounded-lg border border-neutral-300 text-left px-3 text-xs hover:bg-neutral-50 flex items-center justify-between">
                      <span>Incident Log</span>
                      <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <button className="w-full h-9 rounded-lg border border-neutral-300 text-left px-3 text-xs hover:bg-neutral-50 flex items-center justify-between">
                      <span>Financial Summary</span>
                      <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Panel: Preview */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg border border-neutral-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-neutral-900">Report Preview</h3>
                    <div className="flex gap-2">
                      <button className="h-8 px-3 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50">Preview</button>
                      <button className="h-8 px-3 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50">Print</button>
                    </div>
                  </div>

                  <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center min-h-[500px] flex flex-col items-center justify-center">
                    <svg className="w-16 h-16 text-neutral-400 mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <h4 className="text-base font-semibold text-neutral-900 mb-2">No Report Generated</h4>
                    <p className="text-sm text-neutral-500 mb-4 max-w-md">Configure your report settings and click "Generate Report" to see a preview here.</p>

                    <div id="reportPreviewStats" className="hidden w-full max-w-2xl">
                      <div className="mb-6 pb-4 border-b border-neutral-200">
                        <h3 className="text-lg font-bold text-neutral-900 mb-1">Patient Care Summary Report</h3>
                        <p className="text-sm text-neutral-600">November 1, 2024 - November 30, 2024</p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">1,248</div>
                          <div className="text-xs text-neutral-600 mt-1">Total Patients</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">892</div>
                          <div className="text-xs text-neutral-600 mt-1">Active Care Plans</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">94%</div>
                          <div className="text-xs text-neutral-600 mt-1">Compliance Rate</div>
                        </div>
                      </div>

                      <div className="text-left space-y-3">
                        <div className="flex justify-between text-sm"><span className="text-neutral-600">New Admissions:</span><span className="font-semibold">45</span></div>
                        <div className="flex justify-between text-sm"><span className="text-neutral-600">Discharges:</span><span className="font-semibold">28</span></div>
                        <div className="flex justify-between text-sm"><span className="text-neutral-600">Average Length of Stay:</span><span className="font-semibold">18.5 days</span></div>
                        <div className="flex justify-between text-sm"><span className="text-neutral-600">Patient Satisfaction:</span><span className="font-semibold">4.8/5.0</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'saved' && (
          <div id="reportSaved">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="text" id="searchSavedReports" placeholder="Search reports..." className="h-9 w-64 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <select className="h-9 rounded-lg border border-neutral-300 px-3 text-sm">
                  <option>All Types</option>
                  <option>Patient Reports</option>
                  <option>Financial Reports</option>
                  <option>Quality Reports</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Sample saved reports - kept static */}
              <div className="bg-white rounded-lg border border-neutral-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" /></svg>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">Patient</span>
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-1">Monthly Patient Summary</h3>
                <p className="text-xs text-neutral-500 mb-3">Last 30 days • PDF Format</p>
                <div className="flex items-center justify-between text-xs text-neutral-600 mb-4"><span>Created: Nov 28, 2024</span><span>2.4 MB</span></div>
                <div className="flex gap-2">
                  <button className="flex-1 h-8 rounded-lg bg-blue-600 text-white text-xs hover:bg-blue-700">Download</button>
                  <button className="h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </button>
                  <button className="h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'scheduled' && (
          <div id="reportScheduled">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-neutral-900">Automated Report Schedules</h3>
              <button id="addScheduleBtn" className="h-9 px-4 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 flex items-center gap-2">Add Schedule</button>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-lg border border-neutral-200 p-5">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-sm font-semibold text-neutral-900">Daily Census Report</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Active</span>
                    </div>
                    <p className="text-xs text-neutral-600 mb-3">Automated patient census summary sent to admin team</p>
                    <div className="grid grid-cols-4 gap-4 text-xs">
                      <div><div className="text-neutral-500 mb-1">Frequency</div><div className="font-semibold">Daily at 8:00 AM</div></div>
                      <div><div className="text-neutral-500 mb-1">Format</div><div className="font-semibold">PDF</div></div>
                      <div><div className="text-neutral-500 mb-1">Recipients</div><div className="font-semibold">5 users</div></div>
                      <div><div className="text-neutral-500 mb-1">Last Run</div><div className="font-semibold">Today, 8:02 AM</div></div>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button className="h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center" title="Edit">Edit</button>
                    <button className="h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center" title="Pause">Pause</button>
                    <button className="h-8 w-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 flex items-center justify-center" title="Delete">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'export' && (
          <div id="reportExport">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg border border-neutral-200 p-6">
                <h3 className="text-base font-semibold text-neutral-900 mb-4">Bulk Data Export</h3>
                <p className="text-sm text-neutral-600 mb-6">Export large datasets for analysis, backup, or migration purposes.</p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-3">Select Data to Export</label>
                    <div className="grid md:grid-cols-2 gap-3">
                      <label className="flex items-center gap-3 p-4 border-2 border-neutral-300 rounded-lg hover:border-blue-500 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded text-blue-600" />
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Patient Data</div>
                          <div className="text-xs text-neutral-500">Demographics, contacts, medical history</div>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 p-4 border-2 border-neutral-300 rounded-lg hover:border-blue-500 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded text-blue-600" />
                        <div className="flex-1"><div className="font-semibold text-sm">Care Plans</div><div className="text-xs text-neutral-500">Active and historical care plans</div></div>
                      </label>
                      <label className="flex items-center gap-3 p-4 border-2 border-neutral-300 rounded-lg hover:border-blue-500 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded text-blue-600" />
                        <div className="flex-1"><div className="font-semibold text-sm">Medications</div><div className="text-xs text-neutral-500">Prescriptions, dosages, schedules</div></div>
                      </label>
                      <label className="flex items-center gap-3 p-4 border-2 border-neutral-300 rounded-lg hover:border-blue-500 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded text-blue-600" />
                        <div className="flex-1"><div className="font-semibold text-sm">Assessments</div><div className="text-xs text-neutral-500">Clinical assessments and evaluations</div></div>
                      </label>
                      <label className="flex items-center gap-3 p-4 border-2 border-neutral-300 rounded-lg hover:border-blue-500 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded text-blue-600" />
                        <div className="flex-1"><div className="font-semibold text-sm">Financial Records</div><div className="text-xs text-neutral-500">Billing, payments, insurance claims</div></div>
                      </label>
                      <label className="flex items-center gap-3 p-4 border-2 border-neutral-300 rounded-lg hover:border-blue-500 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded text-blue-600" />
                        <div className="flex-1"><div className="font-semibold text-sm">Activity Logs</div><div className="text-xs text-neutral-500">System activities and audit trails</div></div>
                      </label>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Export Format</label>
                      <select className="w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm">
                        <option>CSV (Comma Separated)</option>
                        <option>Excel (XLSX)</option>
                        <option>JSON</option>
                        <option>XML</option>
                        <option>SQL Dump</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Date Range</label>
                      <select className="w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm">
                        <option>All Time</option>
                        <option>Last 30 Days</option>
                        <option>Last 90 Days</option>
                        <option>Last 6 Months</option>
                        <option>Last Year</option>
                        <option>Custom Range</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" /></svg>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-amber-900 mb-1">Privacy & Compliance Notice</div>
                        <div className="text-xs text-amber-700">Exported data contains PHI and must be handled according to HIPAA regulations. Ensure secure storage and transmission.</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                    <div className="text-sm text-neutral-600">Estimated size: <span className="font-semibold">~24.5 MB</span></div>
                    <div className="flex gap-3">
                      <button className="h-10 px-6 rounded-lg border border-neutral-300 text-sm font-medium hover:bg-neutral-50">Preview Selection</button>
                      <button id="startExport" className="h-10 px-6 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">Start Export</button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-white rounded-lg border border-neutral-200 p-6">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-4">Recent Exports</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold">Patient Data Export</div>
                          <div className="text-xs text-neutral-500">Completed Dec 5, 2024 • 18.2 MB • CSV</div>
                        </div>
                      </div>
                      <button className="h-8 px-4 rounded-lg bg-blue-600 text-white text-xs hover:bg-blue-700">Download</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
