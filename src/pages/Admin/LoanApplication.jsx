import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const LoanApplicationAdmin = () => {
  const navigate = useNavigate();

  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/loan-applications')
      .then((res) => res.json())
      .then((data) => {
        setLoans(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const statusMap = {
    pending: 'Pending',
    revisi: 'Perbaikan',
    rejected: 'Ditolak',
    education_required: 'Edukasi',
    eligible: 'Layak',
    eligible_disbursement: 'Siap Cair',
  }

  const amarthaColors = {
    darkGreen: "#034425",
    brightGreen: "#66eb14",
    menuGreen: "#4ade80",
    textDark: "#111827",
    textMuted: "#6b7280",
    bgGray: "#f3f4f6"
  };

  const localStyles = {
    pageWrapper: { backgroundColor: "#f8fafc", minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "sans-serif" },
    container: { flex: 1, maxWidth: "1200px", width: "100%", margin: "0 auto 40px auto", padding: "0 20px", boxSizing: "border-box" },
    headerArea: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "32px", marginBottom: "36px", borderBottom: "1px solid #e2e8f0", paddingBottom: "16px" },
    pageTitle: { fontSize: "26px", fontWeight: "bold", color: amarthaColors.darkGreen, margin: 0 },
    btnBack: { backgroundColor: "#ffffff", border: `1.5px solid ${amarthaColors.darkGreen}`, padding: "8px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "600", color: amarthaColors.darkGreen, fontSize: "14px", transition: "all 0.2s ease" },
    gridContainer: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" },
    card: { backgroundColor: "#ffffff", borderRadius: "16px", border: `2px solid ${amarthaColors.menuGreen}`, padding: "24px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", justifyContent: "space-between" },
    cardHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" },
    getBadgeStyle: (status) => ({
      backgroundColor: status === "Diteruskan" ? "#dcfce7" : status === "Perbaikan" ? "#ffe4e6" : status === "Disetujui Superadmin" ? "#e0f2fe" : status === "Ditolak Superadmin" ? "#fee2e2" : "#fef3c7",
      color: status === "Diteruskan" ? "#16a34a" : status === "Perbaikan" ? "#e11d48" : status === "Disetujui Superadmin" ? "#0369a1" : status === "Ditolak Superadmin" ? "#991b1b" : "#d97706",
      fontSize: "12px", fontWeight: "bold", padding: "4px 10px", borderRadius: "6px"
    }),
    cardId: { fontSize: "12px", color: "#9ca3af", fontWeight: "600" },
    customerName: { fontSize: "18px", fontWeight: "bold", color: amarthaColors.darkGreen, margin: "0 0 12px 0", lineHeight: "1.4" },
    infoRow: { display: "flex", justifyContent: "space-between", fontSize: "14px", margin: "6px 0", color: amarthaColors.textMuted },
    infoLabel: { color: "#9ca3af" },
    infoValue: { fontWeight: "bold", color: amarthaColors.textDark },
    purposeBox: { fontSize: "13px", color: amarthaColors.darkGreen, backgroundColor: "#f0fdf4", padding: "8px 12px", borderRadius: "8px", margin: "8px 0 16px 0", borderLeft: `3px solid ${amarthaColors.menuGreen}` },
    btnVerify: (status) => ({
      width: "100%",
      backgroundColor: (status === "Diteruskan" || status === "Disetujui Superadmin") ? "#94a3b8" : status === "Ditolak Superadmin" ? "#cbd5e1" : status === "Perbaikan" ? "#e11d48" : amarthaColors.darkGreen,
      color: status === "Ditolak Superadmin" ? "#64748b" : "#ffffff",
      border: "none", padding: "12px", borderRadius: "8px", fontWeight: "bold", fontSize: "14px",
      cursor: (status === "Diteruskan" || status === "Disetujui Superadmin" || status === "Ditolak Superadmin") ? "not-allowed" : "pointer",
      textAlign: "center", marginTop: "auto", boxShadow: "0 2px 4px rgba(3, 68, 37, 0.2)"
    })
  };

  return (
    <div style={localStyles.pageWrapper}>
      <Navbar />
      <div style={localStyles.container}>

        <div style={localStyles.headerArea}>
          <h1 style={localStyles.pageTitle}>Loan Application Admin</h1>
          <button
            onClick={() => navigate(-1)}
            style={localStyles.btnBack}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = amarthaColors.darkGreen; e.currentTarget.style.color = "#ffffff"; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#ffffff"; e.currentTarget.style.color = amarthaColors.darkGreen; }}
          >
            ⬅️ Kembali ke Dashboard
          </button>
        </div>

        <div style={localStyles.gridContainer}>
          {loans.map((loan) => (
            <div key={loan.id} style={localStyles.card}>
              <div>
                <div style={localStyles.cardHeader}>
                  <span style={localStyles.getBadgeStyle(loan.status)}>
                    {statusMap[loan.status] || loan.status}
                  </span>
                  <span style={localStyles.cardId}>ID: {loan.id}</span>
                </div>

                <h3 style={localStyles.customerName}>{loan.user?.full_name}</h3>

                <div style={localStyles.infoRow}><span style={localStyles.infoLabel}>Tujuan Usaha:</span></div>
                <div style={localStyles.purposeBox}>
                  {loan.purpose_category}
                  <br />
                  {loan.purpose_description}
                </div>

                <div style={localStyles.infoRow}>
                  <span style={localStyles.infoLabel}>Jumlah Pinjaman</span>
                  <span style={localStyles.infoValue}>Rp {Number(loan.amount).toLocaleString('id-ID')}</span>
                </div>

                <div style={{ ...localStyles.infoRow, marginBottom: "20px" }}>
                  <span style={localStyles.infoLabel}>Tenor</span>
                  <span style={localStyles.infoValue}>{loan.tenor_value} {loan.tenor_unit}</span>
                </div>
              </div>

              <button
                disabled={
                  loan.status === 'eligible_disbursement' ||
                  loan.status === 'rejected'
                }
                onClick={() =>
                  navigate('/admin/verification', { state: { loanData: loan } })
                }
                style={localStyles.btnVerify(loan.status)}
              >
                {loan.status === 'eligible_disbursement'
                  ? 'Selesai Diverifikasi'
                  : loan.status === 'rejected'
                    ? 'Ditolak Final'
                    : loan.status === 'revisi'
                      ? 'Periksa Ulang Berkas'
                      : 'Periksa Berkas'}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoanApplicationAdmin;