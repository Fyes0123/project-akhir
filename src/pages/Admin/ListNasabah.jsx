import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ListNasabah = () => {
  const navigate = useNavigate();

  // 1. Data Dummy Nasabah Aktif Bawaan (sebagai cadangan awal)
  const dataMentahAwal = [
    {
      id: 1, nama: "Sarah UMKM", nominal: "2.000.000", tenor: "12 Bulan", progress: 75,
      telepon: "0812-3456-7890", alamat: "Kec. Berkah, Kota Surabaya", sisa: "500.000",
      cicilan: [
        { tgl: "10 April 2026", bayar: "500.000", status: "Lunas" },
        { tgl: "10 Mei 2026", bayar: "500.000", status: "Lunas" },
        { tgl: "10 June 2026", bayar: "500.000", status: "Lunas" },
        { tgl: "10 July 2026", bayar: "500.000", status: "Belum Bayar" },
      ]
    },
    {
      id: 2, nama: "Devi UMKM", nominal: "2.000.000", tenor: "12 Bulan", progress: 50,
      telepon: "0899-8888-7777", alamat: "Desa Sukamaju, Jawa Timur", sisa: "1.000.000",
      cicilan: [
        { tgl: "01 Mei 2026", bayar: "500.000", status: "Lunas" },
        { tgl: "01 June 2026", bayar: "500.000", status: "Lunas" },
        { tgl: "01 July 2026", bayar: "500.000", status: "Belum Bayar" },
      ]
    },
    {
      id: 3, nama: "Ibu Aminah - Keripik", nominal: "5.000.000", tenor: "12 Bulan", progress: 20,
      telepon: "0813-7766-5544", alamat: "RT 04 / RW 02, Desa Makmur Jaya", sisa: "4.000.000",
      cicilan: [
        { tgl: "15 Mei 2026", bayar: "1.000.000", status: "Lunas" },
        { tgl: "15 June 2026", bayar: "1.000.000", status: "Belum Bayar" },
      ]
    },
    {
      id: 4, nama: "Ibu Siti - Tenun", nominal: "3.500.000", tenor: "6 Bulan", progress: 100,
      telepon: "0852-1122-3344", alamat: "Kampung Ulos, Kec. Indah Permai", sisa: "0",
      cicilan: [
        { tgl: "05 Jan 2026", bayar: "1.000.000", status: "Lunas" },
        { tgl: "05 Feb 2026", bayar: "1.000.000", status: "Lunas" },
        { tgl: "05 Mar 2026", bayar: "1.500.000", status: "Lunas" },
      ]
    },
    {
      id: 5, nama: "Pak Budi - Ternak Lele", nominal: "10.000.000", tenor: "24 Bulan", progress: 10,
      telepon: "0821-4455-6677", alamat: "Dusun Tambak Rejo No. 12", sisa: "9.000.000",
      cicilan: [
        { tgl: "20 Mei 2026", bayar: "1.000.000", status: "Lunas" },
        { tgl: "20 June 2026", bayar: "1.000.000", status: "Belum Bayar" },
      ]
    }
  ];

  // 2. 🔥 SEKARANG DATA DIBACA DARI LOCALSTORAGE AGAR SINKRON DENGAN SUPERADMIN
  const [dataNasabah, setDataNasabah] = useState(() => {
    const dataTersimpan = localStorage.getItem('listNasabahAktif');
    return dataTersimpan ? JSON.parse(dataTersimpan) : dataMentahAwal;
  });

  // Jika pertama kali app dibuka laci masih kosong, isi dengan data mentah awal
  useEffect(() => {
    if (!localStorage.getItem('listNasabahAktif')) {
      localStorage.setItem('listNasabahAktif', JSON.stringify(dataMentahAwal));
    }
  }, []);

  const [selectedNasabah, setSelectedNasabah] = useState(dataNasabah[0] || null);

  // Filter pencarian nama nasabah (agar fitur search box kamu berfungsi)
  const [searchTerm, setSearchTerm] = useState("");
  const filteredNasabah = dataNasabah.filter(n =>
    n.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{
      backgroundColor: "#f4f6f8",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Inter', sans-serif",
      overflow: "hidden",
      width: "100%"
    }}>

      {/* NAVBAR ATAS - HIJAU AMARTHA PREMIUM */}
      <div style={{
        backgroundColor: "#034425",
        padding: "18px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(3, 68, 37, 0.15)"
      }}>
        <div style={{ textAlign: "left" }}>
          <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: "#ffffff" }}>List Nasabah Aktif</h2>
          <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#a3cfbb" }}>Monitoring data pembayaran dan sisa tenor mitra UMKM</p>
        </div>
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
          ⬅️ Kembali ke Dashboard
        </button>
      </div>

      {/* STRUKTUR SPLIT-VIEW PANEL */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden", width: "100%" }}>

        {/* PANEL SEBELAH KIRI: LIST MITRA */}
        <div style={{
          width: "360px",
          backgroundColor: "#ffffff",
          borderRight: "1px solid #e2e8f0",
          overflowY: "auto",
          padding: "20px",
          boxSizing: "border-box"
        }}>
          <div style={{ position: "sticky", top: 0, backgroundColor: "#ffffff", paddingBottom: "16px", zIndex: 10 }}>
            <input
              type="text"
              placeholder="Cari nama nasabah..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                boxSizing: "border-box",
                fontSize: "14px"
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {filteredNasabah.map((n) => (
              <div
                key={n.id || n.idContract}
                onClick={() => setSelectedNasabah(n)}
                style={{
                  padding: "16px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  backgroundColor: selectedNasabah && (selectedNasabah.id === n.id && selectedNasabah.nama === n.nama) ? "#f0f7f4" : "#ffffff",
                  border: selectedNasabah && (selectedNasabah.id === n.id && selectedNasabah.nama === n.nama) ? "1.5px solid #034425" : "1px solid #e2e8f0",
                  transition: "all 0.2s ease",
                  textAlign: "left"
                }}
              >
                <div style={{ fontWeight: "700", color: "#0f172a", fontSize: "15px" }}>{n.nama}</div>
                <div style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>Total Dana: Rp {n.nominal || n.totalDana}</div>

                {/* Progress Bar Dinamis */}
                <div style={{ marginTop: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", marginBottom: "4px", fontWeight: "600", color: "#64748b" }}>
                    <span>Progres Pelunasan</span>
                    <span style={{ color: "#034425" }}>{n.progress !== undefined ? n.progress : n.progresPelunasan}%</span>
                  </div>
                  <div style={{ width: "100%", height: "6px", backgroundColor: "#e2e8f0", borderRadius: "10px", overflow: "hidden" }}>
                    <div style={{ width: `${n.progress !== undefined ? n.progress : n.progresPelunasan}%`, height: "100%", backgroundColor: "#034425" }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL SEBELAH KANAN: WORKSPACE DETAIL */}
        <div style={{ flex: 1, overflowY: "auto", padding: "36px", textAlign: "left", boxSizing: "border-box" }}>

          {selectedNasabah ? (
            <>
              {/* Header Detail Nasabah */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <div>
                  <h1 style={{ margin: 0, fontSize: "28px", fontWeight: "800", color: "#0f172a" }}>{selectedNasabah.nama}</h1>
                  <p style={{ color: "#64748b", margin: "4px 0 0 0", fontSize: "13px" }}>
                    ID Kontrak Resmi: {selectedNasabah.idContract || `ID-AMR-${selectedNasabah.id}099`}
                  </p>
                </div>
                <span style={{
                  backgroundColor: "#e6f0eb",
                  color: "#034425",
                  padding: "6px 16px",
                  borderRadius: "6px",
                  fontWeight: "700",
                  fontSize: "12px",
                  border: "1px solid #a3cfbb"
                }}>
                  🟢 MITRA AKTIF
                </span>
              </div>

              {/* GRID TIGA KOTAK UTAMA */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "32px" }}>
                <div style={{ backgroundColor: "#6baa41", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "20px", color: "#ffffff", fontWeight: "700" }}>PENCAIRAN DANA</span>
                  <p style={{ margin: "6px 0 0 0", fontSize: "22px", fontWeight: "800", color: "#034425" }}>
                    {selectedNasabah.nominal ? `Rp ${selectedNasabah.nominal}` : selectedNasabah.totalDana}
                  </p>
                </div>
                <div style={{ backgroundColor: "#6baa41", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "20px", color: "#ffffff", fontWeight: "700" }}>SISA TAGIHAN</span>
                  <p style={{ margin: "6px 0 0 0", fontSize: "22px", fontWeight: "800", color: "#b91c1c" }}>
                    {selectedNasabah.sisa ? `Rp ${selectedNasabah.sisa}` : selectedNasabah.sisaTagihan}
                  </p>
                </div>
                <div style={{ backgroundColor: "#6baa41", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "20px", color: "#64748b", fontWeight: "700" }}>DURASI TENOR</span>
                  <p style={{ margin: "6px 0 0 0", fontSize: "22px", fontWeight: "800", color: "#0f172a" }}>{selectedNasabah.tenor}</p>
                </div>
              </div>

              {/* INFORMASI KONTAK */}
              <div style={{ backgroundColor: "#ffffff", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "32px" }}>
                <h4 style={{ margin: "0 0 16px 0", fontSize: "15px", fontWeight: "700", color: "#034425" }}>📋 Informasi Profil Domisili</h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "24px" }}>
                  <div>
                    <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>NOMOR TELEPON MITRA</span>
                    <p style={{ margin: "4px 0 0 0", fontWeight: "600", color: "#0f172a", fontSize: "14px" }}>{selectedNasabah.telepon}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>ALAMAT KELOMPOK</span>
                    <p style={{ margin: "4px 0 0 0", fontWeight: "600", color: "#0f172a", fontSize: "14px" }}>{selectedNasabah.alamat}</p>
                  </div>
                </div>
              </div>

              {/* TABEL ANGSURAN */}
              <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                <div style={{ padding: "16px 24px", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0", fontWeight: "700", fontSize: "14px", color: "#0f172a" }}>
                  🧾 Riwayat Angsuran Mingguan / Bulanan
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ textAlign: "left", borderBottom: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
                      <th style={{ padding: "14px 24px", fontSize: "12px", color: "#64748b", fontWeight: "600" }}>JATUH TEMPO</th>
                      <th style={{ padding: "14px 24px", fontSize: "12px", color: "#64748b", fontWeight: "600" }}>JUMLAH SETORAN</th>
                      <th style={{ padding: "14px 24px", fontSize: "12px", color: "#64748b", fontWeight: "600" }}>STATUS BAYAR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(selectedNasabah.cicilan || selectedNasabah.riwayatAngsuran).map((c, index) => (
                      <tr key={index} style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "14px 24px", fontSize: "14px", color: "#334155" }}>{c.tgl}</td>
                        <td style={{ padding: "14px 24px", fontSize: "14px", fontWeight: "700", color: "#034425" }}>
                          {c.bayar ? `Rp ${c.bayar}` : c.jumlah}
                        </td>
                        <td style={{ padding: "14px 24px" }}>
                          <span style={{
                            backgroundColor: c.status.toLowerCase() === "lunas" ? "#e6f0eb" : "#fef2f2",
                            color: c.status.toLowerCase() === "lunas" ? "#034425" : "#b91c1c",
                            padding: "4px 10px",
                            borderRadius: "4px",
                            fontSize: "11px",
                            fontWeight: "700",
                            border: c.status.toLowerCase() === "lunas" ? "1px solid #a3cfbb" : "1px solid #fca5a5"
                          }}>
                            {c.status.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <p style={{ color: "#64748b" }}>Pilih salah satu nasabah untuk melihat detail.</p>
          )}

        </div>
      </div>
    </div>
  );
};

export default ListNasabah;
