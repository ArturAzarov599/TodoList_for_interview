import React from 'react';
import {NavigationBar} from './pages/NavigationBar.js';
import {BrowserRouter} from 'react-router-dom'
import {AuthContext} from "./context/AuthContext";
import {useAuthorization} from "./myHooks/useAuthozication";
import {RoutesBar} from "./components/RoutesBar";

export const App = () => {

    const {login, logout, email, ready, token, userId} = useAuthorization()
    const isAuth = !!token;

    return (
        <AuthContext.Provider value={{login, logout, email, ready, token, userId}}>
            <div className="App">
                <BrowserRouter>
                    {isAuth && <NavigationBar/>}
                    <RoutesBar isAuth={isAuth}/>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

