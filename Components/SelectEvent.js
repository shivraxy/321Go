import React, {Component} from 'react';
import API from '../utils/API';
import DisplayEvent from './displayEvents'

class SelectEvent extends Component {
    constructor() {
        super();
        state = {
            events = [],
            keywords = '',
            location = '',
        };
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventdefault();
        this.searchEvents(this.state.keywords, this.state.location)
    }

    searchEvents = (keywords, location) => {
        API.search(keywords, location)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    }

ComponentDidMount() {

}

    render() {
        return (
            <div>
                <h1>Select an Event</h1>
                <SelectEvent handleClick={this.handleClick} images={this.state.events} />
            </div>)
    }
}

export default SelectEvent;