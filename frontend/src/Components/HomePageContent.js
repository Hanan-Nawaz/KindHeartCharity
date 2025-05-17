import React from 'react';
import Carousel from './Carousel';
import FeaturedBlocks from './FeaturedBlocks';
import OurStorySection from './OurStorySection';
import AboutFounder from './AboutFounder';
import CtaSection from './CtaSection';
import JoinUsSection from './JoinUs';
import ContactSection from './ContactSection';

const HomePageContent = () => {
  return (
    <div>
      <Carousel />
      <FeaturedBlocks />
      <OurStorySection />
      <AboutFounder />
      <CtaSection />
      <JoinUsSection />
      <ContactSection />
    </div>
  );
};

export default HomePageContent;
