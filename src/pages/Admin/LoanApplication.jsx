import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const LoanApplicationAdmin = () => {
  const navigate = useNavigate();

  // Data dummy nasabah 
  const loansData = [
    { id: 101, name: "Ibu Aminah - UMKM Keripik", purpose: "Modal Bahan Baku", amount: 5000000, tenor: "12 Bulan", status: "Pending" },
    { id: 102, name: "Ibu Siti - Tenun Ikat", purpose: "Beli Alat Tenun Baru", amount: 8000000, tenor: "24 Bulan", status: "Pending" },
    { id: 103, name: "Ibu Fatimah - Warung Kelontong", purpose: "Restock Sembako", amount: 3500000, tenor: "6 Bulan", status: "Pending" },
    { id: 104, name: "Ibu Rahma - Konveksi Rumahan", purpose: "Beli Mesin Jahit Obras", amount: 12000000, tenor: "18 Bulan", status: "Pending" },
    { id: 105, name: "Ibu Khadijah - Budidaya Lele", purpose: "Pembuatan Kolam Terpal", amount: 4500000, tenor: "12 Bulan", status: "Pending" },
    { id: 106, name: "Ibu Maryam - Katering Rumahan", purpose: "Beli Alat Masak & Gas", amount: 7000000, tenor: "12 Bulan", status: "Pending" },
  ];

  const amarthaColors = {
    darkGreen: "#034425",    
    brightGreen: "#66eb14",  
    menuGreen: "#4ade80",    
    textDark: "#111827",
    textMuted: "#6b7280",
    bgGray: "#f3f4f6"
  };

  const localStyles = {
    pageWrapper: {
      backgroundColor: "#f8fafc",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "sans-serif"
    },
    container: {
      flex: 1,
      maxWidth: "1200px",
      width: "100%",
      margin: "40px auto",
      padding: "0 20px",
      boxSizing: "border-box"
    },
    pageTitle: {
      textAlign: "center",
      fontSize: "28px",
      fontWeight: "bold",
      color: amarthaColors.darkGreen,
      marginBottom: "36px"
    },
    gridContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gap: "24px"
    },
    // card nasabah
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      border: `2px solid ${amarthaColors.menuGreen}`, 
      padding: "24px",
      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "14px"
    },
    badgePending: {
      backgroundColor: "#fef3c7",
      color: "#d97706",
      fontSize: "12px",
      fontWeight: "bold",
      padding: "4px 10px",
      borderRadius: "6px"
    },
    cardId: {
      fontSize: "12px",
      color: "#9ca3af",
      fontWeight: "600"
    },
    customerName: {
      fontSize: "18px",
      fontWeight: "bold",
      color: amarthaColors.darkGreen, 
      margin: "0 0 12px 0",
      lineHeight: "1.4"
    },
    infoRow: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
      margin: "6px 0",
      color: amarthaColors.textMuted
    },
    infoLabel: {
      color: "#9ca3af"
    },
    infoValue: {
      fontWeight: "bold",
      color: amarthaColors.textDark
    },
    purposeBox: {
      fontSize: "13px",
      color: amarthaColors.darkGreen,
      backgroundColor: "#f0fdf4", 
      padding: "8px 12px",
      borderRadius: "8px",
      margin: "8px 0 16px 0",
      borderLeft: `3px solid ${amarthaColors.menuGreen}`
    },
    // TOMBOL BERKAS
    btnVerify: {
      width: "100%",
      backgroundColor: amarthaColors.darkGreen,
      color: "#ffffff",
      border: "none",
      padding: "12px",
      borderRadius: "8px",
      fontWeight: "bold",
      fontSize: "14px",
      cursor: "pointer",
      textAlign: "center",
      marginTop: "auto",
      boxShadow: "0 2px 4px rgba(3, 68, 37, 0.2)"
    }
  };

  return (
    <div style={localStyles.pageWrapper}>
      {/* Navbar Kelompok */}
      <Navbar />

      <div style={localStyles.container}>
        <h1 style={localStyles.pageTitle}>Loan Application Admin</h1>
        
        <div style={localStyles.gridContainer}>
          {loansData.map((loan) => (
            <div key={loan.id} style={localStyles.card}>
              
              <div>
                <div style={localStyles.cardHeader}>
                  <span style={localStyles.badgePending}>{loan.status}</span>
                  <span style={localStyles.cardId}>ID: {loan.id}</span>
                </div>

                <h3 style={localStyles.customerName}>{loan.name}</h3>
                
                <div style={localStyles.infoRow}>
                  <span style={localStyles.infoLabel}>Tujuan Usaha:</span>
                </div>
                <div style={localStyles.purposeBox}>{loan.purpose}</div>

                <div style={localStyles.infoRow}>
                  <span style={localStyles.infoLabel}>Jumlah Pinjaman</span>
                  <span style={localStyles.infoValue}>Rp {loan.amount.toLocaleString('id-ID')}</span>
                </div>

                <div style={localStyles.infoRow} style={{ ...localStyles.infoRow, marginBottom: "20px" }}>
                  <span style={localStyles.infoLabel}>Tenor</span>
                  <span style={localStyles.infoValue}>{loan.tenor}</span>
                </div>
              </div>

              {/* Tombol pemicu navigasi */}
              <button 
                onClick={() => navigate('/admin/verification', { state: { loanData: loan } })} 
                style={localStyles.btnVerify}
                onMouseOver={(e) => e.target.style.backgroundColor = "#022c18"}
                onMouseOut={(e) => e.target.style.backgroundColor = amarthaColors.darkGreen}
              >
                Periksa Berkas
              </button>

            </div>
          ))}
        </div>
      </div>

      {/* Footer Kelompok */}
      <Footer />
    </div>
  );
};

export default LoanApplicationAdmin;