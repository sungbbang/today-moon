import { useState } from 'react';
import { categories } from '../utils/categories';

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

const SUBMITTING_DELAY_MS = 1500;

function WishForm({
  onClick,
  setIsSubmitted,
}: {
  onClick: () => void;
  setIsSubmitted: (value: boolean) => void;
}) {
  const [category, setCategory] = useState<string>('');
  const [wish, setWish] = useState<string>('');
  const [step, setStep] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, SUBMITTING_DELAY_MS);
  };

  return (
    <div className='flex w-full flex-col items-center justify-center px-8'>
      <h3 className='mb-5 text-center text-xl drop-shadow-md sm:text-2xl'>
        소원을 빌어보세요
      </h3>

      <form
        onSubmit={handleSubmit}
        className='flex w-full max-w-sm flex-col rounded-2xl'
      >
        <div className='mt-5 w-full'>
          <label
            htmlFor={labelItems[step].for}
            className='text-2xl sm:text-3xl'
          >
            {labelItems[step].value}
          </label>

          <div className='mt-6 flex flex-col gap-y-4'>
            <div className='grid'>
              <select
                disabled={isSubmitting}
                name='category'
                id='category'
                required
                value={category}
                onChange={e => {
                  setCategory(e.target.value);
                  setStep(1);
                }}
                className='col-start-1 row-start-1 w-full appearance-none rounded-xl border p-3 pr-10 focus:border-0 sm:text-lg'
              >
                <option value='' disabled>
                  카테고리
                </option>
                {categories.map(category => (
                  <option key={category.label} value={category.value}>
                    {category.icon} {category.label}
                  </option>
                ))}
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
              minLength={2}
              disabled={isSubmitting}
              required
              type='text'
              id='wish'
              placeholder='소원'
              className={`rounded-xl border p-3 focus:border-0 sm:text-lg ${step >= 1 ? 'visible' : 'invisible'}`}
              value={wish}
              onChange={e => {
                setWish(e.target.value);
              }}
            />

            <p
              className={`text-center text-xs text-gray-600 ${step >= 1 ? 'visible' : 'invisible'}`}
            >
              입력한 내용은 절대 저장되지 않습니다.
            </p>
          </div>
        </div>

        <button
          type='submit'
          disabled={isSubmitting}
          className={`mt-6 cursor-pointer rounded-xl bg-black py-3 text-lg font-semibold text-white duration-300 disabled:cursor-progress ${step === labelItems.length - 1 ? 'visible' : 'invisible'} ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-500'}`}
        >
          {isSubmitting ? '제출 중...' : '제출'}
        </button>
      </form>

      <button
        onClick={onClick}
        className='mt-8 cursor-pointer text-gray-700 underline underline-offset-4 transition-colors duration-200 hover:text-blue-500'
      >
        달로 돌아가기
      </button>
    </div>
  );
}

export default WishForm;
