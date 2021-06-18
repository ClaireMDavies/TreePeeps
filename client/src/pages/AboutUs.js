import React from "react";
import { Container, Card, CardBody, CardHeader, CardTitle, CardText, CardImg } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import AboutImg from '../images/pavlenko-8BNO4HUQYRw-unsplash.jpg';
import NavItem from "../components/NavItem";
import Footer from "../components/Footer";

function AboutUs() {

    return (
        <div>
            <Navbar>
                {localStorage.getItem("userId") === null ? "" :
                    <NavItem
                        link="/dashboard"
                        name="Dashboard">
                    </NavItem>
                }
                <NavItem
                    link="/about"
                    name="About Us">
                </NavItem>
                <NavItem
                    link="/contact"
                    name="Contact Us">
                </NavItem>
                {localStorage.getItem("userId") === null ?
                    <NavItem
                        link="/login"
                        name="Login">
                    </NavItem> :
                    <NavItem
                        link="/logout"
                        name="Logout">
                    </NavItem>
                }
            </Navbar>
            {/* Login Card */}
            <Container className="d-flex justify-content-center mb-3 mt-5">
                <Card className="border-success p-0" style={{ width: '90%' }}>
                    <CardHeader> <h1 className="mb-1 text-center">About Us</h1></CardHeader>
                    <CardImg className="img-fluid rounded mx-auto d-block p-2" top width="100%" src={AboutImg} alt="oak sapling" />
                    <CardBody>
                        <CardTitle ><h3 className="text-center mb-3">A tree-planting app for tree-minded people</h3></CardTitle>
                        <CardText className="text-center border p-3">
                            <span className="fs-5 fw-bold  pb-2">The purpose of this app is to connect Tree Peeps:</span>
                            <br></br>
                            <span> Those that can provide space for tree(s) to be planted</span>
                            <br />
                            <span> Those that are willing to contribute resources
                                <br />
                                (providing the saplings themselves or offering their labour to plant the trees)</span>
                        </CardText>
                        <CardText className="text-center border p-3 bg-success text-white">
                            <span className="fs-2">Our Aim: 1000 Trees Pledged/Planted by 2025!</span>
                        </CardText>
                    </CardBody>
                </Card>
            </Container>
            <Footer />
        </div>
    )
};
export default AboutUs;
