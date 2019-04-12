import React,{Component} from 'react'
import {connect} from 'react-redux'
import UsersList from './UsersList'
import AddUser from './AddUser';
import {updateUsers} from '../store/actions'

class SettingsPage extends Component{
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }
    addUser = (new_user) => {
        const dispatch = this.props.dispatch;
        this.props.users.push(new_user);
        dispatch(updateUsers(this.props.users))

        //TODO без этого костыля не обновляеться компонент после обновления store HELP
        this.setState({})
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