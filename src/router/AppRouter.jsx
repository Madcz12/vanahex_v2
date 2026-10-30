import { Routes, Route, Navigate } from 'react-router-dom'
import { ScrollToTop } from '../ui'
import {
  LandingPage,
  VanahexBarraPage,
  MsBarbershopPage,
  FdsMelillaPage,
  VanahexTiendaPage,
  VanahexRepuestosPage,
} from '../landing/pages'

export const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/casos/vanahex-barra" element={<VanahexBarraPage />} />
        <Route path="/casos/ms-barbershop" element={<MsBarbershopPage />} />
        <Route path="/casos/barberia" element={<MsBarbershopPage />} />
        <Route path="/casos/fds-melilla" element={<FdsMelillaPage />} />
        <Route path="/casos/vanahex-tienda" element={<VanahexTiendaPage />} />
        <Route path="/casos/vanahex-repuestos" element={<VanahexRepuestosPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}
