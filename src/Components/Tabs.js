import React from "react"
import { Link, Switch, Route} from 'react-router-dom';
import Home from "./Home";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Resume from "./Resume";


function Tabs() {
    return (
        <div >
            <div2 className="infoRight">
                <p>
                    <Link to="/">Home</Link>
                </p>
               /* <p>
                    <Link to="/projects">Projects</Link>
                </p>
                <p>
                    <Link to="/about">About Me</Link>
                </p>


                */
                <p>
                    <Link to="/resume">Resume</Link>
                </p>
            </div2>

            <Switch>
                <Route exact path="/" component={Home} />
                //<Route exact path="/projects" component={Projects} />
               // <Route exact path="/about" component={AboutMe} />
                <Route exact path="/resume" component={Resume}/>
            </Switch>
        </div>
    )
}

export default Tabs