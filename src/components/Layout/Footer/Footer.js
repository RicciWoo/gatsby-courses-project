import React from 'react';

import styles from './Footer.module.css';
import icons from '../../../constants/SocialLinks';
import logo from '../../../images/white-logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="john smilga logo"></img>
      </div>
      <div className={styles.icons}>
        {icons.map(item => {
          return (
            <a key={item.id} href={item.url} className={styles.icon}>
              {item.image}
            </a>
          );
        })}
      </div>
      <div className={styles.info}>
        © {new Date().getFullYear()} Ricky Wu. All rights reserved. Built with
        <a href="https://www.gatsbyjs.org/" className={styles.link}>
          Gatsby
        </a>
      </div>
    </footer>
  );
};

export default Footer;
