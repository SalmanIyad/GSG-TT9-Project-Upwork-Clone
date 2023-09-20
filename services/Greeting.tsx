'use client'

import '@/styles/globals.css'
import React, { useEffect, useState } from 'react';

function Greeting( {size} : {size?: string} ) {
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
    <h3 className={`font-cardo-bold !text-${size}`}>{greeting}, Salman Iyad</h3>
  );
} 

export default Greeting;
