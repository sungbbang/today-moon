import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CalendarNavButton from './CalendarNavButton';

function CalendarContainer({
  date,
  today,
  setDate,
  changeDate,
}: {
  date: Date;
  today: Date;
  setDate: (date: Date) => void;
  changeDate: (days: number) => void;
}) {
  const [isChanging, setIsChanging] = useState(false);

  const isToday = () => today.toDateString() === date.toDateString();

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}.${String(month + 1).padStart(2, '0')}.${String(
      day,
    ).padStart(2, '0')}`;
  };

  const handleChangeDate = (days: number) => {
    if (isChanging) return;
    setIsChanging(true);

    changeDate(days);

    setTimeout(() => setIsChanging(false), 200);
  };

  return (
    <div className='flex w-full max-w-lg items-center justify-between'>
      <CalendarNavButton
        onClick={() => handleChangeDate(-1)}
        aria-label='이전 날짜'
        disabled={isChanging}
      >
        <IoIosArrowBack size={24} />
      </CalendarNavButton>

      <h3
        onClick={() => {
          if (!isToday()) setDate(today);
        }}
        className={`cursor-pointer text-2xl font-semibold transition-transform duration-300 md:text-3xl ${
          isToday() ? 'text-sky-500' : 'text-white hover:scale-110'
        }`}
      >
        {formatDate(date)}
      </h3>

      <CalendarNavButton
        onClick={() => handleChangeDate(1)}
        aria-label='다음 날짜'
        disabled={isChanging}
      >
        <IoIosArrowForward size={24} />
      </CalendarNavButton>
    </div>
  );
}

export default CalendarContainer;
