import React from "react";
import {Route, Switch} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {ContactsPage} from "../pages/ContactsPage";
import {RegisterLoginPage} from "../pages/RegisterLoginPage";
import Redirect from "react-router-dom/es/Redirect";

export const RoutesBar = ({isAuth}) => {

    if (isAuth) {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path={'/'}><MainPage/></Route>
                    <Route exact path={'/contacts'}><ContactsPage/></Route>
                </Switch>
            </React.Fragment>
        )
    } else {
        return (
            <Switch>
                <Route exact path={''}>
                    <RegisterLoginPage/>
                    <Redirect to={''}/>
                </Route>
            </Switch>
        )
    }


}
