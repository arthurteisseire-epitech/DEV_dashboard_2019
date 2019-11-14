import React, {useState} from "react";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import * as Caller from '../../../../../services/Caller';

export default function YoutubeReader(props) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videoSearch = (term) => {
        Caller.api('/youtube/reader')
            .then((res) => {
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
