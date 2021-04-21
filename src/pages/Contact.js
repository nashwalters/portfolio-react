import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css"

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const info = { name, email, body};

        fetch('http://localhost:3000/contact/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info)
        }).then(() => {
           setName("");
           setEmail("");
           setBody("")
        })
  }
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
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="form-group">
                                    <input 
                                        type="text" 
                                        value= {name}
                                        className="form-control" 
                                        placeholder="Name *" 
                                        required
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        value={email}
                                        className="form-control" 
                                        placeholder="Email *" 
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea 
                                        rows="6" 
                                        value={body}
                                        className="form-control" 
                                        onChange={(e) => setBody(e.target.value)}
                                        placeholder="Message *"
                                        required >
                                    </textarea>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <button 
                                    className="nav-btn link link-btn">
                                    Send Message
                                </button>
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