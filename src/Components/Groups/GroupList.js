import React, { Component } from "react";
import Group from "./Group.js";

const GroupList = (props) => {
    console.log('props :::::>', props);
    
    const allGroups = props.groups ? props.groups.map((group, i) => {
        return <Group key={i} name={group.name} />
    }) : <div> 'no groups dawg'</div>;


    return allGroups;
    
}

export default GroupList;