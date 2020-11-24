import React, { FC, useState } from 'react';
import Loader from '../loader/loader';
import './imageGallery.css';

const ImageGallery: FC<{ id: number }> = ({ id }) => {
  const [showBigImage, setShowBigImage] = useState(false);

  const showBigImageHandler = () => {
    console.log('hello');
    setShowBigImage(true);
  };
  return (
    <>
      <div className={`gallery__big ${showBigImage && 'gallery__big-active'}`}>
        <div className="gallery__big-image-wrapper">
          <img
            src={`https://picsum.photos/id/${id}/1000/1000`}
            alt={`image_${id}`}
            className="gallery__big-image"
            onClick={() => setShowBigImage(false)}
            aria-hidden="true"
          />
        </div>
      </div>

      <button
        type="button"
        className="gallery-wrapper"
        onClick={() => showBigImageHandler()}
      >
        <Loader />
        <img
          src={`https://picsum.photos/id/${id}/400/400`}
          alt={`image_${id}`}
          className="gallery__image"
        />
      </button>
    </>
  );
};

export default ImageGallery;
