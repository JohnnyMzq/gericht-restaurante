import React from 'react';

import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
    <img src={images.chef} alt="chef"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Palabras del Chef"/>  
      <h1 className="headtext__cormorant">En lo que creemos</h1>


      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"/>
          <p className="p__opensans">En un servicio rapido y puntual, mantener el sabor en cada plato y agasajar a cada cliente. </p>
        </div>
          <p className="p__opensans"> cumpliendo sus expectativas y agasajando sus paladares con la mejor comida. para mantener el estomago lleno y el corazon contento</p>
      </div>

    <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Fundador</p>
        <img src={images.sign} alt="sign"/> 
    </div>

    </div>
  </div>
);

export default Chef;
