/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import SignIn from "./login/SignIn";
import SignUp from "./login/SignUp";
import {PrivateRoute} from "./login/PrivateRoute";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={props => <SignIn {...props}/>}/>
            <Route exact path="/register" render={props => <SignUp {...props}/>}/>
            <Route exact path="/auth" render={props => <AuthLayout {...props} />}/>
            <PrivateRoute exact path="/admin/index" component={AdminLayout}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
