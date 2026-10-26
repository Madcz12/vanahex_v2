import React from 'react'
import { serviceCards } from '../data'
import './ServicesSection.css'

export const ServicesSection = () => {
  return (
    <section id="servicios" className="vx-section vx-services-section position-relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-750 mx-auto mb-5">
          <span className="vx-badge vx-badge-yellow mb-3">
            <i className="bi bi-trophy-fill"></i>
            NUEVO • BARES, RESTAURANTES Y CACHIMBERÍAS
          </span>
          <h2 className="vx-heading vx-heading-lg mb-3">
            VANAHEX Barra: la caja, las comandas y los pedidos por QR de tu local
          </h2>
          <p className="text-secondary fs-5">
            El camarero toma el pedido en su móvil, la caja lo ve al instante y la cocina recibe solo lo suyo. Tus clientes también pueden pedir escaneando el QR de su mesa. Con tu logo, tu carta y la moneda de tu país. Sin comprar terminales caras: funciona en el móvil, la tablet y el ordenador que ya tienes.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <a href="#contacto" className="vx-btn vx-btn-primary px-4 py-3 fw-bold">
              <i className="bi bi-play-fill fs-5"></i>
              Probar la demo en vivo
            </a>
            <a href="#contacto" className="vx-btn vx-btn-secondary px-4 py-3">
              Pedir mi prueba gratis de 15 días
            </a>
          </div>
          <small className="text-muted d-block mt-3">
            Demo: entra con el PIN <span className="text-gold fw-bold">2580</span> (caja), <span className="text-gold fw-bold">1111</span> (camarero) o <span className="text-gold fw-bold">3333</span> (cocina).
          </small>
        </div>

        {/* Feature Cards Grid (4 columns) */}
        <div className="row g-4 mb-5">
          {serviceCards.map((card, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="vx-card h-100 p-4 d-flex flex-column">
                <div className="vx-card-icon mb-3">
                  <i className={`bi ${card.icon}`}></i>
                </div>
                <h4 className="fw-bold text-white mb-2 fs-5">{card.title}</h4>
                <p className="text-secondary small mb-0 flex-grow-1">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* All-inclusive sub-banner */}
        <div id="tpv-hosteleria" className="vx-tpv-banner p-4 p-lg-5 rounded-4 mt-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h3 className="vx-heading vx-heading-md mb-3 text-white">
                Todo incluido para tu local
              </h3>
              <p className="text-secondary mb-4">
                Caja, comandas, pedidos por QR, pantalla de cocina, tu página web con la carta en vivo y un bot de WhatsApp que toma reservas y pedidos para recoger. Lo instalamos nosotros. Sin comprar terminales: funciona en el móvil, la tablet y el ordenador que ya tienes.
              </p>
              <ul className="vx-feature-list">
                <li><i className="bi bi-check-circle-fill"></i> Comandas en tiempo real a cocina y barra</li>
                <li><i className="bi bi-check-circle-fill"></i> Carta digital interactiva con QR de mesa</li>
                <li><i className="bi bi-check-circle-fill"></i> Sin permanencias ni contratos abusivos</li>
              </ul>
            </div>

            {/* Plans Mini Preview */}
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="vx-mini-plan p-3 rounded-3 h-100">
                    <span className="text-muted small fw-bold">MENSUAL</span>
                    <div className="fs-3 fw-bold text-white my-2">59 € <span className="fs-6 text-muted font-normal">/mes</span></div>
                    <small className="text-warning d-block mb-3">+ 299 € instalación</small>
                    <a href="#contacto" className="vx-btn vx-btn-secondary w-100 justify-content-center py-2 small">
                      Contratar mensual
                    </a>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="vx-mini-plan p-3 rounded-3 h-100 highlighted">
                    <span className="badge bg-warning text-dark fw-bold mb-1">MEJOR VALOR</span>
                    <div className="text-warning small fw-bold">PAGO ÚNICO</div>
                    <div className="fs-3 fw-bold text-white my-2">890 € <span className="fs-6 text-muted font-normal">/año 1</span></div>
                    <small className="text-mint d-block mb-3">Renovación 290 €/año</small>
                    <a href="#contacto" className="vx-btn vx-btn-primary w-100 justify-content-center py-2 small fw-bold">
                      Contratar pago único
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
