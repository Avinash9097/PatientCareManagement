import React from "react";

export default function RightSidebar({ rightBarRef, onCollapse }) {
  return (
    <aside
      id="rightBar"
      ref={rightBarRef}
      className="w-16 bg-white border-l border-neutral-200 flex flex-col items-center py-3 gap-2"
    >
      <a
        tabIndex={0}
        className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100"
      >
        <div className="w-6 h-6 rounded-lg bg-neutral-900 text-white text-[10px] font-semibold grid place-items-center">
          MCP
        </div>
        <div role="tooltip" className="tooltip w-56 right-full mr-2">
          <div className="font-semibold">MasterCarePlan — Care Navigator</div>
          <div className="mt-1 flex items-center gap-2 text-[11px] text-neutral-300">
            <span>All Tenants</span>
            <span className="w-1 h-1 rounded-full bg-neutral-500"></span>
            <span>Today</span>
          </div>
        </div>
      </a>
      <a href="RBC.html" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4z" />
          <path d="M9 4v16M15 4v16" />
        </svg>
        <span className="tooltip">Reports</span>
      </a>
      <a href="AdvTable.html" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4z" />
          <path d="M4 10h16M10 4v16" />
        </svg>
        <span className="tooltip">Tables</span>
      </a>
      <a href="contactManagement.html" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4z" />
          <path d="M4 10h16M10 4v16" />
        </svg>
        <span className="tooltip">Contact Management</span>
      </a>
      <a href="#" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h10M4 18h6" />
        </svg>
        <span className="tooltip">Settings</span>
      </a>
      <a href="alertManagement.html" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h10M4 18h6" />
        </svg>
        <span className="tooltip">Alert Management</span>
      </a>
      <a href="MedicationManagement.html" className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h10M4 18h6" />
        </svg>
        <span className="tooltip">Medication Management</span>
      </a>
      <div className="mt-auto">
        <button
          id="collapseRight"
          className="w-10 h-10 rounded-xl hover:bg-neutral-100"
          title="Collapse/expand right"
          onClick={onCollapse}
        >
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M3 5h18M6 10h12M10 15h4" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
