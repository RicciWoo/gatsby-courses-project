import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';

import styles from './Navbar.module.css';
import links from '../../../constants/Links';
import icons from '../../../constants/SocialLinks';
import logo from '../../../images/logo.svg';
import { AppContext } from '../../../context/context';

const Navbar = () => {
  const { size, handleOpenSidebar, height } = useContext(AppContext);

  if (size > 992) {
    return (
      <nav
        className={
          height < 80
            ? `${styles.navbar}`
            : `${styles.navbar} ${styles.navbarFixed}`
        }
      >
        <div className={styles.center}>
          <Link to="/">
            <img src={logo} alt="john smilga logo"></img>
          </Link>
          <ul className={styles.links}>
            {links.map(link => {
              return (
                <li key={link.id}>
                  <Link to={link.url} className={styles.navLink}>
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.icons}>
            {icons.map(icon => {
              return (
                <a key={icon.id} href={icon.url} className={styles.navIcon}>
                  {icon.image}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav
        className={
          height < 80
            ? `${styles.navbar}`
            : `${styles.navbar} ${styles.navbarFixed}`
        }
      >
        <div className={styles.header}>
          <img src={logo} alt="john smilga logo"></img>
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={handleOpenSidebar}
          >
            Menu<FaAlignRight className={styles.toggleIcon}></FaAlignRight>
          </button>
        </div>
      </nav>
    );
  }
};

export default Navbar;
