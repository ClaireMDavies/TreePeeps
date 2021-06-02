import React from "react";
import { FormGroup, Input, Button } from 'reactstrap';

const SearchForm = () => {
    return (

        <form className="d-flex">
            <FormGroup>
                <Input type="text" name="message" id="message" placeholder="search-by-location..." />
            </FormGroup><br></br>  
            <Button type="submit" value="submit" color="success">Search</Button>
        </form>

    );
}

export default SearchForm;