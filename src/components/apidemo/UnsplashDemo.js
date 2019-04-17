import React,{Component} from 'react'
import {fetchUnsplashData} from '../../store/actions'
import {connect} from 'react-redux'

class UnsplashDemo extends Component {
    state = { data: []};
  
    componentDidMount() {
        const self = this;
        const req = {
            appId: 'a17f208a0b542b2857ac798fc1f212546e917360eb912cb317426b2d2d1e2cbc',
            query:'woods'
        }
        const url = `https://api.unsplash.com/search/photos?client_id=${req.appId}&query=${req.query}`;
        const dispatch = this.props.dispatch;
        fetchUnsplashData(dispatch,url);
        
    }
  
    render() {
        const apiElem = this.props.api_data.map(function(item, i) {
            return(
                <div className="api_item" key={i}>
                    <div className="main_cont">
                        <img src={item.urls.small} alt=""/>
                    </div>
                    <div className="title">
                        {item.alt_description}
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

export default connect(PutStateToProps)(UnsplashDemo); 