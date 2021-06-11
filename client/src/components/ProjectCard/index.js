import React, { useState, useEffect } from "react";
import Moment from 'react-moment';
import API from "../../utils/API";
import "./style.css"

function ProjectCard() {
    const [projects, setProjects] = useState([]);
    let contributorsInfo = [];
    let contributions;



    // Load all projects and store them with setProjects
    useEffect(() => {
        loadProjects()
    }, [])

    // Loads all projects and sets them to projects
    function loadProjects() {
        API.getProjects()
            .then(res => {
                setProjects(res.data);

                res.data.map(project => {
                    if (localStorage.getItem('userId') === project.userId) {
                        let contributorsIds = project.contributors.join('&');
                        if (contributorsIds) {
                            API.getContributors(contributorsIds)
                                .then(res => {
                                    contributorsInfo = res.data;
                                    const newProject = { ...project };
                                    newProject.contributorsDetails = contributorsInfo;
                                    API.updateProject(project._id, newProject)
                                        .then(response => {
                                            loadProjects();
                                        })
                                        .catch(e => {
                                            console.log(e);
                                        })
                                })
                                .catch(err => console.log(err));
                        }
                    }
                    API.getContributions(project._id)
                        .then(res => {
                            contributions = res.data;
                            const newProject = { ...project };
                            newProject.contributions = contributions;
                            API.updateProject(project._id, newProject)
                                .then(response => {
                                    loadProjects();
                                })
                                .catch(e => {
                                    console.log(e);
                                })
                        })
                        .catch(err => console.log(err));
                })
            }
            )
            .catch(err => console.log(err));

    };
    const onClickBtn = (project, status) => {
        project.status = status;
        API.updateProject(project._id, project)
            .then(response => {
                loadProjects()
            })
            .catch(e => {
                console.log(e);
            })
    }

    const deleteProject = (id) => {
        API.deleteProject(id)
            .then(res => loadProjects())
            .catch(err => console.log(err));
    }

    return (
        <div className='container'>
            { projects.length ? (
                <div className='row'>
                    {projects.map(project => {
                        return (
                            localStorage.getItem('userId') == project.userId ? (
                                <div className="col-md-4 justify-content-center mb-3" key={project._id}>
                                    <div className="card">
                                        <div className="card-header p-2 pb-0">
                                            <h5 className="card-title text-center">{project.name}</h5>
                                        </div>
                                        <div className="card-body p-0 text-center">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Status :
                                                <button className={`btn btn-sm ms-3 ${project.status ? 'btn-success' : 'btn-outline-success'}`} onClick={() => { onClickBtn(project, true) }}>Ongoing</button>
                                                    <button className={`btn btn-sm ms-2 ${!project.status ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => { onClickBtn(project, false) }}>Closed</button>
                                                </li>
                                                <li className="list-group-item">Start Date : <Moment format="YYYY/MM/DD">{project.startDate}</Moment> </li>
                                                <li className="list-group-item">Location : {project.latitude} , {project.longitude}</li>
                                                <li className="list-group-item">Contributors :
                                                    <div className="list-group mt-2">
                                                        {
                                                            project.contributorsDetails.map(contributor => {
                                                                return (
                                                                    <div>
                                                                        <button type="button" className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target={`#${contributor.username}`} key={project._id}>{contributor.username}</button>
                                                                        {/* Contributor Modal */}
                                                                        {project.contributions.map(contribution => {
                                                                            return (
                                                                                contribution.userId == contributor._id ? (
                                                                                    <div className="modal fade" id={contributor.username} tabIndex="-1" aria-labelledby="contributorModal" aria-hidden="true">
                                                                                        <div className="modal-dialog">
                                                                                            <div className="modal-content">
                                                                                                <div className="modal-header">
                                                                                                    <h5 className="modal-title" id="contributorModal">{contributor.username} Contribution </h5>
                                                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                                                </div>
                                                                                                <div className="modal-body">
                                                                                                    <p className="text-start fw-bold mb-0">Message : </p>
                                                                                                    <p className="text-start">{contribution.message ? contribution.message : 'no message'} </p>
                                                                                                    <ul className="text-start ps-0">                                                                                                        <b>
                                                                                                        I want to contribute by :
                                                                                                            </b>
                                                                                                        {contribution.land ? <li className="ms-4">Land </li> : null}
                                                                                                        {contribution.time ? <li className="ms-4">Time</li> : null}
                                                                                                        {contribution.resources ? <li className="ms-4">Resources</li> : null}
                                                                                                    </ul>
                                                                                                    {/* <br />
                                                                                                    <p className="text-start">
                                                                                                        Do you want to delete {contributor.username} from the project ?
                                                                                                        </p> */}
                                                                                                </div>
                                                                                                {/* <div className="modal-footer">
                                                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                                                    <button type="button" className="btn btn-danger" onClick={() => deleteContribution(contribution._id)}>Delete</button>
                                                                                                </div> */}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                ) : null
                                                                            )
                                                                        }
                                                                        )}
                                                                    </div>
                                                                )
                                                            })}
                                                    </div>


                                                </li>
                                                <li className="list-group-item">End Date : <Moment format="YYYY/MM/DD">{project.endDate}</Moment></li>
                                            </ul>
                                        </div>
                                        <div className="card-footer text-center">
                                            <button type="button" className="btn btn-sm btn-danger"
                                                onClick={() => {
                                                    deleteProject(project._id);
                                                }}>Delete</button>
                                        </div>
                                    </div>

                                </div>
                            ) : null
                        );
                    })
                    }
                </div>

            ) : (
                <h3 className="text-center m-3 p-2">No Results to Display</h3>

            )
            }
        </div >
    )
};


export default ProjectCard;