import React, {useState} from 'react'
import YTSearch from 'youtube-api-search';
import VideoList from "./VideoList";


export default function SearchBar(props) {
    const [videos, setVideos] = useState([]);

    const videoSearch = (term) => {
        YTSearch({key: process.env.REACT_APP_API_KEY_YOUTUBE, term: term}, (data) => {
            setVideos(data);
        });
    };

    videoSearch('React Tutorials');

    return (
        <div>
            <input/>
            <VideoList videos={videos}/>
        </div>
    )
}
