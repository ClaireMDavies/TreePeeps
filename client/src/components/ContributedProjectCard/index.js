import React from "react";
import Moment from 'react-moment';
import "./style.css";

function ContributedProjectCard(project) {

    return (
        <div className="col-md-4 d-flex justify-content-center mb-3" key={project._id}>
            <div className="card card-style" >
                <div className="card-header p-2 pb-0">
                    <h5 className="card-title text-center">{project.name}</h5>
                </div>
                <div className="card-body p-0 text-center">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Status :
                            <button className={`btn btn-sm ms-3 ${project.status ? 'btn-success' : 'btn-outline-success'}`} >Ongoing</button>
                            <button className={`btn btn-sm ms-2 ${!project.status ? 'btn-danger' : 'btn-outline-danger'}`} >Closed</button>
                        </li>
                        <li className="list-group-item">Start Date : <Moment format="DD/MM/YYYY">{project.startDate}</Moment></li>
                        <li className="list-group-item">End Date : <Moment format="DD/MM/YYYY">{project.endDate}</Moment></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default ContributedProjectCard;