import React,{Component} from 'react'
import {connect} from 'react-redux'
import {updateUsers} from '../store/actions'

class AddUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            first_name:'',
            fname_err:false,
            second_name:'',
            sname_err:false,
            about:'',
            btnText:'Add user'
        };
        this.handleChangeFName = this.handleChangeFName.bind(this);
        this.handleChangeSName = this.handleChangeSName.bind(this);
        this.handleChangeAbout = this.handleChangeAbout.bind(this);
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
            id:this.state.id,
            first_name:this.state.first_name,
            second_name:this.state.second_name,
            about:this.state.about
        };
        return new_user;
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            id:nextProps.userToEdit.id,
            first_name:nextProps.userToEdit.first_name,
            fname_err:false,
            second_name:nextProps.userToEdit.second_name,
            sname_err:false,
            about:nextProps.userToEdit.about
        })
    }
    render(){
        return(
            <div className="add_user_form">
                <div>
                    <div style={{width:'100%'}}>
                        <div className="close_form__btn" onClick={this.props.closeForm}>&times;</div>
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
                        <button type="submit" className="btn btn-primary" onClick={()=>this.props.addUser(this.submitNewUser())}>{this.props.editBtnText}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser; 