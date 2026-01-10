"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import {
  primaryColor,
  secondaryColor,
  offWhiteColor,
} from "@/components/utils/Colors";
import aboutData from "./AboutPageData.json";

const colorMap = {
  primaryColor,
  secondaryColor,
  offWhiteColor,
};

const Banner = () => {
  const { backgroundImage, overlayColor, heading, subheading } =
    aboutData.banner;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background */}
      <Box
        component="img"
        src={backgroundImage}
        alt="About Banner"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: overlayColor,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          px: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* Heading */}
          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4rem",
                lg: "5rem",
              },
              fontWeight: 700,
              lineHeight: 1.2,
              color: offWhiteColor,
            }}
          >
            {heading.map((item, index) => (
              <Box
                key={index}
                component="span"
                sx={{ color: colorMap[item.color] }}
              >
                {item.text}{" "}
              </Box>
            ))}
          </Typography>

          {/* Subheading */}
          <Typography
            component="p"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: "800px",
              color: offWhiteColor,
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            {subheading.text}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
