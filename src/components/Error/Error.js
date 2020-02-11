import React from 'react';
import { Link } from 'gatsby';

import styles from './Error.module.css';
import Layout from '../Layout/Layout';
import Banner from '../Banner/Banner';

const Error = () => (
  <Layout>
    <header className={styles.error}>
      <Banner title="oops! it's a dead end">
        <Link to="/" className="btn-white">
          back home
        </Link>
      </Banner>
    </header>
  </Layout>
);

export default Error;
