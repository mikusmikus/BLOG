/* eslint-disable react/jsx-curly-newline */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import type { PostType, PictureType } from './home';
import { blogAPI, pictureAPI } from './home';
import Hero from '../components/hero/hero';

const Post = () => {
  const [onePost, setOnePost] = useState<PostType>();
  const [onePicture, setOnePicture] = useState<PictureType>();
  const [comments, setComments] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const { postId } = useParams<{ postId: string }>();
  const history = useHistory();

  const getData = (API: string) => {
    return axios.get(API);
  };

  useEffect(() => {
    const copyArr: string[] = [];
    setInputValue('');
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

  const saveComentHandler = () => {
    const copyArr = [...comments];
    if (inputValue) {
      copyArr.push(inputValue);
    }
    setComments(copyArr);
    localStorage.setItem(`comments${onePost?.id}`, JSON.stringify(copyArr));
    setInputValue('');
  };

  return (
    <div className="container container-fluid">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
          <Hero
            postId={postId}
            comments={comments}
            onePost={onePost}
            onePicture={onePicture}
            inputValue={inputValue}
            saveCommentHandler={saveComentHandler}
            inputChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
