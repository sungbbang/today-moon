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
        className='inline-block cursor-pointer text-3xl transition-all duration-300 hover:scale-105 sm:text-4xl md:text-5xl'
      >
        오늘의 달 🌙
      </h1>
    </header>
  );
}

export default Header;
