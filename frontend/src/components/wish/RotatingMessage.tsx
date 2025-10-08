import React, { useEffect, useState } from 'react';

const messages = [
  '오늘 총 32명이 소원을 빌었어요 😀',
  "오늘은 '사랑' 관련 소원이 많아요 ❣️",
  '지난 1분 동안 9명이 새 소원을 남겼어요 💬',
  '지금까지 모인 소원은 총 822개랍니다 🎉',
];

function RotatingMessages() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex(prev => (prev + 1) % messages.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='overflow-hidden rounded-xl py-2'>
      <p
        className={`text-center text-xs text-gray-400 drop-shadow-lg transition-opacity duration-500 md:text-lg ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {messages[index]}
      </p>
    </div>
  );
}

export default RotatingMessages;
