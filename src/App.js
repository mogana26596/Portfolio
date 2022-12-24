import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Project from './Project';
import Resume1 from './Resume1';

function App() {
return (
    <>
      <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/project" element={<Project />} />
                <Route path="/resume" element={<Resume1 />} />
            </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
