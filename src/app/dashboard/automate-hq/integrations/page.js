'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const integrations = [
  {
    name: "Stripe",
    logo: "/api/placeholder/48/48",
  },
  {
    name: "Calendly",
    logo: "/api/placeholder/48/48",
  },
  {
    name: "Zoom",
    logo: "/api/placeholder/48/48",
  },
  {
    name: "Slack",
    logo: "/api/placeholder/48/48",
  },
  {
    name: "Discord",
    logo: "/api/placeholder/48/48",
  }
];

export default function Integrations() {
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

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          Connect All Your Tools And Work Efficiently
        </h1>
        <p className="text-lg text-gray-600">
          Centralize all your data. Seamlessly connect LEADSHIKE to your existing tools.
        </p>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <div 
            key={integration.name}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <img
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  className="w-12 h-12 rounded-lg"
                />
              </div>
              
              <div className="flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-semibold mb-4">
                  {integration.name}
                </h3>
                
                <button 
                  className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-fit"
                >
                  <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  Connect
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}