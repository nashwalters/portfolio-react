import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

const Skills = () => {
    return ( 
        <main>
            <Navbar/>
            <section className= "container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 ">
                        <h3>My Skills</h3>
                        <p>I build creative, responsive web applications using HTML5, CSS3, JavaScript, JQuery, Bootstrap and much more...</p>
                    </div>
                <div className="col-lg-6">
                    <img src="" className="logo" alt="html5 logo"/>
                    <img src="" className="logo" alt="css3 logo"/>
                    <img src="" className="logo img-shape" alt="bootstrap logo"/>
                    <img src="" className="logo img-shape" alt="bulma logo"/>
                    <img src="" className="logo" alt="html5 logo"/>
                    <img src="" className="logo" alt="jquery logo"/>
                    <img src="" className="logo img-shape" alt="api logo"/>
                    <img src="" className="logo" alt="node logo"/>
                    <img src="" className="logo" alt="mysql logo"/>
                    <img src="" className="logo img-shape" alt="sequelize logo"/>
                    <img src="" className="logo img-shape" alt="handlebars logo"/>
                </div>
                </div>
            </section>          
        </main>
    );
}
 
export default Skills;