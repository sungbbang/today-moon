import { useSwipeable } from 'react-swipeable';
import { moonImages } from '../../utils/image';

function MoonImage({
  imageIdx,
  onSwipe,
}: {
  imageIdx: number;
  onSwipe: (direction: 'left' | 'right') => void;
}) {
  const img = moonImages[imageIdx];

  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipe('left'),
    onSwipedRight: () => onSwipe('right'),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className='animate-float relative aspect-square w-full max-w-sm overflow-hidden rounded-full'
    >
      <img
        src={img.src}
        alt='달 사진'
        draggable={false}
        className='h-full w-full object-cover p-6 transition-transform duration-300 hover:scale-103 hover:rotate-5 sm:p-0'
      />
    </div>
  );
}

export default MoonImage;
