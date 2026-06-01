import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PersetujuanSuperadmin = () => {
  const navigate = useNavigate();

  // 1. Data mentah awal sebagai cadangan jika localStorage masih kosong
  const dataMentahAwal = [
    {
      id: 1,
      nama: "Ibu Sarah - UMKM keripik",
      nominal: "5.000.000",
      tenor: "12 Bulan",
      keperluan: "Modal Bahan Baku - Dana digunakan untuk operasional, pengembangan usaha, dan restock.",
      verifikator: "Admin Ahmad (Sektor Barat)",
      tglVerifikasi: "01 Juni 2026",
      statusFinal: "PENDING"
    },
    {
      id: 2,
      nama: "Ibu Sari - Penjahit",
      nominal: "7.500.000",
      tenor: "18 Bulan",
      keperluan: "Pembelian kain baru dan alat jahit.",
      verifikator: "Admin Siti (Sektor Utara)",
      tglVerifikasi: "31 Mei 2026",
      statusFinal: "PENDING"
    },
    {
      id: 3,
      nama: "Ibu Ningsih - Pengerajin tanah liat",
      nominal: "4.500.000",
      tenor: "10 Bulan",
      keperluan: "Pembelian alat dan perlengkapan usaha.",
      verifikator: "Admin Malik (Sektor Utara)",
      tglVerifikasi: "16 Maret 2026",
      statusFinal: "PENDING"
    },
    {
      id: 4,
      nama: "Ibu Yulia - UMKM Toko sembako",
      nominal: "8.500.000",
      tenor: "16 Bulan",
      keperluan: "Pembelian bahan sembako (minyak, gula, beras, dll).",
      verifikator: "Admin Rara (Sektor Timur)",
      tglVerifikasi: "19 Oktober 2026",
      statusFinal: "PENDING"
    },
    {
      id: 5,
      nama: "Ibu Asiah - UMKM kue basah dan kue kering",
      nominal: "6.500.000",
      tenor: "12 Bulan",
      keperluan: "Pembelian pembuatan kue (tepung, minyak, dll) dan peralatan baking.",
      verifikator: "Admin Farah (Sektor Timur)",
      tglVerifikasi: "25 September 2026",
      statusFinal: "PENDING"
    }
  ];

  // 2. Mengambil data langsung dari localStorage
  const [dataPengajuan, setDataPengajuan] = useState(() => {
    const dataTersimpan = localStorage.getItem('listPengajuanSuperadmin');
    return dataTersimpan ? JSON.parse(dataTersimpan) : dataMentahAwal;
  });

  const [selectedId, setSelectedId] = useState(() => {
    return dataPengajuan.length > 0 ? dataPengajuan[0].id : 1;
  });
  
  const selectedLaporan = dataPengajuan.find(item => item.id === selectedId) || dataPengajuan[0];

  // 3. Fungsi Eksekusi Aksi (Setuju / Tolak) dengan Sinkronisasi Balik ke Admin & Nasabah Aktif
  const handleAksi = (tipe, id) => {
    // A. UPDATE ANTRIAN INTERNAL SISI SUPERADMIN
    const updatedData = dataPengajuan.map(item => {
      if (item.id === id) {
        return { ...item, statusFinal: tipe === 'CAIR' ? 'DISETUJUI' : 'DITOLAK' };
      }
      return item;
    });
    
    setDataPengajuan(updatedData);
    localStorage.setItem('listPengajuanSuperadmin', JSON.stringify(updatedData));

    // B. LOGIKA UTAMA SINKRONISASI BALIK KE DAFTAR ADMIN Lapangan
    const listDaftarAdmin = JSON.parse(localStorage.getItem('listStatusDaftarAdmin')) || [];
    
    const updatedListAdmin = listDaftarAdmin.map(adminItem => {
      if (adminItem.name === selectedLaporan.nama) {
        return { 
          ...adminItem, 
          status: tipe === 'CAIR' ? 'Disetujui Superadmin' : 'Ditolak Superadmin' 
        };
      }
      return adminItem;
    });

    localStorage.setItem('listStatusDaftarAdmin', JSON.stringify(updatedListAdmin));

    // =======================================================
    // 🔥 BAGIAN YANG DIUBAH: OTOMATIS MASUK KE LIST NASABAH AKTIF
    // =======================================================
    if (tipe === 'CAIR') {
      const currentNasabahAktif = JSON.parse(localStorage.getItem('listNasabahAktif')) || [];
      
      const namaSaja = selectedLaporan.nama.replace("Ibu ", "");
      const namaFormatSaku = namaSaja.includes(" - ") ? namaSaja.replace(" - ", " ") : namaSaja;

      const nasabahBaru = {
        idContract: `ID-AMR-${1000 + Math.floor(Math.random() * 9000)}`,
        nama: namaFormatSaku,
        totalDana: `Rp ${selectedLaporan.nominal}`,
        sisaTagihan: `Rp ${selectedLaporan.nominal}`,
        tenor: selectedLaporan.tenor,
        progresPelunasan: 0,
        telepon: "0812-3456-7890",
        alamat: "Kec. Berkah, Kota Surabaya",
        riwayatAngsuran: [
          { tgl: "10 Juni 2026", jumlah: "Rp 500.000", status: "BELUM BAYAR" }
        ]
      };

      currentNasabahAktif.push(nasabahBaru);
      localStorage.setItem('listNasabahAktif', JSON.stringify(currentNasabahAktif));

      const currentApproved = parseInt(localStorage.getItem('approvedCount') || '25');
      localStorage.setItem('approvedCount', (currentApproved + 1).toString());
      
      alert(`🎉 SUKSES! Dana sebesar Rp ${selectedLaporan.nominal} untuk ${selectedLaporan.nama} telah dicairkan!\nData otomatis masuk ke menu List Nasabah Aktif.`);
    } else {
      alert(`❌ Pengajuan ${selectedLaporan.nama} resmi DITOLAK TOTAL. Status di dashboard Admin Lapangan otomatis terupdate.`);
    }
  };

  return (
    <div style={{ backgroundColor: "#f4f6f8", height: "100vh", display: "flex", flexDirection: "column", fontFamily: "'Inter', sans-serif", overflow: "hidden", width: "100%" }}>
      
      {/* NAVBAR SUPERADMIN */}
      <div style={{ backgroundColor: "#034425", padding: "18px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 10px rgba(3, 68, 37, 0.15)" }}>
        <div style={{ textAlign: "left" }}>
          <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: "#ffffff" }}>Persetujuan & Pencairan Dana Final</h2>
          <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#a3cfbb" }}>Sisi Superadmin • Eksekusi laporan kelayakan yang telah disetujui Admin Lapangan</p>
        </div>
        
        {/* 🔥 FIX PERBAIKAN: Menggunakan navigate(-1) agar mundur aman ke dashboard asal superadmin */}
        <button 
          onClick={() => navigate(-1)} 
          style={{ 
            backgroundColor: "transparent", 
            border: "1px solid #a3cfbb", 
            padding: "8px 16px", 
            borderRadius: "8px", 
            cursor: "pointer", 
            fontWeight: "600", 
            color: "#ffffff",
            transition: "all 0.2s"
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
        >
          ⬅️ Dashboard Superadmin
        </button>
      </div>

      {/* WORKSPACE SPLITVIEW */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden", width: "100%" }}>
        
        {/* PANEL KIRI: DAFTAR LAPORAN MASUK */}
        <div style={{ width: "360px", backgroundColor: "#ffffff", borderRight: "1px solid #e2e8f0", overflowY: "auto", padding: "20px", boxSizing: "border-box" }}>
          <h4 style={{ margin: "0 0 16px 0", color: "#64748b", fontSize: "12px", fontWeight: "700", letterSpacing: "0.5px" }}>ANTREAN LAPORAN MASUK</h4>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {dataPengajuan.map((l) => (
              <div 
                key={l.id} 
                onClick={() => setSelectedId(l.id)}
                style={{
                  padding: "16px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  backgroundColor: selectedId === l.id ? "#f0f7f4" : "#ffffff",
                  border: selectedId === l.id ? "2px solid #034425" : "1px solid #e2e8f0",
                  textAlign: "left",
                  position: "relative"
                }}
              >
                <div style={{ fontWeight: "700", color: "#0f172a", fontSize: "15px" }}>{l.nama}</div>
                <div style={{ fontSize: "13px", color: "#034425", fontWeight: "700", marginTop: "4px" }}>Rp {l.nominal}</div>
                
                <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "11px", color: "#64748b", backgroundColor: "#f1f5f9", padding: "4px 8px", borderRadius: "4px" }}>
                    Verified by: {l.verifikator ? l.verifikator.split(' ')[0] : "Admin"}
                  </span>
                  
                  {l.statusFinal === 'DISETUJUI' && (
                    <span style={{ fontSize: "11px", fontWeight: "700", color: "#16a34a", backgroundColor: "#dcfce7", padding: "4px 8px", borderRadius: "4px" }}>✓ DISETUJUI</span>
                  )}
                  {l.statusFinal === 'DITOLAK' && (
                    <span style={{ fontSize: "11px", fontWeight: "700", color: "#b91c1c", backgroundColor: "#fef2f2", padding: "4px 8px", borderRadius: "4px" }}>🛑 DITOLAK</span>
                  )}
                  {l.statusFinal === 'PENDING' && (
                    <span style={{ fontSize: "11px", fontWeight: "700", color: "#d97706", backgroundColor: "#fef3c7", padding: "4px 8px", borderRadius: "4px" }}>⏳ PENDING</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL KANAN: DETAIL VALIDASI & EKSEKUSI */}
        <div style={{ flex: 1, overflowY: "auto", padding: "36px", textAlign: "left", boxSizing: "border-box" }}>
          
          {selectedLaporan ? (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <div>
                  <h1 style={{ margin: 0, fontSize: "28px", fontWeight: "800", color: "#0f172a" }}>{selectedLaporan.nama}</h1>
                  <p style={{ color: "#64748b", margin: "4px 0 0 0", fontSize: "13px" }}>Laporan Rekomendasi Masuk: {selectedLaporan.tglVerifikasi}</p>
                </div>
                <span style={{ backgroundColor: "#dcfce7", color: "#15803d", padding: "6px 14px", borderRadius: "6px", fontWeight: "700", fontSize: "12px", border: "1px solid #bbf7d0" }}>
                  ✅ BERKAS DISETUJUI ADMIN
                </span>
              </div>

              {/* DETAIL NOMINAL */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "32px" }}>
                <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "700" }}>REKOMENDASI NOMINAL PINJAMAN</span>
                  <p style={{ margin: "6px 0 0 0", fontSize: "26px", fontWeight: "800", color: "#034425" }}>Rp {selectedLaporan.nominal}</p>
                </div>
                <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "700" }}>TENOR PENGAJUAN</span>
                  <p style={{ margin: "6px 0 0 0", fontSize: "26px", fontWeight: "800", color: "#0f172a" }}>{selectedLaporan.tenor}</p>
                </div>
              </div>

              {/* KEPERLUAN DANA */}
              <div style={{ backgroundColor: "#ffffff", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "32px" }}>
                <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", fontWeight: "700", color: "#034425" }}>🎯 Tujuan Penggunaan Dana Nasabah</h4>
                <p style={{ margin: 0, fontSize: "14px", color: "#334155", lineHeight: "1.6" }}>{selectedLaporan.keperluan}</p>
              </div>

              {/* ACTION BUTTON DINAMIS */}
              {selectedLaporan.statusFinal === 'PENDING' ? (
                <div style={{ display: "flex", gap: "20px" }}>
                  <button 
                    onClick={() => handleAksi('TOLAK', selectedLaporan.id)}
                    style={{ flex: 1, padding: "16px", backgroundColor: "#fff5f5", color: "#b91c1c", border: "2px solid #fca5a5", borderRadius: "12px", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}
                  >
                    🛑 Tolak Pengajuan (Batalkan Total)
                  </button>
                  <button 
                    onClick={() => handleAksi('CAIR', selectedLaporan.id)}
                    style={{ flex: 1, padding: "16px", backgroundColor: "#034425", color: "#ffffff", border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: "700", cursor: "pointer", boxShadow: "0 4px 12px rgba(3, 68, 37, 0.2)" }}
                  >
                    💰 Setujui & Cairkan Dana Sekarang
                  </button>
                </div>
              ) : (
                <div style={{ 
                  backgroundColor: selectedLaporan.statusFinal === 'DISETUJUI' ? "#e6f0eb" : "#fef2f2",
                  border: selectedLaporan.statusFinal === 'DISETUJUI' ? "2px dashed #16a34a" : "2px dashed #b91c1c",
                  padding: "24px",
                  borderRadius: "12px",
                  textAlign: "center",
                  fontWeight: "700",
                  color: selectedLaporan.statusFinal === 'DISETUJUI' ? "#034425" : "#b91c1c"
                }}>
                  {selectedLaporan.statusFinal === 'DISETUJUI' 
                    ? "💰 PENGASUHAN SELESAI: Dana Sukses Ditransfer ke Rekening Mitra" 
                    : "🛑 REKONSILIASI AKHIR: Pengajuan Ditolak & Pengguna Diinfokan"}
                </div>
              )}
            </>
          ) : (
            <p style={{ color: "#64748b" }}>Tidak ada antrean pengajuan laporan masuk.</p>
          )}

        </div>
      </div>
    </div>
  );
};

export default PersetujuanSuperadmin;