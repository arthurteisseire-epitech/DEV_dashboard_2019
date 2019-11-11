import React, {Component} from 'react'
import YTSearch from 'youtube-api-search';
import VideoList from "./VideoList";


export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };
        this.videoSearch('React Tutorials');
    }

    videoSearch(term) {
        YTSearch({key: process.env.REACT_APP_API_KEY_YOUTUBE, term: term}, (data) => {
            this.setState({
                videos: data
            });
        });
    }

    render() {
        return (
            <div>
                <input/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

