import React, { Component, PropTypes } from "react";
import EventList from "./EventList";
import Vote from "./Vote";

class Checkbox extends Component {
    state = {
        isChecked: false,
    }

    toggleCheckboxChange = () => {

        this.setState(({ isChecked }) => (
            {isChecked: !isChecked}
        ));
        
        { (this.state.isChecked === true)
            ? this.checkToVote = event => {<Vote event />}
            : null
        }
    }

    checkToVote = () => {
        return props => <EventList event={props.event} {...props} />
    }

    render() {
        const { isChecked } = this.state;

        return (
            <div className="checkbox">
                <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={this.toggleCheckboxChange}
                />
                </label>
            </div>
        );
    } 
}

export default Checkbox;