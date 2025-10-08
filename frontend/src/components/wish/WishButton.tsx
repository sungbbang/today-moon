import React from 'react';

const HOVER = `hover:text-black hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 hover:text-slate-950 transition-colors duration-300`;

function WishButton({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => {
        setIsModalOpen(true);
      }}
      className={`rounded-xl bg-gradient-to-r from-blue-800 to-indigo-900 px-4 py-2 text-lg md:text-xl ${HOVER}`}
    >
      <span className='text-white'>소원 빌기 🙏</span>
    </button>
  );
}

export default WishButton;
