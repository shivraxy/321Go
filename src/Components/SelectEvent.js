import React, {Component} from 'react';
import API from '../utils/API';
import DisplayEvent from './displayEvents'

class SelectEvent extends Component {
    constructor() {
        super();
        this.state = {
            // events = [],
            "keywords": '',
            "location": '',
        };
        this.events = [];
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
            .then(res => {
               res.events.forEach(event => {
                let obj = {}
                obj.name = event.name.text;
                obj.description = event.description.text;
                obj.url = event.url;
                this.events.push(obj);
                }) 
            })
            .catch(err => console.log(err));
            //pull what we want from the JSON results, i.e. description, name, location, etc
            //create a variable and store these pieces of information so they can be used outside of this function
            //parse object for use outside of this
            //create the results in an object
            //want to loop through res.events
          
    }

    ComponentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>Select an Event</h1>
                <DisplayEvent handleClick={this.handleClick} events={this.events} />
            </div>)
    }
}

export default SelectEvent;