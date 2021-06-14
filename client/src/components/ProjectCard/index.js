import React, { useState } from "react";
import Moment from 'react-moment';
import "./style.css"
import API from "../../utils/API";

function ProjectCard(project) {

    const [projectStatus, setProjectStatus] = useState(project.status);

    const onClickBtn = (project, status) => {

        API.setProjectStatus(project._id, status)
            .then(response => {
                setProjectStatus(status);
            });
    }

    const deleteProject = (id) => {
        API.deleteProject(id)
            .then(res => window.location.reload())
            .catch(err => console.log(err));
    }

    return (
        <div className="col-md-4 justify-content-center mb-3" key={project._id}>
            <div className="card">
                <div className="card-header p-2 pb-0">
                    <h5 className="card-title text-center">{project.name}</h5>
                </div>
                <div className="card-body p-0 text-center">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Status :
                            <button className={`btn btn-sm ms-3 ${projectStatus ? 'btn-success' : 'btn-outline-success'}`} onClick={() => { onClickBtn(project, true) }}>Ongoing</button>
                            <button className={`btn btn-sm ms-2 ${!projectStatus ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => { onClickBtn(project, false) }}>Closed</button>
                        </li>
                        <li className="list-group-item">Start Date : <Moment format="DD/MM/YYYY">{project.startDate}</Moment> </li>
                        <li className="list-group-item">Location : {project.latitude} , {project.longitude}</li>
                        <li className="list-group-item">Contributors :
                            <div className="list-group mt-2">
                                {project.contributions.length > 0 ?
                                    <div>
                                        {project.contributions.map(contribution => {
                                            return (
                                                <div key={contribution._id}>
                                                    <button type="button" className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target={`#id${contribution._id}`} key={contribution._id}>{contribution.user.username}</button>
                                                    {/* Contributor Modal */}
                                                    <div className="modal fade" id={`id${contribution._id}`} tabIndex="-1" aria-labelledby="contributorModal" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title" id="contributorModal">{contribution.user.username} Contribution </h5>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <p className="text-start fw-bold mb-0">Message : </p>
                                                                    <p className="text-start">{contribution.message ? contribution.message : 'no message'} </p>
                                                                    <ul className="text-start ps-0">
                                                                        <b>
                                                                            I want to contribute by :
                                                                        </b>
                                                                        {contribution.land ? <li className="ms-4">Land </li> : null}
                                                                        {contribution.time ? <li className="ms-4">Time</li> : null}
                                                                        {contribution.resources ? <li className="ms-4">Resources</li> : null}
                                                                    </ul>
                                                                    <br />
                                                                    {/* <p className="text-start mb-0">
                                                                        Do you want to delete {contribution.user.username} from the project ?
                                                                    </p> */}
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    {/* <button type="button" className="btn btn-danger" onClick={() => deleteContribution(project._id, contribution._id)}>Delete</button> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    : "n/a"}
                            </div>


                        </li>
                        <li className="list-group-item">End Date : <Moment format="DD/MM/YYYY">{project.endDate}</Moment></li>
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
    )
};


export default ProjectCard;