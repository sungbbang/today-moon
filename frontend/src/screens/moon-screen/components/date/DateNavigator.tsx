import { FcCalendar } from 'react-icons/fc';
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from 'react-icons/io5';
import DatePicker from './DatePicker';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

function DateNavigator({
  today,
  date,
  setDate,
  minDate,
  maxDate,
}: {
  today: Date;
  date: Date;
  setDate: (date: Date) => void;
  minDate: Date;
  maxDate: Date;
}) {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const isToday = today.toDateString() === date.toDateString();

  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);

  return (
    <div className='w-full max-w-sm'>
      <div className='flex items-center justify-between'>
        <button
          onClick={() => setDate(today)}
          className={`cursor-pointer p-2 text-2xl text-sky-500 ${isToday ? 'invisible' : 'visible'}`}
        >
          {today > date ? (
            <IoArrowForwardCircleOutline />
          ) : (
            <IoArrowBackCircleOutline />
          )}
        </button>

        <div
          className={`${isToday && 'text-sky-500'} tracking-wide text-gray-400 sm:text-lg md:text-xl`}
        >
          {y}년 {String(m).padStart(2, '0')}월 {String(d).padStart(2, '0')}일
        </div>

        <button
          onClick={() => setIsPickerOpen(true)}
          className='cursor-pointer p-2 text-2xl'
        >
          <FcCalendar />
        </button>
      </div>

      <AnimatePresence>
        {isPickerOpen && (
          <DatePicker
            date={date}
            setDate={setDate}
            minDate={minDate}
            maxDate={maxDate}
            onClose={() => setIsPickerOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default DateNavigator;
