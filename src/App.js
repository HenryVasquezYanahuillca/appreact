import React,{Component} from 'react';
import './App.css';
import Routers from './Routers';
import Signin from './Signin';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      redirect:false
    }
  }
  render(){
    var aut=localStorage.getItem('auth');
    if (aut!=null) {
      return(<div><Routers/></div>);
    }
    return (
      <div><Signin/></div>
    );
  }
}

export default App;
/* {aut==null?<Signin/>:<Routers/>}*/
