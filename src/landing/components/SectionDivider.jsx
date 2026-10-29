import React from 'react'

export const SectionDivider = ({ glow = true, variant = 'mint' }) => {
  return (
    <div className={`vx-section-divider vx-divider-${variant}`} aria-hidden="true">
      {glow && <div className="vx-section-divider-glow" />}
    </div>
  )
}
