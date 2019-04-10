import React,{Component} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as  Link } from "react-router-dom";

class MainMenu extends Component{
    render(){
        return(
            <div>
                <Link to="/">Main page</Link>
                <Link to="/settings">Settings</Link>
                <div>auth: {this.props.auth}</div>
                <button onClick={() => this.Login()}>Login</button>
                <button onClick={() => this.Logout()}>Logout</button>
                <button onClick={this.Check}>Check</button>
            </div>
        )
    }
}

const PutStateToProps = (state) =>{
    return {
        auth:state.auth
    }
}

export default connect(PutStateToProps)(MainMenu); 