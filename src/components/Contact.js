import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css"

const Contact = () => {
    return (
        <main>
            <Navbar/>
            <section className="container">
                <h3>Connect With Me</h3>
            <div className="row">
                <div className="col-lg-12">
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="email" 
                                    className="form-control" 
                                    id="first-name" 
                                    placeholder="Name *" 
                                    required="required"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    className="form-control" 
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
                                    className="form-control" 
                                    id="description" 
                                    placeholder="Message *" 
                                    required="required">
                                </textarea>
                            </div>
                        </div>
                        <div class="col-md-12 text-center">
                            <button 
                                id="submit" 
                                className="nav-btn link link-btn"
                                type="submit" 
                                value="Send">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
                </div>
            </div>  
            </section>
        </main>
    );
}
 
export default Contact;