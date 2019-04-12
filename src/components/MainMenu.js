import React,{Component} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class MainMenu extends Component{
    Logout(){
        localStorage.setItem('login_token','')
        window.location = "/";
    }
    Check(){
        console.log('token:')
        console.log(localStorage.getItem('login_token'))
        console.log('users:')
        console.log(this.props)
        console.log('session:')
        console.log(localStorage.getItem('users'))
    }
    ClearSession(){
        localStorage.clear()
    }
    render(){
        return(
            <div className="main_nav">
                <div className="top_menu">
                    <div className="container">
                        <div className="item" onClick={() => this.Logout()}>Logout</div>
                        <div className="item" onClick={() => this.Check()}>Check</div>
                        <div className="item" onClick={() => this.ClearSession()}>Clear session</div>
                    </div>
                </div>
                <nav className="nav bottom_menu">
                    <div className="container">
                        <Link className="nav-link active" to="/">Main page</Link>
                        <Link className="nav-link" to="/settings">Settings</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

const PutStateToProps = (state) =>{
    return {
        auth:state.auth,
        users:state.users,
    }
}

export default connect(PutStateToProps)(MainMenu); 