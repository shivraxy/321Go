import React, {Component} from 'react';
import EventList from './EventList';
import API from '../../utils/API';

class Events extends Component{
    state = {
        events: null
    }

    componentDidMount(){
        var that = this
        // search keyword and location hardcoded here
        API.search('fun', '94105')
        .then( res => {
            const events = res.data.events
            console.log(res.data.events);
            that.setState({
                events
            });
        });
    }

    
    render() {
        return ( 
            <div>
                <EventList events={this.state.events} /> 
            </div>
        )
    }
}

export default Events;