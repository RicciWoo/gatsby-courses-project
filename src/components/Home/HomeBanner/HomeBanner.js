import React, { useContext } from 'react';
import { AppContext } from '../../../context/context';

import SmallBanner from './SmallBanner/SmallBanner';
import Background from './Background/Background';
import Banner from '../../Banner/Banner';

const HomeBanner = () => {
  const { size } = useContext(AppContext);
  if (size < 776) {
    return (
      <SmallBanner>
        <Banner title="project-based web development courses"></Banner>
      </SmallBanner>
    );
  }
  return (
    <Background>
      <Banner title="project-based web development courses"></Banner>
    </Background>
  );
};

export default HomeBanner;
