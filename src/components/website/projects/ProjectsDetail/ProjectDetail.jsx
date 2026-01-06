'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Chip, Stack, Divider } from '@mui/material';
import Link from 'next/link';
import {
  LocationOn,
  CalendarToday,
  Business,
  Build,
  ArrowBack,
  CheckCircle,
} from '@mui/icons-material';
import { useParams } from 'next/navigation';
import {
  primaryColor,
  primaryLight,
  secondaryColor,
  secondaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
} from '@/components/utils/Colors';

const projects = [
  {
    id: 1,
    title: 'Logistics Hub Loading Bays',
    sector: 'Industrial',
    location: { city: 'Riyadh', country: 'Saudi Arabia' },
    year: 2024,
    services: ['Garage Doors', 'Dock Equipment'],
    image: '/images/home-banner/garage-door-1.webp',
    description: 'A comprehensive logistics hub featuring state-of-the-art loading bay systems with automated garage doors and advanced dock equipment. This project transformed the facility\'s operational efficiency and safety standards.',
    overview: 'This large-scale industrial project involved the installation of automated loading bay systems across multiple facilities. The solution includes high-performance garage doors, dock levelers, and integrated access control systems.',
    features: [
      'Automated garage door systems with remote control',
      'Heavy-duty dock equipment for various vehicle types',
      'Integrated access control and security systems',
      'Weather-resistant and energy-efficient solutions',
      '24/7 monitoring and maintenance support',
    ],
    challenges: [
      'Coordinating installation across multiple loading bays',
      'Ensuring minimal disruption to daily operations',
      'Meeting strict safety and compliance standards',
    ],
    solutions: [
      'Phased installation approach during off-peak hours',
      'Custom-designed solutions for each bay\'s requirements',
      'Comprehensive training for facility staff',
    ],
      galleryImages: [
      {
        image: "/images/cable/cable15.jpeg",
        width: { xs: "180px", sm: "300px" },
        caption: "Structured Cabling\nCommercial installation",
      },
      {
        image: "/images/cable/cable16.jpeg",
        width: { xs: "120px", sm: "270px" },
        caption: "Network Infrastructure\nOffice setup",
      },
      {
        image: "/images/cable/cable17.jpeg",
        width: { xs: "120px", sm: "300px" },
        caption: "Fiber Cabling\nHigh-speed networks",
      },
      {
        image: "/images/cable/cable19.jpeg",
        width: { xs: "180px", sm: "270px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable18.jpeg",
        width: { xs: "180px", sm: "270px" },
        caption: "Cable Management\nClean routing",
      },
      {
        width: { xs: "120px", sm: "320px" },

        image: "/images/cable/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable20.jpeg",
        width: { xs: "120px", sm: "320px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable8.jpeg",
        width: { xs: "180px", sm: "275px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable9.jpeg",
        width: { xs: "180px", sm: "225px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable10.jpeg",
        width: { xs: "120px", sm: "185px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable11.jpeg",
        width: { xs: "120px", sm: "330px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable12.jpeg",
        width: { xs: "180px", sm: "340px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable13.jpeg",
        width: { xs: "180px", sm: "200px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable14.jpeg",
        width: { xs: "120px", sm: "300px" },
        caption: "Cable Management\nClean routing",
      },
    ],

  },
  {
    id: 2,
    title: 'Premium Residential Compound',
    sector: 'Residential',
    location: { city: 'Jeddah', country: 'Saudi Arabia' },
    year: 2023,
    services: ['Gate Operators', 'Access Control', 'CCTV'],
    image: '/images/home-banner/digital-lock.jpg',
    description: 'A luxury residential compound featuring integrated security and access control solutions. The project includes automated gate systems, smart access control, and comprehensive CCTV surveillance.',
    overview: 'This premium residential development required a complete security and access control infrastructure. The solution provides residents with seamless entry, enhanced security, and peace of mind.',
    features: [
      'Automated gate operators with smart access',
      'Biometric and card-based access control systems',
      'High-definition CCTV surveillance network',
      'Mobile app integration for remote access',
      'Visitor management and intercom systems',
    ],
    challenges: [
      'Integrating multiple security systems seamlessly',
      'Ensuring user-friendly interfaces for residents',
      'Maintaining aesthetic appeal of the compound',
    ],
    solutions: [
      'Unified control platform for all systems',
      'Comprehensive resident training programs',
      'Custom-designed solutions matching architectural style',
    ],
      galleryImages: [
      {
        image: "/images/cable/cable15.jpeg",
        width: { xs: "180px", sm: "300px" },
        caption: "Structured Cabling\nCommercial installation",
      },
      {
        image: "/images/cable/cable16.jpeg",
        width: { xs: "120px", sm: "270px" },
        caption: "Network Infrastructure\nOffice setup",
      },
      {
        image: "/images/cable/cable17.jpeg",
        width: { xs: "120px", sm: "300px" },
        caption: "Fiber Cabling\nHigh-speed networks",
      },
      {
        image: "/images/cable/cable19.jpeg",
        width: { xs: "180px", sm: "270px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable18.jpeg",
        width: { xs: "180px", sm: "270px" },
        caption: "Cable Management\nClean routing",
      },
      {
        width: { xs: "120px", sm: "320px" },

        image: "/images/cable/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable20.jpeg",
        width: { xs: "120px", sm: "320px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable8.jpeg",
        width: { xs: "180px", sm: "275px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable9.jpeg",
        width: { xs: "180px", sm: "225px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable10.jpeg",
        width: { xs: "120px", sm: "185px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable11.jpeg",
        width: { xs: "120px", sm: "330px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable12.jpeg",
        width: { xs: "180px", sm: "340px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable13.jpeg",
        width: { xs: "180px", sm: "200px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable14.jpeg",
        width: { xs: "120px", sm: "300px" },
        caption: "Cable Management\nClean routing",
      },
    ],

  },
  {
    id: 3,
    title: 'University Parking Expansion',
    sector: 'Education',
    location: { city: 'Dammam', country: 'Saudi Arabia' },
    year: 2022,
    services: ['Road Barriers', 'Networking'],
    image: '/images/home-banner/parking-barrier.jpg',
    description: 'An intelligent parking management system for a major university expansion. The project includes automated road barriers, parking guidance systems, and integrated network infrastructure.',
    overview: 'This educational institution required a modern parking solution to accommodate growing student and staff populations. The system optimizes space utilization and improves traffic flow.',
    features: [
      'Automated road barriers with license plate recognition',
      'Real-time parking space availability system',
      'Integrated network infrastructure for connectivity',
      'Mobile payment and reservation systems',
      'Comprehensive traffic management solutions',
    ],
    challenges: [
      'Managing high traffic volumes during peak hours',
      'Integrating with existing campus systems',
      'Ensuring reliable operation in all weather conditions',
    ],
    solutions: [
      'Intelligent traffic flow algorithms',
      'Seamless integration with campus management systems',
      'Weather-resistant hardware and redundant systems',
    ],
      galleryImages: [
      {
        image: "/images/cable/cable15.jpeg",
        width: { xs: "180px", sm: "300px" },
        caption: "Structured Cabling\nCommercial installation",
      },
      {
        image: "/images/cable/cable16.jpeg",
        width: { xs: "120px", sm: "270px" },
        caption: "Network Infrastructure\nOffice setup",
      },
      {
        image: "/images/cable/cable17.jpeg",
        width: { xs: "120px", sm: "300px" },
        caption: "Fiber Cabling\nHigh-speed networks",
      },
      {
        image: "/images/cable/cable19.jpeg",
        width: { xs: "180px", sm: "270px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable18.jpeg",
        width: { xs: "180px", sm: "270px" },
        caption: "Cable Management\nClean routing",
      },
      {
        width: { xs: "120px", sm: "320px" },

        image: "/images/cable/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable20.jpeg",
        width: { xs: "120px", sm: "320px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable8.jpeg",
        width: { xs: "180px", sm: "275px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable9.jpeg",
        width: { xs: "180px", sm: "225px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable10.jpeg",
        width: { xs: "120px", sm: "185px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable11.jpeg",
        width: { xs: "120px", sm: "330px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable12.jpeg",
        width: { xs: "180px", sm: "340px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable13.jpeg",
        width: { xs: "180px", sm: "200px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable14.jpeg",
        width: { xs: "120px", sm: "300px" },
        caption: "Cable Management\nClean routing",
      },
    ],

  },
];

const ProjectDetail = () => {
  const params = useParams();
  const id = params?.id;
  const numericId = Number.parseInt(id, 10);
  const project = projects.find((p) => p.id === numericId);

  if (!project) {
    return (
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: offWhiteColor,
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography variant="h4" sx={{ color: offBlackText, mb: 2 }}>
          Project not found
        </Typography>
        <Button
          component={Link}
          href="/projects"
          variant="contained"
          sx={{
            backgroundColor: secondaryColor,
            color: offWhiteColor,
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          Back to Projects
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: offWhiteColor, minHeight: '100vh' }}>
      {/* Banner */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
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
          src={project.image}
          alt={project.title}
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
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          }}
        />

        {/* Banner Content */}
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
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '2.2rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 700,
              color: offWhiteColor,
              mb: 2,
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: offWhiteColor,
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.7,
              mb: 3,
            }}
          >
            {project.description}
          </Typography>

          {/* Project Meta Info */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 4 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOn sx={{ color: primaryColor, fontSize: '1.5rem' }} />
              <Typography variant="body1" sx={{ color: offWhiteColor, fontWeight: 500 }}>
                {project.location.city}, {project.location.country}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarToday sx={{ color: primaryColor, fontSize: '1.5rem' }} />
              <Typography variant="body1" sx={{ color: offWhiteColor, fontWeight: 500 }}>
                {project.year}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Business sx={{ color: primaryColor, fontSize: '1.5rem' }} />
              <Typography variant="body1" sx={{ color: offWhiteColor, fontWeight: 500 }}>
                {project.sector}
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Detail Sections */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Back Button */}
        <Button
          component={Link}
          href="/projects"
          startIcon={<ArrowBack />}
          sx={{
            mb: 4,
            color: secondaryColor,
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: `${secondaryColor}10`,
            },
          }}
        >
          Back to Projects
        </Button>

        {/* Project Overview */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 700,
              color: offBlackText,
              mb: 3,
            }}
          >
            Project Overview
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: offBlackTextLight,
              fontSize: { xs: '0.98rem', md: '1.05rem' },
              lineHeight: 1.8,
            }}
          >
            {project.overview}
          </Typography>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Key Features */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 700,
              color: offBlackText,
              mb: 3,
            }}
          >
            Key Features
          </Typography>
          <Grid container spacing={2}>
            {project.features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    p: 2,
                    borderRadius: '12px',
                    backgroundColor: `${secondaryLight}10`,
                    border: `1px solid ${secondaryLight}30`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: `${secondaryLight}20`,
                      transform: 'translateX(8px)',
                    },
                  }}
                >
                  <CheckCircle sx={{ color: secondaryColor, fontSize: '1.5rem', mt: 0.5 }} />
                  <Typography
                    variant="body1"
                    sx={{
                      color: offBlackText,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Services Used */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 700,
              color: offBlackText,
              mb: 3,
            }}
          >
            Services Used
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
            {project.services.map((service, idx) => (
              <Chip
                key={idx}
                label={service}
                icon={<Build sx={{ fontSize: '1rem !important' }} />}
                sx={{
                  backgroundColor: `${secondaryColor}15`,
                  color: secondaryColor,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  px: 1,
                  py: 2.5,
                  border: `1px solid ${secondaryColor}30`,
                }}
              />
            ))}
          </Stack>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Challenges & Solutions */}
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                borderRadius: '16px',
                border: `2px solid ${primaryLight}`,
                boxShadow: `0 4px 20px ${primaryLight}40`,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                    fontWeight: 700,
                    color: primaryColor,
                    mb: 3,
                  }}
                >
                  Challenges
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {project.challenges.map((challenge, index) => (
                    <Typography
                      key={index}
                      component="li"
                      variant="body1"
                      sx={{
                        color: offBlackTextLight,
                        mb: 2,
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1rem' },
                      }}
                    >
                      {challenge}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                borderRadius: '16px',
                border: `2px solid ${secondaryLight}`,
                boxShadow: `0 4px 20px ${secondaryLight}40`,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                    fontWeight: 700,
                    color: secondaryColor,
                    mb: 3,
                  }}
                >
                  Solutions
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {project.solutions.map((solution, index) => (
                    <Typography
                      key={index}
                      component="li"
                      variant="body1"
                      sx={{
                        color: offBlackTextLight,
                        mb: 2,
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1rem' },
                      }}
                    >
                      {solution}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Gallery */}
          <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
                  {/* Header */}
                  <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Chip
                      label="Gallery"
                      sx={{
                        bgcolor: "#f0f0f0",
                        fontWeight: 600,
                        borderRadius: "50px",
                        px: { xs: 1, sm: 3 },
                        py: 2,
                      }}
                    />
                  </Box>
        
                  <Typography
                    variant="h4"
                    sx={{ textAlign: "center", mb: 2, fontWeight: 700 }}
                  >
                    Our Latest Projects
                  </Typography>
        
                  <Typography
                    sx={{
                      textAlign: "center",
                      mb: 6,
                      color: "text.secondary",
                      maxWidth: 800,
                      mx: "auto",
                    }}
                  >
                    Explore our professional installations and completed solutions.
                  </Typography>
        
                  {/* Gallery Grid */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: { xs: "10px", sm: "15px" },
                      justifyContent: "center",
                    }}
                  >
                    {(project?.galleryImages || []).map((img, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: {
                            xs: `${img.width.xs}` || "180px",
                            sm: `${img.width.sm}` || "260px",
                          },
                          height: "220px",
                          borderRadius: "18px",
                          overflow: "hidden",
                          position: "relative",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                          cursor: "pointer",
                          flexShrink: 0,
        
                          "&:hover img": {
                            transform: "scale(1.08)",
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={img.image}
                          alt={img.caption}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                          }}
                        />
        
                        {/* Hover Overlay */}
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 0,
                            bgcolor: "rgba(0,0,0,0.65)",
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "center",
                            opacity: 0,
                            transition: "opacity 0.4s ease",
                            p: 2,
                            "&:hover": {
                              opacity: 1,
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#fff",
                              fontWeight: 600,
                              fontSize: "0.95rem",
                              textAlign: "center",
                              whiteSpace: "pre-line",
                            }}
                          >
                            {img.caption}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Container>

        {/* Call to Action */}
        <Box
          sx={{
            mt: 8,
            textAlign: 'center',
            p: 4,
            borderRadius: '16px',
            background: `linear-gradient(135deg, ${secondaryLight}15 0%, ${primaryLight}15 100%)`,
            border: `2px solid ${secondaryLight}30`,
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              fontWeight: 700,
              color: offBlackText,
              mb: 2,
            }}
          >
            Interested in Similar Solutions?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: offBlackTextLight,
              mb: 3,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Contact us to discuss how we can help with your next project
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            sx={{
              backgroundColor: secondaryColor,
              color: offWhiteColor,
              textTransform: 'none',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: secondaryColor,
              },
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectDetail;
