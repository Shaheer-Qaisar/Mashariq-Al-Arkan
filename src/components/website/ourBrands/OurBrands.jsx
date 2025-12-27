

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import Image from 'next/image';
import {
  primaryColor,
  primaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
} from '@/components/utils/Colors';

const brands = [
  {
    src: '/images/our-brands/came.png',
    alt: 'CAME',
  },
  {
    src: '/images/our-brands/bft.png',
    alt: 'BFT',
  },
  // Duplicate to simulate more logos for now
  {
    src: '/images/our-brands/somfy.png',
    alt: 'Somfy',
  },
  {
    src: '/images/our-brands/liftMaster.png',
    alt: 'Lift Master',
  },
  {
    src: '/images/our-brands/herklith.png',
    alt: 'Herklith',
  },
  {
    src: '/images/our-brands/somar.png',
    alt: 'Block Axess 3',
  },
  {
    src: '/images/our-brands/jielong.jpg',
    alt: 'Jielong',
  },
  {
    src: '/images/our-brands/acm.png',
    alt: 'ACM',
  },
   {
    src: '/images/our-brands/rib.png',
    alt: 'RIB',
  },
   {
    src: '/images/our-brands/zkteco.png',
    alt: 'ZKTECO',
  },
   {
    src: '/images/our-brands/dahua.png',
    alt: 'Dahua',
  },
   {
    src: '/images/our-brands/hikvision.svg',
    alt: 'Hikvision',
  },
   {
    src: '/images/our-brands/schneider.png',
    alt: 'Schneider.png',
  },
   {
    src: '/images/our-brands/siemens.png',
    alt: 'SIEMENS',
  },
   {
    src: '/images/our-brands/honeywall.png',
    alt: 'Honeywall',
  },
  
];

// Keyframes for continuous scrolling
const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const scrollRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

// Keyframes for star twinkling animation
const twinkle = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Keyframes for cursor star fade out
const cursorStarFade = keyframes`
  0% {
    opacity: 1;
    transform: scale(0) translate(-50%, -50%);
  }
  20% {
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: scale(0.5) translate(-50%, -50%);
  }
`;

// Generate random stars
const generateStars = (count = 30) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 4 + 2, // 2-6px
    delay: Math.random() * 3, // 0-3s delay
    duration: Math.random() * 2 + 2, // 2-4s duration
  }));
};

const OurBrands = () => {
  const stars = generateStars(40);
  const [cursorStars, setCursorStars] = useState([]);
  const sectionRef = useRef(null);
  const starIdRef = useRef(0);

  // Handle mouse move to create cursor stars
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      // Create a new star at cursor position
      const newStar = {
        id: starIdRef.current++,
        left: x,
        top: y,
        size: Math.random() * 3 + 2, // 2-5px
      };

      setCursorStars((prev) => {
        // Keep only last 15 cursor stars for performance
        const updated = [...prev, newStar].slice(-15);
        return updated;
      });

      // Remove star after animation completes (1.5s)
      setTimeout(() => {
        setCursorStars((prev) => prev.filter((star) => star.id !== newStar.id));
      }, 1500);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => {
        section.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 6, md: 8, lg: 10 },
        backgroundColor: offWhiteColor,
        overflow: 'hidden',
      }}
    >
      {/* Animated Stars Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {stars.map((star) => (
          <Box
            key={star.id}
            sx={{
              position: 'absolute',
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: '50%',
              backgroundColor: primaryColor,
              boxShadow: `0 0 ${star.size * 2}px ${primaryLight}, 0 0 ${star.size * 4}px ${primaryLight}40`,
              animation: `${twinkle} ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </Box>

      {/* Cursor Stars */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {cursorStars.map((star) => (
          <Box
            key={star.id}
            sx={{
              position: 'absolute',
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: '50%',
              backgroundColor: primaryColor,
              boxShadow: `0 0 ${star.size * 2}px ${primaryLight}, 0 0 ${star.size * 4}px ${primaryLight}40`,
              animation: `${cursorStarFade} 1.5s ease-out forwards`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, mb:4 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              color: offBlackText,
              mb: 1,
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            Our{' '}
            <Box component="span" sx={{ color: primaryColor }}>
              Brands
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: offBlackTextLight,
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            Trusted partners and brands we work with.
          </Typography>
        </Box>

        <Box mx={[1,2,3,10]}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0.3,
          }}
        >
          {/* Top slider – left to right */}
          <BrandSlider direction="left" />

          {/* Bottom slider – right to left */}
          <BrandSlider direction="right" />
        </Box>
      </Container>
    </Box>
  );
};

const BrandSlider = ({ direction = 'left' }) => {
  const isLeft = direction === 'left';

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        cursor: 'grab',
        userSelect: 'none',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: `linear-gradient(to right, ${offWhiteColor}, transparent)`,
          zIndex: 2,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: `linear-gradient(to left, ${offWhiteColor}, transparent)`,
          zIndex: 2,
          pointerEvents: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          // We render the content twice to achieve a seamless infinite loop
          width: '200%',
          animation: `${
            isLeft ? scrollLeft : scrollRight
          } 10s linear infinite`,
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
      >
        {/* First sequence of brands */}
        {brands.map((brand, index) => (
          <BrandItem key={`first-${index}`} brand={brand} />
        ))}

        {/* Second sequence of brands (duplicate for seamless loop) */}
        {brands.map((brand, index) => (
          <BrandItem key={`second-${index}`} brand={brand} />
        ))}
      </Box>
    </Box>
  );
};

const BrandItem = ({ brand }) => {
  return (
    <Box   
    sx={{
        flex: {
          xs: '0 0 30%', // 2 items visible on mobile (100 / 2)
          sm: '0 0 20%', // 3 items visible on small tablets (100 / 3)
          md: '0 0 12%', // 4 items visible on tablets (100 / 4)
          lg: '0 0 12%', // 6 items visible on desktop (100 / 6)
          xl: '0 0 10%', // 8 items visible on large desktop (100 / 8)
        },
        maxWidth: {
          xs: '30%',
          sm: '20%',
          md: '12%',
          lg: '12%',
          xl: '10%',
        },
        px: { xs: 2, sm: 2.5, md: 3, lg: 4 },
        boxSizing: 'border-box',
    }}
    >
      <Box 
        sx={{
          width: '100%', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 2, 
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)', 
          },
          '& img': {
            transition: 'transform 0.3s ease',
          },
          '&:hover img': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Image
          src={brand.src}
          alt={brand.alt}
          width={150}
          height={100}
          style={{
            borderRadius:"10px",
            objectFit: 'contain',
          }}
        />
      </Box>
    </Box>
  );
};

export default OurBrands;
