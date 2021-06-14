import React from "react";
import { Container, Card, CardHeader, CardImg, CardGroup, CardBody } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import ContactImg from '../images/mayank-baranwal-LtakGO2yqIU-unsplash.jpg';
import NavItem from "../components/NavItem";
import Footer from "../components/Footer";

function ContactUs() {

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
            {/* Contact Card */}
            <section className="contact-section mt-5">
                <Container className="d-flex justify-content-center mb-2 mt-5">
                    <Card className="border-success p-0" style={{ width: '90%' }}>
                        <CardHeader> <h1 className="mb-1 text-center">Contact Us</h1></CardHeader>
                        <CardImg className="img-fluid rounded mx-auto d-block p-2" top width="100%" src={ContactImg} alt="waving hello" />
                        <CardBody>
                            <CardGroup>
                                <Card className="h-100">
                                    <CardBody className="text-center">
                                        <i className="fas fa-map-marked-alt text-black mb-2 fa-2x"></i>
                                        <h5 className="text-uppercase m-0">Address</h5>
                                        <hr className="my-4" />
                                        <div className="text-black">PO Box Trees, Oakfield, T3 EE</div>
                                    </CardBody>
                                </Card>
                                <Card className="h-100">
                                    <CardBody className="text-center">
                                        <i className="fas fa-envelope text-black mb-2 fa-2x"></i>
                                        <h5 className="text-uppercase m-0">Email</h5>
                                        <hr className="my-4" />
                                        <div className="text-black"><a
                                            href="mailto:treepeeps@hotmail.com">treepeeps@hotmail.com</a></div>
                                    </CardBody>
                                </Card>
                                <Card className="h-100">
                                    <CardBody className="text-center">
                                        <i className="fas fa-mobile-alt text-black mb-2 fa-2x"></i>
                                        <h5 className="text-uppercase m-0">Phone</h5>
                                        <hr className="my-4" />
                                        <div className="text-black">+44 1313 1313</div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </CardBody>
                    </Card>
                </Container>
            </section>
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
};


export default ContactUs;