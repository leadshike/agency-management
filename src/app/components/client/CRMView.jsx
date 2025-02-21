// src/components/client/CRMView.jsx
"use client";
import { useState } from 'react';

const dummyMessages = [
  {
    id: 1,
    name: "Martin Bailey",
    message: "Martin Bailey reacted to you...",
    status: "reply"
  },
  {
    id: 2,
    name: "Tomas Eyles",
    message: "Thanks Jake, I've booked in f...",
    status: "awaiting"
  },
  {
    id: 3,
    name: "Martin Bailey",
    message: "Morning Jake, It's a very goo...",
    status: "followup"
  },
  {
    id: 4,
    name: "Jason Beresford",
    message: "I am away on annual leave with...",
    status: "reply"
  }
];

export default function CRMView() {
  const [selectedCampaign, setSelectedCampaign] = useState('');

  const MessageCard = ({ name, message }) => (
    <div className="bg-white p-4 rounded-lg mb-4">
      <h3 className="font-medium mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{message}</p>
      <button className="w-full py-2 text-center border border-gray-200 rounded-lg hover:bg-gray-50">
        Reply Now
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Campaign Selector */}
      <div className="flex justify-end">
        <div className="w-64">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Campaigns
          </label>
          <select 
            className="w-full px-4 py-2 border rounded-lg"
            value={selectedCampaign}
            onChange={(e) => setSelectedCampaign(e.target.value)}
          >
            <option value="">Select Campaign</option>
            {/* Add campaign options here */}
          </select>
        </div>
      </div>

      {/* Message Columns */}
      <div className="grid grid-cols-3 gap-6">
        {/* Reply Column */}
        <div>
          <div className="border-b border-gray-300 pb-2 mb-4">
            <h2 className="text-xl">Reply</h2>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg space-y-4">
            {dummyMessages
              .filter(msg => msg.status === 'reply')
              .map(msg => (
                <MessageCard key={msg.id} {...msg} />
              ))
            }
          </div>
        </div>

        {/* Awaiting Reply Column */}
        <div>
          <div className="border-b border-gray-300 pb-2 mb-4">
            <h2 className="text-xl">Awaiting Reply</h2>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg space-y-4">
            {dummyMessages
              .filter(msg => msg.status === 'awaiting')
              .map(msg => (
                <MessageCard key={msg.id} {...msg} />
              ))
            }
          </div>
        </div>

        {/* Second Follow-up Column */}
        <div className="relative">
          <div className="border-b border-gray-300 pb-2 mb-4">
            <h2 className="text-xl">Second Follow-up</h2>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg space-y-4">
            {dummyMessages
              .filter(msg => msg.status === 'followup')
              .map(msg => (
                <MessageCard key={msg.id} {...msg} />
              ))
            }
          </div>
          {/* Next Arrow */}
          <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg 
              className="w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}