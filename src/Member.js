import React from "react";
// import Groups from "./Groups";
// import GroupMembers from "./GroupMembers";

const Member = props => (
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

export default Member;