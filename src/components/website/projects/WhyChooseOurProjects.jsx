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

import Main from './ProjectsData.json';

/* animation unchanged */
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

/* icon mapping (icons remain exactly the same) */
const iconMap = {
  1: Engineering,
  2: Speed,
  3: Verified,
  4: Support,
  5: TrendingUp,
  6: Shield,
};

const WhyChooseOurProjects = () => {
  const data=Main.whyChooseUs
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [isVisible]);

  /* enrich JSON data without changing design logic */
  const benefits = data.benefits.map((item, index) => ({
    ...item,
    icon: iconMap[item.id],
    color: index % 2 === 0 ? secondaryColor : primaryColor,
    lightColor: index % 2 === 0 ? secondaryLight : primaryLight,
    delay: index * 100,
  }));

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
            {data.section.title.line1}{' '}
            <Box component="span" sx={{ color: primaryColor }}>
              {data.section.title.highlight}
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
            {data.section.subtitle}
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
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
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
