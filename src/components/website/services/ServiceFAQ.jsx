'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import {
  primaryColor,
  secondaryColor,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
} from '@/components/utils/Colors';

const ServiceFAQ = () => {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      id: 0,
      question: 'What services do you provide?',
      answer:
        'We provide comprehensive building maintenance, automation and access control systems, parking management solutions, security and surveillance systems, network infrastructure, and wireless connectivity services for residential, commercial, and industrial projects.',
    },
    {
      id: 1,
      question: 'How long does installation take?',
      answer:
        'Installation timelines vary depending on the scope and complexity of the project. A standard access control system typically takes 2-4 weeks, while larger integrated security solutions may take 6-12 weeks. We provide detailed timelines during the initial consultation.',
    },
    {
      id: 2,
      question: 'Do you provide maintenance after installation?',
      answer:
        'Yes, we offer comprehensive lifecycle maintenance and support services. Our team provides regular maintenance schedules, 24/7 technical support, system updates, and emergency response services to ensure your systems operate at peak performance.',
    },
    {
      id: 3,
      question: 'What areas do you serve?',
      answer:
        'We primarily serve clients across Saudi Arabia, with our main operations in Riyadh. We can provide services throughout the Kingdom for large-scale projects.',
    },
    {
      id: 4,
      question: 'Are your technicians certified?',
      answer:
        'Absolutely. All our technicians are certified professionals with extensive training and industry certifications. We maintain high standards for our team to ensure quality service delivery.',
    },
    {
      id: 5,
      question: 'Do you offer custom solutions?',
      answer:
        'Yes, we specialize in creating custom solutions tailored to your specific needs. Our team works closely with you to understand your requirements and design systems that perfectly fit your environment and objectives.',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: offWhiteColor,
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 8 },
          }}
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 700,
              color: offBlackText,
              mb: 2,
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            Frequently Asked{' '}
            <Box component="span" sx={{ color: primaryColor }}>
              Questions
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: offBlackTextLight,
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: '700px',
              mx: 'auto',
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            Find answers to common questions about our services
          </Typography>
        </Box>

        {/* FAQ Accordion */}
        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              sx={{
                mb: 2,
                borderRadius: '16px !important',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                border: `1px solid ${expanded === faq.id ? primaryColor : '#e0e0e0'}`,
                transition: 'all 0.3s ease',
                '&:before': {
                  display: 'none',
                },
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  borderColor: primaryColor,
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === faq.id ? (
                    <Remove sx={{ color: primaryColor }} />
                  ) : (
                    <Add sx={{ color: offBlackTextLight }} />
                  )
                }
                sx={{
                  py: 2,
                  px: 3,
                  '& .MuiAccordionSummary-content': {
                    my: 1.5,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: expanded === faq.id ? primaryColor : offBlackText,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    transition: 'color 0.3s ease',
                    fontFamily: "'Quicksand', sans-serif",
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  px: 3,
                  pb: 3,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: offBlackTextLight,
                    lineHeight: 1.8,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    fontFamily: "'Quicksand', sans-serif",
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceFAQ;

