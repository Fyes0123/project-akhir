import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const VerificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Menangkap data loan yang dikirim via navigate state
  const { loanData } = location.state || {};

  // Proteksi jika halaman diakses langsung tanpa data
  if (!loanData) {
    return (
      <div
        style={{
          padding: '40px',
          textAlign: 'center',
          fontFamily: 'sans-serif'
        }}
      >
        <p
          style={{
            color: '#ef4444',
            fontWeight: '600',
            marginBottom: '16px'
          }}
        >
          Data pengajuan tidak ditemukan.
        </p>

        <button
          onClick={() => navigate(-1)}
          style={{
            color: '#034425',
            textDecoration: 'underline',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Kembali ke Daftar Pengajuan
        </button>
      </div>
    );
  }

  const handleApprove = () => {
    alert(
      `Pengajuan atas nama ${loanData.name} ✓ BERHASIL DITERIMA! ✓`
    );
    navigate(-1);
  };

  const handleReject = () => {
    alert(
      `Pengajuan atas nama ${loanData.name} ❌ TELAH DITOLAK! ❌`
    );
    navigate(-1);
  };

  const colors = {
    primaryDark: '#034425',
    primaryNeon: 'rgb(188, 255, 146)',
    textDark: '#111827',
    textMuted: '#4b5563',
    white: '#ffffff'
  };

  const styles = {
    pageWrapper: {
      backgroundColor: '#f9fafb',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'sans-serif'
    },

    container: {
      flex: 1,
      maxWidth: '900px',
      width: '100%',
      margin: '40px auto',
      padding: '0 20px',
      boxSizing: 'border-box'
    },

    headerCard: {
      backgroundColor: colors.primaryDark,
      borderRadius: '16px',
      padding: '28px',
      color: colors.white,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
    },

    headerTitle: {
      fontSize: '30px',
      fontWeight: 'bold',
      margin: 0,
      marginBottom: '6px'
    },

    headerSubtitle: {
      fontSize: '20px',
      color: colors.primaryNeon,
      margin: 0
    },

    btnBack: {
      backgroundColor: colors.primaryNeon,
      color: colors.primaryDark,
      fontWeight: '600',
      padding: '10px 20px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer'
    },

    sectionCard: {
      backgroundColor: colors.white,
      borderRadius: '16px',
      border: '1px solid #e5e7eb',
      padding: '24px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    },

    sectionHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: colors.primaryDark,
      borderBottom: '2px solid #f3f4f6',
      paddingBottom: '12px',
      marginBottom: '20px'
    },

    grid2: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px'
    },

    label: {
      fontSize: '12px',
      color: '#9ca3af',
      textTransform: 'uppercase',
      fontWeight: '600',
      display: 'block',
      marginBottom: '4px'
    },

    value: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: colors.textDark
    },

    valueHighlight: {
      fontSize: '26px',
      fontWeight: 'bold',
      color: colors.primaryDark
    },

    purposeBox: {
      backgroundColor: '#f9fafb',
      border: '1px solid #e5e7eb',
      padding: '16px',
      borderRadius: '12px',
      fontSize: '14px',
      color: colors.textMuted,
      lineHeight: '1.6',
      marginTop: '12px'
    },

    fileRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f0fdf4',
      border: '1px solid #72d895',
      padding: '16px',
      borderRadius: '12px',
      marginBottom: '12px'
    },

    badge: {
      backgroundColor: '#fef3c7',
      color: '#d97706',
      fontSize: '12px',
      fontWeight: 'bold',
      padding: '4px 12px',
      borderRadius: '20px'
    },

    btnViewFile: {
      backgroundColor: colors.primaryNeon,
      color: colors.primaryDark,
      border: 'none',
      padding: '8px 16px',
      borderRadius: '8px',
      fontWeight: 'bold',
      cursor: 'pointer'
    },

    actionRow: {
      display: 'flex',
      gap: '16px',
      marginTop: '32px'
    },

    btnReject: {
      flex: 1,
      backgroundColor: '#fef2f2',
      color: '#dc2626',
      border: '1px solid #fca5a5',
      padding: '14px',
      borderRadius: '12px',
      fontWeight: 'bold',
      cursor: 'pointer'
    },

    btnApprove: {
      flex: 2,
      backgroundColor: colors.primaryDark,
      color: colors.white,
      border: 'none',
      padding: '14px',
      borderRadius: '12px',
      fontWeight: 'bold',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <Navbar />

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.headerCard}>
          <div>
            <h1 style={styles.headerTitle}>
              Verifikasi Berkas Pengajuan
            </h1>

            <p style={styles.headerSubtitle}>
              Periksa detail formulir loan apply milik nasabah
            </p>
          </div>

          <button
            onClick={() => navigate(-1)}
            style={styles.btnBack}
          >
            ◀ Kembali
          </button>
        </div>

        {/* Informasi Pemohon */}
        <div style={styles.sectionCard}>
          <div style={styles.sectionHeader}>
            👤 Informasi Pemohon
          </div>

          <div style={styles.grid2}>
            <div>
              <span style={styles.label}>
                Nama Lengkap Nasabah
              </span>

              <span style={styles.value}>
                {loanData.name}
              </span>
            </div>

            <div>
              <span style={styles.label}>
                Jenis Usaha UMKM
              </span>

              <span style={styles.value}>
                Usaha Mikro Mitra Amartha
              </span>
            </div>
          </div>
        </div>

        {/* Detail Finansial */}
        <div style={styles.sectionCard}>
          <div style={styles.sectionHeader}>
            💰 Detail Finansial Pengajuan
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: '24px',
              marginBottom: '20px'
            }}
          >
            <div>
              <span style={styles.label}>
                Nominal Pinjaman
              </span>

              <span style={styles.valueHighlight}>
                Rp {loanData.amount.toLocaleString('id-ID')}
              </span>
            </div>

            <div>
              <span style={styles.label}>
                Durasi Tenor
              </span>

              <span style={styles.value}>
                {loanData.tenor}
              </span>
            </div>
          </div>

          <span style={styles.label}>
            Tujuan Penggunaan Dana
          </span>

          <div style={styles.purposeBox}>
            <strong>{loanData.purpose}</strong> -
            Dana digunakan untuk operasional,
            pengembangan usaha, dan restock.
          </div>
        </div>

        {/* Dokumen Lampiran */}
        <div style={styles.sectionCard}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}
          >
            <h3>📄 Dokumen Lampiran</h3>
            <span style={styles.badge}>
              {loanData.status}
            </span>
          </div>

          {['KTP', 'NPWP', 'SKU'].map((doc) => (
            <div key={doc} style={styles.fileRow}>
              <div>
                <strong>
                  Syarat_Berkas_Kelayakan.pdf
                </strong>
                <p>{doc}</p>
              </div>

              <button style={styles.btnViewFile}>
                Lihat Berkas
              </button>
            </div>
          ))}
        </div>

        {/* Tombol Aksi */}
        <div style={styles.actionRow}>
          <button
            onClick={handleReject}
            style={styles.btnReject}
          >
            ❌ Tolak Pengajuan
          </button>

          <button
            onClick={handleApprove}
            style={styles.btnApprove}
          >
            ✓ Terima & Cairkan Dana
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VerificationPage;