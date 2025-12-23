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
  TrendingUp,
  CheckCircle,
  LocationOn,
  Build,
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

const ProjectStatistics = () => {
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

  const statistics = [
    {
      id: 1,
      icon: CheckCircle,
      number: '150+',
      label: 'Projects Completed',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 0,
    },
    {
      id: 2,
      icon: LocationOn,
      number: '50+',
      label: 'Cities Served',
      color: primaryColor,
      lightColor: primaryLight,
      delay: 100,
    },
    {
      id: 3,
      icon: Build,
      number: '95%',
      label: 'Client Satisfaction',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 200,
    },
    {
      id: 4,
      icon: TrendingUp,
      number: '10+',
      label: 'Years Experience',
      color: primaryColor,
      lightColor: primaryLight,
      delay: 300,
    },
  ];

  return (
    <Box
      ref={sectionRef}
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
            }}
          >
            Project{' '}
            <Box component="span" sx={{ color: secondaryColor }}>
              Statistics
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
            Our track record speaks for itself - delivering excellence across Saudi Arabia
          </Typography>
        </Box>

        {/* Statistics Grid */}
        <Grid container spacing={4}>
          {statistics.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.id}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '24px',
                    background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${offWhiteColor} 100%)`,
                    border: `2px solid ${stat.lightColor}`,
                    boxShadow: `0 8px 32px ${stat.lightColor}40`,
                    position: 'relative',
                    overflow: 'visible',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateY(0) scale(1)'
                      : 'translateY(50px) scale(0.9)',
                    animation: isVisible
                      ? `${fadeInUp} 0.8s ease-out ${stat.delay}ms forwards`
                      : 'none',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `0 20px 60px ${stat.lightColor}80`,
                      borderColor: stat.color,
                      '& .stat-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: stat.color,
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
                        className="stat-icon"
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${stat.lightColor} 0%, ${stat.color}20 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.5s ease',
                        }}
                      >
                        <IconComponent
                          sx={{
                            fontSize: '2.5rem',
                            color: stat.color,
                            transition: 'all 0.5s ease',
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Number */}
                    <Typography
                      variant="h3"
                      component="div"
                      sx={{
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        fontWeight: 700,
                        color: stat.color,
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>

                    {/* Label */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: offBlackText,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        fontWeight: 600,
                      }}
                    >
                      {stat.label}
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

export default ProjectStatistics;

