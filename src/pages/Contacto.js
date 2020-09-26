import React,{useState} from 'react';
import './home.css';
import ContactForm from './ContactForm.js';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../firebase';


function Contacto (){

    const [userInfo, setUserInfo]= useState(null);
    const [messageId, setMessageId]= useState(null);
    
    function updateUserInfo(userInfo){
        setUserInfo(userInfo)
    }
    
    async function createMessage(){
        const db = getFirestore();
        const messages = db.collection('contactMessages');
    
        const newMessage = {
            userContact: userInfo,
            date: firebase.firestore.FieldValue.serverTimestamp(),
        }
    
        try {
            const {id}= await messages.add(newMessage);
            setMessageId(id)
        //corrobora que guarde el id de la nueva orden
        console.log('id', id);
        } catch(err){
            //se setea feedback para el user
            console.log('error')
        }}
    
    

    return(
        <>
        <section className="hero-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-9 hero-container">
              <h2 className="h2-contacto">Contacto</h2>
            </div>
          </div>
        </div>
      </section>
      <p className="col-sm-8 text-nosotros contact-text">
          Si tenes alguna consulta acerca de nuestros productos o si queres comentarnos algo, contactate con nosotros!
      </p>
      <ContactForm onChange={updateUserInfo} ></ContactForm>
    <div className="d-flex flex-row-reverse mt-3">
    <button type="button" className="button-message"
    disabled={!userInfo} onClick={createMessage}>
            Enviar mensaje</button>        
    </div>  
    {messageId && <>
    <p className="col-sm-8 message-client" >Gracias por enviarnos tu mensaje!</p>
    <p className="col-sm-8 message-client1" >En breve nos comunicaremos con vos acerca de tu consulta</p>
    </>}
      </>
    )
}

export default Contacto;