import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';


import Routers from './Routers';

class Signin extends Component {
  dataU={"hvasquez":"12345678","a":"1","b":"2"};//array de usuarios
  is_auth=false;
  constructor(props){
    super(props);
    this.state={
      redirect:false
    }
    this.btnsignin=this.btnsignin.bind(this);
  }
  render(){
    var aut=localStorage.getItem('auth');
    if (aut!=null) {
      return(<div><Routers/></div>);
    }

    //

    //

    return (
      <div className="box-signin">
            <div className="wrap-box-signin">
            <h1>Login React</h1>
            <img src={logo} className="signin-logo" alt="logo" />

            <form className="box-wrap-input" method="post">
              <div className="item-signin-input">
                <input type="text"  autoComplete="off" id="nickname" name="nickname" onKeyUp={this.validateInput.bind(this,'nickname')}/>
                <label htmlFor="nickname">Nickname</label>
              </div>
              <div className="item-signin-input">
                <input type="password"  autoComplete="off" id="password" name="password" onKeyUp={this.validateInput.bind(this,'password')}/>
                <label htmlFor="password" >Password</label>
              </div>
              <div className="item-signin-button">
                <button type="button" name="button" onClick={this.btnsignin}><span className="lnr lnr-user"></span>Siguiente</button>
              </div>
            </form>

            </div>
            <Footer clase="footer"/>
          </div>

          

    );

  }

  validateInput(id){
    var lbl=document.querySelector('#'+id).parentNode.children[1];
    if (document.querySelector('#'+id).value.length>0) {
      lbl.className='label-enable';
    }else{
      lbl.className='label';
    }
  }

  btnsignin() {
    var nick_name=document.querySelector('#nickname').value;
    var pass_word=document.querySelector('#password').value;

    if (nick_name===''||pass_word==='') {
      alert('please complete fields')
    }else{
      if (this.dataU[nick_name]===pass_word) {
        this.is_auth=true;
        localStorage.setItem('auth',nick_name);
        this.setState({redirect:true})
      }else{
        alert('Invalid login')
      }
    }

  }


}



export default Signin;
