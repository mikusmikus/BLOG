import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export type PostType = {
  id: string;
  title: string;
  paragraph: string;
  category: string[];
};

const Home = () => {
  const [postsArr, setPostsArr] = useState<PostType[]>([]);

  useEffect(() => {
    // console.log(posts);
    setPostsArr(posts);
  }, []);

  return (
    <div>
      <div className="container container fluid home">
        <div className="row middle-xs">
          <div className="col-xs-12">
            {postsArr.map(({ id, title, category }) => (
              <div key={id} className="post__small">

                <Link to={`post/${id}`} className="heading">{title}</Link>

                <div>
                  {category.map((c) => (
                    <p key={c} className="category">
                      {c}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
