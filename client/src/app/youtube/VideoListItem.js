import React from 'react'

export default function VideoListItem(props) {
    const video = props.video;
    console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li>
            <div>
                <div>
                    <img src={imageUrl}/>
                </div>
                <div>
                    <div>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}
