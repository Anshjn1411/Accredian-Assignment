"use client";

import { useState } from "react";

// Layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Sections
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import AccredianEdge from "@/components/sections/AccredianEdge";
import DomainExpertise from "@/components/sections/DomainExpertise";
import CourseSegmentation from "@/components/sections/CourseSegmentation";
import WhoShouldJoin from "@/components/sections/WhoShouldJoin";
import CATFramework from "@/components/sections/CATFramework";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQs from "@/components/sections/FAQs";
import Testimonials from "@/components/sections/Testimonials";

// UI
import EnquiryForm from "@/components/ui/EnquiryForm";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <Navbar onEnquireClick={openForm} />

      <main>
        <Hero onEnquireClick={openForm} />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <WhoShouldJoin />
        <CATFramework />
        <HowItWorks />
        <FAQs onEnquireClick={openForm} />
        <Testimonials />
      </main>

      <Footer onEnquireClick={openForm} />
      <EnquiryForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
}
