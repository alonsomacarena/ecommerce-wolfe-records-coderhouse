import React, {useEffect, useState } from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount.js';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import ButtonShop from './ButtonShop.js';


import 'firebase/firestore';
import { getFirestore } from '../../firebase';

function ItemDetails (){
  const [quantitySelected, setQuantitySelected] = useState();

  function sincronizeCounter(quantitySelected) {
    setQuantitySelected(quantitySelected);
  }
  const {id = undefined }= useParams()
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  useEffect(() => {
    const dbi = getFirestore();
    let collect = dbi.collection("items");
    const product = collect.doc(id);
    
    product.get().then((doc)=>{
      if(!doc.exists){
        console.log("detail not found");
      }
    console.log("detail found");
    setItem({id:doc.id, ...doc.data()});
    }).catch((error) =>{
      console.log("error getting detail", error);
    }).finally(()=>{
      setLoading(false);
    });
  },[id]);

 return(
  <> 
   {loading ? <p style={{color:"white", textAlign:"center"}}>Loading ....</p>:null}
 {item && 
  <div key={item.id}> 
  <div className="item-detail-titles-button-container col-sm-12">
  <div className="item-detail-titles-container">
  <h5 className="item-detail-album">{item.album}</h5>
  <h6 className="item-detail-artist">{item.artist}</h6>
  </div>
  <Link to={`/`}>
   <button className="button-inicio-cart" >Volver al Inicio</button></Link> 
   </div>
  <div className="col-sm-12 item-detail-container">
  <img src={`/images/${item.imageDetails}`}  className="col-sm-6 item-detail-image" alt={item.imageAlt}/>
  <div className="col-sm-5 item-detail-container-text">
  <p className="item-detail-text">Sello: <span className="details-text">{item.sello}</span></p>
  <p className="item-detail-text">Genero: <span className="details-text">{item.categorie}</span></p> 
  <p className="item-detail-text">Publicado: <span className="details-text">{item.date}</span></p> 
   <p className="item-detail-price">$AR {item.price}</p>
  <ItemCount
  initial={0}
  min={1}
  max={item.stock}
  onAdd={1}
  onChange={sincronizeCounter}
  />
  <ButtonShop quantity={quantitySelected} item={item} />
  </div> 
   </div>
   </div> }
   </>
 )
}
  
  export default ItemDetails;



