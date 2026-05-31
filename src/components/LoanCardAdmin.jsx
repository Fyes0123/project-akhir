import React from 'react';
import { useNavigate } from 'react-router-dom';

// Kita ganti tangkapannya menjadi 'data' agar pas dengan file LoanApplication-mu!
const LoanCardAdmin = ({ data }) => {
  const navigate = useNavigate();

  // Memetakan isi data dummy asli kamu agar terbaca sempurna
  const name = data?.nama_nasabah || 'Nama Tidak Diketahui';
  const amount = data?.jumlah_pinjaman || 0;
  const purpose = data?.tujuan_pinjaman || '-';
  const tenor = data?.tenor ? `${data.tenor} Bulan` : '-';
  const status = data?.status || 'Pending';

  const handleCardClick = () => {
    // Melempar data yang diklik ke halaman verifikasi dengan selamat!
    navigate('/admin/verification', { 
      state: { 
        loanData: { name, amount, tenor, status, purpose } 
      } 
    });
  };

  return (
    <div style={{
      backgroundColor: "#white",
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
      border: "1px solid #e5e7eb",
      padding: "24px",
      width: "280px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "between",
      fontFamily: "sans-serif"
    }}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <span style={{
            fontSize: "12px",
            fontWeight: "600",
            padding: "2px 10px",
            borderRadius: "4px",
            backgroundColor: "#fef3c7",
            color: "#92400e"
          }}>
            {status}
          </span>
          <span style={{ fontSize: "12px", color: "#9ca3af" }}>ID: {data?.id}</span>
        </div>
        
        <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#1f2937", marginBottom: "4px" }}>{name}</h3>
        <p style={{ fontSize: "13px", color: "#4b5563", marginBottom: "16px" }}>Tujuan: {purpose}</p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
            <span style={{ color: "#6b7280" }}>Jumlah Pinjaman</span>
            <span style={{ fontWeight: "600", color: "#111827" }}>
              Rp {amount.toLocaleString('id-ID')}
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
            <span style={{ color: "#6b7280" }}>Tenor</span>
            <span style={{ fontWeight: "600", color: "#111827" }}>{tenor}</span>
          </div>
        </div>
      </div>

      <button 
        onClick={handleCardClick}
        style={{
          width: "100%",
          backgroundColor: "#2563eb",
          color: "white",
          fontWeight: "500",
          padding: "10px 0",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
          textAlign: "center",
          transition: "background-color 0.2s"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#1d4ed8"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#2563eb"}
      >
        Periksa Berkas
      </button>
    </div>
  );
};

export default LoanCardAdmin;