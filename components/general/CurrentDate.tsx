'use client'
import React, { useEffect, useState } from 'react';

function CurrentDate(): JSX.Element {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };

    const today = new Date();
    const formatted = today.toLocaleDateString('en-US', options);

    setFormattedDate(formatted);
  }, []);

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
}

export default CurrentDate;
