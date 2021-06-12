import React, { useState, useEffect } from "react";
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

        /*
        API.deleteProject(id)
            .then(res => loadProjects())
            .catch(err => console.log(err));
            */
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

                                { project.contributions.length > 0 ? 
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Contributor</th>
                                            <th scope="col">Message</th>
                                            <th scope="col">Land</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Resources</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {project.contributions.map(contribution => {
                                            return (
                                                <tr key={contribution._id}>
                                                    <td>{contribution.user.username}</td>
                                                    <td>{contribution.message}</td>
                                                    <td>{contribution.land ? "YES" : "NO"}</td>
                                                    <td>{contribution.time ? "YES" : "NO"}</td>
                                                    <td>{contribution.resources ? "YES" : "NO"}</td>
                                                </tr>
                                            )
                                        }
                                        )}
                                    </tbody>
                                </table>
                                : "n/a"}

                            </div>

                        </li>
                        <li className="list-group-item">End Date : <Moment format="DD/MM/YYYY">{project.endDate}</Moment></li>
                    </ul>
                </div>
            </div>

        </div>
    )
};


export default ProjectCard;