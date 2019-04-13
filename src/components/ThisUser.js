import React,{Component} from 'react'
import HeaderUsersList from './HeaderUsersList'

class ThisUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            thisUser:'',
            showList:''
        }
    }
    changeUser = (id) =>{
        localStorage.setItem('this_user_id',id)
        this.setState({
            thisUser:this.props.users[id].first_name,
            showList:''
        })
    }
    showUsersList(){
        if(this.state.showList == ''){
            this.setState({
                showList:'_showUsersList'
            })
        }else{
            this.setState({
                showList:''
            })
        }
    }
    componentDidMount(){
        const thisUserId = localStorage.getItem('this_user_id');
        if(this.props.users.length !== 0){
            this.setState({
                thisUser:this.props.users[thisUserId].first_name
            })
        }
    }
    componentWillReceiveProps(nextProps){
        const thisUserId = localStorage.getItem('this_user_id');
        if(nextProps.users.length !== 0){
            this.setState({
                thisUser:nextProps.users[thisUserId].first_name
            })
        }
    }
    render(){
        return(
            <div className="this_user__block">
                <div className="this_user_cont" onClick={() => this.showUsersList()}>
                    <div className="user_ava__block">
                        <img src="https://jurnalu.ru/templates/adaptive/dleimages/noavatar.png" className="user_ava"/>
                    </div>
                    <div className="user_name">
                        {this.state.thisUser}
                    </div>
                    <div className="burger_ico"></div>
                </div>
                <HeaderUsersList users={this.props.users} changeUser={this.changeUser} showList={this.state.showList}/>
            </div>
        )
    }
}

export default ThisUser;