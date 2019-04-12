import React from 'react'

function UsersList({users}){
    //console.log(users)
    const userElems = users.map(function(user, i) {
        return(
            <div className="card" key={i}>
                <div className="card-body">
                    <h5 className="card-title">{user.first_name + ' ' + user.second_name}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Переход куда-нибудь</a>
                </div>
            </div>
        )

    })

    return(
        <div className="users_block">
            {userElems}
        </div>
    )
}

export default UsersList;