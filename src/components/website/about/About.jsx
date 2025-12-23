'use client';

import { Box, Typography, Container } from '@mui/material';
import Banner from './Banner';
import OurPrinciples from './OurPrinciples';
import WhyChooseUs from '../home/WhyChooseUs';
import FAQ from '../home/FAQ';
import Statistics from '../home/Statistics';

const About = () => {
  return (
    <>
      <Banner />
      <OurPrinciples />
      <Statistics/>
      <WhyChooseUs/>
      <FAQ/>
    </>
  );
};

export default About;

