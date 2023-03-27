import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav'
import Home from './Screens/Home';
import User from './Screens/User';
import Album from './Screens/Album';
import Albums from './Screens/Albums'
import Post from './Screens/Post';
import Posts from './Screens/Posts'
import ToDos from './Screens/ToDos';
// import { Switch } from '@material-ui/core';

function App() {
  return(
    <>
      <Nav />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/albums/" element={<Album />} />
      </Routes> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/posts/" element={<Posts />} />
          <Route path="/albums/:id" element={<Album />} />
          <Route path="/albums/" element={<Albums />} />
          <Route path="/todos/" element={<ToDos />} />
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
