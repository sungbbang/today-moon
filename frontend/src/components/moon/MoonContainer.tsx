import MoonImage from './MoonImage';
import { getMoonTimes } from '../../utils/moon';
import MoonInfo from './MoonInfo';
import korLunar from 'kor-lunar';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MdSwipe } from 'react-icons/md';

function MoonContainer({
  date,
  coordinate,
  changeDate,
}: {
  date: Date;
  coordinate: { lat: number; lon: number };
  changeDate: (days: number) => void;
}) {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();
  const lunarDate = korLunar.toLunar(y, m + 1, d);
  const imageIdx = lunarDate.day - 1;

  const { lat, lon } = coordinate;
  const { set, rise } = getMoonTimes(date, lat, lon);

  useEffect(() => {
    const id = toast(
      <div className='flex items-center justify-center gap-1 rounded-full py-1 text-xs sm:text-lg'>
        <span>
          달을 좌우로 <b>스와이프</b>해보세요
        </span>
        <MdSwipe size={22} />
      </div>,
      {
        duration: 2000,
        position: 'bottom-center',
      },
    );

    return () => toast.dismiss(id);
  }, []);

  return (
    <div className='flex flex-col items-center gap-y-4'>
      <MoonImage
        imageIdx={imageIdx}
        onSwipe={dir => changeDate(dir === 'left' ? 1 : -1)}
      />
      <Toaster />
      <MoonInfo imageIdx={imageIdx} set={set} rise={rise} />
    </div>
  );
}

export default MoonContainer;
