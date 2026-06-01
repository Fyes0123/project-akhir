import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LaporanSuperadmin = () => {
  const navigate = useNavigate();

  // 1. Data mentah awal sebagai cadangan jika localStorage masih kosong
  const dataMentahAwal = [
    {
      id: "TX-99201",
      namaNasabah: "Ibu Aminah - UMKM Keripik",
      idKontrak: "ID-AMR-1099",
      angsuranKe: "3",
      nominalBayar: "Rp 500.000",
      tglUpload: "01 Juni 2026",
      metodeBayar: "Transfer Bank Mandiri",
      statusValidasi: "TERVERIFIKASI",
      namaFile: "Struk_Aminah_Angsuran3.pdf"
    },
    {
      id: "TX-99187",
      namaNasabah: "Sarah Kusuma - Jahit Busana",
      idKontrak: "ID-AMR-1102",
      angsuranKe: "2",
      nominalBayar: "Rp 350.000",
      tglUpload: "01 Juni 2026",
      metodeBayar: "Agen Amartha Terdekat",
      statusValidasi: "PENDING",
      namaFile: "Struk_Bayar_Sarah_Mei.pdf"
    },
    {
      id: "TX-99154",
      namaNasabah: "Ibu Siti - Tenun Ikat",
      idKontrak: "ID-AMR-1254",
      angsuranKe: "4",
      nominalBayar: "Rp 600.000",
      tglUpload: "31 Mei 2026",
      metodeBayar: "Transfer Bank BRI",
      statusValidasi: "TERVERIFIKASI",
      namaFile: "Bukti_Setor_Siti_Tenun.pdf"
    },
    {
      id: "TX-99142",
      namaNasabah: "Lara Croft - Warung Kelontong",
      idKontrak: "ID-AMR-1088",
      angsuranKe: "6",
      nominalBayar: "Rp 450.000",
      tglUpload: "30 Mei 2026",
      metodeBayar: "Transfer Bank BCA",
      statusValidasi: "TERVERIFIKASI",
      namaFile: "Struk_Lara_Kelontong.pdf"
    },
    {
      id: "TX-99130",
      namaNasabah: "Sinta Lestari - Kue Basah",
      idKontrak: "ID-AMR-1115",
      angsuranKe: "1",
      nominalBayar: "Rp 250.000",
      tglUpload: "29 Mei 2026",
      metodeBayar: "Agen Amartha Terdekat",
      statusValidasi: "PENDING",
      namaFile: "Bukti_Sinta_KueBasah.pdf"
    },
    {
      id: "TX-99112",
      namaNasabah: "Ibu Fatimah - Catering Sehat",
      idKontrak: "ID-AMR-1301",
      angsuranKe: "5",
      nominalBayar: "Rp 750.000",
      tglUpload: "28 Mei 2026",
      metodeBayar: "Transfer Bank BNI",
      statusValidasi: "TERVERIFIKASI",
      namaFile: "Struk_Fatimah_Catering.pdf"
    },
    {
      id: "TX-99098",
      namaNasabah: "Dewi Sri - Budidaya Jamur",
      idKontrak: "ID-AMR-1144",
      angsuranKe: "3",
      nominalBayar: "Rp 500.000",
      tglUpload: "27 Mei 2026",
      metodeBayar: "Transfer Bank Mandiri",
      statusValidasi: "PENDING",
      namaFile: "Struk_Dewi_Jamur.pdf"
    },
    {
      id: "TX-99077",
      namaNasabah: "Ibu Ratna - Kerajinan Rotan",
      idKontrak: "ID-AMR-1205",
      angsuranKe: "8",
      nominalBayar: "Rp 1.000.000",
      tglUpload: "26 Mei 2026",
      metodeBayar: "Transfer Bank BRI",
      statusValidasi: "TERVERIFIKASI",
      namaFile: "Bukti_Ratna_Rotan.pdf"
    },
    {
      id: "TX-99051",
      namaNasabah: "Nia Ramadhani - Salon Rumahan",
      idKontrak: "ID-AMR-1168",
      angsuranKe: "2",
      nominalBayar: "Rp 400.000",
      tglUpload: "25 Mei 2026",
      metodeBayar: "Agen Amartha Terdekat",
      statusValidasi: "PENDING",
      namaFile: "Struk_Nia_Salon.pdf"
    },
    {
      id: "TX-99022",
      namaNasabah: "Ibu Sri Wahyuni - Toko Pakaian",
      idKontrak: "ID-AMR-1055",
      angsuranKe: "12",
      nominalBayar: "Rp 1.200.000",
      tglUpload: "24 Mei 2026",
      metodeBayar: "Transfer Bank BCA",
      statusValidasi: "TERVERIFIKASI",
      namaFile: "Struk_Sri_TokoBaju.pdf"
    }
  ];

  // 2. Mengambil data langsung dari localStorage saat pertama kali halaman dimuat
  const [dataSetoran, setDataSetoran] = useState(() => {
    const dataTersimpan = localStorage.getItem('listSetoranSuperadmin');
    return dataTersimpan ? JSON.parse(dataTersimpan) : dataMentahAwal;
  });

  const [selectedId, setSelectedId] = useState("TX-99201");
  const selectedTx = dataSetoran.find(item => item.id === selectedId) || dataSetoran[0];

  // 3. Logika Validasi yang langsung mengunci data ke LocalStorage
  const handleVerifikasi = (id) => {
    const updated = dataSetoran.map(item => {
      if (item.id === id) {
        return { ...item, statusValidasi: "TERVERIFIKASI" };
      }
      return item;
    });
    
    setDataSetoran(updated);
    localStorage.setItem('listSetoranSuperadmin', JSON.stringify(updated));
    alert(`🎯 Sukses! Bukti setoran ${selectedTx.namaNasabah} berhasil disetujui & masuk ke pembukuan.`);
  };

  return (
    <div style={{ backgroundColor: "#f4f6f8", height: "100vh", display: "flex", flexDirection: "column", fontFamily: "'Inter', sans-serif", overflow: "hidden", width: "100%" }}>
      
      {/* NAVBAR ATAS */}
      <div style={{ backgroundColor: "#034425", padding: "18px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 10px rgba(3, 68, 37, 0.15)" }}>
        <div style={{ textAlign: "left" }}>
          <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: "#ffffff" }}>Pusat Audit Bukti Transaksi Nasabah</h2>
          <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#a3cfbb" }}>Sisi Superadmin • Validasi struk angsuran mingguan & bulanan mitra</p>
        </div>
        
        {/* 🔥 FIX PERBAIKAN DI SINI: Mengubah rute manual menjadi navigate(-1) */}
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
          🏠 Kembali ke Dashboard
        </button>
      </div>

      {/* WORKSPACE AREA Split View */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden", width: "100%" }}>
        
        {/* PANEL KIRI: LIST ANTREAN TRANSAKSI MASUK */}
        <div style={{ width: "380px", backgroundColor: "#ffffff", borderRight: "1px solid #e2e8f0", overflowY: "auto", padding: "20px", boxSizing: "border-box" }}>
          <h4 style={{ margin: "0 0 16px 0", color: "#64748b", fontSize: "12px", fontWeight: "700", letterSpacing: "0.5px" }}>ANTREAN BUKTI TRANSAKSI ({dataSetoran.length})</h4>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {dataSetoran.map((tx) => (
              <div 
                key={tx.id} 
                onClick={() => setSelectedId(tx.id)}
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  backgroundColor: selectedId === tx.id ? "#f0f7f4" : "#ffffff",
                  border: selectedId === tx.id ? "2px solid #034425" : "1px solid #e2e8f0",
                  textAlign: "left"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "600", color: "#64748b" }}>{tx.id}</span>
                  <span style={{ 
                    fontSize: "10px", 
                    fontWeight: "700", 
                    padding: "3px 8px", 
                    borderRadius: "4px",
                    backgroundColor: tx.statusValidasi === "TERVERIFIKASI" ? "#dcfce7" : "#fef3c7",
                    color: tx.statusValidasi === "TERVERIFIKASI" ? "#16a34a" : "#d97706"
                  }}>
                    {tx.statusValidasi}
                  </span>
                </div>
                <div style={{ fontWeight: "700", color: "#0f172a", fontSize: "15px" }}>{tx.namaNasabah}</div>
                <div style={{ fontSize: "13px", color: "#034425", fontWeight: "700", marginTop: "2px" }}>{tx.nominalBayar} <span style={{ fontWeight: "400", color: "#64748b" }}>(Angsuran {tx.angsuranKe})</span></div>
                <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "8px" }}>Diupload: {tx.tglUpload}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL KANAN: DETAIL AUDIT STRUK */}
        <div style={{ flex: 1, overflowY: "auto", padding: "36px", textAlign: "left", boxSizing: "border-box" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
            <div>
              <span style={{ fontSize: "13px", color: "#64748b", fontWeight: "600" }}>{selectedTx.idKontrak}</span>
              <h1 style={{ margin: "2px 0 0 0", fontSize: "28px", fontWeight: "800", color: "#0f172a" }}>{selectedTx.namaNasabah}</h1>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: "12px", color: "#64748b" }}>Metode Pembayaran</span>
              <p style={{ margin: "2px 0 0 0", fontWeight: "700", color: "#0f172a" }}>{selectedTx.metodeBayar}</p>
            </div>
          </div>

          {/* DETAIL KARTU INFORMASI */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "28px" }}>
            <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
              <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "700" }}>NOMINAL YANG DISETOR</span>
              <p style={{ margin: "4px 0 0 0", fontSize: "24px", fontWeight: "800", color: "#034425" }}>{selectedTx.nominalBayar}</p>
            </div>
            <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
              <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "700" }}>TARGET VALIDASI</span>
              <p style={{ margin: "4px 0 0 0", fontSize: "24px", fontWeight: "800", color: "#0f172a" }}>Angsuran Ke-{selectedTx.angsuranKe}</p>
            </div>
          </div>

          {/* BOX STRUK PEMBAYARAN */}
          <div style={{ backgroundColor: "#ffffff", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "28px" }}>
            <h4 style={{ margin: "0 0 16px 0", fontSize: "14px", fontWeight: "700", color: "#0f172a" }}>📄 Berkas Dokumen Pendukung (Struk Pembayaran)</h4>
            
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "#f8fafc", padding: "16px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ backgroundColor: "#ef4444", color: "#ffffff", padding: "10px 14px", borderRadius: "6px", fontWeight: "800", fontSize: "14px" }}>PDF</div>
                <div>
                  <div style={{ fontWeight: "600", color: "#334155", fontSize: "14px" }}>{selectedTx.namaFile}</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>Ekstensi Berkas Resmi • Siap Unduh</div>
                </div>
              </div>
              
              <button 
                onClick={() => alert(`📥 Mengunduh file berkas asli: ${selectedTx.namaFile}`)}
                style={{ backgroundColor: "#ffffff", border: "1px solid #cbd5e1", padding: "8px 16px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", color: "#334155", cursor: "pointer" }}
              >
                📥 Download Struk
              </button>
            </div>
          </div>

          {/* TOMBOL VALIDASI SETORAN */}
          {selectedTx.statusValidasi === "PENDING" ? (
            <button 
              onClick={() => handleVerifikasi(selectedTx.id)}
              style={{ width: "100%", padding: "16px", backgroundColor: "#034425", color: "#ffffff", border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: "700", cursor: "pointer", boxShadow: "0 4px 12px rgba(3, 68, 37, 0.2)" }}
            >
              ✓ Konfirmasi & Setujui Struk Transaksi
            </button>
          ) : (
            <div style={{ backgroundColor: "#e6f0eb", border: "2px dashed #16a34a", padding: "18px", borderRadius: "12px", textAlign: "center", fontWeight: "700", color: "#034425" }}>
              ✅ Transaksi ini telah divalidasi oleh Superadmin & masuk laporan kas aktif.
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default LaporanSuperadmin;