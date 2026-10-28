import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage, VanahexBarraPage, MsBarbershopPage } from '../landing/pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/casos/vanahex-barra" element={<VanahexBarraPage />} />
      <Route path="/casos/ms-barbershop" element={<MsBarbershopPage />} />
      <Route path="/casos/barberia" element={<MsBarbershopPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
