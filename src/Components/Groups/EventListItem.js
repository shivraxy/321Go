import React from "react";
import Checkbox from "./Checkbox";
require('./EventListItem.css');


const EventListItem = props => {
    console.log('props in EventListItem', props);
    return (
        <li className="list-item" onClick={props.handleClick && props.handleClick}>
            <a href={props.url}>{props.name.text}</a>
            <Checkbox />
        </li>
    )
};

export default EventListItem;