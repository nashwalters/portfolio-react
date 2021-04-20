import React from 'react';

const Header = () => {
    return ( 
        <main className="jumbotron vh-100 mb-0 bg-color">
            <div className="container vertical-center">
                <h1 className="display-4 display">NASHICA WALTERS</h1>
                <h2 className="display">Full- Stack Web Developer</h2>
                <nav className="nav flex-column">
                    <a className="nav-link" href="#"><button className="nav-btn">More About Me</button></a>
                    <a className="nav-link" href="#"><button className="nav-btn">See My Work</button></a>
                    <a className="nav-link" href="#"><button class="nav-btn">Contact Me</button></a>
                </nav>
                <ul class="nav justify-content-center">
                    <li class="nav-item"><a class="nav-link" href="https://www.linkedin.com/in/nashica-walters/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                    <li class="nav-item"><a class="nav-link" href="https://github.com/nashwalters" target="_blank"><i class="fab fa-github"></i></a> </li>
                    <li class="nav-item"><a class="nav-link" href="https://www.instagram.com/nbryce_/" target="_blank"><i class="fab fa-instagram"></i></a> </li>
                </ul>
            </div>
        </main>
    );
}
 
export default Header;