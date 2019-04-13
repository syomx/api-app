import React,{Component} from 'react'
import HeaderUsersList from './HeaderUsersList'

class ThisUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            thisUser:''
        }
    }
    changeUser(id){
        console.log(id)
    }
    componentWillReceiveProps(nextProps){
        const thisUserId = localStorage.getItem('this_user_id');
        this.setState({
            thisUser:nextProps.users[thisUserId].first_name
        })
    }
    render(){
        return(
            <div className="this_user__block">
                <div className="user_ava__block">
                    <img src="https://jurnalu.ru/templates/adaptive/dleimages/noavatar.png" className="user_ava"/>
                </div>
                <div className="user_name">
                    {this.state.thisUser}
                </div>
                <div className="burger_ico"></div>
                <HeaderUsersList users={this.props.users} changeUser={this.changeUser}/>
            </div>
        )
    }
}

export default ThisUser;