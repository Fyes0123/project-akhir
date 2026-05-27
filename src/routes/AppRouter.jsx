import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import MainLayout from '@/layouts/MainLayout'
import LoginPage from '@/pages/LoginPage'
import DashboardPage from '@/pages/DashboardPage'
import TestCode from '@/pages/TestCode'
import TestCode2 from '@/pages/TestCode2'
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

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path='/landingpage' element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected – wrapped in MainLayout */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
          {/* Nasabah */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/test-code" element={<TestCode />} />
            <Route path="/test-code2" element={<TestCode2 />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/dashboardnasabah" element={<DashboardNasabah />} />
            <Route path="/applyloan" element={<ApplyLoanPage />} />
            <Route path="/inbox" element={<InboxPage />} />
            <Route path="/chatinbox" element={<ChatInboxPage />} />
            <Route path="/module" element={<ModulePage />} />
          {/* Nasabah */}
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
