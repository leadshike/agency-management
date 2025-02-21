// src/app/campaign-setup/page.js
import Link from 'next/link';

export default function CampaignSetup() {
  return (
    <div className="min-h-screen bg-[#EEF1FF] p-2">
      <div className="max-w-xl mx-auto bg-white rounded-2xl p-8">
        {/* Back Button */}
        <Link 
          href="/onboard-success" 
          className="inline-flex items-center text-blue-600 mb-8"
        >
          <span className="mr-1">‹</span> Back
        </Link>

        {/* Logo */}
        <div className="flex items-center gap-2 justify-center mb-8">
          <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
          <span className="text-base font-medium text-gray-900">Leadshike</span>
        </div>

        {/* Progress Indicator */}
        <p className="text-center text-sm text-gray-500 mb-3">2 / 2</p>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            I am your Campaign Manager
          </h1>
          <p className="text-gray-500">
            Here are steps to connect your smartlead account
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-8">
          <div>
            <h2 className="font-medium text-gray-900 mb-2">Step 1</h2>
            <p className="text-gray-600">
              Head to the settings section on your SmartLead dashboard<br />
              Click on the "Activate API button"
            </p>
          </div>

          <div>
            <h2 className="font-medium text-gray-900 mb-2">Step 2</h2>
            <p className="text-gray-600">
              If your plan has API access, your API key will be provided to 
              you there. Do not share this with anyone. This is the key that 
              acts as an identity to your account, think of it as your 
              username & password combined.
            </p>
          </div>

          {/* API Key Input */}
          <div>
            <label className="block text-sm text-gray-900 mb-2">
              API Key <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Paste your API key here"
            />
          </div>
        </div>

        {/* Connect Button */}
        <button
          type="button"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Connect
        </button>
      </div>
    </div>
  );
}
