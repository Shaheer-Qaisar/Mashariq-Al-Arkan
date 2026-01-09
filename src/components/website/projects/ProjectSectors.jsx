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
  Factory,
  Home,
  School,
  BusinessCenter,
  LocalHospital,
  Store,
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

//  Icon mapping (icons remain the same)
const iconMap = {
  Factory,
  Home,
  School,
  BusinessCenter,
  LocalHospital,
  Store,
};

const ProjectSectors = () => {
   const data=Main.sectorData
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
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        backgroundColor: offWhiteColor,
        background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${secondaryLight}08 100%)`,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
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
            sx={{
              fontSize: data.typography.heading.fontSize,
              fontWeight: data.typography.heading.fontWeight,
              color: offBlackText,
              mb: 2,
            }}
          >
            {data.section.title.text}{' '}
            <Box component="span" sx={{ color: primaryColor }}>
              {data.section.title.highlight}
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: offBlackTextLight,
              fontSize: data.typography.subheading.fontSize,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            {data.section.description}
          </Typography>
        </Box>

        {/* Grid */}
        <Grid container spacing={4}>
          {data.sectors.map((sector) => {
            const IconComponent = iconMap[sector.icon];
            const color =
              sector.colorType === 'primary' ? primaryColor : secondaryColor;
            const lightColor =
              sector.colorType === 'primary' ? primaryLight : secondaryLight;

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={sector.id}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '24px',
                    background: offWhiteColor,
                    border: `2px solid ${lightColor}`,
                    boxShadow: `0 8px 32px ${lightColor}40`,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateY(0) scale(1)'
                      : 'translateY(50px) scale(0.9)',
                    animation: isVisible
                      ? `${fadeInUp} 0.8s ease-out ${sector.delay}ms forwards`
                      : 'none',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `0 20px 60px ${lightColor}80`,
                      borderColor: color,
                      '& .sector-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                    {/* Icon */}
                    <Box sx={{ mb: 3 }}>
                      <Box
                        className="sector-icon"
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${lightColor} 0%, ${color}20 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.5s ease',
                          margin: '0 auto',
                        }}
                      >
                        <IconComponent sx={{ fontSize: '3.5rem', color }} />
                      </Box>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: data.typography.cardTitle.fontSize,
                        fontWeight: data.typography.cardTitle.fontWeight,
                        color: offBlackText,
                        mb: 2,
                      }}
                    >
                      {sector.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: data.typography.cardDescription.fontSize,
                        color: offBlackTextLight,
                        lineHeight: 1.8,
                      }}
                    >
                      {sector.description}
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

export default ProjectSectors;
