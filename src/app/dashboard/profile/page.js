// src/app/(dashboard)/profile/page.js
"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');

  const workspaces = [
    { id: 1, name: "WORKSPACE 1", key: "12345678-1234-1234-1234-123456789abc" },
    { id: 2, name: "WORKSPACE 2", key: "12345678-1234-1234-1234-123456789abc" }
  ];

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="border-b mb-8">
        <div className="flex gap-8">
          <button
            className={`pb-4 px-2 text-sm font-medium ${
              activeTab === 'profile'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            Profile Info
          </button>
          <button
            className={`pb-4 px-2 text-sm font-medium ${
              activeTab === 'password'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('password')}
          >
            Password
          </button>
          <button
            className={`pb-4 px-2 text-sm font-medium ${
              activeTab === 'api'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('api')}
          >
            API Management
          </button>
        </div>
      </div>

      {/* Profile Info Tab */}
      {activeTab === 'profile' && (
        <div>
          <h2 className="text-2xl font-semibold mb-8">Profile Info</h2>
          
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Image
                src="/img/profile.png"
                alt="Profile"
                width={96}
                height={96}
                className="rounded-full"
              />
              <button className="absolute bottom-0 right-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center border">
                2
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-500 mb-6">*REQUIRED FIELDS</p>
            
            <form className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  defaultValue="Peter"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  LAST NAME
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  defaultValue="Griffin"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  USERNAME*
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  defaultValue="thepetergriffin"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  EMAIL*
                </label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg"
                    defaultValue="hello@designdrops.io"
                  />
                  <button className="absolute right-2 top-2 text-blue-600 text-sm">
                    Verify Email
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  COUNTRY
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  defaultValue="India"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  CITY
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  defaultValue="Bengaluru"
                />
              </div>
            </form>

            <div className="mt-8">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                SAVE CHANGES
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Password Tab */}
      {activeTab === 'password' && (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Change Password</h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                CURRENT PASSWORD
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  NEW PASSWORD
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                SAVE CHANGES
              </button>
              <p className="text-sm text-gray-500 mt-4">
                YOU WILL BE ASKED TO LOG IN AGAIN WITH YOUR NEW PASSWORD AFTER YOU SAVE YOUR CHANGES.
              </p>
            </div>
          </form>
        </div>
      )}

      {/* API Management Tab */}
      {activeTab === 'api' && (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">API's Management</h2>

          <div className="space-y-8">
            {/* Instantly Section */}
            <div>
              <h3 className="text-lg font-medium mb-4">Instantly</h3>
              <div className="space-y-4">
                {workspaces.map((workspace) => (
                  <div key={workspace.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">{workspace.name}</p>
                      <p className="font-mono text-sm">{workspace.key}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-1 bg-red-500 text-white rounded-md text-sm">
                        DELETE
                      </button>
                      <button className="px-4 py-1 bg-blue-600 text-white rounded-md text-sm">
                        CHANGE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Smartlead Section */}
            <div>
              <h3 className="text-lg font-medium mb-4">Smartlead</h3>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">CURRENT API KEY</p>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sm">12345678-1234-1234-1234-123456789abc</p>
                  <div className="flex gap-2">
                    <button className="px-4 py-1 bg-red-500 text-white rounded-md text-sm">
                      DELETE
                    </button>
                    <button className="px-4 py-1 bg-blue-600 text-white rounded-md text-sm">
                      CHANGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}