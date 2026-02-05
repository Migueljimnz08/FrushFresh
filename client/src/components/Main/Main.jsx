import React from "react";
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import Contact from "./Contact";

const Main = () => {
  return ( 
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </main>
  );
};

export default Main;
