import React,{Component} from 'react'
import {connect} from 'react-redux'
import {updateUsers} from '../store/actions'

class AddUser extends Component{
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
    submitNewUser(){
        const new_user = {
            id:'',
            photo:this.state.photo,
            first_name:this.state.first_name,
            second_name:this.state.second_name,
            about:this.state.about
        };
        return new_user;
    }
    render(){
        return(
            <div className="add_user__window">
                <div>
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
                            <button type="submit" className="btn btn-primary" onClick={()=>this.props.addUser(this.submitNewUser())}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser; 