import React from "react";

export default function VideoDetail(props) {
    const video = props.video;

    if (!video)
        return <div>Loading...</div>;

    const url = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div>
                <iframe src={url} />
            </div>
            <div>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}
