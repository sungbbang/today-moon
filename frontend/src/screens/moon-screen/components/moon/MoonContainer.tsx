import korLunar from 'kor-lunar';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MdSwipe } from 'react-icons/md';
import MoonImage from './MoonImage';
import MoonPhaseName from './MoonPhaseName';

function MoonContainer({
  date,
  setDate,
}: {
  date: Date;
  setDate: (date: Date) => void;
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

  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-2 sm:gap-4'>
      <MoonImage
        imageIdx={imageIdx}
        onSwipe={dir => {
          const newDate = new Date(date);
          if (dir === 'left') {
            newDate.setDate(d + 1);
          } else {
            newDate.setDate(d - 1);
          }
          setDate(newDate);
        }}
      />
      <MoonPhaseName imageIdx={imageIdx} />
      <Toaster />
    </div>
  );
}

export default MoonContainer;
