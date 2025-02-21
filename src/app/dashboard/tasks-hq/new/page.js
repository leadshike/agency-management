"use client";
import { useState } from 'react';
import Link from 'next/link';
import TaskActionCard from '@/app/components/TaskActionCard';
import CreateTaskForm from '@/app/components/CreateTaskForm';

const assignTasks = [
  {
    title: "Create New Campaign",
    description: "Pause Campaign when reply rate drops below threshold",
    icon: "📊"
  },
  {
    title: "Reconnect failed accounts",
    description: "Pause Campaign when reply rate drops below threshold",
    icon: "🔄"
  },
  // ... add other tasks
];

const executeTasks = [
  {
    title: "Instantly Pause Campaign",
    description: "Pause Campaign when reply rate drops below threshold",
    icon: "⏸️"
  },
  {
    title: "Resume Campaigns",
    description: "Pause Campaign when reply rate drops below threshold",
    icon: "▶️"
  },
  // ... add other tasks
];

export default function NewTask() {
  const [activeTab, setActiveTab] = useState('assign');
  const [showForm, setShowForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowForm(true);
  };

  return (
    <div className="p-6">
      {/* Back Navigation */}
      <div className="mb-6">
        <Link href="/dashboard/tasks-hq" className="flex items-center text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
      </div>

      {!showForm ? (
        <>
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'assign'
                  ? 'bg-blue-600 text-white'
                  : 'border text-gray-600'
              }`}
              onClick={() => setActiveTab('assign')}
            >
              1-Click Assign
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'execute'
                  ? 'bg-blue-600 text-white'
                  : 'border text-gray-600'
              }`}
              onClick={() => setActiveTab('execute')}
            >
              1-Click Execute
            </button>
          </div>

          {/* Task Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeTab === 'assign'
              ? assignTasks.map((task, index) => (
                  <div key={index} onClick={() => handleTaskClick(task)}>
                    <TaskActionCard {...task} />
                  </div>
                ))
              : executeTasks.map((task, index) => (
                  <div key={index}>
                    <TaskActionCard {...task} actionText="Execute" />
                  </div>
                ))
            }
          </div>
        </>
      ) : (
        <div>
          <CreateTaskForm onClose={() => setShowForm(false)} />
        </div>
      )}
    </div>
  );
}