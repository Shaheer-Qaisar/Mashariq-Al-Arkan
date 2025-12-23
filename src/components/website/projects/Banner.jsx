'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import {
  primaryColor,
  primaryHover,
  secondaryColor,
  secondaryHover,
  offWhiteColor,
  offWhiteText,
} from '@/components/utils/Colors';

const Banner = () => {
  // Project images
  const images = [
    '/images/home-banner/garage-door-1.webp',
    '/images/home-banner/digital-lock.jpg',
    '/images/home-banner/parking-barrier.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Typing animation for words related to projects
  const words = ['Innovative', 'Successful', 'Excellence', 'Quality', 'Impact'];
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const wordIndexRef = React.useRef(0);
  const currentIndexRef = React.useRef(0);
  const isDeletingRef = React.useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setNextIndex((prevIndex) => (prevIndex + 2) % images.length);
        setIsTransitioning(false);
      }, 5000); // Transition duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Typing animation effect
  useEffect(() => {
    let timeoutId;

    const type = () => {
      const currentWord = words[wordIndexRef.current];
      const currentIndex = currentIndexRef.current;
      const isDeleting = isDeletingRef.current;
      
      if (!isDeleting && currentIndex < currentWord.length) {
        // Typing forward
        setTypedText(currentWord.slice(0, currentIndex + 1));
        currentIndexRef.current++;
        timeoutId = setTimeout(type, 150); // Normal typing speed
      } else if (!isDeleting && currentIndex === currentWord.length) {
        // Pause at the end before deleting
        timeoutId = setTimeout(() => {
          isDeletingRef.current = true;
          type();
        }, 2000); // Wait 2 seconds before deleting
      } else if (isDeleting && currentIndex > 0) {
        // Deleting backward (backspace)
        currentIndexRef.current--;
        setTypedText(currentWord.slice(0, currentIndexRef.current));
        timeoutId = setTimeout(type, 100); // Faster deletion speed
      } else if (isDeleting && currentIndex === 0) {
        // Move to next word
        isDeletingRef.current = false;
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
        currentIndexRef.current = 0; // Reset index for new word
        timeoutId = setTimeout(type, 500); // Brief pause before typing next word
      }
    };

    type();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530); // Blink speed

    return () => clearInterval(cursorInterval);
  }, []);

  const getTransitionStyle = (index) => {
    const isCurrent = index === currentIndex;
    const isNext = index === nextIndex && isTransitioning;
    
    // During transition, show both current and next images
    // After transition, only show the current image
    let opacity = 0;
    if (isCurrent && !isTransitioning) {
      opacity = 1; // Current image fully visible when not transitioning
    } else if (isCurrent && isTransitioning) {
      opacity = 0; // Current image fades out during transition
    } else if (isNext && isTransitioning) {
      opacity = 1; // Next image fades in during transition
    }
    
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: isNext && isTransitioning ? 1 : 0, // Next image on top during transition
      transition: 'opacity 0.5s ease-in-out',
      opacity: opacity,
      pointerEvents: 'none',
    };
  };

  return (
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
      {/* Background Images with Transitions */}
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          alt={`Project banner image ${index + 1}`}
          sx={getTransitionStyle(index)}
        />
      ))}

      {/* Dim Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.73)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: { xs: 3, md: 4 },
          mt: { xs: 10, md: 15 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          {/* Heading */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '5rem' },
              fontWeight: 700,
              color: offWhiteColor,
              lineHeight: 1.2,
              mb: 1,
            }}
          >
            <Box component="span" sx={{ color: primaryColor }}>
              {typedText}
              <Box
                component="span"
                sx={{
                  opacity: showCursor ? 1 : 0,
                  transition: 'opacity 0.3s',
                }}
              >
                |
              </Box>
            </Box>{' '}
            Projects{' '}
            <Box component="span" sx={{ color: secondaryColor }}>
              Delivered
            </Box>{' '}
            <br />
            Across{' '}
            <Box component="span" sx={{ color: primaryColor }}>
              Saudi Arabia
            </Box>
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
              fontWeight: 400,
              color: offWhiteColor,
              maxWidth: '800px',
              lineHeight: 1.6,
              mb: 2,
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Explore our portfolio of successful projects spanning industrial, residential, and educational sectors. 
            Each project showcases our commitment to excellence and innovation.
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              mt: 2,
              width: { xs: '100%', sm: 'auto' },
              justifyContent: 'center',
            }}
          >
            {/* Primary CTA */}
            <Button
              component={Link}
              href="/contact"
              size="small"
              variant="contained"
              sx={{
                backgroundColor: secondaryColor,
                color: offWhiteColor,
                fontWeight: 600,
                fontSize: { xs: '0.85rem', md: '0.9rem' },
                px: { xs: 2.5, md: 3 },
                py: { xs: 1, md: 1.25 },
                borderRadius: '8px',
                textTransform: 'none',
                minWidth: { xs: '100%', sm: '150px' },
                boxShadow: `0 4px 15px rgba(0, 90, 171, 0.4)`,
                '&:hover': {
                  backgroundColor: secondaryHover,
                  boxShadow: `0 6px 20px rgba(0, 90, 171, 0.6)`,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Start Your Project
            </Button>

            {/* Secondary CTA */}
            <Button
              component={Link}
              href="/services"
              size="small"
              variant="outlined"
              sx={{
                borderColor: offWhiteColor,
                color: offWhiteColor,
                fontWeight: 600,
                fontSize: { xs: '0.85rem', md: '0.9rem' },
                px: { xs: 2.5, md: 3 },
                py: { xs: 1, md: 1.25 },
                borderRadius: '8px',
                textTransform: 'none',
                minWidth: { xs: '100%', sm: '150px' },
                borderWidth: '2px',
                '&:hover': {
                  borderColor: primaryColor,
                  backgroundColor: 'rgba(210, 172, 42, 0.1)',
                  color: primaryColor,
                  borderWidth: '2px',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Our Services
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

