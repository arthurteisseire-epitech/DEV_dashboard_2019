import React, {useState, useEffect} from "react";
import * as Caller from '../../../../services/Caller';

export default function YoutubeViews(props) {
    const [nbLikes, setNbLikes] = useState(0);

    useEffect(() => {
        Caller.api('/youtube/video')
            .then((res) => {
                const data = res.data;
                setNbLikes(data[0].statistics.likeCount);
            });
    });

    return (
        <div>
            {nbLikes}
        </div>
    )
}
