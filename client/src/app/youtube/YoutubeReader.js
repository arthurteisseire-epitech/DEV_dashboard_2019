import React, {useState} from "react";
import YTSearch from "youtube-api-search";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";

export default function YoutubeReader(props) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videoSearch = (term) => {
        YTSearch({key: process.env.REACT_APP_API_KEY_YOUTUBE, term: term}, (data) => {
            setVideos(data);
            setSelectedVideo(data[0]);
        });
    };

    return (
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={selectedVideo} />
            <VideoList
                onVideoSelect={setSelectedVideo}
                videos={videos}
            />
        </div>
    )
}
