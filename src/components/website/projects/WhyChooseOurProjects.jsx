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
  Speed,
  Shield,
  Engineering,
  Support,
  Verified,
  TrendingUp,
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

const WhyChooseOurProjects = () => {
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

  const benefits = [
    {
      id: 1,
      title: 'Expert Engineering',
      icon: Engineering,
      description: 'Our team of certified engineers ensures every project meets the highest technical standards.',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 0,
    },
    {
      id: 2,
      title: 'Fast Delivery',
      icon: Speed,
      description: 'Efficient project management ensures timely completion without compromising quality.',
      color: primaryColor,
      lightColor: primaryLight,
      delay: 100,
    },
    {
      id: 3,
      title: 'Quality Assurance',
      icon: Verified,
      description: 'Rigorous testing and quality control processes guarantee reliable, long-lasting solutions.',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 200,
    },
    {
      id: 4,
      title: 'Comprehensive Support',
      icon: Support,
      description: 'Ongoing maintenance and 24/7 support to keep your systems running smoothly.',
      color: primaryColor,
      lightColor: primaryLight,
      delay: 300,
    },
    {
      id: 5,
      title: 'Proven Track Record',
      icon: TrendingUp,
      description: '150+ successful projects across Saudi Arabia demonstrate our expertise and reliability.',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 400,
    },
    {
      id: 6,
      title: 'Secure Solutions',
      icon: Shield,
      description: 'Enterprise-grade security systems protecting your assets, people, and operations.',
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
        background: `linear-gradient(135deg, ${primaryLight}08 0%, ${offWhiteColor} 100%)`,
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
            Why Choose{' '}
            <Box component="span" sx={{ color: primaryColor }}>
              Our Projects
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
            What sets our project delivery apart from the rest
          </Typography>
        </Box>

        {/* Benefits Grid */}
        <Grid container spacing={4}>
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={benefit.id}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '24px',
                    background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${offWhiteColor} 100%)`,
                    border: `2px solid ${benefit.lightColor}`,
                    boxShadow: `0 8px 32px ${benefit.lightColor}40`,
                    position: 'relative',
                    overflow: 'visible',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateY(0) scale(1)'
                      : 'translateY(50px) scale(0.9)',
                    animation: isVisible
                      ? `${fadeInUp} 0.8s ease-out ${benefit.delay}ms forwards`
                      : 'none',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `0 20px 60px ${benefit.lightColor}80`,
                      borderColor: benefit.color,
                      '& .benefit-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: benefit.color,
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
                        className="benefit-icon"
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${benefit.lightColor} 0%, ${benefit.color}20 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.5s ease',
                        }}
                      >
                        <IconComponent
                          sx={{
                            fontSize: '3.5rem',
                            color: benefit.color,
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
                        textAlign: 'center',
                        mb: 2,
                      }}
                    >
                      {benefit.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: offBlackTextLight,
                        textAlign: 'center',
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1rem' },
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
      </Container>
    </Box>
  );
};

export default WhyChooseOurProjects;

