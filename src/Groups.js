import React from 'react';
import EventGroup from './EventGroup';
import EventGroupItem from './EventGroupItem';

// import App from './App';

class Groups extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        group_name: '',
        user_email: '',
        groups: [{name: "MovieBuffs"},{name: "StonerRock"}]
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
      
      const {name, value} = event.target;

      this.setState(
        {[name]: value});

    }
  
    handleClick(event) {
        // SEND FORM TO APP.JS...
        console.log(event);
        
        const {name} = event.target;
        

        let queryString = '';
        if (event.target.name === "adduser") {
          queryString = this.state.user_email;
        } else {
          if(this.state.group_name.length > 3){
            queryString = this.state.group_name
            console.log("in else", queryString)
          }
          return alert("noooop")
        };

        // fetch(`/${name}`, {
        //   method: 'POST',
        //   body: JSON.stringify(queryString),
        //   headers: new Headers({
        //     'Content-Type': 'application/json'
        //   })
        // }).then(res => res.json());

        const {groups} = this.state;
        groups.push({name: queryString});
        this.setState({groups, group_name: '', user_email: ''});
        
        // create a new group if none exists???

        event.preventDefault();

    }
  
    render() {
      return (
        <div>
          <form>
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
            <label>
                User (Email ID):
                <input 
                    name="user_email"
                    type="text" 
                    value={this.state.user_email} 
                    onChange={this.handleChange} />
            </label>
            <br /><br />
            
            <button name="adduser" onClick={this.handleClick}>ADD USER</button>
            <br /><br />      
            Groups:
            <br />
            <EventGroup>
              {this.state.groups.map((group, index) => {
                    return (
                      <EventGroupItem
                        key={index}
                        name={group.name}
                      />
                    );
                  })}
            </EventGroup>
            <br /><br />
            
            <button name="addgroup" onClick={this.handleClick}>ADD GROUP</button>
          </form>
        </div>
      )
    }
}

export default Groups;