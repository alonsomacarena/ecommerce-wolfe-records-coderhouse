import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './ItemList.css';

import 'firebase/firestore';
import { getFirestore } from '../../firebase';


function ItemListFilter (){

    const [categories, setCategories]= useState([]);
  
  useEffect(()=>{
    const db= getFirestore();
    let collection = db.collection('categories');
 collection.get().then((querySnapshot)=>{
    setCategories(querySnapshot.docs.map(doc => ({...doc.data(), id:doc.id})))
  });
  },[]);

    return(
        <div className="list-filter col-sm-3"> 
        {categories.map((cat)=>
          <Link className="list-filter-item" to={`/categories/${cat.name}`} key={cat.id}>
            <li className="list-filter-item" key={cat.name}>{cat.name}</li></Link>)}
            <Link className="list-filter-item" to={`/`}>
            <li className="list-filter-item" key="categoria" >Todas</li></Link>
        </div>
    )
}

export default ItemListFilter;