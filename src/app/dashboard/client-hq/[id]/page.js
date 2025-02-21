
// src/app/(dashboard)/client-hq/[id]/page.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import ClientTabs from '@/app/components/client/ClientTabs';
import AnalyticsBook from '@/app/components/client/analytics/AnalyticsBook';
import CRMView from '@/app/components/client/CRMView';

export default function ClientDetails({ params }) {
  const [activeTab, setActiveTab] = useState('analytics');
  const [activeSection, setActiveSection] = useState('campaign');

  const sections = [
    { id: 'campaign', label: 'Campaign' },
    { id: 'leads', label: 'Leads' },
    { id: 'email', label: 'Email' }
  ];

  return (
    <div className="p-6">
      {/* Back Navigation */}
      <div className="mb-6">
        <Link href="/dashboard/client-hq" className="inline-flex items-center text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>
      </div>

      {/* Client Name */}
      <h1 className="text-2xl font-medium mb-6">Dsl Nk</h1>

      {/* Main Tabs */}
      <ClientTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'analytics' && (
          <div>
            {/* Section Tabs */}
            <div className="flex gap-4 mb-6">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-lg ${
                    activeSection === section.id
                      ? 'bg-blue-50 text-blue-600 border border-blue-100'
                      : 'border text-gray-600'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            <AnalyticsBook section={activeSection} />
          </div>
        )}
        
        {activeTab === 'crm' && <CRMView />}

        {/* Add other tab contents as needed */}
      </div>
    </div>
  );
}
