import React from 'react'
import { projectCases } from '../data'
import './ProjectCasesSection.css'

export const ProjectCasesSection = () => {
  return (
    <section id="casos" className="vx-section vx-cases-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="vx-badge vx-badge-mint mb-2">CASOS DE ÉXITO & PORTAFOLIO</span>
          <h2 className="vx-heading vx-heading-lg text-white">
            Proyectos que ya <span className="vx-text-gradient-mint">están funcionando</span>
          </h2>
          <p className="text-secondary max-w-750 mx-auto">
            Negocios reales y plataformas completas creadas y operadas con la tecnología de VANAHEX.
          </p>
        </div>

        <div className="d-flex flex-column gap-5">
          {projectCases.map((project, idx) => (
            <div key={idx} className="vx-case-card p-4 p-lg-5 rounded-4">
              <div className="row g-4 align-items-center">
                {/* Left col: info */}
                <div className="col-lg-6">
                  <span className={`vx-badge vx-badge-${project.tagColor} mb-3`}>
                    {project.tag}
                  </span>
                  <h3 className="vx-heading vx-heading-md text-white mb-2">{project.title}</h3>
                  {project.location && (
                    <div className="text-muted small mb-3">
                      <i className="bi bi-geo-alt-fill text-danger me-1"></i>
                      {project.location}
                    </div>
                  )}
                  <p className="text-secondary mb-4">{project.desc}</p>

                  {/* Highlights or tech bullets if any */}
                  {project.highlights && (
                    <ul className="vx-feature-list mb-4">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx}>
                          <i className="bi bi-check2-circle"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.techFeatures && (
                    <ul className="vx-feature-list mb-4">
                      {project.techFeatures.map((item, tIdx) => (
                        <li key={tIdx}>
                          <i className="bi bi-cpu-fill text-purple"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="d-flex flex-wrap gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vx-btn vx-btn-primary"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                      {project.urlLabel}
                    </a>
                  </div>
                </div>

                {/* Right col: interactive card preview */}
                <div className="col-lg-6">
                  <div className="vx-case-preview p-3 rounded-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <span className="vx-pulse-dot"></span>
                        <code className="text-mint small">{project.url}</code>
                      </div>
                      <span className="badge bg-dark border border-secondary text-mint px-2 py-1">
                        {project.badgeLabel}
                      </span>
                    </div>

                    {/* Barber Services Case */}
                    {project.services && (
                      <div className="vx-case-inner-content p-3 rounded-3">
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <i className="bi bi-scissors fs-4 text-warning"></i>
                          <h6 className="fw-bold text-white mb-0">Servicios Integrados en Tiempo Real:</h6>
                        </div>
                        <div className="d-flex flex-column gap-2">
                          {project.services.map((srv, sIdx) => (
                            <div key={sIdx} className="d-flex justify-content-between align-items-center p-2 rounded bg-dark-subtle border border-secondary-subtle">
                              <span className="small text-white">{srv.name}</span>
                              <span className="badge bg-warning text-dark fw-bold">{srv.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Vanaheim Stats Grid */}
                    {project.stats && (
                      <div className="row g-2">
                        {project.stats.map((st, sIdx) => (
                          <div key={sIdx} className="col-4">
                            <div className="vx-stat-box p-2 text-center rounded-3">
                              <div className="fs-5 fw-bold text-mint">{st.value}</div>
                              <small className="text-muted extra-small">{st.label}</small>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* FDS Melilla placeholder preview */}
                    {project.highlights && !project.services && (
                      <div className="vx-web-screen-preview p-4 rounded-3 text-center">
                        <i className="bi bi-display fs-1 text-mint mb-2 d-block"></i>
                        <h5 className="text-white fw-bold mb-1">Web Corporativa Activa</h5>
                        <p className="text-secondary small mb-0">Optimizada para conversión móvil y captación directa</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
