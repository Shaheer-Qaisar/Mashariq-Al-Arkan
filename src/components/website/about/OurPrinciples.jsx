'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Visibility, RocketLaunch, Favorite, CheckCircle } from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import {
  primaryColor,
  primaryLight,
  secondaryColor,
  secondaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight
} from '@/components/utils/Colors';

import aboutData from './AboutPageData.json';
// Keyframes for animations
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const iconMap = {
  Mission: RocketLaunch,
  Vision: Visibility,
  Values: Favorite
};

const OurPrinciples = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, [isVisible]);

  const { sectionHeader, principles, values } = aboutData.principles;

  return (
    <Box ref={sectionRef} component="section" sx={{ py: { xs: 8, md: 12 }, backgroundColor: offWhiteColor, overflow: 'hidden' }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 }, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease-out' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: sectionHeader.titleFont.fontSizes,
              fontWeight: sectionHeader.titleFont.fontWeight,
              color: offBlackText,
              mb: 2,
              fontFamily: sectionHeader.titleFont.fontFamily
            }}
          >
            {sectionHeader.title.split(' ')[0]}{' '}
            <Box component="span" sx={{ color: primaryColor }}>
              {sectionHeader.highlight}
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: offBlackTextLight,
              fontSize: sectionHeader.descriptionFont.fontSizes,
              maxWidth: sectionHeader.descriptionFont.maxWidth,
              mx: 'auto',
              fontFamily: sectionHeader.descriptionFont.fontFamily
            }}
          >
            {sectionHeader.description}
          </Typography>
        </Box>

        {/* Principles Cards */}
        <Grid container spacing={4} sx={{ mb: { xs: 6, md: 10 } }} justifyContent="center">
          {principles.map((p) => {
            const IconComponent = iconMap[p.title];
            return (
              <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{
                  height: '100%',
                  borderRadius: '24px',
                  background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${offWhiteColor} 100%)`,
                  border: `2px solid ${p.lightColor === "primaryLight" ? primaryLight : secondaryLight}`,
                  boxShadow: `0 8px 32px ${p.lightColor === "primaryLight" ? primaryLight : secondaryLight}40`,
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                  animation: isVisible ? `${fadeInUp} 0.8s ease-out ${p.delay}ms forwards` : 'none'
                }}>
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                      <Box sx={{
                        width: 100, height: 100, borderRadius: '50%',
                        background: `linear-gradient(135deg, ${p.lightColor === "primaryLight" ? primaryLight : secondaryLight} 0%, ${p.color === "primaryColor" ? primaryColor : secondaryColor}20 100%)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <IconComponent sx={{ fontSize: '3.5rem', color: p.color === "primaryColor" ? primaryColor : secondaryColor }} />
                      </Box>
                    </Box>
                    <Typography variant="h4" component="h3" sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, fontWeight: 700, color: offBlackText, textAlign: 'center', mb: 2, fontFamily: "'Quicksand', sans-serif'" }}>
                      {p.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: offBlackTextLight, textAlign: 'center', lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' }, fontFamily: "'Quicksand', sans-serif'" }}>
                      {p.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Values Section */}
        <Box sx={{ mt: { xs: 4, md: 8 }, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease-out 600ms' }}>
          <Typography variant="h3" component="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, color: offBlackText, textAlign: 'center', mb: 4, fontFamily: "'Quicksand', sans-serif'" }}>
            Core <Box component="span" sx={{ color: secondaryColor }}>Values</Box>
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {values.map((v, index) => (
              <Grid key={v.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{
                  display: 'flex', alignItems: 'center', gap: 2, p: 2.5,
                  borderRadius: '16px',
                  background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${primaryLight}10 100%)`,
                  border: `1px solid ${primaryLight}`,
                  transition: 'all 0.3s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : index % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)',
                  animation: isVisible ? `${fadeInUp} 0.6s ease-out ${800 + index * 100}ms forwards` : 'none'
                }}>
                  <CheckCircle sx={{ color: secondaryColor, fontSize: '1.75rem' }} />
                  <Typography sx={{ color: offBlackTextLight, fontSize: { xs: '0.95rem', md: '1rem' }, fontWeight: 500, fontFamily: "'Quicksand', sans-serif'" }}>
                    {v.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default OurPrinciples;
