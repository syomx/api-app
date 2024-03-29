import React,{Component} from 'react'
import {connect} from 'react-redux'
import ApiList from './ApiList'
class MainPage extends Component{
    componentWillReceiveProps(nextProps){
        if(this.props.thisUserId !== nextProps.thisUserId){
            function compareRandom(a, b) {
                return Math.random() - 0.5;
            }
              
            nextProps.api.sort(compareRandom);
        }
    }
    render(){
        return(
            <div className="container">
                <div className="page_header__block">
                    <h1 className="page__main_header">Api list</h1>
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