'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {
  primaryColor,
  secondaryColor,
  offWhiteColor
} from '@/components/utils/Colors';
import BannerDataAbout from '@/data/BannerDataAbout.json';

const colorMap = {
  primaryColor,
  secondaryColor,
  offWhiteColor
};

const Banner = () => {
  const { backgroundImage, overlayColor, heading, headingFont, subheading } = BannerDataAbout;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={backgroundImage}
        alt="About Banner"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
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
          backgroundColor: overlayColor,
          zIndex: 1
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: { xs: 3, md: 4 }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
          }}
        >
          {/* Heading */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: headingFont.fontSize,
              fontWeight: headingFont.fontWeight,
              color: offWhiteColor,
              lineHeight: headingFont.lineHeight,
              mb: 1
            }}
          >
            {heading.map((h, i) => (
              <Box key={i} component="span" sx={{ color: colorMap[h.color] }}>
                {h.text}{' '}
              </Box>
            ))}
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontSize: subheading.fontSize,
              fontWeight: subheading.fontWeight,
              color: colorMap[subheading.color],
              maxWidth: subheading.maxWidth,
              lineHeight: subheading.lineHeight,
              mb: 2,
              textShadow: subheading.textShadow
            }}
          >
            {subheading.text}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
