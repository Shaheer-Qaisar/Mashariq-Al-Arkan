'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton
} from '@mui/material';
import * as Icons from '@mui/icons-material';
import {
  primaryColor,
  primaryLight,
  secondaryColor,
  secondaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight
} from '@/components/utils/Colors';
import mapData from '@/data/MapData.json';

const Map = () => {
  const { googleMapsUrl, contactDetails, socialLinks } = mapData;

  return (
    <Box
      component="section"
      sx={{ py: { xs: 6, md: 10 }, backgroundColor: offWhiteColor }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }} data-aos="fade-up">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 700,
              color: offBlackText,
              mb: 2,
              fontFamily: "'Quicksand', sans-serif"
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
              fontFamily: "'Quicksand', sans-serif"
            }}
          >
            Visit our office or get in touch with us through any of the channels below
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Map */}
          <Grid size={{ xs: 12, lg: 8 }} data-aos="fade-right" maxHeight={[400, 500]}>
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
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                <iframe
                  src={googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(20%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mashariq Al-Arkan Location"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100px',
                    background: `linear-gradient(to top, ${offWhiteColor} 0%, transparent 100%)`,
                    pointerEvents: 'none'
                  }}
                />
              </Box>
            </Card>
          </Grid>

          {/* Contact Cards */}
          <Grid size={{ xs: 12, lg: 4 }} data-aos="fade-left">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
              {contactDetails.map((detail, index) => {
                const IconComponent = Icons[detail.icon];
                const color = detail.color === 'primaryColor' ? primaryColor : secondaryColor;
                const lightColor =
                  detail.lightColor === 'primaryLight' ? primaryLight : secondaryLight;

                return (
                  <Card
                    key={index}
                    sx={{
                      borderRadius: '20px',
                      background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${lightColor}10 100%)`,
                      border: `2px solid ${lightColor}`,
                      boxShadow: `0 4px 16px ${lightColor}40`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: `0 8px 24px ${lightColor}60`,
                        borderColor: color,
                        '& .contact-icon': { transform: 'scale(1.1) rotate(5deg)', color: color }
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '16px',
                            background: `linear-gradient(135deg, ${lightColor} 0%, ${color}20 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <IconComponent className="contact-icon" sx={{ fontSize: '2rem', color: color }} />
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
                              fontFamily: "'Quicksand', sans-serif"
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
                              fontFamily: "'Quicksand', sans-serif"
                            }}
                          >
                            {detail.value}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: '0.85rem',
                              color: offBlackTextLight,
                              fontFamily: "'Quicksand', sans-serif"
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

              {/* Social Links */}
              <Card
                sx={{
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${primaryLight}10 100%)`,
                  border: `2px solid ${primaryLight}`,
                  boxShadow: `0 4px 16px ${primaryLight}40`,
                  mt: 'auto'
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: '1rem', fontWeight: 600, color: offBlackText, mb: 2 }}
                  >
                    Follow Us
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    {socialLinks.map((social, index) => {
                      const IconComponent = Icons[social.icon];
                      const color = social.color === 'primaryColor' ? primaryColor : secondaryColor;
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
                            background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
                            border: `2px solid ${color}40`,
                            color: color,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-4px) scale(1.1)',
                              background: `linear-gradient(135deg, ${color} 0%, ${color} 100%)`,
                              color: offWhiteColor,
                              borderColor: color,
                              boxShadow: `0 8px 16px ${color}60`
                            }
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
