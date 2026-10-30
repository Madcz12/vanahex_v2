import React, { useEffect } from 'react'
import { Navbar } from '../../ui'
import {
  HeroSection,
  ProjectCasesSection,
  WhatsAppSection,
  PricingSection,
  DirectorySection,
  ContactSection,
  FooterSection,
  SectionDivider,
} from '../components'

export const LandingPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.vx-section-transition')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    elements.forEach((el) => observer.observe(el))

    // Handle hash anchors navigation
    const handleHash = () => {
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash)
        if (target) {
          const transitionParent = target.closest('.vx-section-transition') || target
          transitionParent.classList.add('is-visible')
        }
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', handleHash)
    }
  }, [])

  return (
    <div className="vx-landing-wrapper">
      <Navbar />
      <main>
        <HeroSection />

        <SectionDivider variant="mint" />

        <div className="vx-section-transition">
          <ProjectCasesSection />
        </div>

        <SectionDivider variant="cyan" />

        <div className="vx-section-transition">
          <WhatsAppSection />
        </div>

        <SectionDivider variant="purple" />

        <div className="vx-section-transition">
          <PricingSection />
        </div>

        <SectionDivider variant="cyan" />

        <div className="vx-section-transition">
          <DirectorySection />
        </div>

        <SectionDivider variant="mint" />

        <div className="vx-section-transition">
          <ContactSection />
        </div>
      </main>
      <FooterSection />
    </div>
  )
}

