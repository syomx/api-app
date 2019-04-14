import React,{Component} from 'react'
import {connect} from 'react-redux'
import UsersList from './UsersList'
import AddUser from './AddUser';
import {addUserInStore,editUser} from '../store/actions'

class SettingsPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showForm:'',
            users:this.props.users,
            editBtnText:'Add user',
            userToEdit:{
                id:undefined,
                first_name:'',
                second_name:'',
                about:'',
            }
        };
    }
    updateUsersStore = (new_user) => {
        const dispatch = this.props.dispatch;
        this.setState({
            showForm:''
        })
        if(new_user.id == undefined){
            new_user.id = this.props.users.length+1;
            dispatch(addUserInStore(new_user))
        }else{
            dispatch(editUser(new_user))
        }
    }
    addNewUser(){
        this.setState({
            showForm:'_show_form',
            editBtnText:'Add user',
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
            editBtnText:'Edit user',
            showForm:'_show_form',
            userToEdit:user
        })
    }
    closeForm(){
        this.setState({
            showForm:''
        })
    }
    render(){
        return(
            <div>
                <div className={this.state.showForm + " add_user__window"}>
                    <AddUser addUser={this.updateUsersStore} userToEdit={this.state.userToEdit} editBtnText={this.state.editBtnText} closeForm={() => this.closeForm()}/>
                </div>
                <div className="container">
                    <div className="page_header__block">
                        <h1 className="page__main_header">Users</h1>
                        <div className="btn btn-primary pink_btn" onClick={() => this.addNewUser()}>+ Add</div>
                    </div>
                    <UsersList users={this.props.users} userToEdit={this.userToEdit}/>
                </div>
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