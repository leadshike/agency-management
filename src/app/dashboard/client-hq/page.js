// src/app/(dashboard)/client-hq/page.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import CreateClientModal from '@/app/components/client/CreateClientModal';
import ClientCard from '@/app/components/client/ClientCard';

const dummyClients = [
  {
    id: 1,
    name: "Dsl Nk",
    campaigns: 0,
    syncStatus: 0,
    emailAccounts: 0,
    status: "active"
  },
  {
    id: 2,
    name: "Vaibhav Mewara",
    campaigns: 1,
    syncStatus: 1,
    emailAccounts: 2,
    status: "active"
  },
  {
    id: 3,
    name: "Kshitiz Garg",
    campaigns: 0,
    syncStatus: 0,
    emailAccounts: 0,
    status: "active"
  }
];

export default function ClientHub() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [clients, setClients] = useState(dummyClients);

  const handleCreateClient = (newClient) => {
    setClients(prev => [...prev, {
      ...newClient,
      id: prev.length + 1,
      campaigns: 0,
      syncStatus: 0,
      emailAccounts: 0,
      status: "active"
    }]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 text-blue-600">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            </svg>
            <span className="text-xl font-medium">Dashboard</span>
          </div>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            Create New Client Portal
          </button>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clients.map(client => (
            <div key={client.id} className="flex justify-center">
              <Link href={`/dashboard/client-hq/${client.id}`}>
                <ClientCard data={client} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Create Client Modal */}
      <CreateClientModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSubmit={(clientData) => {
          handleCreateClient(clientData);
          setShowCreateModal(false);
        }}
      />
    </div>
  );
}