import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const VerifikasiBerkasAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [loan, setLoan] = useState(null);

  // LOAD DATA (from navigation OR fallback API-ready structure)
  useEffect(() => {
    if (location.state?.loanData) {
      setLoan(location.state.loanData);
    } else {
      setLoan(null);
    }
  }, [location.state]);

  if (!loan) return <div style={{ padding: 20 }}>Loading...</div>;

  const currentLoan = loan;

  const handleKirimKeSuperadmin = () => {
    const antreanLama =
      JSON.parse(localStorage.getItem('listPengajuanSuperadmin')) || [];

    const dataBungkusBaru = {
      id: `TX-${Math.floor(10000 + Math.random() * 90000)}`,
      nama: currentLoan.name,
      nominal: currentLoan.amount.toLocaleString('id-ID'),
      tenor: currentLoan.tenor,
      keperluan: `${currentLoan.purpose} - Dana digunakan untuk operasional, pengembangan usaha, dan restock.`,
      verifikator: "Admin Lapangan (Sektor Pusat)",
      tglVerifikasi: "01 Juni 2026",
      statusFinal: "PENDING"
    };

    const antreanTerbaru = [...antreanLama, dataBungkusBaru];
    localStorage.setItem('listPengajuanSuperadmin', JSON.stringify(antreanTerbaru));

    const listDaftarAdmin =
      JSON.parse(localStorage.getItem('listStatusDaftarAdmin')) || [];

    const updatedListAdmin = listDaftarAdmin.map(item => {
      if (item.id === currentLoan.id) {
        return { ...item, status: "Diteruskan" };
      }
      return item;
    });

    localStorage.setItem(
      'listStatusDaftarAdmin',
      JSON.stringify(updatedListAdmin)
    );

    alert(`Sukses! Laporan ${currentLoan.name} dikirim ke Superadmin.`);
    navigate(-1);
  };

  return (
    <div style={{
      backgroundColor: "#f4f6f9",
      minHeight: "100vh",
      padding: "40px 20px",
      fontFamily: "'Inter', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>

      {/* HEADER */}
      <div style={{
        maxWidth: "800px",
        width: "100%",
        backgroundColor: "#034425",
        borderRadius: "16px",
        padding: "28px",
        color: "#fff",
        marginBottom: "24px",
        position: "relative"
      }}>
        <h2 style={{ margin: 0 }}>Verifikasi Berkas Pengajuan</h2>
        <p style={{ margin: "8px 0 0 0", fontSize: "14px", opacity: 0.85 }}>
          Periksa detail pengajuan nasabah
        </p>

        <button
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
            padding: "8px 14px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#22c55e",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Kembali
        </button>
      </div>

      {/* INFO */}
      <div style={{
        maxWidth: "800px",
        width: "100%",
        backgroundColor: "#fff",
        padding: "24px",
        borderRadius: "16px",
        marginBottom: "20px"
      }}>
        <h4>Informasi Pemohon</h4>
        <p><b>Nama:</b> {currentLoan.name}</p>
      </div>

      {/* DETAIL */}
      <div style={{
        maxWidth: "800px",
        width: "100%",
        backgroundColor: "#fff",
        padding: "24px",
        borderRadius: "16px",
        marginBottom: "20px"
      }}>
        <h4>Detail Pengajuan</h4>
        <p><b>Nominal:</b> Rp {currentLoan.amount.toLocaleString('id-ID')}</p>
        <p><b>Tenor:</b> {currentLoan.tenor}</p>
        <p><b>Tujuan:</b> {currentLoan.purpose}</p>
      </div>

      {/* ACTIONS */}
      <div style={{
        maxWidth: "800px",
        width: "100%",
        display: "flex",
        gap: "20px"
      }}>

        {/* REJECT */}
        <button
          onClick={() => {
            const catatan = prompt("Alasan perbaikan:");
            if (!catatan) return;

            const list =
              JSON.parse(localStorage.getItem('listStatusDaftarAdmin')) || [];

            const updated = list.map(item =>
              item.id === currentLoan.id
                ? { ...item, status: "Perbaikan", catatanAdmin: catatan }
                : item
            );

            localStorage.setItem(
              'listStatusDaftarAdmin',
              JSON.stringify(updated)
            );

            alert("Dikembalikan ke nasabah");
            navigate(-1);
          }}
          style={{
            flex: 1,
            padding: "16px",
            backgroundColor: "#fee2e2",
            border: "2px solid #fca5a5",
            color: "#e11d48",
            fontWeight: "700",
            borderRadius: "12px",
            cursor: "pointer"
          }}
        >
          Tolak & Perbaiki
        </button>

        {/* APPROVE */}
        <button
          onClick={handleKirimKeSuperadmin}
          style={{
            flex: 1,
            padding: "16px",
            backgroundColor: "#034425",
            color: "#fff",
            fontWeight: "700",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Teruskan ke Superadmin
        </button>

      </div>
    </div>
  );
};

export default VerifikasiBerkasAdmin;
