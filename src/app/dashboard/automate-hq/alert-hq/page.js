'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

// Dummy data
const unmappedCampaigns = [
  {
    name: "Massachusetts Dental Society",
    client: null
  },
  {
    name: "testing campaign",
    client: null
  },
  {
    name: "Mithun C1",
    client: null
  }
];

const clients = [
  "Client 1",
  "Client 2",
  "Client 3",
  "Vaibhav Mewara",
  "Kshitiz Garg"
];

export default function AlertHQ() {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab('campaigns')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            activeTab === 'campaigns' 
              ? 'bg-blue-600 text-white' 
              : 'border bg-white'
          }`}
        >
          <span className="material-icons text-xl">📊</span>
          Unmapped Campaigns
        </button>
        <button
          onClick={() => setActiveTab('emails')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            activeTab === 'emails' 
              ? 'bg-blue-600 text-white' 
              : 'border bg-white'
          }`}
        >
          <span className="material-icons text-xl">📧</span>
          Unmapped Email Accounts
        </button>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg p-6">
        {activeTab === 'campaigns' ? (
          <>
            <h2 className="text-2xl font-semibold mb-6">
              Unmapped Campaigns Across Workspaces
            </h2>
            
            {/* Search bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search campaigns"
                className="w-64 pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
            </div>

            {/* Table */}
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Campaign Name</th>
                  <th className="text-left py-4">Choose Client</th>
                  <th className="text-left py-4">1-Click Map</th>
                </tr>
              </thead>
              <tbody>
                {unmappedCampaigns.map((campaign, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4">{campaign.name}</td>
                    <td className="py-4">
                      <select className="w-64 px-4 py-2 border rounded-lg">
                        <option value="">Select client here</option>
                        {clients.map((client, idx) => (
                          <option key={idx} value={client}>
                            {client}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-4">
                      <button className="text-blue-600 font-medium">
                        Map Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Unmapped Emails</h2>
              <div className="flex gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search campaigns"
                    className="w-64 pl-10 pr-4 py-2 border rounded-lg"
                  />
                  <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                </div>
                <select className="px-4 py-2 border rounded-lg">
                  <option>Sort by: Clients</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Campaign Name</th>
                  <th className="text-left py-4">Unmapped Accounts</th>
                  <th className="text-left py-4">1-Click Map</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3" className="py-8 text-center text-gray-500">
                    No unmapped email accounts found
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}