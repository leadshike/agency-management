// src/components/client/CreateClientModal.jsx
"use client";
import { useState } from 'react';
import Image from 'next/image';

const dummyVAs = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Mike Johnson' }
];

const clientStages = [
  { id: 1, name: 'Initial Contact' },
  { id: 2, name: 'Onboarding' },
  { id: 3, name: 'Active Client' },
  { id: 4, name: 'Completed' }
];

export default function CreateClientModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    clientStage: '',
    va: '',
    apiProvider: '',
    apiKey: '',
    launchDate: 'Wednesday, February 19, 2025',
    warmupAccounts: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFirstStepValid = () => {
    return formData.name && formData.email && formData.clientStage && formData.va;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-xl p-8 relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-center mb-8">Create Client Portal</h2>

        {step === 1 ? (
          <>
            {/* Upload Picture */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200">
                <span className="text-sm text-gray-600">Upload</span>
                <span className="text-sm text-gray-600">picture</span>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Shekhar Gupta"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="We'll create a unique client portal for this em"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Client Stage <span className="text-red-500">*</span>
                </label>
                <select
                  name="clientStage"
                  value={formData.clientStage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="">Select Client Status/Stage</option>
                  {clientStages.map(stage => (
                    <option key={stage.id} value={stage.id}>{stage.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Select VA
                </label>
                <select
                  name="va"
                  value={formData.va}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="">Select VA</option>
                  {dummyVAs.map(va => (
                    <option key={va.id} value={va.id}>{va.name}</option>
                  ))}
                </select>
                <a href="#" className="text-blue-600 text-sm mt-1 inline-block">
                  Invite New VA
                </a>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={onClose}
                className="px-6 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setStep(2)}
                disabled={!isFirstStepValid()}
                className={`px-6 py-2 rounded-lg text-white ${
                  isFirstStepValid() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300'
                }`}
              >
                Map Campaigns & Accounts
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Step 2 Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  API Provider <span className="text-red-500">*</span>
                </label>
                <select
                  name="apiProvider"
                  value={formData.apiProvider}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="instantly">Instantly</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  API Key <span className="text-red-500">*</span>
                </label>
                <select
                  name="apiKey"
                  value={formData.apiKey}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="">Select API key</option>
                </select>
                <a href="#" className="text-blue-600 text-sm mt-1 inline-block">
                  Add New API
                </a>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Campaign Launch Date
                </label>
                <input
                  type="text"
                  name="launchDate"
                  value={formData.launchDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Warmup Accounts
                </label>
                <input
                  type="text"
                  name="warmupAccounts"
                  value={formData.warmupAccounts}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Select accounts"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 border rounded-lg hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={() => {
                  // Handle form submission
                  console.log(formData);
                  onClose();
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Client
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
