import React,{Component} from 'react'
import {connect} from 'react-redux'
import YoutubeDemo from './apidemo/YoutubeDemo'
import InstagramDemo from './apidemo/InstagramDemo'
import UnsplashDemo from './apidemo/UnsplashDemo'

class ApiDitailPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            logo:'',
            service:'',
            apiKey:'',
            description:'',
            api_comp:''
        }
    }
    componentDidMount(){
        const thisApiId = +this.props.linkParams.match.params.id;
        const apiId = this.props.api.find(function(api){
            if(api.id === thisApiId){
                return api;
            }
        })
        this.setState(apiId)
    }
    componentWillReceiveProps(nextProps){
        const thisApiId = +nextProps.linkParams.match.params.id;
        this.setState(nextProps.api[thisApiId])

        if(nextProps.thisUserId !== this.props.thisUserId){
            window.location = '/';
        }
    }
    render(){
        function getApiComp(service){
            switch(service){
                case('instagram'):
                    return <InstagramDemo />;
                case('youtube'):
                    return <YoutubeDemo />;
                case('unsplash'):
                    return <UnsplashDemo />;
                default:
                    return '';
            }
        }
        return(
            <div className="container">
                <div className="api_detail__page">
                    <div className="page_header__block">
                        <div className="api_logo">
                            <img src={this.state.logo} alt=""/>
                        </div>
                        <h1 className="page__main_header">{this.state.service}</h1>
                        <div className="desc">
                            {this.state.description}
                        </div>
                    </div>
                    <div className="api_demostration_cont">
                        <h3>Api demonstration:</h3>

                        {this.state.api_comp}
                        {getApiComp(this.state.service.toLocaleLowerCase())}
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