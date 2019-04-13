import React,{Component} from 'react'

class ThisUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            thisUset:''
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            thisUset:nextProps.users[0].first_name
        })
    }
    render(){
        return(
            <div className="this_user__block">
                {this.state.thisUset}
            </div>
        )
    }
}

export default ThisUser;