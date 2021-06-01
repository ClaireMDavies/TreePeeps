import React from "react";
import Navbar from "../components/NavbarTreePeeps";
import NavItem from "../components/NavItem";


function ContactUs() {

    return (
        <div>
            <Navbar>
                <NavItem
                    link="/contact"
                    name="Contact Us">
                </NavItem>
                <NavItem
                    link="/"
                    name="About Us">
                </NavItem>
            </Navbar>
            {/* Contact Card */}
            <section className="contact-section mt-5">
                <div className="container">
                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                        <h1 className="mb-4 text-center">Contact Us</h1>
                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-map-marked-alt text-black mb-2 fa-2x"></i>
                                    <h4 className="text-uppercase m-0">Address</h4>
                                    <hr className="my-4" />
                                    <div className="text-black-50">Birmingham, UK</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-black mb-2 fa-2x"></i>
                                    <h4 className="text-uppercase m-0">Email</h4>
                                    <hr className="my-4" />
                                    <div className="text-black-50"><a
                                        href="mailto:treepeeps@hotmail.com">treepeeps@hotmail.com</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-mobile-alt text-black mb-2 fa-2x"></i>
                                    <h4 className="text-uppercase m-0">Phone</h4>
                                    <hr className="my-4" />
                                    <div className="text-black-50">+44 0000 0000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
};


export default ContactUs;