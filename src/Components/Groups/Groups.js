import React, { Component } from 'react';
import GroupList from './GroupList';
import GroupListItem from './GroupListItem';
import GroupCreate from './GroupCreate';
require('./Groups.css');

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state={
      groups:[{
        name: "Will"
      } , {
        name: "Alex"
      }, {
        name: "Jim"
      }, {
        name: "Shiv - too soon"
      }],
      showAddGroupPage: false,
      selectedEvents: []
    }
  }

  showCreateNewGroupPage = () => {
    this.setState({showAddGroupPage: true});
  }

  addGroup = (data) => {
    this.setState({
      showAddGroupPage: false,
      groups: [...this.state.groups, data]
    })
  }

  render() {
    if (this.state.showAddGroupPage) {
      return <GroupCreate onSaveGroup={this.addGroup} />
    } else {
      return (
        <div>
          <GroupList groups={this.state.groups} />
          <a href="javascript:;" onClick={this.showCreateNewGroupPage}>Create new group</a>
        </div>
      )
    }
  }
}

export default Groups;