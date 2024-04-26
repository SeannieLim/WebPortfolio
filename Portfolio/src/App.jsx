import React from "react";
import Home from './Components/Home.jsx';
import About from "./Components/About.jsx";
import Work from "./Components/Work.jsx";
import Playground from "./Components/Playground.jsx";
import GitHubP2 from "./Components/GitHubP2.jsx";
import { Route, Routes } from 'react-router-dom';

function App(){
  return(
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Work' element={<Work/>} />
      <Route path='/Playground' element={<Playground/>} />
      <Route path='/GitHubP2/:repoName' element={<GitHubP2 />} />
    </Routes>
    </div>
  )
}


export default App