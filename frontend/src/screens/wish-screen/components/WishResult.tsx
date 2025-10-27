import { RiKakaoTalkFill } from 'react-icons/ri';
import { IoMdLink } from 'react-icons/io';
import { useKakaoShare } from '../../../hooks/useKakaoShare';
import QnA from './qna';

const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;

function WishResult({ onClick }: { onClick: () => void }) {
  const { share: handleKakaoShare } = useKakaoShare();
  const handleCopyLink = () => {
    navigator.clipboard.writeText(FRONTEND_URL);
    alert('링크가 복사되었습니다!');
  };

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='w-full bg-white px-8 py-12'>
        <div className='flex flex-col items-center'>
          <div className='mb-8 space-y-2 text-center'>
            <h3 className='mb-2 text-2xl font-bold sm:text-3xl'>
              소원이 제출되었습니다
            </h3>
            <p className='text-sm text-gray-600 sm:text-base'>
              이루어지길 바랄게요
            </p>
          </div>

          <div className='mb-8 w-full max-w-sm'>
            <p className='mb-4 text-center text-lg font-medium text-gray-700 sm:text-xl'>
              오늘의 달을 공유해보세요
            </p>
            <div className='flex flex-col gap-3 sm:flex-row'>
              <button
                onClick={handleKakaoShare}
                className='flex flex-1 items-center justify-center gap-2 rounded-xl border border-yellow-300 bg-gradient-to-br from-yellow-100 to-yellow-200 py-3 font-semibold text-yellow-900 shadow-sm transition-all hover:from-yellow-200 hover:to-yellow-100 hover:shadow-md active:scale-95'
              >
                <RiKakaoTalkFill className='bg-yellow-300 text-2xl' />
                <span className='text-sm sm:text-base'>카카오톡</span>
              </button>
              <button
                onClick={handleCopyLink}
                className='flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 py-3 font-semibold text-gray-800 shadow-sm transition-all hover:from-gray-50 hover:to-white hover:shadow-md active:scale-95'
              >
                <IoMdLink className='text-2xl text-gray-500' />
                <span className='text-sm sm:text-base'>링크복사</span>
              </button>
            </div>
          </div>

          <div className='flex gap-3 text-sm'>
            <button
              onClick={onClick}
              className='cursor-pointer text-gray-700 underline underline-offset-2 transition-colors hover:text-purple-900'
            >
              달로 돌아가기
            </button>
          </div>
        </div>
      </div>

      <QnA />
    </div>
  );
}

export default WishResult;
