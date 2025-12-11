// src/components/Header.jsx
import React from "react";

export default function Header({ globalSearch, setGlobalSearch }) {
  return (
    <header className="h-14 bg-white border-b border-neutral-200 px-3 lg:px-4 flex items-center justify-between">
      <div className="flex items-center gap-3 min-w-0">
        <div className="text-sm font-semibold truncate">XYZ — Care Navigator</div>
        <div className="hidden md:flex text-xs text-neutral-500 items-center gap-2 shrink-0">
          <span>All Tenants</span><span>•</span><span>Today</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            id="globalSearch"
            type="text"
            className="h-9 w-64 lg:w-80 rounded-xl border border-neutral-300 px-3 text-sm focus:outline-none focus:ring focus:ring-neutral-200"
            placeholder="Search patients, tasks, docs..."
            value={globalSearch}
            onChange={e => setGlobalSearch(e.target.value)}
          />
        </div>
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.39-1.02L3 20l1.37-3.93A7.77 7.77 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">3</span>
        </button>
        <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6V10a6 6 0 10-12 0v6l-2 2v1h16v-1l-2-2z" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">7</span>
        </button>
        <button id="newBtn" className="h-9 px-3 rounded-xl bg-neutral-900 text-white text-sm hover:bg-neutral-800">New</button>
      </div>
    </header>
  );
}