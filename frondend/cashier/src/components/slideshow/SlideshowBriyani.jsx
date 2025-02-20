import React, { useState, useEffect, useRef } from 'react';

const images = [
 'src/assets/briyani-2.png',
 'src/assets/briyani-2.png',
 'src/assets/briyani-2.png',
 'src/assets/briyani-2.png'

];

const delay = 2500;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="relative w-64 overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((src, idx) => (
          <div
            className="flex-shrink-0 w-full h-64 bg-cover bg-center"
            key={idx}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${index === idx ? 'bg-white' : 'bg-gray-500'} cursor-pointer`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
