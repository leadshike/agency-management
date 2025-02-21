
// src/app/(dashboard)/agency-ui/campaign-map/page.js
"use client";
import { useState } from 'react';

export default function CampaignMap() {
  const [activeTab, setActiveTab] = useState('running');
  const campaigns = {
    running: [
      { name: 'Massachusetts Dental Society', client: 'Vaibhav Mewara' },
      { name: 'Testing Campaign', client: 'Vaibhav Mewara' },
      { name: 'Mithun CI', client: 'Vaibhav Mewara' }
    ],
    completed: [
      { name: 'Test Campaign', client: 'Kshitiz Garg' },
      { name: 'Vince Test Campaign', client: 'Kshitiz Garg' }
    ],
    paused: [
      { name: 'Tech/Software | 11-50 | UK', client: 'Dsl Nk' },
      { name: 'AI Powered Prospecting', client: 'Dsl Nk' }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Status Tabs */}
      <div className="flex items-center space-x-4 bg-white p-2 rounded-lg">
        <button 
          onClick={() => setActiveTab('running')}
          className={`px-4 py-2 rounded-lg flex items-center ${
            activeTab === 'running'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600'
          }`}
        >
          Campaigns Running
          <span className="ml-2 bg-gray-200 text-gray-600 text-xs px-1.5 rounded-full">
            3
          </span>
        </button>
        <button 
          onClick={() => setActiveTab('completed')}
          className={`px-4 py-2 rounded-lg flex items-center ${
            activeTab === 'completed'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600'
          }`}
        >
          Campaigns Completed
          <span className="ml-2 bg-gray-200 text-gray-600 text-xs px-1.5 rounded-full">
            16
          </span>
        </button>
        <button 
          onClick={() => setActiveTab('paused')}
          className={`px-4 py-2 rounded-lg flex items-center ${
            activeTab === 'paused'
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-600'
          }`}
        >
          Paused Campaigns
          <span className="ml-2 bg-gray-200 text-gray-600 text-xs px-1.5 rounded-full">
            7
          </span>
        </button>
      </div>

      {/* Campaign List */}
      <div className="bg-white rounded-lg p-6">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-4">Name</th>
              <th className="pb-4">Client</th>
              <th className="pb-4">1-Click Action</th>
            </tr>
          </thead>
          <tbody>
            {campaigns[activeTab].map((campaign, index) => (
              <tr key={index} className="border-t">
                <td className="py-4">{campaign.name}</td>
                <td className="py-4">{campaign.client}</td>
                <td className="py-4">
                  {activeTab === 'running' && (
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                      Pause Campaign ⏸
                    </button>
                  )}
                  {activeTab === 'completed' && (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                      Upload Leads ⬆
                    </button>
                  )}
                  {activeTab === 'paused' && (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                      Resume
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}