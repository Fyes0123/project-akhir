import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SuperadminVerification = () => {
  const navigate = useNavigate();
  const [antrean, setAntrean] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState(null);

  // Load data saat komponen dibuka
  useEffect(() => {
    const dataSuperadmin = JSON.parse(localStorage.getItem('listPengajuanSuperadmin')) || [];
    setAntrean(dataSuperadmin);
    
    if (dataSuperadmin.length > 0) {
      setSelectedLoan(dataSuperadmin[0]);
    }
  }, []);

  // HANDLER SETUJUI (OTOMATIS KIRIM INBOX NASABAH)
  const handleApprove = (id) => {
    // 1. Update status di list antrean superadmin
    const updatedAntrean = antrean.map(item => item.id === id ? { ...item, statusFinal: 'DISETUJUI' } : item);
    setAntrean(updatedAntrean);
    localStorage.setItem('listPengajuanSuperadmin', JSON.stringify(updatedAntrean));

    // Update state detail aktif agar UI langsung berubah
    if (selectedLoan && selectedLoan.id === id) {
      setSelectedLoan({ ...selectedLoan, statusFinal: 'DISETUJUI' });
    }

    // 2. Ambil data target yang disetujui
    const approvedItem = antrean.find(item => item.id === id);

    if (approvedItem) {
      // 3. Update data monitoring global
      const currentMonitoring = JSON.parse(localStorage.getItem('monitoringData')) || [];
      const newMonitoringItem = {
        id: approvedItem.id,
        loanId: approvedItem.loanId || approvedItem.id,
        nama: approvedItem.nama,
        nominal: approvedItem.nominal,
        status: "disetujui superadmin"
      };

      const isAlreadyExist = currentMonitoring.some(item => item.id === id);
      if (!isAlreadyExist) {
        const updatedMonitoring = [...currentMonitoring, newMonitoringItem];
        localStorage.setItem('monitoringData', JSON.stringify(updatedMonitoring));
      }

      // ================= SINKRONISASI COCOK DENGAN INBOX NASABAH =================
      const currentInbox = JSON.parse(localStorage.getItem('inboxNasabah')) || [];
      const newNotification = {
        idPesan: 'MSG-' + Date.now(),
        loanId: approvedItem.loanId || approvedItem.id,
        namaNasabah: approvedItem.nama, // Dipakai filter pintar di inbox nasabah
        tipe: "Pencairan Dana", // Trigger warna hijau sukses di inbox nasabah
        tanggal: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
        judul: "🎉 Pengajuan Pinjaman Anda Disetujui secara Final!",
        isiPesan: `Selamat, berkas pengajuan Anda telah berhasil divalidasi oleh Superadmin. Dana sebesar Rp ${Number(approvedItem.nominal).toLocaleString('id-ID')} saat ini sedang dalam proses pencairan ke rekening kelompok Anda.`
      };
      
      localStorage.setItem('inboxNasabah', JSON.stringify([newNotification, ...currentInbox]));
      // =========================================================================
    }

    alert('Pengajuan berhasil disetujui secara final & notifikasi pencairan terkirim!');
  };

  // HANDLER TOLAK (OTOMATIS KIRIM INBOX NASABAH)
  const handleReject = (id) => {
    // 1. Update status di list antrean superadmin
    const updated = antrean.map(item => item.id === id ? { ...item, statusFinal: 'DITOLAK' } : item);
    setAntrean(updated);
    localStorage.setItem('listPengajuanSuperadmin', JSON.stringify(updated));

    // Update state detail aktif agar UI langsung berubah
    if (selectedLoan && selectedLoan.id === id) {
      setSelectedLoan({ ...selectedLoan, statusFinal: 'DITOLAK' });
    }

    const rejectedItem = antrean.find(item => item.id === id);
    if (rejectedItem) {
      // ================= SINKRONISASI COCOK DENGAN INBOX NASABAH =================
      const currentInbox = JSON.parse(localStorage.getItem('inboxNasabah')) || [];
      const newNotification = {
        idPesan: 'MSG-' + Date.now(),
        loanId: rejectedItem.loanId || rejectedItem.id,
        namaNasabah: rejectedItem.nama, // Dipakai filter pintar di inbox nasabah
        tipe: "Penolakan Berkas", // Trigger warna merah bahaya di inbox nasabah
        tanggal: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
        judul: "❌ Pengajuan Pinjaman Belum Disetujui",
        isiPesan: `Mohon maaf, berdasarkan hasil verifikasi komite akhir oleh Superadmin, pengajuan dana sebesar Rp ${Number(rejectedItem.nominal).toLocaleString('id-ID')} saat ini belum dapat disetujui.`
      };
      
      localStorage.setItem('inboxNasabah', JSON.stringify([newNotification, ...currentInbox]));
      // =========================================================================
    }

    alert('Pengajuan telah ditolak & notifikasi penolakan terkirim ke inbox nasabah!');
  };

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh", fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column" }}>
      
      {/* NAVBAR */}
      <div style={{ backgroundColor: "#023015", padding: "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <h3 style={{ color: "#fff", margin: 0, fontSize: "16px", fontWeight: "700", letterSpacing: "0.5px" }}>
            Amartha Empower <span style={{ fontWeight: "300", color: "#a7f3d0", marginLeft: "6px", fontSize: "12px", borderLeft: "1px solid #047857", paddingLeft: "8px" }}>Superadmin Panel</span>
          </h3>
          <button 
            onClick={() => navigate(-1)} 
            style={{ padding: "6px 14px", backgroundColor: "#e8fcf0", color: "#023015", border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}
          >
            ← Kembali ke Dashboard
          </button>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <span style={{ color: "#fff", fontSize: "13px", fontWeight: "600", backgroundColor: "#047857", padding: "6px 14px", borderRadius: "20px" }}>🛡️ Pusat Verifikasi Akhir</span>
        </div>
      </div>

      {/* KONTEN UTAMA */}
      <div style={{ flex: 1, display: "flex", boxSizing: "border-box" }}>
        
        {/* SIDEBAR ANTREAN */}
        <div style={{ width: "340px", backgroundColor: "#ffffff", borderRight: "1px solid #e2e8f0", padding: "24px", boxSizing: "border-box" }}>
          <h4 style={{ margin: "0 0 16px 0", color: "#0f172a", fontSize: "14px", fontWeight: "800", letterSpacing: "0.5px", textTransform: "uppercase" }}>
            📥 Antrean Masuk ({antrean.length})
          </h4>
          
          {antrean.length === 0 ? (
            <p style={{ color: "#94a3b8", fontSize: "13px", textAlign: "center", marginTop: "40px" }}>Tidak ada antrean pengajuan saat ini.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {antrean.map((item) => {
                const isActive = selectedLoan?.id === item.id;
                return (
                  <div 
                    key={item.id}
                    onClick={() => setSelectedLoan(item)}
                    style={{ 
                      backgroundColor: isActive ? "#f0fdf4" : "#ffffff", 
                      border: isActive ? "2px solid #00cc44" : "1px solid #e2e8f0", 
                      borderRadius: "14px", 
                      padding: "16px", 
                      cursor: "pointer"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "8px" }}>
                      <p style={{ margin: 0, fontWeight: "700", color: "#1e293b", fontSize: "15px" }}>{item.nama}</p>
                      <span style={{ 
                        fontSize: "10px", 
                        fontWeight: "800", 
                        padding: "3px 8px", 
                        borderRadius: "6px",
                        backgroundColor: item.statusFinal === 'PENDING' ? '#fef3c7' : item.statusFinal === 'DISETUJUI' ? '#dcfce7' : '#fee2e2',
                        color: item.statusFinal === 'PENDING' ? '#d97706' : item.statusFinal === 'DISETUJUI' ? '#15803d' : '#b91c1c'
                      }}>
                        {item.statusFinal}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontWeight: "800", color: "#023015", fontSize: "14px" }}>
                      Rp {item.nominal ? Number(item.nominal).toLocaleString('id-ID') : '0'}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* DETAIL SCREEN PANEL */}
        <div style={{ flex: 1, padding: "40px", boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "start" }}>
          {selectedLoan ? (
            <div style={{ width: "100%", maxWidth: "700px", backgroundColor: "#ffffff", borderRadius: "24px", padding: "40px", border: "1px solid #e2e8f0", boxShadow: "0 10px 25px rgba(0,0,0,0.02)" }}>
              
              <span style={{ fontSize: "11px", fontWeight: "800", color: "#94a3b8", letterSpacing: "1px", textTransform: "uppercase" }}>DATA DETAIL PENGAJUAN</span>
              <h2 style={{ margin: "12px 0 6px 0", color: "#023015", fontSize: "28px", fontWeight: "800" }}>{selectedLoan.nama}</h2>
              
              <hr style={{ border: "none", borderTop: "1px solid #f1f5f9", margin: "24px 0" }} />

              <div style={{ backgroundColor: "#f8fafc", borderRadius: "16px", padding: "20px 24px", marginBottom: "20px" }}>
                <span style={{ fontSize: "11px", fontWeight: "700", color: "#64748b" }}>REKOMENDASI PENCAIRAN DANA</span>
                <p style={{ margin: "6px 0 0 0", fontSize: "26px", fontWeight: "900", color: "#0f172a" }}>
                  Rp {selectedLoan.nominal ? Number(selectedLoan.nominal).toLocaleString('id-ID') : '0'}
                </p>
              </div>

              <div style={{ marginBottom: "36px" }}>
                <span style={{ fontSize: "11px", fontWeight: "700", color: "#64748b" }}>ALOKASI & KEPERLUAN USAHA</span>
                <p style={{ margin: "8px 0 0 0", fontSize: "14px", color: "#334155", lineHeight: "1.6", fontWeight: "500", borderLeft: "4px solid #023015", padding: "12px 16px" }}>
                  {selectedLoan.keperluan}
                </p>
              </div>

              {selectedLoan.statusFinal === 'PENDING' ? (
                <div style={{ display: "flex", gap: "16px" }}>
                  <button 
                    onClick={() => handleReject(selectedLoan.id)}
                    style={{ flex: 1, padding: "14px", backgroundColor: "#fff", border: "2px solid #fca5a5", color: "#e11d48", fontWeight: "700", borderRadius: "12px", cursor: "pointer" }}
                  >
                    ❌ Tolak Pengajuan
                  </button>
                  <button 
                    onClick={() => handleApprove(selectedLoan.id)}
                    style={{ flex: 1, padding: "14px", backgroundColor: "#023015", color: "#fff", fontWeight: "700", borderRadius: "12px", border: "none", cursor: "pointer" }}
                  >
                    ✅ Setujui & Cairkan Dana
                  </button>
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "16px", borderRadius: "12px", backgroundColor: selectedLoan.statusFinal === 'DISETUJUI' ? '#e8fcf0' : '#fff5f5', color: selectedLoan.statusFinal === 'DISETUJUI' ? '#023015' : '#ef4444', fontWeight: "700" }}>
                  {selectedLoan.statusFinal === 'DISETUJUI' ? '🎉 Pengajuan ini Telah Disetujui Secara Final' : '🔒 Pengajuan ini Telah Ditolak'}
                </div>
              )}

            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh", color: "#94a3b8" }}>
              Silakan pilih salah satu daftar antrean di sebelah kiri.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SuperadminVerification;