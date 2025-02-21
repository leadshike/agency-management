// src/app/(dashboard)/tasks-hq/page.js
"use client";
import Link from 'next/link';
import { useState } from 'react';

// Dummy task data
const dummyTasks = [
  {
    id: 1,
    title: "Buy Domains",
    assignedTo: "Kshitiz Garg",
    assignedBy: "Vaibhav Mewara",
    priority: "Mid Priority",
    status: "Not Started",
    dueDate: "Mon, 17 Feb",
    assignee: "Manthan"
  },
  {
    id: 2,
    title: "Create Subscription",
    assignedTo: "Kshitiz Garg",
    assignedBy: "Anurag",
    priority: "Mid Priority",
    status: "Not Started",
    dueDate: "Mon, 17 Feb",
    assignee: "Manthan"
  },
  {
    id: 3,
    title: "Buy New Leads",
    assignedTo: "Kshitiz Garg",
    assignedBy: "Anurag",
    priority: "High Priority",
    status: "Completed",
    dueDate: "Mon, 17 Feb",
    assignee: "Manthan"
  },
  {
    id: 4,
    title: "Buy New Leads",
    assignedTo: "Kshitiz Garg",
    assignedBy: "Anurag",
    priority: "High Priority",
    status: "Completed",
    dueDate: "Mon, 17 Feb",
    assignee: "Manthan"
  },
  {
    id: 5,
    title: "Buy New Leads",
    assignedTo: "Kshitiz Garg",
    assignedBy: "Anurag",
    priority: "High Priority",
    status: "Completed",
    dueDate: "Mon, 17 Feb",
    assignee: "Manthan"
  },
  {
    id: 6,
    title: "Buy New Leads",
    assignedTo: "Kshitiz Garg",
    assignedBy: "Anurag",
    priority: "High Priority",
    status: "Completed",
    dueDate: "Mon, 17 Feb",
    assignee: "Manthan"
  }
];

export default function TasksHQ() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showIgnoreModal, setShowIgnoreModal] = useState(false);
  const [showViewTaskModal, setShowViewTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleViewTask = (task) => {
    setSelectedTask(task);
    setShowViewTaskModal(true);
  };

  const handleIgnoreTask = (task) => {
    setSelectedTask(task);
    setShowIgnoreModal(true);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl">
          Anurag 👋, this is your task control center, you have {dummyTasks.length} task to do.
        </h1>
        <Link 
  href="/dashboard/tasks-hq/new" 
  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors inline-block"
>
  Add new Task
</Link>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-8">
        {/* Due Date Filter */}
        <div className="relative">
          <button 
            className="px-4 py-2 border rounded-lg flex items-center justify-between w-48"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <span>Due Date Filter</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showCalendar && (
            <div className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg p-4 z-10">
              <div className="flex justify-between items-center mb-4">
                <select className="border rounded px-2 py-1">
                  <option>2025</option>
                </select>
                <select className="border rounded px-2 py-1">
                  <option>February</option>
                </select>
              </div>
              {/* Calendar grid would go here */}
              <div className="grid grid-cols-7 gap-2">
                {/* Calendar days */}
              </div>
              <div className="flex justify-between mt-4">
                <button className="text-blue-600">Today</button>
                <button className="text-red-500">Clear</button>
                <button onClick={() => setShowCalendar(false)}>Close</button>
              </div>
            </div>
          )}
        </div>

        {/* Client Filter */}
        <select className="px-4 py-2 border rounded-lg w-48">
          <option>All Clients</option>
          <option>Kshitiz Garg</option>
          <option>Vaibhav Mewara</option>
          <option>Dsl Nk</option>
        </select>

        {/* Priority Filter */}
        <select className="px-4 py-2 border rounded-lg w-48">
          <option>Sort by: Priority</option>
          <option>High Priority</option>
          <option>Mid Priority</option>
          <option>Low Priority</option>
        </select>

        {/* Status Filter */}
        <select className="px-4 py-2 border rounded-lg w-48">
          <option>Sort by: Status</option>
          <option>Not Started</option>
          <option>Task Started</option>
          <option>Need Attention</option>
          <option>Completed</option>
        </select>
      </div>

      {/* Agency Tasks Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-semibold">Agency Tasks</h2>
          <span className="bg-red-500 text-white text-sm px-2 py-0.5 rounded-full">24</span>
        </div>
        <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg inline-block mb-6">
          Tasks created by the agency
        </div>

        {/* Task Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyTasks.map((task) => (
            <div key={task.id} className="bg-white p-4 rounded-lg border">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-sm text-gray-600">{task.assignedTo}</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleViewTask(task)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleIgnoreTask(task)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <select className="px-3 py-1.5 border rounded-lg text-sm">
                  <option>{task.priority}</option>
                </select>
                <select className="px-3 py-1.5 border rounded-lg text-sm">
                  <option>{task.assignee}</option>
                </select>
                <div className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg text-sm">
                  Due: {task.dueDate}
                </div>
                <select className="px-3 py-1.5 border rounded-lg text-sm">
                  <option>{task.status}</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ignore Task Modal */}
      {showIgnoreModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-center mb-6">
              Are you sure you want to Mark this task as Ignored?
            </h3>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setShowIgnoreModal(false)}
                className="px-6 py-2 bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button 
                className="px-6 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => {
                  // Handle ignore logic here
                  setShowIgnoreModal(false);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Task Modal */}
      {showViewTaskModal && selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{selectedTask.title}</h3>
              <button 
                onClick={() => setShowViewTaskModal(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Add more task details here */}
            <div className="space-y-4">
              <p><strong>Assigned To:</strong> {selectedTask.assignedTo}</p>
              <p><strong>Assigned By:</strong> {selectedTask.assignedBy}</p>
              <p><strong>Priority:</strong> {selectedTask.priority}</p>
              <p><strong>Status:</strong> {selectedTask.status}</p>
              <p><strong>Due Date:</strong> {selectedTask.dueDate}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}