import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";


const Project = (props) => {
    return (
        <div>
            <h3 className="center">{props.title}</h3>
                <img className="gallery" src={props.img} alt={props.title}/>
            <div className="text-center">
                <a href= {props.github} target="_blank" rel="noreferrer"><button className="nav-btn link link-btn">Learn More</button></a>
                <a href= {props.deploy} target="_blank" rel="noreferrer"><button className="nav-btn link link-btn">Visit App</button></a>
            </div>
        </div>      
    );
}
 
export default Project;