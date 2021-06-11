import React from "react";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Navbar from "../components/NavbarTreePeeps";
import AboutImg from '../images/pavlenko-8BNO4HUQYRw-unsplash.jpg';
import NavItem from "../components/NavItem";
import Footer from "../components/Footer";

const styles = {
    cardStyle: {
        width: '90%',
        padding: '6rem'
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

        paddingTop: '1rem',
        paddingBottom: '2rem'
    }

};
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
                    link="/aboutus"
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
                <Card className="border-success" style={styles.cardStyle}>
                    <Row className="row align-items-center no-gutters mb-4 mb-lg-5">
                        <h1 className="mb-3 text-center">About Us</h1>

                        <div className="col-xs-10 pe-0">
                            <img className="img-fluid" style={styles.imageStyle} src={AboutImg} alt="oak sapling" />
                        </div>
                        <Col xs="12">
                            <CardBody>
                                <Container>
                                    <Row>
                                        <Col xs="12">

                                            <img className='pe-2 pb-2' src='../../favicon-32x32.png' alt='icon'></img>
                                            <span className="fs-4 text-black">TreePeeps</span>

                                        </Col>
                                    </Row>
                                </Container>
                                </CardBody>
                                <h3 className="aboutus-description text-center mb-3">A tree-planting app for tree-minded people</h3>
                                <Col xs="12">
                                    
                                        <Card className="py-3 h-100">
                                            <CardBody className="text-center">
                                                <div>The purpose of this app is to connect Tree Peeps:</div>
                                                <br></br>
                                                <div> - Those that can provide space for tree(s) to be planted</div>

                                                <div> - Those that are willing to contribute resources:</div>
                                                <div> - providing the saplings themselves or </div>
                                                <div> - offering their labour to plant the trees</div>
                                            </CardBody>
                                        </Card>
                                   
                                </Col>

                                <Col xs="12">
                               
                                    <Card className="py-3 h-100">
                                        <CardBody className="text-center">
                                            <h2>Our Aim: 1000 Trees Pledged/Planted by 2025!</h2>
                                        </CardBody>
                                    </Card>
                                
                                </Col>
                                
                            
                        </Col>
                    </Row>
                </Card>
            </Container>
            <Footer />
        </div>
    )
};
export default AboutUs;
