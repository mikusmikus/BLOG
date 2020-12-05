import React, { useState } from 'react';
import {
  HashRouter as Router,
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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/post/:postId">
            <Post />
          </Route>
          <Route path="/">
            <Redirect push to="/404" />
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default RoutesExample;
