import React, { useState } from 'react';

export default function TenantSetup({ onClose }) {
  const [activeTab, setActiveTab] = useState('list');

  function TabButton({ name, label }) {
    const active = activeTab === name;
    const base = 'px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap';
    const color = active ? 'text-emerald-600 border-emerald-600' : 'text-neutral-600 border-transparent hover:text-neutral-900 hover:border-neutral-300';
    return (
      <button
        onClick={() => setActiveTab(name)}
        aria-pressed={active}
        className={`tenant-tab ${base} ${color}`}
        data-tab={name}
      >
        {label}
      </button>
    );
  }

  return (
    <div id="tenantSetupView" className="flex flex-col h-full">
      {/* Header */}
      <div className="h-14 px-4 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-emerald-50 to-white">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <div>
            <h2 className="text-base font-semibold text-neutral-900">Tenant Management</h2>
            <p className="text-xs text-neutral-500">Onboard new clients and manage tenant settings</p>
          </div>
        </div>
        <button id="closeTenantSetup" className="h-8 w-8 rounded-lg hover:bg-neutral-100" onClick={onClose}>
          <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="flex overflow-x-auto px-4">
          <TabButton name="list" label="All Tenants" />
          <TabButton name="create" label="Create New Tenant" />
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-neutral-50">
        {/* Tenants List */}
        <div id="tenantList" className={activeTab === 'list' ? 'tenant-content' : 'tenant-content hidden'}>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input type="text" id="searchTenants" placeholder="Search tenants..." className="h-9 w-64 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <select className="h-9 rounded-lg border border-neutral-300 px-3 text-sm">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Trial</option>
              </select>
            </div>
            <button id="showCreateTenant" onClick={() => setActiveTab('create')} className="h-9 px-4 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 4v16m8-8H4" />
              </svg>
              Create New Tenant
            </button>
          </div>

          {/* Tenants Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Sample Tenant 1 - XYZ Plan */}
            <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-600">XYZ</span>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Active</span>
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-1">XYZ Plan</h3>
              <p className="text-xs text-neutral-500 mb-3">xyz.example.com</p>
              <div className="space-y-2 mb-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Patients:</span>
                  <span className="font-semibold">1,248</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Users:</span>
                  <span className="font-semibold">54</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Created:</span>
                  <span className="font-semibold">Jan 2024</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 h-8 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50">Configure</button>
                <button className="flex-1 h-8 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50">View</button>
              </div>
            </div>

            {/* Sample Tenant 2 - HealthFirst */}
            <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <span className="text-lg font-bold text-purple-600">HF</span>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Active</span>
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-1">HealthFirst Care</h3>
              <p className="text-xs text-neutral-500 mb-3">healthfirst.example.com</p>
              <div className="space-y-2 mb-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Patients:</span>
                  <span className="font-semibold">892</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Users:</span>
                  <span className="font-semibold">38</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Created:</span>
                  <span className="font-semibold">Mar 2024</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 h-8 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50">Configure</button>
                <button className="flex-1 h-8 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50">View</button>
              </div>
            </div>

            {/* Sample Tenant 3 - CareConnect */}
            <div className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                  <span className="text-lg font-bold text-amber-600">CC</span>
                </div>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">Trial</span>
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-1">CareConnect</h3>
              <p className="text-xs text-neutral-500 mb-3">careconnect.example.com</p>
              <div className="space-y-2 mb-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Patients:</span>
                  <span className="font-semibold">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Users:</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Created:</span>
                  <span className="font-semibold">Nov 2024</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 h-8 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50">Configure</button>
                <button className="flex-1 h-8 rounded-lg border border-neutral-300 text-xs hover:bg-neutral-50">View</button>
              </div>
            </div>
          </div>
        </div>

        {/* Create New Tenant */}
        <div id="tenantCreate" className={activeTab === 'create' ? 'tenant-content' : 'tenant-content hidden'}>
          {/* Progress Steps */}
          <div className="mb-6">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <div className="flex-1">
                <div className="flex items-center">
                  <div id="step1Indicator" className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold text-sm">1</div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold text-neutral-900">Basic Info</div>
                    <div className="text-xs text-neutral-500">Company details</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-px bg-neutral-300 mx-4" />
              <div className="flex-1">
                <div className="flex items-center">
                  <div id="step2Indicator" className="w-10 h-10 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center font-semibold text-sm">2</div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold text-neutral-600">Configuration</div>
                    <div className="text-xs text-neutral-500">Email & Database</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-px bg-neutral-300 mx-4" />
              <div className="flex-1">
                <div className="flex items-center">
                  <div id="step3Indicator" className="w-10 h-10 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center font-semibold text-sm">3</div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold text-neutral-600">Branding</div>
                    <div className="text-xs text-neutral-500">Logo & Theme</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-px bg-neutral-300 mx-4" />
              <div className="flex-1">
                <div className="flex items-center">
                  <div id="step4Indicator" className="w-10 h-10 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center font-semibold text-sm">4</div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold text-neutral-600">Review</div>
                    <div className="text-xs text-neutral-500">Confirm & Deploy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg border border-neutral-200 shadow-sm p-6">
            {/* Step 1: Basic Information */}
            <div id="step1Content" className="setup-step">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Basic Information</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Tenant Name *</label>
                    <input type="text" id="tenantName" required className="w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g., XYZ Plan" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Subdomain *</label>
                    <div className="relative">
                      <input type="text" id="tenantSubdomain" required className="w-full h-10 rounded-lg border border-neutral-300 px-3 pr-32 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="xyz" />
                      <span className="absolute right-3 top-2.5 text-sm text-neutral-500">.careplan.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Company Name *</label>
                  <input type="text" id="companyName" required className="w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="XYZ Healthcare Inc." />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Admin Email *</label>
                    <input type="email" id="adminEmail" required className="w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="admin@xyz.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Admin Phone</label>
                    <input type="tel" id="adminPhone" className="w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Address</label>
                  <textarea id="tenantAddress" rows="2" className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="123 Healthcare Ave, Medical City, ST 12345" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Plan Type *</label>
                    <select id="planType" required className="w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option value="">Select Plan</option>
                      <option value="trial">Trial (30 days)</option>
                      <option value="basic">Basic</option>
                      <option value="professional">Professional</option>
                      <option value="enterprise">Enterprise</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Max Users</label>
                    <input type="number" id="maxUsers" defaultValue="50" className="w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Max Patients</label>
                    <input type="number" id="maxPatients" defaultValue="1000" className="w-full h-10 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="1000" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Configuration (static content) */}
            <div id="step2Content" className="setup-step hidden">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Email & Database Configuration</h3>
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Configuration
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">SMTP Host *</label>
                      <input type="text" id="smtpHost" required className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="smtp.gmail.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">SMTP Port *</label>
                      <input type="number" id="smtpPort" required className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="587" defaultValue="587" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">SMTP Username *</label>
                      <input type="text" id="smtpUser" required className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="noreply@xyz.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">SMTP Password *</label>
                      <input type="password" id="smtpPassword" required className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-medium text-neutral-700 mb-1">From Email *</label>
                      <input type="email" id="fromEmail" required className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="noreply@xyz.com" />
                    </div>
                  </div>
                  <button id="testEmailBtn" className="mt-3 h-8 px-4 rounded-lg border border-blue-300 text-blue-700 text-xs font-medium hover:bg-blue-100">Test Email Connection</button>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    Database Configuration
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">Database Host *</label>
                      <input type="text" id="dbHost" required className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="localhost" defaultValue="localhost" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">Database Port *</label>
                      <input type="number" id="dbPort" required className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="5432" defaultValue="5432" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">Database Name *</label>
                      <input type="text" id="dbName" required className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="tenant_xyz" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">Database User *</label>
                      <input type="text" id="dbUser" required className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="db_user" />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-medium text-neutral-700 mb-1">Database Password *</label>
                      <input type="password" id="dbPassword" required className="w-full h-9 rounded-lg border border-neutral-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="••••••••" />
                    </div>
                  </div>
                  <button id="testDbBtn" className="mt-3 h-8 px-4 rounded-lg border border-purple-300 text-purple-700 text-xs font-medium hover:bg-purple-100">Test Database Connection</button>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-3">Additional Settings</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" id="enableSSL" className="w-4 h-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="text-sm text-neutral-700">Enable SSL/TLS</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" id="enableBackup" defaultChecked className="w-4 h-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="text-sm text-neutral-700">Enable Daily Backups</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" id="enableMonitoring" defaultChecked className="w-4 h-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="text-sm text-neutral-700">Enable System Monitoring</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Branding */}
            <div id="step3Content" className="setup-step hidden">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Branding & Theme</h3>
              <div className="space-y-6">
                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-3">Logo</h4>
                  <div className="flex items-center gap-4">
                    <div id="logoPreview" className="w-24 h-24 rounded-lg border-2 border-dashed border-neutral-300 flex items-center justify-center bg-white">
                      <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <label className="cursor-pointer inline-flex items-center gap-2 h-9 px-4 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-50 text-sm font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        Upload Logo
                        <input type="file" id="logoUpload" accept="image/*" className="hidden" />
                      </label>
                      <p className="text-xs text-neutral-500 mt-2">PNG, JPG or SVG. Max 2MB. Recommended: 200x200px</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-3">Theme Colors</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-2">Primary Color</label>
                      <div className="flex items-center gap-2">
                        <input type="color" id="primaryColor" defaultValue="#3b82f6" className="w-12 h-10 rounded border border-neutral-300 cursor-pointer" />
                        <input type="text" id="primaryColorHex" defaultValue="#3b82f6" className="flex-1 h-10 rounded-lg border border-neutral-300 px-3 text-sm font-mono" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-2">Secondary Color</label>
                      <div className="flex items-center gap-2">
                        <input type="color" id="secondaryColor" defaultValue="#8b5cf6" className="w-12 h-10 rounded border border-neutral-300 cursor-pointer" />
                        <input type="text" id="secondaryColorHex" defaultValue="#8b5cf6" className="flex-1 h-10 rounded-lg border border-neutral-300 px-3 text-sm font-mono" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-2">Accent Color</label>
                      <div className="flex items-center gap-2">
                        <input type="color" id="accentColor" defaultValue="#10b981" className="w-12 h-10 rounded border border-neutral-300 cursor-pointer" />
                        <input type="text" id="accentColorHex" defaultValue="#10b981" className="flex-1 h-10 rounded-lg border border-neutral-300 px-3 text-sm font-mono" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 rounded-lg border border-neutral-200 bg-white">
                    <div className="text-xs font-semibold text-neutral-700 mb-3">Theme Preview</div>
                    <div className="flex gap-2">
                      <button id="previewPrimary" className="h-8 px-4 rounded-lg text-white text-xs font-medium" style={{ backgroundColor: '#3b82f6' }}>Primary Button</button>
                      <button id="previewSecondary" className="h-8 px-4 rounded-lg text-white text-xs font-medium" style={{ backgroundColor: '#8b5cf6' }}>Secondary Button</button>
                      <button id="previewAccent" className="h-8 px-4 rounded-lg text-white text-xs font-medium" style={{ backgroundColor: '#10b981' }}>Accent Button</button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-3">Custom CSS (Optional)</h4>
                  <textarea id="customCSS" rows="4" className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="/* Add custom CSS here */" />
                </div>
              </div>
            </div>

            {/* Step 4: Review & Deploy */}
            <div id="step4Content" className="setup-step hidden">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Review & Deploy</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="text-sm font-semibold text-blue-900 mb-3">Tenant Summary</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-xs text-neutral-600 mb-1">Tenant Name</div>
                      <div id="reviewTenantName" className="font-semibold text-neutral-900">-</div>
                    </div>
                    <div>
                      <div className="text-xs text-neutral-600 mb-1">Subdomain</div>
                      <div id="reviewSubdomain" className="font-semibold text-neutral-900">-</div>
                    </div>
                    <div>
                      <div className="text-xs text-neutral-600 mb-1">Admin Email</div>
                      <div id="reviewEmail" className="font-semibold text-neutral-900">-</div>
                    </div>
                    <div>
                      <div className="text-xs text-neutral-600 mb-1">Plan Type</div>
                      <div id="reviewPlan" className="font-semibold text-neutral-900">-</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                  <h4 className="text-sm font-semibold text-neutral-900 mb-3">Deployment Checklist</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                      <span className="text-neutral-700">Basic information validated</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                      <span className="text-neutral-700">Email & database configured</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                      <span className="text-neutral-700">Branding setup complete</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                      <span className="text-neutral-700">Ready for deployment</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" />
                    </svg>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-amber-900 mb-1">Important</div>
                      <div className="text-xs text-amber-700">Once deployed, the tenant will be immediately available. Ensure all information is correct before proceeding.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-neutral-200">
                <button id="prevStepBtn" className="h-10 px-6 rounded-lg border border-neutral-300 text-sm font-medium hover:bg-neutral-50 hidden">← Previous</button>
                <div className="flex-1" />
                <button id="nextStepBtn" className="h-10 px-6 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700">Next →</button>
                <button id="deployTenantBtn" className="h-10 px-6 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 hidden">Deploy Tenant</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
