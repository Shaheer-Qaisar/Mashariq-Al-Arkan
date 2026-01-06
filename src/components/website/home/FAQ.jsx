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
import data from '@/data/faqData.json';

const FAQ = () => {
  const [expanded, setExpanded] = useState(1); // Start with second item expanded
  const { section, tag, heading, headingFont, description, button, faqs } = data;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      px={[2,4,6,12]}
      sx={{
        backgroundColor: offWhiteColor,
        py: section.padding
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
                backgroundColor: tag.backgroundColor,
                color: offBlackText,
                fontWeight: tag.fontWeight,
                fontSize: tag.fontSize,
                px: tag.padding.px,
                py: tag.padding.py,
                borderRadius: tag.borderRadius,
                mb: tag.marginBottom
              }}
            />

            {/* Heading */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: headingFont.fontSize,
                fontWeight: headingFont.fontWeight,
                lineHeight: headingFont.lineHeight,
                mb: headingFont.marginBottom
              }}
            >
              {heading.map((h, i) => (
                <Box key={i} component="span" sx={{ color: h.color === "primaryColor" ? primaryColor : offBlackText, display: h.display }}>
                  {h.text}
                </Box>
              ))}
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: offBlackTextLight,
                fontSize: description.fontSize,
                lineHeight: description.lineHeight,
                mb: description.marginBottom
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
                background: `linear-gradient(to right, ${primaryColor} 0%, ${primaryLight} 100%)`,
                color: offBlackText,
                fontWeight: button.fontWeight,
                fontSize: button.fontSize,
                px: button.padding.px,
                py: button.padding.py,
                borderRadius: button.borderRadius,
                textTransform: button.textTransform,
                boxShadow: `0 4px 15px ${primaryLight}`,
                '&:hover': {
                  background: `linear-gradient(to right, ${primaryHover} 0%, ${primaryColor} 100%)`,
                  boxShadow: `0 6px 20px ${primaryLight}`,
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
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
