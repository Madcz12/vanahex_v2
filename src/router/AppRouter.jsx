import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage, VanahexBarraPage } from '../landing/pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/casos/vanahex-barra" element={<VanahexBarraPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
