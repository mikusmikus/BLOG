/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import AddComment from '../addComment/addComment';
import { PostType, PictureType } from '../../pages/home';
import './hero.css';
import Loader from '../loader/loader';

type Props = {
  postId: string;
  inputValue: string;
  onePicture: PictureType | undefined;
  onePost: PostType | undefined;
  comments: string[];
  inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveCommentHandler: () => void;
};

const Hero: FC<Props> = ({
  onePicture,
  onePost,
  postId,
  inputValue,
  comments,
  inputChangeHandler,
  saveCommentHandler,
}) => {
  const history = useHistory();
  const nextHandler = () => {
    history.push(`/BLOG/post/${Number(postId) + 1}`);
  };

  const prevHandler = () => {
    history.push(`/BLOG/post/${Number(postId) - 1}`);
  };

  const backToHome = () => {
    history.push('/BLOG/');
  };
  return (
    <div className="hero-wrapper">
      <button
        type="button"
        className="button__back"
        onClick={() => backToHome()}
      >
        Back to home
      </button>

      <div className="hero">
        <Loader />
        <>
          <div className="hero__text">
            <h3 className="title">{onePost?.title}</h3>
            <p className="body">{onePost?.body}</p>
          </div>

          <div className="hero__comments">
            <ol>
              {comments &&
                comments.map((comment) => (
                  <li key={comment}>Anonymous: {comment}</li>
                ))}
            </ol>
            <AddComment
              inputValue={inputValue}
              inputChangeHandler={inputChangeHandler}
              saveCommentHandler={saveCommentHandler}
            />
          </div>
          <button
            type="button"
            className="prev"
            onClick={prevHandler}
            disabled={Number(postId) <= 1}
          >
            <button
              type="button"
              className="arrow arrow-prev"
              disabled={Number(postId) <= 1}
            />
          </button>
          <button
            type="button"
            className="next"
            onClick={nextHandler}
            disabled={Number(postId) >= 100}
          >
            <button
              type="button"
              className="arrow arrow-next"
              disabled={Number(postId) >= 100}
            />
          </button>
          <div className="overlay" />
          {onePicture && (
            <div
              className="background-image"
              style={{ backgroundImage: `url(${onePicture})` }}
            />
          )}
        </>

      </div>
    </div>
  );
};

export default Hero;
