
// src/components/client/ClientTabs.js
export default function ClientTabs({ activeTab, onTabChange }) {
    const tabs = [
      { id: 'analytics', label: 'Analytics Book', icon: '📊' },
      { id: 'crm', label: 'CRM View', icon: '👥' },
      { id: 'campaign', label: 'Campaign Preferences', icon: '🎯' },
      { id: 'kyc', label: 'KYC', icon: '📋' },
      { id: 'forms', label: 'Forms', icon: '📝' },
      { id: 'chat', label: 'Chat', icon: '💬' }
    ];
  
    return (
      <div className="flex gap-4 border-b">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 ${
              activeTab === tab.id 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    );
  }
  