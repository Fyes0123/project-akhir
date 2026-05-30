import React from 'react';
import { useNavigate } from 'react-router-dom';

function ListNasabahSuperadmin() {
  const navigate = useNavigate();

  // Data tiruan nasabah sesuai mockup figma kamu
  const dataNasabah = [
    { id: 1, nama: 'Sarah UMKM', statusTop: 'Aktif', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
    { id: 2, nama: 'Lara UMKM', statusTop: 'Aktif', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lara' },
    { id: 3, nama: 'Sinta UMKM', statusTop: 'Aktif', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sinta' },
    { id: 4, nama: 'Joni UMKM', statusTop: 'Aktif', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Joni' },
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
    cardWrapper: {
      width: '100%',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    card: {
      width: '100%',
      backgroundColor: '#10943b',
      borderRadius: '16px',
      padding: '16px',
      boxSizing: 'border-box',
      color: '#ffffff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
    },
    cardTopSection: {
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
      position: 'relative',
      marginBottom: '12px'
    },
    avatarBox: {
      width: '75px',
      height: '75px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    avatarImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    infoDetails: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    nameTag: {
      backgroundColor: '#ffffff',
      color: '#333333',
      padding: '4px 12px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 'bold',
      alignSelf: 'flex-start'
    },
    lineMock: {
      width: '100%',
      height: '2px',
      backgroundColor: '#0c6e2b',
      marginTop: '4px'
    },
    statusBadgeTop: {
      backgroundColor: '#80e000',
      color: '#042914',
      fontSize: '10px',
      fontWeight: 'bold',
      padding: '4px 16px',
      borderRadius: '12px',
      position: 'absolute',
      right: 0,
      top: 0
    },
    progressContainer: {
      width: '100%',
      backgroundColor: '#80e000',
      borderRadius: '4px',
      height: '22px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#042914',
      marginBottom: '16px',
      position: 'relative',
      overflow: 'hidden'
    },
    progressFill: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '75%',
      backgroundColor: '#a2f518',
      zIndex: 1
    },
    progressText: {
      zIndex: 2
    },
    buttonRow: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '12px'
    },
    statusButton: {
      padding: '6px 24px',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 'bold',
      fontSize: '12px',
      cursor: 'pointer'
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
        <h1 style={styles.pageTitle}>List Nasabah</h1>
        <div style={styles.searchBar}>Pencarian</div>

        <div style={styles.cardWrapper}>
          {dataNasabah.map((nasabah) => (
            <div key={nasabah.id} style={styles.card}>
              
              <div style={styles.cardTopSection}>
                <div style={styles.avatarBox}>
                  <img src={nasabah.avatar} alt="Avatar" style={styles.avatarImg} />
                </div>
                
                <div style={styles.infoDetails}>
                  <div style={styles.nameTag}>{nasabah.nama}</div>
                  <div style={styles.lineMock}></div>
                  <div style={styles.lineMock}></div>
                  <div style={styles.lineMock}></div>
                </div>

                <div style={styles.statusBadgeTop}>{nasabah.statusTop}</div>
              </div>

              <div style={styles.progressContainer}>
                <div style={styles.progressFill}></div>
                <span style={styles.progressText}>75%</span>
              </div>

              <div style={styles.buttonRow}>
                <button style={{ ...styles.statusButton, backgroundColor: '#80e000', color: '#042914' }}>
                  Aktif
                </button>
                <button style={{ ...styles.statusButton, backgroundColor: '#b80000', color: '#ffffff' }}>
                  Suspen
                </button>
              </div>

            </div>
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

export default ListNasabahSuperadmin;