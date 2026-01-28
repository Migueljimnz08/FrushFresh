import React from "react";
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';

const Main = () => {
  return ( 
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </main>
  );
};

export default Main;
