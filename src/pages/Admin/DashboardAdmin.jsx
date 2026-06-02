import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const DashboardAdmin = () => {
  const navigate = useNavigate();

  const [monitoringData, setMonitoringData] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('listStatusDaftarAdmin');
    if (localData) {
      setMonitoringData(JSON.parse(localData));
    } else {
      const initialLoansData = [
        { id: 101, name: "Ibu Aminah - UMKM Keripik", purpose: "Modal Bahan Baku", amount: 5000000, tenor: "12 Bulan", status: "Pending" },
        { id: 102, name: "Ibu Siti - Tenun Ikat", purpose: "Beli Alat Tenun Baru", amount: 8000000, tenor: "24 Bulan", status: "Pending" },
        { id: 103, name: "Ibu Fatimah - Warung Kelontong", purpose: "Restock Sembako", amount: 3500000, tenor: "6 Bulan", status: "Pending" },
        { id: 104, name: "Ibu Rahma - Konveksi Rumahan", purpose: "Beli Mesin Jahit Obras", amount: 12000000, tenor: "18 Bulan", status: "Pending" },
        { id: 105, name: "Ibu Khadijah - Budidaya Lele", purpose: "Pembuatan Kolam Terpal", amount: 4500000, tenor: "12 Bulan", status: "Pending" },
        { id: 106, name: "Ibu Maryam - Katering Rumahan", purpose: "Beli Alat Masak & Gas", amount: 7000000, tenor: "12 Bulan", status: "Pending" },
      ];
      localStorage.setItem('listStatusDaftarAdmin', JSON.stringify(initialLoansData));
      setMonitoringData(initialLoansData);
    }
  }, []);

  // 1. RUMUS DINAMIS TOTAL NASABAH
  const baseNasabah = 120;
  const nasabahBaruCair = monitoringData.filter(
    (item) => item.status === "Disetujui Superadmin" || item.status === "Cair"
  ).length;
  const totalNasabahDinamis = baseNasabah + nasabahBaruCair;

  // 2. RUMUS DINAMIS PENGAJUAN AKTIF: Berkurang jika statusnya disetujui ATAU ditolak
  const pengajuanAktifHitung = monitoringData.filter(
    (item) => item.status !== "Disetujui Superadmin" && item.status !== "Cair" && item.status !== "Ditolak Superadmin"
  ).length;

  const laporanDiterima = '150+';

  const colors = {
    amarthaDark: "#034425",
    amarthaActive: "#0f5933", 
    bgGray: "#f8fafc",
    textMain: "#0f172a",
    textMuted: "#64748b"
  };

  const styles = {
    wrapper: { 
      display: "flex", 
      minHeight: "100vh", 
      fontFamily: "'Inter', sans-serif",
      backgroundColor: colors.bgGray 
    },
    sidebar: {
      width: "280px",
      backgroundColor: colors.amarthaDark,
      color: "#ffffff",
      padding: "30px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "25px",
      boxShadow: "4px 0 10px rgba(0,0,0,0.05)"
    },
    sidebarHeader: {
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      paddingBottom: "15px"
    },
    brandTitle: {
      margin: 0,
      fontSize: "20px",
      fontWeight: "800",
      letterSpacing: "0.5px"
    },
    menuContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    },
    sidebarMenu: (isActive) => ({
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px 16px",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "600",
      backgroundColor: isActive ? colors.amarthaActive : "transparent",
      color: isActive ? "#ffffff" : "#cbd5e1",
      transition: "all 0.2s"
    }),
    mainContent: {
      flex: 1,
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      overflowY: "auto"
    },
    contentHeader: {
      display: "flex",
      justifyContent: "between",
      alignItems: "center"
    },
    metricsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px"
    },
    cardMetric: { 
      backgroundColor: "#ffffff", 
      padding: "24px", 
      borderRadius: "16px", 
      border: "1px solid #e2e8f0", 
      display: "flex", 
      flexDirection: "column", 
      gap: "8px", 
      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" 
    },
    metricLabel: { fontSize: "13px", fontWeight: "700", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "0.5px" },
    metricValue: { fontSize: "32px", fontWeight: "800", color: colors.textMain },
    tableBox: { backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" },
    table: { width: "100%", borderCollapse: "collapse", textAlign: "left" },
    th: { backgroundColor: "#f8fafc", padding: "16px 20px", fontSize: "12px", fontWeight: "700", color: colors.textMuted, borderBottom: "1px solid #e2e8f0", textTransform: "uppercase" },
    td: { padding: "18px 20px", fontSize: "14px", color: colors.textMain, borderBottom: "1px solid #f1f5f9" },
    badge: (status) => ({
      padding: "6px 12px", borderRadius: "9999px", fontSize: "12px", fontWeight: "700", display: "inline-block",
      backgroundColor: status === "Diteruskan" ? "#dcfce7" : status === "Perbaikan" ? "#ffe4e6" : status === "Disetujui Superadmin" ? "#e0f2fe" : status === "Ditolak Superadmin" ? "#fee2e2" : "#fef3c7",
      color: status === "Diteruskan" ? "#16a34a" : status === "Perbaikan" ? "#e11d48" : status === "Disetujui Superadmin" ? "#0369a1" : status === "Ditolak Superadmin" ? "#991b1b" : "#d97706",
    }),
    btnAction: { backgroundColor: colors.amarthaDark, color: "white", border: "none", padding: "8px 16px", rounded: "8px", borderRadius: "8px", cursor: "pointer", fontWeight: "600", fontSize: "12px", transition: "background 0.2s" },
  };

  return (
    <div style={styles.wrapper}>
      
      {/* ================= SIDEBAR KIRI ================= */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <h2 style={styles.brandTitle}>Amartha Empower</h2>
        </div>
        
        <div style={styles.menuContainer}>
          <div style={styles.sidebarMenu(true)} onClick={() => navigate('/dashboardadmin')}>
            <span>🏠</span>
            <span>Dashboard</span>
          </div>
          <div style={styles.sidebarMenu(false)} onClick={() => navigate('/listnasabah')}>
            <span>👥</span>
            <span>Nasabah Management</span>
          </div>
          <div style={styles.sidebarMenu(false)} onClick={() => navigate('/loanapply')}>
            <span>📝</span>
            <span>Pengajuan Pinjaman</span>
          </div>
        </div>
      </div>

      {/* ================= AREA KONTEN UTAMA ================= */}
      <div style={styles.mainContent}>
        
        <div style={styles.contentHeader}>
          <div>
            <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "800", color: colors.textMain }}>Admin Lapangan</h1>
            <p style={{ margin: "4px 0 0 0", fontSize: "14px", color: colors.textMuted }}>Wilayah Kerja: Sektor Barat</p>
          </div>
        </div>

        {/* Baris Metrics Cards */}
        <div style={styles.metricsGrid}>
          <div style={styles.cardMetric}>
            <span style={styles.metricLabel}>Total Nasabah</span>
            {/* Menggunakan totalNasabahDinamis yang otomatis bertambah +1 jika cair */}
            <div style={styles.metricValue}>{totalNasabahDinamis}</div>
          </div>
          <div style={styles.cardMetric}>
            <span style={styles.metricLabel}>Pengajuan Aktif</span>
            <div style={{ ...styles.metricValue, color: "#d97706" }}>{pengajuanAktifHitung}</div>
          </div>
          <div style={styles.cardMetric}>
            <span style={styles.metricLabel}>Laporan Diterima</span>
            <div style={{ ...styles.metricValue, color: "#64748b" }}>{laporanDiterima}</div>
          </div>
        </div>

        {/* Tabel Rangkuman Utama */}
        <div>
          <h3 style={{ fontSize: "18px", fontWeight: "700", color: colors.textMain, marginBottom: "15px" }}>
            📊 Monitoring UMKM (Status Berkas)
          </h3>
          <div style={styles.tableBox}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>NAMA MITRA</th>
                  <th style={styles.th}>NOMINAL</th>
                  <th style={styles.th}>STATUS BERKAS</th>
                  <th style={styles.th}>AKSI</th>
                </tr>
              </thead>
              <tbody>
                {monitoringData.map((item) => (
                  <tr key={item.id}>
                    <td style={styles.td}><strong>{item.name || item.nama}</strong></td>
                    <td style={styles.td}>Rp {(item.amount || 0).toLocaleString('id-ID')}</td>
                    <td style={styles.td}>
                      <span style={styles.badge(item.status)}>
                        {item.status === "Diteruskan" ? "✓ Diteruskan" : 
                         item.status === "Perbaikan" ? "⚠️ Perbaikan" : 
                         item.status === "Disetujui Superadmin" ? "💰 Cair" :
                         item.status === "Ditolak Superadmin" ? "❌ Ditolak" : item.status}
                      </span>
                    </td>
                    <td style={styles.td}>
                      <button style={styles.btnAction} onClick={() => navigate('/loanapply')}>
                        Detail Berkas
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardAdmin;