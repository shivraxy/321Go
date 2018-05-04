import React from "react";
import EventListItem from './EventListItem';

const EventList = props => {
        const listEvents = props.events ? 
            props.events.map((events, index) => {
                
                return (
                    <EventListItem
                        key={index}
                        name={events.name}
                        onClick={this.handleAddUser}
                    />
                );
            }) : "hey man there ain\'t shit here"
        return (
            <ul>
                {listEvents}
            </ul>
        )
    }
    



export default EventList;