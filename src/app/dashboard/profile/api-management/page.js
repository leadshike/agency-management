// src/app/(dashboard)/profile/api/page.js
"use client";

export default function ApiManagementPage() {
  const workspaces = [
    { id: 1, name: "WORKSPACE 1", key: "12345678-1234-1234-1234-123456789abc" },
    { id: 2, name: "WORKSPACE 2", key: "12345678-1234-1234-1234-123456789abc" }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="border-b mb-8">
        <div className="flex gap-8">
          <a href="/profile" className="pb-4 px-2 text-sm font-medium text-gray-500">
            Profile Info
          </a>
          <a href="/profile/password" className="pb-4 px-2 text-sm font-medium text-gray-500">
            Password
          </a>
          <a href="/profile/api-management" className="pb-4 px-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
            API Management
          </a>
        </div>
      </div>

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
  );
}
