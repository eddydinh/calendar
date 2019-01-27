import React, {
    Component
} from 'react';
import FreeCard from '../FreeCard/FreeCard';
import './FreePanel.css'
export default class FreePanel extends Component {

    render() {
        const {
            timeArray
        } = this.props;


        const freeComponent = timeArray.map((entry, i) => {
            
            return <FreeCard

            key = {
                i
            }
            day = {
                entry.day
            }
            time={
                entry.time
            }

   
            />
        })
        return ( <
            div className = {
                "freeList"
            } > {
                freeComponent
            } <
            /div>
        );
    }
}