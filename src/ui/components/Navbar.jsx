import React, { useState, useEffect, useRef } from 'react'
import { navLinks } from '../../landing/data'
import './Navbar.css'

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef(null)

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(false)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeAll = () => {
    setDropdownOpen(false)
    setMobileMenuOpen(false)
  }

  return (
    <header className="vx-header-fixed" ref={navRef}>
      {/* Floating Island Pill Navbar */}
      <div className="vx-pill-nav">
        {/* Brand */}
        <a href="#" className="vx-pill-brand" onClick={closeAll}>
          <div className="vx-brand-icon">
            <i className="bi bi-lightning-charge-fill"></i>
          </div>
          <div className="vx-brand-info">
            <span className="vx-brand-text">VANAHEX</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="vx-desktop-menu">
          <ul className="vx-menu-list">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <li
                    key={link.label}
                    className="vx-menu-item vx-has-dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      className={`vx-menu-link vx-dropdown-trigger ${dropdownOpen ? 'active' : ''}`}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      aria-expanded={dropdownOpen}
                    >
                      <span>{link.label}</span>
                      <i className={`bi bi-chevron-down vx-chevron ${dropdownOpen ? 'open' : ''}`}></i>
                    </button>

                    {/* Mega Dropdown Menu (inspired by EPRISMA reference) */}
                    <div className={`vx-mega-dropdown ${dropdownOpen ? 'visible' : ''}`}>
                      <div className="vx-mega-grid">
                        {link.children.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="vx-mega-item"
                            onClick={closeAll}
                          >
                            <span
                              className="vx-item-dot"
                              style={{
                                backgroundColor: subItem.dotColor,
                                boxShadow: `0 0 10px ${subItem.dotColor}`,
                              }}
                            ></span>
                            <div className="vx-item-text">
                              <span className="vx-item-title">{subItem.label}</span>
                              <span className="vx-item-desc">{subItem.desc}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                )
              }

              return (
                <li key={link.label} className="vx-menu-item">
                  <a href={link.href} className="vx-menu-link" onClick={closeAll}>
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right Action */}
        <div className="vx-pill-actions">
          <a href="#contacto" className="vx-action-btn" onClick={closeAll}>
            Hablemos
          </a>

          {/* Mobile Toggler */}
          <button
            type="button"
            className="vx-mobile-toggler"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="vx-mobile-drawer">
          <ul className="vx-mobile-list">
            {navLinks.map((link) => (
              <li key={link.label} className="vx-mobile-item">
                {link.hasDropdown ? (
                  <div className="vx-mobile-group">
                    <span className="vx-mobile-group-title">{link.label}</span>
                    <div className="vx-mobile-sublist">
                      {link.children.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="vx-mobile-sublink"
                          onClick={closeAll}
                        >
                          <span
                            className="vx-item-dot"
                            style={{ backgroundColor: sub.dotColor }}
                          ></span>
                          <span>{sub.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a href={link.href} className="vx-mobile-link" onClick={closeAll}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            <li className="vx-mobile-item pt-2">
              <a href="#contacto" className="vx-btn vx-btn-mint w-100 justify-content-center" onClick={closeAll}>
                Activar Negocio
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
