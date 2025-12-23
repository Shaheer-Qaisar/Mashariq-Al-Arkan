'use client';

import Clients from '../home/Clients';
import Banner from './Banner';
import ClientTestimonials from './ClientTestimonials';
import PartnershipBenefits from './PartnershipBenefits';

const ClientsMain = () => {
  return (
    <>
      <Banner />
      <Clients />
      <ClientTestimonials />
      <PartnershipBenefits />
    </>
  );
};

export default ClientsMain;

