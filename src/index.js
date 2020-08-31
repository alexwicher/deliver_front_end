import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Notfound from "./modules/NotFound/notFound";
import Contact from "./modules/contact/contact";
import UserRegister from "./modules/user/register";
import {Provider} from "react-redux";
import {persistor, store} from "./shared/redux/store";
import UserLogin from "./modules/user/login";
import {PersistGate} from 'redux-persist/integration/react'


const routing = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <div>
                    <hr/>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/user/register" component={UserRegister}/>
                        <Route path="/user/logIn" component={UserLogin}/>
                        <Route path="/user/logOut" component={Contact}/>
                        <Route component={Notfound}/>
                    </Switch>
                </div>
            </Router>
        </PersistGate>
    </Provider>);


ReactDOM.render(routing,
    document.getElementById("root")
);