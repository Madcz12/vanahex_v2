import React from 'react'
import { footerLinks } from '../data'
import './FooterSection.css'

export const FooterSection = () => {
  return (
    <footer className="vx-footer py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Brand info */}
          <div className="col-lg-4 text-center text-lg-start">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-2">
              <div className="vx-logo-icon">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <span className="fw-black fs-5 text-white">VANAHEX GLOBAL</span>
            </div>
            <p className="text-secondary small mb-0">
              Ecosistema SaaS Internacional • Software POS, Bot WhatsApp 24/7 & Web Propia
            </p>
          </div>

          {/* Quick links */}
          <div className="col-lg-5">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {footerLinks.map((link, idx) => (
                <a key={idx} href={link.href} className="vx-footer-link small">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="col-lg-3 text-center text-lg-end">
            <small className="text-muted">
              © 2026 VANAHEX Global. Todos los derechos reservados.
            </small>
          </div>
        </div>
      </div>
    </footer>
  )
}
