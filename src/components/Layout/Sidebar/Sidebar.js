import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { FaTimes } from 'react-icons/fa';

import styles from './Sidebar.module.css';
import links from '../../../constants/Links';
import { AppContext } from '../../../context/context';

const Sidebar = () => {
  const { isSidebarOpen, handleCloseSidebar, height } = useContext(AppContext);
  return (
    <div
      className={
        isSidebarOpen
          ? `${styles.sidebar}`
          : `${styles.sidebar} ${styles.closeSidebar} `
      }
    >
      <header
        className={
          height < 80
            ? `${styles.header}`
            : `${styles.header} ${styles.movingHeader}`
        }
      >
        <button onClick={handleCloseSidebar} className={styles.closeBtn}>
          Close <FaTimes className={styles.closeIcon}></FaTimes>
        </button>
      </header>
      <section className={styles.linksContainer}>
        <div className={styles.links}>
          {links.map(item => {
            return (
              <Link
                key={item.id}
                to={item.url}
                className={styles.link}
                onClick={handleCloseSidebar}
              >
                {item.text}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
