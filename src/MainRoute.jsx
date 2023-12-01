import React from 'react-router-dom';

import { createBrowserRouter } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import LoginPage from './LoginPage';
import Admin from './Admin';


const MainRoute = createBrowserRouter([

    {
        path: "/",
        element: <Home />,

       
    },

    {
        path: "/About",
        element: <About />,
    },

    {
        path: "/Contact",
        element: <Contact />,

        
    },

    {
        path: "/LoginPage",
        element: <LoginPage />,

        
    },

    {
        path: "/Admin",
        element: <Admin />,

        
    },


]);


export default MainRoute;