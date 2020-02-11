import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import styles from './CourseItems.module.css';
import Title from '../Title/Title';
import Course from './CourseItem/CourseItem';

const getCourses = graphql`
  query {
    data: allStrapiCourse(sort: { fields: hours, order: DESC }, limit: 3) {
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

const CourseItemsTop = () => {
  const { data } = useStaticQuery(getCourses);
  const { courses } = data;

  return (
    <section className={styles.courses}>
      <Title title="Top" subtitle="Courses" />
      <div className={styles.center}>
        {courses.map(course => {
          return <Course key={course.id} course={course} />;
        })}
      </div>
      <Link to="/courses" className="btnPrimary">
        All Courses
      </Link>
    </section>
  );
};

export default CourseItemsTop;
