import React,{Component} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class MainMenu extends Component{
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
        console.log(this.props )
    }

    render(){
        return(
            <div>
                <Link to="/">Main page</Link>
                <Link to="/settings">Settings</Link>
                <div>auth: {this.props.auth}</div>
                <button onClick={() => this.Login()}>Login</button>
                <button onClick={() => this.Logout()}>Logout</button>
                <button onClick={() => this.Check()}>Check</button>
            </div>
        )
    }
}

const PutStateToProps = (state) =>{
    return {
        auth:state.auth,
        users:state.users
    }
}

export default connect(PutStateToProps)(MainMenu); 