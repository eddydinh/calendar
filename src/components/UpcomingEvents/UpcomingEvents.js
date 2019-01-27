import React, {
    Component
} from 'react';
import EventCard from '../EventCard/EventCard';
import './UpcomingEvents.css'
export default class UpcomingEvents extends Component {

    render() {
        const {
            eventArray
        } = this.props;


        const eventComponent = eventArray.map((entry, i) => {
            
            return <EventCard

            key = {
                i
            }
            day = {
                entry.day
            }
            time={
                entry.time
            }
            
            topic={
                entry.course
            }

   
            />
        })
        return ( <
            div className = {
                "eventList"
            } > {
                eventComponent
            } <
            /div>
        );
    }
}