import React from "react";
import GroupListItem from './GroupListItem';

const GroupList = props => {
  console.log("props groups", props.groups);
  const listGroups = props.groups ?
    props.groups.map((group, index) => {
      //group is a string
      console.log(group)

      return (
        <GroupListItem
          key = {index}
          name = {group.name}
        />
      );
    }) : "hey man there ain\'t shit here"
  return (
    <ul>
      {listGroups}
    </ul>
  )
}




export default GroupList;