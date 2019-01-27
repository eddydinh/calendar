import React, {Component} from 'react';

          

export default  class FreeCard extends Component {


  render(){

      
      
      return (
    <div>
      
  <article class="mw5 bg-light-green mw6-ns br3 hidden ba b--black-10 mv4" style={{marginLeft:'auto',marginRight:'auto'}}>
  <h1 class="f4 bg-white br3 br--top black-60 mv0 pv2 ph3">{this.props.day}</h1>
  <div class="pa3 bt ">
    <p class="f6 f5-ns lh-copy measure">
          {this.props.time}
    </p>
    <hr/>
     <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-green" href="#0" style={{marginRight:'30px'}}>ACCEPT</a>
       <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-red" href="#0">DECLINE</a>
  </div>
</article>

    </div>
  );
          }
    
    
}

