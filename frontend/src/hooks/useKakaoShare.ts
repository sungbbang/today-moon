import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;
const KAKAO_JS_KEY = import.meta.env.VITE_KAKAO_JS_KEY;

export const useKakaoShare = () => {
  useEffect(() => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAO_JS_KEY);
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
    script.async = true;
    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAO_JS_KEY);
      }
    };
    document.body.appendChild(script);
  }, []);

  const share = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오늘의 달을 확인해보세요 🌙',
        description: '소원을 빌고, 친구에게 오늘의 달을 공유해보세요.',
        imageUrl:
          'https://science.nasa.gov/wp-content/uploads/2023/08/full.jpg',
        link: {
          mobileWebUrl: FRONTEND_URL,
          webUrl: FRONTEND_URL,
        },
      },
      buttons: [
        {
          title: '달 보러가기',
          link: {
            mobileWebUrl: FRONTEND_URL,
            webUrl: FRONTEND_URL,
          },
        },
      ],
    });
  };

  return { share };
};
