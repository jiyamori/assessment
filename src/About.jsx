import React from 'react'
import Header from './CommonComponents.jsx/Header';
import { Outlet } from 'react-router-dom';
import TodoList from './TodoList';
import Curd from './Curd';
 const About = () => {
  return (
   <>
   <Header/>
   
   <TodoList></TodoList>
   <Curd></Curd>
   <Outlet/>
   </>
  )
}

export default About;
