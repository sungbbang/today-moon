import MoonImage from './MoonImage';
import { getMoonPhase, getMoonTimes } from '../../utils/moon';
import MoonInfo from './MoonInfo';

const IMAGE_COUNT = 29;

function MoonContainer({
  date,
  coordinate,
}: {
  date: Date;
  coordinate: { lat: number; lon: number };
}) {
  const phase = getMoonPhase(date);
  const imageIdx = Math.round(phase * IMAGE_COUNT) % IMAGE_COUNT;
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
