import React from "react";

export default function RightListPane({ rightListPaneRef, navigate }) {
  const tools = [
    { id: "exp", name: "Export Data", updated: "Now", desc: "CSV/XLSX export wizard" },
    { id: "imp", name: "Import Data", updated: "Today", desc: "Map + validate incoming fields" },
    { id: "aud", name: "Audit Log", updated: "Yesterday", desc: "User actions & PHI access trail" },
    { id: "rep", name: "Reports", updated: "2025-08-10", desc: "Operational KPIs & dashboards", action: () => navigate('/rbc') },
    { id: "cfg", name: "Configuration", updated: "2025-08-07", desc: "Columns, roles, policies" }
  ];

  return (
    <section
      id="rightListPane"
      ref={rightListPaneRef}
      className="w-[300px] min-w-[220px] max-w-[440px] bg-white border-l border-neutral-200 flex flex-col"
    >
      <div className="h-12 px-3 flex items-center justify-between border-b border-neutral-200">
        <div className="text-sm font-semibold">Tools</div>
        <div className="flex items-center gap-1">
          <button
            className="h-8 w-8 rounded-lg hover:bg-neutral-100"
            title="Refresh"
            onClick={() => { /* refresh tools */ }}
          >
            <svg
              className="w-4 h-4 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M4 4v6h6M20 20v-6h-6M20 9a8 8 0 10-3.3 6.5" />
            </svg>
          </button>
        </div>
      </div>
      <div id="rightListItems" className="flex-1 overflow-y-auto divide-y divide-neutral-200 text-sm">
        {tools.map((r) => (
          <div
            key={r.id}
            className="px-3 py-3 hover:bg-neutral-50 cursor-pointer"
            onClick={() => {
              if (r.action) r.action();
            }}
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">{r.name}</div>
              <span className="text-[11px] text-neutral-500">{r.updated}</span>
            </div>
            <div className="text-xs text-neutral-500 truncate">{r.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
