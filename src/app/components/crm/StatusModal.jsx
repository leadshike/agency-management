// src/components/crm/StatusModal.js
export default function StatusModal({ onClose, onConfirm }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 max-w-md w-full">
          <h3 className="text-lg font-medium text-center mb-6">
            Are you sure to change the status of these uncategorized replies?
            <br />
            This action cannot be reverted.
          </h3>
          <div className="flex gap-4">
            <button
              onClick={onConfirm}
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg"
            >
              Yes
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-red-500 text-white py-2 rounded-lg"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }