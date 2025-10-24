import { useState, useEffect } from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import { ko } from 'react-day-picker/locale';
import 'react-day-picker/style.css';

function DatePicker({
  date,
  setDate,
  minDate,
  maxDate,
  onClose,
}: {
  date: Date;
  setDate: (date: Date) => void;
  minDate: Date;
  maxDate: Date;
  onClose: () => void;
}) {
  const isMobileInit = typeof window !== 'undefined' && window.innerWidth < 400;
  const [isMobile, setIsMobile] = useState<boolean>(isMobileInit);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 400);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const defaultClassNames = getDefaultClassNames();

  const handleSelect = (selected: Date | undefined) => {
    if (selected) {
      setDate(selected);
      onClose();
    }
  };

  const dayPickerElement = (
    <DayPicker
      animate
      required
      locale={ko}
      mode='single'
      captionLayout='dropdown-months'
      startMonth={minDate}
      endMonth={maxDate}
      selected={date}
      defaultMonth={date}
      onSelect={handleSelect}
      classNames={{
        today: `text-sky-500 font-bold`,
        selected: `bg-yellow-300 rounded-full`,
        root: `${defaultClassNames.root} flex rounded-md justify-center p-5 bg-white text-black h-[384px]`,
        chevron: `${defaultClassNames.chevron} fill-black`,
        months: `${defaultClassNames.months} text-center`,
      }}
    />
  );

  return (
    <>
      {isMobile ? (
        <div className='fixed inset-0 z-50 flex items-end justify-center bg-black/40'>
          <div className='animate-slide-up w-full rounded-t-2xl bg-white p-4 text-right shadow-lg'>
            <button
              onClick={onClose}
              className='mb-2 p-2 text-right text-sm text-gray-500'
            >
              닫기
            </button>
            {dayPickerElement}
          </div>
        </div>
      ) : (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
          <div className='rounded-xl bg-white p-6 text-right shadow-xl'>
            <button
              onClick={onClose}
              className='mb-3 p-2 text-sm text-gray-500'
            >
              닫기
            </button>
            {dayPickerElement}
          </div>
        </div>
      )}
    </>
  );
}

export default DatePicker;
