import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const VerifikasiBerkasAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Menangkap data dinamis kartu nasabah yang dikirim dari halaman daftar sebelumnya
  // Jika tidak ada (diakses manual), default ke data Ibu Aminah (ID: 101)
  const currentLoan = location.state?.loanData || { id: 101, name: "Ibu Aminah - UMKM Keripik", amount: 5000000, tenor: "12 Bulan", purpose: "Modal Bahan Baku" };

  // FUNGSI UTAMA: Kirim data ke Superadmin & Update status internal Admin
  const handleKirimKeSuperadmin = () => {
    // ==========================================
    // ALUR 1: KIRIM DATA KE LACI SUPERADMIN
    // ==========================================
    const antreanLama = JSON.parse(localStorage.getItem('listPengajuanSuperadmin')) || [];
    
    // Validasi agar tidak terjadi duplikasi data yang sama di laci Superadmin
    const antreanTanpaDataIni = antreanLama.filter(item => item.nama !== currentLoan.name);

    const dataBungkusBaru = {
      id: `TX-${Math.floor(10000 + Math.random() * 90000)}`, // ID transaksi unik otomatis
      nama: currentLoan.name,
      nominal: currentLoan.amount.toLocaleString('id-ID'),
      tenor: currentLoan.tenor,
      keperluan: `${currentLoan.purpose} - Dana digunakan untuk operasional, pengembangan usaha, dan restock.`,
      verifikator: "Admin Lapangan (Sektor Pusat)",
      tglVerifikasi: "01 Juni 2026",
      statusFinal: "PENDING" // Set ke PENDING agar antrean di Superadmin menyala kuning
    };
    
    const antreanTerbaru = [...antreanTanpaDataIni, dataBungkusBaru];
    localStorage.setItem('listPengajuanSuperadmin', JSON.stringify(antreanTerbaru));

    // ==========================================
    // ALUR 2: UPDATE STATUS INTERNAL DAFTAR ADMIN
    // ==========================================
    const listDaftarAdmin = JSON.parse(localStorage.getItem('listStatusDaftarAdmin')) || [];
    
    // Cari kartu nasabah yang sedang diproses (berdasarkan ID) dan ubah statusnya jadi "Diteruskan"
    const updatedListAdmin = listDaftarAdmin.map(item => {
      if (item.id === currentLoan.id) {
        return { ...item, status: "Diteruskan" };
      }
      return item;
    });
    
    localStorage.setItem('listStatusDaftarAdmin', JSON.stringify(updatedListAdmin));
    
    // ==========================================
    // ALUR 3: NOTIFIKASI & NAVIGASI KEMBALI
    // ==========================================
    alert(`🚀 Sukses! Laporan kelayakan ${currentLoan.name} berhasil diteruskan ke antrean Superadmin.`);
    navigate('/dashboardadmin'); // Diarahkan langsung ke dashboard admin utama agar tabel langsung ter-update
  };

  return (
    <div style={{
      backgroundColor: "#f4f6f9",
      minHeight: "100vh",
      padding: "40px 20px",
      fontFamily: "'Inter', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box"
    }}>
      
      {/* CONTAINER UTAMA BANNER */}
      <div style={{
        maxWidth: "800px",
        width: "100%",
        backgroundColor: "#034425",
        borderRadius: "16px",
        padding: "28px",
        color: "#ffffff",
        textAlign: "left",
        position: "relative",
        boxSizing: "border-box",
        marginBottom: "24px"
      }}>
        <h2 style={{ margin: "0 0 8px 0", fontSize: "24px", fontWeight: "700" }}>Verifikasi Berkas Pengajuan</h2>
        <p style={{ margin: 0, fontSize: "14px", opacity: 0.85 }}>Periksa detail formulir loan apply milik nasabah</p>
        <button 
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            right: "28px",
            top: "35px",
            backgroundColor: "#22c55e",
            color: "#ffffff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          ⬅️ Kembali
        </button>
      </div>

      {/* KARTU 1: INFORMASI PEMOHON */}
      <div style={{
        maxWidth: "800px",
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid #e2e8f0",
        textAlign: "left",
        boxSizing: "border-box",
        marginBottom: "24px"
      }}>
        <h4 style={{ margin: "0 0 16px 0", color: "#034425", fontSize: "16px", fontWeight: "700" }}>👤 Informasi Pemohon</h4>
        <div style={{ display: "flex", gap: "40px" }}>
          <div>
            <span style={{ fontSize: "12px", color: "#64748b" }}>NAMA LENGKAP NASABAH</span>
            <p style={{ margin: "4px 0 0 0", fontWeight: "700", color: "#0f172a" }}>{currentLoan.name}</p>
          </div>
          <div>
            <span style={{ fontSize: "12px", color: "#64748b" }}>JENIS USAHA UMKM</span>
            <p style={{ margin: "4px 0 0 0", fontWeight: "700", color: "#0f172a" }}>Usaha Mikro Mitra Amartha</p>
          </div>
        </div>
      </div>

      {/* KARTU 2: DETAIL FINANSIAL PENGAJUAN */}
      <div style={{
        maxWidth: "800px",
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid #e2e8f0",
        textAlign: "left",
        boxSizing: "border-box",
        marginBottom: "24px"
      }}>
        <h4 style={{ margin: "0 0 16px 0", color: "#034425", fontSize: "16px", fontWeight: "700" }}>💰 Detail Finansial Pengajuan</h4>
        <div style={{ display: "flex", gap: "60px", marginBottom: "16px" }}>
          <div>
            <span style={{ fontSize: "12px", color: "#64748b" }}>NOMINAL PINJAMAN</span>
            <p style={{ margin: "4px 0 0 0", fontSize: "24px", fontWeight: "800", color: "#034425" }}>Rp {currentLoan.amount.toLocaleString('id-ID')}</p>
          </div>
          <div>
            <span style={{ fontSize: "12px", color: "#64748b" }}>DURASI TENOR</span>
            <p style={{ margin: "4px 0 0 0", fontSize: "24px", fontWeight: "800", color: "#0f172a" }}>{currentLoan.tenor}</p>
          </div>
        </div>
        <div>
          <span style={{ fontSize: "12px", color: "#64748b" }}>TUJUAN PENGGUNAAN DANA</span>
          <p style={{ margin: "4px 0 0 0", padding: "12px", backgroundColor: "#f8fafc", borderRadius: "8px", fontSize: "14px", color: "#334155" }}>
            <strong>{currentLoan.purpose}</strong> - Dana digunakan untuk operasional, pengembangan usaha, dan restock.
          </p>
        </div>
      </div>

      {/* KARTU 3: DOKUMEN LAMPIRAN */}
      <div style={{
        maxWidth: "800px",
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid #e2e8f0",
        textAlign: "left",
        boxSizing: "border-box",
        position: "relative"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <h4 style={{ margin: 0, color: "#034425", fontSize: "16px", fontWeight: "700" }}>📄 Dokumen Lampiran</h4>
          <span style={{ backgroundColor: "#fef9c3", color: "#a16207", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700" }}>Pending</span>
        </div>

        {/* Baris Berkas KTP */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", border: "1px solid #22c55e", borderRadius: "12px", backgroundColor: "#f0fdf4", marginBottom: "12px" }}>
          <div>
            <p style={{ margin: "0 0 4px 0", fontWeight: "700", fontSize: "14px", color: "#0f172a" }}>Syarat_Berkas_Kelayakan.pdf</p>
            <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>KTP</p>
          </div>
          <button style={{ backgroundColor: "#22c55e", border: "none", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", color: "#fff", cursor: "pointer" }}>👁️ Lihat Berkas</button>
        </div>

        {/* Baris Berkas NPWP */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", border: "1px solid #22c55e", borderRadius: "12px", backgroundColor: "#f0fdf4", marginBottom: "12px" }}>
          <div>
            <p style={{ margin: "0 0 4px 0", fontWeight: "700", fontSize: "14px", color: "#0f172a" }}>Syarat_Berkas_Kelayakan.pdf</p>
            <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>NPWP</p>
          </div>
          <button style={{ backgroundColor: "#22c55e", border: "none", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", color: "#fff", cursor: "pointer" }}>👁️ Lihat Berkas</button>
        </div>

        {/* Baris Berkas SKU */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", border: "1px solid #22c55e", borderRadius: "12px", backgroundColor: "#f0fdf4" }}>
          <div>
            <p style={{ margin: "0 0 4px 0", fontWeight: "700", fontSize: "14px", color: "#0f172a" }}>Syarat_Berkas_Kelayakan.pdf</p>
            <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>SKU (Surat Keterangan Usaha)</p>
          </div>
          <button style={{ backgroundColor: "#22c55e", border: "none", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", color: "#fff", cursor: "pointer" }}>👁️ Lihat Berkas</button>
        </div>
      </div>

      {/* CONTAINER TOMBOL AKSI */}
      <div style={{
        maxWidth: "800px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "20px",
        marginTop: "32px",
        boxSizing: "border-box"
      }}>
        {/* TOMBOL KIRI (TOLAK & PERBAIKAN) */}
        <button 
          onClick={() => {
            const catatan = prompt("Masukkan alasan koreksi perbaikan berkas untuk nasabah (misal: File KTP buram):");
            
            if (catatan !== null && catatan.trim() !== "") {
              // 1. Update status internal list daftar admin menjadi "Perbaikan"
              const listDaftarAdmin = JSON.parse(localStorage.getItem('listStatusDaftarAdmin')) || [];
              const updatedListAdmin = listDaftarAdmin.map(item => {
                if (item.id === currentLoan.id) {
                  return { 
                    ...item, 
                    status: "Perbaikan",
                    catatanAdmin: catatan 
                  };
                }
                return item;
              });
              localStorage.setItem('listStatusDaftarAdmin', JSON.stringify(updatedListAdmin));
              
              // 2. Bersihkan/hapus data dari laci Superadmin jika sebelumnya pernah dikirim
              const antreanSuperadmin = JSON.parse(localStorage.getItem('listPengajuanSuperadmin')) || [];
              const filteredSuperadmin = antreanSuperadmin.filter(item => item.nama !== currentLoan.name);
              localStorage.setItem('listPengajuanSuperadmin', JSON.stringify(filteredSuperadmin));
              
              alert(`Status: Berkas berhasil ditolak & dikembalikan ke Nasabah dengan catatan: "${catatan}"`);
              navigate('/dashboardadmin'); // Kembali langsung ke dashboard utama
            }
          }}
          style={{
            flex: "1",
            padding: "16px",
            backgroundColor: "#fff5f5",
            color: "#e11d48",
            border: "2px solid #fca5a5",
            borderRadius: "12px",
            fontSize: "15px",
            fontWeight: "700",
            cursor: "pointer"
          }}
        >
          ❌ Tolak & Ajukan Perbaikan Berkas Nasabah
        </button>

        {/* TOMBOL KANAN (TERIMA & TERUSKAN) */}
        <button 
          onClick={handleKirimKeSuperadmin}
          style={{
            flex: "1",
            padding: "16px",
            backgroundColor: "#034425",
            color: "#ffffff",
            border: "none",
            borderRadius: "12px",
            fontSize: "15px",
            fontWeight: "700",
            cursor: "pointer"
          }}
        >
          ✔️ Terima & Teruskan Laporan ke Superadmin
        </button>
      </div>

    </div>
  );
};

export default VerifikasiBerkasAdmin;