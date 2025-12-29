import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/landing/HeroSection';

import FeaturesSection from '../components/landing/FeaturesSection';
import WhatProblemWeSolve from '../components/landing/WhatProblemWeSolve';
import CTASection from '../components/landing/CTASection';

export default function Landing() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatProblemWeSolve/>
      <FeaturesSection />
      <CTASection/>
      <Footer />
    </>
  );
}
