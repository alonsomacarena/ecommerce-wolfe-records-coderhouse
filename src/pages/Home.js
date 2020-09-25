import React from 'react';
import './home.css'
import ItemListFilter from '../components/Items/ItemListFilter';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';
//import ItemList from '../components/Items/ItemList';
//import ListItem from '../components/Items/ListItem.js';
import ItemList from '../components/Items/ItemList';
//import ItemDetails from '../components/ItemDetail/ItemDetail';


function Home() {
    return (
      <>
      <ItemDetailContainer/>
  <div className="filter-itemlist-container col-sm-12">
      <ItemListFilter/>
      <ItemList/>
      </div>
      </>
    );
  }
  
  export default Home;
