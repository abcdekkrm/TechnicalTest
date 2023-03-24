import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav'
import Home from './Screens/Home';

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

  const route = window.location.pathname;

  if (route === '/') {
    return (
      <>
        <Nav />
        <Home />
      </>
    );
  }
  // return(<><Home/></>);
}

export default App;
