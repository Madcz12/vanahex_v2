import React from 'react'
import { Navbar } from '../../ui'
import {
  HeroSection,
  ProjectCasesSection,
  WhatsAppSection,
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
        <ProjectCasesSection />
        <WhatsAppSection />
        <PricingSection />
        <DirectorySection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  )
}
