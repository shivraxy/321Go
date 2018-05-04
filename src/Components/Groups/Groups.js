import React, { Component } from 'react';
import GroupList from './GroupList';
import GroupListItem from './GroupListItem';

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state={
      groups:["Will","Alex","Jim","Shiv - too soon"]
    }
  } 




  render() {
    console.log(this.state.groups);
    return (
      <div>
        <GroupList groups={this.state.groups} />
      </div>
    )
  }
}

export default Groups;