// src/app/(dashboard)/crm-pipeline/page.js
"use client";
import ReplyCard from '@/app/components/crm/ReplyCard';
import StatusSelect from '@/app/components/crm/SelectStatus';
import StatusDropdown from '@/app/components/crm/StatusDropdown';
import StatusModal from '@/app/components/crm/StatusModal';
import { useState } from 'react';

const dummyData = [
  {
    id: 1,
    name: "Carolyn Kelly-Mueller",
    email: "anuragsharmayo@gmail.com",
    message: "Good morning, Is this a CE with credits...",
    date: "Jan 9, 2025 10:31 pm",
    status: "Reply To Interested"
  },
  {
    id: 2,
    name: "Tim Godsey",
    email: "anuragsharmayo@gmail.com",
    message: "Yes, I would be interested. I hope I'm not late...",
    date: "Jan 9, 2025 10:31 pm",
    status: "Reply Follow-up"
  },
  // Add more dummy data...
];

export default function CRMPipeline() {
  const [mainTab, setMainTab] = useState('positive');
  const [subTab, setSubTab] = useState('interested');
  const [selectedCards, setSelectedCards] = useState([]);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const mainTabs = [
    { id: 'positive', label: 'Positive Reply Pipeline', icon: '📈' },
    { id: 'negative', label: 'Negative Reply Pipeline', icon: '📉' },
    { id: 'uncategorized', label: 'Uncategorized Reply Pipeline', icon: '➡️' }
  ];

  const subTabs = [
    { id: 'interested', label: 'Reply To Interested', count: 19 },
    { id: 'followup', label: 'Reply Follow-up', count: 1 },
    { id: 'second', label: 'Second Follow-up', count: 1 },
    { id: 'meeting', label: 'Meeting Scheduled', count: 1 }
  ];

  const handleCardSelect = (id) => {
    setSelectedCards(prev => {
      if (prev.includes(id)) {
        return prev.filter(cardId => cardId !== id);
      }
      return [...prev, id];
    });
    setShowStatusDropdown(true);
  };

  return (
    <div className="p-6">
      {/* Main Tabs */}
      <div className="flex gap-4 mb-6">
        {mainTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setMainTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              mainTab === tab.id 
                ? 'bg-blue-600 text-white' 
                : 'border text-gray-600'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Sub Tabs (only show for positive pipeline) */}
      {mainTab === 'positive' && (
        <div className="border rounded-lg p-2 mb-6">
          <div className="flex gap-4">
            {subTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  subTab === tab.id
                    ? 'bg-green-100 text-green-800'
                    : 'text-gray-600'
                }`}
              >
                {tab.label}
                <span className="bg-gray-200 px-2 py-0.5 rounded-full text-sm">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select className="border rounded-lg px-4 py-2">
          <option>All Clients</option>
        </select>
        <select className="border rounded-lg px-4 py-2">
          <option>All Campaign</option>
        </select>
        <button className="text-blue-600">Reset</button>
      </div>
{/* Status Dropdown (show when cards are selected) */}
{selectedCards.length > 0 && showStatusDropdown && (
  <div className="mb-4 w-64">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Select Status
    </label>
    <StatusSelect
      onStatusChange={(newStatus) => {
        setShowStatusModal(true);
        // You can store the selected status in state if needed
        // setSelectedStatus(newStatus);
      }}
    />
  </div>
)}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyData.map(card => (
          <ReplyCard
            key={card.id}
            data={card}
            selectable={mainTab === 'uncategorized'}
            onSelect={() => handleCardSelect(card.id)}
            selected={selectedCards.includes(card.id)}
          />
        ))}
      </div>

      {/* Status Change Modal */}
      {showStatusModal && (
        <StatusModal
          onClose={() => setShowStatusModal(false)}
          onConfirm={() => {
            setShowStatusModal(false);
            setSelectedCards([]);
            setShowStatusDropdown(false);
          }}
        />
      )}
    </div>
  );
}