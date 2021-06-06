import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

const SearchForm = () => {
    return (

        <form className="d-flex">
            <InputGroup>
                <Input type="text" name="message" id="message" placeholder="Enter Location..." />
                <InputGroupAddon addonType="append">
                    <Button type="submit" value="submit" color="success">Search</Button>
                </InputGroupAddon>
            </InputGroup>
        </form>

    );
}

export default SearchForm;