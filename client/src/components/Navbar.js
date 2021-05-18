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
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria hidden='false' aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <MDBContainer fluid>
                <MDBNavbarNav right className='mb-2 mb-lg-0 'id="navbarSupportedContent">
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
                    <Link to='/auth/customer-register'><MDBNavbarLink>Register</MDBNavbarLink></Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <Link to='/auth/admin-login'><MDBNavbarLink>Admin</MDBNavbarLink></Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <Link to='/auth/staff-login'><MDBNavbarLink>Staff</MDBNavbarLink></Link>
                    </MDBNavbarItem>
                </MDBNavbarNav>
               
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Navbar
