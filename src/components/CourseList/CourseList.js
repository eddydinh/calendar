import React, {
    Component
} from 'react';
import CourseCard from '../CourseCard/CourseCard';
import './CourseList.css'
export default class CourseList extends Component {

    render() {
        const {
            courseArray
        } = this.props;


        const courseComponent = courseArray.map((entry, i) => {
            
            return <CourseCard

            key = {
                i
            }
            courseName = {
                entry
            }

   
            />
        })
        return ( <
            div className = {
                "courseList"
            } > {
                courseComponent
            } <
            /div>
        );
    }
}