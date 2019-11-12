import React from 'react';

export default function YggItem(props) {
    const item = props.item;

    return (
        <div>
            <a href={item.link}>{item.title}</a>
        </div>
    )
}
