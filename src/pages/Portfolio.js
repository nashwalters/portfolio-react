import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import projects from "../project.json";
import "../style/style.css";

const Portfolio = () => {
    return ( 
        <main>
            <Navbar/>
            <div className="main-title">
                <h3> My Work</h3>
            </div>
            {projects.map(project => {
                return (
                <Project
                    title={project.title}
                    img={project.img}
                    github={project.github}
                    deploy={project.application}
                /> 
                )     
            })
        }
                   
               
        </main> 
    );
}
 
export default Portfolio;