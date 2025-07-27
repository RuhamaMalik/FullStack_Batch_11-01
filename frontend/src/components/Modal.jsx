import { useState } from "react"
import BlockedModal from "./BlockedModal";
import DeleteModal from "./DeleteModal";

const Modal = () => {
    const [showBlocked, setShowBlocked] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleBlockUser = () => {
        alert('User has been blocked.');
        setShowBlocked(false);
    };

    return (
        <div>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Modals Example</h1>

                <div className="space-x-4">
                    <button onClick={() => setShowBlocked(true)} className="bg-yellow-600 text-white px-4 py-2 rounded">
                        Show Blocked
                    </button>
                    <button onClick={() => setShowDelete(true)} className="bg-red-600 text-white px-4 py-2 rounded">
                        Show Delete Modal
                    </button>
                </div>

                <BlockedModal
                    isOpen={showBlocked}
                    onCancel={() => setShowBlocked(false)}
                    onConfirm={handleBlockUser}
                />
                <DeleteModal
                    isOpen={showDelete}
                    onCancel={() => setShowDelete(false)}
                    onDelete={() => {
                        alert('Deleted!');
                        setShowDelete(false);
                    }}
                />
            </div>
        </div>
    )
}

export default Modal