//This component is to Render Search Box. Main Purpose is to search movie

//this component is to render the header navigation of this application. Contains Search Box, Link to Popular and Top Rated Movies, and Responsive Hamburger Button which is generated with React Bootstrap

import React, {Component} from 'react'; 
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
class SearchBox extends Component {

    render() {
        var search = function (e) {
            let searchQuery = document.getElementById('searchForm').value;
            e.preventDefault();
            window.location.href=`/search?title=${searchQuery}`;
        }
      
        return (
            <Form inline onSubmit={search.bind(this)}>
                <InputGroup  className="" >
                    <FormControl
                    placeholder="Search Movies..."
                    aria-label="Search Movies..."
                    aria-describedby="basic-addon2" id="searchForm"
                    />
                    <InputGroup.Append>
                    <Button type="submit" variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>

        )
    }
}

export default SearchBox;