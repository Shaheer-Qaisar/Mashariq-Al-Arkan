'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stepper,
  Step,
  StepLabel,
  StepContent,
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

const ProjectProcess = () => {
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

  const steps = [
    {
      id: 1,
      label: 'Consultation & Planning',
      icon: Search,
      description: 'We begin with a comprehensive consultation to understand your needs, assess your facility, and develop a customized project plan.',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 0,
    },
    {
      id: 2,
      label: 'Design & Engineering',
      icon: DesignServices,
      description: 'Our expert team creates detailed designs and engineering plans, ensuring optimal solutions that meet all requirements and standards.',
      color: primaryColor,
      lightColor: primaryLight,
      delay: 200,
    },
    {
      id: 3,
      label: 'Installation & Implementation',
      icon: Build,
      description: 'Professional installation with minimal disruption, following strict quality standards and safety protocols throughout the process.',
      color: secondaryColor,
      lightColor: secondaryLight,
      delay: 400,
    },
    {
      id: 4,
      label: 'Testing & Handover',
      icon: CheckCircle,
      description: 'Comprehensive testing, staff training, and smooth handover with complete documentation and ongoing support.',
      color: primaryColor,
      lightColor: primaryLight,
      delay: 600,
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
      <Container maxWidth="lg">
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
            Our Project{' '}
            <Box component="span" sx={{ color: secondaryColor }}>
              Process
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
            A systematic approach ensuring successful project delivery from start to finish
          </Typography>
        </Box>

        {/* Process Steps */}
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
                    position: 'relative',
                    overflow: 'visible',
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
                    {/* Step Number and Icon */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 3,
                      }}
                    >
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
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent
                          sx={{
                            fontSize: '2.5rem',
                            color: step.color,
                            transition: 'all 0.5s ease',
                          }}
                        />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontSize: { xs: '1.5rem', md: '1.75rem' },
                            fontWeight: 700,
                            color: offBlackText,
                            mb: 0.5,
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

                    {/* Arrow (except for last item) */}
                    {!isLast && (
                      <Box
                        sx={{
                          display: { xs: 'none', md: 'flex' },
                          justifyContent: 'center',
                          mt: 3,
                        }}
                      >
                        <ArrowForward
                          sx={{
                            fontSize: '2rem',
                            color: step.lightColor,
                          }}
                        />
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

