import React from 'react';
import {NavigationBar} from './pages/NavigationBar.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import {ContactsPage} from "./pages/ContactsPage";
import {RegisterLoginPage} from "./pages/RegisterLoginPage";

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBar/>
                <Switch>
                    <Route exact path={'/'}><MainPage/></Route>
                    <Route exact path={'/contacts'}><ContactsPage/></Route>
                    <Route exact={'/register'}><RegisterLoginPage/></Route>
                    <Route exact path={'/exit'}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

