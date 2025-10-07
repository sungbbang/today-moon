import React from 'react';

function MoonPhaseName({ nameKo, nameEn }: { nameKo: string; nameEn: string }) {
  return (
    <div className='text-center tracking-wide text-white capitalize'>
      <span className='text-lg font-semibold md:text-xl'>{nameKo}</span> |{' '}
      <span className='text-base md:text-lg'>{nameEn}</span>
    </div>
  );
}

export default MoonPhaseName;
