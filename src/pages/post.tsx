/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { posts } from '../data/posts';

import type { PostType } from './home';

const Post = () => {
  const [onePost, setOnePost] = useState<PostType>();
  const [comments, setComments] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const history = useHistory();
  const { postId } = useParams<{ postId: string }>();

  useEffect(() => {
    const post = posts.find((item) => item.id === postId);
    if (!post) {
      history.push('/BLOG/404');
    }
    setOnePost(post);
    const storageComments = localStorage.getItem(`comments${post?.id}`);
    
    storageComments && setComments(JSON.parse(storageComments));
  }, []);

  const backToHome = () => {
    history.push('/BLOG/');
  };
  const handleSaveInput = () => {
    // if (comments) {
    const copyArr = [...comments];
    if (inputValue) {
      copyArr.push(inputValue);
    }
    localStorage.setItem(`comments${onePost?.id}`, JSON.stringify(copyArr));
    setComments(copyArr);
    setInputValue('');
  };
  //   console.log(onePost);
  return (
    <div className="container post">
      <button
        type="button"
        className="button__back"
        onClick={() => backToHome()}
      >
        Back to home
      </button>
      <div className="post__text">
        <div className="post__heading">
          <span className="title">{onePost?.title}</span>
          <span className="title">{onePost?.category[0]}</span>
        </div>
        <div>{onePost?.paragraph}</div>

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
  );
};

export default Post;
