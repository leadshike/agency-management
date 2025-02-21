'use client';

import { useState } from 'react';

const analyticsMetrics = [
  { label: 'Reply Rate', value: '0%' },
  { label: 'No of Positive Replies', value: '0' },
  { label: 'No of Replies', value: '0' },
  { label: 'Bounce Rate', value: '0%' }
];

const analyticsTabs = ['Campaign', 'Email', 'Leads', 'Domain'];

export default function AnalyticsTab() {
  const [activeTab, setActiveTab] = useState('Campaign');

  return (
    <div className="p-6">
      {/* Analytics Tabs */}
      <div className="flex gap-4 mb-6">
        {analyticsTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-xl mb-4">Hello Anurag 👋, you have 0 Campaigns</h2>
        <div className="flex justify-between items-center">
          <div className="text-sm">AI Suggestions</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            Generate report
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* AI Suggestions Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 border rounded-lg">
          <div className="flex justify-between mb-2">
            <span>Campaign</span>
            <button className="text-blue-600 text-sm">See More</button>
          </div>
          <p className="text-gray-600">Your 4 Campaign(s) are completed.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <div className="flex justify-between mb-2">
            <span>Task</span>
            <button className="text-blue-600 text-sm">See More</button>
          </div>
          <p className="text-gray-600">Your 4 Campaign are completed.</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex justify-between mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Campaigns"
            className="pl-10 pr-4 py-2 border rounded-lg w-64"
          />
          <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex gap-4">
          <select className="border rounded-lg px-4 py-2">
            <option>Filter by Campaign Status</option>
          </select>
          <select className="border rounded-lg px-4 py-2">
            <option>Sort By numbers</option>
          </select>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-4 gap-4">
        {analyticsMetrics.map((metric, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="text-gray-600 mb-2">{metric.label}</div>
            <div className="text-3xl font-bold">{metric.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}