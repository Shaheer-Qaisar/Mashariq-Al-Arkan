'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      // 🔧 You can tweak these defaults
      duration: 800,      // animation duration in ms
      once: true,         // animation happens only once
      easing: 'ease-out', // easing for animations
    });

    // Optional: refresh on route change or dynamic content
    // AOS.refresh();

  }, []);

  // This component doesn't render anything
  return null;
}
