import React, { useState } from 'react';
import WishResult from './WishResult';
import WishForm from './WishForm';

function WishFlow({ onClose }: { onClose: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return isSubmitted ? (
    <WishResult onClose={onClose} />
  ) : (
    <WishForm setIsSubmitted={setIsSubmitted} />
  );
}

export default WishFlow;
