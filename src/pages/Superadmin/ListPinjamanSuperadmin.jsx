import React from 'react';
import { useNavigate } from 'react-router-dom';

function ListPinjamanSuperadmin() {
  const navigate = useNavigate();

  // Data tiruan nasabah sesuai yang ada di figma kamu
  const dataNasabah = [
    { id: 1, nama: 'Sarah UMKM', nominal1: '2.000.000', nominal2: '2.000.000' },
    { id: 2, nama: 'Joni UMKM', nominal1: '2.000.000', nominal2: '2.000.000' },
    { id: 3, nama: 'Sinta UMKM', nominal1: '2.000.000', nominal2: '2.000.000' },
  ];

  const handleCekClick = (id) => {
    // Jalur seru: saat tombol Cek diklik, langsung pindah ke formulir detail pengajuan
    navigate('/superadmin/detail-pengajuan');
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
    // NAVBAR HIJAU TUA
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
    // KONTEN UTAMA
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
      marginBottom: '20px',
      textAlign: 'center'
    },
    // BAR PENCARIAN HIJAU CERAH
    searchBar: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#40c000',
      color: '#ffffff',
      textAlign: 'center',
      padding: '10px 0',
      fontWeight: '600',
      fontSize: '14px',
      borderRadius: '4px',
      marginBottom: '24px'
    },
    cardWrapper: {
      width: '100%',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    // KARTU UTAMA NASABAH
    card: {
      width: '100%',
      backgroundColor: '#10943b', // Hijau latar kartu figma
      borderRadius: '16px',
      padding: '20px',
      boxSizing: 'border-box',
      color: '#ffffff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
    },
    cardTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '14px'
    },
    nominalRow: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '12px',
      marginBottom: '20px'
    },
    nominalBox: {
      flex: 1,
      backgroundColor: '#52c452', // Hijau kotak nominal
      padding: '12px 6px',
      borderRadius: '8px',
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: 'bold'
    },
    buttonRow: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '12px'
    },
    actionButton: {
      flex: 1,
      padding: '10px 0',
      border: 'none',
      borderRadius: '8px',
      fontWeight: 'bold',
      fontSize: '14px',
      cursor: 'pointer',
      textAlign: 'center'
    },
    // FOOTER HIJAU TUA LENGKAP
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
      {/* 1. NAVBAR ATAS */}
      <nav style={styles.navbar}>
        <div style={styles.logoText}>Amartha Empower</div>
        <button style={styles.navButton} onClick={() => navigate('/superadmin')}>Dashboard</button>
      </nav>

      {/* 2. KONTEN LIST PINJAMAN */}
      <main style={styles.mainContent}>
        <h1 style={styles.pageTitle}>List Pinjaman</h1>
        
        {/* Bar Pencarian */}
        <div style={styles.searchBar}>Pencarian</div>

        {/* Looping Kartu Nasabah */}
        <div style={styles.cardWrapper}>
          {dataNasabah.map((nasabah) => (
            <div key={nasabah.id} style={styles.card}>
              <div style={styles.cardTitle}>{nasabah.nama}</div>
              
              {/* Baris Nominal Angka */}
              <div style={styles.nominalRow}>
                <div style={styles.nominalBox}>{nasabah.nominal1}</div>
                <div style={styles.nominalBox}>{nasabah.nominal2}</div>
              </div>

              {/* Baris Tiga Tombol Aksi */}
              <div style={styles.buttonRow}>
                <button style={{ ...styles.actionButton, backgroundColor: '#80e000', color: '#042914' }}>
                  Setuju
                </button>
                <button 
                  onClick={() => handleCekClick(nasabah.id)}
                  style={{ ...styles.actionButton, backgroundColor: '#a0f000', color: '#042914' }}
                >
                  Cek
                </button>
                <button style={{ ...styles.actionButton, backgroundColor: '#80e000', color: '#042914' }}>
                  Tolak
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 3. FOOTER BAWAH */}
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

export default ListPinjamanSuperadmin;