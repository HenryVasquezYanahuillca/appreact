import React ,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'

class Nav extends Component {
  render(){
    return (
      <div>
      <nav className="nav">
            <div className="header-nav">
              <h1>Nav App React</h1>
              <div className="logo-nav">
                <img src={logo} className="nav-logo" alt="logo" />
              </div>
            </div>
            <ul>
              <li><Link to="./home"><span className="lnr lnr-home"></span>Home</Link></li>
              <li><Link to="./about"><span className="lnr lnr-question-circle"></span>About</Link></li>
              <li><Link to="./post"><span className="lnr lnr-bubble"></span>Post</Link></li>
            </ul>
        </nav>
        <div className="close-nav" onClick={this.manageNav}></div>
        </div>
    );
  }

  manageNav(){
    document.querySelector('.nav').classList.toggle('nav-show');
    document.querySelector('.close-nav').classList.toggle('close-nav-show');
  }

}


export default Nav;
