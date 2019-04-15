import React,{Component} from 'react'
import {connect} from 'react-redux'
import YoutubeDemo from './apidemo/YoutubeDemo'

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
    componentDidMount(){
        const thisApiId = +this.props.linkParams.match.params.id;
        this.setState(this.props.api[thisApiId])
    }
    componentWillReceiveProps(nextProps){
        const thisApiId = +nextProps.linkParams.match.params.id;
        this.setState(nextProps.api[thisApiId])
        if(nextProps.thisUserId !== this.props.thisUserId){
            window.location = '/';
        }
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
                        <YoutubeDemo />
                    </div>
                </div>
            </div>
        )
    };
}

const PutStateToProps = (state) =>{
    return {
        api:state.api,
        thisUserId:state.thisUserId
    }
}

export default connect(PutStateToProps)(ApiDitailPage); 