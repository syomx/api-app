import React,{Component} from 'react'

class ApiList extends Component{

    render(){
        const apiElems = this.props.apiData.map(function(api, i) {
            return(
                <div className="card" key={i}>
                    <div className="card-body">
                        <h5 className="card-title">{api.service}</h5>
                        <div>key:{api.apiKey}</div>
                        <p className="card-text">{api.description}</p>
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