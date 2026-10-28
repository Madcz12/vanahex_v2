import React, { useState, useEffect } from 'react'
import { Navbar } from '../../ui'
import { FooterSection } from '../components'
import './MsBarbershopPage.css'

export const MsBarbershopPage = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedItem(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Official Demo URL
  const demoUrl = 'https://vanahex.lat/barberia.html'

  // Masonry screens / placeholders
  const galleryItems = [
    {
      id: 1,
      badge: 'WEB OFICIAL & CATÁLOGO',
      badgeClass: 'vx-badge-gold',
      title: 'Portal Web Oficial & Carta de Cortes',
      desc: 'Diseño web a medida para MS Barbershop con estética vintage/moderna, catálogo de servicios, precios transparentes, fotos de estilos y geolocalización en Calle Gran Vía 42.',
      icon: 'bi-globe2',
      placeholderLabel: 'Captura Web Oficial de MS Barbershop',
      dimensions: '1440 x 900 px · Desktop View',
      isVertical: false,
    },
    {
      id: 2,
      badge: 'EXPERIENCIA MÓVIL · RESERVAS',
      badgeClass: 'vx-badge-mustard',
      title: 'Flujo de Citas Autónomo en Móvil',
      desc: 'Interfaz táctil ultra-rápida donde el cliente selecciona barbero favorito, servicio (corte, barba, styling) y bloque de horario disponible con confirmación al instante.',
      icon: 'bi-phone',
      placeholderLabel: 'Interfaz Móvil · Selección de Cita',
      dimensions: '1080 x 1920 px · Mobile App View',
      isVertical: true,
    },
    {
      id: 3,
      badge: 'AUTOMATIZACIÓN WHATSAPP 24/7',
      badgeClass: 'vx-badge-bronze',
      title: 'Bot de WhatsApp Inteligente de Reservas',
      desc: 'Atención 24/7 sin secretaría ni llamadas perdidas. El bot responde dudas de precios, agenda citas en tiempo real y envía recordatorios automáticos 2 horas antes de cada corte.',
      icon: 'bi-whatsapp',
      placeholderLabel: 'Captura Chat WhatsApp Bot 24/7',
      dimensions: '1080 x 1800 px · WhatsApp Screen',
      isVertical: true,
    },
    {
      id: 4,
      badge: 'GESTIÓN DE CAJA & TPV',
      badgeClass: 'vx-badge-gold',
      title: 'Software de Caja, Cobros y Cierre Diario',
      desc: 'Panel de TPV táctil para registrar pagos en efectivo, Bizum y tarjeta. Permite calcular comisiones por barbero, ticket promedio y balance de caja con arqueo ciego diario.',
      icon: 'bi-receipt-cutoff',
      placeholderLabel: 'Panel de Caja & Liquidación por Barbero',
      dimensions: '1440 x 920 px · POS Dashboard',
      isVertical: false,
    },
    {
      id: 5,
      badge: 'AGENDA CENTRALIZADA',
      badgeClass: 'vx-badge-mustard',
      title: 'Calendario Multibarbero en Tiempo Real',
      desc: 'Visualización sincronizada de los sillones de la barbería. Evita solapamientos entre citas presenciales y reservas web, con alertas de cancelaciones en tiempo récord.',
      icon: 'bi-calendar-check',
      placeholderLabel: 'Agenda Multibarbero y Calendario Táctil',
      dimensions: '1400 x 850 px · Schedule View',
      isVertical: false,
    },
    {
      id: 6,
      badge: 'FIDELIZACIÓN & CLIENTES',
      badgeClass: 'vx-badge-bronze',
      title: 'Ficha de Cliente & Historial de Cortes',
      desc: 'Base de datos de clientes con notas sobre preferencias de corte, frecuencia de visitas y promociones personalizadas enviadas directamente por WhatsApp.',
      icon: 'bi-person-badge',
      placeholderLabel: 'Ficha de Cliente & Historial Recurrente',
      dimensions: '1080 x 1650 px · Client Profile View',
      isVertical: true,
    },
  ]

  // Pillars of the solution
  const pillars = [
    {
      icon: 'bi-globe2',
      colorClass: 'bg-barber-gold-subtle',
      title: 'Web Oficial de Alta Gama',
      desc: 'Presencia digital con personalidad de marca en tonos mostaza y bronce, catálogo interactivo de servicios y reservas directas sin intermediarios ni comisiones.',
    },
    {
      icon: 'bi-whatsapp',
      colorClass: 'bg-barber-bronze-subtle',
      title: 'Bot de WhatsApp 24/7',
      desc: 'Tu agenda se llena sola mientras estás cortando el pelo. El bot atiende a cualquier hora, confirma el horario y reduce un 90% las citas olvidadas con recordatorios automáticos.',
    },
    {
      icon: 'bi-receipt-cutoff',
      colorClass: 'bg-barber-mustard-subtle',
      title: 'Software TPV y Caja',
      desc: 'Caja diaria, desglose de ventas por cada barbero, gestión de stock de ceras y pomadas, y reportes de facturación con un clic.',
    },
    {
      icon: 'bi-phone',
      colorClass: 'bg-barber-gold-subtle',
      title: 'Móvil para los Barberos',
      desc: 'Cada barbero consulta sus citas del día desde su propio móvil. Sin papel, sin confusión y con sincronización instantánea.',
    },
  ]

  // Popular Services of the Barbershop
  const popularServices = [
    { name: 'Corte Caballero + Peinado & Styling', price: '12 €', desc: 'Degradado a máquina o tijera clásica con lavado y acabado profesional.' },
    { name: 'Corte Completo + Perfilado de Barba', price: '16 €', desc: 'El combo más pedido: degradado perfecto con arreglo de barba al detalle.' },
    { name: 'Afeitado Tradicional a Navaja', price: '15 €', desc: 'Toallas calientes, espuma templada y masaje facial calmante posterior.' },
    { name: 'Arreglo de Barba Express', price: '8 €', desc: 'Perfilado rápido de líneas de cuello y mejillas con máquina o navaja.' },
    { name: 'Tratamiento Capilar & Exfoliante Facial', price: '18 €', desc: 'Revitalización de cuero cabelludo y limpieza facial con mascarilla de carbón.' },
    { name: 'Pack Completo VIP MS Barbershop', price: '35 €', desc: 'Corte, barba completa, toallas calientes, tratamiento capilar y bebida cortesía.' },
  ]

  return (
    <div className="vx-landing-wrapper vx-barbershop-page">
      <Navbar />

      <main className="vx-barber-page-content">
        {/* Breadcrumb & Navigation */}
        <section className="vx-barber-hero-section">
          <div className="container">
            <div className="mb-4">
              <a href="/#casos" className="vx-back-link-barber">
                <i className="bi bi-arrow-left"></i>
                <span>Volver a Casos de Éxito</span>
              </a>
            </div>

            {/* Hero Main Header */}
            <div className="row">
              <div className="col-lg-10 col-xl-9">
                <div className="d-inline-flex align-items-center mb-3">
                  <span className="vx-badge-gold">
                    <i className="bi bi-star-fill me-2 text-warning"></i>
                    CLIENTE FUNDADOR · CASO REAL & EVIDENCIA ACTIVA
                  </span>
                </div>

                <h1 className="vx-heading vx-heading-xl mb-3">
                  <span className="vx-text-gradient-gold-bronze">MS Barbershop Madrid:</span> Web Oficial, Bot de WhatsApp y Gestión Integral
                </h1>

                <p className="vx-barber-hero-desc mb-4">
                  Transformación digital completa para barbería y peluquería en plena Gran Vía de Madrid. Catálogo de servicios con reserva en línea, un bot de WhatsApp 24/7 que gestiona la agenda de los barberos sin llamadas perdidas y un software de caja con control de comisiones y cobros en tiempo real.
                </p>

                {/* Primary Actions */}
                <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vx-btn-barber-primary"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                    <span>Ver demo en vivo</span>
                  </a>

                  <a
                    href="https://wa.me/34614138144?text=Hola%20VANAHEX,%20quiero%20información%20sobre%20la%20solución%20para%20barberías%20como%20MS%20Barbershop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vx-btn-barber-secondary"
                  >
                    <i className="bi bi-whatsapp"></i>
                    <span>Pedir presupuesto por WhatsApp</span>
                  </a>
                </div>

                {/* Demo Callout Banner */}
                <div className="vx-barber-demo-callout">
                  <div className="d-flex align-items-center gap-2">
                    <span className="vx-pulse-dot" style={{ background: '#e5a919' }}></span>
                    <strong className="text-barber-gold small">Web oficial del cliente:</strong>
                  </div>
                  <div className="vx-barber-demo-tags">
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vx-barber-tag text-decoration-none"
                    >
                      <i className="bi bi-link-45deg me-1"></i>
                      <strong>vanahex.lat/barberia.html</strong>
                    </a>
                    <span className="vx-barber-tag">
                      <i className="bi bi-geo-alt-fill me-1 text-danger"></i>
                      Gran Vía 42, Madrid
                    </span>
                    <span className="vx-barber-tag">
                      <i className="bi bi-check-circle-fill me-1 text-success"></i>
                      En producción activa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars Section */}
        <section className="vx-section vx-barber-pillars-section py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="vx-badge-mustard mb-2">INFRAESTRUCTURA INTEGRAL</span>
              <h2 className="vx-heading vx-heading-lg text-barber-gold">
                Todo lo que necesita tu barbería en <span className="vx-text-gradient-gold-bronze">un solo sistema</span>
              </h2>
              <p className="text-barber-muted max-w-700 mx-auto">
                Olvídate de cuadernos con tachones, llamadas mientras tienes la navaja en la mano y programas complicados.
              </p>
            </div>

            <div className="row g-4">
              {pillars.map((item, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="vx-barber-pillar-card p-4 rounded-4 h-100">
                    <div className={`vx-barber-pillar-icon ${item.colorClass} mb-3`}>
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <h5 className="text-barber-gold fw-bold mb-2">{item.title}</h5>
                    <p className="text-barber-muted small mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Menu Showcase */}
        <section className="vx-section vx-barber-services-section py-5">
          <div className="container">
            <div className="row align-items-center g-4 mb-4">
              <div className="col-lg-7">
                <span className="vx-badge-bronze mb-2">CATÁLOGO Y PRECIOS TRANSPARENTES</span>
                <h2 className="vx-heading vx-heading-lg text-barber-gold">
                  Servicios configurados en la <span className="vx-text-gradient-mustard">Web Oficial</span>
                </h2>
                <p className="text-barber-muted mb-0">
                  Precios cerrados, duración estimada de cada servicio y reserva en un toque tanto en la web como a través del bot de WhatsApp.
                </p>
              </div>
              <div className="col-lg-5 text-lg-end">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vx-btn-barber-secondary"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  <span>Ver catálogo completo en la demo</span>
                </a>
              </div>
            </div>

            <div className="row g-3">
              {popularServices.map((service, idx) => (
                <div key={idx} className="col-md-6 col-lg-4">
                  <div className="vx-barber-service-item h-100">
                    <div className="pe-3">
                      <h6 className="text-barber-gold fw-bold mb-1">{service.name}</h6>
                      <p className="text-barber-muted small mb-0">{service.desc}</p>
                    </div>
                    <div>
                      <span className="vx-barber-service-price">{service.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Masonry Grid Gallery Section with Placeholders */}
        <section className="vx-section vx-barber-masonry-section py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="vx-badge-mustard mb-2">GALERÍA DE INTERFACES Y MÓDULOS</span>
              <h2 className="vx-heading vx-heading-lg text-barber-gold">
                Estructura visual de <span className="vx-text-gradient-gold-bronze">MS Barbershop</span>
              </h2>
              <p className="text-barber-muted max-w-750 mx-auto">
                Grid estilo masonry con la distribución modular de interfaces: web oficial, bot de reservas, agenda de barberos y TPV. Haz clic en cualquier módulo para ver sus detalles en pantalla completa.
              </p>
            </div>

            {/* Masonry Grid Container */}
            <div className="vx-barber-masonry-grid">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="vx-barber-masonry-item"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="vx-barber-masonry-card">
                    <div className="vx-barber-img-wrapper">
                      {/* Visual Placeholder */}
                      <div className={`vx-barber-placeholder ${item.isVertical ? 'aspect-vertical' : 'aspect-horizontal'}`}>
                        <div className="vx-barber-placeholder-icon">
                          <i className={`bi ${item.icon}`}></i>
                        </div>
                        <div className="vx-barber-placeholder-text">
                          {item.placeholderLabel}
                        </div>
                        <div className="vx-barber-placeholder-sub">
                          Módulo Interactivo · VANAHEX Suite
                        </div>
                        <span className="vx-barber-dim-tag">
                          {item.dimensions}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="vx-barber-masonry-hover-overlay">
                        <div className="vx-barber-zoom-pill">
                          <i className="bi bi-arrows-fullscreen me-2"></i>
                          <span>Ver detalles del módulo</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Caption */}
                    <div className="vx-barber-masonry-caption p-4">
                      <span className={`${item.badgeClass} mb-2`}>
                        {item.badge}
                      </span>
                      <h4 className="text-barber-gold fw-bold mb-2 fs-5">{item.title}</h4>
                      <p className="text-barber-muted small mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="vx-section vx-barber-cta-section py-5">
          <div className="container">
            <div className="vx-barber-cta-banner p-4 p-lg-5 rounded-4 text-center">
              <span className="vx-badge-gold mb-3">¿TIENES UNA BARBERÍA, SALÓN O CENTRO DE ESTÉTICA?</span>
              <h2 className="vx-heading vx-heading-md text-barber-gold mb-3">
                Digitaliza tu barbería con tu propia marca en menos de 48 horas
              </h2>
              <p className="text-barber-muted max-w-700 mx-auto mb-4">
                Instalamos tu web oficial, configuramos tu bot de reservas 24/7 en tu propio número de WhatsApp y ponemos en marcha tu sistema de caja.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vx-btn-barber-primary"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  <span>Ver demo en vivo</span>
                </a>
                <a
                  href="https://wa.me/34614138144?text=Hola%20VANAHEX,%20quiero%20digitalizar%20mi%20barbería%20como%20MS%20Barbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vx-btn-barber-secondary"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Hablar con un asesor</span>
                </a>
                <a
                  href="/#casos"
                  className="vx-back-link-barber"
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
      {selectedItem && (
        <div
          className="vx-barber-lightbox-backdrop"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="vx-barber-lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="vx-barber-lightbox-close"
              onClick={() => setSelectedItem(null)}
              aria-label="Cerrar vista completa"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="vx-barber-lightbox-img-box">
              <div className="vx-barber-placeholder aspect-horizontal w-100 rounded-3">
                <div className="vx-barber-placeholder-icon" style={{ width: '84px', height: '84px', fontSize: '2.5rem' }}>
                  <i className={`bi ${selectedItem.icon}`}></i>
                </div>
                <div className="vx-barber-placeholder-text fs-4">
                  {selectedItem.placeholderLabel}
                </div>
                <div className="vx-barber-placeholder-sub">
                  {selectedItem.title}
                </div>
                <span className="vx-barber-dim-tag mb-3">
                  {selectedItem.dimensions}
                </span>
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vx-btn-barber-primary"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  <span>Abrir demo interactiva</span>
                </a>
              </div>
            </div>

            <div className="vx-barber-lightbox-info p-3 p-md-4">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className={selectedItem.badgeClass}>
                  {selectedItem.badge}
                </span>
              </div>
              <h4 className="text-barber-gold fw-bold mb-1">{selectedItem.title}</h4>
              <p className="text-barber-muted small mb-0">{selectedItem.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
