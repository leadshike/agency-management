// src/components/crm/StatusSelect.js
"use client";
import { useState } from 'react';

export default function StatusSelect({ onStatusChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Meeting Scheduled');

  const statuses = [
    'Reply To Interested',
    'Reply Follow-up',
    'Second Follow-up',
    'Meeting Scheduled',
    'Awaiting Reply',
    'Out of Office',
    'Not Interested',
    'Reply Archives',
    'Wrong Person'
  ];

  const handleSelect = (status) => {
    setSelectedStatus(status);
    onStatusChange?.(status);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border rounded-lg flex items-center justify-between text-gray-700 bg-white"
      >
        <span>{selectedStatus}</span>
        <svg 
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg py-1 z-50">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => handleSelect(status)}
              className={`w-full px-4 py-2 text-left hover:bg-blue-50 ${
                status === selectedStatus ? 'bg-blue-600 text-white hover:bg-blue-700' : 'text-gray-700'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}