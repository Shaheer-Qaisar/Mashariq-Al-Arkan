'use client';

import React from 'react';
import ServiceBanner from './ServiceBanner';
import ServicesCards from './ServicesCards';
import ServiceProcess from './ServiceProcess';
import ServiceFeatures from './ServiceFeatures';
import ServiceStats from './ServiceStats';
import ServiceTestimonials from './ServiceTestimonials';
import ServiceFAQ from './ServiceFAQ';

const Services = () => {
  return (
    <>
      <ServiceBanner />
      <ServicesCards />
      <ServiceProcess />
      <ServiceFeatures />
      <ServiceStats />
      <ServiceTestimonials />
      <ServiceFAQ />
    </>
  );
};

export default Services;
