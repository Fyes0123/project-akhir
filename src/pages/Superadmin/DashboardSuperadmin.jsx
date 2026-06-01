import React from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardSuperadmin() {
  const navigate = useNavigate();
  
  const handleMenuClick = (menuName) => {
    if (menuName === 'Verifikasi Peminjaman') {
      navigate('/superadmin/list-pinjaman');
    } else if (menuName === 'Laporan Nasabah') {
    navigate('/superadmin/laporan');
    } else if (menuName === 'Nasabah') {
      navigate('/superadmin/list-nasabah');
    }
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
      padding: '40px 20px',
      boxSizing: 'border-box'
    },
    wrapper: {
      width: '100%',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    buttonBox: {
      width: '100%',
      height: '150px',
      backgroundColor: '#10823b',
      color: '#ffffff',
      fontWeight: '600',
      fontSize: '20px',
      padding: '24px',
      borderRadius: '4px',
      border: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      boxSizing: 'border-box',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
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

  return (
    <div style={styles.pageContainer}>
      <nav style={styles.navbar}>
        <div style={styles.logoText}>Amartha Empower</div>
        <button style={styles.navButton}>Dashboard</button>
      </nav>

      <main style={styles.mainContent}>
        <div style={styles.wrapper}>
          
          <button 
            onClick={() => handleMenuClick('Verifikasi Peminjaman')}
            style={styles.buttonBox}
          >
            Verifikasi Peminjaman
          </button>

          <button 
            onClick={() => handleMenuClick('Laporan Nasabah')} // 👈 Pastikan ada onClick ini
            style={styles.buttonBox}
          >
            Laporan Nasabah
          </button>

          <button 
            onClick={() => handleMenuClick('Nasabah')}
            style={styles.buttonBox}
          >
            Nasabah
          </button>

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

export default DashboardSuperadmin;