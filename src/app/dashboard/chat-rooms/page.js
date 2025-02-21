'use client';

import { useState } from 'react';
import { Search, Paperclip, Image, Send } from 'lucide-react';

const users = [
  {
    name: "New Client",
    lastSeen: "7:49 pm, 19 Feb",
    online: true,
  },
  {
    name: "Dsl Nk",
    lastSeen: "7:49 pm, 19 Feb",
    online: true,
  },
  {
    name: "Vaibhav Mewara",
    lastSeen: "7:49 pm, 19 Feb",
    online: true,
  },
  {
    name: "Kshitiz Garg",
    lastSeen: "7:49 pm, 19 Feb",
    online: true,
  }
];

export default function ChatRooms() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('client-admin');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Left Sidebar - User List */}
        <div className="w-80 bg-white border-r flex flex-col">
          <div className="p-4 border-b">
            <h1 className="text-xl font-semibold mb-4">CHAT SUPPORT</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 bg-blue-50 rounded-lg"
              />
              <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {users.map((user) => (
              <div
                key={user.name}
                onClick={() => setSelectedUser(user)}
                className={`flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer ${
                  selectedUser.name === user.name ? 'bg-gray-50' : ''
                }`}
              >
                <div className="relative">
                  <Image
                    src="/img/profile.png"
                    alt={user.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  {user.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-500">Last Seen {user.lastSeen}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b bg-white">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/img/profile.png"
                alt={selectedUser.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h2 className="font-semibold text-lg">{selectedUser.name}</h2>
                <p className="text-sm text-gray-500">Last Seen {selectedUser.lastSeen}</p>
              </div>
            </div>

            {/* Chat Tabs */}
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('client-admin')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  activeTab === 'client-admin' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600'
                }`}
              >
                Client + Admin
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab('va-admin')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  activeTab === 'va-admin' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600'
                }`}
              >
                VA + Admin
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab('everyone')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  activeTab === 'everyone' 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600'
                }`}
              >
                Everyone
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Messages will be rendered here */}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex items-center gap-2">
              <button className="text-gray-400 hover:text-gray-600">
                <Paperclip className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <Image className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
              />
              <button 
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
                onClick={() => setMessage('')}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}