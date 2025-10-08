import { useState } from 'react';
import LocationContainer from '../location/LocationContainer';
import CalendarContainer from '../calendar/CalendarContainer';
import MoonContainer from '../moon/MoonContainer';
import WishButton from '../wish/WishButton';
import WishFlow from '../wish/WishFlow';
import Modal from '../Modal';

function MainScreen() {
  const [coordinate, setCoordinate] = useState({
    lat: 37.56682420267543,
    lon: 126.978652258823,
  });
  const [date, setDate] = useState<Date>(new Date());
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className='flex flex-col items-center gap-8 md:gap-12 lg:gap-16'>
      <LocationContainer
        coordinate={coordinate}
        setCoordinate={setCoordinate}
      />
      <CalendarContainer date={date} setDate={setDate} />
      <MoonContainer date={date} coordinate={coordinate} />
      <WishButton setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <WishFlow onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

export default MainScreen;
