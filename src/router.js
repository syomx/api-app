import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import {connect} from 'react-redux'

import MainMenu from './components/MainMenu'
import MainPage from './components/MainPage'
import SettingsPage from './components/SettingsPage'
import AuthPage from './components/AuthPage'
import ApiDitailPage from './components/ApiDitailPage'

class RouterComp extends Component{
    render(){
        const comp = <ApiDitailPage/>;
        return(
            
            <Router>
                {localStorage.getItem('login_token') == 'token' && <MainMenu />}
                    <Route exact path="/" render={() => (
                        (localStorage.getItem('login_token') == 'token') ? (
                            <MainPage/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/settings" render={() => (
                        (localStorage.getItem('login_token') == 'token') ? (
                            <SettingsPage/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/login" render={() => (
                        (localStorage.getItem('login_token') == 'token') ? (
                            <Redirect to="/"/>
                        ) : (
                            <AuthPage/>
                        )
                    )}/>
                    <Route exact path="/api/:id" render={(id) => (
                        (localStorage.getItem('login_token') == 'token') ? (
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