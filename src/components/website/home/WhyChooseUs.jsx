'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Grid, Typography, Button, Card, CardContent, Stack } from '@mui/material';
import { ArrowForward, Business, Settings, CheckCircle, Shield } from '@mui/icons-material';
import {
  primaryColor,
  secondaryColor,
  secondaryHover,
  secondaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
  primaryLight,
  primaryHover
} from '@/components/utils/Colors';
import data from '@/components/website/about/AboutPageData.json';

const iconMap = {
  Business,
  Settings,
  CheckCircle,
  Shield
};

const colorMap = {
  primaryColor,
  secondaryColor,
  secondaryHover,
  secondaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
  primaryLight,
  primaryHover
};

const WhyChooseUs = () => {
  const { section, heading, description, button, benefits } = data.whyChooseUs;

  return (
    <Box
      sx={{
        backgroundColor: offWhiteColor,
        backgroundImage: `linear-gradient(135deg, ${colorMap[section.backgroundGradient.from]} 0%, ${colorMap[section.backgroundGradient.to]} 100%)`,
 py: { xs: 8, md: 10, lg: 15 },
         position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Stack mx={[2,5,10]} direction={{ xs: 'column', lg: 'row' }} gap={[5,10]} alignItems="center">
        {/* Left Section */}
        <Box minWidth={["100%","100%","100%",'30%']} maxWidth={["auto","auto",'auto',"30%"]}>
          {/* Heading */}
          <Typography
              component="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 3,
                color: primaryColor
              }}
            >
            {heading.map((h, i) => (
              <Box key={i} component="span" sx={{ color: colorMap[h.color], display: h.display }}>
                {h.text}
              </Box>
            ))}
          </Typography>

          {/* Intro Paragraph */}
          <Typography
              sx={{
                color: offBlackTextLight,
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                lineHeight: 1.7,
                mb: 4,
                maxWidth: '90%'
              }}
            >
            {description.text}
          </Typography>

          {/* Button */}
           <Button
              component={Link}
              href="/contact"
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                background: `linear-gradient(to right, ${primaryColor} 0%, ${primaryLight} 100%)`,
                color: offWhiteColor,
                fontWeight: 600,
                fontSize: '1rem',
                px: 4,
                py: 1,
                borderRadius: 100,
                textTransform: 'none',
                boxShadow: `0 4px 15px ${primaryLight}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: `linear-gradient(to right, ${primaryHover} 0%, ${primaryColor} 100%)`,
                  boxShadow: `0 6px 20px ${primaryLight}`,
                  transform: 'translateY(-2px)'
                }
              }}
            >
            {button.text}
          </Button>
        </Box>

        {/* Right Section - Benefit Cards */}
        <Grid container spacing={3} size={{ xs: 12, md: 7 }}>
          {benefits.map((b) => {
            const IconComponent = iconMap[b.icon];
            return (
              <Grid size={{ xs: 12, sm: 6 }} key={b.id} data-aos="zoom-in">
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    border: b.highlighted ? `2px solid ${secondaryColor}` : '1px solid #e0e0e0',
                    backgroundColor: offWhiteColor,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                      transform: 'translateY(-4px)',
                      border: `2px solid ${primaryColor}`,
                      '& .benefit-icon': { color: primaryColor }
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    {IconComponent && (
                      <IconComponent
                        className="benefit-icon"
                        sx={{ color: secondaryColor, fontSize: '2.5rem', transition: 'color 0.3s ease' }}
                      />
                    )}
                    <Typography variant="h6" sx={{ color: offBlackText, fontWeight: 700, fontSize: '1.3rem', mb: 1.5 }}>
                      {b.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: offBlackTextLight, fontSize: '0.95rem', lineHeight: 1.7 }}>
                      {b.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Box>
  );
};

export default WhyChooseUs;
