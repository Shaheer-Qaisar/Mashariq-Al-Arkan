'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import {
  primaryColor,
  secondaryColor,
  offWhiteColor,
} from '@/components/utils/Colors';

const Banner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="/images/clients/clients-banner.avif"
        alt="Clients Banner"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Dim Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.73)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          {/* Heading */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '5rem' },
              fontWeight: 700,
              color: offWhiteColor,
              lineHeight: 1.2,
              mb: 1,
            }}
          >
            Our{' '}
            <Box component="span" sx={{ color: primaryColor }}>
              Clients
            </Box>
            <br />
            <Box component="span" sx={{ color: secondaryColor }}>
              Trusted
            </Box>{' '}
            Partners & Success Stories
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
              fontWeight: 400,
              color: offWhiteColor,
              maxWidth: '800px',
              lineHeight: 1.6,
              mb: 2,
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            We're proud to serve a diverse range of clients across Saudi Arabia. 
            From commercial buildings to residential complexes, we deliver trusted 
            security and automation solutions.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

