import React, { useState } from "react";

const styles = {
    cardStyle: {
        width: '40%',
        padding: 0
    }
};


function ProjectCard() {
    const [checked, setChecked] = useState(true);
    return (
        <div>
            <div className="row d-flex justify-content-center mb-3">
                <div className="card" style={styles.cardStyle}>
                    <div className="card-header p-2 pb-0">
                        <h5 className="card-title text-center">Project Title</h5>
                    </div>
                    <div className="card-body p-0 text-center">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Description text goes here</li>
                        
                            <li className="list-group-item">Status :
                                <div className="btn-group ms-3" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked={checked} onChange={() => setChecked(!checked)} />
                                    <label className="btn btn-sm btn-outline-success" htmlFor="btnradio1">Ongoing</label>
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                                    <label className="btn btn-sm btn-outline-danger" htmlFor="btnradio3">Closed</label>
                                </div>
                            </li>
                            <li className="list-group-item">Start Date : </li>
                            <li className="list-group-item">Location : </li>
                            <li className="list-group-item">Contributors :
                                <div className="list-group mt-2">
                                    <button type="button" className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#cntModal" >Contributor 1</button>
                                    <button type="button" className="list-group-item list-group-item-action">Contributor 2</button>
                                    <button type="button" className="list-group-item list-group-item-action">Contributor 3</button>
                                </div>
                                {/* Contributor Modal */}
                                <div className="modal fade" id="cntModal" tabIndex="-1" aria-labelledby="contributorModal" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="contributorModal">Contributor</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                                    </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="list-group-item">End Date :</li>
                        </ul>
                    </div>
                    <form >
                        <div className="card-footer text-center">
                            <button className="btn btn-danger btn-sm m-2">Delete</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
};


export default ProjectCard;