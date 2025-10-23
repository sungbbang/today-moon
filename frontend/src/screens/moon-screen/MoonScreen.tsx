import DateNavigator from './components/date/DateNavigator';
import MoonContainer from './components/moon/MoonContainer';
import MoonInfoContainer from './components/moon/MoonInfoContainer';

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
  return (
    <>
      <MoonContainer date={date} setDate={setDate} />
      <DateNavigator today={today} date={date} setDate={setDate} />
      <MoonInfoContainer date={date} />
      <button
        className='mt-10 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 sm:text-lg'
        onClick={onClick}
      >
        소원 빌기
      </button>
    </>
  );
}

export default MoonScreen;
