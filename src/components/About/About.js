import React from 'react';

import styles from './About.module.css';
import Layout from '../Layout/Layout';
import Title from '../Title/Title';

const About = () => {
  return (
    <Layout>
      <section className={styles.about}>
        <Title title="about"></Title>
        <article className={styles.text}>
          <p>
            Hello, I am Ricky Wu and I am a Software Engineer and Web Developer.
          </p>
        </article>
      </section>
    </Layout>
  );
};

export default About;
