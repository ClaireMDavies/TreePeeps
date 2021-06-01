import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarToggler, NavbarBrand, NavLink } from 'reactstrap';
import NavItem from '../NavItem';
import SearchForm from "../SearchForm";

function NavbarTreePeeps() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    // return (
    //     < Navbar className="navbar navbar-expand-lg navbar-light bg-light shadow mb-3" >
    //         <Container>
    //             <img className='ps-3 pe-2' src='../../favicon-32x32.png' alt='icon'></img>
    //             <a className="navbar-brand">TreePeeps</a>
    //             <NavbarBrand href="/" className="mr-auto">TreePeeps</NavbarBrand>
    //             <NavbarToggler onClick={toggleNavbar} className="mr-2" />
    //             <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Menu
    //                 <span className="navbar-toggler-icon"></span>
    //             </Button>
    //             <Collapse isOpen={!collapsed} navbar>
    //                 <NavItem />

    //                 {window.location.pathname === "/dashboard" || window.location.pathname === "/feeds" || window.location.pathname === "/project"
    //                     ? <SearchForm />
    //                     : ""
    //                 }
    //             </Collapse>
    //         </Container>
    //     </ Navbar >
    // );
    return (
        <div>
            <Navbar color="faded" light>
                <img className='ps-3 pe-2' src='../../favicon-32x32.png' alt='icon'></img>
                <NavbarBrand href="/" className="mr-auto"><b>Tree</b>Peeps</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <SearchForm />
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarTreePeeps;