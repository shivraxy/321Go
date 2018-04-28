import React from "react";

const GroupListItem = props => (
    <li className="list-item" onClick={props.handleClick}>{props.name}</li>
);

export default GroupListItem;