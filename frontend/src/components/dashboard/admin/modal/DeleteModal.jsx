const DeleteModal = ({ isOpen, onClose, onDelete, data,title }) => {
     
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative p-6">

        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          &times;
        </button>

        {/* title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Delete {title  || ""}
        </h2>

        {/* body */}
        <p className="text-gray-700 text-sm mb-1">
          Are you sure you want to delete:
        </p>
        <div className="bg-gray-100 p-3 rounded-md mb-4">
          <p className="font-semibold py-3">{data.name || data?.title}</p>
          <p className="text-sm text-gray-600 pb-3">{data.description || ""}</p>
        </div>

        {/* buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => onDelete(data._id)}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};



export default DeleteModal
