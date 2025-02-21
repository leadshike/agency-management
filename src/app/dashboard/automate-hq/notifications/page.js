'use client';

import { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';

const notificationSections = [
  {
    title: "Task Notifications",
    items: [
      { label: "When a task is assigned", pushEnabled: true, emailEnabled: true },
      { label: "When a task is completed", pushEnabled: true, emailEnabled: true }
    ]
  },
  {
    title: "Client Notifications",
    items: [
      { label: "When a client is mapped", pushEnabled: true, emailEnabled: true }
    ]
  },
  {
    title: "3rd Party",
    titleColor: "text-blue-600",
    items: [
      { label: "When a meeting is created", pushEnabled: true, emailEnabled: true },
      { label: "When a meeting is updated", pushEnabled: true, emailEnabled: true }
    ]
  }
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(notificationSections);

  const toggleNotification = (sectionIndex, itemIndex, type) => {
    setNotifications(prev => {
      const newNotifications = [...prev];
      const item = newNotifications[sectionIndex].items[itemIndex];
      
      if (type === 'push') {
        item.pushEnabled = !item.pushEnabled;
      } else {
        item.emailEnabled = !item.emailEnabled;
      }
      
      return newNotifications;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Back Button */}
      <Link 
        href="/dashboard/automate-hq"
        className="flex items-center gap-2 text-gray-600 mb-8 hover:text-gray-900"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </Link>

      {notifications.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-semibold ${section.titleColor || ''}`}>
              {section.title}
            </h2>
            <div className="flex gap-8">
              <span className="text-gray-500">Push</span>
              <span className="text-gray-500">Email</span>
            </div>
          </div>

          {/* Notification Items */}
          <div className="bg-white rounded-lg border overflow-hidden">
            {section.items.map((item, itemIndex) => (
              <div 
                key={itemIndex}
                className={`flex items-center justify-between p-4 ${
                  itemIndex !== section.items.length - 1 ? 'border-b' : ''
                }`}
              >
                <span className="text-gray-900">{item.label}</span>
                <div className="flex gap-8 items-center">
                  {/* Push Toggle */}
                  <button
                    onClick={() => toggleNotification(sectionIndex, itemIndex, 'push')}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.pushEnabled ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  >
                    {item.pushEnabled && <Check className="w-5 h-5 text-white" />}
                  </button>
                  
                  {/* Email Toggle */}
                  <button
                    onClick={() => toggleNotification(sectionIndex, itemIndex, 'email')}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.emailEnabled ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  >
                    {item.emailEnabled && <Check className="w-5 h-5 text-white" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}