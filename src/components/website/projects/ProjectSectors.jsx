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
  Factory,
  Home,
  School,
  BusinessCenter,
  LocalHospital,
  Store,
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

const ProjectSectors = () => {
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

  const sectors = [
    {
      id: 1,
      title: 'Industrial',
      icon: Factory,
      description: 'Comprehensive solutions for warehouses, factories, and logistics facilities.',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 0,
    },
    {
      id: 2,
      title: 'Residential',
      icon: Home,
      description: 'Smart home automation and security for residential compounds and villas.',
      color: primaryColor,
      lightColor: primaryLight,
      delay: 100,
    },
    {
      id: 3,
      title: 'Education',
      icon: School,
      description: 'Modern security and automation systems for schools and universities.',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 200,
    },
    {
      id: 4,
      title: 'Commercial',
      icon: BusinessCenter,
      description: 'Business solutions for offices, retail spaces, and commercial buildings.',
      color: primaryColor,
      lightColor: primaryLight,
      delay: 300,
    },
    {
      id: 5,
      title: 'Healthcare',
      icon: LocalHospital,
      description: 'Specialized systems for hospitals and medical facilities.',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 400,
    },
    {
      id: 6,
      title: 'Retail',
      icon: Store,
      description: 'Integrated solutions for shopping malls and retail outlets.',
      color: primaryColor,
      lightColor: primaryLight,
      delay: 500,
    },
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        backgroundColor: offWhiteColor,
        background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${secondaryLight}08 100%)`,
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
            }}
          >
            Projects Across{' '}
            <Box component="span" sx={{ color: primaryColor }}>
              Sectors
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: offBlackTextLight,
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            We deliver tailored solutions across diverse industries and sectors
          </Typography>
        </Box>

        {/* Sectors Grid */}
        <Grid container spacing={4}>
          {sectors.map((sector) => {
            const IconComponent = sector.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={sector.id}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '24px',
                    background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${offWhiteColor} 100%)`,
                    border: `2px solid ${sector.lightColor}`,
                    boxShadow: `0 8px 32px ${sector.lightColor}40`,
                    position: 'relative',
                    overflow: 'visible',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateY(0) scale(1)'
                      : 'translateY(50px) scale(0.9)',
                    animation: isVisible
                      ? `${fadeInUp} 0.8s ease-out ${sector.delay}ms forwards`
                      : 'none',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `0 20px 60px ${sector.lightColor}80`,
                      borderColor: sector.color,
                      '& .sector-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: sector.color,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                    {/* Icon */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <Box
                        className="sector-icon"
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${sector.lightColor} 0%, ${sector.color}20 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.5s ease',
                        }}
                      >
                        <IconComponent
                          sx={{
                            fontSize: '3.5rem',
                            color: sector.color,
                            transition: 'all 0.5s ease',
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        fontSize: { xs: '1.75rem', md: '2rem' },
                        fontWeight: 700,
                        color: offBlackText,
                        mb: 2,
                      }}
                    >
                      {sector.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: offBlackTextLight,
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1rem' },
                      }}
                    >
                      {sector.description}
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

export default ProjectSectors;

