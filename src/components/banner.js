import React from 'react'
import {Link} from 'react-router-dom'
import {Nav, Navbar, Button} from 'react-bootstrap';

class banner extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand> Transport </Navbar.Brand>
                <Link to="Main"> Main </Link>
                <Link to='scenicSpot'> scenicSpot </Link>
                <Link to='scenicSpot'> scenicSpot</Link>
            </Navbar>
        );
    }
}

export default banner;