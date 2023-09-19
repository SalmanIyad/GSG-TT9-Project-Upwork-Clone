'use client'
import React, { useEffect, useState } from 'react';

function Greeting(): JSX.Element {
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    const today = new Date();
    const curHr = today.getHours();

    if (curHr < 12) {
      setGreeting('Good morning');
    } else if (curHr < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  return (
    <p>{greeting}</p>
  );
}

export default Greeting;
