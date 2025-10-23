import { useEffect } from 'react';
import { IMAGE_COUNT, preloadMoonImages } from '../../utils/image';

const HOVER = `hover:text-black hover:from-amber-200 hover:to-yellow-400 hover:text-slate-950 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`;

function IntroScreen({
  onClick,
  setIsPreloading,
}: {
  onClick: () => void;
  setIsPreloading: (b: boolean) => void;
}) {
  useEffect(() => {
    preloadMoonImages(IMAGE_COUNT).then(() => setIsPreloading(false));
  }, []);

  return (
    <div className='absolute inset-0 flex flex-col items-center justify-center px-4 text-center'>
      <p className='animate-fade-in-up mb-2 text-xl tracking-wide opacity-0 sm:text-2xl md:text-3xl'>
        오늘 하루 어땠나요?
      </p>
      <p
        className='animate-fade-in-up mb-8 text-xl tracking-wide opacity-0 sm:text-2xl md:text-3xl'
        style={{ animationDelay: '0.3s' }}
      >
        하루의 끝을 <span className='font-bold text-yellow-200'>달</span>과 함께
        해요.
      </p>
      <button
        onClick={onClick}
        className={`rounded-xl bg-gradient-to-r from-neutral-300 to-stone-400 px-6 py-3 text-xl md:text-2xl ${HOVER}`}
      >
        달 보러가기
      </button>
    </div>
  );
}

export default IntroScreen;
