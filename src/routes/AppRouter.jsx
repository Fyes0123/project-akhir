import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import MainLayout from '@/layouts/MainLayout'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import LandingPage from '@/pages/LandingPage'
{/* Nasabah */}
import ProfilePage from '@/pages/Nasabah/ProfilePage'
import DashboardNasabah from '@/pages/Nasabah/DashboardNasabah'
import ApplyLoanPage from '@/pages/Nasabah/ApplyLoanPage'
import InboxPage from '@/pages/Nasabah/InboxPage'
import ModulePage from '@/pages/Nasabah/ModulePage'
import Quiz from '@/pages/Nasabah/Quiz'
import NasabahCard from '@/pages/Card/NasabahCard'
{/* Admin */}
import ListNasabah from '@/pages/Admin/ListNasabah'
import ListPinjaman from '@/pages/Admin/ListPeminjaman'
import LoanApplication from '@/pages/Admin/LoanApplication'
import DashboardAdmin from '@/pages/Admin/DashboardAdmin'
import VerificationPage from '@/pages/Admin/VerificationPage';
<<<<<<< HEAD
=======
{/* Superadmin */}
>>>>>>> addnew-frontend-dashboard-profile
import DashboardSuperadmin from '../pages/Superadmin/DashboardSuperadmin'
import ListPinjamanSuperadmin from '../pages/Superadmin/ListPinjamanSuperadmin'
import DetailPengajuanSuperadmin from '../pages/Superadmin/DetailPengajuanSuperadmin'
import ListNasabahSuperadmin from "../pages/Admin/ListNasabah"
import LaporanSuperadmin from '../pages/Superadmin/LaporanSuperadmin'
import PersetujuanSuperadmin from "../pages/Superadmin/PersetujuanSuperadmin";
import Community from '../pages/Nasabah/Community'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ==================== PUBLIC ROUTES ==================== */}
        <Route path='/landingpage' element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
          
        {/* ==================== PROTECTED ROUTES ==================== */}
        <Route element={<ProtectedRoute />}>

            <Route path="/superadmin" element={<DashboardSuperadmin />} />
          <Route path="/superadmin/list-pinjaman" element={<ListPinjamanSuperadmin />} />
          <Route path="/superadmin/list-nasabah" element={<ListNasabahSuperadmin />} />
          <Route path="/superadmin/laporan" element={<LaporanSuperadmin />} />
          <Route path="/superadmin/detail-pengajuan" element={<DetailPengajuanSuperadmin />} />
          <Route path="/superadmin/verifikasi" element={<PersetujuanSuperadmin />} />

          <Route path="/dashboardadmin" element={<DashboardAdmin />} />
          <Route path="/listnasabah" element={<ListNasabah />} />
          <Route path="/listpinjaman" element={<ListPinjaman />} />
          <Route path="/loanapply" element={<LoanApplication />} />
          <Route path="/admin/verification" element={<VerificationPage />} />

          <Route element={<MainLayout />}>
          
            {/* Nasabah */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/dashboardnasabah" element={<DashboardNasabah />} />
            <Route path="/" element={<Navigate to="/dashboardnasabah" replace />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/applyloan" element={<ApplyLoanPage />} />
            <Route path="/inbox" element={<InboxPage />} />
            <Route path="/module" element={<ModulePage />} />
            <Route path="/quiz" element={<Quiz />} />
            
            {/* Admin */}
            
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}