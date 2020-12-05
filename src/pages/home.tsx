import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
// import { posts } from '../data/posts';
import Post from '../components/post/post';
import ScrollUp from '../components/scrollUp/scrollUp';
// import Hero from '../components/hero/hero';

export const blogAPI = 'https://jsonplaceholder.typicode.com/posts';
export const pictureAPI = 'https://rickandmortyapi.com/api/character';

const NUMBER = 20;
export type PostType = {
  id: string;
  title: string;
  body: string;
};
export type PictureType = {
  id: number;
  name: string;
  image: string;
};

const Home = () => {
  const [postsArr, setPostsArr] = useState<PostType[]>([]);
  const [picturesArr, setPicturesArr] = useState<PictureType[]>([]);
  const [picturesPage, setPicturesPage] = useState(pictureAPI);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const nextPage = useRef({ next: '' });
  const history = useHistory();

  const getData = (API: string) => {
    return axios.get(API);
  };
  useEffect(() => {
    getData(blogAPI)
      .then(({ data }) => {
        const numberOfElements = postsArr.length + NUMBER;
        const newData = data;
        newData.splice(numberOfElements);
        // console.log(newData);
        setPostsArr(newData);
      })
      .catch((err) => {
        alert('something wrong, check your API address');
      });
    getData(picturesPage).then((res) => {
      nextPage.current.next = res.data.info.next;
      setPicturesArr([...picturesArr, ...res.data.results]);
    });
  }, [picturesPage]);



  
  useBottomScrollListener(() => {
    setPicturesPage(nextPage.current.next);
  });
  
  window.onscroll = () => scrollFunction();
  const scrollFunction = () => {
    if (window.scrollY >= 800) {
      setShowScrollButton(true);
    }
    if (window.scrollY < 800) {
      setShowScrollButton(false);
    }
  };

  return (
    <section
      style={{
        paddingTop: '90px',
      }}
    >
      {showScrollButton && <ScrollUp />}

      <div className="container container-fluid ">
        <div className="row middle-xs">
          {postsArr.map(({ id, title }, index) => (
            <div key={id} className="col-sm-offset-2 col-sm-8 col-xs-11">
              <Post
                id={id}
                title={title}
                pictureArr={picturesArr[index]}
                singlePostClickHandler={() => history.push(`/BLOG/post/${id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
