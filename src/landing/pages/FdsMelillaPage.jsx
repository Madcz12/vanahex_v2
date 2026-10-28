import React, { useState, useEffect } from 'react'
import { Navbar } from '../../ui'
import { FooterSection } from '../components'
import './FdsMelillaPage.css'

export const FdsMelillaPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Official Demo URL
  const demoUrl = 'https://fdsmelilla.vanahex.lat/'

  // Gallery Screens from public/fds_melilla
  const screens = [
    {
      src: '/fds_melilla/fds1.webp',
      badge: 'PORTADA & CAPTACIÓN',
      badgeColor: 'skyblue',
      title: 'Hero Corporativo & Llamada a la Acción Inmediata',
      desc: 'Diseño limpio y moderno con propuesta de valor directa: climatización y reformas en Melilla con acceso directo a llamada telefónica y chat de WhatsApp en un toque.',
      isVertical: false,
    },
    {
      src: '/fds_melilla/fds2.webp',
      badge: 'SERVICIOS & SOLUCIONES',
      badgeColor: 'silver',
      title: 'Especialidades: Aire Acondicionado y Obras',
      desc: 'Estructura modular clara que presenta las líneas de servicio: instalación, mantenimiento de equipos de frío/calor, reformas integrales y rehabilitación de fachadas.',
      isVertical: false,
    },
    {
      src: '/fds_melilla/fds3.webp',
      badge: 'LOCALIZACIÓN & CONTACTO',
      badgeColor: 'skyblue',
      title: 'Ubicación de Nave en Melilla y Canales Directos',
      desc: 'Módulo de contacto con dirección física en Calle de la Violeta 14 (Nave 7), integración con Google Maps, horario de atención y solicitud de presupuesto.',
      isVertical: false,
    },
    {
      src: '/fds_melilla/melilla_img.webp',
      badge: 'IDENTIDAD VISUAL',
      badgeColor: 'silver',
      title: 'Banner Corporativo & Optimización de Carga',
      desc: 'Fotografía optimizada en formato WebP de alta fidelidad, asegurando tiempos de carga inferiores a 1 segundo en redes móviles de toda la ciudad.',
      isVertical: false,
    },
  ]

  // Pillars of the solution
  const pillars = [
    {
      icon: 'bi-snow',
      colorClass: 'bg-fds-skyblue-subtle text-fds-skyblue',
      title: 'Climatización & Frío',
      desc: 'Instalación y mantenimiento de aire acondicionado, conductos, cassettes y sistemas industriales.',
    },
    {
      icon: 'bi-bricks',
      colorClass: 'bg-fds-silver-subtle text-fds-silver',
      title: 'Reformas & Obras',
      desc: 'Rehabilitación de fachadas, aislamiento térmico, pintura y obras completas para hogares y locales.',
    },
    {
      icon: 'bi-whatsapp',
      colorClass: 'bg-fds-skyblue-subtle text-fds-skyblue',
      title: 'Presupuesto por WhatsApp',
      desc: 'El cliente pide presupuesto directamente al WhatsApp del instalador sin rellenar formularios largos.',
    },
    {
      icon: 'bi-lightning-charge-fill',
      colorClass: 'bg-fds-silver-subtle text-fds-silver',
      title: 'Publicada en 24 Horas',
      desc: 'Despliegue exprés con dominio seguro HTTPS, SEO local en Google y diseño adaptable a cualquier pantalla.',
    },
  ]

  return (
    <div className="vx-landing-wrapper vx-fds-page">
      <Navbar />

      <main className="vx-fds-page-content">
        {/* Breadcrumb & Navigation */}
        <section className="vx-fds-hero-section">
          {/* Ethereal Rings & Glow Background Decoration (matching reference) */}
          <div className="vx-fds-hero-bg-decoration" aria-hidden="true">
            <svg viewBox="0 0 1200 800" preserveAspectRatio="xMaxYMid slice" fill="none">
              {/* Outer soft glow ring */}
              <circle cx="1060" cy="400" r="520" stroke="url(#fdsCyanGlow)" strokeWidth="1.5" opacity="0.35" />
              {/* Main outer ring */}
              <circle cx="1060" cy="400" r="440" stroke="url(#fdsRingMain)" strokeWidth="2.5" opacity="0.65" />
              {/* Thick translucent band */}
              <circle cx="1060" cy="400" r="355" stroke="url(#fdsRingBand)" strokeWidth="48" opacity="0.16" />
              {/* Inner ring */}
              <circle cx="1060" cy="400" r="330" stroke="url(#fdsRingMain)" strokeWidth="2.5" opacity="0.8" />
              {/* Deep inner subtle ring */}
              <circle cx="1060" cy="400" r="230" stroke="url(#fdsRingMain)" strokeWidth="1.5" opacity="0.45" />

              <defs>
                <linearGradient id="fdsRingMain" x1="600" y1="0" x2="1100" y2="800" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#38bdf8" />
                  <stop offset="0.45" stopColor="#0ea5e9" />
                  <stop offset="0.8" stopColor="#0284c7" />
                  <stop offset="1" stopColor="#0369a1" />
                </linearGradient>
                <linearGradient id="fdsRingBand" x1="600" y1="100" x2="1100" y2="700" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#38bdf8" />
                  <stop offset="0.5" stopColor="#22d3ee" />
                  <stop offset="1" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="fdsCyanGlow" x1="500" y1="0" x2="1100" y2="600" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#bae6fd" />
                  <stop offset="1" stopColor="#0284c7" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="mb-4">
              <a href="/#casos" className="vx-back-link-fds">
                <i className="bi bi-arrow-left"></i>
                <span>Volver a Casos de Éxito</span>
              </a>
            </div>

            {/* Hero Main Header (Single Wide Column, Card Removed) */}
            <div className="row">
              <div className="col-lg-10 col-xl-9">
                <div className="d-inline-flex align-items-center mb-3">
                  <span className="vx-badge-fds-skyblue">
                    <i className="bi bi-patch-check-fill me-2 text-info"></i>
                    NUEVO CLIENTE · CLIMATIZACIÓN Y REFORMAS EN MELILLA
                  </span>
                </div>

                <h1 className="vx-heading vx-heading-xl mb-3">
                  <span className="vx-text-gradient-skyblue-silver">FDS Melilla:</span> Web Corporativa, Climatización y Captación Directa
                </h1>

                <p className="vx-fds-hero-desc mb-4">
                  Desarrollo de presencia digital para FDS Melilla, empresa especialista en instalación de aire acondicionado, climatización industrial y reformas de viviendas y fachadas. Un sitio web moderno, rápido y enfocado en conversión: teléfono a un clic y presupuestos rápidos vía WhatsApp.
                </p>

                {/* Primary Actions */}
                <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vx-btn-fds-primary"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                    <span>Ver web oficial en vivo</span>
                  </a>

                  <a
                    href="https://wa.me/34614138144?text=Hola%20VANAHEX,%20quiero%20una%20web%20para%20mi%20empresa%20como%20FDS%20Melilla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vx-btn-fds-secondary"
                  >
                    <i className="bi bi-whatsapp"></i>
                    <span>Pedir presupuesto por WhatsApp</span>
                  </a>
                </div>

                {/* Demo Callout Box */}
                <div className="vx-fds-demo-callout mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <span className="vx-pulse-dot" style={{ background: '#38bdf8' }}></span>
                    <strong className="text-fds-skyblue small">Sitio web oficial:</strong>
                  </div>
                  <div className="vx-fds-demo-tags">
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vx-fds-tag text-decoration-none"
                    >
                      <i className="bi bi-link-45deg me-1"></i>
                      <strong>fdsmelilla.vanahex.lat</strong>
                    </a>
                    <span className="vx-fds-tag">
                      <i className="bi bi-geo-alt-fill me-1 text-danger"></i>
                      C/ Violeta 14, Nave 7, Melilla
                    </span>
                    <span className="vx-fds-tag">
                      <i className="bi bi-check-circle-fill me-1 text-success"></i>
                      En producción activa
                    </span>
                  </div>
                </div>

                {/* Trust Badges matching reference */}
                <div className="vx-fds-trust-badges d-flex flex-wrap gap-3 gap-md-4 align-items-center pt-2">
                  <span className="text-secondary small d-flex align-items-center gap-2">
                    <i className="bi bi-check2 text-fds-skyblue fs-5"></i>
                    <span>Particulares y empresas</span>
                  </span>
                  <span className="text-secondary small d-flex align-items-center gap-2">
                    <i className="bi bi-check2 text-fds-skyblue fs-5"></i>
                    <span>Certificación RITE</span>
                  </span>
                  <span className="text-secondary small d-flex align-items-center gap-2">
                    <i className="bi bi-check2 text-fds-skyblue fs-5"></i>
                    <span>Presupuesto sin compromiso</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars Section */}
        <section className="vx-section vx-fds-pillars-section py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="vx-badge-fds-silver mb-2">INFRAESTRUCTURA Y SERVICIOS</span>
              <h2 className="vx-heading vx-heading-lg text-white">
                Soluciones integrales para particulares y <span className="vx-text-gradient-skyblue-silver">empresas en Melilla</span>
              </h2>
              <p className="text-fds-silver-muted max-w-700 mx-auto">
                Diseñado para transmitir máxima solvencia técnica, seriedad y rapidez en la atención de averías, nuevas instalaciones y proyectos de obra.
              </p>
            </div>

            <div className="row g-4">
              {pillars.map((item, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="vx-fds-pillar-card p-4 rounded-4 h-100">
                    <div className={`vx-fds-pillar-icon ${item.colorClass} mb-3`}>
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <h5 className="text-white fw-bold mb-2">{item.title}</h5>
                    <p className="text-secondary small mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Masonry / Gallery Screens Showcase */}
        <section className="vx-section vx-fds-gallery-section py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="vx-badge-fds-skyblue mb-2">GALERÍA DE SECCIONES</span>
              <h2 className="vx-heading vx-heading-lg text-white">
                Pantallas reales de la web de <span className="vx-text-gradient-skyblue-silver">FDS Melilla</span>
              </h2>
              <p className="text-fds-silver-muted max-w-750 mx-auto">
                Capturas directas de las secciones del sitio web oficial. Haz clic en cualquiera de las imágenes para ampliarla en detalle.
              </p>
            </div>

            {/* Gallery Grid Container */}
            <div className="vx-fds-gallery-grid">
              {screens.map((screen, idx) => (
                <div
                  key={idx}
                  className="vx-fds-gallery-item"
                  onClick={() => setSelectedImage(screen)}
                >
                  <div className="vx-fds-gallery-card">
                    <div className="vx-fds-img-wrapper">
                      <img
                        src={screen.src}
                        alt={screen.title}
                        className="vx-fds-gallery-img"
                        loading="lazy"
                      />
                      <div className="vx-fds-hover-overlay">
                        <div className="vx-fds-zoom-pill">
                          <i className="bi bi-arrows-fullscreen me-2"></i>
                          <span>Ver sección ampliada</span>
                        </div>
                      </div>
                    </div>

                    <div className="vx-fds-gallery-caption p-4">
                      <span className={`vx-badge-fds-${screen.badgeColor} mb-2`}>
                        {screen.badge}
                      </span>
                      <h4 className="text-white fw-bold mb-2 fs-5">{screen.title}</h4>
                      <p className="text-secondary small mb-0">{screen.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="vx-section vx-fds-cta-section py-5">
          <div className="container">
            <div className="vx-fds-cta-banner p-4 p-lg-5 rounded-4 text-center">
              <span className="vx-badge-fds-skyblue mb-3">¿TIENES UNA EMPRESA DE INSTALACIONES O REFORMAS?</span>
              <h2 className="vx-heading vx-heading-md text-white mb-3">
                Consigue una web profesional con captación directa en menos de 24 horas
              </h2>
              <p className="text-fds-silver-muted max-w-700 mx-auto mb-4">
                Creamos tu sitio corporativo con tu logo, catálogo de trabajos y contacto directo por WhatsApp para que no pierdas ningún cliente en tu ciudad.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vx-btn-fds-primary"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  <span>Ver web de FDS Melilla</span>
                </a>
                <a
                  href="https://wa.me/34614138144?text=Hola%20VANAHEX,%20quiero%20digitalizar%20mi%20empresa%20como%20FDS%20Melilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vx-btn-fds-secondary"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Hablar con un asesor</span>
                </a>
                <a
                  href="/#casos"
                  className="vx-back-link-fds"
                >
                  <i className="bi bi-arrow-left"></i>
                  <span>Ver más proyectos</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="vx-fds-lightbox-backdrop"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="vx-fds-lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="vx-fds-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar vista completa"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="vx-fds-lightbox-img-box">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="vx-fds-lightbox-img"
              />
            </div>

            <div className="vx-fds-lightbox-info p-3 p-md-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className={`vx-badge-fds-${selectedImage.badgeColor}`}>
                  {selectedImage.badge}
                </span>
              </div>
              <h4 className="text-white fw-bold mb-1">{selectedImage.title}</h4>
              <p className="text-secondary small mb-0">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
