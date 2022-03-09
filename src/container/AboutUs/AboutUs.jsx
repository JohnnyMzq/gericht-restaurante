import React from 'react';
import {images} from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about"> 
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="letra g" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Acerca de Nosotros</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className="p__opensans">Somos tecnicamente una familia, trabajamos todos en grupo y mantenemos un ideal en comun atender a los clientes y darles de comer la mejor comida que hayan probado</p>
        <button type="button" className="custom__button">Conoce mas</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
        <p className="p__opensans">Empezamos dos integrantes con la idea de tener un local el cual la familia, amigos o parejas pudieran reunirse. ahora nuestro staff es mayor a 10 integrantes...</p>
        <button type="button" className="custom__button">Conoce mas</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
