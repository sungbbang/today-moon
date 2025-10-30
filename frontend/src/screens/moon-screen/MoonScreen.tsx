import DateNavigator from './components/date/DateNavigator';
import MoonContainer from './components/moon/MoonContainer';
import MoonInfoContainer from './components/moon/MoonInfoContainer';
import { useCurrentLocation } from './hooks/useCurrentLocation';
import { getMoonPosition } from './utils/moon';

function MoonScreen({
  onClick,
  today,
  date,
  setDate,
}: {
  onClick: () => void;
  today: Date;
  date: Date;
  setDate: (date: Date) => void;
}) {
  const minDate = new Date(today.getFullYear(), today.getMonth() - 1);
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);

  const {
    location: { latitude, longitude },
  } = useCurrentLocation();

  const { parallacticAngle } = getMoonPosition(date, latitude, longitude);
  const rotateDeg = parallacticAngle * (180 / Math.PI);

  return (
    <div className='flex flex-col items-center justify-center px-8'>
      <MoonContainer
        date={date}
        setDate={setDate}
        minDate={minDate}
        maxDate={maxDate}
        rotateDeg={rotateDeg}
      />
      <DateNavigator
        today={today}
        date={date}
        setDate={setDate}
        minDate={minDate}
        maxDate={maxDate}
      />
      <MoonInfoContainer date={date} />
      <button
        className='mt-10 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 sm:text-lg'
        onClick={onClick}
      >
        소원 빌기
      </button>
    </div>
  );
}

export default MoonScreen;
