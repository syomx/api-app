import React,{Component} from 'react'
import {connect} from 'react-redux'
import UsersList from './UsersList'

class SettingsPage extends Component{
    render(){
        return(
            <div>
                <div className="page_header__block">
                    <h1 className="page__main_header">All users</h1>
                    <div className="btn btn-primary pink_btn">+ Add</div>
                </div>
                
                <div className="users_block">
                    <UsersList users={this.props.users}/>
                </div>
            </div>
        );
    }
};

const PutStateToProps = (state) =>{
    return {
        users:state.users
    }
}

export default connect(PutStateToProps)(SettingsPage); 