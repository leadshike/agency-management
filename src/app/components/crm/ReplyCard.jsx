import { useState } from "react";
import ChatModal from "./ChatModal";

// src/components/crm/ReplyCard.js
export default function ReplyCard({ data, selectable, onSelect, selected }) {
    const [showChatModal, setShowChatModal] = useState(false);
  
    return (
      <>
        <div className="border rounded-lg p-4 bg-white">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">N/A</span>
            {selectable && (
              <input
                type="checkbox"
                checked={selected}
                onChange={onSelect}
                className="h-4 w-4"
              />
            )}
          </div>
          <h3 className="font-medium mb-1">{data.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{data.message}</p>
          <div className="flex items-center text-sm text-gray-500 gap-2">
            <span>{data.email}</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-500">{data.date}</span>
            <button 
              onClick={() => setShowChatModal(true)}
              className={`px-4 py-2 rounded-lg text-sm ${
                selectable ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-800'
              }`}
            >
              Reply Now
            </button>
          </div>
        </div>
  
        <ChatModal
          isOpen={showChatModal}
          onClose={() => setShowChatModal(false)}
          contact={data}
        />
      </>
    );
  }
  