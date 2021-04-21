import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";


function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
            <div className="Content">
                <Switch>
                    <Route exact path="/">
                        <Header />
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/skills">
                        <Skills/>
                    </Route>
                    <Route path="/projects">
                        <Project/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                </Switch>
            </div>
            </div>
        </Router>
    );
}

export default App;
