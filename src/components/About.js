import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css"

const About = () => {
    return (
        <main>
            <Navbar />
            <section className= "container ">
                <div className="row justify-content-between">
                    <div className="col-lg-4 text-center">
                        <img src={`${process.env.PUBLIC_URL}/img/nash1.jpg`} className="photo" alt="nash"/>
                    </div>
                    <div className="col-lg-7">
                        <h3 className="text-center">About Me</h3>
                        <h6 className="text-center text"> I'm Nashica, an Ontario based Junior Full- Stack Developer.</h6>
                        <p>I create beautiful and functional websites. I love working in the area of responsive design.</p>
                        <p>My unique background in the Hospitality and Retail Management gives me an edge as I know the importance of delivering a superior product with excellent customer service. </p>
                        <p>Interested in working together? Take a look at my most recent projects. Please feel free to contact me for projects and collaborations. </p>
                    <div className="text-center">
                        <Link to={`${process.env.PUBLIC_URL}img/Nashica -Walters-Resume.docx.pdf`} target="_blank"><button class="nav-btn link link-btn">Check out my CV</button></Link>
                        <Link to="/projects"><button className=" nav-btn link link-btn">Projects</button></Link>
                        <Link to="/contact"><button className=" nav-btn link link-btn">Contact Me</button></Link>
                    </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
 
export default About;