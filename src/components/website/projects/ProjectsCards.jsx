'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import {
  LocationOn,
  CalendarToday,
  Business,
  Build,
  ArrowForward,
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

const ProjectsCards = ({ showExploreButton = true }) => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Logistics Hub Loading Bays',
      sector: 'Industrial',
      location: { city: 'Riyadh', country: 'Saudi Arabia' },
      year: 2024,
      services: ['Garage Doors', 'Dock Equipment'],
      image: '/images/home-banner/garage-door-1.webp',
    },
    {
      id: 2,
      title: 'Premium Residential Compound',
      sector: 'Residential',
      location: { city: 'Jeddah', country: 'Saudi Arabia' },
      year: 2023,
      services: ['Gate Operators', 'Access Control', 'CCTV'],
      image: '/images/home-banner/digital-lock.jpg',
    },
    {
      id: 3,
      title: 'University Parking Expansion',
      sector: 'Education',
      location: { city: 'Dammam', country: 'Saudi Arabia' },
      year: 2022,
      services: ['Road Barriers', 'Networking'],
      image: '/images/home-banner/parking-barrier.jpg',
    },
  ];

  // Mouse tracking for background animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((card, index) => {
      if (card) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleCards((prev) => new Set([...prev, index]));
              }
            });
          },
          {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px',
          }
        );
        observer.observe(card);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        py: { xs: 6, md: 10 },
        overflow: 'hidden',
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${secondaryLight}15 0%, ${secondaryLight}10 50%, transparent 70%)`,
        transition: 'background 0.3s ease-out',
      }}
    >
      {/* Animated Background Patterns */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {/* Animated Circles */}
        <Box
          sx={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)`,
            top: '10%',
            left: '-100px',
            animation: 'float 20s ease-in-out infinite',
            filter: 'blur(60px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${secondaryColor} 0%, transparent 70%)`,
            bottom: '10%',
            right: '-150px',
            animation: 'float 25s ease-in-out infinite reverse',
            filter: 'blur(80px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${secondaryLight} 0%, transparent 70%)`,
            top: '50%',
            left: '50%',
            animation: 'float 30s ease-in-out infinite',
            filter: 'blur(70px)',
          }}
        />

        {/* Grid Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(${secondaryColor}08 1px, transparent 1px),
              linear-gradient(90deg, ${secondaryColor}08 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }} data-aos="fade-up" >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 700,
              color: offBlackText,
              mb: 2,
              fontFamily: "'Quicksand', sans-serif",
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            Our{' '}
            <Box component="span" sx={{ color: secondaryColor }}>
              Projects
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: offBlackTextLight,
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              maxWidth: '600px',
              mx: 'auto',
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            Explore our portfolio of successful projects across various sectors
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6,lg:4}} key={project.id}
            
              data-aos={index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"}
              data-aos-delay={ 200}
            >
              <Card
                component={Link}
                href={`/projects/${project.id}`}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'none',
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: visibleCards.has(index) ? 1 : 0,
                  transform: visibleCards.has(index)
                    ? 'translateY(0)'
                    : 'translateY(40px)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: `0 20px 60px ${secondaryLight}`,
                    borderColor: `${secondaryColor}40`,
                    '& .project-image': {
                      transform: 'scale(1.1)',
                    },
                    '& .project-overlay': {
                      opacity: 0.8,
                    },
                  },
                }}
              >
                {/* Project Image */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '250px', md: '300px' },
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    className="project-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${secondaryColor}40 0%, ${secondaryColor}60 100%)`,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      zIndex: 1,
                    }}
                  />
                  <Box
                    className="project-image"
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                </Box>

                {/* Project Content */}
                <CardContent
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Sector Badge */}
                  <Chip
                    label={project.sector}
                    size="small"
                    icon={<Business sx={{ fontSize: '1rem !important' }} />}
                    sx={{
                      alignSelf: 'flex-start',
                      mb: 2,
                      backgroundColor: `${secondaryColor}15`,
                      color: secondaryColor,
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      fontFamily: "'Quicksand', sans-serif",
                      border: `1px solid ${secondaryColor}30`,
                    }}
                  />

                  {/* Title */}
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      color: offBlackText,
                      fontWeight: 700,
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                      mb: 2,
                      fontFamily: "'Quicksand', sans-serif",
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </Typography>

                  {/* Location and Year */}
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: offBlackTextLight,
                      }}
                    >
                      <LocationOn sx={{ fontSize: '1.1rem', color: secondaryColor }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: '0.85rem',
                          fontFamily: "'Quicksand', sans-serif",
                        }}
                      >
                        {project.location.city}, {project.location.country}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: offBlackTextLight,
                      }}
                    >
                      <CalendarToday sx={{ fontSize: '1.1rem', color: secondaryColor }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: '0.85rem',
                          fontFamily: "'Quicksand', sans-serif",
                        }}
                      >
                        {project.year}
                      </Typography>
                    </Box>
                  </Stack>

                  {/* Services */}
                  <Box sx={{ mt: 'auto' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        mb: 1.5,
                      }}
                    >
                      <Build sx={{ fontSize: '1.1rem', color: secondaryColor }} />
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: offBlackTextLight,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          fontFamily: "'Quicksand', sans-serif",
                        }}
                      >
                        Services Used
                      </Typography>
                    </Box>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {project.services.map((service, idx) => (
                        <Chip
                          key={idx}
                          label={service}
                          size="small"
                          sx={{
                            backgroundColor: `${secondaryColor}15`,
                            color: secondaryColor,
                            fontWeight: 500,
                            fontSize: '0.7rem',
                            fontFamily: "'Quicksand', sans-serif",
                            border: `1px solid ${secondaryColor}30`,
                            height: '24px',
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Explore Projects Button */}
        {showExploreButton && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 5, md: 6 },
            }}
          >
            <Button
              component={Link}
              href="/projects"
              variant="outlined"
              endIcon={<ArrowForward sx={{ fontSize: '0.9rem' }} />}
              sx={{
                borderColor: `${secondaryColor}60`,
                color: secondaryColor,
                fontSize: { xs: '0.8rem', md: '0.9rem' },
                fontWeight: 600,
                px: { xs: 3, md: 4 },
                py: { xs: 1, md: 1.25 },
                borderRadius: '8px',
                textTransform: 'none',
                fontFamily: "'Quicksand', sans-serif",
                backgroundColor: `${secondaryColor}08`,
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  borderColor: secondaryColor,
                  backgroundColor: `${secondaryColor}15`,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 4px 20px ${secondaryColor}30`,
                  '& .MuiButton-endIcon': {
                    transform: 'translateX(3px)',
                  },
                },
                '& .MuiButton-endIcon': {
                  transition: 'transform 0.4s ease',
                },
              }}
            >
              Explore Projects
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ProjectsCards;
