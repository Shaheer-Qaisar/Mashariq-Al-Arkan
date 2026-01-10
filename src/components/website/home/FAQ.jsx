'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Chip } from '@mui/material';
import { Add, Remove, ArrowForward } from '@mui/icons-material';
import {
  primaryColor,
  primaryHover,
  primaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight
} from '@/components/utils/Colors';
import aboutData from '@/components/website/about/AboutPageData.json';

const FAQ = () => {
  const [expanded, setExpanded] = useState(1); // Start with second item expanded
  const { tag, heading, description, button, faqs } = aboutData.faq;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      px={[2,4,6,12]}
      sx={{
        backgroundColor: offWhiteColor,
        py: { xs: 6, md: 10 }
      }}
    >
      <Grid container spacing={6} alignItems="flex-start">
        {/* Left Column - Introduction and CTA */}
        <Grid size={{ xs: 12, md: 5 }} data-aos="fade-up">
          <Box>
            {/* FAQ Tag */}
            <Chip
              label={tag.text}
             sx={{
              backgroundColor: '#f5f5f5',
              color: offBlackText,
              fontWeight: 600,
              fontSize: '0.85rem',
              px: 2,
              py: 1,
              borderRadius: '50px',
              mb: 2
            }}
            />

            {/* Heading */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '2.8rem',
                lg: '3.5rem'
              },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 2
            
              }}
            >
              {heading.map((h, i) => (
                <Box key={i} component="span" sx={{ color: h.color === "primaryColor" ? primaryColor : offBlackText, display: 'block' }}>
                  {h.text}
                </Box>
              ))}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
              color: offBlackTextLight,
              fontSize: '1rem',
              lineHeight: 1.7,
              mb: 4
            }}
            >
              {description.text}
            </Typography>

            {/* Contact Button */}
            <Button
              component={Link}
              href={button.link}
              variant="contained"
              endIcon={<ArrowForward />}
             sx={{
              background: `linear-gradient(
                to right,
                ${primaryColor} 0%,
                ${primaryLight} 100%
              )`,
              color: offBlackText,
              fontWeight: 600,
              fontSize: '1rem',
              px: 4,
              py: 1.5,
              borderRadius: '8px',
              textTransform: 'none',
              boxShadow: `0 4px 15px ${primaryLight}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                background: `linear-gradient(
                  to right,
                  ${primaryHover} 0%,
                  ${primaryColor} 100%
                )`,
                boxShadow: `0 6px 20px ${primaryLight}`,
                transform: 'translateY(-2px)'
              }
            }}
            >
              {button.text}
            </Button>
          </Box>
        </Grid>

        {/* Right Column - FAQ Accordion */}
        <Grid size={{ xs: 12, md: 7 }} data-aos="fade-left">
          <Box>
            {faqs.map((faq, index) => {
              const isExpanded = expanded === faq.id;
              return (
                <Accordion
                  key={faq.id}
                  expanded={isExpanded}
                  onChange={handleChange(faq.id)}
                  data-aos-delay={200}
                  sx={{
                    mb: 2,
                    borderRadius: '12px !important',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    border: isExpanded ? `2px solid ${primaryColor}` : '1px solid #e0e0e0',
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': { margin: '0 0 16px 0' }
                  }}
                >
                  <AccordionSummary
                    expandIcon={isExpanded ? <Remove sx={{ color: primaryColor }} /> : <Add sx={{ color: offBlackText }} />}
                    sx={{
                      px: 3,
                      py: 0,
                      '&.Mui-expanded': { minHeight: 'auto' },
                      '& .MuiAccordionSummary-content': {
                        margin: '12px 0',
                        '&.Mui-expanded': { margin: '12px 0' }
                      }
                    }}
                  >
                    <Typography sx={{ color: isExpanded ? primaryColor : offBlackText, fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.5 }}>
                      {index + 1}. {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                    <Typography sx={{ color: offBlackTextLight, fontSize: '0.95rem', lineHeight: 1.7, pl: 3 }}>
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
