import React,{Component} from 'react'
import {connect} from 'react-redux'

class MainPage extends Component{
    render(){
        return(
            <div>
                <h1>Auth page</h1>
                
            </div>
        );
    }
};

const PutStateToProps = (state) =>{
    return {
        string:state.string
    }
}

export default connect(PutStateToProps)(MainPage); 