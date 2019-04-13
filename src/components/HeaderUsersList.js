import React,{Component} from 'react'

class HeaderUsersList extends Component{
    render(){
        const self = this;
        const userElems = this.props.users.map(function(user, i) {
            return(
                <div className="user_item" key={i} onClick={() => self.props.changeUser(i)}>
                    <div className="user_ava__block">
                        <img src="https://jurnalu.ru/templates/adaptive/dleimages/noavatar.png" className="user_ava"/>
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
            </div>
        )
    }
}

export default HeaderUsersList;