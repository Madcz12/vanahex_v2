import React, { useState, useEffect } from 'react'
import { Navbar } from '../../ui'
import { FooterSection } from '../components'
import './VanahexBarraPage.css'

export const VanahexBarraPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Reset scroll to hero & close lightbox on Escape key
  useEffect(() => {
    window.scrollTo(0, 0)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Screens and interfaces from public/vanahex_barra
  const screens = [
    {
      src: '/vanahex_barra/oasis_caja.webp',
      badge: 'MÓDULO DE CAJA & FACTURACIÓN',
      badgeColor: 'mint',
      title: 'Gestión de Caja, Mesas y Cuentas Abiertas',
      desc: 'Supervisión en vivo de salones, terrazas y barras. Permite ver cuentas activas con su importe acumulado, separar cuentas por persona o artículo, aplicar invitaciones y cobrar al instante.',
      isVertical: false,
    },
    {
      src: '/vanahex_barra/oasis_orden1.webp',
      badge: 'EXPERIENCIA MÓVIL · QR DE MESA',
      badgeColor: 'yellow',
      title: 'Carta Digital y Pedidos Autónomos por QR',
      desc: 'El comensal escanea el código QR de su mesa y accede a la carta completa con fotos, precios y suplementos. Puede pedir cócteles o platos directamente, llamar al camarero o pedir la cuenta desde su propio teléfono.',
      isVertical: true,
    },
    {
      src: '/vanahex_barra/oasis_barra.webp',
      badge: 'COMANDERA DE SERVICIO RÁPIDO',
      badgeColor: 'blue',
      title: 'Comandera Táctil para Camareros y Barra',
      desc: 'Toma rápida de pedidos con botones táctiles de cócteles, destilados, cervezas y tapas. El camarero asigna el pedido a cualquier mesa o barra con 2 toques y lo envía en tiempo real.',
      isVertical: false,
    },
    {
      src: '/vanahex_barra/oasis_pedidos.webp',
      badge: 'SISTEMA KDS DE COCINA Y DESPACHO',
      badgeColor: 'purple',
      title: 'Pantalla de Despacho en Tiempo Real',
      desc: 'Separación inteligente de comandas: la barra recibe la coctelería y la cocina recibe los platos. Incluye cronómetro de espera por comanda y botón de un clic para marcar pedidos "Listos para servir".',
      isVertical: false,
    },
  ]

  const pillars = [
    {
      icon: 'bi-phone',
      color: 'mint',
      title: 'Comandera en tu móvil',
      desc: 'Tus camareros atienden desde cualquier smartphone sin comprar terminales caras.',
    },
    {
      icon: 'bi-qr-code-scan',
      color: 'yellow',
      title: 'Pedidos por QR de mesa',
      desc: 'Tus clientes piden cócteles o comida desde su mesa sin esperar que el camarero se acerque.',
    },
    {
      icon: 'bi-display',
      color: 'blue',
      title: 'KDS Cocina y Barra',
      desc: 'Cada estación recibe solo sus pedidos con avisos sonoros y estados en tiempo real.',
    },
    {
      icon: 'bi-cash-coin',
      color: 'purple',
      title: 'Caja rápida y arqueo',
      desc: 'Cierre ciego de turno, división de cuentas por comensal y cobro con múltiples formas de pago.',
    },
  ]

  return (
    <div className="vx-landing-wrapper vx-case-study-page">
      <Navbar />

      <main className="vx-case-page-content">
        {/* Breadcrumb & Navigation */}
        <section className="vx-case-hero-section">
          <div className="container">
            <div className="mb-4">
              <a href="/#casos" className="vx-back-link">
                <i className="bi bi-arrow-left"></i>
                <span>Volver a Casos de Éxito</span>
              </a>
            </div>

            {/* Hero Main Header */}
            <div className="row align-items-center g-5">
              <div className="col-lg-8">
                <div className="d-inline-flex align-items-center mb-3">
                  <span className="vx-badge vx-badge-mint">
                    <i className="bi bi-trophy-fill me-2"></i>
                    NUEVO · BARES, RESTAURANTES Y CACHIMBERÍAS
                  </span>
                </div>

                <h1 className="vx-heading vx-heading-xl text-white mb-3">
                  VANAHEX Barra: la caja, las comandas y los pedidos por QR de tu local
                </h1>

                <p className="vx-case-hero-desc text-secondary mb-4">
                  El camarero toma el pedido en su móvil, la caja lo ve al instante y la cocina recibe solo lo suyo. Tus clientes también pueden pedir escaneando el QR de su mesa. Con tu logo, tu carta y la moneda de tu país. Sin comprar terminales caras: funciona en el móvil, la tablet y el ordenador que ya tienes.
                </p>

                {/* Primary Actions */}
                <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
                  <a
                    href="https://vanahex.lat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vx-btn vx-btn-primary"
                  >
                    <i className="bi bi-play-circle-fill"></i>
                    <span>Probar la demo en vivo</span>
                  </a>

                  <a
                    href="https://wa.me/34614138144?text=Hola%20VANAHEX,%20quiero%20probar%20VANAHEX%20Barra%20gratis%20para%20mi%20local"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vx-btn vx-btn-secondary"
                  >
                    <i className="bi bi-whatsapp text-mint"></i>
                    <span>Pedir prueba gratis de 15 días</span>
                  </a>
                </div>

                {/* Demo Credentials Alert Banner */}
                <div className="vx-demo-pin-callout">
                  <div className="d-flex align-items-center gap-2">
                    <span className="vx-pulse-dot"></span>
                    <strong className="text-white small">Acceso a la demo:</strong>
                  </div>
                  <div className="vx-demo-pin-tags">
                    <span className="vx-pin-tag">PIN <strong>2580</strong> (Caja)</span>
                    <span className="vx-pin-tag">PIN <strong>1111</strong> (Camarero)</span>
                    <span className="vx-pin-tag">PIN <strong>3333</strong> (Cocina/Barra)</span>
                  </div>
                </div>
              </div>

              {/* Case Stats Card */}
              <div className="col-lg-4">
                <div className="vx-case-stats-card p-4 rounded-4">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="vx-case-client-avatar">
                      <i className="bi bi-cup-straw"></i>
                    </div>
                    <div>
                      <h5 className="text-white mb-0 fw-bold">Oasis Lounge & GastroBar</h5>
                      <span className="text-mint small">Caso en Producción Activa</span>
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-3">
                    <div className="vx-stat-row">
                      <span className="text-secondary small">Inversión en hardware</span>
                      <strong className="text-mint fs-5">0 €</strong>
                    </div>
                    <div className="vx-stat-row">
                      <span className="text-secondary small">Despliegue e instalación</span>
                      <strong className="text-white fs-5">Menos de 24h</strong>
                    </div>
                    <div className="vx-stat-row">
                      <span className="text-secondary small">Sincronización de pedidos</span>
                      <strong className="text-white fs-5">Instantánea (Socket)</strong>
                    </div>
                    <div className="vx-stat-row">
                      <span className="text-secondary small">Ahorro en tiempos de servicio</span>
                      <strong className="text-warning fs-5">~35% más rápido</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars Section */}
        <section className="vx-section py-5">
          <div className="container">
            <div className="row g-4">
              {pillars.map((item, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="vx-pillar-card p-4 rounded-4 h-100">
                    <div className={`vx-pillar-icon bg-${item.color}-subtle text-${item.color} mb-3`}>
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

        {/* Masonry Grid Gallery Section */}
        <section className="vx-section vx-masonry-section py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="vx-badge vx-badge-mint mb-2">GALERÍA DE INTERFACES EN VIVO</span>
              <h2 className="vx-heading vx-heading-lg text-white">
                Pantallas reales de <span className="vx-text-gradient-mint">VANAHEX Barra</span>
              </h2>
              <p className="text-secondary max-w-750 mx-auto">
                Diseñado para la velocidad extrema del servicio en locales nocturnos, terrazas y salones con alta rotación. Haz clic en cualquier imagen para verla en pantalla completa.
              </p>
            </div>

            {/* Masonry Grid Container */}
            <div className="vx-masonry-grid">
              {screens.map((screen, idx) => (
                <div
                  key={idx}
                  className={`vx-masonry-item ${screen.isVertical ? 'is-vertical' : ''}`}
                  onClick={() => setSelectedImage(screen)}
                >
                  <div className="vx-masonry-card">
                    <div className="vx-masonry-img-wrapper">
                      <img
                        src={screen.src}
                        alt={screen.title}
                        className="vx-masonry-img"
                        loading="lazy"
                      />
                      <div className="vx-masonry-hover-overlay">
                        <div className="vx-zoom-pill">
                          <i className="bi bi-arrows-fullscreen me-2"></i>
                          <span>Ampliar interfaz</span>
                        </div>
                      </div>
                    </div>

                    <div className="vx-masonry-caption p-4">
                      <span className={`vx-badge vx-badge-${screen.badgeColor} mb-2`}>
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
        <section className="vx-section py-5">
          <div className="container">
            <div className="vx-case-cta-banner p-4 p-lg-5 rounded-4 text-center">
              <span className="vx-badge vx-badge-yellow mb-3">¿TIENES UN BAR, RESTAURANTE O DISCOTECA?</span>
              <h2 className="vx-heading vx-heading-md text-white mb-3">
                Digitaliza tu servicio esta misma semana sin permanencias
              </h2>
              <p className="text-secondary max-w-700 mx-auto mb-4">
                Lo dejamos instalado, configuramos tu carta con fotos y precios, y te damos 15 días gratis para que compruebes la rapidez en tu propio local.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a
                  href="https://wa.me/34614138144?text=Hola%20VANAHEX,%20quiero%20información%20sobre%20VANAHEX%20Barra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vx-btn vx-btn-primary"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Hablar con un especialista</span>
                </a>
                <a
                  href="/#casos"
                  className="vx-btn vx-btn-secondary"
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
          className="vx-lightbox-backdrop"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="vx-lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="vx-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar vista completa"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="vx-lightbox-img-box">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="vx-lightbox-img"
              />
            </div>

            <div className="vx-lightbox-info p-3 p-md-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className={`vx-badge vx-badge-${selectedImage.badgeColor}`}>
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
