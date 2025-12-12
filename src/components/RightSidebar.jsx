import React from "react";

export default function RightSidebar({ rightBarRef, onCollapse }) {
  return (
    <aside
      id="rightBar"
      ref={rightBarRef}
      className="w-16 bg-gradient-to-b from-indigo-50 to-white border-l-2 border-indigo-200 flex flex-col items-center py-3 gap-2 shadow-lg"
    >
      {/* Utilities Header */}
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      <div className="text-[9px] font-bold text-indigo-700 tracking-wider">UTILITIES</div>

      {/* Scheduling Module */}
      <button id="openScheduling" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group">
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="tooltip">Scheduling</span>
      </button>

      {/* Communication Config */}
      <button id="openCommConfig" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group">
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="tooltip">Communication</span>
      </button>

      {/* Email Templates */}
      <button id="openEmailTemplates" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group">
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="tooltip">Email Templates</span>
      </button>

      {/* SMS Templates */}
      <button id="openSMSTemplates" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group">
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span className="tooltip">SMS Templates</span>
      </button>

      {/* Notification Settings */}
      <button id="openNotificationSettings" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group">
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="tooltip">Notifications</span>
      </button>

      {/* Workflow Automation */}
      <button id="openWorkflows" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group">
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="tooltip">Workflows</span>
      </button>

      {/* Integrations */}
      <button id="openIntegrations" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group">
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
        <span className="tooltip">Integrations</span>
      </button>

      {/* Backup & Restore */}
      <button id="openBackup" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group">
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
        <span className="tooltip">Backup & Restore</span>
      </button>

      {/* Bottom Utilities */}
      <div className="mt-auto border-t-2 border-indigo-200 pt-2 flex flex-col gap-2">
        {/* System Health */}
        <button id="openSystemHealth" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-green-100 hover:shadow-md transition-all group">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="tooltip">System Health</span>
        </button>

        {/* API Documentation */}
        <button id="openAPIDocs" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="tooltip">API Docs</span>
        </button>

        {/* Settings */}
        <button id="openUtilitySettings" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-indigo-100 hover:shadow-md transition-all group">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          <span className="tooltip">Utility Settings</span>
        </button>

        {/* Collapse/Expand */}
        <button id="collapseRight" className="w-10 h-10 rounded-xl hover:bg-indigo-100" title="Collapse/expand utilities" onClick={onCollapse}>
          <svg className="w-5 h-5 mx-auto text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
