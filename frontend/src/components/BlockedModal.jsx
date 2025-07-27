
const BlockedModal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 text-center relative">
        {/* Title */}
        <h2 className="text-xl font-bold mb-2 text-yellow-600">Block User</h2>

        {/* Message */}
        <p className="text-gray-700 mb-6">
          Are you sure you want to block this user? They will no longer be able to access your services.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="bg-gray-200 text-gray-700 px-5 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-yellow-600 text-white px-5 py-2 rounded hover:bg-yellow-700"
          >
            Block
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockedModal;
