import React, {useEffect, useState, useContext } from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount.js';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import ButtonShop from './ButtonShop.js';



const getItem = (id) =>{
  return new Promise((res, rej) => {
    setTimeout(() => {
      const items = [{ id: 'EMIN08', artist: 'eminem', album: 'kamikaze', genre:'hip-hop', price:3330, stock:4, image:"/eminem-kamikaze.jpg", sello:'interscope records', date:"07 DEC 2018", imageDetails:'/eminem-kamikaze-detail.jpg'},  
      { id: 'TYLER4', artist: 'tyler the creator', album: 'flower boy', genre:'hip-hop', price:2950, stock:6, image:"/flower-boy-tyler.jpg", sello:'columbia records', date:"17 NOV 2017", imageDetails:'/tyler-flower-detail.jpg'},  
      { id: 'KEND00', artist: 'kendrick lamar', album: 'damn.', genre:'hip-hop', price:2110, stock:7, image:"/kendrick-damn.jpg", sello:'polydor records', date:"14 JUL 2017", imageDetails:'/kendrick-damn-details.jpg'}, 
      { id: 'TAME33', artist: 'tame impala', album: 'the slow rush', genre:'alternativo', price:3440, stock:5, image:"/tame-the-slow.png", sello:'fiction records', date:"14 FEB 2020", imageDetails:'/tame-slow-details.jpg'}, 
      { id: 'BEAT15', artist: 'beatles', album: "a hard day's night", genre:'rock & pop', price:3000, stock:4, image:"/beatles-hard-days.jpg", sello:'parlophone records', date:"10 JUL 1964", imageDetails:'/beatles-hard-details.jpg'},    
      { id: 'TAY013', artist: 'taylor swift', album: '1989', genre:'rock & pop', price:3300, stock:6, image:"/taylor-1989.jpg", sello:'virgin emi records', date:"08 DEC 2014", imageDetails:'/taylor-1989-details.jpg'},  
      { id: 'WEZER11', artist: 'weezer', album: 'weezer', genre:'rock & pop ', price:2730, stock:5,image:"/weezer-weezer.jpg", sello:'umc geffen records', date:"28 OCT 2016", imageDetails:'/weezer-details.jpg'},  
      { id: 'NORA22', artist: 'nora jones', album: 'feel like home', genre:'jazz', price:2565, stock:3, image:"/norah-feel-home.jpg", sello:'blue note records', date:"30 ABR 2020", imageDetails:'/norah-home-details.png'},
      { id: 'JONES44', artist: 'quincy jones', album: 'at newport 61', genre:'jazz', price:1655, stock:2, image:"/quincy-newport.jpg", sello:'vinyl passion records', date:"09 DEC 2016", imageDetails:'/quincy-details.jpg'}, 
      { id: 'FRANK80', artist: 'frank sinatra', album: 'sinatra & swingin brass', genre:'jazz', price:3310, stock:3, image:"/sinatra-brass.jpg", sello:'umc records', date:"07 OCT 2014", imageDetails:'/sinatra-details.jpg'}, 
      { id: 'ROCKY07', artist: 'rocky horror show', album: 'rocky horror show', genre:'banda de sonido', price:2870, stock:2, image:"/rocky-horror.jpg", sello:'ode records', date:"24 JUL 2015", imageDetails:'/rocky-horror-details.jpg'}, 
      { id: 'LALA09', artist: 'la la land pelicula', album: 'la la land', genre:'banda de sonido', price:1850, stock:3, image:"/la-la-land.jpg", sello:'interscope records', date:"16 DEC 2016", imageDetails:'/la-la-land-details.png'}, 
    ].find(p => p.id === id );
    res(items);
    },2000);
  });
}


function ItemDetails (){


  const [quantitySelected, setQuantitySelected] = useState();

  function sincronizeCounter(quantitySelected) {
    setQuantitySelected(quantitySelected);
  }
  const {id}= useParams()
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  useEffect(() => {
    getItem(id).then(res =>{
      console.log("retrieved item:", res);
      setLoading(false);
      setItem(res)
    });
    return () => {
      console.log('dismounted ItemDetail')
    }
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
   <button className="button-inicio" >Volver al Inicio</button></Link> 
   </div>
  <div className="col-sm-12 item-detail-container">
  <img src={`/images/${item.imageDetails}`}  className="col-sm-6 item-detail-image" />
  <div className="col-sm-5 item-detail-container-text">
  <p className="item-detail-text">Sello: <span className="details-text">{item.sello}</span></p>
  <p className="item-detail-text">Genero: <span className="details-text">{item.genre}</span></p> 
  <p className="item-detail-text">Publicado: <span className="details-text">{item.date}</span></p> 
  <p className="item-detail-text">ID producto: <span className="details-text">{id}</span></p>  
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



