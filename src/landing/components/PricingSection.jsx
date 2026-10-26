import React from 'react'
import { pricingPlans, paymentMethods } from '../data'
import './PricingSection.css'

export const PricingSection = () => {
  return (
    <section id="planes" className="vx-section vx-pricing-section">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-750 mx-auto mb-5">
          <span className="vx-badge vx-badge-mint mb-3">PLANES TRANSPARENTES & FLEXIBLES</span>
          <h2 className="vx-heading vx-heading-lg text-white mb-3">
            Elige el plan ideal para tu negocio
          </h2>
          <p className="text-secondary fs-5 mb-4">
            Todos los planes incluyen el software completo, bot de WhatsApp, página web propia y soporte continuo. Sin permanencia.
          </p>

          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
            <span className="badge bg-dark-subtle border border-secondary text-secondary px-3 py-2">
              MONEDA / PAÍS: 🇪🇸 EUR (€) • España & Europa
            </span>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-4 text-muted small mt-3">
            {paymentMethods.map((pm, idx) => (
              <span key={idx} className="d-flex align-items-center gap-1">
                <i className={`bi ${pm.icon} text-mint`}></i>
                {pm.label}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 justify-content-center">
          {pricingPlans.map((plan, idx) => (
            <div key={idx} className="col-lg-5 col-md-6">
              <div className={`vx-pricing-card h-100 p-4 p-lg-5 rounded-4 d-flex flex-column ${plan.highlight ? 'highlight' : ''}`}>
                {plan.label && (
                  <div className="vx-pricing-badge-top text-center mb-3">
                    <span className="badge bg-warning text-dark fw-bold px-3 py-2 rounded-pill">
                      {plan.label}
                    </span>
                  </div>
                )}

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="fw-bold text-white mb-0">{plan.name}</h4>
                  {plan.badge && (
                    <span className="badge bg-success-subtle text-success border border-success-subtle">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="my-3">
                  <span className="display-4 fw-black text-white">{plan.price} {plan.currency}</span>
                  <span className="text-muted fs-6 ms-2">{plan.period}</span>
                </div>

                <div className={`small mb-3 ${plan.highlight ? 'text-mint' : 'text-warning'}`}>
                  {plan.setup}
                </div>

                <p className="text-secondary small mb-4">{plan.desc}</p>

                <ul className="vx-feature-list mb-5 flex-grow-1">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <i className={`bi bi-check-circle-fill ${plan.highlight ? 'text-mint' : 'text-secondary'}`}></i>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`vx-btn w-100 justify-content-center py-3 fs-6 ${
                    plan.highlight ? 'vx-btn-mint fw-bold' : 'vx-btn-secondary'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
