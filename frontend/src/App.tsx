import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroScreen from './screens/intro-screen/IntroScreen';
import MoonScreen from './screens/moon-screen/MoonScreen';
import WishScreen from './screens/wish-screen/WishScreen';

type View = 'intro' | 'moon' | 'wish';

function App() {
  const [currentView, setCurrentView] = useState<View>('intro');
  const [isPreloading, setIsPreloading] = useState<boolean>(true);

  // moon screen이 언마운트돼도 날짜 유지하기 위해 상위 컴포넌트에서 상태 관리
  const today = new Date();
  const [date, setDate] = useState<Date>(today);

  const screens = {
    intro: (
      <IntroScreen
        onClick={() => setCurrentView('moon')}
        setIsPreloading={setIsPreloading}
      />
    ),
    moon: isPreloading ? (
      <div className='text-center text-xl font-bold sm:text-2xl'>
        달을 보여드릴게요...
      </div>
    ) : (
      <MoonScreen
        onClick={() => setCurrentView('wish')}
        today={today}
        date={date}
        setDate={setDate}
      />
    ),
    wish: <WishScreen onClick={() => setCurrentView('moon')} />,
  };

  return (
    <div
      className={`flex min-h-screen flex-col transition-colors duration-700 ${
        currentView === 'wish' ? 'bg-white text-black' : 'bg-black text-white'
      }`}
    >
      <Header onClick={() => setCurrentView('intro')} />

      <main className='my-8 flex flex-1 flex-col items-center justify-center px-8'>
        {screens[currentView]}
      </main>

      <Footer />
    </div>
  );
}

export default App;
