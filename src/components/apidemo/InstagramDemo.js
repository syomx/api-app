import React,{Component} from 'react'
import YouTube from "react-youtube";

class InstagramDemo extends Component {
    state = { data: []};
  
    componentDidMount() {
        let self = this;
        let token = "2197499730.d3b5201.290a38fe6fb1405b8324a3f16c6b18bb";
        let user_id = '2197499730';
        let url = "https://api.instagram.com/v1/users/" + user_id + "/media/recent?access_token=" + token;
    
        fetch(url)
            .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
            })
            .then(function(data) {
                console.log(data)
                self.setState({ data:data.data });
            })
            .catch(error => {
            console.error(error);
        });
    }
  
    render() {
        
        const self = this;
        const apiElem = this.state.data.map(function(item, i) {
            return(
                <div className="api_item">
                    <div className="main_cont">
                        <img src={item.images.standard_resolution.url} />
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

export default InstagramDemo 