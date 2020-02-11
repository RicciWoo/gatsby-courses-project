import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      {children}
      <Footer></Footer>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
