import { useEffect, useState } from 'react';
import WishResult from './components/WishResult';
import WishForm from './components/WishForm';

function WishScreen({ onClick }: { onClick: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [isSubmitted]);

  return isSubmitted ? (
    <WishResult onClick={onClick} />
  ) : (
    <WishForm setIsSubmitted={setIsSubmitted} onClick={onClick} />
  );
}

export default WishScreen;
