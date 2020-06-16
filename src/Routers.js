import React,{Component} from 'react';

import './App.css';
import About from './About';
import Post from './Post';
import Home from './Home';
import Signin from './Signin';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

class Routers extends Component {
  constructor(props){
    super(props)
    this.state={
      redirect:false
    }
  }
  render(){
    var aut=localStorage.getItem('auth');
    if (aut==null) {
      return(
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Signin}/>
          <Route path="/signin" component={Signin}/>
        </Switch>
        </BrowserRouter>
      );
    }else{
      return (

        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/post" component={Post}/>

        </Switch>
        </BrowserRouter>
      );
    }

  }
}

export default Routers;
