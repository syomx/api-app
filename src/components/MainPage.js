import React,{Component} from 'react'
import {connect} from 'react-redux'
import ApiList from './ApiList'
class MainPage extends Component{
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }
    render(){
        return(
            <div className="container">
                <div className="page_header__block">
                    <h1 className="page__main_header">Main page</h1>
                </div>
                
                <ApiList apiData = {this.props.api}/>
            </div>
        );
    }
};

const PutStateToProps = (state) =>{
    return {
        api:state.api,
        thisUserId:state.thisUserId
    }
}

export default connect(PutStateToProps)(MainPage); 