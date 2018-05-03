import React from 'react';
import GroupList from './GroupList';
import GroupListItem from './GroupListItem';
import UserList from './UserList';
import UserListItem from './UserListItem';

class Groups extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        group_name: '',
        user_name: '',
        groups: [{name: "MovieBuffs"}, {name: "StonerRock"}],
        users: [{name: "Jim"}, {name: "Loverboy Larry"}]
      };
    }

    handleChange = event => {     
      const {name, value} = event.target;
      this.setState(
        {[name]: value});
    }

    handleAddUser = event => {
      event.preventDefault();
      console.log(event.target.value);
      const { userName } = event.target.value;
      console.log('userName :::::>', userName);
      const { users } = this.state.users;
      this.setState({ users: [...this.state.users, userName] })
    }
    
    handleAddGroup = event => {
      event.preventDefault();
      console.log(event.target.value);
      const { groupName } = event.target;
      console.log('groupName :::::>', groupName);
      const { groups } = this.state.groups;
      this.setState({ groups: [...this.state.groups, groupName] });      
    }

    //     // fetch(`/${name}`, {
    //     //   method: 'POST',
    //     //   body: JSON.stringify(queryString),
    //     //   headers: new Headers({
    //     //     'Content-Type': 'application/json'
    //     //   })
    //     // }).then(res => res.json());
  
    render() {
      return (
        <div>
            <br />
            <label>
            Group Name:
                <input 
                    name="group_name"
                    type="text" 
                    value={this.state.group_name} 
                    onChange={this.handleChange} />
            </label>
            <br /><br />
            <button name="addgroup" onClick={this.handleAddGroup}>ADD GROUP</button>
            <br /><br />
            Groups (click on group to join): 
            <br />
            <GroupList>
              {this.state.groups.map((group, index) => {
                    return (
                      <GroupListItem
                        key={index}
                        name={group.name}
                        handleClick={this.handleAddUser}
                      />
                    );
                  })}
            </GroupList>
            <br /><br />

            <label>
            User Name:
                <input 
                    name="user_name"
                    type="text" 
                    value={this.state.user_name} 
                    onChange={this.handleAddUser} />
            </label>
            <br /><br />            
            <button type='submit' name="adduser" onClick={this.handleClick}>ADD USER</button>
            <br /><br />
            Users in GROUP NAME:
            <br />
            <UserList>
              {this.state.users.map((user, index) => {
                  return (
                    <UserListItem
                      key={index}
                      name={user.name}
                    />
                  );
              })}
            </UserList>
            <br /><br />
        </div>
      )
    }
}

export default Groups;