'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Grid, Button, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import {
  primaryColor,
  primaryHover,
  primaryLight,
  offWhiteColor,
  offBlackTextLight
} from '@/components/utils/Colors';
import statisticsData from '@/components/website/about/AboutPageData.json';

const colorMap = {
  primaryColor,
  primaryHover,
  primaryLight,
  offWhiteColor,
  offBlackTextLight
};

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countedValues, setCountedValues] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const { heading, headingFont, description, button, stats, section } = statisticsData.statistics;

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, [isVisible]);

  // Count animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const timers = [];

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(Math.floor(increment * currentStep), stat.value);

        setCountedValues((prev) => {
          const newValues = [...prev];
          newValues[index] = currentValue;
          return newValues;
        });

        if (currentStep >= steps) clearInterval(timer);
      }, stepDuration);

      timers.push(timer);
    });

    return () => timers.forEach((t) => clearInterval(timers));
  }, [isVisible, stats]);

  return (
    <Box
      ref={sectionRef}
      py={[8,10,15]}
      sx={{
        backgroundColor: offWhiteColor,
        backgroundImage: `linear-gradient(to left, ${colorMap[section.backgroundGradient.from]} 0%, ${colorMap[section.backgroundGradient.to]} 100%)`,
        position: 'relative'
      }}
    >
      <Stack justifyContent={["flex-start","flex-start","center"]} mx={[2,5,10]} direction={{ xs: 'column', md: 'row' }} gap={[5,10]} alignItems="center">
        
        {/* Left Section */}
        <Box maxWidth={["auto","auto","50%"]} data-aos="fade-right">
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

          {/* Description */}
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

        {/* Right Section - Statistics */}
        <Grid container spacing={0} size={{ xs: 12, md: 6 }} data-aos="fade-left">
          {stats.map((stat, index) => (
            <Grid size={6} key={index}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRight: index % 2 === 0 ? `1px solid ${primaryLight}` : 'none',
                  borderBottom: index < 2 ? `1px solid ${primaryLight}` : 'none',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: { xs: '120px', md: '150px' }
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
                    lineHeight: 1
                  }}
                >
                  {countedValues[index]}{stat.suffix}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: offBlackTextLight,
                    fontSize: { xs: '0.85rem', md: '0.95rem' },
                    fontWeight: 500
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
