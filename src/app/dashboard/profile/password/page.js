// src/app/(dashboard)/profile/password/page.js
"use client";

export default function PasswordPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="border-b mb-8">
        <div className="flex gap-8">
          <a href="/profile" className="pb-4 px-2 text-sm font-medium text-gray-500">
            Profile Info
          </a>
          <a href="/profile/password" className="pb-4 px-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
            Password
          </a>
          <a href="/profile/api" className="pb-4 px-2 text-sm font-medium text-gray-500">
            API Management
          </a>
        </div>
      </div>

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
  );
}