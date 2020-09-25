import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import 'firebase/firestore';
import { getFirestore } from '../../firebase';

const styles={ color:"white", marginTop: 30, marginLeft:10}

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
        <div className="list-filter col-sm-3" style={styles}> 
        {categories.map((cat)=>
          <Link to={`/categories/${cat.name}`}>
            <li key={cat.name}>{cat.name}</li></Link>)}
        </div>
    )
}

export default ItemListFilter;