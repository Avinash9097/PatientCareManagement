import React, { useState } from "react";

export default function Header({ globalSearch = "", setGlobalSearch = () => {} }) {
	const [alertDropdownOpen, setAlertDropdownOpen] = useState(false);
	const [missedCallsDropdownOpen, setMissedCallsDropdownOpen] = useState(false);
	const [whatsappDropdownOpen, setWhatsappDropdownOpen] = useState(false);
	const [videoCallDropdownOpen, setVideoCallDropdownOpen] = useState(false);
	const [emailDropdownOpen, setEmailDropdownOpen] = useState(false);
	const [userMenuDropdownOpen, setUserMenuDropdownOpen] = useState(false);

	const closeAllDropdowns = () => {
		setAlertDropdownOpen(false);
		setMissedCallsDropdownOpen(false);
		setWhatsappDropdownOpen(false);
		setVideoCallDropdownOpen(false);
		setEmailDropdownOpen(false);
		setUserMenuDropdownOpen(false);
	};

	return (
		<header className="h-14 bg-white border-b border-neutral-200 px-3 lg:px-4 flex items-center justify-between">
			{/* Left Section */}
			<div className="flex items-center gap-3 min-w-0">
				<div className="text-sm font-semibold truncate">XYZ — Care Navigator</div>
				<div className="hidden md:flex text-xs text-neutral-500 items-center gap-2 shrink-0">
					<span>All Tenants</span><span>•</span><span>Today</span>
				</div>
			</div>

			{/* Right Section */}
			<div className="flex items-center gap-3">
				{/* Global Search */}
				<div className="relative">
					<input
						id="globalSearch"
						type="text"
						className="h-9 w-64 lg:w-80 rounded-xl border border-neutral-300 px-3 text-sm focus:outline-none focus:ring focus:ring-neutral-200"
						placeholder="Search patients, tasks, docs..."
						value={globalSearch}
						onChange={(e) => setGlobalSearch(e.target.value)}
					/>
				</div>

				{/* New Button */}
				<button id="newBtn" className="h-9 px-3 rounded-xl bg-neutral-900 text-white text-sm hover:bg-neutral-800">New</button>

				{/* Message Icon */}
				<button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-100">
					<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.39-1.02L3 20l1.37-3.93A7.77 7.77 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
					</svg>
					<span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">3</span>
				</button>

				{/* Alert Icon */}
				<div className="relative">
					<button
						id="alertMenuBtn"
						className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-100"
						onClick={() => { closeAllDropdowns(); setAlertDropdownOpen(!alertDropdownOpen); }}
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6V10a6 6 0 10-12 0v6l-2 2v1h16v-1l-2-2z" />
						</svg>
						<span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">7</span>
					</button>

					{/* Alert Dropdown */}
					{alertDropdownOpen && (
						<div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-neutral-200 z-50">
							<div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
								<h3 className="text-sm font-semibold text-neutral-900">Notifications</h3>
								<button className="text-xs text-blue-600 hover:text-blue-700 font-medium">Mark all as read</button>
							</div>
							<div className="max-h-96 overflow-y-auto">
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex gap-3">
										<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
											<svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
											</svg>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-neutral-900">Critical: Patient Alert</p>
											<p className="text-xs text-neutral-600 mt-1">Jane Doe's vital signs require immediate attention</p>
											<p className="text-xs text-neutral-400 mt-1">5 minutes ago</p>
										</div>
										<div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2"></div>
									</div>
								</div>
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex gap-3">
										<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
											<svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
											</svg>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-neutral-900">Appointment Reminder</p>
											<p className="text-xs text-neutral-600 mt-1">John Smith has an appointment in 30 minutes</p>
											<p className="text-xs text-neutral-400 mt-1">15 minutes ago</p>
										</div>
										<div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-2"></div>
									</div>
								</div>
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex gap-3">
										<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
											<svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-neutral-900">Task Completed</p>
											<p className="text-xs text-neutral-600 mt-1">Care plan updated for Mary Johnson</p>
											<p className="text-xs text-neutral-400 mt-1">1 hour ago</p>
										</div>
									</div>
								</div>
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex gap-3">
										<div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
											<svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-neutral-900">Medication Due</p>
											<p className="text-xs text-neutral-600 mt-1">3 patients require medication administration</p>
											<p className="text-xs text-neutral-400 mt-1">2 hours ago</p>
										</div>
									</div>
								</div>
							</div>
							<div className="px-4 py-3 border-t border-neutral-200">
								<button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">View all notifications</button>
							</div>
						</div>
					)}
				</div>

				{/* Missed Calls Icon */}
				<div className="relative">
					<button
						id="missedCallsBtn"
						className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-100"
						onClick={() => { closeAllDropdowns(); setMissedCallsDropdownOpen(!missedCallsDropdownOpen); }}
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
						</svg>
						<span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">4</span>
					</button>

					{/* Missed Calls Dropdown */}
					{missedCallsDropdownOpen && (
						<div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-neutral-200 z-50">
							<div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
								<h3 className="text-sm font-semibold text-neutral-900">Missed Calls</h3>
								<button className="text-xs text-blue-600 hover:text-blue-700 font-medium">Clear all</button>
							</div>
							<div className="max-h-80 overflow-y-auto">
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
											<svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-neutral-900">Jane Doe</p>
											<p className="text-xs text-neutral-500">+1 (555) 123-4567</p>
											<p className="text-xs text-neutral-400">10 minutes ago</p>
										</div>
										<button className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center">
											<svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</button>
									</div>
								</div>
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
											<svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-neutral-900">John Smith</p>
											<p className="text-xs text-neutral-500">+1 (555) 987-6543</p>
											<p className="text-xs text-neutral-400">25 minutes ago</p>
										</div>
										<button className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center">
											<svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</button>
									</div>
								</div>
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
											<svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-neutral-900">Mary Johnson</p>
											<p className="text-xs text-neutral-500">+1 (555) 456-7890</p>
											<p className="text-xs text-neutral-400">1 hour ago</p>
										</div>
										<button className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center">
											<svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</button>
									</div>
								</div>
								<div className="p-3 hover:bg-neutral-50 cursor-pointer">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
											<svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-neutral-900">Robert Brown</p>
											<p className="text-xs text-neutral-500">+1 (555) 321-0987</p>
											<p className="text-xs text-neutral-400">2 hours ago</p>
										</div>
										<button className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center">
											<svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</button>
									</div>
								</div>
							</div>
							<div className="px-4 py-3 border-t border-neutral-200">
								<button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">View call history</button>
							</div>
						</div>
					)}
				</div>

				{/* WhatsApp Icon */}
				<div className="relative">
					<button
						id="whatsappBtn"
						className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-100"
						onClick={() => { closeAllDropdowns(); setWhatsappDropdownOpen(!whatsappDropdownOpen); }}
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
						</svg>
						<span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">12</span>
					</button>

					{/* WhatsApp Dropdown */}
					{whatsappDropdownOpen && (
						<div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-neutral-200 z-50">
							<div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-green-50 to-white">
								<div className="flex items-center gap-2">
									<svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
									</svg>
									<h3 className="text-sm font-semibold text-neutral-900">WhatsApp Messages</h3>
								</div>
								<button className="h-8 px-3 rounded-lg bg-green-600 text-white text-xs hover:bg-green-700">New Chat</button>
							</div>
							<div className="max-h-96 overflow-y-auto">
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex gap-3">
										<div className="relative">
											<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">JD</div>
											<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between">
												<p className="text-sm font-medium text-neutral-900">Jane Doe (Patient)</p>
												<span className="text-xs text-neutral-400">10:30 AM</span>
											</div>
											<p className="text-xs text-neutral-600 truncate mt-1">Thank you for the care plan update...</p>
											<div className="flex items-center gap-2 mt-1">
												<span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">3 new</span>
											</div>
										</div>
									</div>
								</div>
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex gap-3">
										<div className="relative">
											<div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">FM</div>
											<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between">
												<p className="text-sm font-medium text-neutral-900">Family - Miller</p>
												<span className="text-xs text-neutral-400">Yesterday</span>
											</div>
											<p className="text-xs text-neutral-600 truncate mt-1">How is mom doing today?</p>
											<div className="flex items-center gap-2 mt-1">
												<span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">2 new</span>
											</div>
										</div>
									</div>
								</div>
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex gap-3">
										<div className="relative">
											<div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-semibold">DR</div>
											<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-gray-400 border-2 border-white"></div>
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between">
												<p className="text-sm font-medium text-neutral-900">Dr. Roberts</p>
												<span className="text-xs text-neutral-400">2 days ago</span>
											</div>
											<p className="text-xs text-neutral-600 truncate mt-1">📎 Lab results attached</p>
										</div>
									</div>
								</div>
							</div>
							<div className="px-4 py-3 border-t border-neutral-200">
								<button className="w-full text-center text-sm text-green-600 hover:text-green-700 font-medium">Open WhatsApp Web</button>
							</div>
						</div>
					)}
				</div>

				{/* Video Call Icon */}
				<div className="relative">
					<button
						id="videoCallBtn"
						className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-100"
						onClick={() => { closeAllDropdowns(); setVideoCallDropdownOpen(!videoCallDropdownOpen); }}
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
						</svg>
						<span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">2</span>
					</button>

					{/* Video Call Dropdown */}
					{videoCallDropdownOpen && (
						<div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-neutral-200 z-50">
							<div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-blue-50 to-white">
								<h3 className="text-sm font-semibold text-neutral-900">Video Calls</h3>
								<button className="h-8 px-3 rounded-lg bg-blue-600 text-white text-xs hover:bg-blue-700">Start Call</button>
							</div>
							<div className="max-h-80 overflow-y-auto">
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">TS</div>
										<div className="flex-1">
											<p className="text-sm font-medium text-neutral-900">Team Standup</p>
											<p className="text-xs text-neutral-500">Scheduled • 2:00 PM</p>
										</div>
										<button className="h-8 px-3 rounded-lg bg-green-100 text-green-700 text-xs hover:bg-green-200 font-medium">Join</button>
									</div>
								</div>
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-semibold">PC</div>
										<div className="flex-1">
											<p className="text-sm font-medium text-neutral-900">Patient Consult - Jane Doe</p>
											<p className="text-xs text-neutral-500">Scheduled • 3:30 PM</p>
										</div>
										<button className="h-8 px-3 rounded-lg bg-blue-100 text-blue-700 text-xs hover:bg-blue-200 font-medium">Prepare</button>
									</div>
								</div>
								<div className="p-3 hover:bg-neutral-50 cursor-pointer">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-semibold">FM</div>
										<div className="flex-1">
											<p className="text-sm font-medium text-neutral-900">Family Meeting - Miller</p>
											<p className="text-xs text-neutral-500">Tomorrow • 10:00 AM</p>
										</div>
										<button className="h-8 px-3 rounded-lg bg-neutral-100 text-neutral-700 text-xs hover:bg-neutral-200 font-medium">Details</button>
									</div>
								</div>
							</div>
							<div className="px-4 py-3 border-t border-neutral-200">
								<button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">View all scheduled calls</button>
							</div>
						</div>
					)}
				</div>

				{/* Email Icon */}
				<div className="relative">
					<button
						id="emailBtn"
						className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-100"
						onClick={() => { closeAllDropdowns(); setEmailDropdownOpen(!emailDropdownOpen); }}
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">8</span>
					</button>

					{/* Email Dropdown */}
					{emailDropdownOpen && (
						<div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-neutral-200 z-50">
							<div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-orange-50 to-white">
								<h3 className="text-sm font-semibold text-neutral-900">Unread Emails</h3>
								<button className="h-8 px-3 rounded-lg bg-orange-600 text-white text-xs hover:bg-orange-700">Compose</button>
							</div>
							<div className="max-h-96 overflow-y-auto">
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex gap-3">
										<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
											<svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
											</svg>
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between">
												<p className="text-sm font-semibold text-neutral-900">Dr. Michael Chen</p>
												<span className="text-xs text-neutral-400">2:15 PM</span>
											</div>
											<p className="text-xs font-medium text-neutral-700 mt-1">Patient Referral - Urgent</p>
											<p className="text-xs text-neutral-600 truncate mt-1">I'm referring a patient who needs specialized care...</p>
										</div>
										<div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0 mt-2"></div>
									</div>
								</div>
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex gap-3">
										<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
											<svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
											</svg>
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between">
												<p className="text-sm font-semibold text-neutral-900">Insurance Department</p>
												<span className="text-xs text-neutral-400">1:30 PM</span>
											</div>
											<p className="text-xs font-medium text-neutral-700 mt-1">Claims Update - Action Required</p>
											<p className="text-xs text-neutral-600 truncate mt-1">Please review and approve the following claims...</p>
										</div>
										<div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0 mt-2"></div>
									</div>
								</div>
								<div className="p-3 hover:bg-neutral-50 border-b border-neutral-100 cursor-pointer">
									<div className="flex gap-3">
										<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
											<svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-center justify-between">
												<p className="text-sm font-semibold text-neutral-900">Pharmacy Services</p>
												<span className="text-xs text-neutral-400">11:00 AM</span>
											</div>
											<p className="text-xs font-medium text-neutral-700 mt-1">Medication Delivery Confirmation</p>
											<p className="text-xs text-neutral-600 truncate mt-1">All scheduled medications have been delivered...</p>
										</div>
										<div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0 mt-2"></div>
									</div>
								</div>
							</div>
							<div className="px-4 py-3 border-t border-neutral-200">
								<button className="w-full text-center text-sm text-orange-600 hover:text-orange-700 font-medium">View all emails</button>
							</div>
						</div>
					)}
				</div>

				{/* User Profile Menu */}
				<div className="relative">
					<button
						id="userMenuBtn"
						className="flex items-center gap-2 h-9 px-3 rounded-xl hover:bg-neutral-100 transition-colors"
						onClick={() => { closeAllDropdowns(); setUserMenuDropdownOpen(!userMenuDropdownOpen); }}
					>
						<div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-semibold">A</div>
						<span className="text-sm font-medium text-neutral-700">Admin</span>
						<svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
							<path d="M19 9l-7 7-7-7" />
						</svg>
					</button>

					{/* User Dropdown Menu */}
					{userMenuDropdownOpen && (
						<div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 z-50">
							<div className="px-4 py-3 border-b border-neutral-200">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">A</div>
									<div>
										<div className="text-sm font-semibold text-neutral-900">admin@xyz.com</div>
										<div className="text-xs text-neutral-500">Administrator</div>
									</div>
								</div>
							</div>
							<div className="py-1">
								<a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
									<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
									</svg>
									My Profile
								</a>
								<a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
									<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
										<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
									Settings
								</a>
								<a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
									<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									Help & Support
								</a>
								<div className="border-t border-neutral-200 my-1"></div>
								<a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
									<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
										<path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
									</svg>
									Sign Out
								</a>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}


