import React, {useEffect, useState} from 'react';
import * as Parser from 'rss-parser';
import YggItem from "./YggItem";

export default function YggRss() {

    const parser = new Parser();
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";


    const [content, setContent] = useState([]);

    const getRssFeed = () => {
        parser.parseURL(CORS_PROXY + 'https://www2.yggtorrent.pe/rss?action=generate&type=subcat&id=2171', function (err, feed) {
            setContent([]);
            if (err) throw err;
            console.log(feed.title);
            const items = feed.items.slice(0, 5).map(i => {
                return <YggItem key={i.guid} item={i}/>
            });
            setContent(items);
        });
    };

    useEffect(getRssFeed, []);

    return <div>{content}</div>;
}
