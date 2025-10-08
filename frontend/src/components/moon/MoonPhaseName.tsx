function MoonPhaseName({ nameKo, nameEn }: { nameKo: string; nameEn: string }) {
  return (
    <div className='space-x-2 text-center tracking-wide text-white capitalize'>
      <span className='font-semibold sm:text-xl'>{nameKo}</span>
      <span className='sm:text-xl'>|</span>
      <span className='text-sm sm:text-base'>{nameEn}</span>
    </div>
  );
}

export default MoonPhaseName;
