'use client';

import { PenSquare, MoreVertical } from 'lucide-react';

const clients = [
  { 
    name: "New Client", 
    campaigns: 0, 
    emailAccounts: 0, 
    replyRate: 0, 
    stage: "Warmup", 
    avatar: "/api/placeholder/32/32" 
  },
  { 
    name: "Dsl Nk", 
    campaigns: 0, 
    emailAccounts: 0, 
    replyRate: 0, 
    stage: "Fresh", 
    avatar: "/api/placeholder/32/32" 
  },
  { 
    name: "Vaibhav Mewara", 
    campaigns: 1, 
    emailAccounts: 2, 
    replyRate: 0, 
    stage: "Running Campaigns", 
    avatar: "/api/placeholder/32/32" 
  },
  { 
    name: "Kshitiz Garg", 
    campaigns: 0, 
    emailAccounts: 0, 
    replyRate: 0, 
    stage: "Running Campaigns", 
    avatar: "/api/placeholder/32/32" 
  }
];

export default function ClientMapTab() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl">Hello Anurag 👋, you have {clients.length} Clients.</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Create New Client Portal
        </button>
      </div>

      <div className="mb-6">
        <select className="border rounded-lg px-4 py-2">
          <option>Sort by: Status</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4">Name</th>
              <th className="text-left py-4">Campaigns</th>
              <th className="text-left py-4">Email Accounts</th>
              <th className="text-left py-4">Cumm Positive Reply Rate</th>
              <th className="text-left py-4">Client Stage</th>
              <th className="text-left py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index} className="border-b">
                <td className="py-4 flex items-center gap-2">
                  <img 
                    src={client.avatar} 
                    alt={client.name} 
                    className="w-8 h-8 rounded-full"
                  />
                  {client.name}
                </td>
                <td className="py-4">{client.campaigns}</td>
                <td className="py-4">{client.emailAccounts}</td>
                <td className="py-4">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                    {client.replyRate}%
                  </span>
                </td>
                <td className="py-4">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                    {client.stage}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex gap-2">
                    <button><PenSquare size={20} /></button>
                    <button><MoreVertical size={20} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}