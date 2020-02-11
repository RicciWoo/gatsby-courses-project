import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import styles from './CourseItems.module.css';
import Title from '../Title/Title';
import Course from './CourseItem/CourseItem';

const getCourses = graphql`
  query {
    data: allStrapiCourse(sort: { fields: hours, order: DESC }) {
      courses: nodes {
        title
        instructor
        url
        hours
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const CourseItemsAll = () => {
  const { data } = useStaticQuery(getCourses);
  const { courses } = data;

  return (
    <section className={styles.courses}>
      <Title title="All" subtitle="Courses" />
      <div className={styles.center}>
        {courses.map(course => {
          return <Course key={course.id} course={course} />;
        })}
      </div>
    </section>
  );
};

export default CourseItemsAll;
