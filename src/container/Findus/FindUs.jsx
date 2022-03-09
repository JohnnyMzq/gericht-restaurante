import React from 'react';
import {SubHeading} from '../../components'
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto"/>
      <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Encontranos</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Peatonal Sarmiento, Ciudad De Mendoza, 125</p>
        <p className="p__cormorant" style={{color:'#dcca87', margin: '2rem 0'}}>Horarios</p>
        <p className="p__opensans">Lun - Vie: 08:00 am - 02:00 am</p>
        <p className="p__opensans">Sab - Dom: 08:00 am - 04:00 am</p>  
      </div>
      <button className="custom__button" style={{marginTop: '2rem'}}>Visitenos</button>
   </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="fin_us" />  
    </div>
  </div>
);

export default FindUs;
