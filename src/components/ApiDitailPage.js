import React,{Component} from 'react'
import {connect} from 'react-redux'

class ApiDitailPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            logo:'',
            service:'',
            apiKey:'',
            description:''
        }
    }
    componentWillReceiveProps(nextProps){
        const thisApiId = +nextProps.linkParams.match.params.id;
        console.log(thisApiId)
        this.setState(nextProps.api[thisApiId])
        //this.setState(nextProps.linkParams.match.params.id)
    }
    render(){
        return(
            <div className="container">
                <div className="api_detail__page">
                    <div className="page_header__block">
                        <div className="api_logo">
                            <img src={this.state.logo} />
                        </div>
                        <h1 className="page__main_header">{this.state.service}</h1>
                        <div className="desc">
                            {this.state.description}
                        </div>
                    </div>
                    <div className="api_demostration_cont">
                        <h3>Api demonstration:</h3>
                    </div>
                </div>
            </div>
        )
    };
}
// export default ApiDitailPage;

const PutStateToProps = (state) =>{
    return {
        api:state.api
    }
}

export default connect(PutStateToProps)(ApiDitailPage); 