'use client';

import { campaignListState } from '@/state/state';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

const campaigns = {
  running: [
    { name: "Massachusetts Dental Society", client: "Vaibhav Mewara" },
    { name: "Testing Campaign", client: "" },
    { name: "Mithun C1", client: "" }
  ],
  completed: [
    { name: "Test Campaign", client: "" },
    { name: "Vince Test Campaign", client: "" },
    { name: "Hubspot Event Invite", client: "" },
    { name: "AI Outbound", client: "" }
  ],
  paused: [
    { name: "Tech/Software | 11-50 | UK", client: "" },
    { name: "AI Powered Prospecting", client: "" },
    { name: "Marketing USA", client: "" },
    { name: "Staffing", client: "" }
  ]
};

export default function CampaignMapTab() {
  const [activeTab, setActiveTab] = useState('running');
  const campaigns = useRecoilValue(campaignListState);


  console.log({campaigns})


  const tabs = [
    { id: 'running', label: 'Campaigns Running', count: campaigns.running.length },
    { id: 'completed', label: 'Campaigns Completed', count: campaigns.completed.length },
    { id: 'paused', label: 'Paused Campaigns', count: campaigns.paused.length }
  ];

  const getActionButton = (tabId) => {
    switch (tabId) {
      case 'running':
        return 'Pause Campaign';
      case 'paused':
        return 'Resume';
      default:
        return 'Upload Leads';
    }
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4">Name</th>
              <th className="text-left py-4">Client</th>
              <th className="text-left py-4">1-Click Action</th>
            </tr>
          </thead>
          <tbody>
            {campaigns[activeTab].map((campaign, index) => (
              <tr key={index} className="border-b">
                <td className="py-4">{campaign.name}</td>
                <td className="py-4">{campaign.client}</td>
                <td className="py-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    {getActionButton(activeTab)}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}