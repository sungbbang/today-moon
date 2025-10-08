import React from 'react';

function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center px-4'
      onClick={onClose}
    >
      <div className='absolute inset-0 backdrop-blur-xs'></div>
      <div
        className='relative w-full max-w-lg rounded-md bg-gray-800/90 p-6'
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
