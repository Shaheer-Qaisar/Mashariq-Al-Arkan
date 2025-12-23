'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  Visibility,
  RocketLaunch,
  Favorite,
  CheckCircle,
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import {
  primaryColor,
  primaryLight,
  secondaryColor,
  secondaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
} from '@/components/utils/Colors';

// Keyframes for animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const OurPrinciples = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
        threshold: 0.2,
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

  const principles = [
    {
      id: 1,
      title: 'Mission',
      icon: RocketLaunch,
      description: 'To deliver exceptional security and automation solutions that protect, enhance, and optimize our clients\' environments through innovative technology and unwavering commitment to excellence.',
      color: primaryColor,
      lightColor: primaryLight,
      delay: 0,
    },
    {
      id: 2,
      title: 'Vision',
      icon: Visibility,
      description: 'To be the leading provider of integrated security and automation solutions in Saudi Arabia, recognized for innovation, reliability, and exceptional customer service.',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 200,
    },
    {
      id: 3,
      title: 'Values',
      icon: Favorite,
      description: 'We are committed to integrity, innovation, customer-centricity, and continuous improvement in everything we do.',
      color: primaryColor,
      lightColor: primaryLight,
      delay: 400,
    },
  ];

  const values = [
    { id: 1, text: 'Integrity & Transparency' },
    { id: 2, text: 'Innovation & Excellence' },
    { id: 3, text: 'Customer-Centric Approach' },
    { id: 4, text: 'Quality & Reliability' },
    { id: 5, text: 'Continuous Improvement' },
    { id: 6, text: 'Team Collaboration' },
  ];

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        backgroundColor: offWhiteColor,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 10 },
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out',
          }}
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
            Our{' '}
            <Box component="span" sx={{ color: primaryColor }}>
              Principles
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
            The foundation of everything we do
          </Typography>
        </Box>

        {/* Mission, Vision, Values Cards */}
        <Grid container spacing={4} sx={{ mb: { xs: 6, md: 10 } }} justifyContent={'center'}>
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <Grid size={{ xs: 12,sm:6, md: 4 }} key={principle.id}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '24px',
                    background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${offWhiteColor} 100%)`,
                    border: `2px solid ${principle.lightColor}`,
                    boxShadow: `0 8px 32px ${principle.lightColor}40`,
                    position: 'relative',
                    overflow: 'visible',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateY(0) scale(1)'
                      : 'translateY(50px) scale(0.9)',
                    animation: isVisible
                      ? `${fadeInUp} 0.8s ease-out ${principle.delay}ms forwards`
                      : 'none',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -2,
                      left: -2,
                      right: -2,
                      bottom: -2,
                      background: `linear-gradient(135deg, ${principle.color}, ${principle.lightColor})`,
                      borderRadius: '24px',
                      zIndex: -1,
                      opacity: 0,
                      transition: 'opacity 0.5s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `0 20px 60px ${principle.lightColor}80`,
                      borderColor: principle.color,
                      '&::before': {
                        opacity: 0.3,
                      },
                      '& .principle-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: principle.color,
                        animation: `${pulse} 2s ease-in-out infinite`,
                      },
                      '& .principle-title': {
                        color: principle.color,
                        transform: 'translateX(8px)',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    {/* Icon */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${principle.lightColor} 0%, ${principle.color}20 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          transition: 'all 0.5s ease',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            border: `3px solid ${principle.color}`,
                            opacity: 0,
                            transform: 'scale(1.2)',
                            transition: 'all 0.5s ease',
                          },
                        }}
                        className="icon-container"
                      >
                        <IconComponent
                          className="principle-icon"
                          sx={{
                            fontSize: '3.5rem',
                            color: principle.color,
                            transition: 'all 0.5s ease',
                            zIndex: 1,
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      className="principle-title"
                      variant="h4"
                      component="h3"
                      sx={{
                        fontSize: { xs: '1.75rem', md: '2rem' },
                        fontWeight: 700,
                        color: offBlackText,
                        textAlign: 'center',
                        mb: 2,
                        transition: 'all 0.3s ease',
                        fontFamily: "'Quicksand', sans-serif",
                      }}
                    >
                      {principle.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: offBlackTextLight,
                        textAlign: 'center',
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        fontFamily: "'Quicksand', sans-serif",
                      }}
                    >
                      {principle.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Values List Section */}
        <Box
          sx={{
            mt: { xs: 4, md: 8 },
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 600ms',
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              fontWeight: 700,
              color: offBlackText,
              textAlign: 'center',
              mb: 4,
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            Core{' '}
            <Box component="span" sx={{ color: secondaryColor }}>
              Values
            </Box>
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {values.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={value.id}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2.5,
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${primaryLight}10 100%)`,
                    border: `1px solid ${primaryLight}`,
                    transition: 'all 0.3s ease',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateX(0)'
                      : index % 2 === 0
                      ? 'translateX(-30px)'
                      : 'translateX(30px)',
                    animation: isVisible
                      ? `${fadeInUp} 0.6s ease-out ${800 + index * 100}ms forwards`
                      : 'none',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      boxShadow: `0 8px 24px ${primaryLight}60`,
                      borderColor: primaryColor,
                      background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${primaryLight}20 100%)`,
                      '& .value-icon': {
                        color: primaryColor,
                        transform: 'scale(1.2)',
                      },
                      '& .value-text': {
                        color: offBlackText,
                        fontWeight: 600,
                      },
                    },
                  }}
                >
                  <CheckCircle
                    className="value-icon"
                    sx={{
                      color: secondaryColor,
                      fontSize: '1.75rem',
                      transition: 'all 0.3s ease',
                    }}
                  />
                  <Typography
                    className="value-text"
                    variant="body1"
                    sx={{
                      color: offBlackTextLight,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      fontFamily: "'Quicksand', sans-serif",
                    }}
                  >
                    {value.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default OurPrinciples;

