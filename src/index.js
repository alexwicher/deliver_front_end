import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Notfound from "./modules/NotFound/notFound";
import Contact from "./modules/contact/contact";


const routing = (
    <Router>
        <div>
            <hr/>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Notfound}/>
            </Switch>
        </div>
    </Router>);


ReactDOM.render(
    routing,
    document.getElementById("root")
);