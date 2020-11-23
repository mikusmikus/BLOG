import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './App.css';
import 'flexboxgrid';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/404';
import Post from './pages/post';

const RoutesExample = () => {
  const [active, setActive] = useState(true);

  return (
    <div>
      <Router>
        <div className="navBar">
          <Link
            to="/BLOG/"
            className={`navBar__link ${active && 'active'} `}
            onClick={() => setActive(true)}
          >
            Home{' '}
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link
            to="/BLOG/about"
            className={`navBar__link ${!active && 'active'} `}
            onClick={() => setActive(false)}
          >
            About{' '}
          </Link>
          &nbsp;&nbsp;&nbsp;
        </div>
        <Switch>
          <Route exact path="/BLOG/">
            <Home />
          </Route>
          <Route path="/BLOG/about">
            <About />
          </Route>
          <Route exact path="/BLOG/post/:postId">
            <Post />
          </Route>
          <Route path="/BLOG/">
            <Redirect push to="/BLOG/404" />
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default RoutesExample;
