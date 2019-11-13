
import React, {Component} from 'react';
import {
    sortableContainer,
    sortableElement,
    sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import Weather from "./widgets/Weather";
import {CardGroup} from "reactstrap";


const DragHandle = sortableHandle(() => <i className="fas fa-arrows-alt"/>);

const SortableItem = sortableElement((value) => (
        <Weather/>
));

const SortableContainer = sortableContainer(({children}) => {
    return <CardGroup>{children}</CardGroup>;
});

export default class WidgetZone extends Component {
    state = {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
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
                    <SortableItem key={`item-${value}`} index={index} value={value} />
                ))}
            </SortableContainer>
        );
    }
}