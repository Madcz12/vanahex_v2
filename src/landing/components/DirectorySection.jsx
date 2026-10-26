import React from 'react'
import { directoryClients, globalBadges } from '../data'
import './DirectorySection.css'

export const DirectorySection = () => {
  return (
    <section id="directorio" className="vx-section vx-directory-section">
      <div className="container">
        <div className="text-center max-w-750 mx-auto mb-5">
          <span className="vx-badge vx-badge-mint mb-3">DIRECTORIO INTERNACIONAL</span>
          <h2 className="vx-heading vx-heading-lg text-white mb-3">
            Guía Global de Negocios Afiliados
          </h2>
          <p className="text-secondary fs-5 mb-4">
            Cada negocio registrado obtiene su tarjeta promocional con fotos, valoraciones y botón directo de reservas a su WhatsApp.
          </p>

          {/* Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            <span className="vx-filter-pill active">Todos 🌐</span>
            {globalBadges.map((b, i) => (
              <span key={i} className="vx-filter-pill">
                {b.flag} {b.name}
              </span>
            ))}
            <span className="vx-filter-pill">🌍 Otros Países</span>
          </div>
        </div>

        {/* Directory Cards */}
        <div className="row g-4 justify-content-center">
          {directoryClients.map((client, idx) => (
            <div key={idx} className="col-lg-5 col-md-6">
              <div className="vx-directory-card p-4 rounded-4 h-100 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <span className={`vx-badge vx-badge-${client.badgeColor}`}>
                    {client.badge}
                  </span>
                  <span className="badge bg-dark-subtle border border-secondary text-secondary small">
                    🇪🇸 {client.location}
                  </span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h4 className="fw-bold text-white mb-0">{client.name}</h4>
                  {client.hasWeb && (
                    <span className="text-warning small d-flex align-items-center gap-1">
                      <i className="bi bi-globe"></i> Web
                    </span>
                  )}
                </div>
                <div className="text-muted small mb-3">{client.category}</div>

                <div className="vx-directory-services p-3 rounded-3 mb-4 flex-grow-1">
                  <small className="text-muted d-block mb-2 fw-semibold">SERVICIOS / PRODUCTOS:</small>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                    {client.services.map((srv, sIdx) => (
                      <li key={sIdx} className="d-flex justify-content-between text-secondary small">
                        <span>• {srv.name}</span>
                        {srv.price && <strong className="text-mint">{srv.price}</strong>}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contacto" className="vx-btn vx-btn-mint w-100 justify-content-center py-2">
                  <i className="bi bi-whatsapp"></i>
                  {client.ctaLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
