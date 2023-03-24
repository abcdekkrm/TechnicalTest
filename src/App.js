import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav'
import Home from './Screens/Home';
import User from './Screens/User';
import Album from './Screens/Album';
// import { Switch } from '@material-ui/core';

function App() {
  // <Switch>
  //   <Route exact path="/" render={Home} /> 
  // </Switch>;
  // else {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //       {/* <Home /> */}
  //     </header>
  //   </div>
  // );
  // }
  // return(<></>);
  // <Switch>
  //   <Route exact path="/" element={Home} />
  // </Switch>;
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
          <Route path="/albums/:id" element={<Album />} />
        </Routes>
      </BrowserRouter>
  </>
  );

  // const route = window.location.pathname;

  // if (route === '/') {
  //   return (
  //     <>
  //       <Nav />
  //       <Home />
  //     </>
  //   );
  // }
  // if (route === '/albums/') {
  //   return (
  //     <>
  //       <Nav />
  //       <Album />
  //     </>
  //   )
  // }
  // return(<><Home/></>);
}

export default App;
