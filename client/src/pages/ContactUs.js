import React from "react";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";
import Footer from "../components/Footer";

function ContactUs() {

    return (
        <div>
           <Navbar>
                <NavItem
                    link="/dashboard"
                    name="Dashboard">
                </NavItem>
                <NavItem
                    link="/"
                    name="About Us">
                </NavItem>
                <NavItem
                    link="/contact"
                    name="Contact Us">
                </NavItem>
                <NavItem
                    link="/"
                    name="Logout">
                </NavItem>
            </Navbar>
            {/* Contact Card */}
            <section className="contact-section mt-5">
                <Container>
                    <Row className="row align-items-center no-gutters mb-4 mb-lg-5">
                        <h1 className="mb-4 text-center">Contact Us</h1>
                    </Row>

                    <Row>
                        <Col xs="4">
                            <Card className="py-4 h-100">
                                <CardBody className="text-center">
                                    <i className="fas fa-map-marked-alt text-black mb-2 fa-2x"></i>
                                    <h4 className="text-uppercase m-0">Address</h4>
                                    <hr className="my-4" />
                                    <div className="text-black-50">Birmingham, UK</div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="4">
                            <Card className="py-4 h-100">
                                <CardBody className="text-center">
                                    <i className="fas fa-envelope text-black mb-2 fa-2x"></i>
                                    <h4 className="text-uppercase m-0">Email</h4>
                                    <hr className="my-4" />
                                    <div className="text-black-50"><a
                                        href="mailto:treepeeps@hotmail.com">treepeeps@hotmail.com</a></div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="4">
                            <Card className="py-4 h-100">
                                <CardBody className="text-center">
                                    <i className="fas fa-mobile-alt text-black mb-2 fa-2x"></i>
                                    <h4 className="text-uppercase m-0">Phone</h4>
                                    <hr className="my-4" />
                                    <div className="text-black-50">+44 0000 0000</div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
};


export default ContactUs;