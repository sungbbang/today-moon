import { useSwipeable } from 'react-swipeable';
import { moonImages } from '../../../../utils/image';

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

  // 상위 div에 w-full을 주면 aspect-square 속성 덕분에 높이값도 w와 같아지므로 레이아웃 시프트를 방지할 수 있음
  return (
    <div
      {...handlers}
      className='animate-float relative aspect-square w-full max-w-md'
    >
      <img
        src={img.src}
        alt='달 사진'
        draggable={false}
        className='h-full w-full rounded-full object-cover brightness-150 transition-transform duration-300 hover:scale-105 hover:rotate-5'
      />
    </div>
  );
}

export default MoonImage;
