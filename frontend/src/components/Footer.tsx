import React from 'react';

function Footer() {
  return (
    <footer className='w-full py-6 text-center text-xs tracking-wide text-gray-400 md:text-sm'>
      &copy; {new Date().getFullYear()} 오늘의달. All rights reserved.
    </footer>
  );
}

export default Footer;
