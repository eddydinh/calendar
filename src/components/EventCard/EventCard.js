import React, {Component} from 'react';

          

export default  class EventCard extends Component {


  render(){

      
      
      return (
    <div>
      
  <article class="mw5 bg-light-green mw6-ns br3 hidden ba b--black-10 mv4" style={{marginLeft:'auto',marginRight:'auto'}}>
  <h1 class="f4 bg-white br3 br--top black-60 mv0 pv2 ph3">{`Study Session: ${this.props.topic}`}</h1>
  <div class="pa3 bt ">
    <p class="f6 f5-ns lh-copy measure">
          {this.props.day+ ": " + this.props.time}
    </p>
    
  </div>
</article>

    </div>
  );
          }
    
    
}

