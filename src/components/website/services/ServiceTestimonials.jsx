'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
} from '@mui/material';
import {
  primaryColor,
  primaryLight,
  secondaryColor,
  secondaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
} from '@/components/utils/Colors';

const ServiceTestimonials = () => {
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

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al-Rashid',
      position: 'Facility Manager',
      company: 'Commercial Complex',
      rating: 5,
      comment:
        'Outstanding service from start to finish. The team was professional, efficient, and the security system they installed has exceeded our expectations.',
      color: primaryColor,
      lightColor: primaryLight,
    },
    {
      id: 2,
      name: 'Fatima Al-Zahra',
      position: 'Property Owner',
      company: 'Residential Complex',
      rating: 5,
      comment:
        'Excellent work on our parking automation system. The installation was smooth and the ongoing support has been exceptional. Highly recommended!',
      color: secondaryColor,
      lightColor: secondaryLight,
    },
    {
      id: 3,
      name: 'Mohammed Al-Saud',
      position: 'Operations Director',
      company: 'Industrial Facility',
      rating: 5,
      comment:
        'Professional team with deep expertise. They delivered a comprehensive security solution that integrates seamlessly with our existing systems.',
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
            What Our{' '}
            <Box component="span" sx={{ color: primaryColor }}>
              Clients Say
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
            Trusted by businesses and property owners across Saudi Arabia
          </Typography>
        </Box>

        {/* Testimonials Grid */}
        <Grid container spacing={4} justifyContent={'center'}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, sm:6,md: 4 }} key={testimonial.id}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '24px',
                  background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${testimonial.lightColor}10 100%)`,
                  border: `2px solid ${testimonial.lightColor}`,
                  boxShadow: `0 8px 32px ${testimonial.lightColor}40`,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? 'translateY(0)'
                    : 'translateY(40px)',
                  transitionDelay: `${index * 150}ms`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 16px 48px ${testimonial.lightColor}60`,
                    borderColor: testimonial.color,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Rating */}
                  <Box sx={{ mb: 3 }}>
                    <Rating value={testimonial.rating} readOnly sx={{ color: testimonial.color }} />
                  </Box>

                  {/* Comment */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: offBlackTextLight,
                      lineHeight: 1.8,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      mb: 3,
                      fontStyle: 'italic',
                      fontFamily: "'Quicksand', sans-serif",
                    }}
                  >
                    "{testimonial.comment}"
                  </Typography>

                  {/* Author */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      pt: 2,
                      borderTop: `1px solid ${testimonial.lightColor}`,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,
                        bgcolor: testimonial.color,
                        fontSize: '1.25rem',
                        fontWeight: 700,
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: offBlackText,
                          fontFamily: "'Quicksand', sans-serif",
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: '0.85rem',
                          color: offBlackTextLight,
                          fontFamily: "'Quicksand', sans-serif",
                        }}
                      >
                        {testimonial.position}, {testimonial.company}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceTestimonials;

