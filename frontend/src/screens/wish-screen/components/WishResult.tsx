import { IoIosLink } from 'react-icons/io';
import { SiKakaotalk } from 'react-icons/si';
import { useKakao } from '../../../hooks/useKakao';

const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;

function WishResult({ onClose }: { onClose: () => void }) {
  useKakao(import.meta.env.VITE_KAKAO_JS_KEY);

  const handleKakaoShare = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오늘의 달을 보고 소원을 빌어보세요.',
        description: '소원을 담은 웹페이지를 친구에게 공유해보세요.',
        imageUrl:
          'https://science.nasa.gov/wp-content/uploads/2023/08/full.jpg',
        link: {
          mobileWebUrl: FRONTEND_URL,
          webUrl: FRONTEND_URL,
        },
      },
      buttons: [
        {
          title: '소원 빌러가기',
          link: {
            mobileWebUrl: FRONTEND_URL,
            webUrl: FRONTEND_URL,
          },
        },
      ],
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(FRONTEND_URL);
    alert('링크가 복사되었습니다!');
  };

  return (
    <div className='flex flex-col items-center gap-4 rounded-xl bg-gray-900 p-6 text-white'>
      <h2 className='text-center text-2xl font-bold'>소원 제출 완료 ✨</h2>
      <p className='text-center text-sm text-gray-300 sm:text-base'>
        오늘의 달을 공유해보세요
      </p>

      <div className='mt-2 flex justify-center gap-6'>
        <button
          onClick={handleKakaoShare}
          className='rounded-lg bg-yellow-300/20 p-2 transition-colors duration-200 hover:bg-yellow-300/40'
        >
          <SiKakaotalk size={28} className='text-yellow-300' />
        </button>

        <button
          onClick={handleCopyLink}
          className='rounded-lg bg-gray-700/30 p-2 transition-colors duration-200 hover:bg-gray-700/50'
        >
          <IoIosLink size={28} />
        </button>
      </div>

      <div className='mt-4 flex w-full justify-center'>
        <button
          onClick={onClose}
          className='inline-flex rounded-2xl border border-gray-300 bg-gray-800/50 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-700 sm:text-base'
        >
          닫기
        </button>
      </div>
    </div>
  );
}

export default WishResult;
