import React from 'react';


const ScrollUp = () => {
  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
    >
      on Top
    </button>
  );
};

export default ScrollUp;
