import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

export const useKakao = (apiKey: string) => {
  useEffect(() => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(apiKey);
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
    script.async = true;
    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(apiKey);
      }
    };

    document.body.appendChild(script);
  }, [apiKey]);
};
