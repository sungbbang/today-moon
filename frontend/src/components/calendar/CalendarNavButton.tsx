import React from 'react';

function CalendarNavButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className='cursor-pointer rounded-full p-2 text-white transition-colors duration-300 hover:bg-gray-700'
    >
      {children}
    </button>
  );
}

export default CalendarNavButton;
