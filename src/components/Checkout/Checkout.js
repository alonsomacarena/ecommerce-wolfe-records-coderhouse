import React, { useState } from 'react';

function Checkout({onChange}) {
    const [form, setForm] = useState({
      name: '',
      email: '',
      email2: '',
      phone: '',
    });
  
    function onInputChange(fieldId, evt) {
      const value = evt.target.value;
      const formData = { ...form,[fieldId]: value};
      const {name,email,phone} = formData;
      onChange(Object.keys(formData).every(k => formData[k] !== '') && formData.email === formData.email2 && formData.phone.length >= 13 ? 
      {name,email,phone} : null);
      setForm(formData);
    }

    return(
        <form className="col-lg-8 col-md-10">
        <div className="form-row">
            <div className="form-group col-sm-10 ">
                <label htmlFor="inputName" className="label-form">Nombre y Apellido</label>
                <input type="text" className="form-control" placeholder="¿Quién recibe el pedido?" value={form.name} onChange={(evt)=> onInputChange('name', evt)}/>
            </div>
            <div className="form-row email col-sm-10">
                <div className="col-sm-6">
                    <label htmlFor="inputEmail" className="label-form">Email</label>
                    <input type="email" className="form-control" placeholder="Ingresa tu email" value={form.email} onChange={(evt)=> onInputChange('email', evt)}/>
                </div>
            <div class="col-sm-6">
                <label htmlFor="inputEmailRetry" className="label-form">Repite tu Email</label>
                <input type="email" className="form-control" placeholder="Repite tu email" value={form.email2} onChange={(evt)=> onInputChange('email2', evt)}/>
            </div>
            </div>
            <div className="form-group col-sm-10">
                <label htmlFor="inputPhone" className="label-form">Telefono de contacto</label>
                <input type="text" className="form-control" placeholder="+541166343420" value={form.phone} onChange={(evt)=> onInputChange('phone', evt)}/>
            </div>
        </div>
        </form>
        
            )

}


export default Checkout;
