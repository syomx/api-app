import React,{Component} from 'react'
import Unsplash from 'unsplash-js';

class UnsplashDemo extends Component {
    state = { data: []};
  
    componentDidMount() {
        const self = this;
        const unsplash = new Unsplash({
            applicationId: "a17f208a0b542b2857ac798fc1f212546e917360eb912cb317426b2d2d1e2cbc",
            secret: "e92b231895860cfd544b9dbd4b65a9905bc074632b5f9125467181c6b182031d",
            callbackUrl: "urn:ietf:wg:oauth:2.0:oob",
            //bearerToken: "{USER_BEARER_TOKEN}"
        });
        const req = {
            appId: 'a17f208a0b542b2857ac798fc1f212546e917360eb912cb317426b2d2d1e2cbc',
            query:'woods'
        }

        fetch(`https://api.unsplash.com/search/photos?client_id=${req.appId}&query=${req.query}`,{method:'get'}).
        then(res=>res.json())
        .then(function(res){
            console.log(res)
            self.setState({
                data:res.results
            })
        })
        .catch(res=>console.log("error",res))
    }
  
    render() {
        
        const self = this;
        const apiElem = this.state.data.map(function(item, i) {
            return(
                <div className="api_item" key={i}>
                    <div className="main_cont">
                        <img src={item.urls.small} />
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

export default UnsplashDemo 