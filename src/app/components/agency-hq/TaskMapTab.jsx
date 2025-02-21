'use client';

import { useState } from 'react';

const tasks = {
  pending: [],
  ignored: [
    {
      type: "Delete Leads from Campaign",
      client: "Kshitiz Garg",
      dueDate: "Tue, 28 Jan",
      assignee: "Manthan"
    }
  ],
  completed: [
    {
      type: "Add New Campaign",
      client: "Kshitiz Garg",
      dueDate: "Fri, 17 Jan",
      assignee: "Manthan"
    },
    {
      type: "Reconnect Accounts",
      client: "Kshitiz Garg",
      dueDate: "Thu, 13 Feb",
      assignee: "Anurag"
    },
    {
      type: "Create Subscription",
      client: "Vaibhav Mewara",
      dueDate: "Wed, 29 Jan",
      assignee: "Anurag"
    }
  ]
};

const assignees = ["Manthan", "Anurag", "Team Lead", "Project Manager"];

export default function TaskMapTab() {
  const [activeTab, setActiveTab] = useState('pending');

  const tabs = [
    { id: 'pending', label: 'Task Pending (On Me)', count: tasks.pending.length },
    { id: 'ignored', label: 'Ignored Tasks', count: tasks.ignored.length },
    { id: 'completed', label: 'Task Completed Digest', count: tasks.completed.length }
  ];

  return (
    <div className="p-6">
      {/* Task Tabs */}
      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Task Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 text-gray-600">Task Type</th>
              <th className="text-left py-4 text-gray-600">Client Name</th>
              <th className="text-left py-4 text-gray-600">Due Date</th>
              <th className="text-left py-4 text-gray-600">Assignee</th>
              {activeTab === 'ignored' && (
                <th className="text-left py-4 text-gray-600">Ignorance Accepted</th>
              )}
            </tr>
          </thead>
          <tbody>
            {tasks[activeTab].length === 0 ? (
              <tr>
                <td colSpan={activeTab === 'ignored' ? 5 : 4} className="py-8 text-center text-gray-500">
                  No tasks!
                </td>
              </tr>
            ) : (
              tasks[activeTab].map((task, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4">{task.type}</td>
                  <td className="py-4">{task.client}</td>
                  <td className="py-4">{task.dueDate}</td>
                  <td className="py-4">
                    <select className="border rounded-lg px-4 py-1 w-36">
                      <option value={task.assignee}>{task.assignee}</option>
                      {assignees.map((assignee) => (
                        assignee !== task.assignee && (
                          <option key={assignee} value={assignee}>
                            {assignee}
                          </option>
                        )
                      ))}
                    </select>
                  </td>
                  {activeTab === 'ignored' && (
                    <td className="py-4">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}