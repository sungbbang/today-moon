import { useState } from 'react';
import LocationContainer from '../location/LocationContainer';
import CalendarContainer from '../calendar/CalendarContainer';
import MoonContainer from '../moon/MoonContainer';
import WishButton from '../wish/WishButton';
import WishFlow from '../wish/WishFlow';
import Modal from '../Modal';

function MainScreen({ isPreloading }: { isPreloading: boolean }) {
  const [coordinate, setCoordinate] = useState({
    lat: 37.56682420267543,
    lon: 126.978652258823,
  });
  const today = new Date();
  const [date, setDate] = useState<Date>(today);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const changeDate = (days: number) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    setDate(newDate);
  };

  return (
    <div className='flex flex-col items-center gap-8 md:gap-12 lg:gap-16'>
      {isPreloading ? (
        <div className='flex h-[60vh] flex-col items-center justify-center gap-4'>
          <p className='font-medium text-gray-200 sm:text-lg'>
            달 모습을 보여드릴게요...
          </p>
        </div>
      ) : (
        <>
          <LocationContainer
            coordinate={coordinate}
            setCoordinate={setCoordinate}
          />
          <CalendarContainer
            date={date}
            today={today}
            setDate={setDate}
            changeDate={changeDate}
          />
          <MoonContainer
            date={date}
            changeDate={changeDate}
            coordinate={coordinate}
          />
          <WishButton setIsModalOpen={setIsModalOpen} />
          {isModalOpen && (
            <Modal onClose={() => setIsModalOpen(false)}>
              <WishFlow onClose={() => setIsModalOpen(false)} />
            </Modal>
          )}
        </>
      )}
    </div>
  );
}

export default MainScreen;
