import React, { useState } from 'react'
import './ContactSection.css'

export const ContactSection = () => {
  const [paymentMethod, setPaymentMethod] = useState('bizum')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <section id="contacto" className="vx-section vx-contact-section">
      <div className="container">
        <div className="text-center max-w-750 mx-auto mb-5">
          <h2 className="vx-heading vx-heading-lg text-white mb-3">
            Da de alta tu negocio en 2 minutos
          </h2>
          <p className="text-secondary fs-5">
            Completa tus datos. La Central generará tu licencia criptográfica, tu web propia y aprovisionará tu bot de inmediato en cualquier país.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="vx-form-card p-4 p-lg-5 rounded-4 shadow-lg">
              {formSubmitted ? (
                <div className="text-center py-5">
                  <div className="vx-success-icon mb-3">
                    <i className="bi bi-check-circle-fill text-mint display-3"></i>
                  </div>
                  <h3 className="text-white fw-bold mb-2">¡Solicitud recibida con éxito!</h3>
                  <p className="text-secondary mb-4">
                    Un asesor técnico de VANAHEX te contactará por WhatsApp en los próximos minutos para activar tu sistema.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="vx-btn vx-btn-mint"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label text-secondary small fw-bold">
                        NOMBRE DEL NEGOCIO *
                      </label>
                      <input
                        type="text"
                        className="form-control vx-input"
                        placeholder="Ej: Barbería Royal, Taquería Azteca..."
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-secondary small fw-bold">
                        SECTOR / RUBRO *
                      </label>
                      <select className="form-select vx-input" required defaultValue="barberia">
                        <option value="barberia">✂️ Barbería / Peluquería</option>
                        <option value="restaurante">🍽️ Restaurante / Bar / Cafetería</option>
                        <option value="estetica">💅 Estética & Spa</option>
                        <option value="salud">🩺 Clínica / Gimnasio / Salud</option>
                        <option value="comercio">🛍️ Tienda / Comercio Minorista</option>
                        <option value="otro">⚡ Otro Sector</option>
                      </select>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label text-secondary small fw-bold">
                        PAÍS *
                      </label>
                      <select className="form-select vx-input" required defaultValue="es">
                        <option value="es">🇪🇸 España (+34)</option>
                        <option value="mx">🇲🇽 México (+52)</option>
                        <option value="co">🇨🇴 Colombia (+57)</option>
                        <option value="us">🇺🇸 USA (+1)</option>
                        <option value="otro">🌎 Otro País</option>
                      </select>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label text-secondary small fw-bold">
                        CIUDAD O ESTADO *
                      </label>
                      <input
                        type="text"
                        className="form-control vx-input"
                        placeholder="Ej: Madrid, CDMX, Bogotá..."
                        required
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="form-label text-secondary small fw-bold">
                        TELÉFONO WHATSAPP *
                      </label>
                      <input
                        type="tel"
                        className="form-control vx-input"
                        placeholder="+34 600 000 000"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-secondary small fw-bold">
                        PLAN SELECCIONADO *
                      </label>
                      <select className="form-select vx-input" defaultValue="anual">
                        <option value="anual">Primer año todo incluido (690 € - Mejor valor)</option>
                        <option value="mensual">Plan Mensual (29 €/mes + instalación)</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-secondary small fw-bold">
                        MONEDA DE PAGO
                      </label>
                      <select className="form-select vx-input" defaultValue="eur">
                        <option value="eur">💶 Euros (€) – España / Europa</option>
                        <option value="usd">💵 USD ($) – Internacional</option>
                        <option value="mxn">🌮 Pesos Mexicanos (MXN)</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label text-secondary small fw-bold">
                        SERVICIOS O PRODUCTOS PRINCIPALES (NOMBRE Y PRECIO)
                      </label>
                      <textarea
                        rows="3"
                        className="form-control vx-input"
                        placeholder="Ej: Corte Degradado (16€ / $15), Arreglo de Barba (12€ / $10), Pack VIP (25€)..."
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <label className="form-label text-secondary small fw-bold mb-2">
                        MÉTODO DE PAGO PREFERIDO *
                      </label>
                      <div className="row g-2">
                        <div className="col-md-4">
                          <div
                            className={`vx-pay-option p-3 rounded-3 text-center ${paymentMethod === 'bizum' ? 'active' : ''}`}
                            onClick={() => setPaymentMethod('bizum')}
                          >
                            <i className="bi bi-phone fs-4 text-mint d-block mb-1"></i>
                            <div className="fw-bold text-white small">Bizum</div>
                            <small className="text-muted extra-small">España Directo</small>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div
                            className={`vx-pay-option p-3 rounded-3 text-center ${paymentMethod === 'paypal' ? 'active' : ''}`}
                            onClick={() => setPaymentMethod('paypal')}
                          >
                            <i className="bi bi-paypal fs-4 text-primary d-block mb-1"></i>
                            <div className="fw-bold text-white small">PayPal</div>
                            <small className="text-muted extra-small">Express Checkout</small>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div
                            className={`vx-pay-option p-3 rounded-3 text-center ${paymentMethod === 'transfer' ? 'active' : ''}`}
                            onClick={() => setPaymentMethod('transfer')}
                          >
                            <i className="bi bi-bank fs-4 text-warning d-block mb-1"></i>
                            <div className="fw-bold text-white small">Transferencia</div>
                            <small className="text-muted extra-small">IBAN / SEPA</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mt-4">
                      <button type="submit" className="vx-btn vx-btn-mint w-100 justify-content-center py-3 fs-5 fw-bold">
                        <i className="bi bi-stars"></i> Continuar al Pago & Generar Licencia →
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
