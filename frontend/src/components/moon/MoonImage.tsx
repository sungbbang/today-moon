import React, { useState, useEffect } from 'react';

function MoonImage({ imageIdx }: { imageIdx: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const moonImage = `/moon_phase/${imageIdx}.jpg`;

  useEffect(() => {
    const img = new Image();
    img.src = moonImage;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true);

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [moonImage]);

  return (
    <>
      {!imageLoaded ? (
        <div className='flex aspect-square w-full max-w-sm items-center justify-center rounded-full'>
          <p className='text-white'>로딩 중...</p>
        </div>
      ) : (
        <div className='animate-float relative aspect-square w-full max-w-sm overflow-hidden rounded-full'>
          <img
            src={moonImage}
            alt='달 사진'
            className='h-full w-full object-cover brightness-125 transition-transform duration-300 hover:scale-103 hover:rotate-5'
          />
        </div>
      )}
    </>
  );
}

export default MoonImage;
