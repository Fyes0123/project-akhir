import React from 'react';
import { useNavigate } from 'react-router-dom';

function DetailPengajuanSuperadmin() {
  const navigate = useNavigate();

  // Fungsi untuk kembali ke halaman list pinjaman sebelumnya
  const handleGoBack = () => {
    navigate('/superadmin/list-pinjaman');
  };

  const styles = {
    pageContainer: {
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      fontFamily: 'sans-serif',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    },
    // NAVBAR
    navbar: {
      width: '100%',
      backgroundColor: '#042914',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    logoText: {
      color: '#ffffff',
      fontSize: '20px',
      fontWeight: 'bold'
    },
    navButton: {
      backgroundColor: '#76da24',
      color: '#042914',
      border: 'none',
      padding: '6px 12px',
      borderRadius: '4px',
      fontWeight: 'bold',
      fontSize: '12px',
      cursor: 'pointer'
    },
    // KONTEN UTAMA FORMULIR
    mainContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px 20px',
      boxSizing: 'border-box'
    },
    formHeader: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#40c000',
      color: '#ffffff',
      textAlign: 'center',
      padding: '12px 0',
      fontWeight: '600',
      fontSize: '16px',
      borderRadius: '4px',
      marginBottom: '16px'
    },
    formContainer: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#10943b',
      borderRadius: '4px',
      padding: '24px 20px',
      boxSizing: 'border-box',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    },
    label: {
      fontSize: '13px',
      fontWeight: '500'
    },
    disabledInput: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#ffffff',
      color: '#333333',
      border: 'none',
      borderRadius: '4px',
      fontSize: '14px',
      boxSizing: 'border-box',
      letterSpacing: '2px' // Memberikan efek bintang/sensor renggang
    },
    // BAGIAN DOWNLOAD DOKUMEN
    documentRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginTop: '4px'
    },
    checkboxMock: {
      width: '24px',
      height: '24px',
      backgroundColor: '#ffffff',
      border: '1px solid #ccc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#333333',
      fontWeight: 'bold',
      fontSize: '14px',
      borderRadius: '2px'
    },
    downloadButton: {
      backgroundColor: '#76da24',
      color: '#042914',
      border: 'none',
      padding: '6px 16px',
      borderRadius: '4px',
      fontWeight: 'bold',
      fontSize: '12px',
      cursor: 'pointer'
    },
    // TOMBOL GO BACK
    backButtonContainer: {
      width: '100%',
      maxWidth: '400px',
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '20px',
      marginBottom: '20px'
    },
    backButton: {
      backgroundColor: '#76da24',
      color: '#042914',
      border: 'none',
      padding: '10px 24px',
      borderRadius: '4px',
      fontWeight: 'bold',
      fontSize: '14px',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    // FOOTER
    footer: {
      width: '100%',
      backgroundColor: '#042914',
      color: '#ffffff',
      padding: '30px 24px',
      boxSizing: 'border-box',
      fontSize: '12px'
    },
    footerTop: {
      fontWeight: 'bold',
      fontSize: '14px',
      marginBottom: '16px'
    },
    footerDivider: {
      borderBottom: '1px solid #10823b',
      marginBottom: '16px',
      opacity: 0.5
    },
    footerGrid: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '16px',
      marginBottom: '20px'
    },
    footerLinkGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    },
    footerBottomText: {
      textAlign: 'center',
      fontSize: '10px',
      opacity: 0.7,
      marginTop: '10px'
    }
  };

  // List field data formulir figma
  const fields = [
    { label: 'Nama Lengkap', value: '*************' },
    { label: 'Nomor Handphone', value: '*************' },
    { label: 'Alamat', value: '*************' },
    { label: 'Rata Rata Pemasukan Perbulan', value: '*************' },
    { label: 'Rata - Rata Pengeluaran Perbulan', value: '*************' },
    { label: 'Jumlah Pinjaman', value: '*************' },
    { label: 'Tanggal Pembayaran [Tiap tanggal berapa]', value: '*************' },
    { label: 'Keperluan Peminjaman', value: '*************' },
  ];

  // List dokumen pendukung figma
  const docs = [
    { label: 'Nominal ID/KTP' },
    { label: 'Selfie dengan KTP' },
    { label: 'Informasi Bisnis' },
    { label: 'Lisensi Bisnis' },
    { label: 'NPWP' }
  ];

  return (
    <div style={styles.pageContainer}>
      {/* 1. NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.logoText}>Amartha Empower</div>
        <button style={styles.navButton} onClick={() => navigate('/superadmin')}>Dashboard</button>
      </nav>

      {/* 2. FORM KONTEN */}
      <main style={styles.mainContent}>
        <div style={styles.formHeader}>Loan Application</div>
        
        <div style={styles.formContainer}>
          {/* Render Text Fields */}
          {fields.map((field, idx) => (
            <div key={idx} style={styles.inputGroup}>
              <label style={styles.label}>{field.label}</label>
              <input type="text" value={field.value} readOnly style={styles.disabledInput} />
            </div>
          ))}

          {/* Render Dokumen Unduhan */}
          {docs.map((doc, idx) => (
            <div key={idx} style={styles.inputGroup}>
              <label style={styles.label}>{doc.label}</label>
              <div style={styles.documentRow}>
                <div style={styles.checkboxMock}>X</div>
                <button style={styles.downloadButton}>Download</button>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Go Back */}
        <div style={styles.backButtonContainer}>
          <button onClick={handleGoBack} style={styles.backButton}>Go Back</button>
        </div>
      </main>

      {/* 3. FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerTop}>Amartha Empower</div>
        <div style={styles.footerDivider}></div>
        
        <div style={styles.footerGrid}>
          <div>Jl. Eaa, Kecamatan Unuww, Kota Ouar, Provinsi Adadeh</div>
          <div style={styles.footerGrid}>
            <div style={styles.footerLinkGroup}>
              <strong>Contact</strong>
              <span>Mail To Us</span>
              <span>Chat To Us</span>
            </div>
            <div style={styles.footerLinkGroup}>
              <strong>Contact</strong>
              <span>Mail To Us</span>
              <span>Chat To Us</span>
            </div>
            <div style={styles.footerLinkGroup}>
              <strong>Contact</strong>
              <span>Mail To Us</span>
              <span>Chat To Us</span>
            </div>
          </div>
        </div>

        <div style={styles.footerDivider}></div>
        <div style={styles.footerBottomText}>
          © 2025 Amartha Empower Company. All Right Reserved.<br/>
          Terms & Conditions | Privacy Policy
        </div>
      </footer>
    </div>
  );
}

export default DetailPengajuanSuperadmin;