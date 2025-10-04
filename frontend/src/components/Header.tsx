import React from 'react';

function Header({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLHeadingElement>;
}) {
  return (
    <header className='py-6 text-center'>
      <h1
        onClick={onClick}
        className='group inline-block cursor-pointer text-3xl text-white transition-all duration-300 hover:scale-105 sm:text-4xl md:text-5xl'
      >
        오늘의{' '}
        <span className='transition-all duration-300 group-hover:text-yellow-200'>
          달 🌙
        </span>
      </h1>
    </header>
  );
}

export default Header;
