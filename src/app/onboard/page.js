// src/app/onboarding/page.js
"use client";
import Image from 'next/image';

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-[#EEF1FF] p-2">
      <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 mt-8">
        {/* Logo */}
        <div className="flex items-center gap-2 justify-center mb-8">
          <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
          <span className="text-base font-medium text-gray-900">Leadshike</span>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            Add your profile details
          </h1>
          <p className="text-gray-500">Setup your profile</p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 relative">
            <Image
              src="/img/profile.png"
              alt="Profile"
              width={96}  // equivalent to w-24
              height={96} // equivalent to h-24
              className="rounded-full"
              priority
            />
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Doe"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}