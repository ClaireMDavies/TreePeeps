import React from "react";
import ProjectForm from "../components/ProjectForm";

const Modal = () => {
    return (

        <div className="modal fade" id="Modal" tabindex="-1" aria-labelledby="ProjectModal" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ProjectModal">New Project Form</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ProjectForm />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success">Create New Project</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Modal;