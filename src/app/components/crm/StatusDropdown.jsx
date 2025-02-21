
// src/components/crm/StatusDropdown.js
export default function StatusDropdown({ onSelect, onClose }) {
    const statuses = [
      'Meeting Scheduled',
      'Reply To Interested',
      'Reply Follow-up',
      'Second Follow-up',
      'Awaiting Reply',
      'Out of Office',
      'Not Interested',
      'Reply Archives',
      'Wrong Person'
    ];
  
    return (
      <div className="border rounded-lg p-2 bg-white w-64">
        <h3 className="text-sm font-medium mb-2 px-2">Select Status</h3>
        {statuses.map(status => (
          <button
            key={status}
            onClick={onSelect}
            className="w-full text-left px-2 py-1 text-sm hover:bg-gray-50 rounded"
          >
            {status}
          </button>
        ))}
      </div>
    );
  }