import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav mx-auto">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>  
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;