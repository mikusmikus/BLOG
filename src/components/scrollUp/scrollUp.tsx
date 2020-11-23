import React from 'react';
import './scrollUp.css';



const ScrollUp = () => {
  return (
    <button
      type="button"
      className='ScrollUp'
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
    >
      on Top
    </button>
  );
};

export default ScrollUp;
