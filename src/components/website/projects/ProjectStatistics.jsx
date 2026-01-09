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
  TrendingUp,
  CheckCircle,
  LocationOn,
  Build,
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

//  Icon mapping (icons stay exactly the same)
const iconMap = {
  CheckCircle,
  LocationOn,
  Build,
  TrendingUp,
};

const ProjectStatistics = () => {
  const data =Main.statisticsData
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
              fontSize: data.typography.title.fontSize,
              fontWeight: data.typography.title.fontWeight,
              color: offBlackText,
              mb: 2,
            }}
          >
            {data.section.title.text}{' '}
            <Box component="span" sx={{ color: secondaryColor }}>
              {data.section.title.highlight}
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: offBlackTextLight,
              fontSize: data.typography.description.fontSize,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            {data.section.description}
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={4}>
          {data.statistics.map((stat) => {
            const IconComponent = iconMap[stat.icon];
            const color = stat.colorType === 'primary' ? primaryColor : secondaryColor;
            const lightColor =
              stat.colorType === 'primary' ? primaryLight : secondaryLight;

            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.id}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '24px',
                    background: offWhiteColor,
                    border: `2px solid ${lightColor}`,
                    boxShadow: `0 8px 32px ${lightColor}40`,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    animation: isVisible
                      ? `${fadeInUp} 0.8s ease-out ${stat.delay}ms forwards`
                      : 'none',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: `0 20px 60px ${lightColor}80`,
                      borderColor: color,
                      '& .stat-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: { xs: 3, md: 4 } }}>
                    <Box sx={{ mb: 3 }}>
                      <Box
                        className="stat-icon"
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${lightColor} 0%, ${color}20 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto',
                          transition: 'all 0.5s ease',
                        }}
                      >
                        <IconComponent sx={{ fontSize: '2.5rem', color }} />
                      </Box>
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: data.typography.number.fontSize,
                        fontWeight: data.typography.number.fontWeight,
                        color,
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: data.typography.label.fontSize,
                        fontWeight: data.typography.label.fontWeight,
                        color: offBlackText,
                      }}
                    >
                      {stat.label}
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

export default ProjectStatistics;
