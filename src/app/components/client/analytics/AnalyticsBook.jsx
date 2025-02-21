// src/components/client/analytics/AnalyticsBook.jsx
"use client";
import { useState } from 'react';

export default function AnalyticsBook({ section = 'campaign' }) {
  return (
    <div>
      {section === 'campaign' && <CampaignSection />}
      {section === 'leads' && <LeadsSection />}
      {section === 'email' && <EmailSection />}
    </div>
  );
}

function CampaignSection() {
  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search Campaigns"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <select className="px-4 py-2 border rounded-lg">
          <option>Filter by Campaign Status</option>
        </select>
        <select className="px-4 py-2 border rounded-lg">
          <option>Sort By numbers</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        {['Reply Rate', 'No of Positive Replies', 'No of Replies', 'Bounce Rate'].map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg">
            <h3 className="text-gray-600 mb-2">{stat}</h3>
            <p className="text-3xl font-medium">0{stat.includes('Rate') ? '%' : ''}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeadsSection() {
  const leadsData = {
    total: 0,
    contacted: 0,
    unsubscribed: 0,
    bounced: 0
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-6">
        {/* Circular Progress */}
        <div className="bg-white p-6 rounded-lg">
          <div className="w-32 h-32 relative">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#eee"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#4CAF50"
                strokeWidth="3"
                strokeDasharray={`${0}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-2xl font-medium">0%</span>
                <p className="text-xs text-gray-500">Total leads contacted</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Suggestions */}
        <div className="flex-1">
          <h3 className="text-xl font-medium mb-4">AI Suggestions</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <h4>Campaign</h4>
                <button className="text-gray-400">×</button>
              </div>
              <p className="text-gray-600">Your {leadsData.total} Campaign(s) are completed.</p>
              <button className="text-blue-600 text-sm mt-4">See More</button>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <h4>Task</h4>
                <button className="text-gray-400">×</button>
              </div>
              <p className="text-gray-600">Your {leadsData.total} Campaign are completed.</p>
              <button className="text-blue-600 text-sm mt-4">See More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Leads Stats */}
      <div className="space-y-2">
        <h3 className="text-xl font-medium">All {leadsData.total} Campaigns</h3>
        <div className="flex gap-4">
          <div className="bg-green-100 px-3 py-1 rounded-full">
            <span className="text-green-800">{leadsData.contacted}</span>
            <span className="ml-2 text-gray-600">Leads Contacted</span>
          </div>
          <div className="bg-yellow-100 px-3 py-1 rounded-full">
            <span className="text-yellow-800">{leadsData.unsubscribed}</span>
            <span className="ml-2 text-gray-600">Leads Unsubscribed</span>
          </div>
          <div className="bg-red-100 px-3 py-1 rounded-full">
            <span className="text-red-800">{leadsData.bounced}</span>
            <span className="ml-2 text-gray-600">Leads Bounced</span>
          </div>
        </div>
      </div>

      {/* Leads Analytics Filters */}
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Leads Analytics</h3>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="All Campaigns"
            className="px-4 py-2 border rounded-lg"
          />
          <select className="px-4 py-2 border rounded-lg">
            <option>All Clients</option>
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option>Sort By: Volume</option>
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option>Sort By: Status</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function EmailSection() {
  const emailData = {
    totalAccounts: 15,
    totalSent: 13,
    healthyAccounts: 15,
    unhealthyAccounts: 0,
    warmupDisabled: 15,
    warmupEnabled: 0
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex gap-4">
        <select className="px-4 py-2 border rounded-lg">
          <option>All Emails</option>
        </select>
        <select className="px-4 py-2 border rounded-lg">
          <option>All Clients</option>
        </select>
        <select className="px-4 py-2 border rounded-lg">
          <option>Warmup Status</option>
        </select>
        <select className="px-4 py-2 border rounded-lg">
          <option>Health Status</option>
        </select>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-gray-600">No. of Accounts</p>
              <p className="text-3xl font-medium">{emailData.totalAccounts}</p>
            </div>
            <div>
              <p className="text-gray-600">Total Email Sent</p>
              <p className="text-3xl font-medium">{emailData.totalSent}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-gray-600">No of Healthy Account</p>
              <p className="text-3xl font-medium">{emailData.healthyAccounts}</p>
            </div>
            <div>
              <p className="text-gray-600">No of Unhealthy Account</p>
              <p className="text-3xl font-medium">{emailData.unhealthyAccounts}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-gray-600">Warmup Disabled Account</p>
              <p className="text-3xl font-medium">{emailData.warmupDisabled}</p>
            </div>
            <div>
              <p className="text-gray-600">Warmup Enabled Account</p>
              <p className="text-3xl font-medium">{emailData.warmupEnabled}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Email Accounts Table */}
      <div>
        <h3 className="text-xl font-medium mb-4">Email Accounts Analytics</h3>
        <div className="bg-white rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email Sent</th>
                <th className="text-left p-4">1 Click Warmup Status Change</th>
                <th className="text-left p-4">Health Status</th>
                <th className="text-left p-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 text-blue-600">jake.carter@oneshotconnect.com</td>
                <td className="p-4">1</td>
                <td className="p-4">
                  <select className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    <option>active</option>
                  </select>
                </td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    active
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-gray-400">⋮</button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}