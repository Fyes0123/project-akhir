import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useAuth } from '@/hooks/useAuth'

const DashboardAdmin = () => {
  const navigate = useNavigate();
  const { user } = useAuth()

  const [stats] = useState({
    totalNasabah: localStorage.getItem('totalNasabah') || '120',
    pengajuanAktif: '33', 
    laporanDiterima: '150+',
  });

  // Membaca data dari laci localStorage yang sama dengan Loan Application
  const [monitoringData, setMonitoringData] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('listStatusDaftarAdmin');
    if (localData) {
      setMonitoringData(JSON.parse(localData));
    } else {
      // Data awal backup jika localStorage belum terbentuk
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

  const colors = {
    amarthaDark: "#034425",
    amarthaLight: "#a3cfbb",
    bgGray: "#f8fafc",
    textMain: "#0f172a",
    textMuted: "#64748b"
  };

  const styles = {
    wrapper: { backgroundColor: colors.bgGray, minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "'Inter', sans-serif" },
    container: { flex: 1, maxWidth: "1300px", width: "100%", margin: "30px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "350px 1fr", gap: "25px" },
    leftPanel: { display: "flex", flexDirection: "column", gap: "20px" },
    cardMetric: { backgroundColor: "#ffffff", padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" },
    metricLabel: { fontSize: "14px", fontWeight: "600", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "0.5px" },
    metricValue: { fontSize: "36px", fontWeight: "800", color: colors.amarthaDark },
    rightPanel: { display: "flex", flexDirection: "column", gap: "25px" },
    sectionTitle: { fontSize: "20px", fontWeight: "700", color: colors.textMain, marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" },
    tableBox: { backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" },
    table: { width: "100%", borderCollapse: "collapse", textAlign: "left" },
    th: { backgroundColor: "#f8fafc", padding: "15px 20px", fontSize: "13px", fontWeight: "700", color: colors.textMuted, borderBottom: "1px solid #e2e8f0" },
    td: { padding: "18px 20px", fontSize: "14px", color: colors.textMain, borderBottom: "1px solid #f1f5f9" },
    badge: (status) => ({
      padding: "5px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "700",
      backgroundColor: status === "Diteruskan" ? "#dcfce7" : status === "Perbaikan" ? "#ffe4e6" : status === "Disetujui Superadmin" ? "#e0f2fe" : status === "Ditolak Superadmin" ? "#fee2e2" : "#fef3c7",
      color: status === "Diteruskan" ? "#16a34a" : status === "Perbaikan" ? "#e11d48" : status === "Disetujui Superadmin" ? "#0369a1" : status === "Ditolak Superadmin" ? "#991b1b" : "#d97706",
    }),
    btnAction: { backgroundColor: colors.amarthaDark, color: "white", border: "none", padding: "8px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: "600", fontSize: "12px" },
    menuGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" },
    menuItem: { backgroundColor: colors.amarthaDark, color: "white", padding: "15px 10px", borderRadius: "12px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", transition: "transform 0.2s", textAlign: "center" }
  };

  return (
    <div style={styles.wrapper}>
      <Navbar />
      <div style={styles.container}>
        {/* SIDEBAR KIRI */}
        <div style={styles.leftPanel}>
          <div style={{marginBottom: "10px"}}>
            <h2 style={{margin: 0, fontSize: "24px", color: colors.amarthaDark}}>Admin Lapangan</h2>
            <p style={{margin: "4px 0 0 0", fontSize: "13px", color: colors.textMuted}}>Wilayah Kerja: Sektor Barat</p>
          </div>
          <div style={styles.cardMetric}><span style={styles.metricLabel}>Total Nasabah</span><div style={styles.metricValue}>{stats.totalNasabah}</div></div>
          <div style={styles.cardMetric}><span style={styles.metricLabel}>Pengajuan Aktif</span><div style={{...styles.metricValue, color: "#d97706"}}>{stats.pengajuanAktif}</div></div>
          <div style={styles.cardMetric}><span style={styles.metricLabel}>Laporan Diterima</span><div style={{...styles.metricValue, color: "#64748b"}}>{stats.laporanDiterima}</div></div>
          
          <div style={{marginTop: "10px"}}>
             <span style={styles.metricLabel}>Menu Cepat</span>
             <div style={{...styles.menuGrid, marginTop: "10px"}}>
                <div style={styles.menuItem} onClick={() => navigate('/listnasabah')}>👥 <span style={{fontSize: "12px", fontWeight: "600"}}>Nasabah Management</span></div>
                <div style={styles.menuItem} onClick={() => navigate('/loanapply')}>📝 <span style={{fontSize: "12px", fontWeight: "600"}}>Pengajuan Pinjaman</span></div>
             </div>
          </div>
        </div>

        {/* TABEL RANGKUMAN UTAMA */}
        <div style={styles.rightPanel}>
          <div>
            <h3 style={styles.sectionTitle}>📊 Monitoring UMKM (Status Berkas)</h3>
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
      <Footer />
    </div>
  );
};

export default DashboardAdmin;