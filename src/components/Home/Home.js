import React from 'react';

import Layout from '../Layout/Layout';
import HomeBanner from './HomeBanner/HomeBanner';
import TopCourses from './TopCourses/TopCourses';

const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <TopCourses />
    </Layout>
  );
};

export default Home;
