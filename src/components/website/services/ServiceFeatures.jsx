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
  Security,
  Speed,
  Support,
  Verified,
  TrendingUp,
  Engineering,
} from '@mui/icons-material';
import {
  primaryColor,
  primaryLight,
  secondaryColor,
  secondaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
} from '@/components/utils/Colors';

const ServiceFeatures = () => {
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

  const features = [
    {
      id: 1,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and emergency response services.',
      icon: Support,
      color: secondaryColor,
      lightColor: secondaryLight,
    },
    {
      id: 2,
      title: 'Certified Experts',
      description: 'Trained and certified professionals with industry expertise.',
      icon: Verified,
      color: primaryColor,
      lightColor: primaryLight,
    },
    {
      id: 3,
      title: 'Advanced Security',
      description: 'State-of-the-art security solutions with latest technology.',
      icon: Security,
      color: secondaryColor,
      lightColor: secondaryLight,
    },
    {
      id: 4,
      title: 'Fast Installation',
      description: 'Efficient installation process with minimal disruption.',
      icon: Speed,
      color: primaryColor,
      lightColor: primaryLight,
    },
    {
      id: 5,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business needs.',
      icon: TrendingUp,
      color: secondaryColor,
      lightColor: secondaryLight,
    },
    {
      id: 6,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control for all installations.',
      icon: Engineering,
      color: primaryColor,
      lightColor: primaryLight,
    },
  ];

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#f8f9fa',
        position: 'relative',
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
            Why Choose{' '}
            <Box component="span" sx={{ color: primaryColor }}>
              Our Services
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
            Experience excellence with our comprehensive service features
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={feature.id}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${feature.lightColor}10 100%)`,
                    border: `2px solid ${feature.lightColor}`,
                    boxShadow: `0 4px 16px ${feature.lightColor}40`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateY(0)'
                      : 'translateY(40px)',
                    transitionDelay: `${index * 100}ms`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 32px ${feature.lightColor}60`,
                      borderColor: feature.color,
                      '& .feature-icon': {
                        transform: 'scale(1.15) rotate(5deg)',
                        color: feature.color,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${feature.lightColor} 0%, ${feature.color}20 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <IconComponent
                        className="feature-icon"
                        sx={{
                          fontSize: '2.5rem',
                          color: feature.color,
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        fontWeight: 700,
                        color: offBlackText,
                        mb: 2,
                        fontFamily: "'Quicksand', sans-serif",
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: offBlackTextLight,
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        fontFamily: "'Quicksand', sans-serif",
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceFeatures;

