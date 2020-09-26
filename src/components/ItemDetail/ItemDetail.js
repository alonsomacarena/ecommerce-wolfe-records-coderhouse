import React, {useEffect, useState } from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount.js';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import ButtonShop from './ButtonShop.js';



const getItem = (id) =>{
  return new Promise((res, rej) => {
    setTimeout(() => {
      const items = [{imageAlt:'eminem vinilo kamikaze', id: 'saLPxmzcNNmbL7e6iApw', artist: 'eminem', album: 'kamikaze', genre:'hip-hop', price:3330, stock:4, image:"/eminem-kamikaze.jpg", sello:'interscope records', date:"07 DEC 2018", imageDetails:'/eminem-kamikaze-detail.jpg'},  
      {imageAlt:'tyler the creator vinilo flower boy', id: 'yrMovDx30CAwmbnrwhrz', artist: 'tyler the creator', album: 'flower boy', genre:'hip-hop', price:2950, stock:6, image:"/flower-boy-tyler.jpg", sello:'columbia records', date:"17 NOV 2017", imageDetails:'/tyler-flower-detail.jpg'},  
      {imageAlt:'kendrick lamar vinilo damn', id: 'Djo6KyoWOyBtc6TNOfme', artist: 'kendrick lamar', album: 'damn.', genre:'hip-hop', price:2110, stock:7, image:"/kendrick-damn.jpg", sello:'polydor records', date:"14 JUL 2017", imageDetails:'/kendrick-damn-details.jpg'}, 
      {imageAlt:'tame impala vinilo the slow rush', id: 'IQARLmTJqRHhrDhVxC0i', artist: 'tame impala', album: 'the slow rush', genre:'alternativo', price:3440, stock:5, image:"/tame-the-slow.png", sello:'fiction records', date:"14 FEB 2020", imageDetails:'/tame-slow-details.jpg'}, 
      {imageAlt:'beatles vinilo a hard days night', id: 'K7lEAMrFTspCpHZWwKvz', artist: 'beatles', album: "a hard day's night", genre:'rock & pop', price:3000, stock:4, image:"/beatles-hard-days.jpg", sello:'parlophone records', date:"10 JUL 1964", imageDetails:'/beatles-hard-details.jpg'},    
      {imageAlt:'taylor swift vinilo 1989', id: 'grovGh7uCAzwaTVQuPOp', artist: 'taylor swift', album: '1989', genre:'rock & pop', price:3300, stock:6, image:"/taylor-1989.jpg", sello:'virgin emi records', date:"08 DEC 2014", imageDetails:'/taylor-1989-details.jpg'},  
      {imageAlt:'weezer vinilo weezer', id: 'jeJwNTOj7gegjflWx2un', artist: 'weezer', album: 'weezer', genre:'rock & pop ', price:2730, stock:5,image:"/weezer-weezer.jpg", sello:'umc geffen records', date:"28 OCT 2016", imageDetails:'/weezer-details.jpg'},  
      {imageAlt:'norah jones vinilo feels like home', id: 'dH5kcoNeTg6YaSHB0Aws', artist: 'nora jones', album: 'feel like home', genre:'jazz', price:2565, stock:3, image:"/norah-feel-home.jpg", sello:'blue note records', date:"30 ABR 2020", imageDetails:'/norah-home-details.png'},
      {imageAlt:'quincy jones vinilo at newport 61', id: 'w1b4BELUEyLh0v5JN921', artist: 'quincy jones', album: 'at newport 61', genre:'jazz', price:1655, stock:2, image:"/quincy-newport.jpg", sello:'vinyl passion records', date:"09 DEC 2016", imageDetails:'/quincy-details.jpg'}, 
      {imageAlt:'frank sinatra vinilo sinatra & swingin brass', id: '2GA8NCP7ZhPYwa3A6hN7', artist: 'frank sinatra', album: 'sinatra & swingin brass', genre:'jazz', price:3310, stock:3, image:"/sinatra-brass.jpg", sello:'umc records', date:"07 OCT 2014", imageDetails:'/sinatra-details.jpg'}, 
      { imageAlt:'rocky horror show vinilo soundtrack original', id: '98IIEMWxncfT2ndIROU7', artist: 'rocky horror show', album: 'rocky horror show', genre:'banda de sonido', price:2870, stock:2, image:"/rocky-horror.jpg", sello:'ode records', date:"24 JUL 2015", imageDetails:'/rocky-horror-details.jpg'}, 
      {imageAlt:'la la land soundtrack original pelicula', id: 'd2Asw5vCAtEbX0rz4brq', artist: 'la la land pelicula', album: 'la la land', genre:'banda de sonido', price:1850, stock:3, image:"/la-la-land.jpg", sello:'interscope records', date:"16 DEC 2016", imageDetails:'/la-la-land-details.png'}, 
      {id: 'qvMbbZRnPXlwebBVP3vc',album:"the blues",artist:"bb king",categorie:"blues",categoryId:"blues",date:"14 JUN 2018",image:"/bb-king-blues.jpg",imageAlt:"bb king vinilo the blues",imageDetails:"/bb-king-blues.jpg",price:"1570",sello:"vinyl passion",stock:"1"},
      {id: 'UCdakGDjltfIdypNOV3q',album:"electric light standard",artist:"james bay",categorie:"lanzamientos",categoryId:"lanzamientos",date:"24 JUL 2020",image:"/james-bay.jpg",imageAlt:"james bay vinilo electric light standard",imageDetails:"/james-bay.jpg",price:"3050",sello:"virgin emi",stock:"4"}, 
      {id:'AT600scU9gj2dMFe4M2I', album:"How I’m Feeling",artist:"lauv",categorie:"lanzamientos",categoryId:"lanzamientos",date:"06 MAR 2020",image:"/lauv-feelings.jpg",imageAlt:"lauv vinilo how im feeling",imageDetails:"/lauv-feelings-details.png",price:3180,sello:"awal",stock:5},
      {id:'2xEjSdQU74qLGnwuLLmO',album:"discutible",artist:"babasonicos",categorie:"rock argentino",categoryId:"rock argentino",date:"12 OCT 2018",image:"/babasonicos-discutible.jpg",imageAlt:"babasonicos vinilo discutible",imageDetails:"/babasonicos-discutible.jpg",price:2420,sello:"sony music",stock:2},
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



