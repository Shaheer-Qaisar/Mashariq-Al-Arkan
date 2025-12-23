'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
  LinkedIn,
  Instagram,
  Facebook,
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

const Map = () => {
  // Office location: King Fahd Road, Riyadh, Saudi Arabia
  // Using a standard Google Maps embed URL for King Fahd Road, Riyadh
  const googleMapsUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.5!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sKing%20Fahd%20Rd%2C%20Riyadh%2011523%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus';

  const contactDetails = [
    {
      icon: LocationOn,
      title: 'Office Address',
      value: 'King Fahd Road, Riyadh',
      subValue: 'Kingdom of Saudi Arabia',
      color: secondaryColor,
      lightColor: secondaryLight,
    },
    {
      icon: Phone,
      title: 'Phone Number',
      value: '+966 12 345 6789',
      subValue: 'Available 24/7',
      color: primaryColor,
      lightColor: primaryLight,
    },
    {
      icon: Email,
      title: 'Email Address',
      value: 'info@mashariq-alarkan.com',
      subValue: 'We respond within 24 hours',
      color: secondaryColor,
      lightColor: secondaryLight,
    },
    {
      icon: AccessTime,
      title: 'Business Hours',
      value: 'Sun - Thu: 8:00 AM - 6:00 PM',
      subValue: 'Friday & Saturday: Closed',
      color: primaryColor,
      lightColor: primaryLight,
    },
  ];

  const socialLinks = [
    { icon: LinkedIn, url: 'https://linkedin.com', color: secondaryColor },
    { icon: Instagram, url: 'https://instagram.com', color: primaryColor },
    { icon: Facebook, url: 'https://facebook.com', color: secondaryColor },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: offWhiteColor,
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
          }}
          data-aos="fade-up"
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
            Find Us{' '}
            <Box component="span" sx={{ color: primaryColor }}>
              Here
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
            Visit our office or get in touch with us through any of the channels below
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Map Section */}
          <Grid size={{ xs: 12, lg: 8 }} data-aos="fade-right">
            <Card
              sx={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: `2px solid ${secondaryLight}`,
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: `0 12px 48px ${secondaryLight}60`,
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '400px', md: '500px' },
                  overflow: 'hidden',
                }}
              >
                <iframe
                  src={googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: 'grayscale(20%)',
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mashariq Al-Arkan Location"
                />
                {/* Overlay gradient for better text readability */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100px',
                    background: `linear-gradient(to top, ${offWhiteColor} 0%, transparent 100%)`,
                    pointerEvents: 'none',
                  }}
                />
              </Box>
            </Card>
          </Grid>

          {/* Contact Details Cards */}
          <Grid size={{ xs: 12, lg: 4 }} data-aos="fade-left">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                height: '100%',
              }}
            >
              {contactDetails.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <Card
                    key={index}
                    sx={{
                      borderRadius: '20px',
                      background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${detail.lightColor}10 100%)`,
                      border: `2px solid ${detail.lightColor}`,
                      boxShadow: `0 4px 16px ${detail.lightColor}40`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: `0 8px 24px ${detail.lightColor}60`,
                        borderColor: detail.color,
                        '& .contact-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                          color: detail.color,
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '16px',
                            background: `linear-gradient(135deg, ${detail.lightColor} 0%, ${detail.color}20 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <IconComponent
                            className="contact-icon"
                            sx={{
                              fontSize: '2rem',
                              color: detail.color,
                              transition: 'all 0.3s ease',
                            }}
                          />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: '0.9rem',
                              fontWeight: 600,
                              color: offBlackTextLight,
                              mb: 0.5,
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px',
                              fontFamily: "'Quicksand', sans-serif",
                            }}
                          >
                            {detail.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              color: offBlackText,
                              mb: 0.5,
                              fontFamily: "'Quicksand', sans-serif",
                            }}
                          >
                            {detail.value}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: '0.85rem',
                              color: offBlackTextLight,
                              fontFamily: "'Quicksand', sans-serif",
                            }}
                          >
                            {detail.subValue}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Social Media Section */}
              <Card
                sx={{
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${primaryLight}10 100%)`,
                  border: `2px solid ${primaryLight}`,
                  boxShadow: `0 4px 16px ${primaryLight}40`,
                  mt: 'auto',
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: offBlackText,
                      mb: 2,
                      fontFamily: "'Quicksand', sans-serif",
                    }}
                  >
                    Follow Us
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <IconButton
                          key={index}
                          component="a"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '12px',
                            background: `linear-gradient(135deg, ${social.color}20 0%, ${social.color}10 100%)`,
                            border: `2px solid ${social.color}40`,
                            color: social.color,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-4px) scale(1.1)',
                              background: `linear-gradient(135deg, ${social.color} 0%, ${social.color} 100%)`,
                              color: offWhiteColor,
                              borderColor: social.color,
                              boxShadow: `0 8px 16px ${social.color}60`,
                            },
                          }}
                        >
                          <IconComponent />
                        </IconButton>
                      );
                    })}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Map;

