import React, { useState, useEffect } from 'react'
import { Navbar } from '../../ui'
import { FooterSection } from '../components'
import './VanahexTiendaPage.css'

export const VanahexTiendaPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // WhatsApp contact link with tailored message
  const whatsappUrl =
    'https://wa.me/34614138144?text=Hola%20VANAHEX,%20me%20interesa%20el%20TPV%20VANAHEX%20Tienda%20para%20mi%20comercio'

  // Gallery Screens from public/alimentacion_plaza
  const screens = [
    {
      src: '/alimentacion_plaza/ali_plaza_main.webp',
      badge: 'PUNTO DE VENTA & LECTOR',
      badgeColor: 'orange',
      title: 'Punto de Venta Ágil & Búsqueda Instantánea',
      desc: 'Interfaz táctil y de escaneo continuo: cobra al instante pasando productos por el lector de códigos de barras, busca por nombre o categoría y añade artículos a peso sin demoras.',
      isVertical: false,
    },
    {
      src: '/alimentacion_plaza/aliplaza_ventas.webp',
      badge: 'CAJA & TICKETS',
      badgeColor: 'amber',
      title: 'Gestión de Tickets, Cobros y Formas de Pago',
      desc: 'Pantalla de cobro veloz con desglose claro de líneas, cambio automático en efectivo, pagos mixtos (tarjeta, efectivo o Bizum), arqueo de caja e impresión inmediata de ticket.',
      isVertical: false,
    },
    {
      src: '/alimentacion_plaza/aliplaza_prodtable.webp',
      badge: 'CONTROL DE STOCK & EXCEL',
      badgeColor: 'orange',
      title: 'Tabla Maestra de Productos, Costes y Stock',
      desc: 'Control integral de existencias con descuento automático por cada venta. Carga masiva de artículos desde Excel, registro de entradas de mercancía y cálculo del margen de beneficio real.',
      isVertical: false,
    },
    {
      src: '/alimentacion_plaza/aliplaza_panelmovil.webp',
      badge: 'SUPERVISIÓN MULTIDISPOSITIVO',
      badgeColor: 'amber',
      title: 'Panel Móvil para Inventario y Métricas',
      desc: 'Acceso completo desde cualquier smartphone o tablet con Chrome: revisa las ventas del día en tiempo real, consulta stock o realiza inventario físico en tienda sin ocupar el mostrador.',
      isVertical: false,
    },
  ]

  // Pillars of the solution
  const pillars = [
    {
      icon: 'bi-upc-scan',
      colorClass: 'bg-tienda-orange-subtle text-tienda-orange',
      title: 'Lector de Códigos & Peso',
      desc: 'Pasas el producto por el lector y entra en el ticket. Soporta lectura láser/USB, códigos EAN y productos a peso para fruterías y alimentación.',
    },
    {
      icon: 'bi-box-seam',
      colorClass: 'bg-tienda-amber-subtle text-tienda-amber',
      title: 'Stock Automático & Alertas',
      desc: 'Cada venta descuenta existencias en vivo y el sistema te avisa cuando un producto se está acabando para reponer antes de quedarte sin existencias.',
    },
    {
      icon: 'bi-file-earmark-spreadsheet',
      colorClass: 'bg-tienda-orange-subtle text-tienda-orange',
      title: 'Carga Masiva desde Excel',
      desc: 'Carga todos tus productos de golpe desde un archivo Excel: referencias, precios, categorías y códigos sin tener que escribirlos uno a uno.',
    },
    {
      icon: 'bi-graph-up-arrow',
      colorClass: 'bg-tienda-amber-subtle text-tienda-amber',
      title: 'Margen Real & Caja',
      desc: 'Registra la mercancía que te llega con sus costes de compra y visualiza el margen de ganancia real y el beneficio neto de tu negocio.',
    },
  ]

  return (
    <div className="vx-landing-wrapper vx-tienda-page">
      <Navbar />

      <main className="vx-tienda-page-content">
        {/* Breadcrumb & Hero Section */}
        <section className="vx-tienda-hero-section">
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="mb-4">
              <a href="/#casos" className="vx-back-link-tienda">
                <i className="bi bi-arrow-left"></i>
                <span>Volver a Casos de Éxito</span>
              </a>
            </div>

            {/* Hero Main Header */}
            <div className="row">
              <div className="col-lg-7 col-xl-6">
                <div className="d-inline-flex align-items-center mb-3">
                  <span className="vx-badge-tienda-orange">
                    <i className="bi bi-shop me-2 text-warning"></i>
                    NUEVO · TPV PARA TIENDAS, FRUTERÍAS Y ALIMENTACIÓN
                  </span>
                </div>

                <h1 className="vx-heading vx-heading-xl mb-3">
                  <span className="vx-text-gradient-tienda">VANAHEX Tienda:</span> Cobra con Lector y Stock al Día
                </h1>

                <p className="vx-tienda-hero-desc mb-4">
                  Pasas el producto por el lector y entra directo en el ticket; la fruta y verdura se cobran a peso. Cada venta descuenta el stock y el programa te avisa de lo que se está acabando. Cargas todos tus productos de golpe desde un Excel, registras la mercancía entrante y ves tu margen de ganancia real. Todo en la nube, funcional en cualquier TPV, ordenador o tablet con Chrome.
                </p>

                {/* Primary Actions */}
                <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vx-btn-tienda-primary"
                  >
                    <i className="bi bi-whatsapp"></i>
                    <span>Solicitar demo y presupuesto</span>
                  </a>

                  <a
                    href="/#planes"
                    className="vx-btn-tienda-secondary"
                  >
                    <i className="bi bi-tag-fill"></i>
                    <span>Ver planes y precios</span>
                  </a>
                </div>

                {/* Demo Callout Box */}
                <div className="vx-tienda-demo-callout mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <span className="vx-pulse-dot" style={{ background: '#FF7518' }}></span>
                    <strong className="text-tienda-orange small">Caso piloto en producción:</strong>
                  </div>
                  <div className="vx-tienda-demo-tags">
                    <span className="vx-tienda-tag">
                      <i className="bi bi-geo-alt-fill me-1 text-danger"></i>
                      <strong>Alimentación Plaza</strong>
                    </span>
                    <span className="vx-tienda-tag">
                      <i className="bi bi-upc me-1 text-primary"></i>
                      Lector de Códigos USB & Báscula
                    </span>
                    <span className="vx-tienda-tag">
                      <i className="bi bi-cloud-check-fill me-1 text-success"></i>
                      Cloud Web · Chrome Ready
                    </span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="vx-tienda-trust-badges d-flex flex-wrap gap-3 gap-md-4 align-items-center pt-2">
                  <span className="text-secondary small d-flex align-items-center gap-2">
                    <i className="bi bi-check2 text-tienda-orange fs-5"></i>
                    <span>Sin comprar terminales caras</span>
                  </span>
                  <span className="text-secondary small d-flex align-items-center gap-2">
                    <i className="bi bi-check2 text-tienda-orange fs-5"></i>
                    <span>Carga masiva desde Excel</span>
                  </span>
                  <span className="text-secondary small d-flex align-items-center gap-2">
                    <i className="bi bi-check2 text-tienda-orange fs-5"></i>
                    <span>Control de stock y margen real</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars Section */}
        <section className="vx-section vx-tienda-pillars-section py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="vx-badge-tienda-amber mb-2">INFRAESTRUCTURA Y FUNCIONES</span>
              <h2 className="vx-heading vx-heading-lg">
                Todo lo que tu comercio necesita para vender rápido y <span className="vx-text-gradient-tienda">no perder dinero en stock</span>
              </h2>
              <p className="text-tienda-muted max-w-700 mx-auto">
                Diseñado para el ritmo real de tiendas, ultramarinos y fruterías: agilidad máxima en mostrador, facilidad de uso sin formación compleja y supervisión total para el dueño.
              </p>
            </div>

            <div className="row g-4">
              {pillars.map((item, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="vx-tienda-pillar-card p-4 rounded-4 h-100">
                    <div className={`vx-tienda-pillar-icon ${item.colorClass} mb-3`}>
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <h5 className="vx-tienda-pillar-title fw-bold mb-2">{item.title}</h5>
                    <p className="text-secondary small mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Masonry / Gallery Screens Showcase */}
        <section className="vx-section vx-tienda-gallery-section py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="vx-badge-tienda-orange mb-2">GALERÍA DE PANTALLAS</span>
              <h2 className="vx-heading vx-heading-lg">
                Capturas reales del sistema <span className="vx-text-gradient-tienda">VANAHEX Tienda</span>
              </h2>
              <p className="text-tienda-muted max-w-750 mx-auto">
                Descubre cómo funciona la interfaz de cobro, el inventario con Excel y la supervisión móvil. Haz clic en cualquiera de las imágenes para ampliarla en detalle.
              </p>
            </div>

            {/* Gallery Grid Container */}
            <div className="vx-tienda-gallery-grid">
              {screens.map((screen, idx) => (
                <div
                  key={idx}
                  className="vx-tienda-gallery-item"
                  onClick={() => setSelectedImage(screen)}
                >
                  <div className="vx-tienda-gallery-card">
                    <div className="vx-tienda-img-wrapper">
                      <img
                        src={screen.src}
                        alt={screen.title}
                        className="vx-tienda-gallery-img"
                        loading="lazy"
                      />
                      <div className="vx-tienda-hover-overlay">
                        <div className="vx-tienda-zoom-pill">
                          <i className="bi bi-arrows-fullscreen me-2"></i>
                          <span>Ver pantalla ampliada</span>
                        </div>
                      </div>
                    </div>

                    <div className="vx-tienda-gallery-caption p-4">
                      <span className={`vx-badge-tienda-${screen.badgeColor} mb-2`}>
                        {screen.badge}
                      </span>
                      <h4 className="vx-tienda-card-heading fw-bold mb-2 fs-5">{screen.title}</h4>
                      <p className="text-secondary small mb-0">{screen.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="vx-section vx-tienda-cta-section py-5">
          <div className="container">
            <div className="vx-tienda-cta-banner p-4 p-lg-5 rounded-4 text-center">
              <span className="vx-badge-tienda-orange mb-3">¿TIENES UNA TIENDA, FRUTERÍA O SUPERMERCADO?</span>
              <h2 className="vx-heading vx-heading-md text-white mb-3">
                Empieza a cobrar más rápido y controla tu inventario sin complicaciones
              </h2>
              <p className="text-tienda-cta-muted max-w-700 mx-auto mb-4">
                Configuramos tu catálogo completo desde Excel, enlazamos tu lector de códigos y dejamos tu TPV listo para vender en cuestión de horas.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vx-btn-tienda-primary"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Solicitar demo por WhatsApp</span>
                </a>
                <a
                  href="/#planes"
                  className="vx-btn-tienda-secondary-dark"
                >
                  <i className="bi bi-tag-fill"></i>
                  <span>Ver planes y precios</span>
                </a>
                <a
                  href="/#casos"
                  className="vx-back-link-tienda-dark"
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
          className="vx-tienda-lightbox-backdrop"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="vx-tienda-lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="vx-tienda-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar vista completa"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="vx-tienda-lightbox-img-box">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="vx-tienda-lightbox-img"
              />
            </div>

            <div className="vx-tienda-lightbox-info p-3 p-md-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className={`vx-badge-tienda-${selectedImage.badgeColor}`}>
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
