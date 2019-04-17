import React,{Component} from 'react'

class HeaderUsersList extends Component{
    ClearSession(){
        localStorage.clear()
        window.location = "/";
    }
    render(){
        const self = this;
        const userElems = this.props.users.map(function(user, i) {
            return(
                <div className="user_item" key={i} onClick={() => self.props.changeUser(i)}>
                    <div className="user_ava__block">
                        <img src="https://jurnalu.ru/templates/adaptive/dleimages/noavatar.png" className="user_ava" alt=""/>
                    </div>
                    <div>
                        {user.first_name + ' ' + user.second_name }
                    </div>
                </div>
            )
        })
        return(
            <div className={this.props.showList + " top_users__list"}>
                {userElems}  
                <div className="clear_all" onClick={() => this.ClearSession()}>Clear all </div>
            </div>
        )
    }
}

export default HeaderUsersList;