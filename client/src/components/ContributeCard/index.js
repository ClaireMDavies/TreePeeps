import React, { useState } from "react";

const styles = {
    cardStyle: {
        width: '60%',
        padding: 0
    }
};


function ContributeCard() {
    const [message, setMessage] = useState("message");
    const sendEmail = () => {
        window.Email.send({
            Host: "smtp.elasticemail.com",
            Username: "treepeeps@hotmail.com",
            Password: "A5AD02A0D6C4DE5041F65A10ABAFD7151952",
            To: 'treepeeps@hotmail.com',
            From: "treepeeps@hotmail.com",
            Subject: "Contribution",
            Body: `<html><h2>Contribution</h2><br><p>${message}</p></html>`
        }).then(
            console.log("Contribution sent"))
    }
    const handleSubmit = e => {
        e.preventDefault();
        sendEmail();
    };

    return (
        <div>
            {/* Contribute Card */}
            <div className="row d-flex justify-content-center mb-3">
                <div className="card" style={styles.cardStyle}>
                    <div className="card-header bg-success p-2 pb-0">
                        <h5 className="card-title text-white "><i className="fab fa-wpforms"></i> Contribution Form</h5>
                    </div>
                    <div className="card-body">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="Land" />
                            <label className="form-check-label" htmlFor="Land">Land</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="Time" />
                            <label className="form-check-label" htmlFor="Time">Time</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="Resources" />
                            <label className="form-check-label" htmlFor="Resources">Resources</label>
                        </div>
                        <div className="input-group mt-3">
                            <span className="input-group-text">Message</span>
                            <input type="text" aria-label="Message" className="form-control" onChange={e => setMessage(e.target.value)} />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="card-footer text-center">
                            <button className="btn btn-danger btn-sm m-2">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};


export default ContributeCard;