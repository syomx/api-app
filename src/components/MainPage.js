import React,{Component} from 'react'
import {connect} from 'react-redux'
import ApiList from './ApiList'
class MainPage extends Component{
    render(){
        return(
            <div>
                <h1>Main page</h1>
                <ApiList apiData = {this.props.api}/>
            </div>
        );
    }
};

const PutStateToProps = (state) =>{
    return {
        api:state.api
    }
}

export default connect(PutStateToProps)(MainPage); 