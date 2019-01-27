import React, {
    Component
} from 'react';


const initialState = {
    bgColor: 'f4 bg-near-black white mv0 pv2 ph3',
    bgColor2: 'pa3 bt',
    bgColor3: "mw5 mw6-ns hidden ba mv4",
    click: false
};
export default class CourseCard extends Component {

    constructor() {
        super();
        this.state = initialState;
    }

    HandleClick = () => {
        if (!this.state.click) {
            this.setState({
                bgColor: 'f4 bg-light-green white mv0 pv2 ph3',
                bgColor2: 'pa3 bt light-green',
                bgColor3:"mw5 mw6-ns hidden ba b--light-green mv4",
                click: !this.state.click
            })
        } else {
            this.setState({
                bgColor: 'f4 bg-near-black white mv0 pv2 ph3',
                bgColor2: 'pa3 bt',
                bgColor3: "mw5 mw6-ns hidden ba mv4",
                click: !this.state.click
            })
        }
    }

    render() {



        return ( <
            div >

            <
            article className = {
                this.state.bgColor3
            }
            style = {
                {
                    cursor: 'pointer'
                }
            }
            onClick = {
                () => {
                    this.HandleClick();
                }
            } >
            <
            h1 className = {
                this.state.bgColor
            } > {
                this.props.courseName
            } < /h1> <
            div className = {
                this.state.bgColor2
            } >
            <
            p className = "f6 f5-ns lh-copy measure mv0" >
            CLICK TO VOTE FOR STUDY SESSION <
            /p> <
            /div> <
            /article>


            <
            /div>
        );
    }


}