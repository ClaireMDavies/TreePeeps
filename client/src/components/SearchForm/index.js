import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

const SearchForm = (props) => {

    return (

        <form className="d-flex">
            <InputGroup>
                <Input type="text" name="message" id="location" placeholder="Enter Location..." onChange={props.onChange} />
                <Input type="text" name="message" id="distance" placeholder= "Max distance (km)" onChange={props.onChangeDistance} />
                <InputGroupAddon addonType="append">
                    <Button type="submit" value="submit" color="success" onClick={props.onClick}>Search</Button>
                </InputGroupAddon>
            </InputGroup>
        </form>

    );
}

export default SearchForm;