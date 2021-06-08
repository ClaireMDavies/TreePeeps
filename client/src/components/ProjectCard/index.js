import React, { useState, useEffect } from "react";
import Moment from 'react-moment';
import API from "../../utils/API";
const styles = {
    cardStyle: {
        width: '40%',
        padding: 0
    }
};

function ProjectCard() {
    const [projects, setProjects] = useState([]);

    // Load all projects and store them with setProjects
    useEffect(() => {
        loadProjects()
    }, [])

    // Loads all projects and sets them to projects
    function loadProjects() {
        API.getProjects()
            .then(res => {
                setProjects(res.data);
            }
            )
            .catch(err => console.log(err));
    };

    function onClickBtn() {

    };

    return (
        <div>
            { projects.length ? (
                <div>
                    {projects.map(project => {
                        return (
                            <div className="d-flex justify-content-center mb-3" key={project._id}>
                                <div className="card" style={styles.cardStyle}>
                                    <div className="card-header p-2 pb-0">
                                        <h5 className="card-title text-center">{project.name}</h5>
                                    </div>
                                    <div className="card-body p-0 text-center">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Status :
                                                <button className={`btn btn-sm ms-3 ${project.status ? 'btn-success' : 'btn-outline-success'}`} onClick={onClickBtn}>Ongoing</button>
                                                <button className={`btn btn-sm ms-2 ${!project.status ? 'btn-danger' : 'btn-outline-danger'}`} onClick={onClickBtn}>Closed</button>
                                            </li>
                                            <li className="list-group-item">Start Date : <Moment format="YYYY/MM/DD">{project.startDate}</Moment> </li>
                                            <li className="list-group-item">Location : {project.latitude} , {project.longitude}</li>
                                            <li className="list-group-item">Contributors :
                                <div className="list-group mt-2">
                                                    {project.ContributorNames.map(contributor => {
                                                        return (
                                                            <button type="button" className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#cntModal" >{contributor}</button>
                                                        )
                                                    })}
                                                </div>
                                                {/* Contributor Modal */}
                                                <div className="modal fade" id="cntModal" tabIndex="-1" aria-labelledby="contributorModal" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="contributorModal">{project.ContributorNames[0]}</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                Do you want to delete {project.ContributorNames[0]} from the project?
                                                    </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-danger">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>
                                            <li className="list-group-item">End Date : <Moment format="YYYY/MM/DD">{project.endDate}</Moment></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>

            ) : (
                <h3 className="text-center m-3 p-2">No Results to Display</h3>

            )}

        </div>
    )
};


export default ProjectCard;