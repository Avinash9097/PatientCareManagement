import React from "react";

export default function LeftSidebar({ leftBarRef, onCollapse }) {
  return (
    <aside
      id="leftBar"
      ref={leftBarRef}
      className="h-full bg-white border-r border-neutral-200 flex flex-col items-center py-3 gap-2"
    >
      <div className="text-[10px] font-semibold tracking-wide">MCP</div>
      <a
        href="#"
        className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-5l-2 2-2-2H5a2 2 0 01-2-2V7z" />
        </svg>
        <span className="tooltip">Tasks</span>
      </a>
      <a
        href="#"
        className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M8 7V3m8 4V3M3 10h18M5 21h14a2 2 0 002-2v-9H3v9a2 2 0 002 2z" />
        </svg>
        <span className="tooltip">Calendar</span>
      </a>
      <a
        href="ptdash.html"
        className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M16 14a4 4 0 10-8 0v1a4 4 0 01-4 4h16a4 4 0 01-4-4v-1zM12 12a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
        <span className="tooltip">Patients</span>
      </a>
      <div className="mt-auto">
        <button
          id="collapseLeft"
          className="w-10 h-10 rounded-xl hover:bg-neutral-100"
          title="Collapse/expand left"
          onClick={onCollapse}
        >
          <svg
            className="w-5 h-5 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
