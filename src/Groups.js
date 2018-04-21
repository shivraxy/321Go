import React from 'react';
import GroupMembers from './GroupMembers';
// import App from './App';

class Groups extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        // SEND FORM TO APP.JS...


        // if SUBMIT value = ADD USER then


        // if SUBMIT value = ADD GROUP then


        event.preventDefault();

        //reset state of input fields to empty
        //NOT WORKING!
        // this.group_name.state.value = '';
        // this.user_email.state.value = '';
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
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
            
            <input type="submit" value="ADD USER" />
            <br /><br />

            Group Members:
            <br />
            <GroupMembers />
            <br /><br />
            
            <input type="submit" value="ADD GROUP" />
          </form>
        </div>
      )
    }
}

export default Groups;