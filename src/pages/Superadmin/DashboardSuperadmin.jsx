import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useAuth } from '@/hooks/useAuth';

const DashboardSuperadmin = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  // State untuk menyimpan data monitoring dari localStorage
  const [monitoringData, setMonitoringData] = useState([]);
  const [approvedCount, setApprovedCount] = useState(25);

  useEffect(() => {
    // ==============================
    // DATA UTAMA: QUEUE SUPERADMIN
    // ==============================
    const superadminQueue = localStorage.getItem('listPengajuanSuperadmin');

    if (superadminQueue) {
      setMonitoringData(JSON.parse(superadminQueue));
    } else {
      setMonitoringData([]);
    }

    // ==============================
    // APPROVED COUNTER
    // ==============================
    const savedCount = localStorage.getItem('approvedCount');
    if (savedCount) {
      setApprovedCount(parseInt(savedCount));
    } else {
      localStorage.setItem('approvedCount', '25');
    }
  }, []);

  const baseNasabah = 120;

  // FIX: gunakan statusFinal (bukan status)
  const nasabahBaruCair = monitoringData.filter(
    (item) => item.statusFinal === "APPROVED" || item.statusFinal === "CAIR"
  ).length;

  const totalNasabahDinamis = baseNasabah + nasabahBaruCair;

  return (
    <div style={{
      backgroundColor: "#f4f6f9",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Inter', sans-serif",
      width: "100%",
      boxSizing: "border-box"
    }}>
      <Navbar />

      <div style={{
        display: "flex",
        flexDirection: "row",
        flex: "1",
        width: "100%",
        boxSizing: "border-box"
      }}>

        {/* SIDEBAR */}
        <div style={{
          width: "260px",
          backgroundColor: "#034425",
          color: "#ffffff",
          padding: "32px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          boxSizing: "border-box",
          textAlign: "left"
        }}>
          <div style={{
            backgroundColor: "#022c18",
            padding: "14px 16px",
            borderRadius: "12px",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>
            <span>🏠</span> Dashboard
          </div>

          <div onClick={() => navigate('/superadmin/verifikasi')} style={{ padding: "14px 16px", borderRadius: "12px", cursor: "pointer", opacity: 0.85 }}>
            <span>🔍</span> Verifikasi Peminjaman
          </div>

          <div onClick={() => navigate('/superadmin/laporan')} style={{ padding: "14px 16px", borderRadius: "12px", cursor: "pointer", opacity: 0.85 }}>
            <span>📊</span> Laporan Nasabah
          </div>

          <div onClick={() => navigate('/superadmin/list-nasabah')} style={{ padding: "14px 16px", borderRadius: "12px", cursor: "pointer", opacity: 0.85 }}>
            <span>👥</span> Nasabah Management
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div style={{
          flex: "1",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "32px"
        }}>

          {/* HEADER */}
          <div style={{ textAlign: "left" }}>
            <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a" }}>Superadmin</h1>
          </div>

          {/* KPI CARDS */}
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>

            <div style={{ flex: "1", minWidth: "280px", backgroundColor: "#fff", padding: "24px", borderRadius: "16px" }}>
              <span>Total Nasabah</span>
              <p style={{ fontSize: "36px", fontWeight: "800" }}>{totalNasabahDinamis}</p>
            </div>

            <div style={{ flex: "1", minWidth: "280px", backgroundColor: "#e2f5ea", padding: "24px", borderRadius: "16px" }}>
              <span>Pinjaman Disetujui</span>
              <p style={{ fontSize: "36px", fontWeight: "800", color: "#034425" }}>{approvedCount}</p>
            </div>

            <div style={{ flex: "1", minWidth: "280px", backgroundColor: "#fff", padding: "24px", borderRadius: "16px" }}>
              <span>Pinjaman Pending</span>
              <p style={{ fontSize: "36px", fontWeight: "800" }}>
                {monitoringData.filter(i => i.statusFinal === "PENDING").length}
              </p>
            </div>

          </div>

          {/* QUEUE PREVIEW (IMPORTANT ADDITION) */}
          <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "16px" }}>
            <h3>Antrean Pengajuan dari Admin</h3>

            {monitoringData.length === 0 ? (
              <p>Tidak ada pengajuan masuk</p>
            ) : (
              monitoringData.map((item) => (
                <div key={item.id} style={{ padding: "12px 0", borderBottom: "1px solid #eee" }}>
                  <strong>{item.nama}</strong>
                  <p>Rp {parseInt(item.nominal).toLocaleString('id-ID')}</p>
                  <p>Status: {item.statusFinal}</p>
                </div>
              ))
            )}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardSuperadmin;