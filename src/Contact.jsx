import React from 'react';
import Header from './CommonComponents.jsx/Header';
import { Outlet } from 'react-router-dom';

 const Contact = () => {
  return (
    <>
    <Header/>
    <h1> Contact Us</h1>
    
    <Outlet/>
    </>
  )
}
export default Contact;