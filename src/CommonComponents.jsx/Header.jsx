import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
 
  MDBCollapse,
} from 'mdb-react-ui-kit';


export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                <Link to ='/' className= 'my-Link'>Home</Link>
               
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>
                <Link to ='/About' className=''>About</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>
                <Link to = '/Contact' className=''>Contact</Link></MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#'>
                <Link to = '/LoginPage' className=''>Signin</Link></MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#'>
                <Link to = '/Admin' className=''>Admin</Link></MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#'>
                <Link to = '/ContextAPI' className=''>API</Link></MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarNav>
            
            


            
            <form className='d-flex input-group w-auto'>
            
            <MDBBtn color='dark'><Link to = '/Login' classname=''>Login</Link></MDBBtn>
          </form>
           
         

         
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}