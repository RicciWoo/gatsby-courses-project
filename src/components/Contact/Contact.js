import React from 'react';

import styles from './Contact.module.css';
import Layout from '../Layout/Layout';
import Title from '../Title/Title';

const Contact = () => {
  return (
    <Layout>
      <section className={styles.contact}>
        <Title title="Contact"></Title>
        <article className={styles.text}>
          <p>
            If you are looking to get ahold of me, you can send me an email at{' '}
            <a href="https://www.linkedin.com/in/xinquan-ricky-wu-006207147/">
              ricciwoo@gmail.com
            </a>
            .
          </p>
          <p>
            You can also reach me on GitHub at{' '}
            <a href="https://github.com/RicciWoo">@RicciWoo</a>.
          </p>
        </article>
      </section>
    </Layout>
  );
};

export default Contact;
