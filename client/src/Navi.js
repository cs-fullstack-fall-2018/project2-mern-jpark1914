import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Navi extends React.Component {
    render() {
        return (
            <div>
                <Nav className="group">
                    <NavLink className="navLinks" href="#">Link</NavLink> <NavLink className="navLinks" href="#">Link</NavLink> <NavLink className="navLinks" href="#">Another Link</NavLink> <NavLink className="navLinks" disabled href="#">Disabled Link</NavLink>
                </Nav>
            </div>
        );
    }
}