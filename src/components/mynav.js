import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse} from 'reactstrap';
import { NavLink } from 'react-router-dom';


            
  const MyNav = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

        return (
            <div className="homepage-body">
                <Navbar className="my-nav" color="dark" dark expand="md">
                    <NavbarBrand href="/">Kita Gaither</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            <NavLink className='nav-link' to='/home'>Home</NavLink>
                            </NavItem>

                            <NavItem>
                            <NavLink className='nav-link' to='/about'>About</NavLink>
                            </NavItem>

                            <NavItem>
                            <NavLink className='nav-link' to='/projects'>Projects</NavLink>
                            </NavItem>

                            <NavItem>
                            <NavLink className='nav-link' to='/resume'>Resume</NavLink>
                            </NavItem>

                            <NavItem>
                            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

export default MyNav;