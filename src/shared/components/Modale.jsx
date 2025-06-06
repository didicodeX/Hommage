import { XIcon } from "@phosphor-icons/react";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg max-h-[90vh] rounded-xl shadow-lg relative overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
        >
          <XIcon size={20} />
        </button>

        <div className="py-6 px-8 space-y-4">
          {title && <h5 className="text-center">{title}</h5>}
          {children}
        </div>
      </div>
    </div>
  );
}
