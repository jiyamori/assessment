import React from 'react'
import Header from './CommonComponents.jsx/Header';
import { Outlet } from 'react-router-dom';

 const Home = () => {
  return (

    <>
    <Header/>
    <h1>This is my home page</h1> 
    
    <Outlet/>
    </>
  )
}

export default Home;
