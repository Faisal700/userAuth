import React, { Component } from 'react'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import fire from './config/Fire'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blog from './components/Blog'
import CreateProfile from './components/CreateProfile'
 class App extends Component {
   constructor(){
     super();
     this.state={
       user:null
     }
   }
   componentDidMount(){
    this.authListener();
  }
   authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }
  render() {
    return (
      <div>
    
        <Router>
        <Navbar />
          <Switch>
        {this.state.user ? (<Route  path='/' component={Home} />) : (<Route path='/login' component={Login} />)}
        <Route exact path='/' component={Blog} />
        <Route path='/createprofile' component={CreateProfile} />
        </Switch>
        </Router>
      </div>
    )
  }
}
export default App