import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth'

const SuperadminDashboard = () => {
  const navigate = useNavigate();
  const [antrean, setAntrean] = useState([]);
  
  // State aman untuk menampung data monitoring UMKM agar tidak blank screen
  const [monitoringData, setMonitoringData] = useState([]);

  useEffect(() => {
    // Mengambil data antrean dari localStorage
    const dataSuperadmin = JSON.parse(localStorage.getItem('listPengajuanSuperadmin')) || [];
    setAntrean(dataSuperadmin);

    // Mengambil data monitoring dari localStorage (sesuaikan key ini dengan aplikasi Anda)
    const dataMonitoring = JSON.parse(localStorage.getItem('monitoringData')) || [];
    setMonitoringData(dataMonitoring);
  }, []);

  // Hitung total nasabah secara dinamis
  const baseNasabah = 120;
  const nasabahBaruCair = Array.isArray(monitoringData)
    ? monitoringData.filter((item) => {
        const currentStatus = item?.status ? item.status.toLowerCase() : "";
        return currentStatus === "disetujui superadmin" || currentStatus === "cair";
      }).length
    : 0;
  const totalNasabahDinamis = baseNasabah + nasabahBaruCair;

  const { logout } = useAuth()
  
    const handleLogout = () => {
      logout()
  
      navigate('/login', {
        replace: true,
      })
    }

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

      {/* BODY LAYOUT (SIDEBAR + MAIN CONTENT) */}
      <div style={{ flex: 1, display: "flex" }}>
        
        {/* SIDEBAR (KOLOM KIRI) */}
        <div style={{ width: "260px", backgroundColor: "#023015", borderTop: "1px solid #047857", padding: "24px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", backgroundColor: "#e8fcf0", color: "#023015", borderRadius: "12px", fontWeight: "700", fontSize: "14px", cursor: "pointer" }}>
            📊 <span>Dashboard</span>
          </div>
          <div 
            onClick={() => navigate('/superadmin/verifikasi')}
            style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", color: "#94a3b8", borderRadius: "12px", fontWeight: "600", fontSize: "14px", cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(232, 252, 240, 0.1)"; e.currentTarget.style.color = "#e8fcf0"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#94a3b8"; }}
          >
            🔍 <span>Verifikasi Peminjaman</span>
          </div>
          <div 
            onClick={() => navigate('/superadmin/laporan')}
            style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", color: "#94a3b8", borderRadius: "12px", fontWeight: "600", fontSize: "14px", cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(232, 252, 240, 0.1)"; e.currentTarget.style.color = "#e8fcf0"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#94a3b8"; }}
          >
            📈 <span>Laporan Nasabah</span>
          </div>
          <div 
            onClick={() => navigate('/superadmin/listnasabah')}
            style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", color: "#94a3b8", borderRadius: "12px", fontWeight: "600", fontSize: "14px", cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(232, 252, 240, 0.1)"; e.currentTarget.style.color = "#e8fcf0"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#94a3b8"; }}
          >
            👥 <span>Nasabah Management</span>
          </div>
        </div>

        {/* MAIN CONTENT (KOLOM KANAN) */}
        <div style={{ flex: 1, padding: "40px", boxSizing: "border-box" }}>
          <h2 style={{ margin: "0 0 28px 0", color: "#023015", fontSize: "28px", fontWeight: "800" }}>Superadmin Overview</h2>

          {/* THREE TOP STATS CARDS */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px", marginBottom: "36px" }}>
            
            {/* Card 1: Total Nasabah Dinamis */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "24px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)", borderTop: "4px solid #cbd5e1" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#64748b" }}>Total Nasabah</span>
              <p style={{ margin: "12px 0 0 0", fontSize: "36px", fontWeight: "900", color: "#0f172a" }}>{totalNasabahDinamis}</p>
            </div>

            {/* Card 2: Pinjaman Disetujui Dinamis */}
<div style={{ backgroundColor: "#e8fcf0", borderRadius: "20px", padding: "24px", border: "1px solid #a7f3d0", boxShadow: "0 10px 20px rgba(2,48,21,0.03)" }}>
  <span style={{ fontSize: "13px", fontWeight: "700", color: "#047857" }}>Pinjaman Disetujui</span>
  {/* Logika: 25 dasar + jumlah data monitoring baru yang berhasil dicairkan */}
  <p style={{ margin: "12px 0 0 0", fontSize: "36px", fontWeight: "900", color: "#023015" }}>
    {25 + nasabahBaruCair}
  </p>
</div>

            {/* Card 3: Pinjaman Pending */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "24px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)", borderTop: "4px solid #00cc44" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#64748b" }}>Pinjaman Pending</span>
              <p style={{ margin: "12px 0 0 0", fontSize: "36px", fontWeight: "900", color: "#0f172a" }}>{antrean.filter(i => i.statusFinal === 'PENDING').length || 0}</p>
            </div>

          </div>

          {/* TABLE / LIST ANTREAN PENGAJUAN */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "24px", padding: "32px", border: "1px solid #e2e8f0", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h4 style={{ margin: 0, color: "#023015", fontSize: "16px", fontWeight: "800" }}>📥 Antrean Pengajuan dari Admin</h4>
              <span style={{ backgroundColor: "#e8fcf0", color: "#023015", fontSize: "12px", fontWeight: "700", padding: "6px 14px", borderRadius: "20px" }}>Konfirmasi Akhir</span>
            </div>

            {antrean.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px", color: "#94a3b8", fontSize: "14px" }}>
                📭 Seluruh antrean pengajuan selesai diverifikasi.
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {antrean.map((item) => (
                  <div 
                    key={item.id} 
                    style={{ 
                      display: "flex", 
                      justifyContent: "space-between", 
                      alignItems: "center", 
                      border: "1px solid #e2e8f0", 
                      borderRadius: "16px", 
                      padding: "20px 24px", 
                      backgroundColor: "#f8fafc"
                    }}
                  >
                    <div>
                      <p style={{ margin: 0, fontSize: "16px", fontWeight: "800", color: "#0f172a" }}>{item.nama}</p>
                      <p style={{ margin: "4px 0 6px 0", fontSize: "15px", fontWeight: "700", color: "#023015" }}>
                        Rp {item.nominal ? Number(item.nominal).toLocaleString('id-ID') : '0'}
                      </p>
                      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <span style={{ fontSize: "12px", color: "#64748b", fontWeight: "500" }}>ID: {item.loanId || item.id}</span>
                        <span style={{ color: "#cbd5e1" }}>•</span>
                        <span style={{ 
                          fontSize: "11px", 
                          fontWeight: "800", 
                          padding: "3px 10px", 
                          borderRadius: "20px",
                          backgroundColor: item.statusFinal === 'PENDING' ? '#fef3c7' : item.statusFinal === 'DISETUJUI' ? '#e8fcf0' : '#fff5f5',
                          color: item.statusFinal === 'PENDING' ? '#b45309' : item.statusFinal === 'DISETUJUI' ? '#023015' : '#ef4444'
                        }}>
                          Status: {item.statusFinal}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div style={{ backgroundColor: "#023015", padding: "16px", textAlign: "center", borderTop: "1px solid #047857" }}>
        <p style={{ margin: 0, color: "#94a3b8", fontSize: "12px", fontWeight: "500" }}>&copy; 2026 Amartha Empower. All rights reserved.</p>
      </div>

    </div>
  );
};

export default SuperadminDashboard;