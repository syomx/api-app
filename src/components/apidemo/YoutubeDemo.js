import React,{Component} from 'react'
import YouTube from "react-youtube";

class YoutubeDemo extends Component {
    state = { data: []};
  
    componentDidMount() {
        let self = this;
        let apiKey = "AIzaSyDnMT7kkbluEXi0XLMGMyqAV47-Hzrj_4s";
        let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${apiKey}`;
    
        fetch(url)
        .then(res=>res.json())
        .then(function(res){
            console.log(res)
            self.setState({
                data:res.items
            })
        })
    }
    
    render() {
        
        const self = this;
        const opts = {
            height: '200',
            width: '100%',
        };
        const apiElem = this.state.data.map(function(item, i) {
            return(
                <div className="api_item" key={i}>
                    <div className="main_cont">
                        <YouTube
                            videoId={item.id}
                            opts={opts}
                            //onReady={this._onReady}
                        />
                    </div>
                    <div className="title">
                        {item.snippet.title}
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

export default YoutubeDemo 
