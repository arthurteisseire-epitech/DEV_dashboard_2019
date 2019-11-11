import React from 'react'
import VideoListItem from "./VideoListItem";

export default function VideoList(props) {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                key={video.etag}
                video={video}
            />
        )
    });
    return (
        <ul>
            {videoItems}
        </ul>
    )
}
