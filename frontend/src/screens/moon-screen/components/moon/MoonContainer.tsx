import korLunar from 'kor-lunar';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MdSwipe } from 'react-icons/md';
import MoonImage from './MoonImage';
import MoonPhaseName from './MoonPhaseName';

function MoonContainer({
  date,
  setDate,
  minDate,
  maxDate,
}: {
  date: Date;
  setDate: (date: Date) => void;
  minDate: Date;
  maxDate: Date;
}) {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();
  const lunarDate = korLunar.toLunar(y, m + 1, d);

  const imageIdx = lunarDate.day - 1;

  useEffect(() => {
    const id = toast(
      <div className='flex items-center justify-center gap-1 rounded-full py-2 sm:text-lg'>
        <span>
          달을 좌우로 <b>스와이프</b>해보세요
        </span>
        <MdSwipe size={22} />
      </div>,
      {
        duration: 3000,
        position: 'bottom-center',
      },
    );

    return () => toast.dismiss(id);
  }, []);

  const handleSwipe = (dir: 'left' | 'right') => {
    const newDate = new Date(date);

    if (dir === 'left' && newDate < maxDate) {
      newDate.setDate(newDate.getDate() + 1);
    } else if (dir === 'right' && newDate > minDate) {
      newDate.setDate(newDate.getDate() - 1);
    }

    setDate(newDate);
  };

  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-2 sm:gap-4'>
      <MoonImage imageIdx={imageIdx} onSwipe={handleSwipe} />
      <MoonPhaseName imageIdx={imageIdx} />
      <Toaster />
    </div>
  );
}

export default MoonContainer;
