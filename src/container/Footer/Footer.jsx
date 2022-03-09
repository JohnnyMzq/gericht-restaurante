import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactenos</h1>
        <p className="p__opensans">125 Peatonal Sarmiento, Mendoza, Mza 5519, ARG</p>
        <p className="p__opensans">+54 261-641-8231</p>
        <p className="p__opensans">+54 261-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;La Mejor Manera De Encontrarse es Perderse En El Serivicio A Otros.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horarios</h1>
        <p className="p__opensans">Lunes-Viernes:</p>
        <p className="p__opensans">08:00 am - 14:00 pm</p>
        <p className="p__opensans">Sabado-Domingo:</p>
        <p className="p__opensans">08:00 am - 13:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. Todos Los Derechos Reservados.</p>
    </div>

  </div>
);

export default Footer;