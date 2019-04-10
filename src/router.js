import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import { logining } from './store/actions';

import MainPage from './components/MainPage'
import SettingsPage from './components/SettingsPage'
import AuthPage from './components/AuthPage';

class RouterComp extends Component{
    state = {
        loggedIn: localStorage.getItem('login_token')
    }
    getLogin(){
        localStorage.setItem('login_token', true)
        this.setState({
            loggedIn:true
        })
    }
    Logout(){
        localStorage.setItem('login_token', false)
        this.setState({
            loggedIn:false
        })
    }

    render(){
        return(
            <Router>
                <div>
                    <Link to="/">Main page</Link>
                    <Link to="/settings">Settings</Link>
                    <div>auth: {this.props.auth}</div>
                    <button onClick={() => this.getLogin(this.props)}>login</button>
                    <button onClick={() => this.Logout(this.props)}>Logout</button>
                </div>
                <div>
                    <Route exact path="/" render={() => (
                        this.state.loggedIn ? (
                            <MainPage/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/settings" render={() => (
                        this.state.loggedIn ? (
                            <SettingsPage/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/login" component={AuthPage} />
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