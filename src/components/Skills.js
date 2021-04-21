import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../style/style.css"

const Skills = () => {
    return ( 
        <main>
            <Navbar/>
            <section className= "container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 ">
                        <h3 className="skills">My Skills</h3>
                        <p>I build creative, responsive web applications using HTML5, CSS3, JavaScript, JQuery, Bootstrap and much more...</p>
                    </div>
                <div className="col-lg-6 pics">
                    <img src={`${process.env.PUBLIC_URL}/img/html5.png`} className="logo" alt="html5 logo"/>
                    <img src={`${process.env.PUBLIC_URL}/img/css3.png`} className="logo" alt="css3 logo"/>
                    <img src={`${process.env.PUBLIC_URL}/img/bootstrap.png`} className="logo img-shape" alt="bootstrap logo"/>
                    <img src={`${process.env.PUBLIC_URL}/img/bulma.png`} className="logo img-shape" alt="bulma logo"/>
                    <img src={`${process.env.PUBLIC_URL}/img/javascript.png`} className="logo" alt="js logo"/>
                    <img src={`${process.env.PUBLIC_URL}/img/jquery.jpg`} className="logo" alt="jquery logo"/>
                    <img src={`${process.env.PUBLIC_URL}/img/api1.png`} className="logo img-shape" alt="api logo"/>
                    <img src={`${process.env.PUBLIC_URL}/img/node.png`} className="logo" alt="node logo"/>
                    <img src={`${process.env.PUBLIC_URL}/img/heroku.png`} className="logo img-shape" alt="heroku logo"/>
                    <img src={`${process.env.PUBLIC_URL}/img/mysql.png`} className="logo" alt="mysql logo"/>
                    <img src={`${process.env.PUBLIC_URL}/img/sequelize-logo.png`} className="logo img-shape" alt="sequelize logo"/>
                    <img src={`${process.env.PUBLIC_URL}/img/handlebars.png`} className="logo img-shape" alt="handlebars logo"/>
                    <img src={`${process.env.PUBLIC_URL}/img/Mongo.gif`} className="logo img-shape" alt="mongo logo"/>
                    <img src={`${process.env.PUBLIC_URL}/img/react.png`} className="logo img-shape" alt="react logo"/>
                </div>
                </div>
            </section>
            <Footer />          
        </main>
    );
}
 
export default Skills;