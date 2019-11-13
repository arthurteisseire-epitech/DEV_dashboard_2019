import React, {useEffect, useState} from 'react';
import YggItem from "./YggItem";
import ApiCall from "../services/ApiCall";

export default function YggRss() {

    const [content, setContent] = useState([]);

    const getRssFeed = () => {
        ApiCall('/ygg/rss').then((res) => {
            const feed = res.data;
            setContent([]);
            const items = feed.items.slice(0, 5).map(i => {
                return <YggItem key={i.guid} item={i}/>
            });
            setContent(items);
        });
    };

    useEffect(getRssFeed, []);

    return <div>{content}</div>;
}
