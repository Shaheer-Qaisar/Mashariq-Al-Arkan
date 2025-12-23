"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  Stack,
} from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {
  primaryColor,
  primaryLight,
  secondaryColor,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
  primaryDark,
} from "@/components/utils/Colors";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SquareIcon from "@mui/icons-material/ViewInArOutlined";
import MarginOutlinedIcon from "@mui/icons-material/MarginOutlined";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import WifiIcon from "@mui/icons-material/Wifi";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { bool } from "yup";
import { blue, blueGrey } from "@mui/material/colors";
/* =========================
   SERVICES DATA
========================= */
const services = [
  {
    id: 1,
    title: "Cable Solutions",
    description:
      "Professional cable installation and management systems for seamless connectivity. We design and implement structured cabling tailored to your building and network requirements.",
    image: "/images/home-banner/cables-1.jpg",

    features: [
      "Structured cabling for offices & buildings",
      "High-quality fiber & copper installations",
      "Neat cable management & labeling",
      "Scalable future-ready infrastructure",
    ],

    specs: [
      { label: "Cable Types", value: "Cat6, Cat6A, Fiber Optic" },
      { label: "Compliance", value: "TIA/EIA Standards" },
      { label: "Ideal For", value: "Offices, Data Centers, Homes" },
    ],

    integrations: [
      "CCTV Systems",
      "Network Switches",
      "Access Control",
      "Smart Buildings",
    ],

    ctaText: "Request Cable Installation",
  },

  {
    id: 2,
    title: "Parking Barriers",
    description:
      "Automated parking barrier systems for secure and efficient access control, designed for commercial and residential parking facilities.",
    image: "/images/home-banner/parking-barrier.jpg",

    features: [
      "Automatic vehicle access control",
      "RFID & remote operation",
      "Durable outdoor design",
      "Low maintenance systems",
    ],

    specs: [
      {
        label: "Operation",
        value: "Automatic / Remote",
        icons: SettingsOutlinedIcon,
      },
      { label: "Material", value: "Heavy-duty Steel", icons: SquareIcon },
      {
        label: "Use Case",
        value: "Commercial & Residential",
        icons: MarginOutlinedIcon,
      },
    ],

    integrations: [
      "Parking Management",
      "Access Cards",
      "ANPR Cameras",
      "Remote Monitoring",
      "Mobile Access",
      "Building Systems",
    ],

    useCases: [
      "Corporate Offices",
      "Shopping Malls",
      "Hospitals",
      "Residential Complexes",
      "Hotels & Resorts",
      "Industrial Facilities",
    ],

    galleryImages: [
      "/images/parking2.jpeg",
      "/images/parking3.jpg",
      "/images/parkingsystem1.jpeg",
      "/images/parkingsystem2.jpeg",
    ],

    stats: [
      { value: "500+", label: "Installations" },
      { value: "99.9%", label: "Uptime" },
      { value: "24/7", label: "Support" },
    ],

    ctaText: "Get Parking Barrier Quote",
    ctaSecondaryText: "Call Us Now",
  },
];
const integrationItems = [
  { label: "Parking Management", icon: <LocalParkingIcon /> },
  { label: "Access Cards", icon: <CreditCardIcon /> },
  { label: "ANPR Cameras", icon: <CameraAltIcon /> },
  { label: "Remote Monitoring", icon: <WifiIcon /> },
  { label: "Mobile Access", icon: <PhoneIphoneIcon /> },
  { label: "Building Systems", icon: <ApartmentIcon /> },
];

const useCases = [
  "Corporate Offices",
  "Shopping Malls",
  "Hospitals",
  "Residential Complexes",
  "Hotels & Resorts",
  "Industrial Facilities",
];
const galleryCaptions = [
  "Commercial Installation\nMulti-lane parking management",
  "Commercial Installation\nMulti-lane parking management",
  "Commercial Installation\nMulti-lane parking management",
  "Commercial Installation\nMulti-lane parking management",
];
const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  swipe: true,
  draggable: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 900,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 },
    },
  ],
};

