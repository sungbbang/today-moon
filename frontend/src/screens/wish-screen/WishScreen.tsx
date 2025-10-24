import { useEffect, useState } from 'react';

const labelItems = [
  {
    for: 'category',
    value: (
      <>
        <strong>카테고리</strong>를<br />
        선택해 주세요
      </>
    ),
  },
  {
    for: 'wish',
    value: (
      <>
        <strong>소원</strong>을<br />
        입력해 주세요
      </>
    ),
  },
];

function WishScreen({ onClick }: { onClick: () => void }) {
  const [category, setCategory] = useState<string>('');
  const [wish, setWish] = useState<string>('');
  const [step, setStep] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return alert('기능 개발 중입니다...');
    //
  };

  // 최상단 스크롤
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <h3 className='mb-10 text-center text-xl drop-shadow-md sm:text-2xl'>
        소원을 빌어보세요
      </h3>

      <form
        onSubmit={handleSubmit}
        className='flex w-full max-w-sm flex-col gap-5 rounded-2xl'
      >
        <div className='mt-10 w-full'>
          <label
            htmlFor={labelItems[step].for}
            className='text-2xl sm:text-3xl'
          >
            {labelItems[step].value}
          </label>

          <div className='mt-6 flex flex-col gap-y-4'>
            <div className='grid'>
              <select
                name='category'
                id='category'
                required
                value={category}
                onChange={e => {
                  setCategory(e.target.value);
                  setStep(1);
                }}
                className='col-start-1 row-start-1 w-full appearance-none rounded-xl border-2 p-3 pr-10 sm:text-lg'
              >
                <option value='' disabled>
                  카테고리
                </option>
                <option value='love'>❤️ 사랑</option>
                <option value='health'>💪 건강</option>
                <option value='study'>📚 학업</option>
                <option value='job'>💼 직장</option>
                <option value='wealth'>💸 금전</option>
                <option value='luck'>🍀 행운</option>
                <option value='etc'>💬 기타</option>
              </select>
              <svg
                className='pointer-events-none col-start-1 row-start-1 mr-3 h-5 w-5 self-center justify-self-end'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </div>

            <input
              required
              type='text'
              id='wish'
              placeholder='소원'
              className={`rounded-xl border-2 p-3 sm:text-lg ${step >= 1 ? 'visible' : 'invisible'}`}
              value={wish}
              onChange={e => {
                setWish(e.target.value);
                setStep(labelItems.length - 1);
              }}
            />
          </div>
        </div>

        <button
          type='submit'
          className={`mt-2 rounded-xl bg-black py-3 text-lg font-semibold text-white shadow-2xl ${step === labelItems.length - 1 ? 'visible' : 'invisible'}`}
        >
          제출
        </button>
      </form>

      <button
        onClick={onClick}
        className='mt-8 text-gray-700 underline underline-offset-4 transition-colors duration-200 hover:text-purple-900'
      >
        달로 돌아가기
      </button>
    </div>
  );
}

export default WishScreen;
