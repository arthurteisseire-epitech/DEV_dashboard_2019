import React, {useState, useEffect} from "react";
import * as Caller from '../../../../services/Caller';

export default function YoutubeViews(props) {
    const [nbComments, setNbComments] = useState(0);

    useEffect(() => {
        Caller.api('/youtube/video')
            .then((res) => {
                const data = res.data;
                setNbComments(data[0].statistics.commentCount);
            });
    });

    return (
        <div>
            {nbComments}
        </div>
    )
}
