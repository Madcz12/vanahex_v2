import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage } from '../landing/pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
