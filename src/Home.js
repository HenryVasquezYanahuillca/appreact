import React,{Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './Nav';
import Footer from './Footer';
import PageTest from './components/PageTest';

class Home extends Component {
  render(){
    return (
      <div>
        <Header/>
        <Nav/>
        <div className="section">
        <PageTest/>
        </div>
        <Footer clase="footer-fixed"/>
      </div>

    );
  }
}

export default Home;
