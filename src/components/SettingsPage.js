import React,{Component} from 'react'
import {connect} from 'react-redux'
import UsersList from './UsersList'
import AddUser from './AddUser';
import {addUserInStore} from '../store/actions'

class SettingsPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users:this.props.users
        };
    }
    addUser = (new_user) => {
        const dispatch = this.props.dispatch;
        dispatch(addUserInStore(new_user))
    }
    render(){
        return(
            <div>
                {this.props.users.length}
                <AddUser addUser={this.addUser}/>
                <div className="page_header__block">
                    <h1 className="page__main_header">All users</h1>
                    <div className="btn btn-primary pink_btn">+ Add</div>
                </div>
                <UsersList users={this.props.users}/>
            </div>
        );
    }
};

const mapStateToProps = function(state) {
    return {
      users: state.users,
    }
}

export default connect(mapStateToProps)(SettingsPage); 