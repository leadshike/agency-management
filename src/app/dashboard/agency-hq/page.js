'use client';

import AnalyticsTab from '@/app/components/agency-hq/AnalyticsTab';
import CampaignMapTab from '@/app/components/agency-hq/CampaignMapTab';
import ClientMapTab from '@/app/components/agency-hq/ClientMapTab';
import CRMMapTab from '@/app/components/agency-hq/CRMMapTab';
import DashboardTab from '@/app/components/agency-hq/DashboardTab';
import TaskMapTab from '@/app/components/agency-hq/TaskMapTab';
import { useState } from 'react';

export default function AgencyHQ() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'client-map', label: 'Client Map' },
    { id: 'campaign-map', label: 'Campaign Map', badge: '26' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'crm-map', label: 'CRM Map' },
    { id: 'task-map', label: 'Task Map', badge: '6' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'client-map':
        return <ClientMapTab />;
      case 'campaign-map':
        return <CampaignMapTab />;
      case 'analytics':
        return <AnalyticsTab />;
      case 'crm-map':
        return <CRMMapTab />;
      case 'task-map':
        return <TaskMapTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <div className="border-b bg-white">
        <div className="flex gap-6 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-4 flex items-center gap-1 ${
                activeTab === tab.id ? 'border-b-2 border-blue-600 text-blue-600' : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {tab.badge && (
                <span className="bg-gray-200 rounded-full px-2 text-sm">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white mt-6 mx-6 rounded-lg">
        {renderTabContent()}
      </div>
    </div>
  );
}