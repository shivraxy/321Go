import React from 'react';
import TableThing from "./TableThing";
import GroupList from './GroupList';

class Groups extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        group_name: '',
        groups: [{name: "MovieBuffs"}, {name: "StonerRock"}]
      };
    }

    // handleChange = event => {     
    //   const {name, value} = event.target;
    //   this.setState(
    //     {[name]: value});
    // }

    // handleAddUser = event => {
    //   event.preventDefault();
    //   console.log(event.target.value);
    //   const { userName } = event.target.value;
    //   console.log('userName :::::>', userName);
    //   let { users } = this.state.users;
    //   this.setState({ users: [...this.state.users, userName] })
    // }
    
    // handleAddGroup = event => {
    //   event.preventDefault();
    //   console.log(event.target.value);
    //   const { groupName } = event.target;
    //   console.log('groupName :::::>', groupName);
    //   let { groups } = this.state.groups;
    //   this.setState({ groups: [...this.state.groups, groupName] });
    //   this.handleAddGroup = this.handleAddGroup.bind(this);      
    // }

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
            GROUPS (click on group to join): 
            <br /><br />
            
            <GroupList groups={this.state.groups}/>
            
            <br /><br />
            <label>
            CREATE NEW GROUP:
                <input 
                    name="group_name"
                    type="text" 
                    value={this.state.group_name} 
                    onChange={this.handleChange} />
            </label>
            <br /><br /> 
            <button onClick={this.handleAddGroup}>ADD NEW GROUP</button>
            <br /><br />
        </div>
      )
    }
}

export default Groups;