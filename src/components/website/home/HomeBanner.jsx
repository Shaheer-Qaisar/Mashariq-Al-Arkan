'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
import {
  primaryColor,
  secondaryColor,
  secondaryHover,
  offWhiteColor,
} from '@/components/utils/Colors';
import data from './HomeData.json'
const HomeBanner = () => {
  const { images, typingWords: words, heading, subHeading, cta } = data;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const wordIndexRef = useRef(0);
  const currentCharIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  /* Slider effect */
  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setNextIndex((prev) => (prev + 2) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  /* Typing effect */
  useEffect(() => {
    if (!words.length) return;

    let timeoutId;
    const type = () => {
      const currentWord = words[wordIndexRef.current];
      const index = currentCharIndexRef.current;
      const isDeleting = isDeletingRef.current;

      if (!isDeleting && index < currentWord.length) {
        setTypedText(currentWord.slice(0, index + 1));
        currentCharIndexRef.current++;
        timeoutId = setTimeout(type, 150);
      } else if (!isDeleting && index === currentWord.length) {
        timeoutId = setTimeout(() => {
          isDeletingRef.current = true;
          type();
        }, 2000);
      } else if (isDeleting && index > 0) {
        currentCharIndexRef.current--;
        setTypedText(currentWord.slice(0, currentCharIndexRef.current));
        timeoutId = setTimeout(type, 100);
      } else {
        isDeletingRef.current = false;
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
        currentCharIndexRef.current = 0;
        timeoutId = setTimeout(type, 500);
      }
    };
    type();

    return () => timeoutId && clearTimeout(timeoutId);
  }, [words]);

  /* Cursor blink */
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const getTransitionStyle = (index) => {
    const isCurrent = index === currentIndex;
    const isNext = index === nextIndex && isTransitioning;
    let opacity = 0;
    if (isCurrent && !isTransitioning) opacity = 1;
    if (isCurrent && isTransitioning) opacity = 0;
    if (isNext && isTransitioning) opacity = 1;

    return {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'opacity 0.5s ease-in-out',
      opacity,
      zIndex: isNext ? 1 : 0,
      pointerEvents: 'none',
    };
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh', minHeight: '500px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {images.map((img, index) => (
        <Box key={index} component="img" src={img} alt={`Banner ${index + 1}`} sx={getTransitionStyle(index)} />
      ))}
      <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.73)', zIndex: 1 }} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', px: { xs: 3, md: 4 }, mt: { xs: 10, md: 15 } }}>
        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '5rem' }, fontWeight: 700, color: offWhiteColor, lineHeight: 1.2 }}>
          <Box component="span" sx={{ color: primaryColor }}>
            {typedText}
            <Box component="span" sx={{ opacity: showCursor ? 1 : 0, ml: '2px' }}>|</Box>
          </Box>{' '}
          {heading.middleText}{' '}
          <Box component="span" sx={{ color: secondaryColor }}>{heading.highlightText}</Box>
          <br />
          <Box component="span" sx={{ color: primaryColor }}>{heading.lastLine}</Box>
        </Typography>
        <Typography variant="h5" sx={{ mt: 3, color: offWhiteColor, maxWidth: '800px', mx: 'auto', lineHeight: 1.6 }}>{subHeading}</Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mt: 4, justifyContent: 'center' }}>
          <Button component={Link} href={cta.primary.link} variant="contained" sx={{ backgroundColor: secondaryColor, color: offWhiteColor, fontWeight: 600, px: 3, py: 1.25, borderRadius: '8px', '&:hover': { backgroundColor: secondaryHover } }}>
            {cta.primary.label}
          </Button>
          <Button component={Link} href={cta.secondary.link} variant="outlined" sx={{ borderColor: offWhiteColor, color: offWhiteColor, fontWeight: 600, px: 3, py: 1.25, borderRadius: '8px', '&:hover': { borderColor: primaryColor, color: primaryColor } }}>
            {cta.secondary.label}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeBanner;
