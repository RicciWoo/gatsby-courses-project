import React from 'react';
import Image from 'gatsby-image';

import styles from './CourseItem.module.css';

const Course = ({ course }) => {
  const { title, url, hours, instructor, image } = course;
  const fluid = image.childImageSharp.fluid;

  return (
    <article className={styles.course}>
      <div className={styles.imgContainer}>
        <Image fluid={fluid} alt={title} className={styles.img} />
        <a
          href={url}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Enroll
        </a>
      </div>
      <div className={styles.footer}>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>by: {instructor}</p>
          <p>{hours} hours</p>
        </div>
      </div>
    </article>
  );
};

export default Course;
