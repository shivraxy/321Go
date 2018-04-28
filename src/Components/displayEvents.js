import React, { Component } from "react";
import SelectEvent from "./SelectEvent";
import _ from "lodash";


class DisplayEvent extends Component {

    state = {
        events: this.props.events,
        
    }

    renderEvents = () => {
        // let arr = [];
        return this.props.events.map(event => {
            <div className="event">
                <h3 className="title">{this.props.events.name}</h3>
            </div>
        })
    }

    handleClick = (id) => {
        if (this.state.choices.includes(id)) {
            
            this.setState({ choices: [] });
        } else {
            
            this.setState({ choices: [...this.state.choices, id] })
        }
    }

    render() {
        console.log(this.state);

        return (
            <div classname="bodydiv">
                {this.renderEvents()}
                <h1>Select an Activity</h1>
                <SelectEvent event={this.state.events} />
            </div>)
    }
};

export default DisplayEvent;
