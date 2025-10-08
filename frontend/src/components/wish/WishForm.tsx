import React, { useEffect, useRef, useState } from 'react';
import RotatingMessages from './RotatingMessage';

interface WishFormProps {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

function WishForm({ setIsSubmitted }: WishFormProps) {
  const [wish, setWish] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (wish.trim() === '') {
      inputRef.current?.focus();
      return;
    }

    setIsSubmitted(true);
    setWish('');
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className='flex flex-col justify-between gap-4 rounded-xl sm:gap-6'>
      <h2 className='text-center text-xl font-semibold text-white md:text-2xl'>
        소원을 빌어보세요
      </h2>

      <RotatingMessages />

      <form onSubmit={handleSubmit} className='space-y-4 rounded-xl sm:p-4'>
        <input
          required
          ref={inputRef}
          value={wish}
          onChange={e => setWish(e.target.value)}
          type='text'
          placeholder='소원을 적어보세요...'
          className='w-full rounded-lg border border-gray-600 bg-black/30 p-3 text-sm text-white placeholder-gray-400 transition-all duration-200 focus:border-blue-400 focus:ring focus:ring-blue-400/30 focus:outline-none md:text-lg'
        />

        <button
          type='submit'
          className='w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-700 py-3 text-sm font-medium text-white shadow-md transition-all duration-200 hover:from-indigo-500 hover:to-purple-600 hover:shadow-lg hover:shadow-indigo-500/30 md:text-lg'
        >
          제출
        </button>
      </form>

      <p className='text-center text-sm text-gray-300 md:text-lg'>
        소원은 달에게 잘 전달해드릴게요 👍
      </p>
    </div>
  );
}

export default WishForm;
