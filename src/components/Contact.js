import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css"

const Contact = () => {
    return (
        <main>
            <Navbar/>
            <section className="container">
            <div className="row">
                <div className="col">
                    <div className="main-title">
                        <h3>Connect With Me</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <form id="contact-form">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="form-group">
                                 <input type="text" name="name" className="form-control" id="first-name" placeholder="Name *" required="required"/>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-group">
                                 <input type="email" name="email" className="form-control" id="email" placeholder="Email *" required="required"/>
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="form-group">
                                   <textarea rows="6" name="message" className="form-control" id="description" placeholder="Message *" required="required"></textarea>
                              </div>
                           </div>
                            <div className="col-md-12 text-center">
                                <button id="submit" className="nav-btn link link-btn"type="submit" value="Send">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="contact-info">
                        <h6 className="text-center">Please feel free to contact me regarding work!</h6>
                        <ul className="contact-info-items nav flex-column justify-content-center">
                            <li><i className="fas fa-map-marker-alt box"></i>   : Ontario, Canada </li>
                            <li><i className="fas fa-phone box"></i>   : +1.780.933.0864</li>
                            <li><i className="fas fa-paper-plane box"></i>   : nashicawalters@gmail.com</li>
                            <li><i className="fas fa-globe box"></i>   : github.com/nashwalters</li>
                        </ul>
                    </div>
                </div>   
            </div>
            </section>
            <Footer />
        </main>   
    );
}
 
export default Contact;