import React,{Component} from 'react';
import logo from './../../logo.svg';
import './../../App.css';
import {Redirect} from 'react-router-dom';

class Header extends Component{
  constructor(props){
    super(props)
    this.state={
      redirect:false
    }
    this.btnSignout=this.btnSignout.bind(this);
  }
  render(){
    var aut=localStorage.getItem('auth');
    if (aut==null) {
      localStorage.removeItem('auth');
      return(<div><Redirect to="/"/></div>);
    }else{

      return (
        <div>
        <header className="header">
        <div className="wrap-header">
        <button className="btn-menu" type="button" name="button" onClick={this.manageNav}><span className="lnr lnr-menu"></span></button>
        <div className="box-preview-title">
        <div className="logo-header">
        <img src={logo} className="signin-logo" alt="logo" />
        </div>
        <h1>Dashboard</h1>
        </div>
        <button  type="button" name="button">{localStorage.getItem('auth')}<span className="lnr lnr-chevron-down"></span></button>
        </div>
        </header>

        <div className="menu-user">
        <ul>
        <li ><span className="lnr lnr-exit"></span>Signout</li>
        </ul>
        </div>
        </div>
      );
    }
  }
  btnSignout(){
    localStorage.removeItem('auth');
    this.setState({redirect:true})
  }
  manageNav(){
    document.querySelector('.nav').classList.toggle('nav-show');
    document.querySelector('.close-nav').classList.toggle('close-nav-show');
  }
  manageMenu(){
    document.querySelector('.menu-user').classList.toggle('menu-user-show');
  }


}

export default Header;
