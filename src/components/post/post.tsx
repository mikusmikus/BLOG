import React, { FC } from 'react';
import type { PictureType } from '../../pages/home';
import './post.css';

type Props = {
  id: string;
  title: string;
  pictureArr: PictureType;
  singlePostClickHandler: () => void;
};

const Post: FC<Props> = ({ id,  title, pictureArr, singlePostClickHandler }) => {

  return (
    <section className='post-wrapper'>
      <button
        type="button"
        className="post"
        onClick={singlePostClickHandler}
      >
        <h1 className="heading">{title}</h1>

        <div className="image-wrapper">
          {pictureArr && (
            <img
              key={pictureArr.id}
              src={pictureArr.image}
              alt={pictureArr.name}
              className="image"
            />
          )}
        </div>
      </button>
    </section>
  );
};

export default Post;
