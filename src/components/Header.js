//this component is to render the header navigation of this application

import React, {Component} from 'react'; 
import {
    withRouter,
    Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
class Header extends Component {

    render() {
        var search = function (e) {
            let searchQuery = document.getElementById('searchForm').value;
            e.preventDefault();
            window.location.href=`/search?title=${searchQuery}`;
        }
      
        return (
        <header>
            <div className="container ">
                {/* <Link className="brand-name" to="/">CouchPotato</Link> */}
                {/* <nav>
                    <a href="/top_rated">Top Rated</a>
                    <a href="/popular">Popular</a>
                    <input type="text" placeholder="Search.."></input>
                </nav> */}
                <Navbar expand="md" className="flex navbar-dark">
                    <Navbar.Brand className="brand-name" href="/">CouchPotato</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/top_rated">Top Rated</Nav.Link>
                            <Nav.Link href="/popular">Popular</Nav.Link>
                        </Nav>
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
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>

        )
    }
}

export default withRouter(Header);