import React,{Component} from 'react'

class UsersList extends Component{

    render(){
        const self = this;
        const userElems = this.props.users.map(function(user, i) {
            return(
                <div className="card" key={i}>
                    <div className="card-body">
                        <h5 className="card-title">{user.first_name + ' ' + user.second_name}</h5>
                        <div>id:{user.id}</div>
                        <p className="card-text">{user.about}</p>
                    </div>
                    <div className="editUser btn btn-primary" onClick={() => self.props.userToEdit(user)}>edit</div>
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