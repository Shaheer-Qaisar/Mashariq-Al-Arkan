'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import {
  primaryColor,
  primaryHover,
  primaryLight,
  secondaryColor,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
  secondaryLight,
  secondaryHover,
} from '@/components/utils/Colors';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countedValues, setCountedValues] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    { value: '500+', label: 'Projects Delivered', numeric: 500, suffix: '+' },
    { value: '98%', label: 'Client Satisfaction', numeric: 98, suffix: '%' },
    { value: '85%', label: 'Repeat Clients', numeric: 85, suffix: '%' },
    { value: '15+', label: 'Years of Experience', numeric: 15, suffix: '+' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;
    const timers = [];

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.numeric / steps;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(
          Math.floor(increment * currentStep),
          stat.numeric
        );

        setCountedValues((prev) => {
          const newValues = [...prev];
          newValues[index] = currentValue;
          return newValues;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [isVisible]);

  return (
    <Box
      ref={sectionRef}
      py={[8,10,15]}
      sx={{
        backgroundColor: offWhiteColor,
        backgroundImage: `linear-gradient(to left, ${offWhiteColor} 0%, ${primaryLight} 100%)`,
        position: 'relative',
      }}
    > 

<Stack justifyContent={["flex-start","flex-start","center"]} mx={[2,5,10]} direction={{ xs: 'column', md: 'row' }} gap={[5,10]} alignItems="center" >
    
          {/* Left Section - Content */} 
            <Box maxWidth={["auto","auto","50%"]} data-aos="fade-right" >
              {/* Heading */}
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: primaryColor,
                    display: 'block',
                  }}
                >
                  Proven Track Record
                </Box>
                <Box
                  component="span"
                  sx={{
                    color: primaryColor,
                    display: 'block',
                  }}
                >
                  of Excellence
                </Box>
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: offBlackTextLight,
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: '90%',
                }}
              >
                Harness the power of cutting-edge security technology and
                innovative entrance systems to protect your assets and deliver
                comprehensive, high-impact security solutions for residential,
                commercial, and industrial projects.
              </Typography>

              {/* Call-to-Action Button */}
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
                  '&:hover': {
                    background: `linear-gradient(to right, ${primaryHover} 0%, ${primaryColor} 100%)`,
                    boxShadow: `0 6px 20px ${primaryLight}`,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Talk to Expert
              </Button>
            </Box> 

          {/* Right Section - Statistics Grid */}
          
          <Grid container spacing={0} size={{ xs: 12, md: 6 }} data-aos="fade-left" >
            
              {stats.map((stat, index) => (
                <Grid size={6} key={index}>
                  <Box 
                //   border={1}
                    sx={{
                      p: { xs: 3, md: 4 },
                      borderRight: index % 2 === 0 ? `1px solid ${primaryLight}` : 'none',
                      borderBottom: index < 2 ? `1px solid ${primaryLight}` : 'none',
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      minHeight: { xs: '120px', md: '150px' },
                    }}
                  >
                    <Typography
                      variant="h3"
                      component="div"
                      sx={{
                        color: primaryColor,
                        fontWeight: 700,
                        fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                        mb: 1,
                        lineHeight: 1,
                      }}
                    >
                      {countedValues[index]}{stat.suffix}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: offBlackTextLight,
                        fontSize: { xs: '0.85rem', md: '0.95rem' },
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
          </Grid>
              

          
</Stack>
    </Box>
  );
};

export default Statistics;

