// src/app/page.js

import Sidebar from "./components/Sidebar";
import TemplateHeader from "./components/TemplateHeader";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <TemplateHeader />
        <div className="p-6">
          {/* Template Categories */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-medium mb-4">Introduction/First Contact</h2>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-green-50 p-4 rounded-lg">
                    <p className="font-medium mb-2">Subject:</p>
                    <p className="text-sm mb-4">Exciting Opportunities with Your Company Name!</p>
                    <p className="text-sm text-gray-500 mb-4">Body Preview here...</p>
                    <div className="flex items-center gap-2">
                      <button className="text-blue-600 text-sm">View Template</button>
                      <button className="p-1 hover:bg-green-100 rounded">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        </svg>
                      </button>
                      <button className="p-1 hover:bg-green-100 rounded">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow-Up Section */}
            <div>
              <h2 className="text-lg font-medium mb-4">Follow-Up</h2>
              <div className="grid grid-cols-4 gap-4">
                {/* Similar template cards */}
              </div>
            </div>

            {/* Meeting/Call Request Section */}
            <div>
              <h2 className="text-lg font-medium mb-4">Meeting/Call Request</h2>
              <div className="grid grid-cols-4 gap-4">
                {/* Similar template cards */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
