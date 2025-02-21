// src/components/Header.js
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className="text-lg">Hello Shekhar 👋, Manager your setting here.</h1>
        
        <div className="flex items-center gap-4">
          {/* Action Buttons */}
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14"/>
            </svg>
          </button>
          
          {/* Notification Badges */}
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </button>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-8 h-8 rounded-full overflow-hidden"
            >
              <Image src="/img/profile.png" alt="Profile" width={32} height={32} />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border">
                <Link href="/dashboard/profile" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 block">
                  Profile
                </Link>
                <Link href="/dashboard/profile/settings" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 block">
                  Settings
                </Link>
                <Link href="/dashboard/profile/api-management" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 block">
                  API Management
                </Link>
                <Link href="/dashboard/profile/white-label" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 block">
                  White Label
                </Link>
                <Link href="/dashboard/profile/invoices" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 block">
                  Invoices
                </Link>
                <Link href="/dashboard/profile/update-billing" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 block">
                  Update Billing
                </Link>
                <hr className="my-1" />
                <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 block w-full text-left">
                  Logout 
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}