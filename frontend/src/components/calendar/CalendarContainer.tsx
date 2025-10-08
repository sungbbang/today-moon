import { useCallback, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CalendarNavButton from './CalendarNavButton';

function CalendarContainer({
  date,
  setDate,
}: {
  date: Date;
  setDate: (date: Date) => void;
}) {
  const [isChanging, setIsChanging] = useState(false);

  const isToday = useCallback(() => {
    const today = new Date();
    return today.toDateString() === date.toDateString();
  }, [date]);

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}.${String(month + 1).padStart(2, '0')}.${String(
      day,
    ).padStart(2, '0')}`;
  };

  const changeDate = (days: number) => {
    if (isChanging) return;
    setIsChanging(true);

    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    setDate(newDate);

    setTimeout(() => setIsChanging(false), 300);
  };

  return (
    <div className='flex w-full max-w-lg items-center justify-between'>
      <CalendarNavButton
        onClick={() => changeDate(-1)}
        aria-label='이전 날짜'
        disabled={isChanging}
      >
        <IoIosArrowBack size={24} />
      </CalendarNavButton>

      <h3
        onClick={() => {
          if (!isToday()) setDate(new Date());
        }}
        className={`cursor-pointer text-2xl font-semibold transition-transform duration-300 md:text-3xl ${
          isToday() ? 'text-sky-500' : 'text-white hover:scale-110'
        }`}
      >
        {formatDate(date)}
      </h3>

      <CalendarNavButton
        onClick={() => changeDate(1)}
        aria-label='다음 날짜'
        disabled={isChanging}
      >
        <IoIosArrowForward size={24} />
      </CalendarNavButton>
    </div>
  );
}

export default CalendarContainer;
