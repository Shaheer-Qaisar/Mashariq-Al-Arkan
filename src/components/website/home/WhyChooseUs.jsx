'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { 
  ArrowForward, 
  Business, 
  Settings, 
  CheckCircle, 
  Shield 
} from '@mui/icons-material';
import {
  primaryColor,
  primaryHover,
  primaryLight,
  secondaryColor,
  secondaryHover,
  secondaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
} from '@/components/utils/Colors';

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 0,
      title: 'Multi-Industry Expertise',
      description:
        'With extensive experience across residential, commercial, and industrial sectors, our team delivers security and automation solutions informed by real-world industry insights.',
      highlighted: true,
      icon: Business,
    },
    {
      id: 1,
      title: 'Tailored, Scalable Solutions',
      description:
        'We understand that each project faces unique security challenges. That\'s why we take a personalized approach—partnering closely with you to develop custom solutions ',
      highlighted: false,
      icon: Settings,
    },
    {
      id: 2,
      title: 'Excellence in Delivery',
      description:
        'From our rigorous installation standards to our responsive support, we\'re committed to exceeding expectations at every step. ',
      highlighted: false,
      icon: CheckCircle,
    },
    {
      id: 3,
      title: 'Full Regulatory Compliance',
      description:
        'In an era of heightened security standards and industry oversight, we ensure that all solutions align with the latest regulations and best practices. ',
      highlighted: false,
      icon: Shield,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: offWhiteColor,
        backgroundImage: `linear-gradient(135deg, ${offWhiteColor} 0%, ${secondaryLight} 100%)`,
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    > 
        <Stack mx={[2,5,10]} direction={{ xs: 'column', lg: 'row' }} gap={[5,10]} alignItems="center" >
          {/* Left Section */} 
            <Box minWidth={["100%","100%","100%",'30%']} maxWidth={["auto","auto",'auto',"30%"]}>
              {/* Title */}
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                <Box component="span" sx={{ color: offBlackText, display: 'block' }}>
                  Why
                </Box>
                <Box component="span" sx={{ color: secondaryColor, display: 'block' }}>
                  Choose Us?
                </Box>
              </Typography>

              {/* Introductory Paragraph */}
              <Typography
                variant="body1"
                sx={{
                  color: offBlackTextLight,
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                Mashariq Al-Arkan delivers innovative security and automation solutions
                with cutting-edge technology and expertise. We ensure seamless
                integration, customized strategies, and reliable support. Choose us for
                efficiency, performance, and future-ready security solutions.
              </Typography>

              {/* Explore More Button */}
              <Button
                component={Link}
                href="/services"
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  background: `linear-gradient(to right, ${secondaryColor} 0%, ${secondaryLight} 100%)`,
                  color: offWhiteColor,
                  fontWeight: 600,
                  fontSize: '1rem',
                  px: 4,
                  py: 1.5,
                  borderRadius: '8px',
                  textTransform: 'none',
                  boxShadow: `0 4px 15px ${secondaryLight}`,
                  '&:hover': {
                    background: `linear-gradient(to right, ${secondaryHover} 0%, ${secondaryColor} 100%)`,
                    boxShadow: `0 6px 20px ${secondaryLight}`,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Explore More
              </Button>
            </Box> 

          {/* Right Section - Benefit Cards Grid */}
          <Grid container spacing={3} size={{ xs: 12, md: 7 }}>
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <Grid size={{ xs: 12, sm: 6 }} key={benefit.id} data-aos="zoom-in"  >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: '16px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                      border: benefit.highlighted
                        ? `2px solid ${secondaryColor}`
                        : '1px solid #e0e0e0',
                      backgroundColor: offWhiteColor,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                        transform: 'translateY(-4px)',
                        border: `2px solid ${primaryColor}`,
                        '& .benefit-icon': {
                          color: primaryColor,
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      {/* Icon */}
                      <Box
                     
                      >
                        {IconComponent && (
                          <IconComponent
                            className="benefit-icon"
                            sx={{
                              color: secondaryColor,
                              fontSize: '2.5rem',
                              transition: 'color 0.3s ease',
                            }}
                          />
                        )}
                      </Box>

                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: offBlackText,
                        fontWeight: 700,
                        fontSize: '1.3rem',
                        mb: 1.5,
                      }}
                    >
                      {benefit.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: offBlackTextLight,
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {benefit.description}
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

