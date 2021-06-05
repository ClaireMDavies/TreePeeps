import React, { useState } from "react";
import { Card, CardTitle, Form, Input, Label, Button } from 'reactstrap';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
    cardStyle: {
        width: '60%',
        padding: 0
    }
};


function ContributeCard() {
    const ContributionNotify = () => toast("Your interest is sent to the project creator");
    const [message, setMessage] = useState("Empty message");
    const [form, setForm] = useState({
        Land: '',
        Time: '',
        Resources: ''
    });
    const onChange = (e) => {
        var currentState = form[e.target.name]
        if (!currentState) currentState = e.target.value;
        else currentState = '';
        setForm({ ...form, [e.target.name]: currentState})
        ;
    }
    const sendEmail = () => {
        window.Email.send({
            Host: "smtp.elasticemail.com",
            Username: "treepeeps@hotmail.com",
            Password: "A5AD02A0D6C4DE5041F65A10ABAFD7151952",
            To: 'treepeeps@hotmail.com',
            From: "treepeeps@hotmail.com",
            Subject: "Contribution",
            Body: `<html><h2>Contribution</h2><br><p>I want to contribute by ${form.Land} ${form.Time} ${form.Resources} <br>${message}</p></html>`
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
                <Card style={styles.cardStyle}>
                    <CardTitle><h5><i className="fab fa-wpforms"></i> Contribution Form</h5></CardTitle>
                    <div className="card-body">
                        <div className="form-check">
                            <Input className="form-check-input" type="checkbox" value="Land" name="Land" checked={form.Land} onChange={onChange} />
                            <Label className="form-check-label" htmlFor="Land">Land</Label>
                        </div>
                        <div className="form-check">
                            <Input className="form-check-input" type="checkbox" value="Time" name="Time" checked={form.Time} onChange={onChange} />
                            <Label className="form-check-label" htmlFor="Time">Time</Label>
                        </div>
                        <div className="form-check">
                            <Input className="form-check-input" type="checkbox" value="Resources" name="Resources" checked={form.Resources} onChange={onChange} />
                            <Label className="form-check-label" htmlFor="Resources">Resources</Label>
                        </div>
                        <div className="input-group mt-3">
                            <span className="input-group-text">Message</span>
                            <Input type="text" aria-label="Message" className="form-control" onChange={e => setMessage(e.target.value)} />
                        </div>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <div className="card-footer text-center">
                            <Button color="danger" onClick={ContributionNotify}>Submit</Button>
                        </div>
                    </Form>
                </Card>
            </div>
        </div>
    )
};


export default ContributeCard;