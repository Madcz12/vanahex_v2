import React, { useState } from 'react'
import { whatsappFeatures } from '../data'
import './WhatsAppSection.css'

export const WhatsAppSection = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '🤖 Bot VANAHEX: 👋 ¡Hola! Bienvenido al asistente virtual autónomo 24/7 de VANAHEX. ¿En qué te puedo colaborar hoy?',
    },
  ])

  const handleAction = (actionText, replyText) => {
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: actionText },
      { sender: 'bot', text: replyText },
    ])
  }

  const handleReset = () => {
    setMessages([
      {
        sender: 'bot',
        text: '🤖 Bot VANAHEX: 👋 ¡Hola! Bienvenido al asistente virtual autónomo 24/7 de VANAHEX. ¿En qué te puedo colaborar hoy?',
      },
    ])
  }

  return (
    <section id="bot-whatsapp" className="vx-section vx-whatsapp-section position-relative">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Column: Benefits & Features */}
          <div className="col-lg-6">
            <span className="vx-badge vx-badge-mint mb-3">
              <i className="bi bi-clock-history"></i>
              ATENCIÓN AUTÓNOMA 24/7
            </span>
            <h2 className="vx-heading vx-heading-lg mb-4 text-white">
              Prueba el Bot de WhatsApp en <span className="vx-text-gradient-mint">tiempo real</span>
            </h2>
            <p className="text-secondary fs-5 mb-4">
              Haz clic en las preguntas frecuentes para ver cómo el bot responde de forma natural, verifica turnos libres en el calendario y confirma citas sin que tengas que atender el teléfono en horario laboral.
            </p>

            <div className="d-flex flex-column gap-3 mb-4">
              {whatsappFeatures.map((feat, idx) => (
                <div key={idx} className="d-flex align-items-center gap-3">
                  <div className="vx-wa-icon-wrapper" style={{ color: feat.color }}>
                    <i className={`bi ${feat.icon} fs-5`}></i>
                  </div>
                  <span className="text-light">{feat.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a href="#contacto" className="vx-btn vx-btn-mint px-4 py-3 fw-bold">
                <i className="bi bi-whatsapp"></i>
                Solicitar Bot para mi Negocio
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Chat Box Mockup */}
          <div className="col-lg-6">
            <div className="vx-chat-mockup rounded-4 shadow-lg overflow-hidden">
              {/* Chat Header */}
              <div className="vx-chat-header p-3 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="vx-chat-avatar">
                    <i className="bi bi-whatsapp text-white fs-5"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold text-white mb-0">Bot Asistente VANAHEX</h6>
                    <small className="text-mint d-flex align-items-center gap-1">
                      <span className="vx-pulse-dot"></span> En línea • 24 Horas
                    </small>
                  </div>
                </div>

                <button onClick={handleReset} className="btn btn-sm btn-link text-muted text-decoration-none">
                  <i className="bi bi-arrow-clockwise me-1"></i> Reiniciar
                </button>
              </div>

              {/* Chat Body */}
              <div className="vx-chat-body p-3">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`d-flex mb-3 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                  >
                    <div className={`vx-chat-bubble ${msg.sender === 'user' ? 'user' : 'bot'} p-3 rounded-3`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions Buttons */}
              <div className="vx-chat-footer p-3">
                <div className="small text-muted mb-2">Respuestas rápidas interactivas:</div>
                <div className="d-flex flex-wrap gap-2">
                  <button
                    onClick={() =>
                      handleAction(
                        '📅 Agendar Cita',
                        '🗓️ Claro, tengo turnos disponibles hoy a las 16:00 y 18:30. ¿Cuál prefieres?'
                      )
                    }
                    className="vx-quick-btn"
                  >
                    📅 Agendar Cita
                  </button>
                  <button
                    onClick={() =>
                      handleAction(
                        '📍 Horarios & Ubicación',
                        '📍 Nos encontramos en Calle Gran Vía 42, Madrid. Horario: Lunes a Sábado de 10:00 a 20:30.'
                      )
                    }
                    className="vx-quick-btn"
                  >
                    📍 Horarios & Ubicación
                  </button>
                  <button
                    onClick={() =>
                      handleAction(
                        '🏷️ Ver Precios',
                        '💳 Corte Caballero: 12€ | Corte + Barba: 16€ | Afeitado: 15€. ¿Te reservo alguno?'
                      )
                    }
                    className="vx-quick-btn"
                  >
                    🏷️ Ver Precios
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
