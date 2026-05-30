import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LoanCardAdmin from "../../components/LoanCardAdmin"; // 👈 Memanggil komponen card terpisah

function LoanApplication() {
  const navigate = useNavigate();

  // 6 Contoh data tiruan aplikasi pengajuan pinjaman yang masuk
  const dataApplyLoan = [
    { id: 101, nama_nasabah: 'Ibu Aminah - UMKM Keripik', jumlah_pinjaman: 5000000, tenor: 12, tujuan_pinjaman: 'Modal Bahan Baku', status: 'Pending' },
    { id: 102, nama_nasabah: 'Ibu Siti - Tenun Ikat', jumlah_pinjaman: 8000000, tenor: 24, tujuan_pinjaman: 'Beli Alat Tenun Baru', status: 'Pending' },
    { id: 103, nama_nasabah: 'Ibu Fatimah - Warung Kelontong', jumlah_pinjaman: 3500000, tenor: 6, tujuan_pinjaman: 'Restock Sembako', status: 'Pending' },
    { id: 104, nama_nasabah: 'Ibu Rahma - Konveksi Rumahan', jumlah_pinjaman: 12000000, tenor: 18, tujuan_pinjaman: 'Beli Mesin Jahit Obras', status: 'Pending' },
    { id: 105, nama_nasabah: 'Ibu Khadijah - Budidaya Lele', jumlah_pinjaman: 4500000, tenor: 12, tujuan_pinjaman: 'Pembuatan Kolam Terpal', status: 'Pending' },
    { id: 106, nama_nasabah: 'Ibu Maryam - Katering Rumahan', jumlah_pinjaman: 7000000, tenor: 12, tujuan_pinjaman: 'Beli Alat Masak & Gas', status: 'Pending' },
  ];

  const styles = {
    pageWrapper: {
      backgroundColor: "#ffffff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "sans-serif"
    },
    contentArea: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px"
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#333333",
      marginBottom: "32px",
      textAlign: "center"
    },
    // Layout Grid melebar kanan-kiri
    listGrid: {
      width: "100%",
      maxWidth: "1000px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "24px"
    }
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Memakai komponen Navbar bawaan tim kalian */}
      <Navbar />

      <div style={styles.contentArea}>
        <h2 style={styles.title}>Loan Application Admin</h2>

        <div style={styles.listGrid}>
          {dataApplyLoan.map((loan) => (
            <LoanCardAdmin 
              key={loan.id}
              data={loan}
              onVerifyClick={() => navigate("/admin/pinjaman")} // Sesuaikan rute navigasi kelompokmu jika perlu
            />
          ))}
        </div>
      </div>

      {/* Memakai komponen Footer bawaan tim kalian */}
      <Footer />
    </div>
  );
}

export default LoanApplication;