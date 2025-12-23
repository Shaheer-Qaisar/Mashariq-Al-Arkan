'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  LinkedIn,
  Twitter,
  Instagram,
  LocationOn,
  Phone,
  Email,
  AccessTime,
} from '@mui/icons-material';
import {
  secondaryColor,
  secondaryDark,
  primaryColor,
  offWhiteColor,
  offWhiteText,
} from '@/components/utils/Colors';

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/portfolio' },
    { label: 'Clients', path: '/clients' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  const services = [
    'Building Maintenance',
    'Automation & Access Control',
    'Parking Solutions',
    'Security & Surveillance',
    'Network & Cabling',
    'Wireless Solutions',
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com' },
    { icon: LinkedIn, url: 'https://linkedin.com' },
    { icon: Twitter, url: 'https://twitter.com' },
    { icon: Instagram, url: 'https://instagram.com' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: secondaryDark,
        color: offWhiteColor,
        pt: 6,
        pb: 2,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={[8,8,6,8]} justifyContent={"center"} >
          {/* Company Information & Social Media */}
          <Grid size={{ xs: 12, md: 5,lg:3 }} data-aos="fade-up" >
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Image
                src="/images/logo.png"
                alt="Mashariq Al-Arkan Logo"
                width={200}
                height={80}
                // style={{ objectFit: 'contain' }}
              />
            </Box>

            {/* Company Description */}
            <Typography
              variant="body2"
              sx={{
                color: offWhiteColor,
                mb: 3,
                lineHeight: 1.6,
                fontSize: '0.85rem',
              }}
            >
              End-to-end entrance systems and security solutions—design, supply,
              installation, and lifecycle maintenance.
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <IconButton
                    key={index}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: offWhiteColor,
                      color: secondaryDark,
                      '&:hover': {
                        backgroundColor: primaryColor,
                        color: secondaryDark,
                      },
                    }}
                  >
                    <IconComponent fontSize="small" />
                  </IconButton>
                );
              })}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 5, sm: 3, md: 2.25 }}  data-aos="fade-up">
            <Typography
              variant="h6"
              sx={{
                color: primaryColor,
                fontWeight: 600,
                mb: 2,
                fontSize: '1rem',
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: offWhiteColor,
                      fontSize: '0.85rem',
                      '&:hover': {
                        color: primaryColor,
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid size={{ xs: 6,sm:4,md: 2.25 }}  data-aos="fade-up">
            <Typography
              variant="h6"
              sx={{
                color: primaryColor,
                fontWeight: 600,
                mb: 2,
                fontSize: '1rem',
              }}
            >
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {services.map((service, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    color: offWhiteColor,
                    fontSize: '0.85rem',
                  }}
                >
                  {service}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact Us */}
          <Grid size={{ xs: 12, sm: 4, md: 2.25 }}  data-aos="fade-up">
            <Typography
              variant="h6"
              sx={{
                color: primaryColor,
                fontWeight: 600,
                mb: 2,
                fontSize: '1rem',
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Location */}
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <LocationOn
                  sx={{ color: offWhiteColor, fontSize: '1.2rem', mt: 0.5 }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: offWhiteColor,
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                  }}
                >
                  King Fahd Road, Riyadh Kingdom of Saudi Arabia
                </Typography>
              </Box>

              {/* Phone */}
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Phone sx={{ color: offWhiteColor, fontSize: '1.2rem' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: offWhiteColor,
                    fontSize: '0.85rem',
                  }}
                >
                  +966 12 345 6789
                </Typography>
              </Box>

              {/* Email */}
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Email sx={{ color: offWhiteColor, fontSize: '1.2rem' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: offWhiteColor,
                    fontSize: '0.85rem',
                  }}
                >
                  info@mashariq-alarkan.com
                </Typography>
              </Box>

              {/* Hours */}
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <AccessTime sx={{ color: offWhiteColor, fontSize: '1.2rem' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: offWhiteColor,
                    fontSize: '0.85rem',
                  }}
                >
                  Sun - Thu: 8:00 AM - 6:00 PM
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Divider
          sx={{
            my: 4,
            borderColor: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            pb: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: offWhiteColor,
              fontSize: '0.8rem',
            }}
          >
            © 2025 Mashariq Al-Arkan. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="/privacy" style={{ textDecoration: 'none' }}>
              <Typography
                variant="body2"
                sx={{
                  color: offWhiteColor,
                  fontSize: '0.8rem',
                  '&:hover': {
                    color: primaryColor,
                  },
                }}
              >
                Privacy Policy
              </Typography>
            </Link>
            <Link href="/terms" style={{ textDecoration: 'none' }}>
              <Typography
                variant="body2"
                sx={{
                  color: offWhiteColor,
                  fontSize: '0.8rem',
                  '&:hover': {
                    color: primaryColor,
                  },
                }}
              >
                Terms of Service
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

