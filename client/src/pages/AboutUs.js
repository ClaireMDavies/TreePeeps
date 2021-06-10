import React from "react";
import { Container, Row, Col, Card, CardBody, Form, Input, Button } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import AboutImg from '../images/pavlenko-8BNO4HUQYRw-unsplash.jpg';
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
    imageStyle: {
        height: "530px"

    },
    treeIcon: {

        color: "green"
    },
    clockIcon: {
        color: "red"
    },
    mapIcon: {
        color: "brown"
    }

};
function AboutUs() {

    return (
        <div>
            <Navbar>
                <NavItem
                    link="/dashboard"
                    name="Dashboard">
                </NavItem>
                <NavItem
                    link="/aboutus"
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
            {/* Login Card */}
            <Container className="d-flex justify-content-center mb-3 mt-5">
                <Card className="border-success" style={styles.cardStyle}>
                    <Row>
                        <Col xs="6">
                            <img className="img-fluid" style={styles.imageStyle} src={AboutImg} alt="login" />
                        </Col>
                        <Col xs="6">
                            <CardBody>
                                <Container>
                                    <img className='pe-2 pb-2 ' src='../../favicon-32x32.png' alt='icon'></img>

                                    <span className="text-center fs-3">TreePeeps</span>
                                </Container>
                                <p className="aboutus-description">A tree-planting app for tree-minded people</p>

                                <Col xs="12">
                                    <Card className="py-4 h-100">
                                        <CardBody className="text-left">
                                            <div>The purpose of this app is to connect Tree Peeps:</div>
                                            <br></br>
                                            <div> - Those that can provide space for tree(s) to be planted</div>

                                            <div> - Those that are willing to contribute resources such as</div>
                                            <div> - providing the saplings themselves or </div>
                                            <div> - offering their labour to plant the trees</div>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <br></br>
                                <Col xs="12">
                                    <Card className="py-4 h-100">
                                        <CardBody className="text-center">
                                            <h2>Our Aim: 1000 Trees Pledged/Planted by 2025!</h2>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </Container>
            <Footer />
        </div>
    )
};
export default AboutUs;
