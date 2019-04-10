import React,{Component} from 'react'
import {connect} from 'react-redux'


class SettingsPage extends Component{
    render(){
        return(
            <div>
                <div className="page_header__block">
                    <h1 className="page__main_header">All users</h1>
                    <div className="btn btn-primary pink_btn">+ Add</div>
                </div>
                
                <div className="users_block">

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Специальный заголовок</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Переход куда-нибудь</a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
};

export default SettingsPage;