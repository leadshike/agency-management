
// src/components/crm/ChatModal.js
export default function ChatModal({ isOpen, onClose, contact }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-2xl">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-medium">{contact.name}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
  
          {/* Chat Content */}
          <div className="p-4 h-96 overflow-y-auto bg-gray-50">
            {/* Previous Message */}
            <div className="mb-4">
              <div className="bg-blue-600 text-white rounded-lg p-3 ml-auto max-w-md">
                <p className="mb-1">{contact.message}</p>
                <div className="flex justify-between items-center text-sm opacity-80">
                  <span>{contact.date}</span>
                </div>
              </div>
            </div>
          </div>
  
          {/* Input Area */}
          <div className="p-4 border-t">
            <div className="flex gap-4">
              <select className="border rounded-lg px-4 py-2 flex-shrink-0">
                <option>Select Template</option>
              </select>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex-shrink-0">
                Change Lead Status
              </button>
            </div>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                className="flex-1 border rounded-lg px-4 py-2"
                placeholder={`Hey, ${contact.name}`}
              />
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6 rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  