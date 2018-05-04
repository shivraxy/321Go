import React, { Component } from 'react';
import EventListItem from './EventListItem';

class GroupCreate extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: "",
      selectedEvents: []
    }
  }

  selectEvent = (i) => {
    const index = this.state.selectedEvents.indexOf(i);
    if (index == -1) {
      this.setState({selectedEvents: [...this.state.selectedEvents, i]})
    } else {
      this.setState({selectedEvents: [
        ...this.state.selectedEvents.slice(0, index),
        ...this.state.selectedEvents.slice(index + 1)
      ]})
    }
  }

  handleInputChange = (e) => {
    this.setState({name: e.target.value})
  }
  
  saveGroup = () => {

    const {name, selectedEvents} = this.state;

    if (name.length) {
      this.props.onSaveGroup({name, selectedEvents})
    } else {
      alert("name required");
    }
  }

  render() {
    const events = ["Bob","Bob","Bob","Bob","Bob","Bob","Bob","Bob"]
    return (
      <div class="group-wrapper">
        <div>
          Group Name: <input onChange={this.handleInputChange} value={this.state.groupName} />
        </div>
        <ul>
          {events && events.map((event, i) => {
            const isSelected = this.state.selectedEvents.indexOf(i) != -1
            return (
              <div className={"select-event-item" + (isSelected ? " selected" : "") } data-id={i}>
                <EventListItem name={{text: event}} />
                <button onClick={() => this.selectEvent(i)}>SELECT</button>
              </div>
            )
          })}
        </ul>
        <button className="save-button" onClick={this.saveGroup}>SAVE</button>
      </div>
    )
  }
}

export default GroupCreate;