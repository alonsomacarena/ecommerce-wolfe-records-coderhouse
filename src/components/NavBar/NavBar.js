import React,{useState, useEffect} from 'react';
import './navBar.css'
import CartIcon from './CartIcon';
import {Link} from 'react-router-dom';


import 'firebase/firestore';
import { getFirestore } from '../../firebase';


function NavBar (){

  const [categories, setCategories]= useState([]);
  
  useEffect(()=>{
    const db= getFirestore();
    let collection = db.collection('categories');
 collection.get().then((querySnapshot)=>{
    setCategories(querySnapshot.docs.map(doc => ({...doc.data(), id:doc.id})))
  });
  },[]);

  return(
    <nav className="navbar navbar-expand-lg ">
    <a className="navbar-brand col-sm-3" href="#"><img src={`/images/wolfe-logo-aqua.png`} className="navbar-logo" />Records</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto col-sm-8">
      <li className="nav-item ">
          <Link className="nav-item" to={`/`}>
          <button type="button" className="nav-link" style={{border:"none", backgroundColor:"transparent", textTransform:"uppercase"}} >Home</button></Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-item" to={`/Nosotros`}>
          <button type="button" className="nav-link" style={{border:"none", backgroundColor:"transparent", textTransform:"uppercase"}} >Nosotros</button></Link>
        </li>
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Vinilos
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {categories.map((cat)=>
          <Link to={`/categories/${cat.name}`}>
            <li key={cat.name}>{cat.name}</li></Link>)}
          </div>
        </li>
        <li className="nav-item ">
          <Link className="nav-item" to={`/Contacto`}>
          <button type="button" className="nav-link" style={{border:"none", backgroundColor:"transparent", textTransform:"uppercase"}} >Contacto</button></Link>
        </li>
        <li className="nav-item ">
        <CartIcon  />
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar;