import React,{Component} from 'react'
import YouTube from "react-youtube";

class YoutubeDemo extends Component {
    state = { videos: [], loading: true };
  
    componentDidMount() {
        let that = this;
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
            that.setState({ videos: data.items, loading: false });
            })
            .catch(error => {
            console.error(error);
        });
    }
  
    render() {
        const { loading, videos } = this.state;
    
        if (loading) {
            return null;
        }
    
        return (
            <div className="App">

            </div>
        );
    }
}

export default YoutubeDemo 