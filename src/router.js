import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import MainMenu from './components/MainMenu'
import MainPage from './components/MainPage'
import SettingsPage from './components/SettingsPage'
import AuthPage from './components/AuthPage'
import ApiDitailPage from './components/ApiDitailPage'

import CheckToken from './components/CheckToken'

class RouterComp extends Component{
    render(){
        return(
            
            <Router>
                {<CheckToken /> && <MainMenu />}
                <Route exact path="/" render={() => (
                    (<CheckToken/>) ? (
                        <MainPage/>
                    ) : (
                        <Redirect to="/login"/>
                    )
                )}/>
                <Route exact path="/settings" render={() => (
                    (<CheckToken/>) ? (
                        <SettingsPage/>
                    ) : (
                        <Redirect to="/login"/>
                    )
                )}/>
                <Route exact path="/login" render={() => (
                    (<CheckToken/>) ? (
                        <Redirect to="/"/>
                    ) : (
                        <AuthPage/>
                    )
                )}/>
                <Route exact path="/api/:id" render={(id) => (
                    (<CheckToken/>) ? (
                        <ApiDitailPage linkParams={id}/>
                    ) : (
                        <Redirect to="/login"/>
                    )
                )}/>
            </Router>
        )
    };
}

export default RouterComp;