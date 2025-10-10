import { moonImages } from '../../utils/image';

function MoonImage({ imageIdx }: { imageIdx: number }) {
  const img = moonImages[imageIdx];

  return (
    <div className='animate-float relative aspect-square w-full max-w-sm overflow-hidden rounded-full'>
      <img
        src={img.src}
        alt='달 사진'
        className='h-full w-full object-cover p-6 brightness-125 transition-transform duration-300 hover:scale-103 hover:rotate-5 sm:p-0'
      />
    </div>
  );
}

export default MoonImage;
