import React from 'react';
import './home.css'
import NavBar from '../components/NavBar/NavBar.js'
//import ItemCount from '../components/ItemCount/ItemCount.js'
import ItemList from '../components/Items/ItemList.js'
import ItemListFilter from '../components/Items/ItemListFilter';


function Home() {
    return (
      <>
      <NavBar />
      <div className="filter-itemlist-container col-sm-12">
      <ItemListFilter/>
      <ItemList />
      </div>
      </>
    );
  }
  
  export default Home;