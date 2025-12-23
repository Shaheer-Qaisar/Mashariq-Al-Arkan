'use client';

import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import {
  primaryColor,
  secondaryDark,
  offWhiteColor,
} from '@/components/utils/Colors';
import privacyPolicyData from './privacyPolicy.json';

const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#fafafa',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: secondaryDark,
              fontWeight: 700,
              mb: 2,
            }}
          >
            {privacyPolicyData.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              fontSize: '1rem',
            }}
          >
            Last Updated: {privacyPolicyData.lastUpdated}
          </Typography>
        </Box>

        {/* Content Sections */}
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: 2,
            p: { xs: 3, md: 6 },
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          {privacyPolicyData.sections.map((section, index) => (
            <Box key={index} sx={{ mb: index < privacyPolicyData.sections.length - 1 ? 5 : 0 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  color: primaryColor,
                  fontWeight: 600,
                  mb: 2,
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                }}
              >
                {section.heading}
              </Typography>
              
              {section.content && (
                <Typography
                  variant="body1"
                  sx={{
                    color: '#333',
                    lineHeight: 1.8,
                    mb: section.subsections || section.list ? 2 : 0,
                    fontSize: '1rem',
                  }}
                >
                  {section.content}
                </Typography>
              )}

              {section.subsections && (
                <Box sx={{ mt: 3 }}>
                  {section.subsections.map((subsection, subIndex) => (
                    <Box key={subIndex} sx={{ mb: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: secondaryDark,
                          fontWeight: 600,
                          mb: 1,
                          fontSize: '1.1rem',
                        }}
                      >
                        {subsection.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#555',
                          lineHeight: 1.8,
                          fontSize: '0.95rem',
                        }}
                      >
                        {subsection.content}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}

              {section.list && (
                <Box component="ul" sx={{ mt: 2, pl: 3 }}>
                  {section.list.map((item, itemIndex) => (
                    <Typography
                      key={itemIndex}
                      component="li"
                      variant="body1"
                      sx={{
                        color: '#555',
                        lineHeight: 1.8,
                        mb: 1,
                        fontSize: '0.95rem',
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              )}

              {section.contentAfter && (
                <Typography
                  variant="body1"
                  sx={{
                    color: '#333',
                    lineHeight: 1.8,
                    mt: 2,
                    fontSize: '1rem',
                  }}
                >
                  {section.contentAfter}
                </Typography>
              )}

              {section.contact && (
                <Box sx={{ mt: 3, p: 3, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#333',
                      lineHeight: 1.8,
                      fontSize: '1rem',
                    }}
                  >
                    <strong>Email:</strong> {section.contact.email}<br />
                    <strong>Phone:</strong> {section.contact.phone}<br />
                    <strong>Address:</strong> {section.contact.address}
                  </Typography>
                </Box>
              )}

              {index < privacyPolicyData.sections.length - 1 && (
                <Divider sx={{ mt: 4 }} />
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;

