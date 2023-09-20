'use client';

import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        className="py-3 px-6 bg-white text-[#108A00] border-[2px] border-[#108A00] rounded-full shadow-md"
        onClick={scrollToTop}
      >
        <MdKeyboardArrowUp className="scale-[2.5] outline-none border-none" />
      </button>
    </div>
  );
};

export default BackToTopButton;
