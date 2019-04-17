import React,{Component} from 'react'

class UsersList extends Component{

    render(){
        const self = this;
        const userElems = this.props.users.map(function(user, i) {
            return(
                <div className="card" key={i}>
                    <div className="card-body">
                        <div className="user_ava__block">
                            <img src="https://jurnalu.ru/templates/adaptive/dleimages/noavatar.png" className="user_ava" alt=""/>
                        </div>
                        <h5 className="card-title">{user.first_name + ' ' + user.second_name}</h5>
                        <div className="card-text">{user.about}</div>
                    </div>
                    <div className="editUser btn btn-primary glyphicon glyphicon-pencil" onClick={() => self.props.userToEdit(user)}>edit</div>
                </div>
            )
        })
        return(
            <div className="users_block">
                {userElems}
            </div>
        )
    }
}

export default UsersList;