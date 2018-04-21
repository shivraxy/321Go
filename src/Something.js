import React, {Component} from 'react';
import API from '../utils/API';

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

    // fetch()
    

}

render() {
    return (

    )
}
}