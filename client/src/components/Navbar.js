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
                    <Link aria-current='page' to='/'>
                    <MDBNavbarLink>Home</MDBNavbarLink>
                    </Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <Link to='/fruits'><MDBNavbarLink>Fruit</MDBNavbarLink></Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <Link to='/vegetables'><MDBNavbarLink>Vegetables</MDBNavbarLink></Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <Link to='/flowers'><MDBNavbarLink>Flowers</MDBNavbarLink></Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <Link to='/mycart'><MDBNavbarLink>Cart</MDBNavbarLink></Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <Link to='/auth/customer-login'><MDBNavbarLink>Login</MDBNavbarLink></Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <Link href='/auth/customer-register'><MDBNavbarLink>Register</MDBNavbarLink></Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <Link href='/auth/admin-login'><MDBNavbarLink>Admin</MDBNavbarLink></Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <Link href='/auth/staff-login'><MDBNavbarLink>Staff</MDBNavbarLink></Link>
                    </MDBNavbarItem>
                </MDBNavbarNav>
                </div>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Navbar
