import React,{Component} from 'react'
import {connect} from 'react-redux'

class AuthPage extends Component{
    render(){
        return(
            <div>
                <h1>Auth page</h1>
                <div className="row justify-content-md-center">
                    <div className="col-lg-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Your photo (url)</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter photo url" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">First name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter first name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Second name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter second name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">About</label>
                            <textarea type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="About" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
};

const PutStateToProps = (state) =>{
    return {
        string:state.string
    }
}

export default connect(PutStateToProps)(AuthPage); 