import { useSwipeable } from 'react-swipeable';
import { moonImages } from '../../../../utils/image';
import { motion, AnimatePresence } from 'motion/react';

function MoonImage({
  imageIdx,
  onSwipe,
}: {
  imageIdx: number;
  onSwipe: (direction: 'left' | 'right') => void;
}) {
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipe('left'),
    onSwipedRight: () => onSwipe('right'),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={imageIdx}
        {...handlers}
        className='relative aspect-square w-full max-w-md'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <img
          src={moonImages[imageIdx].src}
          alt='달 사진'
          draggable={false}
          className='h-full w-full rounded-full object-cover brightness-125'
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default MoonImage;
