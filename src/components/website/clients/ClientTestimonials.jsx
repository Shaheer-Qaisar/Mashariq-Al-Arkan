"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FormatQuote, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { keyframes } from "@emotion/react";
import {
  primaryColor,
  primaryLight,
  primaryHover,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
} from "@/components/utils/Colors";

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

import data from './ClientData.json'

const ClientTestimonials = () => {
  const {sectionHeader,testimonials} =data.testimonialData
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isAbove1200 = useMediaQuery(theme.breakpoints.up("lg"));
  const isAbove900 = useMediaQuery(theme.breakpoints.up("md"));

  // Calculate slides per view based on screen size
  const getSlidesPerView = () => {
    if (isAbove1200) return 3;
    if (isAbove900) return 2;
    return 1;
  };

  const slidesPerView = getSlidesPerView();
  const totalSlides = testimonials.length;
  // Allow sliding one by one, but stop when we can't show a full set
  // This ensures we always show complete testimonials
  const maxIndex = Math.max(0, totalSlides - slidesPerView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0; // Loop back to start
        }
        return prevIndex + 1;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, isVisible, maxIndex]);

  // Handle window resize - maxIndex is recalculated automatically

  const goToSlide = (index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setIsPaused(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) / 20; // Scroll speed multiplier

    // If dragged significantly, change slide
    if (Math.abs(walk) > 50) {
      if (walk > 0 && currentIndex > 0) {
        goToSlide(currentIndex - 1);
        setIsDragging(false);
      } else if (walk < 0 && currentIndex < maxIndex) {
        goToSlide(currentIndex + 1);
        setIsDragging(false);
      }
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // Resume auto-slide after a delay
    setTimeout(() => setIsPaused(false), 3000);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) / 10;

    if (Math.abs(walk) > 30) {
      if (walk > 0 && currentIndex > 0) {
        goToSlide(currentIndex - 1);
        setIsDragging(false);
      } else if (walk < 0 && currentIndex < maxIndex) {
        goToSlide(currentIndex + 1);
        setIsDragging(false);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Calculate dots count - one dot per possible slide position
  const dotsCount = Math.max(1, totalSlides - slidesPerView + 1);

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        backgroundColor: offWhiteColor,
        overflow: "hidden",
        background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${primaryLight}15 100%)`,
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${primaryLight} 0%, transparent 70%)`,
          filter: "blur(80px)",
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      <Box>
      <Container maxWidth="xl">
        <Box textAlign="center">
          <Typography
            variant="h2"
            sx={sectionHeader.typography.h2}
          >
            {sectionHeader.title.split(sectionHeader.highlight)[0]}
            <Box component="span" sx={{ color: primaryColor }}>
              {sectionHeader.highlight}
            </Box>
            {sectionHeader.title.split(sectionHeader.highlight)[1]}
          </Typography>
          <Typography variant="body1" sx={sectionHeader.typography.body1}>
            {sectionHeader.description}
          </Typography>
        </Box>

        {/* Testimonials Slider */}
        <Box
          sx={{
            justifyContent: "center",
            position: "relative",
            mb: 6,
            px: { xs: 4, md: 6 },
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              left: { xs: 2, sm: -12, md: -24 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 3,

              width: { xs: 36, sm: 44, md: 50 },
              height: { xs: 36, sm: 44, md: 50 },

              backgroundColor: offWhiteColor,
              color: primaryColor,
              border: `2px solid ${primaryLight}`,
              boxShadow: `0 4px 20px ${primaryLight}60`,

              "&:hover": {
                backgroundColor: primaryColor,
                color: offWhiteColor,
              },
            }}
          >
            <ChevronLeft />
          </IconButton>

          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              right: { xs: 2, sm: -12, md: -24 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 3,
              width: { xs: 36, sm: 44, md: 50 },
              height: { xs: 36, sm: 44, md: 50 },

              backgroundColor: offWhiteColor,
              color: primaryColor,
              border: `2px solid ${primaryLight}`,
              boxShadow: `0 4px 20px ${primaryLight}60`,

              "&:hover": {
                backgroundColor: primaryColor,
                color: offWhiteColor,
              },
            }}
          >
            <ChevronRight />
          </IconButton>

          {/* Slider Container */}
          <Box
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            sx={{
              overflow: "hidden",
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                transform: `translateX(-${
                  currentIndex * (100 / slidesPerView)
                }%)`,
                transition: isDragging
                  ? "none"
                  : "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {testimonials.map((testimonial, index) => {
                // Calculate the width based on slides per view
                const slideWidth = 100 / slidesPerView;
                return (
                  <Box
                    key={testimonial.id}
                    alignSelf={"center"}
                    sx={{
                      flex: `0 0 ${100 / slidesPerView}%`,
                      maxWidth: `${100 / slidesPerView}%`,
                      px: { xs: 1.5, md: 2 },
                      flexShrink: 0,
                      opacity: isVisible ? 1 : 0,
                      animation: isVisible
                        ? `${fadeInUp} 0.8s ease-out ${index * 100}ms forwards`
                        : "none",
                    }}
                  >
                    <Card
                    
                      sx={{
                         height: { xs:450, sm: 400, md: 420 },
                         my: 2,
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 4,
                        maxWidth: "400px",
                        mx: "auto",
                        borderRadius: "24px",
                        background: `linear-gradient(135deg, ${offWhiteColor} 0%, ${offWhiteColor} 100%)`,
                        border: `2px solid ${primaryLight}`,
                        boxShadow: `0 8px 32px ${primaryLight}40`,
                        position: "relative",
                        overflow: "visible",
                        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: -2,
                          left: -2,
                          right: -2,
                          bottom: -2,
                          background: `linear-gradient(135deg, ${primaryColor}, ${primaryLight})`,
                          borderRadius: "24px",
                          zIndex: -1,
                          opacity: 0,
                          transition: "opacity 0.5s ease",
                        },
                        "&:hover": {
                          transform: "translateY(-12px) scale(1.02)",
                          boxShadow: `0 20px 60px ${primaryLight}80`,
                          borderColor: primaryColor,
                          "&::before": {
                            opacity: 0.3,
                          },
                          "& .quote-icon": {
                            transform: "scale(1.1) rotate(5deg)",
                            color: primaryColor,
                          },
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          p: { xs: 3, md: 4 },
                          display: "flex",
                          flexDirection: "column",
                          flexGrow: 1,
                        }}
                      >
                        {/* Quote Icon */}
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1,
                            pt: 1,
                          }}
                        >
                          <Box
                            className="quote-icon"
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: "16px",
                              background: `linear-gradient(135deg, ${primaryLight} 0%, ${primaryColor}20 100%)`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.5s ease",
                            }}
                          >
                            <FormatQuote
                              sx={{
                                fontSize: "2.5rem",
                                color: primaryColor,
                              }}
                            />
                          </Box>
                        </Box>

                        {/* Testimonial Text */}
                        <Typography
                          variant="body1"
                          sx={{
                            color: offBlackTextLight,
                            lineHeight: 1.8,
                            fontSize: { xs: "0.85rem", md: "1rem" },
                            mb: 3,
                            fontStyle: "italic",
                          }}
                        >
                          {testimonial.testimonial}
                        </Typography>

                        {/* Rating */}
                        <Box sx={{ mb: {xs:1,sm:3} }}>
                          <Rating
                            value={testimonial.rating}
                            readOnly
                            sx={{
                              "& .MuiRating-iconFilled": {
                                color: primaryColor,
                              },
                            }}
                          />
                        </Box>

                        {/* Client Info */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                          }}
                        >
                          <Avatar
                            sx={{
                              width: 56,
                              height: 56,
                              backgroundColor: primaryColor,
                              color: offWhiteColor,
                              fontWeight: 700,
                              fontSize: "1.25rem",
                            }}
                          >
                            {testimonial.avatar}
                          </Avatar>
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                color: offBlackText,
                                fontSize: {xs:"0.85rem",sm:"1.1rem"},
                                mb: 0.5,
                              }}
                            >
                              {testimonial.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: offBlackTextLight,
                                fontSize: {xs:"0.75rem",sm:"0.9rem"},
                              }}
                            >
                              {testimonial.position}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: primaryColor,
                                fontSize: "0.85rem",
                                fontWeight: 500,
                              }}
                            >
                              {testimonial.company}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Dots Navigation */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1.5,
              mt: 4,
            }}
          >
            {Array.from({ length: dotsCount }).map((_, index) => {
              const isActive = currentIndex === index;

              return (
                <Box
                  key={index}
                  onClick={() => goToSlide(index)}
                  sx={{
                    width: isActive ? 32 : 12,
                    height: 12,
                    borderRadius: isActive ? "6px" : "50%",
                    backgroundColor: isActive ? primaryColor : primaryLight,
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    "&:hover": {
                      backgroundColor: primaryColor,
                      transform: "scale(1.2)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: -4,
                      borderRadius: "50%",
                      border: `2px solid ${
                        isActive ? primaryColor : "transparent"
                      }`,
                      opacity: isActive ? 0.3 : 0,
                      transition: "all 0.3s ease",
                    },
                  }}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
    </Box>

  );
};

export default ClientTestimonials;
