import React from 'react'

function UsersList({users}){
    const userElems = users.map(user=>
        <div className="card" key={user.id}>
            <div className="card-body">
                <h5 className="card-title">Специальный заголовок</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Переход куда-нибудь</a>
            </div>
        </div>
    )

    return(
        <div>
            {userElems}
        </div>
    )
}

export default UsersList;