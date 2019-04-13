import React, { Component } from 'react';
import RouterComp from '../router'
import {connect} from 'react-redux'
import {updateUsers,getApi} from '../store/actions'
import {apiData} from '../data/api'

class App extends Component {
  componentDidMount(){
    const users_in_session = localStorage.getItem('users');
    const dispatch = this.props.dispatch;
    if(users_in_session !== null){
      dispatch(updateUsers(JSON.parse(users_in_session)))
      localStorage.removeItem("users")
    }
    dispatch(getApi(apiData))
  }
  componentWillUpdate(nextProps){
    localStorage.setItem('users',JSON.stringify(nextProps.users))
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
