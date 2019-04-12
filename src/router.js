import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import {connect} from 'react-redux'

import MainMenu from './components/MainMenu'
import MainPage from './components/MainPage'
import SettingsPage from './components/SettingsPage'
import AuthPage from './components/AuthPage'

class RouterComp extends Component{
    render(){
        return(
            <Router>
                {localStorage.getItem('login_token') == 'token' && <MainMenu />}

                <div className="container">

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
        users:state.users
    }
}

export default connect(PutStateToProps)(RouterComp); 