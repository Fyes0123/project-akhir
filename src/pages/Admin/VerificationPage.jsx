import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const VerifikasiBerkasAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loan, setLoan] = useState(null);

  useEffect(() => {
    if (location.state?.loanData) {
      setLoan(location.state.loanData);
    } else {
      setLoan(null);
    }
  }, [location.state]);

  if (!loan) {
    return (
      <div style={{ padding: 40, textAlign: 'center', fontFamily: "'Inter', sans-serif", color: '#64748b' }}>
        Memuat Data Analisis...
      </div>
    );
  }

  const currentLoan = loan;

  const daftarDokumen = [
    { key: 'ktp', label: 'KTP Asli Pemohon', format: 'PDF', size: '1.2 MB', tgl: '02 Juni 2026', color: '#ef4444', bgColor: '#fef2f2' },
    { key: 'kk', label: 'Kartu Keluarga (KK)', format: 'PDF', size: '2.4 MB', tgl: '02 Juni 2026', color: '#ef4444', bgColor: '#fef2f2' },
    { key: 'npwp', label: 'NPWP Usaha / Pribadi', format: 'PNG', size: '840 KB', tgl: '03 Juni 2026', color: '#3b82f6', bgColor: '#eff6ff' },
    { key: 'sku', label: 'Surat Keterangan Usaha', format: 'PDF', size: '1.8 MB', tgl: '02 Juni 2026', color: '#ef4444', bgColor: '#fef2f2' },
  ];

  // ================= FUNGSI SETUJUI & TERUSKAN =================
  const handleKirimKeSuperadmin = () => {
    const antreanLama = JSON.parse(localStorage.getItem('listPengajuanSuperadmin')) || [];
    const dataBungkusBaru = {
      id: `TX-${Math.floor(10000 + Math.random() * 90000)}`,
      loanId: currentLoan.id,
      nama: currentLoan.name,
      nominal: currentLoan.amount,
      tenor: currentLoan.tenor,
      keperluan: `${currentLoan.purpose || 'Dana operasional'} - Dana operasional & pengembangan UMKM.`,
      verifikator: "Admin Lapangan (Sektor Pusat)",
      tglVerifikasi: "03 Juni 2026",
      statusFinal: "PENDING"
    };

    localStorage.setItem('listPengajuanSuperadmin', JSON.stringify([...antreanLama, dataBungkusBaru]));
    const listDaftarAdmin = JSON.parse(localStorage.getItem('listStatusDaftarAdmin')) || [];
    const updatedListAdmin = listDaftarAdmin.map(item => item.id === currentLoan.id ? { ...item, status: "Diteruskan" } : item);
    localStorage.setItem('listStatusDaftarAdmin', JSON.stringify(updatedListAdmin));

    alert(`Sukses! Laporan ${currentLoan.name} dikirim ke Superadmin.`);
    navigate(-1);
  };

  // ================= FUNGSI TOLAK & MINTA PERBAIKAN (CARA 1 AKTIF) =================
  const handleTolakPengajuan = () => {
    const alasan = prompt("Masukkan alasan penolakan / berkas perbaikan:");

    if (alasan === null) return; 
    if (alasan.trim() === "") {
      alert("Alasan penolakan wajib diisi untuk meminta perbaikan!");
      return;
    }

    // 1. Update status di list admin
    const listDaftarAdmin = JSON.parse(localStorage.getItem('listStatusDaftarAdmin')) || [];
    const updatedListAdmin = listDaftarAdmin.map(item => 
      item.id === currentLoan.id ? { ...item, status: "Perbaikan", alasan_perbaikan: alasan } : item
    );
    localStorage.setItem('listStatusDaftarAdmin', JSON.stringify(updatedListAdmin));

    // CARA 1: Otomatis simpan nama nasabah yang sedang ditolak ke localStorage
    localStorage.setItem('nasabahSimulasiLogin', currentLoan.name.trim());

    // 2. Kirim pesan ke inbox nasabah
    const inboxLama = JSON.parse(localStorage.getItem('inboxNasabah')) || [];
    const pesanBaruNasabah = {
      idPesan: `MSG-${Math.floor(10000 + Math.random() * 90000)}`,
      loanId: currentLoan.id,
      namaNasabah: currentLoan.name.trim(),
      tipe: "Perbaikan Berkas",
      judul: "⚠️ Permintaan Perbaikan Berkas Pinjaman",
      isiPesan: alasan,
      tanggal: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      dibaca: false
    };
    
    localStorage.setItem('inboxNasabah', JSON.stringify([pesanBaruNasabah, ...inboxLama]));

    alert(`Berkas ${currentLoan.name} dikembalikan. Feedback berhasil dikirim!`);
    navigate(-1);
  };

  return (
    <div style={{ backgroundColor: "#fafafa", minHeight: "100vh", fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column" }}>
      
      {/* NAVBAR */}
      <div style={{ backgroundColor: "#023015", padding: "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ color: "#fff", margin: 0, fontSize: "16px", fontWeight: "bold" }}>Amartha Empower</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => navigate('/dashboardadmin')} style={{ padding: "8px 16px", backgroundColor: "#00cc44", color: "#fff", border: "none", borderRadius: "6px", fontSize: "12px", fontWeight: "bold", cursor: "pointer" }}>Dashboard</button>
          <button style={{ padding: "8px 16px", backgroundColor: "#00cc44", color: "#fff", border: "none", borderRadius: "6px", fontSize: "12px", fontWeight: "bold", cursor: "pointer" }}>Profile</button>
          <button style={{ padding: "8px 16px", backgroundColor: "#00cc44", color: "#fff", border: "none", borderRadius: "6px", fontSize: "12px", fontWeight: "bold", cursor: "pointer" }}>Modul</button>
          <button style={{ padding: "8px 16px", backgroundColor: "#00cc44", color: "#fff", border: "none", borderRadius: "6px", fontSize: "12px", fontWeight: "bold", cursor: "pointer" }}>Komunitas</button>
        </div>
      </div>

      {/* BODY UTAMA */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "50px 20px" }}>
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          
          {/* JUDUL HALAMAN & KEMBALI */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
            <h2 style={{ margin: 0, color: "#023015", fontSize: "32px", fontWeight: "800" }}>Verifikasi Berkas</h2>
            <button onClick={() => navigate(-1)} style={{ padding: "8px 24px", backgroundColor: "#fff", border: "1px solid #cbd5e1", borderRadius: "12px", color: "#334155", fontSize: "14px", fontWeight: "600", cursor: "pointer", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
              ← Kembali
            </button>
          </div>

          {/* IDENTITAS & NILAI PENGAJUAN */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
            <div style={{ backgroundColor: "#fff", borderRadius: "24px", padding: "32px 36px 32px 44px", boxShadow: "inset 8px 0px 0px 0px #023015, 0 10px 35px rgba(0, 0, 0, 0.05)", boxSizing: "border-box" }}>
              <span style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", letterSpacing: "1px" }}>IDENTITAS DEBITUR</span>
              <p style={{ margin: "14px 0 14px 0", fontSize: "24px", fontWeight: "800", color: "#0f172a" }}>{currentLoan.name}</p>
              <div style={{ display: "inline-flex", backgroundColor: "#f1f5f9", padding: "6px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", color: "#023015" }}>
                ID Pengajuan: {currentLoan.id}
              </div>
            </div>

            <div style={{ backgroundColor: "#fff", borderRadius: "24px", padding: "32px 36px 32px 44px", boxShadow: "inset 8px 0px 0px 0px #00cc44, 0 10px 35px rgba(0, 0, 0, 0.05)", boxSizing: "border-box" }}>
              <span style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", letterSpacing: "1px" }}>NILAI PENGAJUAN & TENOR</span>
              <p style={{ margin: "14px 0 14px 0", fontSize: "24px", fontWeight: "800", color: "#0f172a" }}>Rp {currentLoan.amount ? currentLoan.amount.toLocaleString('id-ID') : 0}</p>
              <div style={{ display: "inline-flex", backgroundColor: "#e8fcf0", padding: "6px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", color: "#023015" }}>
                Durasi Kontrak: <span style={{ marginLeft: "4px", fontWeight: "800" }}>{currentLoan.tenor}</span>
              </div>
            </div>
          </div>

          {/* RENCANA ALOKASI DANA */}
          <div style={{ backgroundColor: "#fff", borderRadius: "24px", padding: "32px 36px", boxShadow: "0 10px 35px rgba(0, 0, 0, 0.05)", marginBottom: "24px", boxSizing: "border-box" }}>
            <span style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", letterSpacing: "1px" }}>RENCANA ALOKASI DANA USAHA</span>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "14px", backgroundColor: "#f8fafc", padding: "18px 22px", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <span style={{ fontSize: "20px" }}>🚀</span>
              <p style={{ margin: 0, fontSize: "14px", color: "#475569", lineHeight: "1.7", fontWeight: "500" }}>
                <span style={{ fontStyle: "italic", color: "#1e293b" }}>"{currentLoan.purpose || 'Dana operasional'} — Digunakan untuk operasional, pengembangan usaha, and restock."</span>
              </p>
            </div>
          </div>

          {/* E-DOCUMENTS PERSYARATAN */}
          <div style={{ backgroundColor: "#fff", borderRadius: "24px", padding: "36px", boxShadow: "0 10px 35px rgba(0, 0, 0, 0.05)", marginBottom: "36px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h4 style={{ margin: 0, color: "#023015", fontSize: "18px", fontWeight: "800" }}>Berkas Persyaratan Elektronik (e-Documents)</h4>
              <span style={{ backgroundColor: "#023015", color: "#fff", fontSize: "11px", fontWeight: "700", padding: "6px 14px", borderRadius: "20px" }}>4 File Terlampir</span>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {daftarDokumen.map((doc) => (
                <div key={doc.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "18px 20px", backgroundColor: "#f8fafc" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "46px", height: "46px", backgroundColor: doc.bgColor, borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <span style={{ fontSize: "12px", fontWeight: "900", color: doc.color }}>{doc.format}</span>
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: "14px", fontWeight: "700", color: "#1e293b" }}>{doc.label}</p>
                      <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#64748b" }}>{doc.size} • {doc.tgl}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button onClick={() => alert(`Pratinjau`)} style={{ padding: "8px 16px", fontSize: "13px", fontWeight: "700", color: "#023015", backgroundColor: "#fff", border: "1px solid #023015", borderRadius: "10px", cursor: "pointer" }}>Pratinjau</button>
                    <button onClick={() => alert(`Unduh`)} style={{ padding: "8px 12px", fontSize: "13px", color: "#fff", backgroundColor: "#475569", border: "none", borderRadius: "10px", cursor: "pointer" }}>📥</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BUTTON UTAMA */}
          <div style={{ display: "flex", gap: "20px" }}>
            <button onClick={handleTolakPengajuan} style={{ flex: 1, padding: "18px", backgroundColor: "#fff", border: "2px solid #fca5a5", color: "#e11d48", fontWeight: "800", borderRadius: "16px", cursor: "pointer", fontSize: "15px" }}>
              ❌ Tolak & Minta Perbaikan
            </button>

            <button onClick={handleKirimKeSuperadmin} style={{ flex: 1, padding: "18px", backgroundColor: "#023015", color: "#fff", fontWeight: "800", borderRadius: "16px", border: "none", cursor: "pointer", fontSize: "15px", boxShadow: "0 8px 24px rgba(2,48,21,0.2)" }}>
              Setujui & Teruskan ke Superadmin →
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default VerifikasiBerkasAdmin;