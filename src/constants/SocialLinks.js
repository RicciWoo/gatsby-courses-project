import React from 'react';
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

export default [
  {
    id: Math.random(),
    icon: <FaGithubSquare className="githubIcon" />,
    url: 'https://github.com/RicciWoo',
  },
  {
    id: Math.random(),
    icon: <FaLinkedin className="linkedinIcon" />,
    url: 'https://www.linkedin.com/in/xinquan-ricky-wu-006207147/',
  },
  {
    id: Math.random(),
    icon: <FaFacebookSquare className="facebookIcon" />,
    url: 'https://www.facebook.com/ricci.woo.7',
  },
];
