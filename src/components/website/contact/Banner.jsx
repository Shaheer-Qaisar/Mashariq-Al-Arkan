'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {
  primaryColor,
  secondaryColor,
  offWhiteColor
} from '@/components/utils/Colors';
import bannerData from './ContactData.json';

const Banner = () => {
  const { background, container, heading, subheading } = bannerData.banner;

  // Map JSON color names to actual imported colors
  const getColor = (colorName) => {
    switch (colorName) {
      case 'primaryColor':
        return primaryColor;
      case 'secondaryColor':
        return secondaryColor;
      case 'offWhiteColor':
        return offWhiteColor;
      default:
        return colorName;
    }
  };

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
        src={background.image}
        alt="Contact Banner"
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
          backgroundColor: background.overlayColor,
          zIndex: 1
        }}
      />

      {/* Content */}
      <Container
        maxWidth={container.maxWidth}
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: container.paddingX
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
              fontSize: heading.fontSize,
              fontWeight: heading.fontWeight,
              color: getColor(heading.color),
              lineHeight: heading.lineHeight,
              mb: heading.marginBottom
            }}
          >
            {heading.lines.map((line, idx) => (
              <React.Fragment key={idx}>
                {line.text}
                {line.highlight && (
                  <Box component="span" sx={{ color: getColor(line.highlight.color) }}>
                    {line.highlight.text}
                  </Box>
                )}
                <br />
              </React.Fragment>
            ))}
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontSize: subheading.fontSize,
              fontWeight: subheading.fontWeight,
              color: getColor(subheading.color),
              maxWidth: subheading.maxWidth,
              lineHeight: subheading.lineHeight,
              mb: subheading.marginBottom,
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
