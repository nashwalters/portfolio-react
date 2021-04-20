import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className="footer">
            <h6>Lets Link Up!</h6>
        <ul className="nav justify-content-center">
            <li className="nav-item"><Link to={{ pathname: "https://www.linkedin.com/in/nashica-walters/"}} target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
            <li className="nav-item"><Link to={{ pathname: "https://github.com/nashwalters" }} target="_blank"><i className="fab fa-github"></i></Link> </li>
            <li className="nav-item"><Link to={{ pathname: "https://www.instagram.com/nbryce_/" }}  target="_blank"><i className="fab fa-instagram"></i></Link> </li>
        </ul>
        <h6> &copy;copyright 2021</h6>
        </div>
        
    );
}
 
export default Footer;





