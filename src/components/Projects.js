import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';


const Projects = () => {
    return ( 
        <main>
            <Navbar/>
            <section className="container">
                <div className="row">
                    <div className="col">
                        <div className="main-title">
                            <h3> My Work</h3>
                        </div>
                    </div>
                </div>
                <div className="row" id="gallery">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <h3 className="center">SPLI₮ISH</h3>
                        <img className="w-100" src={`${process.env.PUBLIC_URL}/img/splitish.png`} alt="splitish app"/>
                    <div className="text-center">
                        <Link to= {{ pathname:"https://github.com/R-A-exe/Group5-Project2" }} target="_blank"><button className="nav-btn link link-btn">Learn More</button></Link>
                        <Link to= {{ pathname:"https://project2nashfaroukroy.herokuapp.com/"}} target="_blank"><button className="nav-btn link link-btn">Visit App</button></Link>
                    </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <h3 className="center">Eat-Da-Burger</h3>
                        <img className="w-100" src={`${process.env.PUBLIC_URL}/img/burger.png`} alt="eat-da-burger-app"/>
                    <div className="text-center">
                        <Link to= {{ pathname:"https://github.com/nashwalters/burgers" }} target="_blank"><button className="nav-btn link link-btn">Learn More</button></Link>
                        <Link to= {{ pathname: "https://sheltered-springs-21872.herokuapp.com/"}} target="_blank"><button className="nav-btn link link-btn">Visit App</button></Link>
                    </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <h3 className="center">Note Taker</h3>
                        <img className="w-100" src={`${process.env.PUBLIC_URL}/img/note-taker.gif`} alt="note taker app"/>
                    <div className="text-center">
                        <Link to= {{ pathname:"https://github.com/nashwalters/note-taker-expressjs"}} target="_blank"><button className="nav-btn link link-btn">Learn More</button></Link>
                        <Link to= {{ pathname:"https://secret-island-62587.herokuapp.com/"}} target="_blank"><button className="nav-btn link link-btn">Visit App</button></Link>
                    </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <h3 className="center">Team Generator</h3>
                        <img className="w-100" src={`${process.env.PUBLIC_URL}/img/userprompt.gif`}alt="team generator app"/>
                    <div className="text-center">
                        <Link to= {{ pathname: "https://github.com/nashwalters/eng-team-generator"}} target="_blank"><button className="nav-btn link link-btn">Learn More</button></Link>
                        <Link to= {{ pathname: "https://github.com/nashwalters/eng-team-generator/blob/main/output/team.html"}} target="_blank"><button className="nav-btn link link-btn">Visit App</button></Link>
                    </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <h3 className="center">Vibe Cannon</h3>
                        <img className="w-100" src={`${process.env.PUBLIC_URL}/img/vc.png`} alt="vibe cannon app"/>
                    <div className="text-center">
                        <Link to= {{ pathname: "https://github.com/CodyYuill/Vibe-Cannon"}} target="_blank"><button className="nav-btn link link-btn">Learn More</button></Link>
                        <Link to= {{ pathname: "https://codyyuill.github.io/Vibe-Cannon/"}} target="_blank"><button className="nav-btn link link-btn">Visit App</button></Link>
                    </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <h3 className="center">Weather DashBoard</h3>
                        <img className="w-100" src={`${process.env.PUBLIC_URL}/img/weather.png`} alt="weather app"/>
                    <div className="text-center">
                        <Link to= {{ pathname: "https://github.com/nashwalters/weather-dash"}} target="_blank"><button className="nav-btn link link-btn">Learn More</button></Link>
                        <Link to= {{ pathname: "https://nashwalters.github.io/weather-dash/"}}target="_blank"><button className="nav-btn link link-btn">Visit App</button></Link>
                    </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <h3 className="center">Work Day Scheduler</h3>
                        <img className="w-100"src={`${process.env.PUBLIC_URL}/img/wds.png`} alt="scheduler app"/>
                    <div className="text-center">
                        <Link to= {{ pathname: "https://github.com/nashwalters/day-scheduler"}} target="_blank"><button className="nav-btn link link-btn">Learn More</button></Link>
                        <Link to= {{ pathname: "https://nashwalters.github.io/day-scheduler/" }} target="_blank"><button className="nav-btn link link-btn">Visit App</button></Link>
                    </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <h3 className="center">Javascript Quiz</h3>
                        <img className="w-100" src={`${process.env.PUBLIC_URL}/img/quiz.png`} alt="quiz app"/>
                    <div className="text-center">
                        <Link to= {{ pathname: "https://github.com/nashwalters/js-quiz"}}  target="_blank"><button className="nav-btn link link-btn">Learn More</button></Link>
                        <Link to= {{ pathname: "https://nashwalters.github.io/js-quiz/"}}  target="_blank"><button className="nav-btn link link-btn">Visit App</button></Link>
                    </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <h3 className="center">Password Generator</h3>
                        <img className="w-100" src={`${process.env.PUBLIC_URL}/img/passwordg.png`} alt="password generator app"/>
                    <div className="text-center">
                        <Link to= {{ pathname: "https://github.com/nashwalters/js-password-generator"}} target="_blank"><button className="nav-btn link link-btn">Learn More</button></Link>
                        <Link to= {{ pathname: "https://nashwalters.github.io/js-password-generator/"}} target="_blank"><button className="nav-btn link link-btn">Visit App</button></Link>
                    </div>
                    </div>
                </div>
            </section>
        </main> 
    );
}
 
export default Projects;