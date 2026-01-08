'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {
  primaryColor,
  secondaryColor,
  offWhiteColor,
} from '@/components/utils/Colors';

import bannerData from './ClientData.json';

const Banner = () => {
  const { backgroundImage, heading, subHeading } = bannerData.banner;

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
        src={backgroundImage}
        alt="Clients Banner"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
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
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '5rem' },
            fontWeight: 700,
            color: offWhiteColor,
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          {heading.line1}{' '}
          <Box component="span" sx={{ color: primaryColor }}>
            {heading.highlight1}
          </Box>
          <br />
          <Box component="span" sx={{ color: secondaryColor }}>
            {heading.line2Highlight}
          </Box>{' '}
          {heading.line2}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
            color: offWhiteColor,
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6,
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
          }}
        >
          {subHeading}
        </Typography>
      </Container>
    </Box>
  );
};

export default Banner;
