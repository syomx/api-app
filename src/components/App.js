import React, { Component } from 'react';
import RouterComp from '../router'
import {connect} from 'react-redux'
import {updateUsers} from '../store/actions'

class App extends Component {
  componentDidMount(){
    const users_in_session = localStorage.getItem('users');
    if(users_in_session !== null){
      const dispatch = this.props.dispatch;
      dispatch(updateUsers(JSON.parse(users_in_session)))
      localStorage.removeItem("users")
    }
  }
  componentWillUpdate(){
    if(this.props.users.length !== 0 ){
      localStorage.setItem('users',JSON.stringify(this.props.users))
    }
    
  }
  render(){
    return (
      <div className="main_container">
        <RouterComp />
      </div>
        
    )
  }
}

const PutStateToProps = (state) =>{
    return {
        users:state.users
    }
}

export default connect(PutStateToProps)(App); 
