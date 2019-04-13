import React,{Component} from 'react'
import HeaderUsersList from './HeaderUsersList'

class ThisUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            thisUset:''
        }
    }
    componentWillReceiveProps(nextProps){
        const thisUserId = localStorage.getItem('this_user_id');
        this.setState({
            thisUset:nextProps.users[thisUserId].first_name
        })
    }
    render(){
        return(
            <div className="this_user__block">
                <div className="user_ava__block">
                    <img src="https://jurnalu.ru/templates/adaptive/dleimages/noavatar.png" className="user_ava"/>
                </div>
                <div className="user_name">
                    {this.state.thisUset}
                </div>
            </div>
        )
    }
}

export default ThisUser;