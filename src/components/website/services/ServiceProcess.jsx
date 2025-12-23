'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import {
  Assessment,
  DesignServices,
  Build,
  Support,
  CheckCircle,
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

const ServiceProcess = () => {
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
      title: 'Consultation & Assessment',
      description: 'We begin with a comprehensive consultation to understand your specific needs, assess your current infrastructure, and identify opportunities for improvement.',
      icon: Assessment,
      color: secondaryColor,
      lightColor: secondaryLight,
    },
    {
      id: 2,
      title: 'Design & Planning',
      description: 'Our expert team creates customized solutions tailored to your requirements, ensuring optimal integration and future scalability.',
      icon: DesignServices,
      color: primaryColor,
      lightColor: primaryLight,
    },
    {
      id: 3,
      title: 'Installation & Implementation',
      description: 'Professional installation by certified technicians with minimal disruption to your operations, following industry best practices.',
      icon: Build,
      color: secondaryColor,
      lightColor: secondaryLight,
    },
    {
      id: 4,
      title: 'Support & Maintenance',
      description: 'Ongoing support, regular maintenance, and system updates to ensure peak performance and longevity of your solutions.',
      icon: Support,
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
        backgroundColor: offWhiteColor,
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
            Our{' '}
            <Box component="span" sx={{ color: primaryColor }}>
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
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            From consultation to ongoing support, we guide you through every step
          </Typography>
        </Box>

        {/* Process Steps */}
        <Grid container spacing={4} justifyContent={'center'}>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 5,lg:3 }} key={step.id}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '24px',
                    background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${step.lightColor}10 100%)`,
                    border: `2px solid ${step.lightColor}`,
                    boxShadow: `0 8px 32px ${step.lightColor}40`,
                    position: 'relative',
                    overflow: 'visible',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateY(0) scale(1)'
                      : 'translateY(50px) scale(0.9)',
                    transitionDelay: `${index * 150}ms`,
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `0 20px 60px ${step.lightColor}80`,
                      borderColor: step.color,
                      '& .process-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: step.color,
                      },
                      '& .process-number': {
                        transform: 'scale(1.2)',
                        backgroundColor: step.color,
                        color: offWhiteColor,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                    {/* Step Number */}
                    <Box
                      className="process-number"
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        backgroundColor: step.lightColor,
                        color: step.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        mx: 'auto',
                        mb: 2,
                        transition: 'all 0.3s ease',
                        fontFamily: "'Quicksand', sans-serif",
                      }}
                    >
                      {step.id}
                    </Box>

                    {/* Icon */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${step.lightColor} 0%, ${step.color}20 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <IconComponent
                          className="process-icon"
                          sx={{
                            fontSize: '2.5rem',
                            color: step.color,
                            transition: 'all 0.3s ease',
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Title */}
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
                      {step.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: offBlackTextLight,
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        fontFamily: "'Quicksand', sans-serif",
                      }}
                    >
                      {step.description}
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

export default ServiceProcess;

