import React, {Component, Children, PropTypes} from 'react';
import API from '../../utils/API';

class Group extends Component{
    constructor(){
        super();
        this.state = {
            events: []
        };
    };

    componentDidMount(){
        
        // search keyword and location hardcoded here
        API.search('fun', '94105')
        .then( res => {
            this.setState({
                events: res.data.events
            });
            console.log(res.data.events[0]);
            console.log(this.state.events);
        });
    }

    renderEvents = () => {
        return this.state.events.map(event => {
            (
                <div className='card-body' key={event.id}>
                    <div className='card-side side-front'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-xs-6'>
                                    <img src={event.logo.original.url}/>
                                </div>
                                <div className='col-xs-6 side-front-content'>
                                    <h2>{event.locale}</h2>
                                    <h1>{event.name.text}</h1>
                                    <p>{event.description.text}</p>
                                    <p>{event.start.local}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    render() {
        return <div> {this.renderEvents()} </div>
    }
}

export default Group;