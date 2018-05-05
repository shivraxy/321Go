import React, { Component, PropTypes } from "react";
import EventList from "./EventList";

class Checkbox extends Component {
    state = {
        isChecked: false,
    }

    toggleCheckboxChange = () => {

        this.setState(({ isChecked }) => (
            {isChecked: !isChecked}
        ));

        //if checkbox is checked, send event to group for voting

        if (this.state.isChecked === true) {
            
        }
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