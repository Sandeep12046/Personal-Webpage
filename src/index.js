import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';
import Error from './Error';

function App(){
  return(
    <>
    <Router>
      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="*" element={<Error/>}/>
    </Routes >
    </Router>
    </>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

