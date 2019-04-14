import React,{Component} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import ThisUser from './ThisUser'

class MainMenu extends Component{
    // ClearSession(){
    //     localStorage.clear()
    // }
    render(){
        return(
            <div className="main_nav">
                <div className="top_menu">
                    <div className="container">
                        <Link className="app_logo" to="/">React app</Link>
                        {/* <div className="item" onClick={() => this.ClearSession()}>Clear session</div> */}
                        <div style={{float:'right'}}>
                            <ThisUser users={this.props.users}/>
                        </div>
                    </div>
                </div>
                <nav className="nav bottom_menu">
                    <div className="container">
                        <Link className="nav-link" to="/">Api's</Link>
                        <Link className="nav-link" to="/settings">Users</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

const PutStateToProps = (state) =>{
    return {
        users:state.users,
        thisUserId:state.thisUserId,
        api:state.api
    }
}

export default connect(PutStateToProps)(MainMenu); 