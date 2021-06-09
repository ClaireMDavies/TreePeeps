import React, { useState } from "react";
import { Card, CardTitle, Form, Input, Label, Button } from 'reactstrap';
import API from "../../utils/API";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
    cardStyle: {
        width: '60%',
        padding: 0
    }
};

function ContributeCard() {
    const ContributionNotify = () => toast("Your interest is sent to the project creator");
    const [form, setForm] = useState({
        land: '',
        time: '',
        resources: '',
        message: ''
    });
    const onChange = (e) => {
        var currentState = form[e.target.value]
        if (!currentState) currentState = e.target.value;
        else currentState = '';
        setForm({ ...form, [e.target.value]: currentState });
        console.log(form);
    }
    const onChangeMessage = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
        API.saveContribution({
            land: form.land,
            time: form.time,
            resources: form.resources,
            message: form.message
        })
            .then(() => setForm({
                land: '',
                time: '',
                resources: '',
                message: ''
            }))
            .catch(err => console.log(err));
    }

    return (
        <div>
            {/* Contribute Card */}
            <div className="row d-flex justify-content-center mt-3 mb-3">
                <Card style={styles.cardStyle}>
                    <CardTitle><h5 className="ps-3 pt-3"><i className="fab fa-wpforms"></i> Contribution Form</h5></CardTitle>
                    <div className="card-body">
                        <div className="form-check">
                            <Input className="form-check-input" type="checkbox" value="land" name="Land" checked={form.Land} onChange={onChange} />
                            <Label className="form-check-label" htmlFor="Land">Land</Label>
                        </div>
                        <div className="form-check">
                            <Input className="form-check-input" type="checkbox" value="time" name="Time" checked={form.Time} onChange={onChange} />
                            <Label className="form-check-label" htmlFor="Time">Time</Label>
                        </div>
                        <div className="form-check">
                            <Input className="form-check-input" type="checkbox" value="resources" name="Resources" checked={form.Resources} onChange={onChange} />
                            <Label className="form-check-label" htmlFor="Resources">Resources</Label>
                        </div>
                        <div className="input-group mt-3">
                            <span className="input-group-text">Message</span>
                            <Input type="text" aria-label="Message" className="form-control" name='message' onChange={onChangeMessage} />
                        </div>
                    </div>
                    <Form >
                        <div className="card-footer text-center">
                            <Button color="danger" onClick={(event) => { handleSubmit(event); ContributionNotify() }}>Submit</Button>
                        </div>
                    </Form>
                </Card>
            </div>
        </div>
    )
};


export default ContributeCard;