import { useState } from 'react';
import Header from './components/Header';
import IntroScreen from './components/screens/IntroScreen';
import MainScreen from './components/screens/MainScreen';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState<'intro' | 'main'>('intro');
  const [isPreloading, setIsPreloading] = useState<boolean>(true);

  return (
    <div className='flex min-h-screen flex-col bg-black text-white'>
      <Header onClick={() => setCurrentView('intro')} />

      <main className='my-8 flex flex-1 items-center justify-center px-8'>
        {currentView === 'intro' ? (
          <IntroScreen
            onClick={() => setCurrentView('main')}
            setIsPreloading={setIsPreloading}
          />
        ) : (
          <MainScreen isPreloading={isPreloading} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
