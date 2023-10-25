import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto">
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={onClose} />
        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
