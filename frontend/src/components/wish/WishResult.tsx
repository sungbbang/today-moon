import React from 'react';

function WishResult({ onClose }: { onClose: () => void }) {
  const handleKaKaoShare = () => {
    // 카카오톡 공유 로직
  };

  return (
    <div>
      <p>친구들에게 소원을 빌 수 있게 공유해보세요.</p>
      <button onClick={handleKaKaoShare}>카카오톡으로 공유하기</button>
      <button onClick={onClose}>닫기</button>
    </div>
  );
}

export default WishResult;
