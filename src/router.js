import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from './components/MainPage'
import SettingsPage from './components/SettingsPage'

class RouterComp extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Link to="/">Main page</Link>
                    <Link to="/settings">Settings</Link>
                </div>
                <div>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/settings" component={SettingsPage} />
                </div>
            </Router>
        )
    };
}

export default RouterComp;