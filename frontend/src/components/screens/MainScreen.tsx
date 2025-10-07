import React, { useState } from 'react';
import LocationContainer from '../location/LocationContainer';
import CalendarContainer from '../calendar/CalendarContainer';
import MoonContainer from '../moon/MoonContainer';
import WeatherContainer from '../weather/WeatherContainer';

function MainScreen() {
  const [coordinate, setCoordinate] = useState({
    lat: 37.56682420267543,
    lon: 126.978652258823,
  });
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className='flex flex-col items-center gap-8'>
      <LocationContainer
        coordinate={coordinate}
        setCoordinate={setCoordinate}
      />
      <CalendarContainer date={date} setDate={setDate} />
      <MoonContainer />
      <WeatherContainer />
    </div>
  );
}

export default MainScreen;
