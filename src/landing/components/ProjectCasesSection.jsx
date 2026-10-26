import React, { useState, useEffect, useRef, useCallback } from 'react'
import { projectCases } from '../data'
import './ProjectCasesSection.css'

export const ProjectCasesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const dragStartX = useRef(0)
  const currentDragOffset = useRef(0)
  const carouselTrackRef = useRef(null)

  const total = projectCases.length

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : total - 1))
  }, [total])

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < total - 1 ? prev + 1 : 0))
  }, [total])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlePrev, handleNext])

  // Drag / Touch gestures
  const onPointerDown = (e) => {
    if (e.target.closest('.vx-card-actions') || e.target.closest('.vx-carousel-nav-btn')) return
    setIsDragging(true)
    dragStartX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0
    currentDragOffset.current = 0
    setDragOffset(0)
  }

  const onPointerMove = (e) => {
    if (!isDragging) return
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0
    const diff = currentX - dragStartX.current
    currentDragOffset.current = diff
    setDragOffset(diff)
  }

  const onPointerUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    const threshold = 50
    if (currentDragOffset.current > threshold) {
      handlePrev()
    } else if (currentDragOffset.current < -threshold) {
      handleNext()
    }
    setDragOffset(0)
    currentDragOffset.current = 0
  }

  return (
    <section id="casos" className="vx-section vx-cases-carousel-section">
      {/* Top Header matching reference image */}
      <div className="container text-center mb-4 mb-lg-5">
        <div className="d-inline-flex align-items-center mb-3">
          <span className="vx-pill-badge">
            Things I've Built
          </span>
        </div>
        <p className="vx-carousel-subtitle mb-0">
          Featured work and side projects
        </p>
      </div>

      {/* Panoramic Carousel Container */}
      <div
        className="vx-carousel-outer"
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={onPointerUp}
        onMouseLeave={onPointerUp}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={onPointerUp}
      >
        {/* Navigation Arrows in the Middle ("pequeñas flechas de dirección en el medio") */}
        <button
          type="button"
          className="vx-carousel-nav-btn vx-carousel-nav-prev"
          onClick={handlePrev}
          aria-label="Proyecto anterior"
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        <button
          type="button"
          className="vx-carousel-nav-btn vx-carousel-nav-next"
          onClick={handleNext}
          aria-label="Siguiente proyecto"
        >
          <i className="bi bi-chevron-right"></i>
        </button>

        {/* The Track with math-exact centering */}
        <div
          ref={carouselTrackRef}
          className={`vx-carousel-track ${isDragging ? 'is-dragging' : ''}`}
          style={{
            transform: `translateX(calc(50% - (var(--card-width) / 2) - (${activeIndex} * (var(--card-width) + var(--card-gap))) + ${dragOffset}px))`,
          }}
        >
          {projectCases.map((project, idx) => {
            const isActive = idx === activeIndex
            return (
              <div
                key={idx}
                className={`vx-carousel-card ${isActive ? 'is-active' : 'is-inactive'}`}
                onClick={() => {
                  if (!isActive) setActiveIndex(idx)
                }}
              >
                {/* Background image & gradient overlay */}
                <div
                  className="vx-card-bg"
                  style={{
                    backgroundImage: project.image ? `url(${project.image})` : 'none',
                  }}
                />
                <div className="vx-card-overlay" />

                {/* Card Content */}
                <div className="vx-card-inner">
                  {/* Top badges / meta */}
                  <div className="vx-card-top-meta">
                    {project.badgeLabel && (
                      <span className="vx-card-status-badge">
                        <span className="vx-pulse-dot me-1"></span>
                        {project.badgeLabel}
                      </span>
                    )}
                  </div>

                  {/* Bottom Area */}
                  <div className="vx-card-bottom-row">
                    {/* Left: Tag & Large Title */}
                    <div className="vx-card-info">
                      <span className={`vx-card-category text-${project.tagColor || 'yellow'}`}>
                        {project.tag}
                      </span>
                      <h3 className="vx-card-title">{project.title}</h3>
                      {project.subtitle && (
                        <p className="vx-card-snippet mb-0">{project.subtitle}</p>
                      )}
                    </div>

                    {/* Right: "Ver caso" & "Ver demo" HTML buttons */}
                    <div className="vx-card-actions">
                      <a
                        href={project.caseUrl || `/casos/${project.slug}`}
                        className="vx-btn-case"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Ver caso</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>

                      <a
                        href={project.demoUrl || project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="vx-btn-demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Ver demo</span>
                        <i className="bi bi-box-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Pagination Indicators */}
      <div className="vx-carousel-dots">
        {projectCases.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`vx-carousel-dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Ir al proyecto ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
