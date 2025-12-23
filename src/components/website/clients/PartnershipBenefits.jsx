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
  Handshake,
  Shield,
  Speed,
  Support,
  Verified,
  TrendingUp,
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import {
  secondaryColor,
  secondaryLight,
  secondaryHover,
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

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const PartnershipBenefits = () => {
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
      title: 'Trusted Partnership',
      icon: Handshake,
      description: 'We build long-term relationships with our clients, ensuring consistent quality and reliability in every project.',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 0,
    },
    {
      id: 2,
      title: 'Enhanced Security',
      icon: Shield,
      description: 'Comprehensive security solutions that protect your assets, people, and data with cutting-edge technology.',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 100,
    },
    {
      id: 3,
      title: 'Fast Implementation',
      icon: Speed,
      description: 'Efficient project execution with minimal disruption to your operations, delivered on time and within budget.',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 200,
    },
    {
      id: 4,
      title: '24/7 Support',
      icon: Support,
      description: 'Round-the-clock technical support and maintenance services to keep your systems running smoothly.',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 300,
    },
    {
      id: 5,
      title: 'Certified Solutions',
      icon: Verified,
      description: 'All our products and services meet international standards and certifications for quality assurance.',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 400,
    },
    {
      id: 6,
      title: 'Scalable Growth',
      icon: TrendingUp,
      description: 'Solutions designed to grow with your business, easily expandable and adaptable to future needs.',
      color: secondaryColor,
      lightColor: secondaryLight,
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
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${secondaryLight}15 100%)`,
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-120px',
          left: '-120px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${secondaryLight} 0%, transparent 70%)`,
          filter: 'blur(90px)',
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${secondaryLight} 0%, transparent 70%)`,
          filter: 'blur(80px)',
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
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
            Partnership{' '}
            <Box component="span" sx={{ color: secondaryColor }}>
              Benefits
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
            Why leading businesses choose Mashariq Al-Arkan as their trusted security and automation partner
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
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -2,
                      left: -2,
                      right: -2,
                      bottom: -2,
                      background: `linear-gradient(135deg, ${benefit.color}, ${benefit.lightColor})`,
                      borderRadius: '24px',
                      zIndex: -1,
                      opacity: 0,
                      transition: 'opacity 0.5s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `0 20px 60px ${benefit.lightColor}80`,
                      borderColor: benefit.color,
                      '&::before': {
                        opacity: 0.3,
                      },
                      '& .benefit-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: benefit.color,
                        animation: `${pulse} 2s ease-in-out infinite`,
                      },
                      '& .benefit-title': {
                        color: benefit.color,
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
                          background: `linear-gradient(135deg, ${benefit.lightColor} 0%, ${benefit.color}20 100%)`,
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
                            border: `3px solid ${benefit.color}`,
                            opacity: 0,
                            transform: 'scale(1.2)',
                            transition: 'all 0.5s ease',
                          },
                        }}
                        className="icon-container"
                      >
                        <IconComponent
                          className="benefit-icon"
                          sx={{
                            fontSize: '3.5rem',
                            color: benefit.color,
                            transition: 'all 0.5s ease',
                            zIndex: 1,
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      className="benefit-title"
                      variant="h4"
                      component="h3"
                      sx={{
                        fontSize: { xs: '1.75rem', md: '2rem' },
                        fontWeight: 700,
                        color: offBlackText,
                        textAlign: 'center',
                        mb: 2,
                        transition: 'all 0.3s ease',
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

export default PartnershipBenefits;

