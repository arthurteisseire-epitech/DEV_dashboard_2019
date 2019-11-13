import React, {Component} from 'react';
import {
    sortableContainer,
    sortableElement,
    sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import Weather from "./widgets/Weather";
import {Card, CardGroup} from "reactstrap";

const SortableItem = sortableElement(({value}) => (
    <Card>
        {value}
    </Card>
));

const SortableContainer = sortableContainer(({children}) => {
    return <CardGroup>{children}</CardGroup>;
});

export default class WidgetZone extends Component {
    state = {
        items: [<Weather/>, <Weather/>, <Weather/>, <Weather/>, <Weather/>],
    };

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };

    render() {
        const {items} = this.state;

        return (
            <SortableContainer onSortEnd={this.onSortEnd} useDragHandle axis={'xy'}>
                {items.map((value, index) => (
                    <SortableItem index={index} value={value}/>
                ))}
            </SortableContainer>
        );
    }
}
