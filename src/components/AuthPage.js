import React,{Component} from 'react'
import {connect} from 'react-redux'
import {updateUsers} from '../store/actions'

class AuthPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name:'',
            fname_err:false,
            second_name:'',
            sname_err:false,
            photo:'',
            about:''
        };
    
        this.handleChangePhoto = this.handleChangePhoto.bind(this);
        this.handleChangeFName = this.handleChangeFName.bind(this);
        this.handleChangeSName = this.handleChangeSName.bind(this);
        this.handleChangeAbout = this.handleChangeAbout.bind(this);
        this.Logining = this.Logining.bind(this);
    }
    handleChangePhoto(event){
        this.setState({photo: event.target.value});
    }
    handleChangeFName(event){
        this.setState({first_name: event.target.value,fname_err:false});
    }
    handleChangeSName(event){
        this.setState({second_name: event.target.value,sname_err:false});
    }
    handleChangeAbout(event){
        this.setState({about: event.target.value});
    }
    Logining(){
        const dispatch = this.props.dispatch;
        let new_user = [{
            id:1,
            photo:this.state.photo,
            first_name:this.state.first_name,
            second_name:this.state.second_name,
            about:this.state.about
        }];
        dispatch(updateUsers(new_user))
        localStorage.setItem('login_token','token')
        localStorage.setItem('this_user_id',0)
        this.forceUpdate()
    }
    render(){
        return(
            <div>
                <h1>Auth page</h1>
                <div className="row justify-content-md-center">
                    <div className="col-lg-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Your photo (url)</label>
                            <input type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter photo url" value={this.state.photo} onChange={this.handleChangePhoto}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">First name</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter first name" value={this.state.first_name} onChange={this.handleChangeFName}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Second name</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter second name" value={this.state.second_name} onChange={this.handleChangeSName}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">About</label>
                            <textarea className="form-control" aria-describedby="emailHelp" placeholder="About" value={this.state.about} onChange={this.handleChangeAbout}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.Logining}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
};

const PutStateToProps = (state) =>{
    return {
        users:state.users
    }
}

export default connect(PutStateToProps)(AuthPage); 