import React from "react";
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";
import Footer from "../components/Footer"
import Masthead from "../components/Masthead";

function HomePage() {
    return (
        <div>
            <Navbar>
                <NavItem
                    link="/"
                    name="About Us">
                </NavItem>
                <NavItem
                    link="/contact"
                    name="Contact Us">
                </NavItem>
            </Navbar>
            <Masthead />
        <Footer/>
        </div>

    )
}

export default HomePage;


