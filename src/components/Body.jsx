import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import About from './About';


class Body extends Component {
    state = {  } 
    render() { 
        return (
            <Container>
                <Router>
                    <Routes>
                        {/* <Route path="/" element={<Home />} /> */}
                        {/* <Route path="/About" element={<About />} /> */}
                        <Route path="/" exact Component={Home} />
                        <Route path="/About" exact Component={About} />


                    </Routes>

                </Router>

            </Container>
        );
    }
}
 
export default Body;