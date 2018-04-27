import React from "react";
// import Groups from "./Groups";

const GroupMember = props => (
  <div className="content">
    <ul>
        <li>
          name: {props.name}
        </li>
        <li>
          email: {props.user_email}
        </li>
    </ul>
  </div>
);

export default GroupMember;