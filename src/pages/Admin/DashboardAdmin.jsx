import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useAuth } from '@/hooks/useAuth';

const DashboardAdmin = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const { logout } = useAuth()
    
      const handleLogout = () => {
        logout()
    
        navigate('/login', {
          replace: true,
        })
      }

  const [monitoringData, setMonitoringData] = useState([]);

  // ================= UTAMAKAN LOCALSTORAGE SUPAYA SINKRON 100% =================
  // ================= DATA CENTER SINKRON (19 DATA TOTAL) =================
  useEffect(() => {
    const dataLokal = localStorage.getItem('listStatusDaftarAdmin');
    if (dataLokal) {
      setMonitoringData(JSON.parse(dataLokal));
    } else {
      const dataAwal = [
        // 9 Data Riil Sebelumnya
        { id: 'LN-9111', name: 'Ibu Kartika', amount: 4500000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9112', name: 'Ibu Lestari', amount: 3500000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9113', name: 'Ibu Megawati', amount: 6000000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9114', name: 'Ibu Novita', amount: 5000000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9115', name: 'Ibu Karin', amount: 4500000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9116', name: 'Ibu Putri', amount: 3500000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9117', name: 'Ibu Mawar', amount: 6000000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9118', name: 'Ibu Sekar', amount: 5000000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-8812', name: 'Ibu Siti Aminah', amount: 5000000, status: 'Disetujui Superadmin', tenor: '50 Minggu' },
        { id: 'LN-4321', name: 'Ibu Sri Wahyuni', amount: 7500000, status: 'Pending', tenor: '50 Minggu' }, 
        { id: 'LN-9087', name: 'Ibu Fatimah', amount: 3000000, status: 'Diteruskan', tenor: '50 Minggu' },  
        { id: 'LN-9088', name: 'Ibu Rara', amount: 3000000, status: 'Diteruskan', tenor: '50 Minggu' },
        { id: 'LN-9089', name: 'Ibu Dewi', amount: 3000000, status: 'Diteruskan', tenor: '50 Minggu' },
        { id: 'LN-9090', name: 'Ibu Yanti', amount: 3000000, status: 'Diteruskan', tenor: '50 Minggu' },
        { id: 'LN-9091', name: 'Ibu Tina', amount: 3000000, status: 'Diteruskan', tenor: '50 Minggu' },
        { id: 'LN-9092', name: 'Ibu Hartini', amount: 3000000, status: 'Diteruskan', tenor: '50 Minggu'},
        { id: 'LN-9093', name: 'Ibu Mina', amount: 3000000, status: 'Diteruskan', tenor: '50 Minggu' },

        // 10 Data Dummy Baru Khusus Uji Coba (Semua Status 'Pending')
        { id: 'LN-9101', name: 'Ibu Anisa', amount: 2500000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9102', name: 'Ibu Budiati', amount: 4000000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9103', name: 'Ibu Cahyani', amount: 5500000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9104', name: 'Ibu Darmi', amount: 3500000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9105', name: 'Ibu Erna', amount: 6000000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9106', name: 'Ibu Fitriani', amount: 4500000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9107', name: 'Ibu Gunawati', amount: 2000000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9108', name: 'Ibu Herlina', amount: 8000000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9109', name: 'Ibu Isyana', amount: 3000000, status: 'Pending', tenor: '50 Minggu' },
        { id: 'LN-9110', name: 'Ibu Juwita', amount: 5000000, status: 'Pending', tenor: '50 Minggu' },
      ];
      localStorage.setItem('listStatusDaftarAdmin', JSON.stringify(dataAwal));
      setMonitoringData(dataAwal);
    }
  }, []);

  // ================= RUMUS PENGAJUAN AKTIF BERKURANG =================
  const pengajuanAktifHitung = Array.isArray(monitoringData) 
    ? monitoringData.filter((item) => {
        const currentStatus = item?.status ? item.status.toLowerCase() : "";
        return currentStatus === "pending";
      }).length
    : 0;

  // ================= PERBAIKAN SINKRONISASI KUNCI UTAMA =================
  // Mengambil data monitoring global dari langkah aksi Superadmin
  const globalMonitoring = JSON.parse(localStorage.getItem('monitoringData')) || [];
  
  const nasabahBaruCair = globalMonitoring.filter((item) => {
    const currentStatus = item?.status ? item.status.toLowerCase() : "";
    return currentStatus === "disetujui superadmin" || currentStatus === "cair";
  }).length;

  // Nilai 119 digabung dengan kiriman update data persetujuan dari Superadmin
  const totalNasabahDinamis = 119 + nasabahBaruCair;

  const laporanDiterima = '150+';

  const colors = {
    amarthaDark: "#034425",
    amarthaActive: "#0f5933",
    bgGray: "#f8fafc",
    textMain: "#0f172a",
    textMuted: "#64748b"
  };

  const styles = {
    wrapper: { display: "flex", minHeight: "100vh", fontFamily: "'Inter', sans-serif", backgroundColor: colors.bgGray },
    sidebar: { width: "280px", backgroundColor: colors.amarthaDark, color: "#ffffff", padding: "30px 20px", display: "flex", flexDirection: "column", gap: "25px", boxShadow: "4px 0 10px rgba(0,0,0,0.05)" },
    sidebarHeader: { borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "15px" },
    brandTitle: { margin: 0, fontSize: "20px", fontWeight: "800", letterSpacing: "0.5px" },
    menuContainer: { display: "flex", flexDirection: "column", gap: "8px" },
    sidebarMenu: (isActive) => ({ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "10px", cursor: "pointer", fontSize: "14px", fontWeight: "600", backgroundColor: isActive ? colors.amarthaActive : "transparent", color: isActive ? "#ffffff" : "#cbd5e1", transition: "all 0.2s" }),
    mainContent: { flex: 1, padding: "40px", display: "flex", flexDirection: "column", gap: "30px", overflowY: "auto" },
    contentHeader: { display: "flex", justifyContent: "between", alignItems: "center" },
    metricsGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" },
    cardMetric: { backgroundColor: "#ffffff", padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", gap: "8px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" },
    metricLabel: { fontSize: "13px", fontWeight: "700", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "0.5px" },
    metricValue: { fontSize: "32px", fontWeight: "800", color: colors.textMain },
    tableBox: { backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" },
    table: { width: "100%", borderCollapse: "collapse", textAlign: "left" },
    th: { backgroundColor: "#f8fafc", padding: "16px 20px", fontSize: "12px", fontWeight: "700", color: colors.textMuted, borderBottom: "1px solid #e2e8f0", textTransform: "uppercase" },
    td: { padding: "18px 20px", fontSize: "14px", color: colors.textMain, borderBottom: "1px solid #f1f5f9" },
    badge: (status) => {
      const normalized = status ? status.toLowerCase() : "";
      const isDiteruskan = normalized === "diteruskan";
      const isPerbaikan = normalized === "perbaikan";
      const isSetuju = normalized === "disetujui superadmin" || normalized === "cair";
      const isTolak = normalized === "ditolak superadmin";
      
      return {
        padding: "6px 12px", borderRadius: "9999px", fontSize: "12px", fontWeight: "700", display: "inline-block",
        backgroundColor: isDiteruskan ? "#dcfce7" : isPerbaikan ? "#ffe4e6" : isSetuju ? "#e0f2fe" : isTolak ? "#fee2e2" : "#fef3c7",
        color: isDiteruskan ? "#16a34a" : isPerbaikan ? "#e11d48" : isSetuju ? "#0369a1" : isTolak ? "#991b1b" : "#d97706",
      };
    },
  };

  return (

      <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh", fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column" }}>
      
      {/* HEADER / NAVBAR */}
      <div style={{ backgroundColor: "#023015", padding: "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <h3 style={{ color: "#fff", margin: 0, fontSize: "18px", fontWeight: "800", letterSpacing: "0.5px" }}>
          Amartha Empower <span style={{ fontWeight: "400", color: "#e8fcf0", fontSize: "13px", marginLeft: "8px", borderLeft: "1px solid #047857", paddingLeft: "8px" }}>Superadmin Console</span>
        </h3>
        <button 
          onClick={() => alert('Logout Berhasil')}
          onClick={handleLogout}
          style={{ padding: "8px 20px", backgroundColor: "#b91c1c", color: "#fff", border: "none", borderRadius: "8px", fontSize: "13px", fontWeight: "700", cursor: "pointer", transition: "all 0.2s" }}
        >
          Logout
        </button>
      </div>

      <div style={styles.wrapper}></div>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}><h2 style={styles.brandTitle}>Amartha Empower</h2></div>
        <div style={styles.menuContainer}>
          <div style={styles.sidebarMenu(true)} onClick={() => navigate('/dashboardadmin')}><span>🏠</span><span>Dashboard</span></div>
          <div style={styles.sidebarMenu(false)} onClick={() => navigate('/listnasabah')}><span>👥</span><span>Nasabah Management</span></div>
          <div style={styles.sidebarMenu(false)} onClick={() => navigate('/loanapply')}><span>📝</span><span>Pengajuan Pinjaman</span></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={styles.mainContent}>
        <div style={styles.contentHeader}>
          <div>
            <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "800", color: colors.textMain }}>Admin Lapangan</h1>
            <p style={{ margin: "4px 0 0 0", fontSize: "14px", color: colors.textMuted }}>Wilayah Kerja: Sektor Barat</p>
          </div>
        </div>

        {/* METRICS */}
        <div style={styles.metricsGrid}>
          <div style={styles.cardMetric}>
            <span style={styles.metricLabel}>Total Nasabah</span>
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

        {/* TABEL MONITORING */}
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
                </tr>
              </thead>
              <tbody>
                {Array.isArray(monitoringData) && monitoringData.map((item, index) => {
                  const namaNasabah = item?.name || "Nasabah";
                  const nominalPinjaman = item?.amount || 0;
                  const statusBerkas = item?.status || "Pending";

                  return (
                    <tr key={item?.id || index}>
                      <td style={styles.td}><strong>{namaNasabah}</strong></td>
                      <td style={styles.td}>Rp {Number(nominalPinjaman).toLocaleString('id-ID')}</td>
                      <td style={styles.td}>
                        <span style={styles.badge(statusBerkas)}>
                          {statusBerkas.toLowerCase() === "diteruskan" ? "✓ Diteruskan" :
                           statusBerkas.toLowerCase() === "perbaikan" ? "⚠️ Perbaikan" :
                           statusBerkas.toLowerCase() === "disetujui superadmin" ? "Disetujui Superadmin" :
                           statusBerkas.toLowerCase() === "ditolak superadmin" ? "❌ Ditolak" : statusBerkas}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardAdmin;