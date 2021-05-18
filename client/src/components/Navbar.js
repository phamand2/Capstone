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
            <a class="navbar-brand" href="/" style={{marginLeft:'20px'}}>FruVe Flow</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria hidden='false' aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <MDBContainer fluid>
                <MDBNavbarNav right className='mb-2 mb-lg-0 'id="navbarSupportedContent">

                    <MDBNavbarItem>
                    <Link class="nav-litem" aria-current='page' to='/'>
                    <MDBNavbarLink>Home</MDBNavbarLink>
                    </Link>
                    </MDBNavbarItem>

            <MDBNavbarItem >

                <Link class="nav-link" class="nav-item dropdown" aria-current='page' to='/'>
                    <MDBNavbarLink>Shop</MDBNavbarLink>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                       
                        <Link class="dropdown-item" to='/fruits'>
                            <MDBNavbarLink>Fruits</MDBNavbarLink>
                        </Link>

                        <Link class="dropdown-item" to='/vegetables'>
                            <MDBNavbarLink>Vegetables</MDBNavbarLink>
                        </Link>

                        <Link class="dropdown-item" to='/flowers'>
                            <MDBNavbarLink>Flowers</MDBNavbarLink>
                        </Link>
                    </div>
                </Link>
            </MDBNavbarItem>

            <MDBNavbarItem >

                <Link class="nav-item dropdown" aria-current='page' to='/'>
                    <MDBNavbarLink>Login/Register</MDBNavbarLink>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                       
                        <Link class="dropdown-item" to='/auth/customer-login'>
                            <MDBNavbarLink>Customer</MDBNavbarLink>
                        </Link>

                         <Link class="dropdown-item" to='/auth/admin-login'>
                             <MDBNavbarLink>Admin</MDBNavbarLink>
                        </Link>

                        <Link class="dropdown-item" to='/auth/staff-login'>
                            <MDBNavbarLink>Staff</MDBNavbarLink>
                        </Link>

                        <div class="dropdown-divider"></div>
                         <Link class="dropdown-item" to='/auth/customer-register'>
               <MDBNavbarLink>Register</MDBNavbarLink>
            </Link>
                    </div>
                </Link>
            </MDBNavbarItem>

              
                    <MDBNavbarItem>
                    <Link to='/mycart'><MDBNavbarLink>My Cart</MDBNavbarLink></Link>
                    </MDBNavbarItem>

          

                    

                </MDBNavbarNav>
               
            </MDBContainer>
        </MDBNavbar>
    )    
}

export default Navbar
