import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import MainLayout from '@/layouts/MainLayout'
import LoginPage from '@/pages/LoginPage'
import ProfilePage from '@/pages/ProfilePage'
import DashboardNasabah from '@/pages/Nasabah/DashboardNasabah'
import ApplyLoanPage from '@/pages/Nasabah/ApplyLoanPage'
import InboxPage from '@/pages/Nasabah/InboxPage'
import ChatInboxPage from '@/pages/Nasabah/ChatInboxPage'
import ModulePage from '@/pages/Nasabah/ModulePage'
import DashboardAdmin from '@/pages/Admin/DashboardAdmin'
import ListNasabah from '@/pages/Admin/ListNasabah'
import ListPinjaman from '@/pages/Admin/ListPeminjaman'
import LoanApplication from '@/pages/Admin/LoanApplication'
import LandingPage from '@/pages/LandingPage'
import NasabahCard from '@/pages/Card/NasabahCard'
import RegisterPage from '@/pages/RegisterPage'


import DashboardSuperadmin from '../pages/Superadmin/DashboardSuperadmin'
import ListPinjamanSuperadmin from '../pages/Superadmin/ListPinjamanSuperadmin'
import DetailPengajuanSuperadmin from '../pages/Superadmin/DetailPengajuanSuperadmin'
import ListNasabahSuperadmin from '../pages/Superadmin/ListNasabahSuperadmin'
import LaporanSuperadmin from '../pages/Superadmin/LaporanSuperadmin'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ==================== PUBLIC ROUTES ==================== */}
        <Route path='/landingpage' element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

          <Route path="/superadmin" element={<DashboardSuperadmin />} />
          <Route path="/superadmin/list-pinjaman" element={<ListPinjamanSuperadmin />} />
          <Route path="/superadmin/list-nasabah" element={<ListNasabahSuperadmin />} />
          <Route path="/superadmin/laporan" element={<LaporanSuperadmin />} />
          <Route path="/superadmin/detail-pengajuan" element={<DetailPengajuanSuperadmin />} />

        {/* ==================== PROTECTED ROUTES ==================== */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            {/* Nasabah */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/dashboardnasabah" element={<DashboardNasabah />} />
            <Route path="/" element={<Navigate to="/dashboardnasabah" replace />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/applyloan" element={<ApplyLoanPage />} />
            <Route path="/inbox" element={<InboxPage />} />
            <Route path="/chatinbox" element={<ChatInboxPage />} />
            <Route path="/module" element={<ModulePage />} />
            
            {/* Admin */}
            <Route path="/dashboardadmin" element={<DashboardAdmin />} />
            <Route path="/listnasabah" element={<ListNasabah />} />
            <Route path="/listpinjaman" element={<ListPinjaman />} />
            <Route path="/loanapply" element={<LoanApplication />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}