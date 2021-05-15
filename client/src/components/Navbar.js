import { Link } from 'react-router-dom'
import './css/App.css';
import React from 'react';
import {
  MDBNavbar, MDBNavbarNav, MDBNavbarItem,
  MDBNavbarLink, MDBContainer, MDBNavbarToggler,
  MDBIcon } from 'mdb-react-ui-kit';

const Navbar = () => {
    return (
        <MDBNavbar expand='lg' light bgColor='white'>
            <MDBContainer fluid>
                <MDBNavbarToggler
                aria-controls='navbarExample01'
                aria-expanded='false'
                aria-label='Toggle navigation'
                >
                <MDBIcon fas icon='bars' />
                </MDBNavbarToggler>
                <div className='collapse navbar-collapse' id='navbarExample01'>
                <MDBNavbarNav right className='mb-2 mb-lg-0'>
                    <MDBNavbarItem >
                    <MDBNavbarLink aria-current='page' href='#'>
                        Home
                    </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink href='/fruits'>Fruit</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink href='/vegetables'>Vegetables</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink href='/flowers'>Flowers</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <Link to='/mycart'><MDBNavbarLink>Cart</MDBNavbarLink></Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink href='/auth/customer-login'>Login</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink href='/auth/customer-register'>Register</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink href='/auth/admin-login'>Admin</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <MDBNavbarLink href='/auth/staff-login'>Staff</MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>
                </div>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Navbar
