import React from "react";

const styles = {
    cardStyle: {
        width: '60%',
        padding: 0
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

function ContactUs() {

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow mb-3">
                <div className="container-fluid">
                    <img className='ps-3 pe-2' src='../../favicon-32x32.png' alt='icon'></img>
                    <a className="navbar-brand">TreePeeps</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Menu
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ps-2"><a className="nav-link" href="#">Dashboard</a></li>
                            <li className="nav-item ps-2"><a className="nav-link" href="#">About us</a></li>
                            <li className="nav-item ps-2"><a className="nav-link" href="#">Contact us</a></li>
                            <li className="nav-item ps-2"><a className="nav-link" href="#">logout</a></li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
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