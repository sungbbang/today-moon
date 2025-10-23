function MoonInfoItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className='flex items-center justify-between border-b border-white/20 px-4 py-3 transition-colors duration-200 last:border-none hover:bg-white/5'>
      <div className='flex items-center gap-2'>
        <div className='text-xl sm:text-2xl'>{icon}</div>
        <span className='font-semibold sm:text-lg'>{label}</span>
      </div>

      <span className='tracking-wide text-gray-400 tabular-nums sm:text-lg'>
        {value}
      </span>
    </div>
  );
}

export default MoonInfoItem;
