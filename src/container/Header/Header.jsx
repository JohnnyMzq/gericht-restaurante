import React from 'react';

import {images} from '../../constants'
import {SubHeading} from '../../components'
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
        <SubHeading title="Persigue el nuevo sabor"/>
        <h1 className="app__header-h1">La Llave Para Una Cena Agradable</h1>
        <p className="p__opensans" style={{margin:'2rem 0'}}>desde 1994 creando recetas originales un lugar perfecto para disfrutar en familia en pareja o con amigos, nuestros platos estan pensados para que el cliente disfrute cada bocado de la cena dejando un cliente sastifecho...</p>
        <button type="button" className="custom__button">Explora los Menus</button>
    </div>  
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;
