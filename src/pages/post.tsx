/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import type { PostType } from './home';
import { blogAPI, pictureAPI } from './home';

const Post = () => {
  const [onePost, setOnePost] = useState<PostType>();
  const [onePicture, setOnePicture] = useState<PostType>();
  const [comments, setComments] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const { postId } = useParams<{ postId: string }>();
  const history = useHistory();

  const getData = (API: string) => {
    return axios.get(API);
  };

  useEffect(() => {
    const copyArr:string[]= [];
    setComments(copyArr);
    getData(`${blogAPI}/${postId}`)
      .then(({ data }) => {
        setOnePost(data);
      })
      .catch(() => {
        history.push('/BLOG/404');
      });
    getData(`${pictureAPI}/${postId}`).then(({ data }) => {
      setOnePicture(data.image);
    });
    const storageComments = localStorage.getItem(`comments${postId}`);
    storageComments && setComments(JSON.parse(storageComments));
  }, [postId]);


  const handleSaveInput = () => {
    const copyArr = [...comments];
    if (inputValue) {
      copyArr.push(inputValue);
    }
    setComments(copyArr);
    localStorage.setItem(`comments${onePost?.id}`, JSON.stringify(copyArr));
    setInputValue('');
  };


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
    <div className="container container-fluid">
      <div className="row">
        <div className="col-md-8 col-sm-offset-2 ">

          <div className="hero">
            <button
              type="button"
              disabled={Number(postId) <= 1}
              onClick={prevHandler}
            >
              prev
            </button>
            <button
              type="button"
              disabled={Number(postId) >= 100}
              onClick={nextHandler}
            >
              next
            </button>
            <button
              type="button"
              className="button__back"
              onClick={() => backToHome()}
            >
              Back to home
            </button>

            <div className="post__text">
              <div className="overlay" />
              {onePicture && (
                <div
                  className="background-image"
                  style={{ backgroundImage: `url(${onePicture})` }}
                />
              )}
              <div className="post__heading">
                <span className="title">{onePost?.title}</span>
              </div>
              <p className="post__body">{onePost?.body}</p>

              <br />
            </div>
            <div className="post__text post__comments">
              <div className="comments">
                <ol>
                  {comments &&
                    comments.map((comment) => (
                      <li key={comment}>Anonymous: {comment}</li>
                    ))}
                </ol>
              </div>
              <div className="input-wrapper">
                <input
                  className="input"
                  type="text"
                  name="comment"
                  id=""
                  placeholder="add your comment here..."
                  value={inputValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputValue(e.target.value)
                  }
                />
                <button
                  type="button"
                  className="input__button"
                  onClick={() => handleSaveInput()}
                >
                  add comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
