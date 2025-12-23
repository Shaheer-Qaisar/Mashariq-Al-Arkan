'use client';

import { Box, Typography, Container } from '@mui/material';
import Statistics from './Statistics';
import HomeBanner from './HomeBanner';
import ContactForm from '../contact/ContactForm';
import FAQ from './FAQ';
import WhyChooseUs from './WhyChooseUs';
import Clients from './Clients';  
import OurBrands from '../ourBrands/OurBrands';
import ServicesCards from '../services/ServicesCards';
import ProjectsCards from '../projects/ProjectsCards';

const HomeMain = () => {
  return (
   <>
   <HomeBanner/>
   <ServicesCards/>
   <ProjectsCards/>
   <Statistics/>
   <WhyChooseUs/>
   <OurBrands/>
   <Clients/>
   <FAQ/>
   <ContactForm/>
   </>
  );
};

export default HomeMain;

