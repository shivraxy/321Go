import React, { Component } from "react";
import SelectEvent from "./SelectEvent";
import _ from "lodash";


class DisplayEvent extends Component {

    state = {
        events: [
            {
                activity: "fishing",
                id: 1
            },
            {
                event: "go to the movies",
                id: 2
            },
            {
                event: "kayaking",
                id: 3
            },
            {
                event: "swimming",
                id: 4
            }
          
        ],
        choices: []
    }

    handleClick = (id) => {
        if (this.state.choices.includes(id)) {
            
            this.setState({ choices: [] });
        } else {
            
            this.setState({ choices: [...this.state.choices, id] })
        }
    }

    render() {
        console.log(this.state.choices.length);

        return (
            <div>
                <h1>Select an Activity</h1>
                <ImageList handleClick={this.handleClick} images={_.shuffle(this.state.events)} />
            </div>)
    }
};

export default DisplayEvent;
