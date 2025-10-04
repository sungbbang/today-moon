import React, { useState } from 'react';
import Header from './components/Header';
import IntroScreen from './components/screens/IntroScreen';
import MainScreen from './components/screens/MainScreen';

function App() {
  const [currentView, setCurrentView] = useState<'intro' | 'main'>('intro');

  return (
    <div className='bg-black text-white'>
      <div className='min-h-screen w-screen'>
        <Header onClick={() => setCurrentView('intro')} />
        <main className='mt-8 flex flex-col items-center justify-center px-8'>
          {currentView === 'intro' ? <IntroScreen /> : <MainScreen />}
        </main>
      </div>
    </div>
  );
}

export default App;
