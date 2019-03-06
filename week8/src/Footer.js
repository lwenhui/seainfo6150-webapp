import React from 'react';
import style from './Footer.module.css';

const Footer = ({}) => (
  <div className={style.footer}>
    <p>&copy; 2019, </p>
    <address className={style.address}>Wenhui Liu</address>
  </div>
);

export default Footer;