/* =========================
   COMPONENT
========================= */
const ServicesDetail = () => {
  const params = useParams();
  const id = params?.id;
  const numericId = id ? Number.parseInt(id || "", 10) : NaN;

  const service = services.find((s) => s.id === numericId);

  if (!service || isNaN(numericId)) {
    return (
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: offWhiteColor,
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h4" sx={{ color: offBlackText, mb: 2 }}>
          Service not found
        </Typography>
        <Button
          component={Link}
          href="/services"
          variant="contained"
          sx={{
            backgroundColor: primaryColor,
            color: offWhiteColor,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Back to Services
        </Button>
      </Box>
    );
  }

  const isParkingBarrier = service.id === 2;

  return (
    <Box sx={{ backgroundColor: offWhiteColor, minHeight: "100vh" }}>
      {/* =====================
          BANNER (UNCHANGED)
      ====================== */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "70vh",
          minHeight: "420px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={service.image}
          alt={service.title}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        />

        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              fontWeight: 700,
              color: offWhiteColor,
              mb: 2,
            }}
          >
            {service.title}
          </Typography>

          <Typography
            sx={{
              color: offWhiteColor,
              maxWidth: 720,
              mx: "auto",
              lineHeight: 1.7,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            {service.description}
          </Typography>
        </Container>
      </Box>

      {/* =====================
          PARKING BARRIERS CONTENT
      ====================== */}
      {isParkingBarrier && (
        <>
          {/* Stats Section */}
          <Box my={3}>
            <Container maxWidth="lg">
              <Grid
                container
                spacing={4}
                justifyContent="center"
                textAlign="center"
              >
                {(service.stats || []).map((stat, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    key={index}
                    boxShadow={5}
                    width={200}
                    sx={{
                      px: 6,
                      py: 3,
                      borderRadius: "16px",
                      bgcolor: "white",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        color: primaryColor,
                        fontWeight: 700,
                        fontSize: { xs: "2.5rem", md: "3rem" },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      sx={{
                        color: offBlackTextLight,
                        mt: 1,
                        fontSize: "1.4rem",
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>

          {/* Features - With Icons */}
          <Container
            maxWidth="lg"
            sx={{ py: { xs: 6, md: 10 }, justifyContent: "center" }}
          >
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Chip
                label="About This Service"
                sx={{
                  bgcolor: primaryLight,
                  color: primaryColor,
                  fontWeight: 600,
                  borderRadius: "50px",
                  px: 3,
                  py: 2.5,
                }}
              />
            </Box>

            <Typography
              variant="h4"
              sx={{ textAlign: "center", mb: 2, fontWeight: 700 }}
            >
              Premium Access Control Solutions
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                mb: 8,
                color: offBlackTextLight,
                maxWidth: 800,
                mx: "auto",
              }}
            >
              Automated parking barrier systems for secure and efficient access
              control, designed for commercial and residential parking
              facilities.
            </Typography>

            <Grid
              container
              spacing={4}
              justifyContent={"center"}
              justifySelf={"center"}
              maxWidth={800}
            >
              {service.features.map((feature, index) => {
                const icons = ["✓", "🛡️", "⚡", "🔧"];
                const icon = icons[index];

                return (
                  <Grid item xs={12} sm={6} key={index} width={["90%", 300]}>
                    <Box
                      sx={{
                        bgcolor: "white",
                        borderRadius: "16px",
                        p: 2,
                        boxShadow: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        height: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: primaryLight + "33",
                          width: 56,
                          height: 56,
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "1.8rem", color: primaryColor }}
                        >
                          {icon}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "1.1rem",
                          color: offBlackText,
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Container>

          {/* Specifications - With Icons */}
          <Box sx={{ bgcolor: "#f9f9f9", py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Chip
                  label="Technical Details"
                  sx={{
                    bgcolor: primaryLight,
                    color: primaryColor,
                    fontWeight: 600,
                    borderRadius: "50px",
                    px: 3,
                    py: 2.5,
                  }}
                />
              </Box>

              <Typography
                variant="h4"
                sx={{ textAlign: "center", mb: 6, fontWeight: 700 }}
              >
                Specifications
              </Typography>

              <Grid container spacing={4} justifyContent="center">
                {service.specs.map((spec, index) => {
                  const IconComponent = spec.icons;
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      key={index}
                      width={["90%", 300]}
                    >
                      <Stack
                        sx={{
                          bgcolor: "white",
                          borderRadius: "20px",
                          p: 4,
                          boxShadow: 2,
                          gap: 1.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: 43,
                            height: 43,
                            backgroundColor: primaryLight,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "12px",
                            display: "flex",
                            color: primaryColor,
                            "&:hover": {
                              backgroundColor: primaryDark,
                              cursor: "pointer",
                              transition: "0.5s",
                              color: offWhiteColor,
                            },
                          }}
                        >
                          <IconComponent sx={{ fontSize: "1.4rem" }} />
                        </Box>

                        <Stack spacing={0}>
                          <Typography
                            sx={{
                              fontSize: "1rem",
                              fontWeight: 600,
                              color: primaryColor,
                            }}
                          >
                            {spec.label}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: "1.1rem",
                              fontWeight: 700,
                              color: offBlackText,
                            }}
                          >
                            {spec.value}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </Box>

          {/* Seamless Integrations & Use Cases */}
          <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
            <Grid
              container
              spacing={6}
              alignItems="center"
              justifyContent="center"
            >
              {/* LEFT COLUMN — INTEGRATIONS */}
              <Grid item xs={12} md={6}>
                <Stack spacing={3} mb={4} alignItems={["center", "flex-start"]}>
                  <Chip
                    label="Connectivity"
                    sx={{
                      mb: 2,
                      bgcolor: "#e6e6e6",
                      fontWeight: 600,
                      px: 3,
                      py: 1.8,
                      borderRadius: "999px",
                      maxWidth: 150,
                    }}
                  />

                  <Typography
                    variant="h4"
                    fontWeight={700}
                    mb={4}
                    textAlign={["center", "flex-start"]}
                  >
                    Seamless Integrations
                  </Typography>
                </Stack>

                <Grid
                  container
                  gap={[2, 3]}
                  justifyContent={["center", "flex-start"]}
                  maxWidth={["100%", "100%", "100%", 500, 550]}
                >
                  {integrationItems.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index} width={[180, 220]}>
                      <Box
                        sx={{
                          bgcolor: "#fff",
                          borderRadius: 3,
                          px: { xs: 1, sm: 1 },
                          py: 2.5,
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                          minHeight: { xs: 80, sm: 100 },
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 30, sm: 44 },
                            height: { xs: 30, sm: 44 },
                            borderRadius: 2,
                            bgcolor: primaryLight + "33",
                            color: primaryColor,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {item.icon}
                        </Box>

                        <Typography fontWeight={600} fontSize={[14, 18]}>
                          {item.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* RIGHT COLUMN — USE CASES */}
              <Grid
                item
                xs={12}
                md={6}
                maxWidth={["100%", "100%", "100%", 500, 550]}
              >
                <Chip
                  label="Applications"
                  sx={{
                    mb: 2,
                    bgcolor: primaryLight,
                    color: primaryColor,
                    fontWeight: 600,
                    px: 3,
                    py: 1.8,
                    borderRadius: "999px",
                  }}
                />

                <Typography variant="h4" fontWeight={700} mb={4}>
                  Use Cases
                </Typography>

                {/* Use case chips — 2 per row */}
                <Grid container spacing={2} mb={4}>
                  {useCases.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Chip
                        label={item}
                        sx={{
                          width: "fit-content",
                          px: 3,
                          py: 1.8,
                          borderRadius: "999px",
                          bgcolor: "#fff",
                          border: "1px solid #E0E0E0",
                          fontWeight: 500,
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>

                {/* Custom Solutions — full width */}
                <Box
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: 4,
                    p: { xs: 4, md: 5 },
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                >
                  <Typography variant="h6" fontWeight={700} mb={1}>
                    Custom Solutions
                  </Typography>
                  <Typography color={offBlackTextLight} lineHeight={1.7}>
                    Don’t see your use case? We offer customized barrier
                    solutions tailored to your specific requirements and
                    infrastructure.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
          {/* Gallery */}

          <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Chip
                label="Gallery"
                sx={{
                  bgcolor: "#f0f0f0",
                  color: offBlackTextLight,
                  fontWeight: 600,
                  borderRadius: "50px",
                  px: 3,
                  py: 2.5,
                }}
              />
            </Box>

            <Typography
              variant="h4"
              sx={{ textAlign: "center", mb: 2, fontWeight: 700 }}
            >
              See Our Solutions in Action
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                mb: 6,
                color: offBlackTextLight,
                maxWidth: 800,
                mx: "auto",
              }}
            >
              Explore our range of parking barrier installations across various
              settings.
            </Typography>

            <Slider {...sliderSettings}>
              {service.galleryImages.map((img, index) => {
                const hasCaption = galleryCaptions[index]?.trim();

                return (
                  <Box key={index} px={1.5}>
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: 4,
                        height: { xs: 280, sm: 300, md: 300 },
                        "&:hover .overlay": { opacity: 1 },
                        "&:hover img": { transform: "scale(1.1)" },
                      }}
                    >
                      <Box
                        component="img"
                        src={img}
                        alt={`Parking barrier installation ${index + 1}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                      />

                      {hasCaption && (
                        <Box
                          className="overlay"
                          sx={{
                            position: "absolute",
                            inset: 0,
                            bgcolor: "rgba(0,0,0,0.7)",
                            color: "white",
                            display: "flex",
                            alignItems: "end",
                            justifyContent: "center",
                            padding: 3,
                            opacity: 0,
                            transition: "opacity 0.4s ease",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize: { xs: "1rem", sm: "1.1rem" },
                              whiteSpace: "pre-line",
                            }}
                          >
                            {galleryCaptions[index]}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Slider>
          </Container>

          {/* CTA Section */}
          <Box
            sx={{
              bgcolor: secondaryColor,
              py: { xs: 8, md: 12 },
              borderRadius: "24px",
              mx: { xs: 2, md: 4 },
              my: 8,
              px: { xs: 2, md: 14 },
            }}
            maxWidth={[900]}
            justifySelf={"center"}
          >
            <Container maxWidth="md" sx={{ textAlign: "center" }}>
              <Typography variant="h3" sx={{ color: offWhiteColor, mb: 3 }}>
                Need this service?
              </Typography>
              <Typography
                sx={{ color: offWhiteColor, mb: 5, maxWidth: 600, mx: "auto" }}
              >
                Our certified engineers are ready to design, install, and
                support your parking barrier system.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: primaryColor,
                    borderRadius: "50px",
                    px: 5,
                    py: 1.8,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                  }}
                >
                  Get Parking Barrier Quote
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PhoneIcon />}
                  sx={{
                    borderColor: offWhiteColor,
                    color: offWhiteColor,
                    borderRadius: "50px",
                    px: 5,
                    py: 1.8,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    "&:hover": {
                      borderColor: offWhiteColor,
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Call Us Now
                </Button>
              </Stack>

              <Stack
                direction={{ sm: "row" }}
                gap={4}
                justifyContent="center"
                sx={{ mt: 6 }}
                flexWrap={"wrap"}
              >
                <Typography sx={{ color: offWhiteColor }}>
                  ✓ Free Consultation
                </Typography>
                <Typography sx={{ color: offWhiteColor }}>
                  ✓ 5-Year Warranty
                </Typography>
                <Typography sx={{ color: offWhiteColor }}>
                  ✓ Nationwide Service
                </Typography>
              </Stack>

              <Button
                component={Link}
                href="/services"
                variant="text"
                sx={{
                  mt: 6,
                  color: offWhiteColor,
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    bgcolor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                ← Back to All Services
              </Button>
            </Container>
          </Box>
        </>
      )}

      {/* Fallback for other services */}
      {!isParkingBarrier && (
        <Container maxWidth="lg" sx={{ py: 10 }}>
          <Typography variant="h4" gutterBottom>
            Service Details
          </Typography>
          <Typography>{service.description}</Typography>
        </Container>
      )}
    </Box>
  );
};

export default ServicesDetail;
