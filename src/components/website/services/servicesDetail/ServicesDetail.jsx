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
} from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";

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
/* =========================
   SERVICES DATA
========================= */
const services = [
  {
    id: 1,
    title: "Network and Cable Solutions",
    description:
      "Network and cabling solutions provide reliable and secure data connectivity. Designed for scalability and performance. Proper infrastructure reduces downtime. Suitable for offices and residential buildings. Built according to industry standards.",
    image: "/images/home-banner/cables-1.jpg",
    divisions: [
      {
        title: "Structured Cabling",
        description:
          "Structured cabling supports data, voice, and video networks. It provides organized and scalable infrastructure. Improves performance and reliability. Simplifies maintenance and upgrades. Suitable for all building types.",
        image: "/images/cable5.jpg ",
        icon: <SecurityOutlinedIcon />,
      },
      {
        title: "Cable Management",
        description:
          "Cable management organizes and protects network cables. Improves safety and appearance. Reduces signal interference and damage. Facilitates easy troubleshooting. Essential for professional installations.",
        image: "/images/cable6.jpg ",
        icon: <SettingsOutlinedIcon />,
      },
      {
        title: "Network Revamping",
        description:
          "Network revamping upgrades outdated infrastructure. Improves speed, security, and efficiency. Minimizes downtime during upgrades. Adapts systems to modern requirements. Cost-effective modernization solution.",
        image: "/images/cable7.webp",
        icon: <HomeOutlinedIcon />,
      },
      {
        title: "CCTV Integration",
        description:
          "Seamless integration with CCTV systems including ANPR for enhanced parking security.",
        image: '/images/cable1.webp',
        icon: <CameraAltOutlinedIcon />,
      },
      {
        title: "Network Management",
        description:
          "Cloud-based management for multi-site installations with real-time alerts and reports.",
        image: '/images/cable2.jpg',
        icon: <LanOutlinedIcon />,
      },
      {
        title: "Installation & Maintenance",
        description:
          "Professional installation and 24/7 maintenance by certified technicians.",
        image: '/images/cable3.jpg',
        icon: <BuildOutlinedIcon />,
      },
    ],
    stats: [
      { label: "Projects Completed", value: "500+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Support Availability", value: "24/7" },
      { label: "Years of Experience", value: "15+" },
    ],

    features: [
      "Structured cabling for offices & buildings",
      "High-quality fiber & copper installations",
      "Neat cable management & labeling",
      "Scalable future-ready infrastructure",
    ],

    specs: [
      {
        label: "Cable Types",
        value: "Cat6, Cat6A, Fiber Optic",
        icons: SettingsOutlinedIcon,
      },
      { label: "Standards", value: "TIA/EIA, ISO", icons: SquareIcon },
      {
        label: "Applications",
        value: "Offices, Data Centers, Homes",
        icons: MarginOutlinedIcon,
      },
    ],

    useCases: [
      "Corporate Offices",
      "Data Centers",
      "Hospitals",
      "Residential Buildings",
      "Hotels",
      "Industrial Facilities",
    ],

    galleryImages: [
      {
        image: "/images/cable1.webp",
        caption: "Structured Cabling\nCommercial installation",
      },
      {
        image: "/images/cable2.jpg",
        caption: "Network Infrastructure\nOffice setup",
      },
      {
        image: "/images/cable3.jpg",
        caption: "Fiber Cabling\nHigh-speed networks",
      },
      {
        image: "/images/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
       {
        image: "/images/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
       {
        image: "/images/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
      {
        image: "/images/cable4.jpg",
        caption: "Cable Management\nClean routing",
      },
    ],

    integrationItems: [
      { label: "Network Switches", icon: <SettingsOutlinedIcon /> },
      { label: "Server Racks", icon: <ApartmentIcon /> },
      { label: "IP Cameras", icon: <CameraAltIcon /> },
      { label: "Wi-Fi Systems", icon: <WifiIcon /> },
    ],

    ctaText: "Request Cable Installation",
  },

  {
    id: 2,
    title: "Parking Management Solutions",
    description:
      "Parking management solutions optimize space usage and traffic flow. These systems improve user convenience and reduce congestion. Automation minimizes manual handling and errors. Solutions are scalable for small and large facilities. Suitable for malls, offices, and public parking areas.",
    image: "/images/home-banner/parking-barrier.jpg",
    divisions: [
      {
        title: "Automatic Parking Barriers",
        description:
          "Automatic parking barriers control vehicle movement efficiently. They improve parking safety and organization. Designed for high-traffic locations. Can integrate with ticketing or access systems. Reliable and durable in daily operation.",
        image: "/images/parking1.jpg ",
        icon: <SecurityOutlinedIcon />,
      },
      {
        title: "Parking Guidance Systems",
        description:
          "Parking guidance systems help drivers locate available slots quickly. Sensors and displays reduce search time and congestion. These systems improve overall parking efficiency. Commonly used in commercial complexes. Easy to maintain and operate.",
        image: "/images/parking2.jpeg ",
        icon: <SettingsOutlinedIcon />,
      },
      {
        title: "Ticketing and Payment Systems",
        description:
          "Ticketing systems automate entry, exit, and billing processes. They support cashless and digital payment options. Reduce manual effort and operational errors. Improve revenue tracking and reporting. Seamlessly integrate with parking infrastructure.",
        image: "/images/parking3.jpg ",
        icon: <HomeOutlinedIcon />,
      },
      {
        title: "ANPR Systems",
        description:
          "Automatic Number Plate Recognition systems enable ticketless vehicle access. They improve security and monitoring accuracy. Suitable for commercial and restricted areas. Provide real-time data and reporting. Enhance operational efficiency.",
        image: "/images/parking2.jpeg ",
        icon: <HomeOutlinedIcon />,
      },
      {
        title: "CCTV Integration",
        description:
          "Seamless integration with CCTV systems including ANPR for enhanced parking security.",
        image: '/images/parking6.jpeg',
        icon: <CameraAltOutlinedIcon />,
      },
      {
        title: "Network Management",
        description:
          "Cloud-based management for multi-site installations with real-time alerts and reports.",
        image: '/images/parking7.jpg',
        icon: <LanOutlinedIcon />,
      },
    ],
    stats: [
      { label: "Projects Completed", value: "500+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Support Availability", value: "24/7" },
      { label: "Years of Experience", value: "15+" },
    ],
    features: [
      "Automatic boom & flap barriers",
      "RFID, ticket & ANPR integration",
      "High-speed motor operation",
      "Weather-resistant design",
    ],

    specs: [
      {
        label: "Barrier Type",
        value: "Boom, Flap, Bollard",
        icons: SettingsOutlinedIcon,
      },
      {
        label: "Control Options",
        value: "RFID, Remote, Ticketing",
        icons: SquareIcon,
      },
      {
        label: "Usage",
        value: "Commercial & Residential",
        icons: MarginOutlinedIcon,
      },
    ],

    integrationItems: [
      { label: "Parking Management", icon: <LocalParkingIcon /> },
      { label: "Access Cards", icon: <CreditCardIcon /> },
      { label: "ANPR Cameras", icon: <CameraAltIcon /> },
      { label: "Remote Monitoring", icon: <WifiIcon /> },
    ],

    useCases: [
      "Shopping Malls",
      "Office Parking",
      "Residential Societies",
      "Hospitals",
      "Hotels",
    ],

    galleryImages: [
      {
        image: "/images/parking4.jpeg",
        caption: "Boom Barrier\nCommercial parking",
      },
      {
        image: "/images/parking5.jpg",
        caption: "Access Control\nEntry management",
      },
      {
        image: "/images/parking6.jpeg",
        caption: "ANPR Integration\nSmart parking",
      },
      {
        image: "/images/parking7.jpg",
        caption: "Automated Exit\nHigh traffic flow",
      },
        {
        image: "/images/parking4.jpeg",
        caption: "Boom Barrier\nCommercial parking",
      },
      {
        image: "/images/parking5.jpg",
        caption: "Access Control\nEntry management",
      },
      {
        image: "/images/parking6.jpeg",
        caption: "ANPR Integration\nSmart parking",
      },
      {
        image: "/images/parking7.jpg",
        caption: "Automated Exit\nHigh traffic flow",
      },
        {
        image: "/images/parking4.jpeg",
        caption: "Boom Barrier\nCommercial parking",
      },
      {
        image: "/images/parking5.jpg",
        caption: "Access Control\nEntry management",
      },
      {
        image: "/images/parking6.jpeg",
        caption: "ANPR Integration\nSmart parking",
      },
      {
        image: "/images/parking7.jpg",
        caption: "Automated Exit\nHigh traffic flow",
      },  {
        image: "/images/parking4.jpeg",
        caption: "Boom Barrier\nCommercial parking",
      },
      {
        image: "/images/parking5.jpg",
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
    divisions: [
      {
        title: "CCTV Camera Systems",
        description:
          "CCTV systems provide 24/7 video surveillance. Support indoor and outdoor monitoring. Improve security and incident investigation. Allow remote viewing and recording. Available in IP and analog options.",
        image: "/images/security1.jpg ",
        icon: <SecurityOutlinedIcon />,
      },
      {
        title: "Walk-Through Security Terminals",
        description:
          "Walk-through terminals ensure controlled security screening. Commonly used in high-security locations and events. They detect unauthorized items effectively. Improve safety compliance. Designed for continuous usage.",
        image: "/images/security2.jpg ",
        icon: <SettingsOutlinedIcon />,
      },
      {
        title: "Intrusion and Alarm Systems",
        description:
          "Intrusion alarms detect unauthorized access attempts. Provide instant alerts and notifications. Improve round-the-clock property security. Can be integrated with CCTV systems. Suitable for homes and businesses.",
        image: "/images/security3.jpg ",
        icon: <HomeOutlinedIcon />,
      },
      {
        title: "Intercom and Video Door Phones",
        description:
          "Intercom systems allow secure visitor communication. Video functionality improves access verification. Enhance entry management and safety. Suitable for apartments and offices. Easy to operate and maintain.",
        icon: <HomeOutlinedIcon />,
        image:"/images/security5.jpeg ",
      },
      {
        title: "CCTV Integration",
        description:
          "Seamless integration with CCTV systems including ANPR for enhanced parking security.",
        image: '/images/security6.jpeg',
        icon: <CameraAltOutlinedIcon />,
      },
      {
        title: "Network Management",
        description:
          "Cloud-based management for multi-site installations with real-time alerts and reports.",
        image: '/images/security7.jpeg',
        icon: <LanOutlinedIcon />,
      },
    ],
    stats: [
      { label: "Projects Completed", value: "500+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Support Availability", value: "24/7" },
      { label: "Years of Experience", value: "15+" },
    ],
    features: [
      "HD & AI-based surveillance cameras",
      "24/7 monitoring & recording",
      "Remote access via mobile & web",
      "Scalable security architecture",
    ],

    specs: [
      {
        label: "Camera Types",
        value: "IP, PTZ, Dome, Bullet",
        icons: SettingsOutlinedIcon,
      },
      { label: "Recording", value: "NVR / Cloud Storage", icons: SquareIcon },
      {
        label: "Monitoring",
        value: "Local & Remote",
        icons: MarginOutlinedIcon,
      },
    ],

    integrationItems: [
      { label: "Mobile Monitoring", icon: <PhoneIphoneIcon /> },
      { label: "Access Control", icon: <CreditCardIcon /> },
      { label: "Alarm Systems", icon: <ApartmentIcon /> },
      { label: "Cloud Storage", icon: <WifiIcon /> },
    ],

    useCases: [
      "Banks",
      "Retail Stores",
      "Warehouses",
      "Offices",
      "Residential Buildings",
    ],

    galleryImages: [
      {
        image: "/images/security4.jpeg",
        caption: "CCTV Installation\nIndoor surveillance",
      },
      {
        image: "/images/security5.jpeg",
        caption: "Outdoor Cameras\nPerimeter security",
      },
      {
        image: "/images/security6.jpeg",
        caption: "Monitoring Room\nLive feeds",
      },
      {
        image: "/images/security7.jpeg",
        caption: "AI Detection\nSmart alerts",
      },
      {
        image: "/images/security4.jpeg",
        caption: "CCTV Installation\nIndoor surveillance",
      },
      {
        image: "/images/security5.jpeg",
        caption: "Outdoor Cameras\nPerimeter security",
      },
      {
        image: "/images/security6.jpeg",
        caption: "Monitoring Room\nLive feeds",
      },
      {
        image: "/images/security7.jpeg",
        caption: "AI Detection\nSmart alerts",
      },
      {
        image: "/images/security4.jpeg",
        caption: "CCTV Installation\nIndoor surveillance",
      },
      {
        image: "/images/security5.jpeg",
        caption: "Outdoor Cameras\nPerimeter security",
      },
      {
        image: "/images/security6.jpeg",
        caption: "Monitoring Room\nLive feeds",
      },
      {
        image: "/images/security7.jpeg",
        caption: "AI Detection\nSmart alerts",
      },
      {
        image: "/images/security4.jpeg",
        caption: "CCTV Installation\nIndoor surveillance",
      },
      {
        image: "/images/security5.jpeg",
        caption: "Outdoor Cameras\nPerimeter security",
      },
     
    ],

    ctaText: "Request Security Solution",
  },

  {
    id: 4,
    title: "Building Maintenance Services",
    description:
      "Building maintenance services ensure the smooth functioning, safety, and long-term durability of residential, commercial, and industrial properties. These services focus on preventive care, quick repairs, and operational efficiency. Regular maintenance reduces breakdown risks and unexpected expenses. Solutions are customized according to building size and usage. Skilled professionals ensure quality and compliance with standards.",
    image: "/images/maintainance1.jpg",
    divisions: [
      {
        title: "Electrical Maintenance",
        description:
          "Electrical maintenance involves inspection, repair, and replacement of wiring, panels, and fixtures. It ensures uninterrupted power supply and minimizes electrical hazards. Preventive checks help avoid short circuits and equipment failure. All work follows safety and regulatory standards. Suitable for residential, commercial, and industrial buildings.",
        image: "/images/maintainance2.jpeg ",
        icon: <SecurityOutlinedIcon />,
      },
      {
        title: "Plumbing and Water Systems",
        description:
          "Plumbing services include maintenance of pipelines, pumps, water tanks, and drainage systems. The focus is on preventing leaks, blockages, and pressure issues. Regular inspections reduce water wastage and structural damage. Emergency repair services are also available. Durable materials ensure long-term reliability.",
        image: "/images/maintenance3.jpeg ",
        icon: <SettingsOutlinedIcon />,
      },
      {
        title: "HVAC Maintenance",
        description:
          "HVAC maintenance ensures efficient performance of air conditioning and ventilation systems. Services include cleaning, gas refilling, and system optimization. Well-maintained HVAC systems improve indoor air quality. Routine servicing reduces energy consumption and breakdowns. Ideal for homes, offices, and commercial spaces.",
        image: "/images/maintainance5.jpeg ",
        icon: <HomeOutlinedIcon />,
      },
      {
        title: "General Civil Maintenance",
        description:
          "Civil maintenance covers minor repairs, painting, tiling, and structural finishing work. It helps maintain the building’s appearance and safety. Cracks and wear are addressed before they worsen. Quality materials are used for durability. These services enhance property value and aesthetics.",
        image: "/images/maintainance4.jpeg ",
        icon: <HomeOutlinedIcon />,
      },
      {
        title: "Preventive Maintenance Programs",
        description:
          "Preventive maintenance programs are designed to detect issues early. Scheduled inspections minimize downtime and major repair costs. Maintenance records and reports are regularly updated. Programs are customized to building requirements. This approach ensures long-term operational stability.",
        image: "/images/maintainance7.jpeg ",
        icon: <HomeOutlinedIcon />,
      },
      {
        title: "Installation & Maintenance",
        description:
          "Professional installation and 24/7 maintenance by certified technicians.We ensure all systems function optimally year-round.Additional support includes emergency repairs and routine check-ups.",
        image: '/images/maintainance2.jpeg',
        icon: <BuildOutlinedIcon />,
      },
    ],
    stats: [
      { label: "Projects Completed", value: "500+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Support Availability", value: "24/7" },
      { label: "Years of Experience", value: "15+" },
    ],
    features: [
      "Electrical & mechanical maintenance",
      "Preventive & corrective services",
      "Emergency response support",
      "Facility management solutions",
    ],

    specs: [
      {
        label: "Service Type",
        value: "Preventive & Corrective",
        icons: SettingsOutlinedIcon,
      },
      {
        label: "Coverage",
        value: "Residential & Commercial",
        icons: SquareIcon,
      },
      {
        label: "Availability",
        value: "24/7 Support",
        icons: MarginOutlinedIcon,
      },
    ],

    integrationItems: [
      { label: "HVAC Systems", icon: <ApartmentIcon /> },
      { label: "Electrical Systems", icon: <SettingsOutlinedIcon /> },
      { label: "Safety Systems", icon: <CameraAltIcon /> },
    ],

    useCases: [
      "Office Buildings",
      "Shopping Malls",
      "Hospitals",
      "Residential Towers",
    ],

    galleryImages: [
      {
        image: "/images/maintainance5.jpeg",
        caption: "Facility Maintenance\nRoutine checks",
      },
      {
        image: "/images/maintainance6.jpeg",
        caption: "Electrical Works\nSystem upgrades",
      },
      {
        image: "/images/maintainance7.jpeg",
        caption: "HVAC Service\nCooling systems",
      },
      {
        image: "/images/maintainance8.jpeg",
        caption: "Emergency Repair\nRapid response",
      },
        {
        image: "/images/maintainance5.jpeg",
        caption: "Facility Maintenance\nRoutine checks",
      },
      {
        image: "/images/maintainance6.jpeg",
        caption: "Electrical Works\nSystem upgrades",
      },
      {
        image: "/images/maintainance7.jpeg",
        caption: "HVAC Service\nCooling systems",
      },
      {
        image: "/images/maintainance8.jpeg",
        caption: "Emergency Repair\nRapid response",
      },
        {
        image: "/images/maintainance5.jpeg",
        caption: "Facility Maintenance\nRoutine checks",
      },
      {
        image: "/images/maintainance6.jpeg",
        caption: "Electrical Works\nSystem upgrades",
      },
      {
        image: "/images/maintainance7.jpeg",
        caption: "HVAC Service\nCooling systems",
      },
      {
        image: "/images/maintainance8.jpeg",
        caption: "Emergency Repair\nRapid response",
      },
        {
        image: "/images/maintainance5.jpeg",
        caption: "Facility Maintenance\nRoutine checks",
      },
      {
        image: "/images/maintainance6.jpeg",
        caption: "Electrical Works\nSystem upgrades",
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
    divisions: [
      {
        title: "Access Control Systems",
        description:
          "Access control systems regulate entry using cards, biometrics, or PIN codes. They provide centralized monitoring and access logs. These systems improve security and accountability. Easily scalable for multiple doors. Ideal for offices, buildings, and gated communities.",
        image: "/images/lock1.jpeg ",
        icon: <SecurityOutlinedIcon />,
      },
      {
        title: "Road Barriers and Rollers",
        description:
          "Road barriers and rollers control vehicle entry and exit points. They enhance traffic management and site security. Automated systems ensure smooth and fast operation. Commonly used in parking areas and commercial zones. Built for high-traffic environments.",
        image: "/images/lock2.jpeg ",
        icon: <SettingsOutlinedIcon />,
      },
      {
        title: "Advance Locking Mechanisms",
        description:
          "Advanced locking mechanisms use electronic and mechanical components for enhanced security. Features include auto-locking, tamper alerts, and emergency override. Designed for durability and reliability. Suitable for high-security applications. Easy to integrate with existing systems.",
        image: "/images/lock3.jpeg ",
        icon: <SettingsOutlinedIcon />,
      },
      {
        title: "CCTV Integration",
        description:
          "Seamless integration with CCTV systems including ANPR for enhanced parking security.",
        image: '/images/lock4.jpg',
        icon: <CameraAltOutlinedIcon />,
      },
      {
        title: "Network Management",
        description:
          "Cloud-based management for multi-site installations with real-time alerts and reports.",
        image: '/images/lock5.jpeg',
        icon: <LanOutlinedIcon />,
      },
      {
        title: "Installation & Maintenance",
        description:
          "Professional installation and 24/7 maintenance by certified technicians.",
        image: '/images/lock6.jpeg',
        icon: <BuildOutlinedIcon />,
      },
    ],
    stats: [
      { label: "Projects Completed", value: "500+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Support Availability", value: "24/7" },
      { label: "Years of Experience", value: "15+" },
    ],
    features: [
      "Keyless entry systems",
      "Mobile & biometric access",
      "High-security encryption",
      "Modern & durable designs",
    ],

    specs: [
      {
        label: "Access Type",
        value: "Fingerprint, PIN, Mobile",
        icons: SettingsOutlinedIcon,
      },
      { label: "Connectivity", value: "Bluetooth / Wi-Fi", icons: SquareIcon },
      {
        label: "Applications",
        value: "Homes & Offices",
        icons: MarginOutlinedIcon,
      },
    ],

    integrationItems: [
      { label: "Mobile App", icon: <PhoneIphoneIcon /> },
      { label: "Smart Home", icon: <ApartmentIcon /> },
      { label: "Access Logs", icon: <CreditCardIcon /> },
    ],

    useCases: ["Residential Homes", "Apartments", "Hotels", "Office Cabins"],

    galleryImages: [
      {
        image: "/images/lock4.jpg",
        caption: "Smart Lock\nResidential setup",
      },
      {
        image: "/images/lock5.jpeg",
        caption: "Biometric Access\nOffice security",
      },
      {
        image: "/images/lock6.jpeg",
        caption: "Mobile Control\nRemote access",
      },
      {
        image: "/images/lock7.jpeg",
        caption: "Keyless Entry\nModern locking",
      },
      {
        image: "/images/lock4.jpg",
        caption: "Smart Lock\nResidential setup",
      },
      {
        image: "/images/lock5.jpeg",
        caption: "Biometric Access\nOffice security",
      },
      {
        image: "/images/lock6.jpeg",
        caption: "Mobile Control\nRemote access",
      },
      {
        image: "/images/lock7.jpeg",
        caption: "Keyless Entry\nModern locking",
      },
      {
        image: "/images/lock4.jpg",
        caption: "Smart Lock\nResidential setup",
      },
      {
        image: "/images/lock5.jpeg",
        caption: "Biometric Access\nOffice security",
      },
      {
        image: "/images/lock6.jpeg",
        caption: "Mobile Control\nRemote access",
      },
      {
        image: "/images/lock7.jpeg",
        caption: "Keyless Entry\nModern locking",
      },
      {
        image: "/images/lock4.jpg",
        caption: "Smart Lock\nResidential setup",
      },
      {
        image: "/images/lock5.jpeg",
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
    divisions: [
      {
        title: "Automatic Gates",
        description:
          "Automatic swing and sliding gates provide secure and controlled entry. They can be operated using remotes, sensors, or access cards. These gates are built for frequent usage and durability. Suitable for homes, offices, and industrial facilities. Weather-resistant designs ensure long service life.",
        image: "/images/automation1.jpg ",
        icon: <SecurityOutlinedIcon />,
      },
      {
        title: "Automatic Garage Shutters",
        description:
          "Automatic garage shutters offer secure and space-efficient access. Motorized operation allows smooth and effortless use. They improve property safety and convenience. Suitable for residential and commercial parking areas. Built using strong and durable materials.",
        image: "/images/automation2.jpeg ",
        icon: <SettingsOutlinedIcon />,
      },
      {
        title: "Window Shutters",
        description:
          "Window shutters provide protection against unauthorized access and weather conditions. Available in manual and automated options. They help reduce noise and improve insulation. Designed to match modern architectural needs. Suitable for homes and commercial buildings.",
        image: "/images/automation3.jpeg ",
        icon: <HomeOutlinedIcon />,
      },
      {
        title: "CCTV Integration",
        description:
          "Seamless integration with CCTV systems including ANPR for enhanced parking security.",
        image: '/images/automation4.jpg',
        icon: <CameraAltOutlinedIcon />,
      },
      {
        title: "Network Management",
        description:
          "Cloud-based management for multi-site installations with real-time alerts and reports.",
        image: '/images/automation5.jpeg',
        icon: <LanOutlinedIcon />,
      },
      {
        title: "Installation & Maintenance",
        description:
          "Professional installation and 24/7 maintenance by certified technicians.",
        image: '/images/automation6.jpeg',
        icon: <BuildOutlinedIcon />,
      },
    ],
    stats: [
      { label: "Projects Completed", value: "500+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Support Availability", value: "24/7" },
      { label: "Years of Experience", value: "15+" },
    ],
    features: [
      "Centralized access management",
      "RFID, biometric & mobile control",
      "Seamless system integration",
      "Scalable automation solutions",
    ],

    specs: [
      {
        label: "Control Types",
        value: "RFID, Biometric, Mobile",
        icons: SettingsOutlinedIcon,
      },
      {
        label: "Integration",
        value: "CCTV, Parking, Doors",
        icons: SquareIcon,
      },
      {
        label: "Usage",
        value: "Commercial & Residential",
        icons: MarginOutlinedIcon,
      },
    ],

    integrationItems: [
      { label: "Smart Doors", icon: <ApartmentIcon /> },
      { label: "CCTV Systems", icon: <CameraAltIcon /> },
      { label: "Parking Control", icon: <LocalParkingIcon /> },
      { label: "Mobile Access", icon: <PhoneIphoneIcon /> },
    ],

    useCases: [
      "Corporate Offices",
      "Residential Societies",
      "Industrial Facilities",
    ],

    galleryImages: [
      {
        image: "/images/automation4.jpg",
        caption: "Access Control\nSecure entry",
      },
      {
        image: "/images/automation5.jpeg",
        caption: "Automation Panels\nCentral control",
      },
      {
        image: "/images/automation6.jpeg",
        caption: "RFID Systems\nFast access",
      },
      {
        image: "/images/automation7.jpeg",
        caption: "Integrated Security\nSmart buildings",
      },
      {
        image: "/images/automation4.jpg",
        caption: "Access Control\nSecure entry",
      },
      {
        image: "/images/automation5.jpeg",
        caption: "Automation Panels\nCentral control",
      },
      {
        image: "/images/automation6.jpeg",
        caption: "RFID Systems\nFast access",
      },
      {
        image: "/images/automation7.jpeg",
        caption: "Integrated Security\nSmart buildings",
      },
      {
        image: "/images/automation4.jpg",
        caption: "Access Control\nSecure entry",
      },
      {
        image: "/images/automation5.jpeg",
        caption: "Automation Panels\nCentral control",
      },
      {
        image: "/images/automation6.jpeg",
        caption: "RFID Systems\nFast access",
      },
      {
        image: "/images/automation7.jpeg",
        caption: "Integrated Security\nSmart buildings",
      },
      {
        image: "/images/automation4.jpg",
        caption: "Access Control\nSecure entry",
      },
      {
        image: "/images/automation5.jpeg",
        caption: "Automation Panels\nCentral control",
      },
     
    ],

    ctaText: "Request Automation Solution",
  },

  {
    id: 7,
    title: "Wireless Solutions",
    description:
      "Wireless solutions provide high-performance and seamless connectivity. Designed for wide coverage and stability. Improve mobility and productivity. Suitable for offices, buildings, and campuses. Secure and scalable deployment.",
    image: "/images/wireless6.jpeg",
    divisions: [
      {
        title: "Wireless Network Setup",
        description:
          "Wireless network setup ensures strong signal coverage and reliability. Access points are placed strategically. Supports multiple devices efficiently. Improves user experience. Designed for secure performance.",
        image: "/images/wireless.jpeg ",
        icon: <SecurityOutlinedIcon />,
      },
      {
        title: "Network Optimization and Security",
        description:
          "Network optimization improves speed and reliability. Security measures protect against cyber threats. Includes firewall and bandwidth management. Enhances overall network performance. Ideal for business environments.",
        image: "/images/wireless2.jpeg ",
        icon: <SettingsOutlinedIcon />,
      },
      {
        title: "Longrange Wi-Fi Solutions",
        description:
          "Long-range Wi-Fi solutions extend connectivity over large areas. Suitable for campuses and outdoor spaces. Utilizes high-gain antennas and repeaters. Ensures stable connections. Supports multiple users simultaneously.",
        image: "/images/wireless3.jpeg ",
        icon: <HomeOutlinedIcon />,
      },
      {
        title: "CCTV Integration",
        description:
          "Seamless integration with CCTV systems including ANPR for enhanced parking security.",
        image: '/images/wireless4.jpeg',
        icon: <CameraAltOutlinedIcon />,
      },
      {
        title: "Network Management",
        description:
          "Cloud-based management for multi-site installations with real-time alerts and reports.",
        image: '/images/wireless5.jpeg',
        icon: <LanOutlinedIcon />,
      },
      {
        title: "Installation & Maintenance",
        description:
          "Professional installation and 24/7 maintenance by certified technicians.",
        image: '/images/wireless6.jpeg',
        icon: <BuildOutlinedIcon />,
      },
    ],
    stats: [
      { label: "Projects Completed", value: "500+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Support Availability", value: "24/7" },
      { label: "Years of Experience", value: "15+" },
    ],
    features: [
      "Enterprise Wi-Fi deployment",
      "High-speed internet coverage",
      "Secure wireless access",
      "Scalable network design",
    ],

    specs: [
      {
        label: "Technology",
        value: "Wi-Fi 6 / Mesh",
        icons: SettingsOutlinedIcon,
      },
      { label: "Coverage", value: "Indoor & Outdoor", icons: SquareIcon },
      {
        label: "Security",
        value: "WPA3 Encryption",
        icons: MarginOutlinedIcon,
      },
    ],

    integrationItems: [
      { label: "Network Switches", icon: <SettingsOutlinedIcon /> },
      { label: "Cloud Management", icon: <WifiIcon /> },
      { label: "Security Systems", icon: <CameraAltIcon /> },
    ],

    useCases: ["Offices", "Hotels", "Campuses", "Retail Spaces"],

    galleryImages: [
      {
        image: "/images/wireless4.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
      },
      {
        image: "/images/wireless5.jpeg",
        caption: "Outdoor Access Points\nWide range",
      },
      {
        image: "/images/wireless6.jpeg",
        caption: "Network Setup\nHigh performance",
      },
      {
        image: "/images/wireless7.jpeg",
        caption: "Wireless Monitoring\nLive analytics",
      },
       {
        image: "/images/wireless4.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
      },
      {
        image: "/images/wireless5.jpeg",
        caption: "Outdoor Access Points\nWide range",
      },
      {
        image: "/images/wireless6.jpeg",
        caption: "Network Setup\nHigh performance",
      },
      {
        image: "/images/wireless7.jpeg",
        caption: "Wireless Monitoring\nLive analytics",
      },
       {
        image: "/images/wireless4.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
      },
      {
        image: "/images/wireless5.jpeg",
        caption: "Outdoor Access Points\nWide range",
      },
      {
        image: "/images/wireless6.jpeg",
        caption: "Network Setup\nHigh performance",
      },
      {
        image: "/images/wireless7.jpeg",
        caption: "Wireless Monitoring\nLive analytics",
      },
       {
        image: "/images/wireless4.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
      },
      {
        image: "/images/wireless5.jpeg",
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

    divisions: [
      {
        title: "Motorized Window Blinds",
        description:
          "Motorized window blinds offer effortless control using remotes or smart devices. Provide smooth and silent operation. Ideal for large windows and modern interiors. Enhance convenience and luxury.",
        image: "/images/wireless.jpeg ",
        icon: <SecurityOutlinedIcon />,
      },
      {
        title: "Manual Window Blinds",
        description:
          "Manual blinds provide reliable and cost-effective light control. Available in various styles and materials. Easy to operate and maintain. Suitable for residential and office spaces.",
        image: "/images/wireless2.jpeg ",
        icon: <SettingsOutlinedIcon />,
      },
      {
        title: "Smart Blind Automation",
        description:
          "Smart blind automation allows scheduling and remote control. Integrates with smart home systems. Improves energy efficiency and convenience. Ideal for modern buildings.",
        image: "/images/wireless3.jpeg ",
        icon: <HomeOutlinedIcon />,
      },
      {
        title: "Smart Home Integration",
        description:
          "Window blinds integrate seamlessly with smart home platforms. Enables voice control and automation routines. Enhances comfort and energy savings.",
        image: '/images/residential4.jpeg',
        icon: <CameraAltOutlinedIcon />,
      },
      {
        title: "Centralized Control",
        description:
          "Centralized control systems manage multiple blinds simultaneously. Suitable for offices, hotels, and large residences. Improves operational efficiency.",
        image: '/images/residential5.jpeg',
        icon: <LanOutlinedIcon />,
      },
      {
        title: "Installation & Maintenance",
        description:
          "Expert installation ensures smooth functionality. Maintenance services ensure durability and performance. Includes adjustments and replacements.",
        image: '/images/residential3.jpeg',
        icon: <BuildOutlinedIcon />,
      },
    ],

    features: [
      "Light & privacy control",
      "Motorized & manual options",
      "Smart home compatibility",
      "Modern and elegant designs",
    ],

    specs: [
      {
        label: "Blind Types",
        value: "Roller, Vertical, Venetian",
        icons: SettingsOutlinedIcon,
      },
      {
        label: "Control",
        value: "Manual, Remote, Smart App",
        icons: SquareIcon,
      },
      {
        label: "Applications",
        value: "Homes & Offices",
        icons: MarginOutlinedIcon,
      },
    ],

    integrationItems: [
      { label: "Smart Home Systems", icon: <SettingsOutlinedIcon /> },
      { label: "Mobile Control", icon: <WifiIcon /> },
      { label: "Automation Platforms", icon: <CameraAltIcon /> },
    ],
    galleryImages: [
      {
        image: "/images/wireless4.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
      },
      {
        image: "/images/wireless5.jpeg",
        caption: "Outdoor Access Points\nWide range",
      },
      {
        image: "/images/wireless6.jpeg",
        caption: "Network Setup\nHigh performance",
      },
      {
        image: "/images/wireless7.jpeg",
        caption: "Wireless Monitoring\nLive analytics",
      },
      {
        image: "/images/wireless4.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
      },
      {
        image: "/images/wireless5.jpeg",
        caption: "Outdoor Access Points\nWide range",
      },
      {
        image: "/images/wireless6.jpeg",
        caption: "Network Setup\nHigh performance",
      },
      {
        image: "/images/wireless7.jpeg",
        caption: "Wireless Monitoring\nLive analytics",
      },
      {
        image: "/images/wireless4.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
      },
      {
        image: "/images/wireless5.jpeg",
        caption: "Outdoor Access Points\nWide range",
      },
      {
        image: "/images/wireless6.jpeg",
        caption: "Network Setup\nHigh performance",
      },
      {
        image: "/images/wireless7.jpeg",
        caption: "Wireless Monitoring\nLive analytics",
      },
      {
        image: "/images/wireless4.jpeg",
        caption: "Wi-Fi Deployment\nOffice coverage",
      },
      {
        image: "/images/wireless5.jpeg",
        caption: "Outdoor Access Points\nWide range",
      },
    ],

    useCases: [
      "Residential Homes",
      "Office Spaces",
      "Hotels",
      "Commercial Buildings",
    ],

    ctaText: "Request Window Blinds Solution",
  },
  {
    id: 9,
    title: "Garage Doors",
    description:
      "Garage door solutions provide secure, durable, and convenient access for residential, commercial, and industrial properties. These systems combine robust construction with smooth automated operation. Designed to enhance safety, aesthetics, and daily usability. Suitable for parking areas, warehouses, and private garages. Built for long-term reliability and minimal maintenance.",

    image: "/images/home-banner/garage-door-1.webp",

    divisions: [
      {
        title: "Automatic Garage Doors",
        description:
          "Automatic garage doors offer smooth and secure entry using motorized systems. They can be operated via remote control, wall switches, or smart devices. Designed for frequent use with safety sensors and locking mechanisms. Ideal for homes, apartments, and commercial garages. Built to withstand heavy usage and weather conditions.",
        image: "/images/automation1.jpg ",
        icon: <SecurityOutlinedIcon />,
      },
      {
        title: "Rolling Shutter Garage Doors",
        description:
          "Rolling shutter garage doors provide space-saving and high-security access. The vertical rolling design maximizes interior space. Motorized operation ensures effortless opening and closing. Suitable for residential garages, shops, and warehouses. Manufactured using strong and corrosion-resistant materials.",
        image: "/images/automation2.jpeg ",
        icon: <SettingsOutlinedIcon />,
      },
      {
        title: "Sectional Garage Doors",
        description:
          "Sectional garage doors open vertically and slide along ceiling tracks. They offer excellent insulation and smooth operation. Designed to improve energy efficiency and noise reduction. Suitable for modern homes and commercial facilities. Customizable designs match architectural styles.",
        image: "/images/automation3.jpeg ",
        icon: <HomeOutlinedIcon />,
      },
      {
        title: "Smart Garage Door Integration",
        description:
          "Smart integration enables remote monitoring and control of garage doors. Supports mobile apps, access logs, and safety alerts. Enhances convenience and security. Ideal for smart homes and commercial facilities.",
        image: '/images/automation4.jpg',
        icon: <CameraAltOutlinedIcon />,
      },
      {
        title: "Remote Monitoring & Control",
        description:
          "Remote monitoring allows real-time status checks and control from anywhere. Helps prevent unauthorized access. Suitable for multi-garage installations and commercial properties.",
        image: '/images/automation5.jpeg',
        icon: <LanOutlinedIcon />,
      },
      {
        title: "Installation & Maintenance",
        description:
          "Professional installation ensures smooth and safe operation. Regular maintenance extends system lifespan. Includes emergency support and performance inspections.",
        image: '/images/automation6.jpeg',
        icon: <BuildOutlinedIcon />,
      },
    ],

    features: [
      "Automated opening & closing",
      "High-strength and weather-resistant materials",
      "Smart & remote control compatibility",
      "Safe, smooth, and silent operation",
    ],

    specs: [
      {
        label: "Door Types",
        value: "Sectional, Rolling, Automatic",
        icons: SettingsOutlinedIcon,
      },
      {
        label: "Control Options",
        value: "Remote, Wall Switch, Mobile App",
        icons: SquareIcon,
      },
      {
        label: "Usage",
        value: "Residential & Commercial",
        icons: MarginOutlinedIcon,
      },
    ],

    integrationItems: [
      { label: "Smart Home Systems", icon: <ApartmentIcon /> },
      { label: "CCTV Systems", icon: <CameraAltIcon /> },
      { label: "Access Control", icon: <LocalParkingIcon /> },
      { label: "Mobile Access", icon: <PhoneIphoneIcon /> },
    ],
    galleryImages: [
      {
        image: "/images/automation4.jpg",
        caption: "Access Control\nSecure entry",
      },
      {
        image: "/images/automation5.jpeg",
        caption: "Automation Panels\nCentral control",
      },
      {
        image: "/images/automation6.jpeg",
        caption: "RFID Systems\nFast access",
      },
      {
        image: "/images/automation7.jpeg",
        caption: "Integrated Security\nSmart buildings",
      },
      {
        image: "/images/automation4.jpg",
        caption: "Access Control\nSecure entry",
      },
      {
        image: "/images/automation5.jpeg",
        caption: "Automation Panels\nCentral control",
      },
      {
        image: "/images/automation6.jpeg",
        caption: "RFID Systems\nFast access",
      },
      {
        image: "/images/automation7.jpeg",
        caption: "Integrated Security\nSmart buildings",
      },
      {
        image: "/images/automation4.jpg",
        caption: "Access Control\nSecure entry",
      },
      {
        image: "/images/automation5.jpeg",
        caption: "Automation Panels\nCentral control",
      },
      {
        image: "/images/automation6.jpeg",
        caption: "RFID Systems\nFast access",
      },
      {
        image: "/images/automation7.jpeg",
        caption: "Integrated Security\nSmart buildings",
      },
      {
        image: "/images/automation4.jpg",
        caption: "Access Control\nSecure entry",
      },
      {
        image: "/images/automation5.jpeg",
        caption: "Automation Panels\nCentral control",
      },
    ],

    useCases: [
      "Residential Garages",
      "Commercial Parking",
      "Warehouses",
      "Industrial Facilities",
    ],

    ctaText: "Request Garage Door Solution",
  },
];



/* =========================
   COMPONENT
========================= */
const ServicesDetail = () => {
  const params = useParams();
  const id = params?.id;
  const numericId = id ? Number.parseInt(id || "", 10) : NaN;

  const service = services.find((s) => s.id === numericId);
const getRowSpan = (index) => {
  // Tall cards pattern (matches the reference image)
  if ([2, 6, 9].includes(index)) return "span 2";
  if ([4, 10].includes(index)) return "span 2";
  return "span 1";
};
const getColSpan = (index) => {
    // First row → 5 images
    if (index < 5) return "span 4"; // 5 × 4 = 20

    // Second row → 5 images
    if (index < 10) return "span 4";

    // Third row → 4 images
    return "span 5"; // 4 × 5 = 20
  };

  return (
    <Box sx={{ backgroundColor: offWhiteColor, minHeight: "100vh" }}>
      {/* =====================
          BANNER (UNCHANGED)
      ====================== */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
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
        {/* Divisios and service provided */}
        <Container
          maxWidth="lg"
          sx={{ py: { xs: 6, md: 10 }, justifyContent: "center" }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Chip
              label="Provided Services"
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
            The Services We Offer
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
            Our comprehensive range of services is designed to meet all your We
            provide top-notch solutions tailored to your needs.
          </Typography>

          <Grid container spacing={4} justifyContent={"center"}>
            {(service?.divisions || []).map((item, index) => {
              return (
                <Grid xs={12} sm={6} md={4} key={index} maxWidth={350}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      overflow: "hidden",
                      transition: "all 0.4s ease",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                      cursor: "pointer",

                      "&:hover": {
                        boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
                        transform: "translateY(-6px)",

                        "& .card-image": {
                          transform: "scale(1.15)",
                        },
                      },
                    }}
                  >
                    {/* Image / Icon Section */}
                    <Box
                      sx={{
                        height: 180,
                        position: "relative",
                        backgroundColor: item.image ? "transparent" : "#f8f6f2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      {item.image ? (
                        <Box
                          component="img"
                          src={item.image}
                          alt={item.title}
                          className="card-image"
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease",
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 2,
                            bgcolor: "#eaeaea",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#1f2a44",
                          }}
                        >
                          {item.icon}
                        </Box>
                      )}
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        mb={1}
                        color="#0f1d3a"
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        lineHeight={1.6}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>

        {/* Stats Section */}
        <Box mt={10}>
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
                  width={250}
                  sx={{
                    px: 5,
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
            control, designed for commercial and residential parking facilities.
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
                    width={["90%", 350]}
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
                {service.integrationItems.map((item, index) => (
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
                {service.useCases.map((item, index) => (
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
                  Don’t see your use case? We offer customized barrier solutions
                  tailored to your specific requirements and infrastructure.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
       {/* Gallery */}
 <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Chip
          label="Gallery"
          sx={{
            bgcolor: "#f0f0f0",
            fontWeight: 600,
            borderRadius: "50px",
            px: 3,
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
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",   // mobile
            sm: "repeat(3, 1fr)",   // tablet
            md: "repeat(20, 1fr)",  // desktop (layout magic here)
          },
        }}
      >
        {(service?.galleryImages || []).map((img, index) => (
          <Box
            key={index}
            sx={{
              gridColumn: {
                xs: "span 1",
                sm: "span 1",
                md: getColSpan(index),
              },
              height: 220, // ✅ SAME HEIGHT FOR ALL IMAGES
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
              position: "relative",
              cursor: "pointer",
            }}
          >
            {/* Image */}
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
            <Typography variant="h3" sx={{ color: offWhiteColor, mb: 3 }}>
              Need this service?
            </Typography>
            <Typography
              sx={{ color: offWhiteColor, mb: 5, maxWidth: 600, mx: "auto" }}
            >
              Our certified engineers are ready to design, install, and support
              your parking barrier system.
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
    </Box>
  );
};

export default ServicesDetail;
