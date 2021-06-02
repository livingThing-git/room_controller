import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import Preferences from "./components/Preferences/Preferences";
import Dashboards from "./components/Dashboards/Dashboards";
import LoginIn from "./components/LogingIn/LogingIn";
import useToken from "./components/App/useToken";
//don't forget run: node server.js
function App() {
    const {token, setToken} = useToken()

    if (!token) {
        return <LoginIn setToken={setToken}/>
    }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboards">
                        <Dashboards/>
                    </Route>
                    <Route path="/preferences">
                        <Preferences/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
/*references:
* https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
* */
