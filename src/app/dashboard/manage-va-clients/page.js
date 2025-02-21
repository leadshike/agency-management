'use client';

import { useState } from 'react';
import { MoreVertical, X } from 'lucide-react';
import Image from 'next/image';

const clients = [
  {
    name: "Kshitiz Garg",
    email: "kshitiz@garg.com",
    access: "Kshitiz Garg",
    invitedDate: "Thu 9 January, 2025",
    status: "Active",
    avatar: "/img/profile.png"
  },
  {
    name: "Vaibhav Mewara",
    email: "vaibhav@mewara.com",
    access: "Vaibhav Mewara",
    invitedDate: "Thu 9 January, 2025",
    status: "Active",
    avatar: "/img/profile.png"
  },
  {
    name: "Dsl Nk",
    email: "sdfkn@gmail.com",
    access: "Dsl Nk",
    invitedDate: "Sat 15 February, 2025",
    status: "Active",
    avatar: "/img/profile.png"
  },
  {
    name: "New Client",
    email: "dfgdf@gmail.com",
    access: "New Client",
    invitedDate: "Wed 19 February, 2025",
    status: "Active",
    avatar: "/img/profile.png"
  }
];

const virtualAssistants = [
  {
    name: "Manthan Prajapat",
    email: "manthan@prajapat.com",
    invitedDate: "Thu 9 January, 2025",
    status: "Active",
    avatar: "/img/profile.png"
  }
];

export default function ManageVAClients() {
  const [activeTab, setActiveTab] = useState('client');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl">
          Hello Anurag 👋, you have {activeTab === 'client' ? '4 Clients' : '1 Virtual Assistants'}.
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          {activeTab === 'client' ? 'Add Client' : 'Add VA'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('client')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            activeTab === 'client' ? 'bg-blue-600 text-white' : 'border'
          }`}
        >
          <span className="text-xl">👥</span>
          Client Access
        </button>
        <button
          onClick={() => setActiveTab('va')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            activeTab === 'va' ? 'bg-blue-600 text-white' : 'border'
          }`}
        >
          <span className="text-xl">👥</span>
          VA Access
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Name</th>
              {activeTab === 'client' && <th className="text-left p-4">Access</th>}
              <th className="text-left p-4">Invited Date</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4"></th>
            </tr>
          </thead>
          <tbody>
            {(activeTab === 'client' ? clients : virtualAssistants).map((user, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                {activeTab === 'client' && (
                  <td className="p-4">{user.access}</td>
                )}
                <td className="p-4">{user.invitedDate}</td>
                <td className="p-4">
                  <span className="text-green-600">{user.status}</span>
                </td>
                <td className="p-4">
                  <button>
                    <MoreVertical className="w-5 h-5 text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Setup VA Account</h2>
              <button onClick={() => setShowModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Image Upload */}
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer">
                  <div className="text-center">
                    <div className="text-sm text-blue-600">Click to</div>
                    <div className="text-sm text-blue-600">upload an</div>
                    <div className="text-sm text-blue-600">image</div>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="abc@gmail.com"
                    className="w-full p-2 border rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Send Invite
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}