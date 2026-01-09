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
  Search,
  DesignServices,
  Build,
  CheckCircle,
  ArrowForward,
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

/* animations untouched */
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

const iconMap = {
  1: Search,
  2: DesignServices,
  3: Build,
  4: CheckCircle,
};

const ProjectProcess = () => {
   const data=Main.processData
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

  const steps = data.steps.map((step, index) => ({
    ...step,
    icon: iconMap[step.id],
    color: index % 2 === 0 ? secondaryColor : primaryColor,
    lightColor: index % 2 === 0 ? secondaryLight : primaryLight,
    delay: index * 200,
  }));

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
      <Container maxWidth="lg">
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
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 700,
              color: offBlackText,
              mb: 2,
            }}
          >
            {data.section.title.line1}{' '}
            <Box component="span" sx={{ color: secondaryColor }}>
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

        {/* Cards */}
        <Grid container spacing={4}>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <Grid size={{ xs: 12, md: 6 }} key={step.id}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '24px',
                    background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${offWhiteColor} 100%)`,
                    border: `2px solid ${step.lightColor}`,
                    boxShadow: `0 8px 32px ${step.lightColor}40`,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateY(0) scale(1)'
                      : 'translateY(50px) scale(0.9)',
                    animation: isVisible
                      ? `${fadeInUp} 0.8s ease-out ${step.delay}ms forwards`
                      : 'none',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `0 20px 60px ${step.lightColor}80`,
                      borderColor: step.color,
                      '& .process-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: step.color,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    {/* Icon + Title */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                      <Box
                        className="process-icon"
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: '16px',
                          background: `linear-gradient(135deg, ${step.lightColor} 0%, ${step.color}20 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.5s ease',
                        }}
                      >
                        <IconComponent
                          sx={{
                            fontSize: '2.5rem',
                            color: step.color,
                          }}
                        />
                      </Box>

                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontSize: { xs: '1.5rem', md: '1.75rem' },
                            fontWeight: 700,
                            color: offBlackText,
                          }}
                        >
                          {step.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: step.color,
                            fontSize: '0.9rem',
                            fontWeight: 600,
                          }}
                        >
                          Step {index + 1} of {steps.length}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: offBlackTextLight,
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1rem' },
                      }}
                    >
                      {step.description}
                    </Typography>

                    {!isLast && (
                      <Box sx={{ display: { xs: 'none', md: 'flex' }, mt: 3 }}>
                        <ArrowForward sx={{ fontSize: '2rem', color: step.lightColor }} />
                      </Box>
                    )}
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

export default ProjectProcess;
