import { useSwipeable } from 'react-swipeable';
import { moonImages } from '../../../../utils/image';
import { posAngle } from '../../../../utils/posAngle';
import { motion, AnimatePresence } from 'motion/react';

function MoonImage({
  imageIdx,
  onSwipe,
  rotateDeg,
}: {
  imageIdx: number;
  onSwipe: (direction: 'left' | 'right') => void;
  rotateDeg: number;
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
        <motion.img
          src={moonImages[imageIdx].src}
          alt='달 사진'
          draggable={false}
          className='h-full w-full rounded-full object-cover brightness-125'
          style={{ rotate: `${posAngle[imageIdx] + rotateDeg}deg` }}
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
