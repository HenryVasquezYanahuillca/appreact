import React,{useState,useEffect} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Nav from './Nav';
import Footer from './Footer';


function Post() {  
  useEffect(()=>{
    fecthItems();
  },[]);
  const [items,setItems]=useState([]);
  const fecthItems=async()=>{
    const data=await fetch('https://jsonplaceholder.typicode.com/posts');
    const items =await data.json();
    setItems(items);
  }
  return (
    <div>
      <Header/>
      <Nav/>
      <div className="section">
      <div className="post">
        <h1>Post</h1>
        <div className="box-post">
        {items.map(item=>(
          <div className="item-post">
          <h2>{item.id}</h2>
          <p>{item.body}</p>
          </div>
        ))}
        </div>
      </div>
      </div>
      <Footer clase="footer-fixed"/>
    </div>

  );
}

export default Post;
