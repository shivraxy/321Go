import React from "react";

const UserListItem = props => (
    <li className="list-item">{props.name} {props.email}</li>
);

export default UserListItem;