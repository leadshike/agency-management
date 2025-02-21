
// src/components/CreateTaskForm.js
import { useState } from 'react';

export default function CreateTaskForm({ onClose }) {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-medium">Create New Campaign</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Select Client</label>
          <select className="w-full border rounded-lg p-2">
            <option>Choose Client</option>
          </select>
        </div>

        <div>
          <label className="flex items-center text-sm mb-1">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs mr-2">1</span>
            Enter Campaign Name*
          </label>
          <input
            type="text"
            className="w-full border rounded-lg p-2"
            placeholder="Write campaign name here"
          />
        </div>

        <div>
          <label className="flex items-center text-sm mb-1">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs mr-2">2</span>
            Accounts to be used
          </label>
          <select className="w-full border rounded-lg p-2">
            <option>Select accounts</option>
          </select>
        </div>

        <div>
          <label className="flex items-center text-sm mb-1">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs mr-2">3</span>
            Upload Leads CSV or Paste Leads URL
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 border rounded-lg p-2"
              placeholder="Paste Spreadsheet link here"
            />
            <button className="border rounded-lg px-4">Upload CSV</button>
          </div>
        </div>

        <div>
          <label className="flex items-center text-sm mb-1">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs mr-2">4</span>
            Paste the Sequence
          </label>
          <textarea
            className="w-full border rounded-lg p-2 h-32"
            placeholder="Sequence 1:&#10;Sequence 2:&#10;Sequence 3:"
          />
        </div>

        <div>
          <label className="flex items-center text-sm mb-1">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs mr-2">5</span>
            Give Campaign Instructions
          </label>
          <div className="border rounded-lg p-4 bg-red-50 border-red-100 space-y-2">
            <p>Schedule: 9am(EST) to 5pm(EST)</p>
            <p>Open Tracking: Disabled</p>
            <p>Daily Sending Limit: 25</p>
            <p>Any other instructions:</p>
          </div>
        </div>

        <div>
          <label className="flex items-center text-sm mb-1">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs mr-2">6</span>
            Assign VA
          </label>
          <select className="w-full border rounded-lg p-2">
            <option>Select VA</option>
          </select>
        </div>

        <div>
          <label className="flex items-center text-sm mb-1">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs mr-2">7</span>
            Set Priority
          </label>
          <select className="w-full border rounded-lg p-2">
            <option>Choose an option...</option>
          </select>
        </div>

        <div>
          <label className="flex items-center text-sm mb-1">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs mr-2">8</span>
            Task Deadline
          </label>
          <input
            type="text"
            className="w-full border rounded-lg p-2"
            defaultValue="17 February, 2025"
          />
        </div>
      </div>
    </div>
  );
}
