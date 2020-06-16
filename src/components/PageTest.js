import React ,{Component}from 'react';
import icon from './../img/icon.png'
import icon1 from './../img/icon1.png'
import iconf from './../img/iconf.png'
import iconf1 from './../img/iconf1.png'
import './../App.css';
import './PageTest.css';

class PageTest extends Component {
  render(){
    return (
      <div>
        <div className="box-test">

        <div className="title-box">
          <div className="icon-title">
            <img src={icon} className="icon-card-test" alt="logo" />
          </div>
          <div className="body-title">
          <h2>APRENDEMOS +</h2>
          <h4>CRECEMOS Y EMPRENDEMOS SIEMPRE</h4>
          </div>
        </div>

        <p className="a-link">
        <a
        target="_blank"
          className="app-link"
          href="https://www.figma.com/file/OR5OcJ5bHIn1YMgDYW9WST/Untitled"
          rel="noopener noreferrer">Design in Figma</a>
        </p>

        <div className="wrap-card-test">


        <div className="card-test card-test-1">
          <div className="body-card-test">
            <div className="body-img-card-test">
            <img src={icon1} className="icon-card-test" alt="logo" />
            </div>
          </div>
          <div className="footer-card-test">
            <h2>DOCENTE<br/>DIRECTIVO(A)</h2>
          </div>
        </div>


        <div className="card-test card-test-2">
          <div className="body-card-test">
            <div className="body-img-card-test">
            <img src={icon1} className="icon-card-test" alt="logo" />
            </div>
          </div>
          <div className="footer-card-test">
            <h2>DOCENTE<br/>DIRECTIVO(A)</h2>
          </div>
        </div>


        <div className="card-test card-test-3">
          <div className="body-card-test">
            <div className="body-img-card-test">
            <img src={icon1} className="icon-card-test" alt="logo" />
            </div>
          </div>
          <div className="footer-card-test">
            <h2>DOCENTE<br/>DIRECTIVO(A)</h2>
          </div>
        </div>


        <div className="card-test card-test-4">
          <div className="body-card-test">
            <div className="body-img-card-test">
            <img src={icon1} className="icon-card-test" alt="logo" />
            </div>
          </div>
          <div className="footer-card-test">
            <h2>DOCENTE<br/>DIRECTIVO(A)</h2>
          </div>
        </div>



        </div>

        <div className="footer-box-test">
          <div className="img-footer">
          <img src={iconf}  alt="logo" />
          </div>
          <div className="img-footer">
          <img src={iconf1}  alt="logo" />
          </div>
        </div>

        </div>
      </div>
    );
  }

}


export default PageTest;
