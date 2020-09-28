import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact from "./modules/contact/contact";
import UserRegister from "./modules/user/register";
import {Provider} from "react-redux";
import {persistor, store} from "./shared/redux/store";
import UserLogin from "./modules/user/login";
import {PersistGate} from 'redux-persist/integration/react'
import PasswordResetConfirm from "./modules/user/passwordResetConfirm";
import Notfound from "./modules/NotFound/notFound";
import Profile from "./modules/user/profile";

const routing = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <div>
                    <hr/>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/user/register" component={UserRegister}/>
                        <Route exact path="/user/logIn" component={UserLogin}/>
                        <Route exact path='/password/reset/confirm/:uid/:token' component={PasswordResetConfirm}/>
                        <Route exact path='/user/:uid' component={Profile}/>
                        <Route component={Notfound}/>
                    </Switch>
                </div>
            </Router>
        </PersistGate>
    </Provider>);


ReactDOM.render(routing,
    document.getElementById("root")
);