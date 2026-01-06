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
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import MonitorIcon from '@mui/icons-material/Monitor';
import DevicesIcon from '@mui/icons-material/Devices';
import MicIcon from '@mui/icons-material/Mic';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
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
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import LanOutlinedIcon from "@mui/icons-material/LanOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import { bool } from "yup";
import { blue, blueGrey } from "@mui/material/colors";
import SecurityIcon from "@mui/icons-material/Security";
import HomeIcon from "@mui/icons-material/Home";
import CloudIcon from "@mui/icons-material/Cloud";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import StraightenIcon from "@mui/icons-material/Straighten";
import SpeedIcon from "@mui/icons-material/Speed";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import KeyIcon from '@mui/icons-material/Key';
import BuildIcon from "@mui/icons-material/Build";
import SdStorageIcon from '@mui/icons-material/SdStorage';
import AcUnitIcon from '@mui/icons-material/AcUnit'; // HVAC / Air conditioning
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices'; // Electrical systems
import WaterIcon from '@mui/icons-material/Water'; // Plumbing / water systems
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher'; // Fire safety
import SmartToyIcon from '@mui/icons-material/SmartToy'; // Smart building / IoT
import BoltIcon from '@mui/icons-material/Bolt'; // Energy management
import OfficeIcon from '@mui/icons-material/HomeWork';
import ToolsIcon from '@mui/icons-material/Construction';
import ScheduleIcon from '@mui/icons-material/EventNote';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
/* =========================
   SERVICES DATA
========================= */

