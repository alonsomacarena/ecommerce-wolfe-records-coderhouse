import React, { useState } from 'react';

function ContactForm({onChange}) {
    const [contactForm, setContactForm] = useState({
      name: '',
      email: '',
      phone: '',
      message:'',
    });
  
    function onInputChange(fieldId, evt) {
      const value = evt.target.value;
      const formData = { ...contactForm,[fieldId]: value};
      const {name,email,phone,message} = formData;
      onChange(Object.keys(formData).every(k => formData[k] !== '') && formData.email && formData.phone.length >= 13 &&formData.message.length > 1 ? 
      {name,email,phone,message} : null);
      setContactForm(formData);
    }

    return(
        <form className="col-lg-8 col-md-10">
        <div className="form-row">
            <div className="form-group col-sm-10 ">
                <label htmlFor="inputName" className="label-form">Nombre y Apellido</label>
                <input type="text" className="form-control" placeholder="Ingresa tu nombre completo" value={contactForm.name} onChange={(evt)=> onInputChange('name', evt)}/>
            </div>
                <div className="form-group col-sm-10">
                    <label htmlFor="inputEmail" className="label-form">Email</label>
                    <input type="email" className="form-control" placeholder="Ingresa tu email" value={contactForm.email} onChange={(evt)=> onInputChange('email', evt)}/>
                </div>
            <div className="form-group col-sm-10">
                <label htmlFor="inputPhone" className="label-form">Telefono de contacto</label>
                <input type="text" className="form-control" placeholder="+541166343420" value={contactForm.phone} onChange={(evt)=> onInputChange('phone', evt)}/>
            </div>
            <div className="form-group col-sm-10">
                <label htmlFor="inputMessage" className="label-form">Mensaje / Consulta</label>
                <textarea type="text" rows="5" className="form-control" placeholder="Escribí aquí tu consulta" value={contactForm.message} onChange={(evt)=> onInputChange('message', evt)}/>
            </div>
        </div>
        </form>
        
            )

}


export default ContactForm;
