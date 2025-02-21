'use client';

import { useState } from 'react';
import { BarChart3, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const assignActions = [
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Create New Campaign",
    description: "Pause Campaign when reply rate drops below threshold",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Reconnect failed accounts",
    description: "Pause Campaign when reply rate drops below threshold",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Upload Leads to Campaign",
    description: "Pause Campaign when reply rate drops below threshold",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Delete Leads from Campaign",
    description: "Pause Campaign when reply rate drops below threshold",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Buy New Leads",
    description: "Pause Campaign when reply rate drops below threshold",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Create Subscription",
    description: "Pause Campaign when reply rate drops below threshold",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Buy Domains",
    description: "Pause Campaign when reply rate drops below threshold",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Buy Email Accounts",
    description: "Pause Campaign when reply rate drops below threshold",
  }
];

const executeActions = [
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Instantly Pause Campaign",
    description: "Pause Campaign when reply rate drops below threshold",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Resume Campaigns",
    description: "Pause Campaign when reply rate drops below threshold",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Add Sender Accounts",
    description: "Pause Campaign when reply rate drops below threshold",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Remove Sender Accounts",
    description: "Pause Campaign when reply rate drops below threshold",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Instantly Enable Warmup",
    description: "Pause Campaign when reply rate drops below threshold",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    title: "Instantly Disable Warmup",
    description: "Pause Campaign when reply rate drops below threshold",
  }
];

export default function OneClick() {
  const [activeTab, setActiveTab] = useState('assign');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Back Button */}
      <Link 
        href="/dashboard/automate-hq"
        className="flex items-center gap-2 text-gray-600 mb-6 hover:text-gray-900"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </Link>

      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab('assign')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'assign' 
              ? 'bg-blue-600 text-white' 
              : 'border bg-white text-gray-900'
          }`}
        >
          1-Click Assign
        </button>
        <button
          onClick={() => setActiveTab('execute')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'execute' 
              ? 'bg-blue-600 text-white' 
              : 'border bg-white text-gray-900'
          }`}
        >
          1-Click Execute
        </button>
      </div>

      {/* Grid of Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(activeTab === 'assign' ? assignActions : executeActions).map((action, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg border p-4 flex flex-col"
          >
            <div className="flex items-start gap-3 mb-3">
              {action.icon}
              <h3 className="font-medium">{action.title}</h3>
            </div>
            <p className="text-sm text-gray-600 flex-grow">
              {action.description}
            </p>
            <div className="flex justify-end mt-4">
              <button className="text-blue-600 font-medium">
                {activeTab === 'assign' ? 'Assign' : 'Execute'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}