const services = [
  {
    id: 1,
    title: "Network and Cable Solutions",
    description:
      "Professional network and structured cabling solutions designed to deliver reliable, high-speed, and secure connectivity. Our systems are scalable, standards-compliant, and optimized for long-term performance in offices, buildings, and campuses.",
    image: "/images/home-banner/cables-1.jpg",

    highlightServices: [
      {
        title: "Structured Cabling",
        subtitle: "Organized copper & fiber cabling systems",
        image: "/images/cable/cable15.jpeg",
      },
      {
        title: "Fiber Networks",
        subtitle: "High-speed backbone & data transmission",
        image: "/images/cable/cable17.jpeg",
      },
    ],

    highlightText: [
      {
        title: "Reliable Network Infrastructure",
        description:
          "Designed to support high data loads, future expansion, and uninterrupted connectivity.",
      },
    ],

    specsContent: [
      {
        header: {
          chip: "Technical Specs",
          title: "Built for ",
          highlight: "Connectivity",
          description:
            "Enterprise-grade components engineered for speed, stability, and scalability.",
        },
        cards: [
          {
            id: "01",
            label: "CABLING TYPE",
            value: "Fiber / Cat6 / Cat6A",
            icon: "settings",
            color: "#3b82f6",
          },
          {
            id: "02",
            label: "STANDARDS",
            value: "TIA / ISO / IEEE",
            icon: "material",
            color: "#10b981",
          },
          {
            id: "03",
            label: "APPLICATION",
            value: "Office & Building Networks",
            icon: "building",
            color: "#8b5cf6",
          },
          {
            id: "04",
            label: "BANDWIDTH",
            value: "Up to 10 Gbps",
            icon: "measure",
            color: "#f97316",
          },
          {
            id: "05",
            label: "TOPOLOGY",
            value: "Star / Backbone",
            icon: "speed",
            color: "#fb7185",
          },
          {
            id: "06",
            label: "MANAGEMENT",
            value: "Labeled & Documented",
            icon: "wifi",
            color: "#06b6d4",
          },
        ],
      },
    ],

    integrations: [
      { title: "Servers", icon: <CloudIcon />, hoverColor: "#06b6d4" },
      { title: "Switches", icon: <ApartmentIcon />, hoverColor: "#6366f1" },
      { title: "Wi-Fi Systems", icon: <WifiIcon />, hoverColor: "#3b82f6" },
      {
        title: "Security Systems",
        icon: <SecurityIcon />,
        hoverColor: "#22c55e",
      },
    ],

    featureCards: [
      {
        title: "Clean Cabling",
        description: "Neat routing & professional labeling",
        icon: <SecurityIcon />,
      },
      {
        title: "High Speed",
        description: "Optimized for data-heavy environments",
        icon: <CloudIcon />,
      },
      {
        title: "Scalable Design",
        description: "Easy future expansion",
        icon: <ApartmentIcon />,
      },
      {
        title: "Expert Support",
        description: "Installation & testing included",
        icon: <SupportAgentIcon />,
      },
    ],

    stats: [
      { value: "700+", label: "NETWORKS DEPLOYED" },
      { value: "99%", label: "UPTIME", highlight: true },
      { value: "24/7", label: "SUPPORT" },
      { value: "15+", label: "YEARS EXPERIENCE" },
    ],

    features: [
      "Structured copper & fiber cabling",
      "Server room & rack setup",
      "Testing & certification",
      "Future-ready network design",
    ],

    featureDescrip: [
      {
        description:
          "We design and deploy enterprise-grade network infrastructure ensuring reliability, performance, and clean cable management.",
      },
    ],
    featureImg: [
      {
        image: "/images/cable/cable6.jpg",
      },
    ],

    galleryImages: [
      {
        image: "/images/cable/cable15.jpeg",
        width: { xs: "180px", sm: "300px" },
        caption: "Structured Cabling\nCommercial installation",
      },
      {
        image: "/images/cable/cable16.jpeg",
        width: { xs: "120px", sm: "270px" },
        caption: "Network Infrastructure\nOffice setup",
      },
      {
        image: "/images/cable/cable17.jpeg",
        width: { xs: "120px", sm: "300px" },
        caption: "Fiber Cabling\nHigh-speed networks",
      },
      {
        image: "/images/cable/cable19.jpeg",
        width: { xs: "180px", sm: "270px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable18.jpeg",
        width: { xs: "180px", sm: "270px" },
        caption: "Cable Management\nClean routing",
      },
      {
        width: { xs: "120px", sm: "320px" },

        image: "/images/cable/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable20.jpeg",
        width: { xs: "120px", sm: "320px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable8.jpeg",
        width: { xs: "180px", sm: "275px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable9.jpeg",
        width: { xs: "180px", sm: "225px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable10.jpeg",
        width: { xs: "120px", sm: "185px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable11.jpeg",
        width: { xs: "120px", sm: "330px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable12.jpeg",
        width: { xs: "180px", sm: "340px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable13.jpeg",
        width: { xs: "180px", sm: "200px" },
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable/cable14.jpeg",
        width: { xs: "120px", sm: "300px" },
        caption: "Cable Management\nClean routing",
      },
    ],

    ctaText: "Request Cable Installation",
  },

  {
    id: 2,
    title: "Parking Management Solutions",
    description:
      "Parking management solutions optimize space usage and traffic flow. These systems improve user convenience and reduce congestion. Automation minimizes manual handling and errors. Solutions are scalable for small and large facilities. Suitable for malls, offices, and public parking areas.",
    image: "/images/home-banner/parking-barrier.jpg",

    highlightServices: [
      {
        title: "Access Control",
        subtitle: "RFID & biometric entry with real-time monitoring",
        image: "/images/parking/parking1.jpg",
      },
      {
        title: "CCTV & ANPR",
        subtitle: "Surveillance with plate recognition",
        image: "/images/parking/parking2.jpeg",
      },
    ],
    highlightText: [
      {
        title: "Complete Parking Security Solutions",
        description:
          " End-to-end systems for commercial, residential, and industrial applications.",
      },
    ],
    specsContent: [
      {
        header: {
          chip: "Technical Specs",
          title: "Designed for ",
          highlight: "Parking Systems",
          description:
            "High-performance, reliable, and secure parking and access control solutions for commercial and residential facilities.",
        },
        cards: [
          {
            id: "01",
            label: "OPERATION",
            value: "Automatic / Manual / Remote",
            icon: "settings",
            color: "#3b82f6",
          },
          {
            id: "02",
            label: "MATERIAL",
            value: "Heavy-Duty Galvanized Steel",
            icon: "material",
            color: "#10b981",
          },
          {
            id: "03",
            label: "USE CASE",
            value: "Commercial, Residential & Industrial",
            icon: "building",
            color: "#8b5cf6",
          },
          {
            id: "04",
            label: "ARM LENGTH",
            value: "3m / 4.5m / 6m / Custom",
            icon: "measure",
            color: "#f97316",
          },
          {
            id: "05",
            label: "SPEED",
            value: "1.5 - 6 Seconds per Operation",
            icon: "speed",
            color: "#fb7185",
          },
          {
            id: "06",
            label: "CONNECTIVITY",
            value: "WiFi / Bluetooth / RFID / Cloud Integration",
            icon: "wifi",
            color: "#06b6d4",
          },
        ],
      },
    ],

    integrations: [
      {
        title: "Parking Systems",
        icon: <DirectionsCarIcon />,
        hoverColor: "#3b82f6",
      },
      {
        title: "Access Cards",
        icon: <CreditCardIcon />,
        hoverColor: "#10b981",
      },
      {
        title: "ANPR Cameras",
        icon: <CameraAltIcon />,
        hoverColor: "#8b5cf6",
      },
      {
        title: "Remote Access",
        icon: <WifiIcon />,
        hoverColor: "#f97316",
      },
      {
        title: "Mobile Apps",
        icon: <SmartphoneIcon />,
        hoverColor: "#ec4899",
      },
      {
        title: "BMS Systems",
        icon: <ApartmentIcon />,
        hoverColor: "#6366f1",
      },
      {
        title: "Cloud Platforms",
        icon: <CloudIcon />,
        hoverColor: "#06b6d4",
      },
      {
        title: "Security Systems",
        icon: <SecurityIcon />,
        hoverColor: "#22c55e",
      },
    ],
    featureCards: [
      {
        title: "Barrier Systems",
        description: "Precision-engineered heavy-duty mechanisms",
        icon: <SecurityIcon />,
      },
      {
        title: "Residential",
        description: "App-controlled barriers for modern homes",
        icon: <HomeIcon />,
      },
      {
        title: "Cloud Management",
        description: "Multi-site control with live dashboards",
        icon: <CloudIcon />,
      },
      {
        title: "Support 24/7",
        description: "Expert installation & rapid response",
        icon: <SupportAgentIcon />,
      },
    ],
    stats: [
      { value: "500+", label: "INSTALLATIONS" },
      { value: "98%", label: "SATISFACTION RATE", highlight: true },
      { value: "24/7", label: "SUPPORT" },
      { value: "15+", label: "YEARS EXPERIENCE" },
    ],

    features: [
      "Automated barrier systems for efficient entry ",
      "RFID & biometric access control integration",
      "Durable, weather-resistant construction ",
      "Scalable solutions for multi-level ",
    ],

    featureDescrip: [
      {
        description:
          "Automated parking barrier systems for secure and efficient access control, designed for commercial and residential parking facilities.",
      },
    ],
    featureImg: [
      {
        image: "/images/parking/parking16.jpeg",
      },
    ],

    galleryImages: [
      {
        width: { xs: "180px", sm: "300px" },
        image: "/images/parking/parking6.jpeg",
        caption: "Boom Barrier\nCommercial parking",
      },
      {
        width: { xs: "120px", sm: "270px" },
        image: "/images/parking/parking7.jpg",
        caption: "Access Control\nEntry management",
      },
      {
        width: { xs: "120px", sm: "300px" },
        image: "/images/parking/parking8.jpeg",
        caption: "ANPR Integration\nSmart parking",
      },
      {
        width: { xs: "180px", sm: "270px" },
        image: "/images/parking/parking9.jpeg",
        caption: "Automated Exit\nHigh traffic flow",
      },

      {
        width: { xs: "180px", sm: "200px" },
        image: "/images/parking/parking10.jpeg",
        caption: "Boom Barrier\nCommercial parking",
      },
      {
        width: { xs: "120px", sm: "320px" },
        image: "/images/parking/parking11.jpeg",
        caption: "Access Control\nEntry management",
      },
      {
        width: { xs: "120px", sm: "320px" },
        image: "/images/parking/parking13.jpeg",
        caption: "ANPR Integration\nSmart parking",
      },
      {
        width: { xs: "180px", sm: "275px" },
        image: "/images/parking/parking14.jpeg",
        caption: "Automated Exit\nHigh traffic flow",
      },

      {
        width: { xs: "180px", sm: "225px" },
        image: "/images/parking/parking15.jpeg",
        caption: "Boom Barrier\nCommercial parking",
      },
      {
        width: { xs: "120px", sm: "185px" },
        image: "/images/parking/parking16.jpeg",
        caption: "Access Control\nEntry management",
      },
      {
        width: { xs: "120px", sm: "330px" },
        image: "/images/parking/parking17.jpeg",
        caption: "ANPR Integration\nSmart parking",
      },
      {
        width: { xs: "180px", sm: "340px" },
        image: "/images/parking/parking18.jpeg",
        caption: "Automated Exit\nHigh traffic flow",
      },
      {
        width: { xs: "180px", sm: "200px" },
        image: "/images/parking/parking19.jpeg",
        caption: "Boom Barrier\nCommercial parking",
      },
      {
        width: { xs: "120px", sm: "300px" },
        image: "/images/parking/parking20.jpeg",
        caption: "Access Control\nEntry management",
      },
    ],

    ctaText: "Request Parking Barrier Solution",
  },

  {
    id: 3,
    title: "Security and Surveillance Solutions",
    description:
      "Security and surveillance solutions protect people, property, and assets. These systems provide real-time monitoring and threat detection. Integrated technologies improve response time. Suitable for residential, commercial, and industrial environments. Designed for reliability and scalability.",
    image: "/images/home-banner/camera-1.jpg",

    highlightServices: [
      {
        title: "Access Control",
        subtitle: "RFID & biometric entry with real-time monitoring",
        image: "/images/security/security1.jpg",
      },
      {
        title: "CCTV & ANPR",
        subtitle: "Surveillance with plate recognition",
        image: "/images/security/security4.jpeg",
      },
    ],
    highlightText: [
      {
        title: "Comprehensive Security & Surveillance Solutions",
        description:
          "End-to-end security systems for commercial, residential, and industrial facilities, including CCTV, access control, and monitoring.",
      },
    ],

    specsContent: [
      {
        header: {
          chip: "Technical Specs",
          title: "Engineered to ",
          highlight: "Protect",
          description:
            "High-quality materials and advanced technology for reliable surveillance and access control.",
        },
        cards: [
          {
            id: "01",
            label: "CAMERA TYPES",
            value: "CCTV, IP, PTZ",
            icon: "camera",
            color: "#3b82f6",
          },
          {
            id: "02",
            label: "STORAGE",
            value: "Cloud / Local NVR",
            icon: "storage",
            color: "#10b981",
          },
          {
            id: "03",
            label: "USE CASE",
            value: "Residential, Commercial, Industrial",
            icon: "building",
            color: "#8b5cf6",
          },
          {
            id: "04",
            label: "ACCESS CONTROL",
            value: "RFID, Biometric, PIN",
            icon: "key",
            color: "#f97316",
          },
          {
            id: "05",
            label: "CONNECTIVITY",
            value: "WiFi / Ethernet / PoE",
            icon: "wifi",
            color: "#06b6d4",
          },
          {
            id: "06",
            label: "MONITORING",
            value: "24/7 Live Surveillance",
            icon: "monitor",
            color: "#fb7185",
          },
        ],
      },
    ],

    integrations: [
      {
        title: "CCTV Cameras",
        icon: <CameraAltIcon />,
        hoverColor: "#3b82f6",
      },
      {
        title: "Access Cards & Biometric",
        icon: <CreditCardIcon />,
        hoverColor: "#10b981",
      },
      {
        title: "Remote Monitoring",
        icon: <WifiIcon />,
        hoverColor: "#f97316",
      },
      {
        title: "Cloud Storage",
        icon: <CloudIcon />,
        hoverColor: "#06b6d4",
      },
      {
        title: "Alarm Systems",
        icon: <SecurityIcon />,
        hoverColor: "#22c55e",
      },
      {
        title: "Smart Gate & Barrier Control",
        icon: <DirectionsCarIcon />,
        hoverColor: "#8b5cf6",
      },
      {
        title: "Mobile App Access",
        icon: <SmartphoneIcon />,
        hoverColor: "#ec4899",
      },
      {
        title: "BMS Integration",
        icon: <ApartmentIcon />,
        hoverColor: "#6366f1",
      },
    ],

    featureCards: [
      {
        title: "24/7 Surveillance",
        description: "Continuous monitoring for total security coverage",
        icon: <CameraAltIcon />,
      },
      {
        title: "Smart Access Control",
        description: "Biometric, RFID, and PIN-enabled secure entry",
        icon: <KeyIcon />,
      },
      {
        title: "Cloud Management",
        description: "Remote management with live dashboards and alerts",
        icon: <CloudIcon />,
      },
      {
        title: "Rapid Support",
        description: "Professional installation & emergency response",
        icon: <SupportAgentIcon />,
      },
    ],

    stats: [
      { value: "1000+", label: "CAMERAS INSTALLED" },
      { value: "99%", label: "SATISFACTION RATE", highlight: true },
      { value: "24/7", label: "MONITORING" },
      { value: "10+", label: "YEARS EXPERIENCE" },
    ],

    features: [
      "High-resolution CCTV and IP cameras for clear imaging",
      "Advanced analytics with motion detection and alerts",
      "Integrated access control systems with biometric/RFID",
      "Cloud-enabled storage for scalable security management",
    ],

    featureDescrip: [
      {
        description:
          "Complete security and surveillance solutions combining CCTV, access control, and monitoring systems to protect residential, commercial, and industrial properties.",
      },
    ],
    featureImg: [{ image: "/images/security/security7.jpeg" }],

    galleryImages: [
      {
        image: "/images/security/security7.jpeg",
        width: { xs: "180px", sm: "300px" },
        caption: "CCTV Installation\nIndoor surveillance",
      },
      {
        image: "/images/security/security8.jpeg",
        width: { xs: "120px", sm: "270px" },
        caption: "Outdoor Cameras\nPerimeter security",
      },
      {
        image: "/images/security/security9.jpeg",
        caption: "Monitoring Room\nLive feeds",
        width: { xs: "120px", sm: "270px" },
      },
      {
        image: "/images/security/security10.jpeg",
        caption: "AI Detection\nSmart alerts",
        width: { xs: "180px", sm: "270px" },
      },
      {
        image: "/images/security/security11.jpeg",
        caption: "CCTV Installation\nIndoor surveillance",
        width: { xs: "180px", sm: "200px" },
      },
      {
        image: "/images/security/security12.jpeg",
        width: { xs: "120px", sm: "320px" },

        caption: "Outdoor Cameras\nPerimeter security",
      },
      {
        image: "/images/security/security13.jpeg",
        caption: "Monitoring Room\nLive feeds",
        width: { xs: "120px", sm: "320px" },
      },
      {
        image: "/images/security/security14.jpeg",
        caption: "AI Detection\nSmart alerts",
        width: { xs: "180px", sm: "275px" },
      },
      {
        image: "/images/security/security15.jpeg",
        caption: "CCTV Installation\nIndoor surveillance",
        width: { xs: "180px", sm: "225px" },
      },
      {
        image: "/images/security/security16.jpeg",
        caption: "Outdoor Cameras\nPerimeter security",
        width: { xs: "120px", sm: "185px" },
      },
      {
        image: "/images/security/security17.jpeg",
        caption: "Monitoring Room\nLive feeds",
        width: { xs: "120px", sm: "330px" },
      },
      {
        image: "/images/security/security18.jpeg",
        caption: "AI Detection\nSmart alerts",
        width: { xs: "180px", sm: "340px" },
      },
      {
        image: "/images/security/security19.jpeg",
        caption: "CCTV Installation\nIndoor surveillance",
        width: { xs: "180px", sm: "200px" },
      },
      {
        image: "/images/security/security20.jpeg",
        caption: "Outdoor Cameras\nPerimeter security",
        width: { xs: "120px", sm: "300px" },
      },
    ],

    ctaText: "Request Security Solution",
  },

  {
    id: 4,
    title: "Building Maintenance Services",
    description:
      "Building maintenance services ensure the smooth functioning, safety, and long-term durability of residential, commercial, and industrial properties. These services focus on preventive care, quick repairs, and operational efficiency. Regular maintenance reduces breakdown risks and unexpected expenses. Solutions are customized according to building size and usage. Skilled professionals ensure quality and compliance with standards.",
    image: "/images/maintainance/maintainance1.jpg",
    highlightServices: [
  {
    title: "Facility Maintenance",
    subtitle: "Comprehensive building upkeep and preventive maintenance",
    image: "/images/maintainance/maintainance2.jpeg",
  },
  {
    title: "HVAC & Electrical Systems",
    subtitle: "Installation, repair, and regular checks for optimal performance",
    image: "/images/maintainance/maintainance4.jpeg",
  },
],

highlightText: [
  {
    title: "Complete Building & Maintenance Solutions",
    description:
      "End-to-end services for construction, maintenance, and operational efficiency for commercial, residential, and industrial buildings.",
  },
],

specsContent: [
  {
    header: {
      chip: "Technical Specs",
      title: "Engineered to ",
      highlight: "Last",
      description:
        "Premium materials and professional craftsmanship ensure long-term reliability for buildings and facilities.",
    },
    cards: [
      {
        id: "01",
        label: "STRUCTURE",
        value: "Concrete, Steel, Timber",
        icon: "building",
        color: "#3b82f6",
      },
      {
        id: "02",
        label: "MATERIALS",
        value: "High-grade construction materials",
        icon: "material",
        color: "#10b981",
      },
      {
        id: "03",
        label: "USE CASE",
        value: "Residential, Commercial, Industrial",
        icon: "office",
        color: "#8b5cf6",
      },
      {
        id: "04",
        label: "SERVICES",
        value: "Repair, Renovation, Upgrades",
        icon: "tools",
        color: "#f97316",
      },
      {
        id: "05",
        label: "SCHEDULE",
        value: "Routine / Preventive / Emergency",
        icon: "schedule",
        color: "#fb7185",
      },
      {
        id: "06",
        label: "MONITORING",
        value: "Smart sensors & periodic inspections",
        icon: "monitor",
        color: "#06b6d4",
      },
    ],
  },
],

integrations: [
  {
    title: "HVAC Systems",
    icon: <AcUnitIcon />,
    hoverColor: "#3b82f6",
  },
  {
    title: "Electrical Networks",
    icon: <ElectricalServicesIcon />,
    hoverColor: "#10b981",
  },
  {
    title: "Plumbing & Water Systems",
    icon: <WaterIcon />,
    hoverColor: "#8b5cf6",
  },
  {
    title: "Fire Safety Systems",
    icon: <FireExtinguisherIcon />,
    hoverColor: "#f97316",
  },
  {
    title: "Smart Building Integration",
    icon: <SmartToyIcon />,
    hoverColor: "#ec4899",
  },
  {
    title: "Cloud Monitoring",
    icon: <CloudIcon />,
    hoverColor: "#06b6d4",
  },
  {
    title: "Security & Surveillance",
    icon: <SecurityIcon />,
    hoverColor: "#22c55e",
  },
  {
    title: "Energy Management",
    icon: <BoltIcon />,
    hoverColor: "#6366f1",
  },
],

featureCards: [
  {
    title: "Preventive Maintenance",
    description: "Regular checks to prevent breakdowns and prolong building life",
    icon: <SupportAgentIcon />,
  },
  {
    title: "Renovation & Upgrades",
    description: "Modernizing facilities to enhance efficiency and aesthetics",
    icon: <HomeIcon />,
  },
  {
    title: "Smart Building Solutions",
    description: "IoT-enabled monitoring and automation for energy & operations",
    icon: <CloudIcon />,
  },
  {
    title: "24/7 Support",
    description: "Rapid response for emergencies and routine maintenance",
    icon: <SupportAgentIcon />,
  },
],

stats: [
  { value: "1000+", label: "PROJECTS COMPLETED" },
  { value: "99%", label: "CLIENT SATISFACTION", highlight: true },
  { value: "24/7", label: "SUPPORT" },
  { value: "20+", label: "YEARS EXPERIENCE" },
],

features: [
  "Comprehensive building repair and maintenance services",
  "Efficient HVAC, electrical, plumbing, and fire safety solutions",
  "Smart monitoring and IoT-enabled management systems",
  "Customizable maintenance plans for long-term facility health",
],

featureDescrip: [
  {
    description:
      "End-to-end building services covering construction, preventive maintenance, system upgrades, and smart management for residential, commercial, and industrial properties.",
  },
],
    featureImg: [
      {
        image: "/images/maintainance/maintainance8.jpeg",
      },
    ],

    galleryImages: [
      {
        image: "/images/maintainance/maintainance8.jpeg",
        caption: "Facility Maintenance\nRoutine checks",
        width: { xs: "180px", sm: "300px" },
      },
      {
        image: "/images/maintainance/maintainance9.jpeg",
        caption: "Electrical Works\nSystem upgrades",
        width: { xs: "120px", sm: "270px" },
      },
      {
        image: "/images/residential/residential5.jpeg",
        caption: "HVAC Service\nCooling systems",
        width: { xs: "120px", sm: "270px" },
      },
      {
        image: "/images/maintainance/maintainance11.jpeg",
        caption: "Emergency Repair\nRapid response",
        width: { xs: "180px", sm: "270px" },
      },
      {
        image: "/images/residential/residential1.jpeg",
        caption: "Facility Maintenance\nRoutine checks",
        width: { xs: "180px", sm: "200px" },
      },
      {
        image: "/images/maintainance/maintainance13.jpeg",
        caption: "Electrical Works\nSystem upgrades",
        width: { xs: "120px", sm: "320px" },
      },
      {
        image: "/images/maintainance/maintainance14.jpeg",
        caption: "HVAC Service\nCooling systems",
        width: { xs: "120px", sm: "320px" },
      },
      {
        image: "/images/residential/residential2.jpeg",
        caption: "Emergency Repair\nRapid response",
        width: { xs: "180px", sm: "275px" },
      },
      {
        image: "/images/maintainance/maintainance16.jpeg",
        caption: "Facility Maintenance\nRoutine checks",
        width: { xs: "180px", sm: "225px" },
      },
      {
        image: "/images/maintainance/maintainance10.jpeg",
        caption: "Electrical Works\nSystem upgrades",
        width: { xs: "120px", sm: "185px" },
      },
      {
        image: "/images/maintainance/maintainance4.jpeg",
        caption: "HVAC Service\nCooling systems",
        width: { xs: "120px", sm: "330px" },
      },
      {
        image: "/images/residential/residential3.jpeg",
        caption: "Emergency Repair\nRapid response",
        width: { xs: "180px", sm: "340px" },
      },
      {
        image: "/images/residential/residential4.jpeg",
        caption: "Facility Maintenance\nRoutine checks",
        width: { xs: "180px", sm: "200px" },
      },
      {
        image: "/images/maintainance/maintainance15.jpeg",
        caption: "Electrical Works\nSystem upgrades",
        width: { xs: "120px", sm: "300px" },
      },
    ],

    ctaText: "Request Maintenance Service",
  },

  {
    id: 5,
    title: "Digital Locks",
    description:
      "Digital door locks provide keyless entry using fingerprint, PIN, card, or mobile app access. They enhance security and access control. User-friendly systems allow easy management. Suitable for homes, offices, and rental apartments. Designed with advanced safety features.",
    image: "/images/home-banner/digital-lock.jpg",

    highlightServices: [
  {
    title: "Smart Access Control",
    subtitle: "Fingerprint, PIN, RFID, or mobile app entry for secure access",
    image: "/images/locks/lock1.jpeg",
  },
  {
    title: "CCTV Integration",
    subtitle: "Monitor entry points in real-time with connected cameras",
    image: "/images/locks/lock2.jpeg",
  },
],

highlightText: [
  {
    title: "Complete Digital Lock Solutions",
    description:
      "End-to-end keyless security systems for residential, commercial, and rental properties.",
  },
],

specsContent: [
  {
    header: {
      chip: "Technical Specs",
      title: "Built to ",
      highlight: "Secure",
      description:
        "High-quality materials and advanced electronics for reliable and tamper-proof access control.",
    },
    cards: [
      {
        id: "01",
        label: "ACCESS MODES",
        value: "Fingerprint / PIN / Card / Mobile App",
        icon: "fingerprint",
        color: "#3b82f6",
      },
      {
        id: "02",
        label: "MATERIAL",
        value: "Stainless Steel / Zinc Alloy",
        icon: "material",
        color: "#10b981",
      },
      {
        id: "03",
        label: "USE CASE",
        value: "Homes, Offices, Apartments",
        icon: "building",
        color: "#8b5cf6",
      },
      {
        id: "04",
        label: "BATTERY LIFE",
        value: "6-12 months",
        icon: "battery",
        color: "#f97316",
      },
      {
        id: "05",
        label: "RESPONSE TIME",
        value: "Instant / <1 sec",
        icon: "speed",
        color: "#fb7185",
      },
      {
        id: "06",
        label: "CONNECTIVITY",
        value: "WiFi / Bluetooth / NFC",
        icon: "wifi",
        color: "#06b6d4",
      },
    ],
  },
],

integrations: [
  { title: "Mobile App Control", icon: <SmartphoneIcon />, hoverColor: "#3b82f6" },
  { title: "CCTV Systems", icon: <CameraAltIcon />, hoverColor: "#10b981" },
  { title: "Building Management Systems", icon: <ApartmentIcon />, hoverColor: "#8b5cf6" },
  { title: "Remote Access", icon: <WifiIcon />, hoverColor: "#f97316" },
  { title: "Cloud Platform Monitoring", icon: <CloudIcon />, hoverColor: "#ec4899" },
  { title: "Security Alarms", icon: <SecurityIcon />, hoverColor: "#06b6d4" },
  { title: "Smart Door Sensors", icon: <BoltIcon />, hoverColor: "#6366f1" },
  { title: "Access Logs & Analytics", icon: <SupportAgentIcon />, hoverColor: "#22c55e" },
],

featureCards: [
  {
    title: "Keyless Entry",
    description: "No physical keys needed, reducing risk of theft or loss",
    icon: <SecurityIcon />,
  },
  {
    title: "Residential & Commercial",
    description: "Solutions for homes, apartments, offices, and co-working spaces",
    icon: <HomeIcon />,
  },
  {
    title: "Cloud Management",
    description: "Monitor access and manage users from anywhere via cloud dashboard",
    icon: <CloudIcon />,
  },
  {
    title: "24/7 Support",
    description: "Expert installation & rapid troubleshooting for peace of mind",
    icon: <SupportAgentIcon />,
  },
],

stats: [
  { value: "1000+", label: "LOCKS INSTALLED" },
  { value: "99%", label: "SATISFACTION RATE", highlight: true },
  { value: "24/7", label: "SUPPORT" },
  { value: "10+", label: "YEARS EXPERIENCE" },
],

features: [
  "Keyless entry with PIN, fingerprint, or RFID",
  "Mobile app control and remote monitoring",
  "Tamper-proof construction with high-quality materials",
  "Scalable for single doors or large multi-door installations",
],

featureDescrip: [
  {
    description:
      "Advanced digital door locks for homes, offices, and apartments, offering secure, user-friendly, and connected access control solutions.",
  },
],
    featureImg:[
      {
        image:"/images/locks/lock7.jpeg"
      }
    ],
    galleryImages: [
      {
        image: "/images/locks/lock7.jpeg",
        caption: "Smart Lock\nResidential setup",
        width: { xs: "180px", sm: "300px" },
      },
      {
        image: "/images/locks/lock8.jpeg",

        width: { xs: "120px", sm: "270px" },
        caption: "Biometric Access\nOffice security",
      },
      {
        image: "/images/locks/lock9.jpeg",
        caption: "Mobile Control\nRemote access",
        width: { xs: "120px", sm: "270px" },
      },
      {
        image: "/images/locks/lock10.jpeg",
        caption: "Keyless Entry\nModern locking",

        width: { xs: "180px", sm: "270px" },
      },
      {
        image: "/images/locks/lock11.jpeg",
        caption: "Smart Lock\nResidential setup",
        width: { xs: "180px", sm: "200px" },
      },
      {
        image: "/images/locks/lock12.jpeg",
        caption: "Biometric Access\nOffice security",
        width: { xs: "120px", sm: "320px" },
      },
      {
        image: "/images/locks/lock13.jpeg",
        caption: "Mobile Control\nRemote access",
        width: { xs: "120px", sm: "320px" },
      },
      {
        image: "/images/locks/lock14.jpeg",
        caption: "Keyless Entry\nModern locking",
        width: { xs: "180px", sm: "275px" },
      },
      {
        image: "/images/locks/lock15.jpeg",
        width: { xs: "180px", sm: "225px" },

        caption: "Smart Lock\nResidential setup",
      },
      {
        image: "/images/locks/lock5.jpeg",
        caption: "Biometric Access\nOffice security",
        width: { xs: "120px", sm: "185px" },
      },
      {
        image: "/images/locks/lock4.jpg",
        caption: "Mobile Control\nRemote access",
        width: { xs: "120px", sm: "330px" },
      },
      {
        image: "/images/locks/lock3.jpeg",
        caption: "Keyless Entry\nModern locking",
        width: { xs: "180px", sm: "340px" },
      },
      {
        image: "/images/locks/lock2.jpeg",
        caption: "Smart Lock\nResidential setup",
        width: { xs: "180px", sm: "200px" },
      },
      {
        image: "/images/locks/lock1.jpeg",
        width: { xs: "120px", sm: "300px" },

        caption: "Biometric Access\nOffice security",
      },
    ],

    ctaText: "Request Digital Lock Solution",
  },

  {
    id: 6,
    title: "Automation and Access Control Systems",
    description:
      "Automation and access control systems enhance security, convenience, and operational efficiency. These solutions provide controlled access and automated operation. They are ideal for residential, commercial, and industrial environments. Modern systems offer monitoring and remote control features. Designed for reliability and long-term performance.",
    image: "/images/home-banner/garage-door-1.webp",

     highlightServices: [
    {
      title: "Access Control",
      subtitle: "Smart RFID, biometric & PIN-based entry systems",
      image: "/images/automation/automation1.jpg",
    },
    {
      title: "CCTV & ANPR",
      subtitle: "Intelligent surveillance with license plate recognition",
      image: "/images/automation/automation2.jpeg",
    },
  ],

  highlightText: [
    {
      title: "Complete Automation & Access Control",
      description:
        "End-to-end solutions for commercial, residential, and industrial security and automation needs.",
    },
  ],

  specsContent: [
    {
      header: {
        chip: "Technical Specs",
        title: "Engineered for ",
        highlight: "Security & Efficiency",
        description:
          "High-performance components combined with smart technology for reliable access control and automation.",
      },
      cards: [
        {
          id: "01",
          label: "OPERATION",
          value: "Automatic / Remote / Manual",
          icon: "settings",
          color: "#3b82f6",
        },
        {
          id: "02",
          label: "MATERIAL",
          value: "Industrial-Grade Steel & Polycarbonate",
          icon: "material",
          color: "#10b981",
        },
        {
          id: "03",
          label: "USE CASE",
          value: "Residential, Commercial & Industrial",
          icon: "building",
          color: "#8b5cf6",
        },
        {
          id: "04",
          label: "SENSOR RANGE",
          value: "0.5m – 6m",
          icon: "measure",
          color: "#f97316",
        },
        {
          id: "05",
          label: "RESPONSE TIME",
          value: "Instant / <2 Seconds",
          icon: "speed",
          color: "#fb7185",
        },
        {
          id: "06",
          label: "CONNECTIVITY",
          value: "WiFi / Bluetooth / NFC / Cloud",
          icon: "wifi",
          color: "#06b6d4",
        },
      ],
    },
  ],

  integrations: [
    {
      title: "Smart Parking",
      icon: <DirectionsCarIcon />,
      hoverColor: "#3b82f6",
    },
    {
      title: "Access Cards & Keypads",
      icon: <CreditCardIcon />,
      hoverColor: "#10b981",
    },
    {
      title: "ANPR Cameras",
      icon: <CameraAltIcon />,
      hoverColor: "#8b5cf6",
    },
    { title: "Remote Control", icon: <WifiIcon />, hoverColor: "#f97316" },
    { title: "Mobile Apps", icon: <SmartphoneIcon />, hoverColor: "#ec4899" },
    { title: "BMS Integration", icon: <ApartmentIcon />, hoverColor: "#6366f1" },
    { title: "Cloud Platforms", icon: <CloudIcon />, hoverColor: "#06b6d4" },
    { title: "Security Systems", icon: <SecurityIcon />, hoverColor: "#22c55e" },
  ],

  featureCards: [
    {
      title: "Automated Barriers",
      description: "Durable & precise mechanisms for smooth entry control",
      icon: <SecurityIcon />,
    },
    {
      title: "Residential Access",
      description: "Smart, app-controlled entry for homes and gated communities",
      icon: <HomeIcon />,
    },
    {
      title: "Cloud Management",
      description: "Centralized dashboards for multi-site control & monitoring",
      icon: <CloudIcon />,
    },
    {
      title: "24/7 Support",
      description: "Expert installation, maintenance, and rapid response",
      icon: <SupportAgentIcon />,
    },
  ],

  stats: [
    { value: "1000+", label: "SYSTEMS INSTALLED" },
    { value: "99%", label: "CUSTOMER SATISFACTION", highlight: true },
    { value: "24/7", label: "SUPPORT & MONITORING" },
    { value: "20+", label: "YEARS EXPERIENCE" },
  ],

  features: [
    "Smart access control for doors, gates, and parking",
    "Seamless integration with cloud and mobile apps",
    "High-quality biometric, RFID & PIN systems",
    "Scalable solutions for future automation upgrades",
  ],

  featureDescrip: [
    {
      description:
        "Advanced automation and access control systems ensure secure, efficient, and convenient management of residential, commercial, and industrial facilities.",
    },
  ],
  featureImg:[
    {
      image:"/images/automation/automation7.jpeg"
    }
],
    galleryImages: [
      {
        image: "/images/automation/automation7.jpeg",
        caption: "Access Control\nSecure entry",
        width: { xs: "180px", sm: "300px" },
      },
      {
        image: "/images/automation/automation8.jpeg",
        caption: "Automation Panels\nCentral control",
        width: { xs: "120px", sm: "270px" },
      },
      {
        image: "/images/automation/automation6.jpeg",
        caption: "RFID Systems\nFast access",
        width: { xs: "120px", sm: "270px" },
      },
      {
        image: "/images/automation/automation9.jpeg",
        caption: "Integrated Security\nSmart buildings",
        width: { xs: "180px", sm: "270px" },
      },
      {
        image: "/images/automation/automation10.jpeg",
        caption: "Access Control\nSecure entry",
        width: { xs: "180px", sm: "200px" },
      },
      {
        image: "/images/automation/automation11.jpeg",
        caption: "Automation Panels\nCentral control",
        width: { xs: "120px", sm: "320px" },
      },
      {
        image: "/images/residential/residential1.jpeg",
        caption: "RFID Systems\nFast access",
        width: { xs: "120px", sm: "320px" },
      },
      {
        image: "/images/automation/automation12.jpeg",
        caption: "Integrated Security\nSmart buildings",
        width: { xs: "180px", sm: "275px" },
      },
      {
        image: "/images/residential/residential2.jpeg",
        caption: "Access Control\nSecure entry",
        width: { xs: "180px", sm: "225px" },
      },
      {
        image: "/images/automation/automation13.jpeg",
        caption: "Automation Panels\nCentral control",
        width: { xs: "120px", sm: "185px" },
      },
      {
        image: "/images/residential/residential3.jpeg",
        caption: "RFID Systems\nFast access",
        width: { xs: "120px", sm: "330px" },
      },
      {
        image: "/images/automation/automation14.jpeg",
        caption: "Integrated Security\nSmart buildings",
        width: { xs: "180px", sm: "340px" },
      },
      {
        image: "/images/automation/automation15.jpeg",
        caption: "Access Control\nSecure entry",
        width: { xs: "180px", sm: "200px" },
      },
      {
        image: "/images/automation/automation16.jpeg",
        caption: "Automation Panels\nCentral control",
        width: { xs: "120px", sm: "300px" },
      },
    ],

    ctaText: "Request Automation Solution",
  },

  {
    id: 7,
    title: "Wireless Solutions",
    description:
      "Wireless solutions provide high-performance and seamless connectivity. Designed for wide coverage and stability. Improve mobility and productivity. Suitable for offices, buildings, and campuses. Secure and scalable deployment.",
    image: "/images/wireless/wireless6.jpeg",

    highlightServices: [
    {
      title: "Wireless Access Control",
      subtitle: "Smart RFID, biometric & PIN entry with real-time monitoring",
      image: "/images/wireless/wireless2.jpeg",
    },
    {
      title: "Wireless Surveillance",
      subtitle: "CCTV & ANPR cameras with cloud connectivity",
      image: "/images/wireless/wireless3.jpeg",
    },
  ],

  highlightText: [
    {
      title: "Complete Wireless Solutions",
      description:
        "End-to-end wireless systems for commercial, residential, and industrial applications, ensuring seamless automation and connectivity.",
    },
  ],

  specsContent: [
    {
      header: {
        chip: "Technical Specs",
        title: "Designed for ",
        highlight: "Wireless Excellence",
        description:
          "Advanced wireless engineering meets premium materials for secure, reliable, and scalable solutions.",
      },
      cards: [
        {
          id: "01",
          label: "OPERATION",
          value: "Automatic / Remote / Mobile App",
          icon: "settings",
          color: "#3b82f6",
        },
        {
          id: "02",
          label: "MATERIAL",
          value: "Durable Polycarbonate & Aluminum",
          icon: "material",
          color: "#10b981",
        },
        {
          id: "03",
          label: "USE CASE",
          value: "Residential, Commercial & Industrial",
          icon: "building",
          color: "#8b5cf6",
        },
        {
          id: "04",
          label: "WIRELESS RANGE",
          value: "Up to 100m",
          icon: "measure",
          color: "#f97316",
        },
        {
          id: "05",
          label: "RESPONSE TIME",
          value: "Instant / <1 Second",
          icon: "speed",
          color: "#fb7185",
        },
        {
          id: "06",
          label: "CONNECTIVITY",
          value: "WiFi / Bluetooth / Zigbee / Cloud",
          icon: "wifi",
          color: "#06b6d4",
        },
      ],
    },
  ],

  integrations: [
    { title: "Smart Homes", icon: <HomeIcon />, hoverColor: "#3b82f6" },
    { title: "IoT Devices", icon: <DevicesIcon />, hoverColor: "#10b981" },
    { title: "Cloud Platforms", icon: <CloudIcon />, hoverColor: "#8b5cf6" },
    { title: "Mobile Apps", icon: <SmartphoneIcon />, hoverColor: "#f97316" },
    { title: "Security Systems", icon: <SecurityIcon />, hoverColor: "#ec4899" },
    { title: "BMS Integration", icon: <ApartmentIcon />, hoverColor: "#6366f1" },
    { title: "Remote Management", icon: <WifiIcon />, hoverColor: "#06b6d4" },
    { title: "Automation Controllers", icon: <SettingsIcon />, hoverColor: "#22c55e" },
  ],

  featureCards: [
    {
      title: "Wireless Access",
      description: "Seamless entry control without wires or complex cabling",
      icon: <SecurityIcon />,
    },
    {
      title: "Smart Homes & Offices",
      description: "App-controlled devices for modern residential & commercial spaces",
      icon: <HomeIcon />,
    },
    {
      title: "Cloud & Remote Management",
      description: "Control multiple sites from a single dashboard",
      icon: <CloudIcon />,
    },
    {
      title: "24/7 Support",
      description: "Expert assistance and rapid troubleshooting anytime",
      icon: <SupportAgentIcon />,
    },
  ],

  stats: [
    { value: "800+", label: "SYSTEMS DEPLOYED" },
    { value: "99%", label: "CUSTOMER SATISFACTION", highlight: true },
    { value: "24/7", label: "REMOTE MONITORING" },
    { value: "10+", label: "YEARS EXPERIENCE" },
  ],

  features: [
    "Wireless access control for doors, gates, and barriers",
    "Integration with IoT and cloud-based platforms",
    "Smart mobile app management for multiple devices",
    "Scalable systems ready for future automation upgrades",
  ],

  featureDescrip: [
    {
      description:
        "Advanced wireless solutions for secure, efficient, and fully automated management of residential, commercial, and industrial environments.",
    },
  ],
  featureImg:[
    {
      image:"/images/wireless/wireless7.jpeg"
    }
  ],

    galleryImages: [
      {
        width: { xs: "180px", sm: "300px" },
        image: "/images/wireless/wireless7.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
      },
      {
        width: { xs: "120px", sm: "270px" },

        image: "/images/wireless/wireless8.jpeg",
        caption: "Outdoor Access Points\nWide range",
      },
      {
        width: { xs: "120px", sm: "270px" },

        image: "/images/wireless/wireless9.jpeg",
        caption: "Network Setup\nHigh performance",
      },
      {
        width: { xs: "180px", sm: "270px" },

        image: "/images/wireless/wireless10.jpeg",
        caption: "Wireless Monitoring\nLive analytics",
      },
      {
        width: { xs: "180px", sm: "200px" },

        image: "/images/wireless/wireless11.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
      },
      {
        width: { xs: "120px", sm: "320px" },

        image: "/images/wireless/wireless12.jpeg",
        caption: "Outdoor Access Points\nWide range",
      },
      {
        width: { xs: "120px", sm: "320px" },

        image: "/images/wireless/wireless13.jpeg",
        caption: "Network Setup\nHigh performance",
      },
      {
        width: { xs: "180px", sm: "275px" },

        image: "/images/wireless/wireless.jpeg",
        caption: "Wireless Monitoring\nLive analytics",
      },
      {
        width: { xs: "180px", sm: "225px" },

        image: "/images/wireless/wireless2.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
      },
      {
        width: { xs: "120px", sm: "185px" },

        image: "/images/wireless/wireless3.jpeg",
        caption: "Outdoor Access Points\nWide range",
      },
      {
        width: { xs: "120px", sm: "330px" },

        image: "/images/wireless/wireless4.jpeg",
        caption: "Network Setup\nHigh performance",
      },
      {
        width: { xs: "180px", sm: "340px" },

        image: "/images/wireless/wireless5.jpeg",
        caption: "Wireless Monitoring\nLive analytics",
      },
      {
        width: { xs: "180px", sm: "200px" },

        image: "/images/wireless/wireless6.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
      },
      {
        width: { xs: "120px", sm: "300px" },

        image: "/images/automation/automation14.jpeg",
        caption: "Outdoor Access Points\nWide range",
      },
    ],

    ctaText: "Request Wireless Solution",
  },
  {
    id: 8,
    title: "Window Blinds",
    description:
      "Window blind solutions enhance privacy, light control, and interior aesthetics. Designed for homes, offices, and commercial spaces. Available in manual and motorized options. Improve comfort by regulating sunlight and heat. Built with modern designs and durable materials.",

    image: "/images/home-banner/window-blind.jpg",

   highlightServices: [
    {
      title: "Motorized Blinds",
      subtitle: "Automated roller, Venetian, and vertical blinds",
      image: "/images/window/window2.jpeg",
    },
    {
      title: "Smart Control",
      subtitle: "App, remote, and voice-controlled shading solutions",
      image: "/images/window/window3.jpeg",
    },
  ],

  highlightText: [
    {
      title: "Complete Window Blinds Solutions",
      description:
        "End-to-end smart shading systems for homes, offices, and commercial spaces, combining comfort, style, and automation.",
    },
  ],

  specsContent: [
    {
      header: {
        chip: "Technical Specs",
        title: "Designed for ",
        highlight: "Comfort & Control",
        description:
          "Premium materials and advanced motorization ensure smooth, reliable, and quiet operation.",
      },
      cards: [
        {
          id: "01",
          label: "OPERATION",
          value: "Automatic / Remote / App-Controlled",
          icon: "settings",
          color: "#3b82f6",
        },
        {
          id: "02",
          label: "MATERIAL",
          value: "Aluminum, Fabric, Wood",
          icon: "material",
          color: "#10b981",
        },
        {
          id: "03",
          label: "USE CASE",
          value: "Residential & Commercial",
          icon: "building",
          color: "#8b5cf6",
        },
        {
          id: "04",
          label: "WIDTH RANGE",
          value: "0.5m – 4m",
          icon: "measure",
          color: "#f97316",
        },
        {
          id: "05",
          label: "SPEED",
          value: "5 – 15 Seconds per Cycle",
          icon: "speed",
          color: "#fb7185",
        },
        {
          id: "06",
          label: "CONNECTIVITY",
          value: "WiFi / Bluetooth / Zigbee / Voice Assistants",
          icon: "wifi",
          color: "#06b6d4",
        },
      ],
    },
  ],

  integrations: [
    { title: "Smart Homes", icon: <HomeIcon />, hoverColor: "#3b82f6" },
    { title: "Mobile Apps", icon: <SmartphoneIcon />, hoverColor: "#10b981" },
    { title: "Voice Control", icon: <MicIcon />, hoverColor: "#8b5cf6" },
    { title: "Cloud Platforms", icon: <CloudIcon />, hoverColor: "#f97316" },
    { title: "BMS Integration", icon: <ApartmentIcon />, hoverColor: "#ec4899" },
    { title: "Lighting & HVAC Systems", icon: <LightbulbIcon />, hoverColor: "#6366f1" },
    { title: "Energy Management", icon: <BoltIcon />, hoverColor: "#06b6d4" },
    { title: "Security Systems", icon: <SecurityIcon />, hoverColor: "#22c55e" },
  ],

  featureCards: [
    {
      title: "Automated Blinds",
      description: "Smooth and quiet motorized operation for comfort and style",
      icon: <SettingsIcon />,
    },
    {
      title: "Smart Home Integration",
      description: "Control multiple blinds via app or voice commands",
      icon: <HomeIcon />,
    },
    {
      title: "Energy Efficiency",
      description: "Optimize natural light and reduce cooling/heating costs",
      icon: <CloudIcon />,
    },
    {
      title: "24/7 Support",
      description: "Professional installation and responsive assistance",
      icon: <SupportAgentIcon />,
    },
  ],

  stats: [
    { value: "1000+", label: "BLINDS INSTALLED" },
    { value: "99%", label: "CUSTOMER SATISFACTION", highlight: true },
    { value: "24/7", label: "REMOTE SUPPORT" },
    { value: "15+", label: "YEARS EXPERIENCE" },
  ],

  features: [
    "Motorized blinds for windows, skylights, and large glass facades",
    "Integration with smart home and building management systems",
    "Control via mobile apps, remote, and voice assistants",
    "Energy-saving and stylish shading solutions",
  ],

  featureDescrip: [
    {
      description:
        "Advanced window blinds solutions offering automated, app-controlled, and voice-assisted shading for homes and commercial spaces, combining convenience, aesthetics, and energy efficiency.",
    },
  ],
    featureImg:[
      {image:"/images/window/window8.jpeg"}
    ],
    galleryImages: [
      {
        image: "/images/window/window8.jpeg",
        width: { xs: "180px", sm: "300px" },

        caption: "Wi-Fi Deployment\nOffice coverage",
      },
      {
        image: "/images/window/window9.jpeg",
        width: { xs: "120px", sm: "270px" },

        caption: "Outdoor Access Points\nWide range",
      },
      {
        image: "/images/residential/residential1.jpeg",
        caption: "Network Setup\nHigh performance",
        width: { xs: "120px", sm: "270px" },
      },
      {
        image: "/images/window/window10.jpeg",
        caption: "Wireless Monitoring\nLive analytics",
        width: { xs: "180px", sm: "270px" },
      },
      {
        image: "/images/window/window11.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
        width: { xs: "180px", sm: "200px" },
      },
      {
        image: "/images/residential/residential2.jpeg",
        caption: "Outdoor Access Points\nWide range",
        width: { xs: "120px", sm: "320px" },
      },
      {
        image: "/images/window/window12.jpeg",
        caption: "Network Setup\nHigh performance",
        width: { xs: "120px", sm: "320px" },
      },
      {
        image: "/images/window/window13.jpeg",
        caption: "Wireless Monitoring\nLive analytics",
        width: { xs: "180px", sm: "275px" },
      },
      {
        image: "/images/residential/residential3.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
        width: { xs: "180px", sm: "225px" },
      },
      {
        image: "/images/window/window14.jpeg",
        caption: "Outdoor Access Points\nWide range",
        width: { xs: "120px", sm: "185px" },
      },
      {
        image: "/images/window/window15.jpeg",
        caption: "Network Setup\nHigh performance",
        width: { xs: "120px", sm: "330px" },
      },
      {
        image: "/images/window/window16.jpeg",
        caption: "Wireless Monitoring\nLive analytics",
        width: { xs: "180px", sm: "340px" },
      },
      {
        image: "/images/window/window17.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
        width: { xs: "180px", sm: "200px" },
      },
      {
        image: "/images/window/window18.jpeg",
        caption: "Outdoor Access Points\nWide range",
        width: { xs: "120px", sm: "300px" },
      },
    ],

    ctaText: "Request Window Blinds Solution",
  },
  {
    id: 9,
    title: "Garage Doors",
    description:
      "Garage door solutions provide secure, durable, and convenient access for residential, commercial, and industrial properties. These systems combine robust construction with smooth automated operation. Designed to enhance safety, aesthetics, and daily usability. Suitable for parking areas, warehouses, and private garages. Built for long-term reliability and minimal maintenance.",

    image: "/images/home-banner/garage-door-1.webp",

   highlightServices: [
    {
      title: "Automatic Garage Doors",
      subtitle: "Motorized doors with remote, app, and smart controls",
      image: "/images/garage/garage2.jpeg",
    },
    {
      title: "Smart Security Systems",
      subtitle: "Integrated CCTV, sensors, and access monitoring",
      image: "/images/garage/garage3.jpeg",
    },
  ],

  highlightText: [
    {
      title: "Complete Garage Door Solutions",
      description:
        "End-to-end systems for residential, commercial, and industrial garage doors, combining security, automation, and convenience.",
    },
  ],

  specsContent: [
    {
      header: {
        chip: "Technical Specs",
        title: "Engineered for ",
        highlight: "Reliability & Safety",
        description:
          "High-quality materials and precision engineering ensure smooth, durable, and secure garage door operation.",
      },
      cards: [
        {
          id: "01",
          label: "OPERATION",
          value: "Automatic / Remote / Manual",
          icon: "settings",
          color: "#3b82f6",
        },
        {
          id: "02",
          label: "MATERIAL",
          value: "Galvanized Steel / Aluminum / Wood",
          icon: "material",
          color: "#10b981",
        },
        {
          id: "03",
          label: "USE CASE",
          value: "Residential & Commercial",
          icon: "building",
          color: "#8b5cf6",
        },
        {
          id: "04",
          label: "DOOR SIZE",
          value: "Up to 6m Width / 4.5m Height",
          icon: "measure",
          color: "#f97316",
        },
        {
          id: "05",
          label: "SPEED",
          value: "3 – 10 Seconds per Cycle",
          icon: "speed",
          color: "#fb7185",
        },
        {
          id: "06",
          label: "CONNECTIVITY",
          value: "WiFi / Bluetooth / App / Remote",
          icon: "wifi",
          color: "#06b6d4",
        },
      ],
    },
  ],

  integrations: [
    { title: "Smart Homes", icon: <HomeIcon />, hoverColor: "#3b82f6" },
    { title: "Mobile Apps", icon: <SmartphoneIcon />, hoverColor: "#10b981" },
    { title: "Remote Access", icon: <WifiIcon />, hoverColor: "#8b5cf6" },
    { title: "CCTV Integration", icon: <CameraAltIcon />, hoverColor: "#f97316" },
    { title: "BMS & Automation", icon: <ApartmentIcon />, hoverColor: "#ec4899" },
    { title: "Cloud Monitoring", icon: <CloudIcon />, hoverColor: "#6366f1" },
    { title: "Security Systems", icon: <SecurityIcon />, hoverColor: "#06b6d4" },
    { title: "Energy Management", icon: <BoltIcon />, hoverColor: "#22c55e" },
  ],

  featureCards: [
    {
      title: "Motorized Garage Doors",
      description: "Smooth and quiet operation for residential and commercial spaces",
      icon: <SettingsIcon />,
    },
    {
      title: "Smart Control",
      description: "Operate doors via app, remote, or smart home systems",
      icon: <HomeIcon />,
    },
    {
      title: "Safety & Security",
      description: "Integrated sensors, alarms, and CCTV for complete protection",
      icon: <SecurityIcon />,
    },
    {
      title: "24/7 Support",
      description: "Professional installation and responsive assistance",
      icon: <SupportAgentIcon />,
    },
  ],

  stats: [
    { value: "700+", label: "GARAGE DOORS INSTALLED" },
    { value: "99%", label: "CUSTOMER SATISFACTION", highlight: true },
    { value: "24/7", label: "REMOTE MONITORING" },
    { value: "15+", label: "YEARS EXPERIENCE" },
  ],

  features: [
    "Motorized and automated garage doors for homes and commercial facilities",
    "Integration with mobile apps and smart home systems",
    "High-quality materials ensuring durability and smooth operation",
    "Safety sensors, alarms, and smart monitoring for full protection",
  ],

  featureDescrip: [
    {
      description:
        "Advanced garage door solutions providing automation, security, and smart control for residential, commercial, and industrial spaces.",
    },
  ],
    featureImg:[
      {
        image:"/images/garage/garage7.jpeg"
      }
    ],

    galleryImages: [
      {
        image: "/images/garage/garage7.jpeg",
        caption: "Access Control\nSecure entry",
        width: { xs: "180px", sm: "300px" },
      },
      {
        image: "/images/garage/garage8.jpeg",
        caption: "Automation Panels\nCentral control",
        width: { xs: "120px", sm: "270px" },
      },
      {
        image: "/images/garage/garage9.jpeg",
        caption: "RFID Systems\nFast access",
        width: { xs: "120px", sm: "270px" },
      },
      {
        image: "/images/garage/garage10.jpeg",
        caption: "Integrated Security\nSmart buildings",
        width: { xs: "180px", sm: "270px" },
      },
      {
        image: "/images/garage/garage11.jpeg",
        caption: "Access Control\nSecure entry",
        width: { xs: "180px", sm: "200px" },
      },
      {
        image: "/images/garage/garage12.jpeg",
        caption: "Automation Panels\nCentral control",
        width: { xs: "120px", sm: "320px" },
      },
      {
        image: "/images/garage/garage13.jpeg",
        caption: "RFID Systems\nFast access",
        width: { xs: "120px", sm: "320px" },
      },
      {
        image: "/images/garage/garage14.jpeg",
        caption: "Integrated Security\nSmart buildings",
        width: { xs: "180px", sm: "275px" },
      },
      {
        image: "/images/garage/garage15.jpeg",
        caption: "Access Control\nSecure entry",
        width: { xs: "180px", sm: "225px" },
      },
      {
        image: "/images/garage/garage16.jpeg",
        caption: "Automation Panels\nCentral control",
        width: { xs: "120px", sm: "185px" },
      },
      {
        image: "/images/garage/garage17.jpeg",
        caption: "RFID Systems\nFast access",
        width: { xs: "120px", sm: "330px" },
      },
      {
        image: "/images/garage/garage18.jpeg",
        caption: "Integrated Security\nSmart buildings",
        width: { xs: "180px", sm: "340px" },
      },
      {
        image: "/images/garage/garage19.jpeg",
        caption: "Access Control\nSecure entry",
        width: { xs: "180px", sm: "200px" },
      },
      {
        image: "/images/garage/garage20.jpeg",
        caption: "Automation Panels\nCentral control",
        width: { xs: "120px", sm: "300px" },
      },
    ],

    ctaText: "Request Garage Door Solution",
  },
];

/* =========================
   COMPONENT
========================= */
const ServicesDetail = () => {
  const renderIcon = (icon) => {
    switch (icon) {
      case "settings":
        return <SettingsIcon />;
         case "office":
        return <OfficeIcon />;
        case "fingerprint":
        return <FingerprintIcon />;
        case "battery":
        return <BatteryFullIcon/>;
         case "tools":
        return <ToolsIcon />;
         case "schedule":
        return <ScheduleIcon />;
         case "camera":
        return <CameraAltOutlinedIcon />;
         case "storage":
        return <SdStorageIcon />;
         case "key":
        return <KeyIcon />;
         case "monitor":
        return <MonitorIcon />;
      case "material":
        return <BuildIcon />;
      case "building":
        return <ApartmentIcon />;
      case "measure":
        return <StraightenIcon />;
      case "speed":
        return <SpeedIcon />;
      case "wifi":
        return <WifiIcon />;
      default:
        return null;
    }
  };
  const params = useParams();
  const id = params?.id;
  const numericId = id ? Number.parseInt(id || "", 10) : NaN;

  const service = services.find((s) => s.id === numericId);
  return (
    <Box sx={{ backgroundColor: offWhiteColor, minHeight: "100vh" }}>
      {/* =====================
          BANNER 
      ====================== */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "70vh", sm: "100vh" },
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

      <>
        {/* Higlights and Featuring cards */}
        <Box
          sx={{
            my: 15,
            px: { xs: 2, md: 4 },
            justifySelf: "center",
          }}
          maxWidth="lg"
        >
          <Stack
            direction={{ xs: "column", lg: "row" }}
            gap={4}
            justifyContent="center"
            alignItems={{ xs: "center", lg: "flex-start" }}
          >
            {/* LEFT CONTENT */}
            {service.highlightText.map((item, index) => (
              <Grid
                item
                key={index}
                xs={12}
                md={5}
                sx={{
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                <Chip
                  label="Our Services"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    backgroundColor: "#0f1c3f",
                    color: "#fff",
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    lineHeight: 1.2,
                    fontSize: { xs: 35, sm: 45 },
                    maxWidth: 450,
                    mx: { xs: "auto", lg: 0 },
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#6b7280",
                    maxWidth: 420,
                    mx: { xs: "auto", lg: 0 },
                  }}
                >
                  {item.description}
                </Typography>
              </Grid>
            ))}

            {/* RIGHT IMAGE CARDS */}
            <Grid item xs={12} md={7}>
              <Stack
                direction="row"
                gap={5}
                flexWrap={{ xs: "wrap", lg: "nowrap" }}
                justifyContent={{ xs: "center", lg: "flex-start" }}
              >
                {service.highlightServices.map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box
                      sx={{
                        position: "relative",
                        height: 240,
                        borderRadius: 4,
                        overflow: "hidden",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                        minWidth: { xs: "100%", sm: 320 },
                        maxWidth: { xs: 360, lg: "unset" },
                      }}
                    >
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />

                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                          display: "flex",
                          alignItems: "flex-end",
                          p: 2,
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              color: "#fff",
                              fontWeight: 700,
                              fontSize: "1rem",
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#d1d5db",
                              fontSize: "0.85rem",
                            }}
                          >
                            {item.subtitle}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Stack>
            </Grid>
          </Stack>

          {/* FEATURE CARDS */}
          <Grid container spacing={3} sx={{ mt: 6 }} justifyContent="center">
            {service.featureCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                    transition: "0.3s ease",
                    minWidth: 250,
                    maxWidth: { xs: "100%", sm: 260 },
                    mx: "auto",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 14px 30px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: 2,
                        backgroundColor: "#eef2ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      {card.icon}
                    </Box>

                    <Typography sx={{ fontWeight: 700, mb: 1 }}>
                      {card.title}
                    </Typography>

                    <Typography sx={{ color: "#6b7280", fontSize: "0.9rem" }}>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Stats Section  */}
        <Box
          sx={{
            backgroundColor: "#1b2a4a",
            py: { xs: 3, md: 4 },
          }}
        >
          <Container>
            <Grid container alignItems="center" justifyContent="space-between">
              {service.stats.map((stat, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={index}
                  sx={{
                    textAlign: "center",
                    position: "relative",
                    py: { xs: 2, md: 0 },

                    /* Vertical divider on desktop only */
                    "&::after": {
                      content: index !== stat.length - 1 ? '""' : "none",
                      position: "absolute",
                      right: -10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      height: "40px",
                      width: "1px",
                      backgroundColor: "rgba(207, 207, 207, 0.62)",
                      display: { xs: "none", md: "block" },
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "2rem", md: "2.6rem" },
                      fontWeight: 800,
                      color: stat.highlight ? "#facc15" : "#ffffff",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,
                      fontSize: "0.75rem",
                      letterSpacing: "0.12em",
                      color: "#e5e7eb",
                      fontWeight: 600,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Premium Access Control Solution */}
        <Box sx={{ my: { xs: 8, md: 12 }, px: { xs: 2, md: 4 } }}  justifyItems={'center'} >
          <Stack
            direction={{ xs: "column", lg: "row" }} //  responsive only
            gap={{ xs: 5, lg: 6 }}
            mx="auto"
            alignItems={{ xs: "center", lg: "flex-start" }}
          >
            {/* IMAGE SECTION */}
            <Box
              sx={{
                width: { xs: "100%", sm: "85%", lg: "auto" },
                minWidth: { lg: 430 }, //  only on large
                maxWidth: { lg: 500 },
              }}
            >
              {service.featureImg.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      borderRadius: 4,
                      overflow: "hidden",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt="Access Control"
                      sx={{
                        width: "100%",
                        height: { xs: 240, sm: 320, md: 360, lg: 420 },
                        objectFit: "cover",
                      }}
                    />

                    {/* ORANGE BADGE */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 24,
                        right: 24,
                        backgroundColor: "#f59e0b",
                        color: "#000",
                        px: 3,
                        py: 2,
                        borderRadius: 3,
                        boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                        textAlign: "center",
                        minWidth: 120,
                      }}
                    >
                      <Typography sx={{ fontWeight: 800, fontSize: "1.5rem" }}>
                        100%
                      </Typography>
                      <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>
                        Quality Assured
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>

            {/* CONTENT SECTION */}
            {service.featureDescrip.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    maxWidth: 1000,
                    textAlign: { xs: "center", lg: "left" },
                  }}
                >
                  <Chip
                    label="WHY CHOOSE US"
                    sx={{
                      mb: 2,
                      backgroundColor: "#fde68a",
                      color: "#92400e",
                      fontWeight: 700,
                    }}
                  />

                  <Typography
                    sx={{
                      fontWeight: 800,
                      lineHeight: 1.2,
                      mb: 2,
                      fontSize: { xs: 30, sm: 45 },
                    }}
                  >
                    Premium Access <br /> Control Solutions
                  </Typography>

                  <Typography
                    sx={{
                      color: "#6b7280",
                      maxWidth: 480,
                      mx: { xs: "auto", lg: 0 }, //  center on mobile
                      mb: 4,
                    }}
                  >
                    {item.description}
                  </Typography>

                  {/* FEATURES GRID */}
                  <Grid
                    container
                    spacing={2}
                    justifyContent={[
                      "center",
                      "center",
                      "center",
                      "flex-start",
                    ]}
                  >
                    {service.features.map((feature, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            borderRadius: 2,
                            border: "1px solid #e5e7eb",
                            justifyContent: { xs: "center", sm: "flex-start" },
                          }}
                        >
                          <CheckCircleIcon sx={{ color: "#0f1c3f" }} />
                          <Typography
                            sx={{ fontSize: "0.9rem", fontWeight: 500 }}
                          >
                            {feature}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              );
            })}
          </Stack>
        </Box>

        {/* Technical Specs  */}
        <Box
          sx={{
            background: "radial-gradient(circle at top, #111827, #020617)",
            py: { xs: 8, md: 12 },
          }}
        >
          <Container maxWidth="lg">
            {service.specsContent.map((section, idx) => (
              <Box key={idx}>
                {/* HEADER */}
                <Stack
                  spacing={2}
                  alignItems="center"
                  textAlign="center"
                  mb={6}
                >
                  <Chip
                    label={section.header.chip}
                    sx={{
                      backgroundColor: "#1f2937",
                      color: "#e5e7eb",
                      fontWeight: 600,
                    }}
                  />

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: "#fff",
                      fontSize: { xs: "2rem", md: "2.8rem" },
                    }}
                  >
                    {section.header.title}
                    <Box component="span" sx={{ color: "#facc15" }}>
                      {section.header.highlight}
                    </Box>
                  </Typography>

                  <Typography
                    sx={{
                      color: "#9ca3af",
                      maxWidth: 520,
                      fontSize: "0.95rem",
                    }}
                  >
                    {section.header.description}
                  </Typography>
                </Stack>

                {/* CARDS */}
                <Grid container spacing={3}>
                  {section.cards.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                      <Box
                        sx={{
                          position: "relative",
                          p: 3,
                          height: "100%",
                          borderRadius: "16px",
                          border: "1px solid #1f2937",
                          background:
                            "linear-gradient(180deg, #0b1220, #020617)",
                          transition: "all 0.35s ease",
                          cursor: "pointer",

                          "&:hover": {
                            borderColor: "#facc15",
                            transform: "translateY(-6px)",
                          },

                          "&:hover .spec-number": {
                            color: "#facc15",
                          },
                        }}
                      >
                        {/* NUMBER */}
                        <Typography
                          className="spec-number"
                          sx={{
                            position: "absolute",
                            top: 12,
                            right: 16,
                            fontSize: "3rem",
                            fontWeight: 800,
                            color: "rgba(255,255,255,0.04)",
                            transition: "color 0.35s ease",
                          }}
                        >
                          {item.id}
                        </Typography>

                        {/* ICON */}
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: "12px",
                            backgroundColor: item.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2,
                            color: "#fff",
                          }}
                        >
                          {renderIcon(item.icon)}
                        </Box>

                        {/* TEXT */}
                        <Typography
                          sx={{
                            color: "#9ca3af",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            mb: 0.5,
                          }}
                        >
                          {item.label}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: "1rem",
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </Container>
        </Box>

        {/* Seamless integrations  */}
        <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
          <Container maxWidth="lg">
            {/* HEADER */}
            <Stack spacing={2} alignItems="center" textAlign="center" mb={6}>
              <Chip
                label="Connectivity"
                sx={{
                  backgroundColor: "#eef2f7",
                  fontWeight: 600,
                  color: "#111827",
                }}
              />

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  color: "#0f172a",
                }}
              >
                Seamless Integrations
              </Typography>

              <Typography
                sx={{
                  color: "#64748b",
                  maxWidth: 600,
                  fontSize: "0.95rem",
                }}
              >
                Connect with your existing infrastructure. Our systems work with
                leading platforms and technologies.
              </Typography>
            </Stack>

            {/* CARDS */}
            <Grid container spacing={3} justifyContent="center">
              {service.integrations.map((item, index) => (
                <Grid
                  item
                  xs={6} // 2 per row on mobile
                  sm={4}
                  md={3}
                  key={index}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    sx={{
                      width: 180, // fixed width
                      height: 120,
                      borderRadius: "14px",
                      border: "1.5px solid #e5e7eb",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1.2,
                      transition: "all 0.3s ease",
                      cursor: "pointer",

                      "&:hover": {
                        borderColor: item.hoverColor,
                        boxShadow: `0 8px 20px ${item.hoverColor}22`,
                      },
                    }}
                  >
                    {/* ICON */}
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: "10px",
                        backgroundColor: "#f1f5f9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#64748b",
                        fontSize: "1.4rem",
                      }}
                    >
                      {item.icon}
                    </Box>

                    {/* TEXT */}
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        color: "#0f172a",
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Gallery */}
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Chip
              label="Gallery"
              sx={{
                bgcolor: "#f0f0f0",
                fontWeight: 600,
                borderRadius: "50px",
                px: { xs: 1, sm: 3 },
                py: 2,
              }}
            />
          </Box>

          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 2, fontWeight: 700 }}
          >
            Our Latest Projects
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              mb: 6,
              color: "text.secondary",
              maxWidth: 800,
              mx: "auto",
            }}
          >
            Explore our professional installations and completed solutions.
          </Typography>

          {/* Gallery Grid */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: "10px", sm: "15px" },
              justifyContent: "center",
            }}
          >
            {(service?.galleryImages || []).map((img, index) => (
              <Box
                key={index}
                sx={{
                  width: {
                    xs: `${img.width.xs}` || "180px",
                    sm: `${img.width.sm}` || "260px",
                  },
                  height: "220px",
                  borderRadius: "18px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                  flexShrink: 0,

                  "&:hover img": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={img.image}
                  alt={img.caption}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />

                {/* Hover Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.65)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    p: 2,
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      textAlign: "center",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {img.caption}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>

        {/* CTA Section */}
        <Box
          sx={{
            bgcolor: secondaryColor,
            py: { xs: 4, md: 4 },
            borderRadius: "24px",
            mx: { xs: 2, md: 4 },
            my: 8,
            px: { xs: 2, md: 14 },
          }}
          maxWidth={[900]}
          justifySelf={"center"}
        >
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <Typography
              fontSize={[25, 40]}
              fontWeight={600}
              sx={{ color: offWhiteColor, mb: 3 }}
            >
              Need this service?
            </Typography>
            <Typography
              sx={{ color: offWhiteColor, mb: 5, maxWidth: 600, mx: "auto" }}
            >
              Our certified engineers are ready to design, install, and support
              your parking barrier system.
            </Typography>
            <Stack
              direction={"row"}
              gap={3}
              flexWrap={"wrap"}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: primaryColor,
                  borderRadius: "50px",
                  px: 2,
                  py: 1,
                  textTransform: "none",
                  fontSize: "1rem",
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
                  px: 2,
                  py: 1,
                  textTransform: "none",
                  fontSize: "0.85rem",
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
              direction={"row"}
              gap={[2, 4]}
              justifyContent="center"
              sx={{ mt: 6 }}
              flexWrap={"wrap"}
            >
              <Typography sx={{ color: offWhiteColor }} maxWidth={180}>
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
    </Box>
  );
};

export default ServicesDetail;
