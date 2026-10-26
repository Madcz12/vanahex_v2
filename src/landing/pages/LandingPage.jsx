import React from 'react'
import { Navbar } from '../../ui'
import {
  HeroSection,
  ServicesSection,
  WhatsAppSection,
  ProjectCasesSection,
  PricingSection,
  DirectorySection,
  ContactSection,
  FooterSection,
} from '../components'

export const LandingPage = () => {
  return (
    <div className="vx-landing-wrapper">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhatsAppSection />
        <ProjectCasesSection />
        <PricingSection />
        <DirectorySection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  )
}
