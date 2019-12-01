import React, {useState, useEffect} from "react";
import * as Caller from '../../../../services/Caller';

export default function YoutubeViews(props) {
    const [nbViews, setNbViews] = useState(0);

    useEffect(() => {
        Caller.api('/youtube/video')
            .then((res) => {
                const data = res.data;
                setNbViews(data[0].statistics.viewCount);
            });
    });

    return (
        <div>
            {nbViews}
        </div>
    )
}
