import React from 'react';

function LoanCardAdmin({ data, onVerifyClick }) {
  const styles = {
    card: {
      width: '300px', // 👈 KUNCI: Diubah dari '100%' menjadi ukuran fix '300px' agar bisa berjejer
      backgroundColor: '#10943b',
      borderRadius: '16px',
      padding: '20px',
      boxSizing: 'border-box',
      color: '#ffffff',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between' // Menjaga posisi tombol verifikasi selalu seimbang di bawah
    },
    headerRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '12px'
    },
    borrowerName: {
      fontSize: '18px',
      fontWeight: 'bold',
      maxWidth: '75%'
    },
    statusBadge: {
      backgroundColor: '#ffda1a', // Kuning terang agar kontras di latar hijau
      color: '#042914',
      padding: '4px 10px',
      borderRadius: '20px',
      fontSize: '11px',
      fontWeight: 'bold'
    },
    amountBox: {
      backgroundColor: '#60d040', // Kotak nominal hijau stabilo
      color: '#ffffff',
      padding: '12px',
      borderRadius: '8px',
      textAlign: 'center',
      fontWeight: '800',
      fontSize: '20px',
      marginBottom: '16px'
    },
    detailsText: {
      fontSize: '14px',
      lineHeight: '1.5',
      marginBottom: '16px',
      opacity: 0.9
    },
    actionButton: {
      width: '100%',
      padding: '10px 0',
      backgroundColor: '#80e000', // Tombol hijau stabilo terang khas kelompokmu
      color: '#042914',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 'bold',
      fontSize: '14px',
      cursor: 'pointer',
      textAlign: 'center',
      transition: 'background 0.2s'
    }
  };

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(angka);
  };

  return (
    <div style={styles.card}>
      <div style={styles.headerRow}>
        <div style={styles.borrowerName}>{data.nama_nasabah}</div>
        <span style={styles.statusBadge}>{data.status}</span>
      </div>
      
      <div style={styles.amountBox}>
        {formatRupiah(data.jumlah_pinjaman)}
      </div>

      <div style={styles.detailsText}>
        <div><strong>Tujuan:</strong> {data.tujuan_pinjaman}</div>
        <div><strong>Tenor:</strong> {data.tenor} Bulan</div>
      </div>

      <button onClick={onVerifyClick} style={styles.actionButton}>
        Verifikasi Pengajuan
      </button>
    </div>
  );
}

export default LoanCardAdmin;