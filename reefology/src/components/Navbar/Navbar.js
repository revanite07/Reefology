import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <img className="logo" src="./assets/km-logo.png" height="65"></img>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="https://github.com/revanite07">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/kelan-moffatt-863015173/">LinkedIn</a></li>
                        <li><a>Email</a></li>
                    </ul>
                </div>
            </nav>

        )
    }
}
export default Navbar;