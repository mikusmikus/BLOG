import React, { useEffect, useState } from 'react';
import ImageGallery from '../components/gallery/imageGallery';
import ScrollUp from '../components/scrollUp/scrollUp';

const Gallery = () => {
  const [numberArr, setNumberArr] = useState<number[]>();

  useEffect(() => {
    const newArr: number[] = [];
    for (let i = 1; i <= 100; i++) {
      // console.log(i);
      newArr.push(i);
    }
    setNumberArr(newArr);
  }, []);

  return (
    <div>
      <div className="container container-fluid about">
        <div className="row">
          {numberArr &&
            numberArr.map((number) => (
              <div className="col-md-3 col-sm-4 col-xs-6" key={number}>
                <ImageGallery id={number} />
              </div>
            ))}
          {window.scrollY >= 800 && <ScrollUp />}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
