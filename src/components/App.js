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
  componentWillUpdate(nextProps){
    localStorage.setItem('users',JSON.stringify(nextProps.users))
  }

  AddUser = () => {
    const dispatch = this.props.dispatch;
    let new_user = {
        id:this.props.users.length+1,
        photo:'aa',
        first_name:'aa',
        second_name:'aa',
        about:'aa'
    };
    this.props.users.push(new_user)

    dispatch(updateUsers(this.props.users))
    console.log(this.props.users)
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
