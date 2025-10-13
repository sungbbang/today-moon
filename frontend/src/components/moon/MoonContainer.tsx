import MoonImage from './MoonImage';
import { getMoonTimes } from '../../utils/moon';
import MoonInfo from './MoonInfo';
import korLunar from 'kor-lunar';

function MoonContainer({
  date,
  coordinate,
}: {
  date: Date;
  coordinate: { lat: number; lon: number };
}) {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();
  const lunarDate = korLunar.toLunar(y, m + 1, d);
  const imageIdx = lunarDate.day - 1;

  const { lat, lon } = coordinate;
  const { set, rise } = getMoonTimes(date, lat, lon);

  return (
    <div className='flex flex-col items-center gap-y-4'>
      <MoonImage imageIdx={imageIdx} />
      <MoonInfo imageIdx={imageIdx} set={set} rise={rise} />
    </div>
  );
}

export default MoonContainer;
