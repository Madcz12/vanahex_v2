import React, { useState } from 'react'
import { directoryClients } from '../data'
import './DirectorySection.css'

export const DirectorySection = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filterCategories = [
    { code: 'all', label: 'Todos', icon: '🌐' },
    { code: 'es', label: 'España', flag: '🇪🇸' },
    { code: 'mx', label: 'México', flag: '🇲🇽' },
    { code: 'co', label: 'Colombia', flag: '🇨🇴' },
    { code: 'us', label: 'USA', flag: '🇺🇸' },
    { code: 'otros', label: 'Otros Países', icon: '🌍' },
  ]

  const filteredClients = directoryClients.filter((client) => {
    if (activeFilter === 'all') return true
    return client.country === activeFilter
  })

  const currentCategory =
    filterCategories.find((c) => c.code === activeFilter) || { label: 'este filtro' }

  return (
    <section id="directorio" className="vx-section vx-directory-section">
      <div className="container">
        {/* Section Header with Left-Aligned Title and Right-Aligned Filter Pills */}
        <div className="row align-items-center mb-5 gy-4">
          <div className="col-lg-6">
            <span className="vx-badge vx-badge-mint mb-3">DIRECTORIO INTERNACIONAL</span>
            <h2 className="vx-heading vx-heading-lg text-white mb-3">
              Guía Global de Negocios Afiliados
            </h2>
            <p className="text-secondary fs-5 mb-0">
              Cada negocio registrado obtiene su tarjeta promocional con fotos, valoraciones y botón directo de reservas a su WhatsApp.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="col-lg-6 d-flex flex-wrap justify-content-lg-end gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.code}
                type="button"
                className={`vx-filter-pill ${activeFilter === cat.code ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.code)}
              >
                {cat.flag && <span className="me-1">{cat.flag}</span>}
                <span>{cat.label}</span>
                {cat.icon && <span className="ms-1">{cat.icon}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Content: Masonry Grid or Empty State */}
        {filteredClients.length > 0 ? (
          <div className="vx-directory-masonry-grid">
            {filteredClients.map((client, idx) => (
              <div key={idx} className="vx-directory-masonry-item">
                <div className="vx-directory-card">
                  {/* Top Image Showcase */}
                  <div className="vx-directory-card-img-wrapper">
                    <img
                      src={client.bgImage}
                      alt={client.name}
                      className="vx-directory-card-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Bottom Cenefa / Content Panel */}
                  <div className="vx-directory-card-cenefa">
                    {/* Header: Title + Web Badge */}
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <h3 className="vx-directory-card-title text-white mb-0">{client.name}</h3>
                      {client.hasWeb && (
                        <a
                          href={client.webUrl || '#'}
                          className="vx-directory-web-link text-warning d-flex align-items-center gap-1"
                          title={`Visitar web de ${client.name}`}
                        >
                          <i className="bi bi-globe"></i>
                          <span>Web</span>
                        </a>
                      )}
                    </div>

                    {/* Subtitle: Category • Location */}
                    <div className="vx-directory-subtitle mb-3">
                      {client.category} • {client.location}
                    </div>

                    {/* Services Box */}
                    <div className="vx-directory-services-box p-3 mb-3">
                      <span className="vx-directory-services-label d-block mb-2">SERVICIOS / PRODUCTOS:</span>
                      <ul className="vx-directory-services-list list-unstyled mb-0 d-flex flex-column gap-2">
                        {client.services.map((srv, sIdx) => (
                          <li key={sIdx} className="d-flex justify-content-between align-items-center">
                            <span className="vx-directory-service-name">• {srv.name}</span>
                            {srv.price && (
                              <strong className="vx-directory-service-price">{srv.price}</strong>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* WhatsApp Button */}
                    <a
                      href={client.whatsappUrl || '#contacto'}
                      target={client.whatsappUrl ? '_blank' : '_self'}
                      rel={client.whatsappUrl ? 'noopener noreferrer' : undefined}
                      className="vx-directory-cta-btn"
                    >
                      <i className="bi bi-whatsapp"></i>
                      <span>{client.ctaLabel}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="vx-directory-empty-state text-center">
            <div className="vx-directory-empty-icon mb-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l1.5-6h15L21 9" />
                <path d="M3 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 4 0" />
                <path d="M4 11v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8" />
                <path d="M9 20v-5h6v5" />
                <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <p className="vx-directory-empty-title mb-2">
              No hay negocios registrados aún para este filtro ({currentCategory.label}).
            </p>
            <a href="#contacto" className="vx-directory-empty-highlight">
              ¡Sé el primer negocio destacado en tu región! 🚀
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
