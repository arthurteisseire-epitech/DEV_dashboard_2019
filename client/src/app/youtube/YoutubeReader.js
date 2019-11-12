import React, {useState} from "react";
import YTSearch from "youtube-api-search";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";

export default function YoutubeReader(props) {
    const [videos, setVideos] = useState([]);

    const videoSearch = (term) => {
        console.log('term: ' + term);
        YTSearch({key: process.env.REACT_APP_API_KEY_YOUTUBE, term: term}, (data) => {
            setVideos(data);
        });
    };

    return (
        <div>
            <SearchBar onSearchTermChange={searchTerm => videoSearch(searchTerm)}/>
            <VideoList videos={videos}/>
        </div>
    )
}
