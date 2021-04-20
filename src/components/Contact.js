import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "../style/s.css"

const Contact = () => {
    return (
        <main>
            <Navbar/>
            <section className="container">
                <div className="row">
                    <div className="col">
                    <div>
                        <h3>Connect With Me</h3>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                    <form>
                    <div className="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    class="form-control" 
                                    id="first-name" 
                                    placeholder="Name *" 
                                    required="required"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    class="form-control" 
                                    id="email" 
                                    placeholder="Email *" 
                                    required="required"
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea 
                                    rows="6" 
                                    name="message" 
                                    class="form-control" 
                                    id="description" 
                                    placeholder="Message *" 
                                    required="required">
                                </textarea>
                            </div>
                        </div>
                        <div class="col-md-12 text-center">
                            <button 
                                id="submit" 
                                class="nav-btn link link-btn"
                                type="submit" value="Send">
                                Send Message
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="contact-info">
                        <h6 class="text-center">Please feel free to contact me regarding work!</h6>
                        <ul class="contact-info-items nav flex-column justify-content-center">
                            <li><i class="fas fa-map-marker-alt box"></i>   : Ontario, Canada </li>
                            <li><i class="fas fa-phone box"></i>   : +1.780.933.0864</li>
                            <li><i class="fas fa-paper-plane box"></i>   : nashicawalters@gmail.com</li>
                            <li><i class="fas fa-globe box"></i>   : github.com/nashwalters</li>
                        </ul>
                        <ul class="nav justify-content-center">
                            <li class="nav-item"><Link to={{ pathname: "https://www.linkedin.com/in/nashica-walters/"}} target="_blank"><i class="fab fa-linkedin-in"></i></Link></li>
                            <li class="nav-item"><Link to={{ pathname: "https://github.com/nashwalters" }} target="_blank"><i class="fab fa-github"></i></Link> </li>
                            <li class="nav-item"><Link to={{ pathname: "https://www.instagram.com/nbryce_/" }}  target="_blank"><i class="fab fa-instagram"></i></Link> </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default Contact;