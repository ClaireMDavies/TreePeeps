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

function Feeds() {

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
            {/* Post Card */}
            <div className="row d-flex justify-content-center mb-3">
                <div className="card" style={styles.cardStyle}>
                    <div className="card-header pb-0">
                        <h5 className="card-title">Project Name <i className="fas fa-map-marked-alt ps-3" style={styles.mapIcon} data-bs-toggle="tooltip" data-bs-placement="top" title="Land needed"></i><i className="fas fa-clock ps-3" style={styles.clockIcon} data-bs-toggle="tooltip" data-bs-placement="top" title="Time needed"></i><i className="fas fa-tree ps-3" style={styles.treeIcon} data-bs-toggle="tooltip" data-bs-placement="top" title="Resources needed"></i></h5>
                        <h6 className="text-muted">Username</h6>

                    </div>
                    <div className="card-body">
                        <p className="card-text">Project description</p>
                    </div>
                    <div className="card-footer text-center">
                        <button className="btn btn-success btn-sm m-2" ><i className="fas fa-hands-helping"></i> Contribute</button>
                        <button className="btn btn-success btn-sm m-2"><i className="fas fa-envelope"></i> Contact me</button>
                    </div>
                </div>
            </div>
            {/* Contribute Card */}
            <div className="row d-flex justify-content-center mb-3">
                <div className="card" style={styles.cardStyle}>
                    <div className="card-header bg-success">
                        <h5 className="card-title text-white "><i className="fab fa-wpforms"></i> Contribution Form</h5>
                    </div>
                    <div className="card-body">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="Land" />
                            <label class="form-check-label" for="Land">Land</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="Time" />
                            <label class="form-check-label" for="Time">Time</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="Resources" />
                            <label class="form-check-label" for="Resources">Resources</label>
                        </div>
                        <div class="input-group mt-3">
                            <span class="input-group-text">Message</span>
                            <input type="text" aria-label="First name" class="form-control" />
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <button className="btn btn-danger btn-sm m-2">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Feeds;