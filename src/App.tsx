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
import Gallery from './pages/gallery';
import NavBar from './components/navBar/navBar';
import Login from './pages/login';

const RoutesExample = () => {

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/BLOG/">
            <Home />
          </Route>
          <Route path="/BLOG/about">
            <About />
          </Route>
          <Route path="/BLOG/gallery">
            <Gallery />
          </Route>
          <Route path="/BLOG/login">
            <Login />
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
