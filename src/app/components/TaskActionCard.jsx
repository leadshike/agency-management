// src/components/TaskActionCard.js
export default function TaskActionCard({ title, description, actionText = "Assign", icon }) {
    return (
      <div className="p-6 border rounded-lg">
        <div className="flex items-start justify-between mb-4">
          <div className="flex gap-2">
            <span className="text-blue-600">{icon}</span>
            <h3 className="font-medium">{title}</h3>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-end">
          <button className="text-blue-600">{actionText}</button>
        </div>
      </div>
    );
  }
  