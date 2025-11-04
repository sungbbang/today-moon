import { useState, useEffect } from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import { ko } from 'react-day-picker/locale';
import { motion } from 'motion/react';
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
    const newDate = new Date(date);
    if (selected) {
      newDate.setFullYear(selected.getFullYear());
      newDate.setMonth(selected.getMonth());
      newDate.setDate(selected.getDate());
      setDate(newDate);
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
        dropdown_root: `${defaultClassNames.dropdown_root} cursor-pointer`,
      }}
    />
  );

  return (
    <>
      {isMobile ? (
        <motion.div
          className='fixed inset-0 z-50 flex items-end justify-center bg-black/40'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className='w-full rounded-t-2xl bg-white p-4 text-right shadow-lg'
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className='mb-2 cursor-pointer p-2 text-right text-sm text-gray-500'
            >
              닫기
            </button>
            {dayPickerElement}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className='rounded-xl bg-white p-6 text-right shadow-xl'
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className='mb-3 cursor-pointer p-2 text-sm text-gray-500'
            >
              닫기
            </button>
            {dayPickerElement}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default DatePicker;
