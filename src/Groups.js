import React from 'react';
import GroupList from './GroupList';
import GroupListItem from './GroupListItem';
import UserList from './UserList';
import UserListItem from './UserListItem';

// import App from './App';

class Groups extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        group_name: '',
        user_name: '',
        user_email: '',
        groups: [{name: "MovieBuffs"}, {name: "StonerRock"}],
        users: [{name: "Jim", email: "this@that.com"}]
      };
    }

    handleChange = event => {     
      const {name, value} = event.target;
      this.setState(
        {[name]: value});
    }
  
    handleClick = event => {
      
        event.preventDefault();
        console.log(event);
        
        const {name} = event.target;

        let userName = '';
        let userEmail = '';
        let groupName = '';

        switch(event) {
          case "adduser":
            userName = this.state.user_name;
            userEmail = this.state.user_email;
            break;
          case "addgroup":
            groupName = this.state.group_name;
            break;
          // default:
          //   alert('nope');
          //   break;
        };

        // fetch(`/${name}`, {
        //   method: 'POST',
        //   body: JSON.stringify(queryString),
        //   headers: new Headers({
        //     'Content-Type': 'application/json'
        //   })
        // }).then(res => res.json());

        const {users} = this.state.users;
        users.push({name: userName, email: userEmail});

        const {groups} = this.state.groups;
        groups.push({name: groupName});

        this.setState({groups, users, group_name: '', user_name: '', user_email: ''});
    }
  
    render() {
      console.log(this.state);
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
            <button name="addgroup" onClick={this.handleClick}>ADD GROUP</button>
            <br /><br />
            Groups:
            <br />
            <GroupList>
              {this.state.groups.map((group, index) => {
                    return (
                      <GroupListItem
                        key={index}
                        name={group.name}
                        handleClick={this.handleClick}
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
                    onChange={this.handleChange} />
            </label>
            <br /><br />
            <label>
            User Email:
                <input 
                    name="user_email"
                    type="text" 
                    value={this.state.user_email} 
                    onChange={this.handleChange} />
            </label>
            <br /><br />            
            <button name="adduser" onClick={this.handleClick}>ADD USER</button>
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