'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
} from '@mui/material';
import {
  primaryColor,
  secondaryColor,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
} from '@/components/utils/Colors';

const ServiceStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countedValues, setCountedValues] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    { value: '500+', label: 'Projects Completed', numeric: 500, suffix: '+' },
    { value: '98%', label: 'Client Satisfaction', numeric: 98, suffix: '%' },
    { value: '24/7', label: 'Support Available', numeric: 100, suffix: '%' },
    { value: '15+', label: 'Years Experience', numeric: 15, suffix: '+' },
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
        threshold: 0.3,
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

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const timers = [];

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.numeric / steps;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCountedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = Math.min(
              Math.round(increment * currentStep),
              stat.numeric
            );
            return newValues;
          });
        } else {
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
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${secondaryColor} 0%, ${secondaryColor}dd 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.8s ease-out ${index * 150}ms`,
                }}
              >
                <Typography
                  variant="h2"
                  component="div"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                    fontWeight: 700,
                    color: primaryColor,
                    mb: 1,
                    fontFamily: "'Quicksand', sans-serif",
                  }}
                >
                  {countedValues[index]}
                  {stat.suffix}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    fontWeight: 600,
                    color: offBlackTextLight,
                    fontFamily: "'Quicksand', sans-serif",
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceStats;

