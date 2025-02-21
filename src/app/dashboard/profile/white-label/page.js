// src/app/(dashboard)/profile/white-label/page.js
"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function WhiteLabel() {
  const [activeTab, setActiveTab] = useState('branding');
  const [features, setFeatures] = useState({
    clientMapping: true,
    analytics: true,
    toDoTasks: true,
    managers: false,
    crm: true,
    aiSuggestions: false,
    integrations: true,
    automations: true,
  });

  const tabs = [
    { id: 'branding', label: 'Branding', status: 'current' },
    { id: 'features', label: 'Features', status: 'upcoming' },
    { id: 'roles', label: 'Roles/Access', status: 'upcoming' },
    { id: 'payment', label: 'Payment Plans', status: 'upcoming' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6">
      <div className="bg-white rounded-2xl shadow-sm w-full max-w-3xl">
        {/* Header */}
        <div className="p-6 border-b">
          <h1 className="text-xl font-semibold text-center">CUSTOMIZED WHITE LABELLING</h1>
          
          {/* Progress Tabs */}
          <div className="flex justify-center gap-4 mt-6">
            {tabs.map((tab, index) => (
              <div 
                key={tab.id}
                className="flex items-center"
              >
                <div 
                  className={`flex items-center justify-center w-6 h-6 rounded-full text-sm
                    ${activeTab === tab.id 
                      ? 'bg-blue-600 text-white' 
                      : index < tabs.findIndex(t => t.id === activeTab)
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                >
                  {index < tabs.findIndex(t => t.id === activeTab) 
                    ? '✓' 
                    : index + 1}
                </div>
                <span className="ml-2 text-sm text-gray-600">{tab.label}</span>
                {index < tabs.length - 1 && (
                  <div className="w-16 h-[1px] bg-gray-200 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Branding Tab */}
          {activeTab === 'branding' && (
            <div className="space-y-6">
              <h2 className="text-lg text-gray-600">Create a Brand</h2>
              <div>
                <p className="mb-4">Let's start with your Logo</p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                      <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-1 border rounded-full text-sm">Save Logo</button>
                    <button className="px-4 py-1 border rounded-full text-sm">Change Logo</button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">What's your platform name</label>
                <input
                  type="text"
                  className="w-full max-w-md px-4 py-2 bg-gray-50 border rounded-lg"
                  placeholder="Cx Atlas"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Personalize Your Presence: Add a Custom Domain
                </label>
                <div className="flex gap-4 items-center">
                  <input
                    type="text"
                    className="flex-1 max-w-md px-4 py-2 bg-gray-50 border rounded-lg"
                    placeholder="https://shekharpaass.com"
                  />
                  <button className="px-4 py-2 border rounded-full text-sm">
                    Check Domain
                  </button>
                </div>
              </div>

              <div>
                <button 
                  onClick={() => setActiveTab('features')}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Save Branding
                </button>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="space-y-6">
              <h2 className="text-lg text-gray-600">Define Features for your platform</h2>
              
              <div className="space-y-4">
                {Object.entries(features).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm">{
                      key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
                    }</span>
                    <div className="flex items-center gap-4">
                      <button
                        className={`w-12 h-6 rounded-full p-1 transition-colors ${
                          value ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                        onClick={() => setFeatures(prev => ({...prev, [key]: !prev[key]}))}
                      >
                        <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                          value ? 'translate-x-6' : ''
                        }`}/>
                      </button>
                      {!value && (
                        <span className="text-sm text-gray-500">
                          Upgrade your plan to enable AI Suggestions
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <button 
                  onClick={() => setActiveTab('roles')}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Save Features
                </button>
              </div>
            </div>
          )}

          {/* Roles Tab */}
          {activeTab === 'roles' && (
            <div className="space-y-6">
              <h2 className="text-lg text-gray-600">Tailored Access: Define Roles & Permissions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Create a Role</h3>
                  <div className="flex items-center gap-4">
                    <input
                      type="text"
                      className="px-4 py-2 bg-gray-50 border rounded-lg"
                      defaultValue="Virtual Assistant"
                    />
                    <select className="px-4 py-2 bg-gray-50 border rounded-lg">
                      <option>Partial Access</option>
                      <option>Full Access</option>
                    </select>
                  </div>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
                    Create
                  </button>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Added Roles & Access</h3>
                  <div className="flex items-center gap-4">
                    <input
                      type="text"
                      className="px-4 py-2 bg-gray-50 border rounded-lg"
                      defaultValue="Admin"
                      readOnly
                    />
                    <select className="px-4 py-2 bg-gray-50 border rounded-lg">
                      <option>Full Access</option>
                      <option>Partial Access</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <button 
                  onClick={() => setActiveTab('payment')}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Save Roles
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}