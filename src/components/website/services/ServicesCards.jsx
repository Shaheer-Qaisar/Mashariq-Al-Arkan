"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Box, Typography, Container, Grid, Card, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import {
  primaryColor,
  primaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
} from "@/components/utils/Colors";

const ServicesCards = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const services = [
    {
      id: 1,
      title: "Cable Solutions",
      description:
        "Professional cable installation and management systems for seamless connectivity.",
      image: "/images/home-banner/cables-1.jpg",
      
    },
    {
      id: 2,
      title: "Parking Management Solutions",
      description:
        "Automated parking barrier systems for secure and efficient access control.",
      image: "/images/home-banner/parking-barrier.jpg",
     
    },
    {
      id: 3,
      title: "Security and Surveillance Solutions",
      description:
        "Comprehensive building maintenance services for all your needs.",
      image: "/images/home-banner/camera-1.jpg",
      
    },
    {
      id: 4,
      title: "Building Maintenance Services",
      description:
        "Advanced surveillance systems with high-definition monitoring capabilities.",
      image: "/images/home-banner/construction-site.jpg",
    },
    {
      id: 5,
      title: "Digital Locks",
      description:
        "Smart digital locking systems with keyless entry and remote access control.",
      image: "/images/home-banner/digital-lock.jpg",
    },
    {
      id: 6,
      title: "Automation and Access Control Systems",
      description:
        "Automated garage door systems with smart controls and safety features.",
      image: "/images/home-banner/garage-door-1.webp",
    },
    {
      id: 7,
      title: "Wireless Solutions",
      description:
        "Automated window blind systems with smart home integration capabilities.",
      image: "/images/wireless/wireless6.jpeg",
    },
    {
      id: 8,
      title: "Windows Blinds",
      description:
        "Automated window blind systems with smart home integration capabilities.",
      image: "/images/home-banner/window-blind.jpg",
    },
    {
      id: 9,
      title: "Garage Doors",
      description:
        "Automated garage door systems with smart controls and safety features.",
      image: "/images/home-banner/garage-door-1.webp",
    }
    
  ];

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
            rootMargin: "0px 0px -50px 0px",
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
    <>
      <Box
        sx={{
          backgroundColor: offWhiteColor,
          py: { xs: 6, md: 10 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          {/* Header Section */}
          <Box sx={{ textAlign: "center", mb: 6 }} data-aos="fade-up">
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                  lg: "3.5rem",
                },
                fontWeight: 700,
                color: offBlackText,
                mb: 2,
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              Our{" "}
              <Box component="span" sx={{ color: primaryColor }}>
                Services
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: offBlackTextLight,
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                maxWidth: "600px",
                mx: "auto",
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              Explore our comprehensive range of security and automation
              solutions
            </Typography>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={service.id}
                sx={{
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                <Card
                  component={Link}
                  href={`/services/${service.id}`}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  sx={{
                    position: "relative",
                    borderRadius: "24px",
                    overflow: "hidden",
                    backgroundColor: offWhiteColor,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    opacity: visibleCards.has(index) ? 1 : 0,
                    transform: visibleCards.has(index)
                      ? "translateY(0)"
                      : "translateY(30px)",
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 16px 40px ${primaryLight}`,
                      "& .service-image": {
                        transform: "scale(1.15)",
                      },
                      "& .service-title": {
                        color: primaryColor,
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        transform: "translateY(0)",
                      },
                      "& .service-overlay": {
                        opacity: 0.3,
                      },
                      "& .service-border": {
                        transform: "scaleX(1)",
                      },
                      "& .service-description": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                      "& .service-types": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  {/* Service Title and Description - Top */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      zIndex: 2,
                      p: 3,
                      background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 50%, transparent 100%)`,
                      pointerEvents: "none",
                    }}
                  >
                    <Typography
                      className="service-title"
                      variant="h5"
                      component="h3"
                      sx={{
                        color: offWhiteColor,
                        fontWeight: 700,
                        fontSize: { xs: "2rem", md: "3rem" },
                        textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                        fontFamily: "'Quicksand', sans-serif",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        mb: 0,
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Service Description - Below Title */}
                    <Typography
                      className="service-description"
                      variant="body2"
                      component="p"
                      sx={{
                        color: offWhiteColor,
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        lineHeight: 1.6,
                        textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                        fontFamily: "'Quicksand', sans-serif",
                        opacity: 0,
                        transform: "translateY(40px)",
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        mt: 1,
                      }}
                    >
                      {service.description}
                    </Typography>
                   
                    
                    
                  </Box>

                  {/* Image Container */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: "250px", sm: "280px", md: "320px" },
                      overflow: "hidden",
                      borderRadius: "24px 24px 0 0",
                    }}
                  >
                    {/* Overlay */}
                    <Box
                      className="service-overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${primaryColor}20 0%, ${primaryLight}20 100%)`,
                        opacity: 0,
                        transition: "opacity 0.4s ease",
                        zIndex: 1,
                      }}
                    />

                    {/* Image */}
                    <Box
                      className="service-image"
                      component="img"
                      src={service.image}
                      alt={service.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "24px 24px 0 0",
                        transition:
                          "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                  </Box>

                  {/* Decorative Bottom Border */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: `linear-gradient(90deg, ${primaryColor} 0%, ${primaryLight} 100%)`,
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 2,
                    }}
                    className="service-border"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Explore All Services Button */}
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              component={Link}
              href="/services"
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                background: `linear-gradient(to right, ${primaryColor} 0%, ${primaryLight} 100%)`,
                color: offWhiteColor,
                fontWeight: 600,
                fontSize: "1rem",
                px: 5,
                py: 1.5,
                borderRadius: "8px",
                textTransform: "none",
                boxShadow: `0 4px 15px ${primaryLight}`,
                fontFamily: "'Quicksand', sans-serif",
                "&:hover": {
                  background: `linear-gradient(to right, ${primaryColor} 0%, ${primaryColor} 100%)`,
                  boxShadow: `0 6px 20px ${primaryLight}`,
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Explore All Services
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ServicesCards;
