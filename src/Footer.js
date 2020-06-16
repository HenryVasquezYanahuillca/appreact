import React ,{Component}from 'react';
import './App.css';

class Footer extends Component {
  render (){
    return(
      <footer className={this.props.clase}>
            <p><span className="lnr lnr-copyright"></span> Todo los derechos reservados</p>
            <a
              className="app-link"
              href="https://www.onecreha.com/"
              rel="noopener noreferrer">Henry Vásquez Yanahuillca</a>
          </footer>
    );
  }
}

export default Footer;
