import React, { useState, useEffect } from 'react'
import { Navbar } from '../../ui'
import { FooterSection } from '../components'
import './VanahexRepuestosPage.css'

export const VanahexRepuestosPage = () => {
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
    'https://wa.me/34614138144?text=Hola%20VANAHEX,%20me%20interesa%20el%20software%20VANAHEX%20Repuestos%20para%20mi%20taller%20o%20tienda%20de%20motos'

  // Gallery Screens from public/moto_rep_images
  const screens = [
    {
      src: '/moto_rep_images/moto_repuestos_main.webp',
      badge: 'BÚSQUEDA RÁPIDA & DESPIECE',
      badgeColor: 'orange',
      title: 'Catálogo Maestro & Búsqueda por Modelo de Moto',
      desc: 'Localiza la pieza precisa en segundos filtrando por marca, modelo, cilindrada y año. Consulta existencias en tiempo real, ubicación exacta en estantería y referencias cruzadas entre motos.',
    },
    {
      src: '/moto_rep_images/moto_rep_ventas.webp',
      badge: 'MOSTRADOR & TICKETS',
      badgeColor: 'amber',
      title: 'Punto de Venta Ágil en Mostrador & Cobro Rápido',
      desc: 'Despacho veloz para ventas directas a taller o cliente final. Aplica descuentos en un clic, selecciona vendedor, emite tickets y gestiona pagos múltiples en efectivo, tarjeta o Bizum.',
    },
    {
      src: '/moto_rep_images/moto_rep_newform.webp',
      badge: 'FICHA TÉCNICA & PROVEEDORES',
      badgeColor: 'orange',
      title: 'Alta y Registro Técnico de Piezas y Compatibilidades',
      desc: 'Registra cada repuesto con código de barras, referencia OEM, proveedor habitual, precio de compra, PVP y asignación detallada a múltiples marcas y modelos compatibles.',
    },
    {
      src: '/moto_rep_images/moto_rep_fiados.webp',
      badge: 'CRÉDITOS & CLIENTES FIADOS',
      badgeColor: 'cyan',
      title: 'Control Riguroso de Cuentas por Cobrar & Fiados',
      desc: 'Lleva el balance exacto de lo que cada taller mecánico o cliente de confianza te debe. Historial de abonos, registro de fechas, límite de crédito y recordatorios de cobro claros.',
    },
    {
      src: '/moto_rep_images/moto_rep_docs.webp',
      badge: 'DOCUMENTOS & FISCALIDAD',
      badgeColor: 'amber',
      title: 'Albaranes, Facturas Oficiales y Presupuestos',
      desc: 'Generación instantánea de albaranes de entrega, facturas simplificadas y presupuestos con desglose de impuestos (IVA) y exportación limpia a PDF para clientes y gestoría.',
    },
    {
      src: '/moto_rep_images/moto_rep_ajustes.webp',
      badge: 'INVENTARIO AL DETALLE',
      badgeColor: 'orange',
      title: 'Ajustes de Inventario hasta la Última Argolla',
      desc: 'Auditoría milimétrica de stock: registra entradas de mercancía de proveedores, mermas por rotura, despieces de taller y regularizaciones periódicas con trazabilidad completa.',
    },
  ]

  // Pillars of the solution
  const pillars = [
    {
      icon: 'bi-search',
      colorClass: 'bg-rep-orange-subtle text-rep-orange',
      title: 'Búsqueda por Modelo & Compatibilidad',
      desc: 'Encuentra el repuesto correcto al instante por marca, modelo y año. Elimina errores y devoluciones de piezas incompatibles.',
    },
    {
      icon: 'bi-bullseye',
      colorClass: 'bg-rep-amber-subtle text-rep-amber',
      title: 'Stock hasta la Última Argolla',
      desc: 'Control milimétrico de tornillería, juntas, arandelas y recambios clave. Descuento automático por cada venta en mostrador.',
    },
    {
      icon: 'bi-wallet2',
      colorClass: 'bg-rep-cyan-subtle text-rep-cyan',
      title: 'Control de Cuentas Fiadas',
      desc: 'Historial detallado de deuda y abonos de cada taller mecánico cliente. Sabes con precisión cuánto te debe cada cuenta.',
    },
    {
      icon: 'bi-receipt-cutoff',
      colorClass: 'bg-rep-orange-subtle text-rep-orange',
      title: 'Albaranes y Documentos Oficiales',
      desc: 'Emisión inmediata de albaranes, facturas y presupuestos en PDF con tu membrete, cálculo de IVA y desglose profesional.',
    },
  ]

  return (
    <div className="vx-landing-wrapper vx-repuestos-page">
      <Navbar />

      <main className="vx-repuestos-page-content">
        {/* Breadcrumb & Hero Section */}
        <section className="vx-repuestos-hero-section">
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="mb-4">
              <a href="/#casos" className="vx-back-link-repuestos">
                <i className="bi bi-arrow-left"></i>
                <span>Volver a Casos de Éxito</span>
              </a>
            </div>

            {/* Hero Main Header */}
            <div className="row">
              <div className="col-lg-7 col-xl-6">
                <div className="d-inline-flex align-items-center mb-3">
                  <span className="vx-badge-rep-orange">
                    <i className="bi bi-gear-wide-connected me-2"></i>
                    NUEVO · SOFTWARE PARA TIENDAS DE REPUESTOS Y TALLERES DE MOTOS
                  </span>
                </div>

                <h1 className="vx-heading vx-heading-xl mb-3">
                  <span className="vx-text-gradient-repuestos">VANAHEX Repuestos:</span> Encuentra la Pieza en Segundos y Controla tu Stock al Detalle
                </h1>

                <p className="vx-repuestos-hero-desc mb-4">
                  Localiza de inmediato la pieza exacta filtrando por marca, modelo, cilindrada y año de moto. Control milimétrico de inventario hasta la última argolla o arandela, facturación ágil en mostrador, seguimiento de cuentas fiadas para talleres clientes y gestión de albaranes y entradas de mercancía. Todo 100% en la nube y accesible desde cualquier ordenador o tablet.
                </p>

                {/* Primary Actions */}
                <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vx-btn-rep-primary"
                  >
                    <i className="bi bi-whatsapp"></i>
                    <span>Solicitar demo y presupuesto</span>
                  </a>

                  <a href="/#planes" className="vx-btn-rep-secondary">
                    <i className="bi bi-tag-fill"></i>
                    <span>Ver planes y precios</span>
                  </a>
                </div>

                {/* Demo Callout Box */}
                <div className="vx-repuestos-demo-callout mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <span className="vx-pulse-dot" style={{ background: '#f97316' }}></span>
                    <strong className="text-rep-orange small">Módulo Especializado para Motos:</strong>
                  </div>
                  <div className="vx-repuestos-demo-tags">
                    <span className="vx-repuestos-tag">
                      <i className="bi bi-tools me-1 text-warning"></i>
                      Despiece & Compatibilidades
                    </span>
                    <span className="vx-repuestos-tag">
                      <i className="bi bi-journal-check me-1 text-primary"></i>
                      Cuentas Fiadas & Crédito
                    </span>
                    <span className="vx-repuestos-tag">
                      <i className="bi bi-upc-scan me-1 text-success"></i>
                      Lector de Barras & OEM
                    </span>
                    <span className="vx-repuestos-tag">
                      <i className="bi bi-cloud-check-fill me-1 text-info"></i>
                      Cloud Web · Chrome Ready
                    </span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="vx-repuestos-trust-badges d-flex flex-wrap gap-3 gap-md-4 align-items-center pt-2">
                  <span className="small d-flex align-items-center gap-2">
                    <i className="bi bi-check2 text-rep-orange fs-5"></i>
                    <span>Sin comprar terminales caras</span>
                  </span>
                  <span className="small d-flex align-items-center gap-2">
                    <i className="bi bi-check2 text-rep-orange fs-5"></i>
                    <span>Importación masiva de referencias</span>
                  </span>
                  <span className="small d-flex align-items-center gap-2">
                    <i className="bi bi-check2 text-rep-orange fs-5"></i>
                    <span>Cero desajustes de almacén</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars Section */}
        <section className="vx-section vx-repuestos-pillars-section py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="vx-badge-rep-amber mb-2">ARQUITECTURA Y CAPACIDADES</span>
              <h2 className="vx-heading vx-heading-lg">
                La potencia que tu mostrador necesita para despachar rápido y <span className="vx-text-gradient-repuestos">no perder ni un tornillo</span>
              </h2>
              <p className="text-rep-muted max-w-700 mx-auto">
                Desarrollado para el ritmo exigente de tiendas de repuestos y talleres de motocicletas: consultas rápidas de despiece, ventas ágiles en mostrador y control exhaustivo de clientes mecánicos.
              </p>
            </div>

            <div className="row g-4">
              {pillars.map((item, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="vx-repuestos-pillar-card p-4 rounded-4 h-100">
                    <div className={`vx-repuestos-pillar-icon ${item.colorClass} mb-3`}>
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <h5 className="vx-repuestos-pillar-title fw-bold mb-2">{item.title}</h5>
                    <p className="text-secondary small mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Masonry / Gallery Screens Showcase */}
        <section className="vx-section vx-repuestos-gallery-section py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="vx-badge-rep-orange mb-2">GALERÍA DE PANTALLAS</span>
              <h2 className="vx-heading vx-heading-lg">
                Capturas reales del sistema <span className="vx-text-gradient-repuestos">VANAHEX Repuestos</span>
              </h2>
              <p className="text-rep-muted max-w-750 mx-auto">
                Explora la interfaz de búsqueda por modelo de moto, el punto de venta de mostrador, el control de fiados y los ajustes de almacén. Haz clic en cualquiera de las imágenes para ampliarla en detalle.
              </p>
            </div>

            {/* Gallery Grid Container */}
            <div className="vx-repuestos-gallery-grid">
              {screens.map((screen, idx) => (
                <div
                  key={idx}
                  className="vx-repuestos-gallery-item"
                  onClick={() => setSelectedImage(screen)}
                >
                  <div className="vx-repuestos-gallery-card">
                    <div className="vx-repuestos-img-wrapper">
                      <img
                        src={screen.src}
                        alt={screen.title}
                        className="vx-repuestos-gallery-img"
                        loading="lazy"
                      />
                      <div className="vx-repuestos-hover-overlay">
                        <div className="vx-repuestos-zoom-pill">
                          <i className="bi bi-arrows-fullscreen me-2"></i>
                          <span>Ver pantalla ampliada</span>
                        </div>
                      </div>
                    </div>

                    <div className="vx-repuestos-gallery-caption p-4">
                      <span className={`vx-badge-rep-${screen.badgeColor} mb-2`}>
                        {screen.badge}
                      </span>
                      <h4 className="vx-repuestos-card-heading fw-bold mb-2 fs-5">{screen.title}</h4>
                      <p className="text-secondary small mb-0">{screen.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="vx-section vx-repuestos-cta-section py-5">
          <div className="container">
            <div className="vx-repuestos-cta-banner p-4 p-lg-5 rounded-4 text-center">
              <span className="vx-badge-rep-orange mb-3">¿GESTIONAS UN TALLER O TIENDA DE REPUESTOS DE MOTOS?</span>
              <h2 className="vx-heading vx-heading-md text-white mb-3">
                Despacha repuestos más rápido y ten tu stock bajo control absoluto
              </h2>
              <p className="text-rep-cta-muted max-w-700 mx-auto mb-4">
                Configuramos tu catálogo técnico de repuestos, importamos tus referencias y dejamos tu sistema listo para vender y controlar tu almacén en tiempo récord.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vx-btn-rep-primary"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Solicitar demo por WhatsApp</span>
                </a>
                <a href="/#planes" className="vx-btn-rep-secondary-dark">
                  <i className="bi bi-tag-fill"></i>
                  <span>Ver planes y precios</span>
                </a>
                <a href="/#casos" className="vx-back-link-rep-dark">
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
          className="vx-repuestos-lightbox-backdrop"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="vx-repuestos-lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="vx-repuestos-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar vista completa"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="vx-repuestos-lightbox-img-box">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="vx-repuestos-lightbox-img"
              />
            </div>

            <div className="vx-repuestos-lightbox-info p-3 p-md-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className={`vx-badge-rep-${selectedImage.badgeColor}`}>
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
