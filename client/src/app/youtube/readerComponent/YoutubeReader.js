import React, {useState} from "react";
import YTSearch from "youtube-api-search";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import ApiCall from '../../services/ApiCall';

export default function YoutubeReader(props) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videoSearch = (term) => {
        ApiCall('/youtube/reader', {term: term}).then((res) => {
            const data = res.data;
            setVideos(data);
            setSelectedVideo(data[0]);
        });
    };

    return (
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={selectedVideo}/>
            <VideoList
                onVideoSelect={setSelectedVideo}
                videos={videos}
            />
        </div>
    )
}
