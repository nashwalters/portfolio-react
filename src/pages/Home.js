import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header"
import "../style/style.css"

const Home = () => {
    return ( 
        <main >
            <div className="jumbotron vh-100 mb-0 bg-color">
                <Header/>
            </div>
        </main>
    );
}
 
export default Home;