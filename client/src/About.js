import React from "react";
import ReactJson from 'react-json-view';

export default function About() {
    const aboutJson = {
        client: {
            // host: req.connection.remoteAddress
        },
        server: {
            current_time: Date.now(),
            services: [{
                name: "weather",
                widgets: [{
                    name: "city_temperature",
                    description: "Display temperature for a city",
                    params: [{
                        name: "cityname",
                        type: "string"
                    }]
                }]
            }, {
                name: "youtube",
                widgets: [{
                    name: "youtube_search",
                    description: "Display the first five videos for a search with the possibility to watch them",
                    params: [{
                        name: "youtube_term",
                        type: "string"
                    }]
                },{
                    name: "youtube_views",
                    description: "Display the number of views of a video",
                    params: [{
                        name: "youtube_video_id",
                        type: "string"
                    }]
                },{
                    name: "youtube_comments",
                    description: "Display the number of comments of a video",
                    params: [{
                        name: "youtube_video_id",
                        type: "string"
                    }]
                },{
                    name: "youtube_likes",
                    description: "Display the number of likes of a video",
                    params: [{
                        name: "youtube_video_id",
                        type: "string"
                    }]
                }]
            }, {
                name: "ygg",
                widgets: [{
                    name: "ygg_rss",
                    description: "Display the n last links for ygg-rss Linux feed",
                    params: [{
                        name: "ygg_n",
                        type: "string"
                    }]
                }]
            }
            ]
        }
    };
    return <ReactJson src={aboutJson}/>;
}
