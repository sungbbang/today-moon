import React from 'react';

function CalendarNavButton({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className='cursor-pointer rounded-full p-2 text-white transition-colors duration-300 hover:bg-gray-700'
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default CalendarNavButton;
