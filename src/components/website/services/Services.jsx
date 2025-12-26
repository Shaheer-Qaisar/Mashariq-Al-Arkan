'use client';

import React from 'react';
import ServiceBanner from './ServiceBanner';
import ServicesCards from './ServicesCards';
import ServiceProcess from './ServiceProcess';
import ServiceFeatures from './ServiceFeatures';
import ServiceStats from './ServiceStats';
import ServiceFAQ from './ServiceFAQ';
import ClientTestimonials from '../clients/ClientTestimonials';

const Services = () => {
  return (
    <>
      <ServiceBanner />
      <ServicesCards />
      <ServiceProcess />
      <ServiceFeatures />
      <ServiceStats />
      <ClientTestimonials />
      <ServiceFAQ />
    </>
  );
};

export default Services;
