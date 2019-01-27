import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import UploadButton from './components/UploadButton/UploadButton';
import CourseList from './components/CourseList/CourseList';
import FreePanel from './components/FreePanel/FreePanel';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents.js';
import './App.css';



const initialState = {
  input: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    phone:''
  },
    courses:[]
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
        phone:data.phone,
      email: data.email
    }})
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

 

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }
  
  
    CheckExtension = (filename) => {
        
        if ( /\.(ics)$/i.test(filename) === false ) { return false; }
        return true;
}
 onFileSubmit = (event) =>{
      const{user}= this.state;

        //console.log(user.id);
   
    if(event.target.files[0]===null){
        console.log("error");
        return
    }
     
    if (!(this.CheckExtension(event.target.files[0].name))){
       console.log("wrong file type");
        return
    }
    

       const formData = new FormData();
      
            
            formData.append('id',user.id);
            formData.append('file',event.target.files[0]);
          


//  //Use this to inspect formData
//        for (var pair of formData.entries()) {
//            console.log(pair[0]+ ', ' + pair[1]); 
//        }

      
        fetch('http://localhost:3000/addfile',{
            method: 'post',
            body:formData
            
        })
        .then(response => response.json())
        .then((data) => {
           if(data === 'success'){
         
            setTimeout(()=>{fetch("http://localhost:3000/courses/"+1).then(response=>response.json()).then((data)=>{
                var whole = JSON.parse(data);
                console.log(data);
                //console.log(JSON.parse(data[0].courses));
            })},0);
               
            }
     
        })
        
 
        
 }
 

  render() {
    const { isSignedIn, imageUrl, route} = this.state;
       const coursearr =['COSC121','COSC122','COSC123'];
       const timearr =[{day:'Monday',time:'15:30-17:20'},{day:'Monday',time:'16:30-17:20'},{day:'Thursday',time:'8:30-11:20'}];
        const eventarr = [{day:'Monday', time:'15:30-17:20',course:'COSC111'},{day:'Thursday', time:'16:30-18:28',course:'COSC122'},{day:'Friday', time:'8:30-10:20',course:'COSC123'}]
//      const coursearr= [];
//      const timearr =[];
//      const eventarr =[];
    return (
      <div className="App">
      
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
    
                <UploadButton handleUploadedFile ={this.onFileSubmit}/>
                <CourseList courseArray={coursearr} />
                <h1 style={{position:'absolute', left:"46%", color:'white',top:'18px'}}>FREE TIMES</h1>
                <FreePanel timeArray={timearr}></FreePanel>
                <h1 style={{position:'absolute', left:"74%", color:'white',top:'18px'}}>UPCOMING EVENTS</h1>
                <UpcomingEvents eventArray={eventarr}></UpcomingEvents>
            </div>
          : (
             route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;