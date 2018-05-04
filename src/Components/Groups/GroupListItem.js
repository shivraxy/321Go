import React from "react";

const GroupListItem = props => {
  console.log('props in GroupListItem', props);
  return (
    <li className="list-item"> {props.name} </li>
  )
};

export default GroupListItem;