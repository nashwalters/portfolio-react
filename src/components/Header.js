import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "../style/Header.css"

const Header = () => {
    return ( 
        <main className="jumbotron vh-100 mb-0 bg-color">
            <div className="container vertical-center">
                <h1 className=" display">NASHICA WALTERS</h1>
                <h2 className="display">Full- Stack Web Developer</h2>
                <nav className="nav flex-column">
                    <Link to="/about"><button className="nav-btn">More About Me</button></Link>
                    <Link to="/projects"><button className="nav-btn">See My Work</button></Link>
                    <Link to="/contact"><button className="nav-btn">Contact Me</button></Link>  
                </nav>
                <ul className="nav justify-content-center">
                    <li className="nav-item"><Link to={{ pathname: "https://www.linkedin.com/in/nashica-walters/"}} target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                    <li className="nav-item"><Link to={{ pathname: "https://github.com/nashwalters" }} target="_blank"><i className="fab fa-github"></i></Link> </li>
                    <li className="nav-item"><Link to={{ pathname: "https://www.instagram.com/nbryce_/" }}  target="_blank"><i className="fab fa-instagram"></i></Link> </li>
                </ul>
            </div>
        </main>
    );
}
 
export default Header;