import React from "react";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import ContactImg from '../images/mayank-baranwal-LtakGO2yqIU-unsplash.jpg';
import NavItem from "../components/NavItem";
import Footer from "../components/Footer";

const styles = {
    cardStyle: {
        width: '90%',
        padding: 0
    },
    cardSpan: {
        display: "inline - block",
        width: "100px"
    },
    imageStyle:
    {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '85%',
        maxHeight: '35rem',
       
    },

};

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
                    <Card className="border-success" style={styles.cardStyle}>
                        <Row className="row align-items-center no-gutters mb-4 mb-lg-5">
                            <h1 className="mb-1 text-center">Contact Us</h1>

                            <Row>
                                <Col xs="12">
                                    <img className="img-fluid rounded mx-auto d-block img-thumbnail m-3" style={styles.imageStyle} src={ContactImg} alt="waving hello" />
                                </Col>
                            </Row>


                            <Col xs="4">
                                <Card className="py-4 h-90">
                                    <CardBody className="text-center">
                                        <i className="fas fa-map-marked-alt text-black mb-2 fa-2x"></i>
                                        <h5 className="text-uppercase m-0">Address</h5>
                                        <hr className="my-4" />
                                        <div className="text-black">PO Box Trees, Oakfield, T3 EE</div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="4">
                                <Card className="py-4 h-90">
                                    <CardBody className="text-center">
                                        <i className="fas fa-envelope text-black mb-2 fa-2x"></i>
                                        <h5 className="text-uppercase m-0">Email</h5>
                                        <hr className="my-4" />
                                        <div className="text-black"><a
                                            href="mailto:treepeeps@gumtree.com">treepeeps@gumtree.com</a></div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="4">
                                <Card className="py-4 h-90">
                                    <CardBody className="text-center">
                                        <i className="fas fa-mobile-alt text-black mb-2 fa-2x"></i>
                                        <h5 className="text-uppercase m-0">Phone</h5>
                                        <hr className="my-4" />
                                        <div className="text-black">+44 1313 1313</div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </section>
           
            <Footer />
        </div>
    )
};


export default ContactUs;