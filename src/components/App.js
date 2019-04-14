import React, { Component } from 'react';
import RouterComp from '../router'
import {connect} from 'react-redux'
import {updateUsers,getApi,updateThisUserId} from '../store/actions'
import {apiData} from '../data/api'

class App extends Component {
  componentDidMount(){
    const users_in_session = localStorage.getItem('users');
    const dispatch = this.props.dispatch;

    if(users_in_session !== null){
      dispatch(updateUsers(JSON.parse(users_in_session)))
      dispatch(updateThisUserId(+localStorage.getItem('this_user_id')))
      localStorage.removeItem("users")
    }else{
      localStorage.setItem('login_token','')
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
        users:state.users,
        thisUserId:state.thisUserId
    }
}

export default connect(PutStateToProps)(App); 
