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
    <h1 className="navbar-brand col-sm-3" ><img src={`/images/wolfe-logo-aqua.png`} className="navbar-logo" alt="logo wolfe records" />Records</h1>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto col-sm-12">
      <li className="nav-item ">
          <Link className="nav-item" to={`/`}>
          <button type="button" className="nav-link" style={{border:"none", backgroundColor:"transparent", textTransform:"uppercase"}} >Home</button></Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-item" to={`/Nosotros`}>
          <button type="button" className="nav-link" style={{border:"none", backgroundColor:"transparent", textTransform:"uppercase"}} >Nosotros</button></Link>
        </li>
        <li className="nav-item dropdown ">
          <button type="button" style={{border:"none", backgroundColor:"transparent", textTransform:"uppercase"}} className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Vinilos
          </button>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {categories.map((cat)=>
          <Link className="dropdown-item" to={`/categories/${cat.name}`} key={cat.id} >
            <span className="dropdown-item" key={cat.name}>{cat.name}</span></Link>)}
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to={`/`}>
            <span className="dropdown-item" key="categoria" >Todas</span></Link>
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