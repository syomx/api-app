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
        localStorage.setItem('login_token','')
        window.location = "/";
    }
    Check(){
        console.log('token:')
        console.log(localStorage.getItem('login_token'))
        console.log('users:')
        console.log(this.props.users )
    }
    render(){
        return(
            <Router>

                <div>
                    <Link to="/">Main page</Link>
                    <Link to="/settings">Settings</Link>
                    <div>auth: {this.props.auth}</div>
                    <button onClick={() => this.Login()}>Login</button>
                    <button onClick={() => this.Logout()}>Logout</button>
                    <button onClick={() => this.Check()}>Check</button>
                </div>

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
        auth:state.auth,
        users:state.users
    }
}

export default connect(PutStateToProps)(RouterComp); 