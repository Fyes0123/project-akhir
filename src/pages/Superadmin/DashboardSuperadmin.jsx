import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const DashboardSuperadmin = () => {
  const navigate = useNavigate();
  
  // Ambil angka persetujuan secara dinamis dari localStorage
  const [approvedCount, setApprovedCount] = useState(25);

  useEffect(() => {
    const savedCount = localStorage.getItem('approvedCount');
    if (savedCount) {
      setApprovedCount(parseInt(savedCount));
    } else {
      localStorage.setItem('approvedCount', '25'); // Nilai default awal
    }
  }, []);

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
      {/* HEADER NAVBAR */}
      <Navbar />

      {/* STRUKTUR UTAMA: SIDEBAR KIRI & KONTEN KANAN */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        flex: "1",
        width: "100%",
        boxSizing: "border-box"
      }}>
        
        {/* SIDEBAR KIRI (WARNA HIJAU TUA AMARTHA) */}
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
          {/* Menu Dashboard Aktif */}
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

          {/* Menu Navigasi Sisi Kiri - Sudah Diarahkan ke Page Baru */}
          <div 
            onClick={() => navigate('/superadmin/verifikasi')} 
            style={{ padding: "14px 16px", borderRadius: "12px", cursor: "pointer", opacity: 0.85, display: "flex", alignItems: "center", gap: "12px" }}
          >
            <span>🔍</span> Verifikasi Peminjaman
          </div>
          
          <div onClick={() => navigate('/superadmin/laporan')} style={{ padding: "14px 16px", borderRadius: "12px", cursor: "pointer", opacity: 0.85, display: "flex", alignItems: "center", gap: "12px" }}>
            <span>📊</span> Laporan Nasabah
          </div>
          
          <div onClick={() => navigate('/superadmin/list-nasabah')} style={{ padding: "14px 16px", borderRadius: "12px", cursor: "pointer", opacity: 0.85, display: "flex", alignItems: "center", gap: "12px" }}>
            <span>👥</span> Nasabah Management
          </div>

          {/* Profil Singkat di Bawah Sidebar */}
          <div style={{ marginTop: "auto", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#ffffff", color: "#034425", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>SA</div>
            <div>
              <p style={{ margin: 0, fontSize: "14px", fontWeight: "600" }}>Superadmin</p>
              <p style={{ margin: 0, fontSize: "11px", opacity: 0.6 }}>Amartha Empower</p>
            </div>
          </div>
        </div>

        {/* AREA KONTEN UTAMA (SEBELAH KANAN) */}
        <div style={{
          flex: "1",
          padding: "40px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "32px"
        }}>
          
          {/* Judul Halaman & Breadcrumb */}
          <div style={{ textAlign: "left" }}>
            <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", margin: "0 0 6px 0" }}>Superadmin</h1>
            <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "500" }}>
              Dashboard &gt; <span style={{ color: "#034425", fontWeight: "600" }}>Dashboard</span>
            </div>
          </div>

          {/* 📊 1. BARIS KARTU KPI STATISTIK */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            width: "100%",
            flexWrap: "wrap"
          }}>
            {/* Total Nasabah */}
            <div style={{ flex: "1", minWidth: "280px", backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)", border: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ textAlign: "left" }}>
                <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>Total Nasabah</span>
                <p style={{ fontSize: "36px", fontWeight: "800", color: "#0f172a", margin: "4px 0 0 0" }}>120</p>
              </div>
              <div style={{ fontSize: "40px", opacity: 0.2 }}>👥</div>
            </div>

            {/* Pinjaman Disetujui */}
            <div style={{ flex: "1", minWidth: "280px", backgroundColor: "#e2f5ea", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)", border: "2px solid #22c55e", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ textAlign: "left" }}>
                <span style={{ fontSize: "14px", color: "#034425", fontWeight: "600" }}>Pinjaman Disetujui</span>
                <p style={{ fontSize: "36px", fontWeight: "800", color: "#034425", margin: "4px 0 0 0" }}>{approvedCount}</p>
              </div>
              <div style={{ fontSize: "40px", opacity: 0.3 }}>💰</div>
            </div>

            {/* Pinjaman Pending */}
            <div style={{ flex: "1", minWidth: "280px", backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)", border: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ textAlign: "left" }}>
                <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "600" }}>Pinjaman Pending</span>
                <p style={{ fontSize: "36px", fontWeight: "800", color: "#0f172a", margin: "4px 0 0 0" }}>100+</p>
              </div>
              <div style={{ fontSize: "40px", opacity: 0.2 }}>⏳</div>
            </div>
          </div>

          {/* ⚡ 2. BARIS KARTU shortcut & PERINGATAN KPI */}
          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            width: "100%",
            flexWrap: "wrap"
          }}>
            
            {/* KARTU JALAN PINTAS VERIFIKASI (Pindahan dari sidebar agar layoutnya pas) */}
            <div 
              onClick={() => navigate('/superadmin/verifikasi')}
              style={{
                flex: "1",
                minWidth: "300px",
                backgroundColor: "#034425", // Menggunakan warna hijau tema utama agar serasi
                borderRadius: "16px",
                padding: "28px",
                cursor: "pointer",
                textAlign: "left",
                boxShadow: "0 4px 14px rgba(3, 68, 37, 0.2)",
                transition: "transform 0.2s ease"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>🛡️</div>
              <h3 style={{ color: "#ffffff", margin: 0, fontSize: "20px", fontWeight: "700" }}>Verifikasi Peminjaman</h3>
              <p style={{ color: "#a3cfbb", opacity: 0.9, fontSize: "13px", marginTop: "6px", lineHeight: "1.5" }}>
                Validasi berkas & eksekusi kelayakan aplikasi dana UMKM yang dikirim oleh Admin Lapangan.
              </p>
            </div>

            {/* Panel Peringatan KPI */}
            <div style={{ flex: "1", minWidth: "280px", backgroundColor: "#ffffff", borderRadius: "16px", padding: "28px", border: "1px solid #e2e8f0", textAlign: "left" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a", marginBottom: "12px" }}>Peringatan KPI</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>
                Pinjaman Status Pending saat ini mencapai <strong style={{ color: "#0f172a" }}>100+</strong>. Segera periksa daftar antrean peminjam tertunda pada tombol verifikasi di samping.
              </p>
            </div>
          </div>

          {/* 🧾 3. BARIS AKTIVITAS TERBARU */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "28px", border: "1px solid #e2e8f0", textAlign: "left" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a", marginBottom: "20px" }}>Aktivitas Terbaru</h3>
            
            <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderBottom: "1px solid #f1f5f9" }}>
              <div style={{ fontSize: "20px", backgroundColor: "#f0fdf4", padding: "8px", borderRadius: "50%" }}>📝</div>
              <div>
                <p style={{ margin: 0, fontSize: "14px", fontWeight: "600" }}>Verifikasi Peminjaman</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>Pemeriksaan berkas Mitra UMKM Sektor Pertanian</p>
              </div>
              <span style={{ marginLeft: "auto", fontSize: "12px", color: "#94a3b8" }}>3 jam yang lalu</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0" }}>
              <div style={{ fontSize: "20px", backgroundColor: "#f0fdf4", padding: "8px", borderRadius: "50%" }}>👥</div>
              <div>
                <p style={{ margin: 0, fontSize: "14px", fontWeight: "600" }}>Nasabah Management</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>Pembaruan profil pendaftaran kelompok simpan pinjam</p>
              </div>
              <span style={{ marginLeft: "auto", fontSize: "12px", color: "#94a3b8" }}>2 jam yang lalu</span>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER BAWAH */}
      <Footer />
    </div>
  );
};

export default DashboardSuperadmin;