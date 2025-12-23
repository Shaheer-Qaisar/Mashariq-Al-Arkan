'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Chip,
} from '@mui/material';
import { Add, Remove, ArrowForward } from '@mui/icons-material';
import {
  primaryColor,
  primaryHover,
  primaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
} from '@/components/utils/Colors';

const FAQ = () => {
  const [expanded, setExpanded] = useState(1); // Start with second item expanded

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      id: 0,
      question: 'What services does Mashariq Al-Arkan provide?',
      answer:
        'We provide comprehensive building maintenance, automation and access control systems, parking management solutions, security and surveillance systems, network infrastructure, and wireless connectivity services for residential, commercial, and industrial projects.',
    },
    {
      id: 1,
      question: 'How long does a typical installation project take?',
      answer:
        'Project timelines vary depending on the scope and complexity. A standard access control system installation typically takes 2-4 weeks, while larger integrated security solutions may take 6-12 weeks. We provide detailed timelines during the initial consultation.',
    },
    {
      id: 2,
      question: 'Do you provide maintenance and support after installation?',
      answer:
        'Yes, we offer comprehensive lifecycle maintenance and support services. Our team provides regular maintenance schedules, 24/7 technical support, system updates, and emergency response services to ensure your systems operate at peak performance.',
    },
    {
      id: 3,
      question: 'What areas do you serve?',
      answer:
        'We primarily serve the Kingdom of Saudi Arabia, with our headquarters in Riyadh. We have completed projects across major cities including Riyadh, Jeddah, Dammam, and other regions throughout the country.',
    },
    {
      id: 4,
      question: 'Can you integrate with existing security systems?',
      answer:
        'Absolutely! We specialize in integrating new systems with existing infrastructure. Our team conducts thorough assessments to ensure seamless integration while maintaining compatibility with your current systems.',
    },
    {
      id: 5,
      question: 'What certifications and standards do you follow?',
      answer:
        'We adhere to international security standards and local regulations. Our systems comply with ISO standards, and we work with certified technicians who maintain industry certifications. All installations follow Saudi building codes and security regulations.',
    },
  ];

  return (
    <Box px={[2,4,6,12]}
      sx={{
        backgroundColor: offWhiteColor,
        py: { xs: 6, md: 10 },
      }}
    > 
        <Grid container spacing={6} alignItems="flex-start">
          {/* Left Column - Introduction and CTA */}
          <Grid size={{ xs: 12, md: 5 }} data-aos="fade-up" >
            <Box>
              {/* FAQ Tag */}
              <Chip
                label="FAQ's"
                sx={{
                  backgroundColor: '#f5f5f5',
                  color: offBlackText,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  px: 1,
                  py: 2.5,
                  borderRadius: '8px',
                  mb: 3,
                }}
              />

              {/* Heading */}
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '2.8rem', lg: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                 <Box component="span" sx={{ color: primaryColor, display: 'block' }}>
                   Got Questions?
                 </Box>
                <Box component="span" sx={{ color: offBlackText, display: 'block' }}>
                  We've Got Answers!
                </Box>
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: offBlackTextLight,
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  mb: 4,
                }}
              >
                Find quick answers or contact our support team.
              </Typography>

              {/* Contact Us Button */}
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                endIcon={<ArrowForward />}
                 sx={{
                   background: `linear-gradient(to right, ${primaryColor} 0%, ${primaryLight} 100%)`,
                   color: offBlackText,
                   fontWeight: 600,
                   fontSize: '1rem',
                   px: 4,
                   py: 1.5,
                   borderRadius: '8px',
                   textTransform: 'none',
                   boxShadow: `0 4px 15px ${primaryLight}`,
                   '&:hover': {
                     background: `linear-gradient(to right, ${primaryHover} 0%, ${primaryColor} 100%)`,
                     boxShadow: `0 6px 20px ${primaryLight}`,
                     transform: 'translateY(-2px)',
                   },
                   transition: 'all 0.3s ease',
                 }}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>

          {/* Right Column - FAQ Accordion */}
          <Grid size={{ xs: 12, md: 7 }}
                    data-aos="fade-left">
            <Box>
              {faqs.map((faq, index) => {
                const isExpanded = expanded === faq.id;
                return (
                  <Accordion
                    key={faq.id}
                    expanded={isExpanded}
                    onChange={handleChange(faq.id)}
                    data-aos-delay={ 200}
                    sx={{
                      mb: 2,
                      borderRadius: '12px !important',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                       border: isExpanded
                         ? `2px solid ${primaryColor}`
                         : '1px solid #e0e0e0',
                      '&:before': {
                        display: 'none',
                      },
                      '&.Mui-expanded': {
                        margin: '0 0 16px 0',
                      },
                    }}
                  >
                    <AccordionSummary
                       expandIcon={
                         isExpanded ? (
                           <Remove sx={{ color: primaryColor }} />
                         ) : (
                           <Add sx={{ color: offBlackText }} />
                         )
                       }
                      sx={{
                        px: 3,
                        py: 0,
                        '&.Mui-expanded': {
                          minHeight: 'auto',
                        },
                        '& .MuiAccordionSummary-content': {
                          margin: '12px 0',
                          '&.Mui-expanded': {
                            margin: '12px 0',
                          },
                        },
                      }}
                    >
                      <Typography
                         sx={{
                           color: isExpanded ? primaryColor : offBlackText,
                           fontWeight: 600,
                           fontSize: '1.1rem',
                           lineHeight: 1.5,
                         }}
                      >
                        {index + 1}. {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        px: 3,
                        pb: 3,
                        pt: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          color: offBlackTextLight,
                          fontSize: '0.95rem',
                          lineHeight: 1.7,
                          pl: 3,
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Grid>
        </Grid> 
    </Box>
  );
};

export default FAQ;

