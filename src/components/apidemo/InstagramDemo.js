import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchInstagramData} from '../../store/actions'

class InstagramDemo extends Component {
    state = { data: []};
  
    componentDidMount() {
        const token = "2197499730.d3b5201.290a38fe6fb1405b8324a3f16c6b18bb";
        const user_id = '2197499730';
        const url = "https://api.instagram.com/v1/users/" + user_id + "/media/recent?access_token=" + token;
        
        const dispatch = this.props.dispatch;
        fetchInstagramData(dispatch,url)
    }
    render() {
        const apiElem = this.props.api_data.map(function(item, i) {
            return(
                <div className="api_item" key={i}>
                    <div className="main_cont">
                        <img src={item.images.standard_resolution.url} alt=""/>
                    </div>
                    <div className="title">
                        {item.caption.text}
                    </div>
                </div>
            )
        })
        return (
            <div className="api_items_cont">
                {apiElem}
            </div>
        );
    }
}

const PutStateToProps = (state) =>{
    return {
        api_data:state.api_data
    }
}

export default connect(PutStateToProps)(InstagramDemo); 