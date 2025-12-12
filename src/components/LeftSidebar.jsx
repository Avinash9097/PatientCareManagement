import React, { useState, useEffect } from "react";

export default function LeftSidebar({ leftBarRef, onCollapse, onShowDashboard, onShowTenantSetup, onShowDataReporting, onShowMasterTables, onShowUserManagement }) {
  const [callOpen, setCallOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dialpad");
  const [callNumber, setCallNumber] = useState("");
  const [inCall, setInCall] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, author: "them", name: "John Doe", text: "Hello! How can I help you?" },
    { id: 2, author: "me", name: "Me", text: "I need assistance with my care plan." },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageTo, setMessageTo] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [logoutOpen, setLogoutOpen] = useState(false);

  useEffect(() => {
    // optional: lock body scroll when call panel open
    if (callOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [callOpen]);

  function handleOpenCall() {
    setCallOpen(true);
    setActiveTab("dialpad");
  }

  function handleCloseCall() {
    setCallOpen(false);
  }

  function handleDial(char) {
    setCallNumber((s) => s + String(char));
  }

  function handleBackspace() {
    setCallNumber((s) => s.slice(0, -1));
  }

  function handleStartCall() {
    if (!callNumber) return; // don't start empty
    setInCall(true);
  }

  function handleEndCall() {
    setInCall(false);
  }

  function handleOpenChat() {
    setChatOpen(true);
  }

  function handleCloseChat() {
    setChatOpen(false);
  }

  function handleSendChat() {
    const txt = chatInput.trim();
    if (!txt) return;
    setChatMessages((s) => [...s, { id: Date.now(), author: "me", text: txt }]);
    setChatInput("");
  }

  function handleOpenMessage() {
    setMessageOpen(true);
  }

  function handleCloseMessage() {
    setMessageOpen(false);
  }

  function handleSendMessage() {
    // simple send: validate and clear fields
    const to = messageTo.trim();
    const body = messageBody.trim();
    if (!to || !body) return;
    // for now just clear inputs (could hook into API)
    setMessageTo("");
    setMessageSubject("");
    setMessageBody("");
    setMessageOpen(false);
  }

  function handleOpenLogout() {
    setLogoutOpen(true);
  }

  function handleCloseLogout() {
    setLogoutOpen(false);
  }

  function handleConfirmLogout() {
    // placeholder: actual logout should call auth/logout
    setLogoutOpen(false);
    // Optionally redirect or call a prop handler
  }

  return (
    <>
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

      <a
        href="#"
        className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M8 7V3m8 4V3M3 10h18M5 21h14a2 2 0 002-2v-9H3v9a2 2 0 002 2z" />
        </svg>
        <span className="tooltip">Chat</span>
      </a>

      {/* BOTTOM SPACER */}
      <button
        id="openDashboard"
        onClick={() => { onShowDashboard && onShowDashboard(); }}
        className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="tooltip">Dashboard</span>
      </button>

      <button
        id="openTenantSetup"
        onClick={() => { onShowTenantSetup && onShowTenantSetup(); }}
        className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        <span className="tooltip">Tenant Setup</span>
      </button>

      <button
        id="openDataReporting"
        onClick={() => { onShowDataReporting && onShowDataReporting(); }}
        className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span className="tooltip">Data</span>
      </button>

      <button
        id="openMasterTables"
        onClick={() => { onShowMasterTables && onShowMasterTables(); }}
        className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        <span className="tooltip">Master</span>
      </button>

      <button
        id="openUserManagement"
        onClick={() => { onShowUserManagement && onShowUserManagement(); }}
        className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <span className="tooltip">Users</span>
      </button>

      {/* Bottom Action Buttons */}
      <div className="mt-auto border-t border-neutral-200 pt-2 flex flex-col gap-2">
        <button id="openCallSection" onClick={handleOpenCall} className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="tooltip">Call</span>
        </button>

        <button id="openChatSection" onClick={handleOpenChat} className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="tooltip">Chat</span>
        </button>

        <button id="openMessageSection" onClick={handleOpenMessage} className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="tooltip">Message</span>
        </button>

        <button id="openLogoutSection" onClick={handleOpenLogout} className="nav-item relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-100">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="tooltip">Logout</span>
        </button>

        <button id="collapseLeft" className="w-10 h-10 rounded-xl hover:bg-neutral-100" title="Collapse/expand left" onClick={onCollapse}>
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      </aside>

      {/* Call Section with Dialpad */}
      <aside
        id="callSection"
        className={`fixed bottom-0 left-16 w-80 bg-white border border-neutral-300 rounded-lg shadow-2xl z-50 max-h-[85vh] overflow-hidden ${callOpen ? '' : 'hidden'}`}
      >
        <div className="h-10 px-3 border-b border-neutral-200 flex items-center justify-between bg-blue-600 rounded-t-lg">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="text-xs font-semibold text-white">Phone</div>
          </div>
          <button onClick={handleCloseCall} className="closeSection h-7 w-7 rounded-lg hover:bg-blue-700 text-white" data-section="callSection">
            <svg className="w-3.5 h-3.5 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        {/* Dialpad Tabs */}
        <div className="border-b border-neutral-200 bg-white">
          <div className="flex text-center">
            <button onClick={() => setActiveTab('dialpad')} className={`dialpad-sticky-tab flex-1 py-2 text-[11px] font-medium hover:bg-neutral-50 ${activeTab==='dialpad' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-neutral-600'}`}>
              Dialpad
            </button>
            <button onClick={() => setActiveTab('calls')} className={`dialpad-sticky-tab flex-1 py-2 text-[11px] font-medium hover:bg-neutral-50 ${activeTab==='calls' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-neutral-600'}`}>
              Calls
            </button>
            <button onClick={() => setActiveTab('recordings')} className={`dialpad-sticky-tab flex-1 py-2 text-[11px] font-medium hover:bg-neutral-50 ${activeTab==='recordings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-neutral-600'}`}>
              Recordings
            </button>
            <button onClick={() => setActiveTab('hud')} className={`dialpad-sticky-tab flex-1 py-2 text-[11px] font-medium hover:bg-neutral-50 ${activeTab==='hud' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-neutral-600'}`}>
              HUD
            </button>
          </div>
        </div>

        {/* Tab Content Container */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(85vh - 100px)' }}>

          {/* Dialpad Tab Content */}
          <div id="dialpadTabContent" style={{display: activeTab==='dialpad' ? 'flex' : 'none'}} className="tab-content p-3 flex flex-col items-center">
            {/* Phone Number Display */}
            <div className="w-full mb-3">
              <input
                id="callNumberInput"
                type="text"
                value={callNumber}
                onChange={(e) => setCallNumber(e.target.value)}
                className="w-full text-center text-lg py-1.5 px-2 border-b-2 border-neutral-300 focus:border-blue-600 focus:outline-none bg-transparent"
                placeholder="Enter a name or number"
              />
            </div>

            {/* Dialpad Grid */}
            <div className="grid grid-cols-3 gap-2.5 mb-3 w-full max-w-xs">
              {[
                {n:'1',t:''},{n:'2',t:'ABC'},{n:'3',t:'DEF'},
                {n:'4',t:'GHI'},{n:'5',t:'JKL'},{n:'6',t:'MNO'},
                {n:'7',t:'PQRS'},{n:'8',t:'TUV'},{n:'9',t:'WXYZ'},
                {n:'*',t:''},{n:'0',t:'+'},{n:'#',t:''}
              ].map((k) => (
                <button key={k.n} onClick={() => handleDial(k.n)} data-number={k.n} className="dialpad-sticky-btn flex flex-col items-center justify-center w-14 h-14 rounded-full border-2 border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100 transition-all">
                  <span className="text-lg font-light text-neutral-800">{k.n}</span>
                  {k.t && <span className="text-[8px] text-neutral-500 uppercase">{k.t}</span>}
                </button>
              ))}
            </div>

            {/* Call and End Call Buttons */}
            <div className="flex flex-col items-center gap-1.5 mt-2">
              <button id="btnStickyStartCall" onClick={handleStartCall} className={`${inCall ? 'hidden' : ''} w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 active:bg-green-800 flex items-center justify-center shadow-lg transition-all`}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </button>

              <button id="btnStickyEndCall" onClick={handleEndCall} className={`${inCall ? '' : 'hidden'} w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 flex items-center justify-center shadow-lg transition-all`}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.68-1.36-2.66-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
                </svg>
              </button>

              {/* Backspace Button */}
              <button id="btnStickyBackspace" onClick={handleBackspace} className="text-neutral-600 hover:text-neutral-900 p-1.5 rounded-lg hover:bg-neutral-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414-6.414a2 2 0 012.828 0L21 12l-8.758 8.758a2 2 0 01-2.828 0L3 12z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Calls Tab Content */}
          {activeTab === 'calls' && (
            <div id="callsTabContent" className="tab-content p-3 w-full">
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-neutral-700">Recent Calls</h3>
                  <button className="text-xs text-blue-600 hover:text-blue-700">Clear All</button>
                </div>

                {/* Call History Items */}
                <div className="space-y-1">
                  {/* Example items (kept simple) */}
                  <div onClick={() => { setCallNumber('+1 (555) 123-4567'); setActiveTab('dialpad'); }} className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-lg cursor-pointer">
                    <div className="flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.923A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-neutral-900 truncate">Alice Brown</div>
                      <div className="text-xs text-neutral-500">+1 (555) 123-4567</div>
                    </div>
                    <div className="text-xs text-neutral-400">2m ago</div>
                  </div>
                  
                  <div onClick={() => { setCallNumber('+1 (555) 987-6543'); setActiveTab('dialpad'); }} className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-lg cursor-pointer">
                    <div className="flex-shrink-0">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.923A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-neutral-900 truncate">Bob Johnson</div>
                      <div className="text-xs text-neutral-500">+1 (555) 987-6543</div>
                    </div>
                    <div className="text-xs text-neutral-400">15m ago</div>
                  </div>
                  
                  <div onClick={() => { setCallNumber('+1 (555) 456-7890'); setActiveTab('dialpad'); }} className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-lg cursor-pointer">
                    <div className="flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.923A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-neutral-900 truncate">Carol Williams</div>
                      <div className="text-xs text-neutral-500">+1 (555) 456-7890</div>
                    </div>
                    <div className="text-xs text-neutral-400">1h ago</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Recordings Tab Content */}
          {activeTab === 'recordings' && (
            <div id="recordingsTabContent" className="tab-content p-3 w-full">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-neutral-700">Call Recordings</h3>
                  <button className="text-xs text-blue-600 hover:text-blue-700">Settings</button>
                </div>
                
                <div className="space-y-3">
                  {/* Recording Item 1 */}
                  <div className="p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-neutral-900 truncate">Patient Consultation - Alice Brown</div>
                        <div className="text-xs text-neutral-500 mt-1">Dec 5, 2025 • 10:30 AM</div>
                      </div>
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded whitespace-nowrap ml-2">5:34</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button className="text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Play
                      </button>
                      <button className="text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>
                  
                  {/* Recording Item 2 */}
                  <div className="p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-neutral-900 truncate">Team Meeting - Care Coordination</div>
                        <div className="text-xs text-neutral-500 mt-1">Dec 4, 2025 • 2:15 PM</div>
                      </div>
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded whitespace-nowrap ml-2">12:42</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button className="text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Play
                      </button>
                      <button className="text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>
                  
                  {/* Recording Item 3 */}
                  <div className="p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-neutral-900 truncate">Family Conference - Smith Family</div>
                        <div className="text-xs text-neutral-500 mt-1">Dec 3, 2025 • 4:30 PM</div>
                      </div>
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded whitespace-nowrap ml-2">8:17</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button className="text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Play
                      </button>
                      <button className="text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-neutral-200">
                  <button className="w-full text-center text-xs text-blue-600 hover:text-blue-700 font-medium py-2">
                    Load More Recordings
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* HUD Tab Content */}
          {activeTab === 'hud' && (
            <div id="hudTabContent" className="tab-content p-3 w-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-neutral-700">Call Statistics</h3>
                  <button className="text-xs text-blue-600 hover:text-blue-700">View All</button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-green-700 font-medium">Answered</span>
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-green-700">24</div>
                    <div className="text-xs text-green-600">Today</div>
                  </div>
                  
                  <div className="p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-red-700 font-medium">Missed</span>
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-red-700">5</div>
                    <div className="text-xs text-red-600">Today</div>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-blue-700 font-medium">Outgoing</span>
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-blue-700">18</div>
                    <div className="text-xs text-blue-600">Today</div>
                  </div>
                  
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-amber-700 font-medium">Avg. Duration</span>
                      <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-amber-700">4m 22s</div>
                    <div className="text-xs text-amber-600">Today</div>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-neutral-200">
                  <h4 className="text-xs font-semibold text-neutral-700 mb-2">Active Calls</h4>
                  <div className="space-y-2">
                    {inCall ? (
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-green-800">In Progress</span>
                          <span className="text-xs text-green-700">02:45</span>
                        </div>
                        <div className="text-xs text-green-700">{callNumber || 'Unknown Number'}</div>
                      </div>
                    ) : (
                      <div className="text-xs text-neutral-500 text-center py-2">No active calls</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Chat Section */}
      <aside
        id="chatSection"
        className={`fixed bottom-0 left-16 w-80 bg-white border border-neutral-300 rounded-lg shadow-2xl z-50 max-h-[85vh] overflow-hidden ${chatOpen ? '' : 'hidden'}`}
      >
        <div className="h-10 px-3 border-b border-neutral-200 flex items-center justify-between bg-blue-600 rounded-t-lg">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <div className="text-xs font-semibold text-white">Chat</div>
          </div>
          <button onClick={handleCloseChat} className="closeSection h-7 w-7 rounded-lg hover:bg-blue-700 text-white" data-section="chatSection">
            <svg className="w-3.5 h-3.5 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        <div className="p-3 space-y-3 overflow-y-auto" style={{ maxHeight: 'calc(85vh - 40px)' }}>
          <div className="h-48 overflow-y-auto border border-neutral-200 rounded-lg p-3 bg-neutral-50 space-y-2 text-sm">
            {chatMessages.map((m) => (
              <div key={m.id} className={`flex gap-2 ${m.author === 'me' ? 'justify-end' : ''}`}>
                {m.author !== 'me' && (
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white text-xs grid place-items-center flex-shrink-0">{(m.name||'JD').split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
                )}
                <div className={`${m.author === 'me' ? 'bg-blue-600 text-white rounded-lg p-2 shadow-sm' : 'bg-white rounded-lg p-2 shadow-sm'}`}>
                  {m.author !== 'me' && <div className="font-medium text-xs text-neutral-600">{m.name || 'John Doe'}</div>}
                  <div>{m.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input value={chatInput} onChange={(e)=>setChatInput(e.target.value)} className="flex-1 h-9 rounded-lg border border-neutral-300 px-3 text-sm" placeholder="Type a message…" />
            <button onClick={handleSendChat} className="px-4 h-9 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm">Send</button>
          </div>
        </div>
      </aside>

      {/* Message Section */}
      <aside
        id="messageSection"
        className={`fixed bottom-0 left-16 w-80 bg-white border border-neutral-300 rounded-lg shadow-2xl z-50 max-h-[85vh] overflow-hidden ${messageOpen ? '' : 'hidden'}`}
      >
        <div className="h-10 px-3 border-b border-neutral-200 flex items-center justify-between bg-blue-600 rounded-t-lg">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="text-xs font-semibold text-white">Message</div>
          </div>
          <button onClick={handleCloseMessage} className="closeSection h-7 w-7 rounded-lg hover:bg-blue-700 text-white" data-section="messageSection">
            <svg className="w-3.5 h-3.5 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        <div className="p-3 space-y-3 overflow-y-auto" style={{ maxHeight: 'calc(85vh - 40px)' }}>
          <div>
            <label className="text-xs text-neutral-600 font-medium">To</label>
            <input value={messageTo} onChange={(e)=>setMessageTo(e.target.value)} className="w-full h-8 rounded-lg border border-neutral-300 px-2.5 text-xs mt-1" placeholder="Email or phone number" />
          </div>
          <div>
            <label className="text-xs text-neutral-600 font-medium">Subject</label>
            <input value={messageSubject} onChange={(e)=>setMessageSubject(e.target.value)} className="w-full h-8 rounded-lg border border-neutral-300 px-2.5 text-xs mt-1" placeholder="Enter subject" />
          </div>
          <div>
            <label className="text-xs text-neutral-600 font-medium">Message</label>
            <textarea value={messageBody} onChange={(e)=>setMessageBody(e.target.value)} rows={4} className="w-full rounded-lg border border-neutral-300 p-2.5 text-xs mt-1" placeholder="Type your message…"></textarea>
          </div>
          <button onClick={handleSendMessage} className="w-full h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs">Send Message</button>
        </div>
      </aside>

      {/* Logout Section */}
      <aside
        id="logoutSection"
        className={`fixed bottom-0 left-16 w-80 bg-white border border-neutral-300 rounded-lg shadow-2xl z-50 max-h-[85vh] overflow-hidden ${logoutOpen ? '' : 'hidden'}`}
      >
        <div className="h-10 px-3 border-b border-neutral-200 flex items-center justify-between bg-blue-600 rounded-t-lg">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <div className="text-xs font-semibold text-white">Logout</div>
          </div>
          <button onClick={handleCloseLogout} className="closeSection h-7 w-7 rounded-lg hover:bg-blue-700 text-white" data-section="logoutSection">
            <svg className="w-3.5 h-3.5 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        <div className="p-3 space-y-3 overflow-y-auto" style={{ maxHeight: 'calc(85vh - 40px)' }}>
          <div className="flex items-center gap-2.5 p-2.5 bg-neutral-50 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-neutral-900 text-white text-sm grid place-items-center">JD</div>
            <div>
              <div className="text-xs font-semibold">John Doe</div>
              <div className="text-[10px] text-neutral-500">john.doe@example.com</div>
            </div>
          </div>
          <div className="text-xs text-neutral-600">Are you sure you want to logout from your account?</div>
          <div className="flex gap-2">
            <button onClick={handleCloseLogout} className="flex-1 h-8 rounded-lg border border-neutral-300 hover:bg-neutral-50 text-xs">Cancel</button>
            <button onClick={handleConfirmLogout} className="flex-1 h-8 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs">Logout</button>
          </div>
        </div>
      </aside>
    </>
  );
}
