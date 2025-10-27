import { useState } from 'react';

const qnaItems = [
  {
    question: '이 웹사이트를 만든 계기가 궁금해요.',
    answer:
      '어쩌다가 달을 보며 소원을 비는 취미가 생겼습니다. 근데 날씨가 좋지 않을 때처럼 볼 수 없는 경우가 생기더군요. 그런 경우에도 달을 보고 소원을 빌 수 있으면 좋겠다고 생각했습니다.\n\n또 바쁘고 일상에 치이는 삶에서 달을 보며 소원을 가볍게 적어보기도 하고 힐링했으면 하는 마음으로 만들게 되었습니다.',
  },
  {
    question: '소원 내용은 저장되지 않나요?',
    answer: '네, 절대 저장되지 않습니다.',
  },
  {
    question: '어떻게 믿나요?',
    answer:
      '소원은 남에게 말하면 이루어지지 않는다는 말이 있잖아요. 그래서 저장하지 않기로 처음에 설계를 했고 설령 저장한다 해도 사용자를 특정할 수 없기 때문에 누가 빌었는지 전혀 알 수 없습니다. 안심하세요.',
  },
  {
    question: '저는 제 소원이 저장됐으면 좋겠어요.',
    answer: (
      <>
        원래 목적은 순수히 달을 보여주는 것이라 데이터를 저장하지 않고 있습니다.
        하지만 사용자분들이 많아지고 유의미한 데이터가 쌓인다면 실제 통계를
        내거나 좀더 흥미로운 기능을 개발해보겠습니다. 의견 있으시면 아래
        이메일로 연락주세요.
        <br />
        <span className='underline'>sinsa5133@gmail.com</span>
      </>
    ),
  },
  {
    question: '개발자는 어떤 소원을 비나요?',
    answer: '저는 취준생이라 취직하게 해주세요 매일 빌고 있습니다.',
  },
];

function QnA() {
  const [openQnA, setOpenQnA] = useState<number | null>(null);

  const toggleQnA = (index: number) => {
    setOpenQnA(openQnA === index ? null : index);
  };

  return (
    <div className='w-full bg-gray-100 py-10'>
      <div className='mx-auto w-full max-w-2xl px-4'>
        <h3 className='mb-8 text-center text-2xl font-bold'>개발 이야기</h3>

        <div className='space-y-3'>
          {qnaItems.map((item, index) => (
            <div
              key={index}
              className='overflow-hidden rounded-lg border border-gray-200 bg-white'
            >
              <button
                onClick={() => toggleQnA(index)}
                className='flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-50'
              >
                <span className='text-xs font-semibold text-gray-800 sm:text-sm'>
                  Q. {item.question}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                    openQnA === index ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>

              {openQnA === index && (
                <div className='border-t border-gray-200 bg-gray-50 p-4'>
                  <p className='text-xs leading-relaxed whitespace-pre-line text-gray-600 sm:text-sm'>
                    A. {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QnA;
