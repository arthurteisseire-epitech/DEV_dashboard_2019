import React, {Component, useState} from 'react';
import {
    sortableContainer,
    sortableElement,
    sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import Weather from "./widgets/Weather";
import YoutubeReader from "./widgets/youtube/readerComponent/YoutubeReader";
import YggRss from "./widgets/ygg/YggRss";
import {Card, CardGroup} from "reactstrap";


export default function WidgetZone() {
    const [items, setItems] = useState([<Weather/>, <Weather/>, <Weather/>]);
    // const [items, setItems] = useState([<Weather/>, <YoutubeReader/>, <YggRss/>]);

    const SortableContainer = sortableContainer(({children}) => {
        return <CardGroup>{children}</CardGroup>;
    });

    const SortableItem = sortableElement(({value}) => (
        <Card>
            {value}
        </Card>
    ));

    const ListItems = items.map((value, index) =>
        <SortableItem index={index} value={value}/>
    );

    function onSortEnd({oldIndex, newIndex}) {
        console.log(items, oldIndex, newIndex);
        setItems({
            items: arrayMove(items, oldIndex, newIndex),
        });
    }

    return (
        <SortableContainer onSortEnd={onSortEnd} useDragHandle axis={'xy'}>
            {ListItems}
        </SortableContainer>
    );
}
