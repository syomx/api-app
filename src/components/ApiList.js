import React,{Component} from 'react'

class ApiList extends Component{

    render(){
        const apiElems = this.props.apiData.map(function(api, i) {
            return(
                <div className="card" key={i}>
                    <div className="card-body">
                        <div className="user_ava__block">
                            <img src={api.logo} className="user_ava"/>
                        </div>
                        <h5 className="card-title">{api.service}</h5>
                        {/* <div>key:{api.apiKey}</div> */}
                        <div className="card-text">{api.description}</div>
                    </div>
                    <div className="editUser btn btn-primary">more</div>
                </div>
            )
        })
        return(
            <div className="users_block">
                {apiElems}
            </div>
        )
    }
}

export default ApiList;