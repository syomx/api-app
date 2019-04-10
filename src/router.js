import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import {connect} from 'react-redux'

import MainMenu from './components/MainMenu'
import MainPage from './components/MainPage'
import SettingsPage from './components/SettingsPage'
import AuthPage from './components/AuthPage'

class RouterComp extends Component{
    Login(){
        localStorage.setItem('login_token','token')
        window.location = "/";
    }
    Logout(){
        localStorage.setItem('login_token',null)
        window.location = "/";
    }
    Check(){
        console.log(localStorage.getItem('login_token'))
    }
    render(){
        return(
            <Router>
                { localStorage.getItem('login_token') == 'token' && <MainMenu /> }

                <div>

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
                </div>
            </Router>
        )
    };
}

const PutStateToProps = (state) =>{
    return {
        auth:state.auth
    }
}

export default connect(PutStateToProps)(RouterComp); 