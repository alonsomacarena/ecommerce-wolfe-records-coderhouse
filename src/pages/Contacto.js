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
              <h2>Contacto</h2>
            </div>
          </div>
        </div>
      </section>
      <ContactForm onChange={updateUserInfo} ></ContactForm>
    <div className="d-flex flex-row-reverse mt-3">
    <button type="button" className="button-message"
    disabled={!userInfo} onClick={createMessage}>
            Enviar mensaje</button>        
    </div>  

      </>
    )
}

export default Contacto;