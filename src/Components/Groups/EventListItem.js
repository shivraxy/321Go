import React from "react";
require('./EventListItem.css');

const EventListItem = props => {
    console.log('props in EventListItem', props);
    return (
        <li className="list-item" onClick={props.handleClick && props.handleClick}>
            <a href={props.url}>{props.name.text}</a>
        </li>
    )
};

export default EventListItem;