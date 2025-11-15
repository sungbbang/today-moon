import { useSwipeable } from 'react-swipeable';
import { moonImages } from '../../../../utils/image';
import { posAngle } from '../../../../utils/posAngle';
import { motion, AnimatePresence } from 'motion/react';

function MoonImage({
  imageIdx,
  onSwipe,
  isBiggerThanMinDate,
  isSmallerThanMaxDate,
}: {
  imageIdx: number;
  onSwipe: (direction: 'left' | 'right') => void;
  isBiggerThanMinDate: boolean;
  isSmallerThanMaxDate: boolean;
}) {
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (isSmallerThanMaxDate) {
        onSwipe('left');
      }
    },
    onSwipedRight: () => {
      if (isBiggerThanMinDate) {
        onSwipe('right');
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={Date.now()}
        {...handlers}
        className='relative aspect-square w-full max-w-md select-none'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <motion.img
          src={moonImages[imageIdx].src}
          alt='달 사진'
          draggable={false}
          className='h-full w-full rounded-full object-cover brightness-125'
          style={{ rotate: `${posAngle[imageIdx]}deg` }}
          animate={{ y: [0, -10, 0] }}
          whileHover={{ scale: 1.05 }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            scale: {
              type: 'spring',
              stiffness: 300,
              damping: 20,
            },
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default MoonImage;
