import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
  return ( 
    <div className="App">
      
      <header className="App-header">

        {/* Making basic navigation buttons: */}
        <div>
          <input type="button" value="Click Me!"/>
        </div>

      {/* Setting up navigation links: */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<h1>Landing Page</h1>}/>
            <Route path="home">
              <Route index element = {<h1>Home Page</h1>}/>
              <Route path="about" element = {<h1>About Page</h1>}/>
              <Route path="team" element = {<h1>Team Page</h1>}/>
              <Route path="support" element = {<h1>Home Page</h1>}/>
              <Route path="contact" element = {<h1>Home Page</h1>}/>
            </Route>
          </Route>
          {/* <Route path="/home" element = {<h1>Home Page</h1>}/> */}
          {/* <Route path="/about" element = {<h1>Home Page</h1>}/> */}
          {/* <Route path="/team" element = {<h1>Home Page</h1>}/> */}
          {/* <Route path="/support" element = {<h1>Home Page</h1>}/> */}
          {/* <Route path="/contact" element = {<h1>Home Page</h1>}/> */}
        </Routes>
      </BrowserRouter>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
