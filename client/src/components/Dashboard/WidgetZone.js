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
import Grid from "@material-ui/core/Grid";
import YoutubeViews from "./widgets/youtube/YoutubeViews";
import YoutubeLikes from "./widgets/youtube/YoutubeLikes";
import YoutubeCommentCount from "./widgets/youtube/YoutubeCommentsCount";


export default function WidgetZone() {
    const [items, setItems] = useState([<Weather/>, <YoutubeViews/>, <YoutubeLikes/>, <YoutubeCommentCount/>, <YoutubeReader/>, <YggRss/>]);

    const SortableItem = sortableElement(({value}) => (
        <Grid item xs={4}>
            {value}
        </Grid>
    ));

    const SortableContainer = sortableContainer(({children}) => {
        return <Grid container spacing={1}>{children}</Grid>;
    });

    function onSortEnd({oldIndex, newIndex}) {
            setItems(arrayMove(items, oldIndex, newIndex));
    }

    return (
        <SortableContainer onSortEnd={onSortEnd} useDragHandle axis={'xy'}>
            {items.map((value, index) => (
                <SortableItem index={index} value={value}/>
            ))}
        </SortableContainer>
    );
}