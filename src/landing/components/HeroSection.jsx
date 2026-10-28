import React from 'react'
import { heroSectors, globalBadges, paymentMethods } from '../data'
import './HeroSection.css'

export const HeroSection = () => {
  return (
    <section className="vx-hero position-relative overflow-hidden">
      {/* Decorative gradient glow backgrounds */}
      <div className="vx-hero-glow-top"></div>
      <div className="vx-hero-glow-right"></div>

      <div className="container py-lg-5 position-relative">
        <div className="row align-items-center">
          {/* Left Column: Text, CTAs and Badges overlaid over background */}
          <div className="col-lg-8 col-xl-7">
            {/* Country Badges Pill */}
            <div className="d-inline-flex flex-wrap align-items-center gap-2 px-3 py-1 mb-4 rounded-pill vx-global-pill">
              <span className="vx-pulse-dot me-1"></span>
              <span className="small fw-semibold text-mint">Plataforma Global</span>
              <span className="text-muted">•</span>
              {globalBadges.map((badge, idx) => (
                <span key={idx} className="small text-light">
                  {badge.flag} {badge.name}
                  {idx < globalBadges.length - 1 && <span className="text-muted ms-2">•</span>}
                </span>
              ))}
            </div>

            {/* Main Heading */}
            <h1 className="vx-hero-title mb-4">
              Agenda de citas, bot de WhatsApp y{' '}
              <span className="vx-text-gradient-mint">web propia para tu negocio</span>
            </h1>

            {/* Description */}
            <p className="vx-hero-desc text-secondary mb-4 fs-5">
              Controla citas, inventario, ventas y comisiones mientras nuestro{' '}
              <strong className="text-white">Bot de WhatsApp 24/7</strong> agenda turnos de forma autónoma
              y atrae clientes en tu ciudad con tu{' '}
              <strong className="text-white">Página Web Propia</strong> y presencia en el Directorio Comercial Internacional.
            </p>

            {/* Sectors tags */}
            <div className="d-flex flex-wrap gap-2 mb-5">
              {heroSectors.map((sector) => (
                <span key={sector.label} className="vx-sector-tag">
                  <i className={`bi ${sector.icon} me-1`}></i>
                  {sector.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
              <a href="#contacto" className="vx-btn vx-btn-mint px-4 py-3 fs-6 fw-bold">
                <i className="bi bi-rocket-takeoff-fill"></i>
                Activar Negocio
              </a>
              <a href="#casos" className="vx-btn vx-btn-primary px-4 py-3 fs-6 fw-bold">
                <i className="bi bi-play-circle-fill"></i>
                Probar Demo en Vivo
              </a>
              <a href="#casos" className="vx-btn vx-btn-secondary px-4 py-3 fs-6">
                <i className="bi bi-briefcase-fill text-gold"></i>
                Ver Caso Real Barbería
              </a>
            </div>

            {/* Payment methods & trust badges row (bottom badges superposed) */}
            <div className="vx-hero-bottom-badges d-inline-flex flex-wrap align-items-center gap-3 gap-md-4 py-2 px-3 rounded-pill mt-2">
              {paymentMethods.map((pm, idx) => (
                <span key={idx} className="d-flex align-items-center gap-2 small text-light">
                  <i className={`bi ${pm.icon} text-mint`}></i>
                  {pm.label}
                </span>
              ))}
              <span className="d-flex align-items-center gap-1 text-secondary small">
                <i className="bi bi-shield-check text-mint"></i>
                Sin Permanencia
              </span>
            </div>
          </div>

          {/* Right Column spacer: showcases the monitor in the background image */}
          <div className="col-lg-4 col-xl-5 d-none d-lg-block"></div>
        </div>
      </div>
    </section>
  )
}
