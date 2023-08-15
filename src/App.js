import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './Nav';
import { Home } from './home';
import { Login } from './login';

function App() {
  return (

<Fragment>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
<Route path="/login" element={<Login/>}></Route>
  </Routes>
  
  </BrowserRouter>
</Fragment>


  //  <div className="App">
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
  //     </header>
  //   </div>
  );
}

export default App;
