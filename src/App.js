import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header"

function App() {
    return (
        <Router>
            <div className="App">
            <div className="Content">
                <Switch>
                    <Route exact path="/">
                        <Header/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/skills">
                        <Skills/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
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
