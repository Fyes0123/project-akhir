import React from 'react';
import { useNavigate } from 'react-router-dom';

function LaporanSuperadmin() {
  const navigate = useNavigate();

  // Data tiruan list dokumen PDF sesuai mockup figma kamu
  const dataLaporan = [
    { id: 1, tanggal: '12 April 2025' },
    { id: 2, tanggal: '13 Mei 2025' },
    { id: 3, tanggal: 'Date' }, // Menyamakan dengan placeholder figma ketiga
  ];

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
    // KONTEN UTAMA LAPORAN
    mainContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px 20px',
      boxSizing: 'border-box'
    },
    pageTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#333333',
      marginBottom: '24px',
      textAlign: 'center'
    },
    outerGreenBox: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#60d040', // Background hijau terang pembungkus luar figma
      borderRadius: '16px',
      padding: '16px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    // KARTU DOKUMEN DALAM
    documentCard: {
      width: '100%',
      backgroundColor: '#10943b', // Hijau tua wadah dokumen
      borderRadius: '8px',
      padding: '16px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      position: 'relative'
    },
    cardHeaderRow: {
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start'
    },
    // IKON PDF MERAH FIGMA
    pdfIcon: {
      width: '55px',
      height: '70px',
      backgroundColor: '#d60000',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: '16px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
      flexShrink: 0
    },
    infoDetails: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    dateBadge: {
      backgroundColor: '#40c000',
      color: '#ffffff',
      padding: '4px 12px',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: 'bold',
      alignSelf: 'flex-start'
    },
    lineMock: {
      width: '100%',
      height: '2px',
      backgroundColor: '#0c6e2b',
      marginTop: '4px'
    },
    // TOMBOL DOWNLOAD LAPORAN
    downloadButtonRow: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '4px'
    },
    downloadButton: {
      backgroundColor: '#80e000',
      color: '#042914',
      border: 'none',
      padding: '6px 20px',
      borderRadius: '4px',
      fontWeight: 'bold',
      fontSize: '11px',
      cursor: 'pointer'
    },
    // FOOTER
    footer: {
      width: '100%',
      backgroundColor: '#042914',
      color: '#ffffff',
      padding: '30px 24px',
      boxSizing: 'border-box',
      fontSize: '12px',
      marginTop: '40px'
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

  return (
    <div style={styles.pageContainer}>
      {/* 1. NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.logoText}>Amartha Empower</div>
        <button style={styles.navButton} onClick={() => navigate('/superadmin')}>Dashboard</button>
      </nav>

      {/* 2. KONTEN UTAMA */}
      <main style={styles.mainContent}>
        <h1 style={styles.pageTitle}>Laporan</h1>
        
        {/* Box Hijau Terang Pembungkus Luar */}
        <div style={styles.outerGreenBox}>
          {dataLaporan.map((laporan) => (
            <div key={laporan.id} style={styles.documentCard}>
              
              {/* Bagian Atas: PDF & Garis Tiruan */}
              <div style={styles.cardHeaderRow}>
                <div style={styles.pdfIcon}>PDF</div>
                
                <div style={styles.infoDetails}>
                  <div style={styles.dateBadge}>{laporan.tanggal}</div>
                  {/* Garis dekorasi isi dokumen figma */}
                  <div style={styles.lineMock}></div>
                  <div style={styles.lineMock}></div>
                  <div style={styles.lineMock}></div>
                  <div style={styles.lineMock}></div>
                </div>
              </div>

              {/* Bagian Bawah: Tombol Download */}
              <div style={styles.downloadButtonRow}>
                <button style={styles.downloadButton}>Download</button>
              </div>

            </div>
          ))}
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

export default LaporanSuperadmin;