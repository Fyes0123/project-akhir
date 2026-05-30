import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoanCard from '../../components/LoanCard';

function ListPinjamanSuperadmin() {
  const navigate = useNavigate();

  // 2. Data tiruan pinjaman (Simulasi data hasil tarikan input applyloan backend)
  const daftarPengajuanPinjaman = [
    { id: 1, nama_lengkap: 'Sarah UMKM', jumlah_pinjaman: 2000000 },
    { id: 2, nama_lengkap: 'Joni UMKM', jumlah_pinjaman: 2000000 },
    { id: 3, nama_lengkap: 'Sinta UMKM', jumlah_pinjaman: 2000000 },
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
    listContainer: {
      width: '100%',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column'
    },
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
      <nav style={styles.navbar}>
        <div style={styles.logoText}>Amartha Empower</div>
        <button style={styles.navButton} onClick={() => navigate('/superadmin')}>Dashboard</button>
      </nav>

      <main style={styles.mainContent}>
        <h1 style={styles.pageTitle}>List Pinjaman</h1>
        <div style={styles.searchBar}>Pencarian</div>

        <div style={styles.listContainer}>
          {/* 3. LOOPING & PANGGIL KOMPONEN KARTU TERPISAH DI SINI */}
          {daftarPengajuanPinjaman.map((item) => (
            <LoanCard
              key={item.id} 
              data={item} // Mengirim data pinjaman lewat props bernama 'data'
              onDetailClick={() => navigate('/superadmin/detail-pengajuan')} // Mengirim fungsi klik navigasi
            />
          ))}
        </div>
      </main>

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