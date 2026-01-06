'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import {
  primaryColor,
  primaryLight,
  secondaryColor,
  secondaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
} from '@/components/utils/Colors';

const Clients = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Dummy client logos data
const clients = [
  {
    id: 1,
    name: "Abdul Latif Jamil Group",
    logo: "/images/clients/client1.png",
    href: "https://www.alj.com",
  },
  {
    id: 2,
    name: "Shirka Tamer",
    logo: "/images/clients/client2.png",
    href: "https://www.tamer.com",
  },
  {
    id: 3,
    name: "Shirka Nesma",
    logo: "/images/clients/client3.svg",
    href: "https://www.nesma.com",
  },
  {
    id: 4,
    name: "Hyundai Muhammad Yousaf Nagi",
    logo: "/images/clients/client4.png",
    href: "https://www.hyundai.com",
  },
  {
    id: 5,
    name: "Shirka Jotan Paints",
    logo: "/images/clients/client5.png",
    href: "https://www.jotun.com",
  },
  {
    id: 6,
    name: "Shirka Hemple",
    logo: "/images/clients/client6.png",
    href: "https://www.hempel.com",
  },
  {
    id: 7,
    name: "Shura Iceland",
    logo: "/images/clients/client7.svg",
    href: "https://www.shura.is",
  },
  {
    id: 8,
    name: "Le Maradian Hotel",
    logo: "/images/clients/client8.png",
    href: "https://www.marriott.com",
  },
  {
    id: 9,
    name: "UCIC",
    logo: "/images/clients/client9.png",
    href: "https://www.ucic.com",
  },
  {
    id: 10,
    name: "Jaffali",
    logo: "/images/clients/client10.svg",
    href: "https://www.juffali.com",
  },
];


  // Handle mouse movement for background animation
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

  return (
    <Box
      ref={containerRef}
      sx={{
        backgroundColor: offWhiteColor,
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${secondaryLight} 0%, transparent 50%)`,
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-image 0.3s ease-out',
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 5,
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 0 },
          }}
        >
          {/* Heading */}
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              color: offBlackText,
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            Meet our{' '}
            <Box component="span" sx={{ color: secondaryColor }}>
              top-tier
            </Box>{' '}
            customers
          </Typography>

          {/* Learn More Button */}
          <Button
            component={Link}
            href="/clients"
            variant="outlined"
            endIcon={<ArrowForward />}
            sx={{
              color: offBlackText,
              borderColor: 'rgba(45, 45, 45, 0.3)',
              borderRadius: '8px',
              px: 3,
              py: 1.5,
              textTransform: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              fontFamily: "'Quicksand', sans-serif",
              '&:hover': {
                borderColor: secondaryColor,
                backgroundColor: secondaryLight,
                color: offWhiteColor,
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Learn More
          </Button>
        </Box>

        {/* Client Logos Grid */}
       <Grid container spacing={2} px={[1, 5]} justifyContent={'center'}>
  {clients.map((client) => (
    <Grid
      size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
      key={client.id}
      data-aos="flip-up"
    >
      <a
        href={client.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Card
          sx={{
            position: "relative",
            maxWidth: 170,
            backgroundColor: offWhiteColor,
            borderRadius: "16px",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            height: "100%",
            minHeight: "140px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.04)",
            overflow: "hidden",
            cursor: "pointer",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: `linear-gradient(90deg, ${secondaryColor} 0%, ${secondaryLight} 100%)`,
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            },
            "&:hover": {
              borderColor: secondaryColor,
              transform: "translateY(-8px) scale(1.02)",
              boxShadow: `0 12px 32px ${secondaryLight}`,
              "&::before": { transform: "scaleX(1)" },
            },
          }}
        >
          {/* EXISTING CONTENT — UNCHANGED */}
          <CardContent
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
              className="logo-container"
              sx={{
                width: "85px",
                height: "80px",
                borderRadius: "16px",
                background: `linear-gradient(135deg, ${secondaryLight} 0%, ${secondaryColor} 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: `0 4px 12px ${secondaryLight}`
              }}
            >
              <img
                alt={client.name}
                src={client.logo}
                height="70"
                width="80"
              />
            </Box>

            <Typography
              className="client-name"
              variant="body2"
              sx={{
                color: offBlackText,
                fontSize: "0.85rem",
                fontWeight: 600,
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              {client.name}
            </Typography>
          </CardContent>
        </Card>
      </a>
    </Grid>
  ))}
</Grid>

      </Container>

      {/* Additional animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${secondaryLight} 0%, transparent 70%)`,
          filter: 'blur(60px)',
          pointerEvents: 'none',
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          transition: 'transform 0.5s ease-out',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '15%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${secondaryLight} 0%, transparent 70%)`,
          filter: 'blur(50px)',
          pointerEvents: 'none',
          transform: `translate(${-mousePosition.x * 0.08}px, ${-mousePosition.y * 0.08}px)`,
          transition: 'transform 0.5s ease-out',
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default Clients;

