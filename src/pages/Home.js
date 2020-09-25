import React, { useEffect, useState } from 'react';
import './home.css'
import ItemListFilter from '../components/Items/ItemListFilter';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';
import ItemList from '../components/Items/ItemList';
import { useParams } from 'react-router-dom';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../firebase';


function Home() {
const [items, setItems]= useState([]);
const [loading, setLoading]= useState(true);
const {categoryId = undefined}= useParams();

useEffect(()=>{
  const db= getFirestore();
  let collection = db.collection('items');
  
  let query = categoryId ? collection
  .where('categoryId', '==', categoryId): collection;
query.get().then((querySnapshot)=>{
  if(querySnapshot.size === 0){
    console.log("no hay item")
  }
  setLoading(false);
  setItems(querySnapshot.docs.map(doc => ({...doc.data(), id:doc.id})))
});
},[categoryId]);

    return (
      <>
      {loading ? <p style={{color:"white", textAlign:"center"}}>Loading ....</p>:null}
  <div className="filter-itemlist-container col-sm-12">
      <ItemListFilter/>
      <ItemList items={items}/>
      </div>
      </>
    );
  }
  
  export default Home;
