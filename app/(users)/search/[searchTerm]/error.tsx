'use client';

import { useEffect } from 'react';

const Error = ({ error, reset }: { error: string; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleReset = () => {
    reset();
  };

  return (
    <div>
      <p>Something went wrong!</p>

      <button onClick={handleReset}>Reset error boundary</button>
    </div>
  );
};

export default Error;
