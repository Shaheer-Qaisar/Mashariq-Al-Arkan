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
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
} from '@/components/utils/Colors';

import data from './ClientData.json';

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
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const iconMap = {
  Handshake,
  Shield,
  Speed,
  Support,
  Verified,
  TrendingUp,
};

const PartnershipBenefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const { header, benefits } = data.benefitsData;

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
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
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
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 700,
              color: offBlackText,
              mb: 2,
            }}
          >
            {header.title}{' '}
            <Box component="span" sx={{ color: secondaryColor }}>
              {header.highlight}
            </Box>
          </Typography>

          <Typography
            sx={{
              color: offBlackTextLight,
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            {header.description}
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={4}>
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon];

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={benefit.id}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '24px',
                    background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${offWhiteColor} 100%)`,
                    border: `2px solid ${secondaryColor}`,
                    boxShadow: `0 8px 32px ${secondaryColor}40`,
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
                      inset: -2,
                      background: `linear-gradient(135deg, ${secondaryColor}, ${secondaryLight})`,
                      borderRadius: '24px',
                      opacity: 0,
                      transition: 'opacity 0.5s ease',
                      zIndex: -1,
                    },
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `0 20px 60px ${secondaryLight}80`,
                      borderColor: secondaryColor,
                      '&::before': { opacity: 0.3 },
                      '& .benefit-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        animation: `${pulse} 2s ease-in-out infinite`,
                        color: secondaryColor,
                      },
                      '& .benefit-title': {
                        transform: 'translateX(8px)',
                        color: secondaryColor,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${secondaryLight} 0%, ${secondaryColor}20 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color:secondaryColor
                        }}
                      >
                        <Icon className="benefit-icon" sx={{ fontSize: '3.5rem' }} />
                      </Box>
                    </Box>

                    <Typography
                      className="benefit-title"
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        textAlign: 'center',
                        mb: 2,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {benefit.title}
                    </Typography>

                    <Typography
                      sx={{
                        textAlign: 'center',
                        color: offBlackTextLight,
                        lineHeight: 1.8,
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
