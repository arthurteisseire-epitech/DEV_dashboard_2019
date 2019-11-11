import React from 'react'

export default function VideoListItem(props) {
    const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li>
            <div>
                <div>
                    <div>{video.snippet.title}</div>
                </div>
                <div>
                    <img src={imageUrl} alt={video.snippet.channelTitle}/>
                </div>
            </div>
        </li>
    )
}
