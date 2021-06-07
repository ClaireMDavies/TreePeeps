import React, { useState, useEffect } from "react";
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import API from "../../utils/API"

const SearchForm = () => {
    const [city, setCity] = useState('')
    const [location, setLocation] = useState({ lat: "", lng: ""});
    useEffect(() => {
        if (!city) {
            return;
        }
        API.convert(city)
            .then(results => {
                setLocation({ lat: results.data.results[0].geometry.location.lat, lng: results.data.results[0].geometry.location.lng });
                console.log(location);
            })
            .catch(err => console.log(err));
    }, [city]);

    function handleChangeCity(event) {
        setCity(event.target.value);
    }

    return (

        <form className="d-flex">
            <InputGroup>
                <Input type="text" name="message" id="message" placeholder="Enter Location..." onChange={handleChangeCity} />
                <InputGroupAddon addonType="append">
                    <Button type="submit" value="submit" color="success">Search</Button>
                </InputGroupAddon>
            </InputGroup>
        </form>

    );
}

export default SearchForm;