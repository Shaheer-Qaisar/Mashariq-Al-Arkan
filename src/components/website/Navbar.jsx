'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  primaryColor,
  secondaryColor,
  secondaryDark,
  offWhiteColor,
  offWhiteText,
} from '@/components/utils/Colors';

const Navbar = () => {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));
  const [activeLink, setActiveLink] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', path: '/home' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'CLIENTS', path: '/clients' },
    { label: 'CAREERS', path: '/careers' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/home') {
      return pathname === '/' || pathname === '/home';
    }
    return pathname === path || pathname?.startsWith(path);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        width: {
          xs: scrolled ? '90%' : '98%',
          lg: scrolled ? '80%' : '90%',
        },
        backgroundColor: scrolled
          ? 'rgba(0, 51, 102, 0.65)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(6px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(6px)' : 'none',
        borderRadius: 100,
        // borderTop: scrolled ? `2px solid ${secondaryColor}` : 'none',
        boxShadow: scrolled
          ? '0 4px 20px rgba(0, 0, 0, 0.1)'
          : 'none',
        transition: 'all 0.3s ease-in-out',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 } }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center', py:1
            // minHeight: '80px !important',
          }}
        >
          {/* Logo */}
          <Link href="/home" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            
                <Image
                  src="/images/logo.png"
                  alt="Mashariq Al-Arkan Logo"
                  width={isMobile ? 120 : 120}
                  height={isMobile ? 40 : 50}
                  style={{ objectFit: 'contain' }}
                />
            </Box>
          </Link>

          {/* Navigation Links - Desktop */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 3,
              alignItems: 'center',
            }}
          >
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: active
                        ? primaryColor 
                        : offWhiteColor,
                      fontWeight: active ? 600 : 400,
                      fontSize: '0.9rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': {
                        color: primaryColor,
                      },
                      // Active link underline
                      '&::after': active
                        ? {
                            content: '""',
                            position: 'absolute',
                            bottom: -8,
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: primaryColor,
                          }
                        : {},
                      // Hover underline animation
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: '0%',
                        height: '2px',
                        backgroundColor: primaryColor,
                        transition: 'width 0.3s ease-in-out',
                      },
                      '&:hover::before': {
                        width: '100%',
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              );
            })}
          </Box>

          {/* Desktop Store Button */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              sx={{
                backgroundColor: primaryColor,
                color: scrolled ? secondaryDark : offWhiteColor,
                fontWeight: 600,
                fontSize: '0.9rem',
                px: 2,
                py: 0.5,
                borderRadius: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: primaryColor,
                  opacity: 0.9,
                },
              }}
            >
              Store
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: offWhiteColor,
              '&:hover': {
                color: primaryColor,
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            width: { xs: '85%', sm: 400 },
            backgroundColor: secondaryDark,
            color: offWhiteColor,
            backgroundImage: 'linear-gradient(135deg, rgba(0, 51, 102, 0.95) 0%, rgba(0, 30, 60, 0.98) 100%)',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            overflowY: 'auto',
          },
        }}
      >
        <Box 
          sx={{ 
            p: 2,
            height: '100%',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* Drawer Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link href="/home" onClick={handleDrawerClose} style={{ textDecoration: 'none' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image
                  src="/images/logo.png"
                  alt="Mashariq Al-Arkan Logo"
                  width={100}
                  height={70}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </Link>
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                color: offWhiteColor,
                '&:hover': {
                  color: primaryColor,
                  backgroundColor: 'rgba(255, 193, 7, 0.1)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 1, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

          {/* Navigation Links */}
          <List sx={{ px: 0 }}>
            {navLinks.map((link, index) => {
              const active = isActive(link.path);
              return (
                <React.Fragment key={link.path}>
                  <ListItem
                    component={Link}
                    href={link.path}
                    onClick={handleDrawerClose}
                    sx={{
                      py: 2,
                      px: 3,
                      borderRadius: '12px',
                      mb: 1,
                      backgroundColor: active
                        ? 'rgba(255, 193, 7, 0.15)'
                        : 'transparent',
                      borderLeft: active ? `4px solid ${primaryColor}` : '4px solid transparent',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 193, 7, 0.1)',
                        borderLeft: `4px solid ${primaryColor}`,
                        transform: 'translateX(8px)',
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: active ? primaryColor : offWhiteColor,
                        fontWeight: active ? 600 : 400,
                        fontSize: '1rem',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        width: '100%',
                      }}
                    >
                      {link.label}
                    </Typography>
                  </ListItem>
                  {index < navLinks.length - 1 && (
                    <Divider sx={{ my: 1, borderColor: 'rgba(255, 255, 255, 0.05)' }} />
                  )}
                </React.Fragment>
              );
            })}
          </List>

          {/* Store Button in Drawer */}
          <Box sx={{ mt: 0, px: 3 }}>
            <Button
              component={Link}
              href="/contact"
              onClick={handleDrawerClose}
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: primaryColor,
                color: secondaryDark,
                fontWeight: 600,
                fontSize: '1rem',
                py: 1.5,
                borderRadius: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: `0 4px 15px rgba(255, 193, 7, 0.3)`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: primaryColor,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 6px 20px rgba(255, 193, 7, 0.4)`,
                },
              }}
            >
              Store
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;

