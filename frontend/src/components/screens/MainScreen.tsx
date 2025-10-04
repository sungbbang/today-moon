import React from 'react';
import LocationContainer from '../location/LocationContainer';
import CalendarContainer from '../calendar/CalendarContainer';
import MoonContainer from '../moon/MoonContainer';
import WeatherContainer from '../weather/WeatherContainer';

function MainScreen() {
  return (
    <div className='flex flex-col items-center gap-8'>
      <LocationContainer />
      <CalendarContainer />
      <MoonContainer />
      <WeatherContainer />
    </div>
  );
}

export default MainScreen;
