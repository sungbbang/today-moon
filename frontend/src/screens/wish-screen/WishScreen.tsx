import { useEffect } from 'react';

function WishScreen({ onClick }: { onClick: () => void }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //
  };

  // 최상단 스크롤
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <div className='flex flex-col items-center justify-center px-6 py-12'>
      <h3 className='mb-8 text-center text-2xl font-bold text-purple-900 drop-shadow-md sm:text-3xl'>
        소원을 빌어보세요
      </h3>

      <form
        className='flex w-full max-w-md flex-col gap-4'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='다 이루어질테야...'
          className='rounded-xl border-2 border-purple-300 p-4 text-gray-800 focus:ring-2 focus:ring-purple-400 focus:outline-none'
        />
        <button
          type='submit'
          className='rounded-xl bg-purple-500 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-purple-600'
        >
          제출
        </button>
      </form>

      <button
        onClick={onClick}
        className='mt-6 text-purple-700 underline transition-colors duration-200 hover:text-purple-900'
      >
        달로 돌아가기
      </button>
    </div>
  );
}

export default WishScreen;
