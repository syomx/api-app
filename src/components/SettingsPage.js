import React,{Component} from 'react'
import {connect} from 'react-redux'
import UsersList from './UsersList'
import AddUser from './AddUser';
import {addUserInStore,editUser} from '../store/actions'

class SettingsPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users:this.props.users,
            userToEdit:{
                id:undefined,
                first_name:'',
                second_name:'',
                about:'',
            }
        };
    }
    addUser = (new_user) => {
        const dispatch = this.props.dispatch;
        if(new_user.id == undefined){
            new_user.id = this.props.users.length+1;
            dispatch(addUserInStore(new_user))
        }else{
            dispatch(editUser(new_user))
        }
    }
    addNewUser(){
        this.setState({
            userToEdit:{
                id:undefined,
                first_name:'',
                second_name:'',
                about:'',
            }
        })
    }
    userToEdit = (user) => {
        this.setState({
            userToEdit:user
        })
    }
    render(){
        return(
            <div>
                {this.props.users.length}
                <AddUser addUser={this.addUser} userToEdit={this.state.userToEdit}/>
                <div className="page_header__block">
                    <h1 className="page__main_header">All users</h1>
                    <div className="btn btn-primary pink_btn" onClick={() => this.addNewUser()}>+ Add</div>
                </div>
                <UsersList users={this.props.users} userToEdit={this.userToEdit}/>
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