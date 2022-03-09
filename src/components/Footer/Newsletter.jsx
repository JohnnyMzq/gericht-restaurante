import React from 'react';
import {SubHeading} from '../../components'
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Boletin Promos"/>  
      <h1 className="headtext__cormorant">Suscribite A Nuestras Promos</h1>
      <p className="p__opensans">Y nunca te pierdas las promociones</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Ingresa Tu Email"/>
      <button className="custom__button">Suscribete!</button>  
    </div>
  </div>
);

export default Newsletter;
