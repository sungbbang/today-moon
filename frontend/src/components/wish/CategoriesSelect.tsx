import { useState } from 'react';
import { categories } from '../../utils/categories';

interface CategoriesSelectProps {
  value: string;
  onChange: (value: string) => void;
}

function CategoriesSelect({ value, onChange }: CategoriesSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selected = categories.find(item => item.label === value);

  return (
    <div className='relative w-full'>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full items-center justify-between rounded-lg border border-gray-600 bg-black/30 p-3'
      >
        <div className='flex items-center gap-2 text-sm sm:text-lg'>
          {selected && <selected.icon className='h-5 w-5' />}
          <span>{selected?.label}</span>
        </div>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <ul className='absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded-lg border border-gray-600 bg-black'>
          {categories.map(item => (
            <li
              key={item.label}
              onClick={() => {
                onChange(item.label);
                setIsOpen(false);
              }}
              className='flex cursor-pointer items-center gap-2 px-3 py-2 text-sm hover:bg-blue-500/50 sm:text-lg'
            >
              <item.icon className='h-5 w-5' />
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoriesSelect;
