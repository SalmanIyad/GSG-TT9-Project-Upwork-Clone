'use client'

import '@/styles/globals.css'
import React, { useEffect, useState } from 'react';

function CurrentDate() {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    };

    const today = new Date();
    const formatted = today.toLocaleDateString('en-US', options) + 'th';

    setFormattedDate(formatted);
  }, []);

  return (
    <div>
      <h3>{formattedDate || 'Loading Date..'}</h3>
    </div>
  );
}

export default CurrentDate;
