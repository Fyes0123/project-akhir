import React from 'react';

// Kita menggunakan { data, onDetailClick } sebagai "Props" (pintu masuk data dari luar)
function LoanCard({ data, onDetailClick }) {
  const styles = {
    card: {
      width: '100%',
      backgroundColor: '#10943b', // Warna hijau tua sesuai mockup admin kamu
      borderRadius: '16px',
      padding: '16px',
      boxSizing: 'border-box',
      color: '#ffffff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      marginBottom: '20px'
    },
    title: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '12px'
    },
    amountRow: {
      display: 'flex',
      gap: '16px',
      marginBottom: '16px'
    },
    amountBox: {
      flex: 1,
      backgroundColor: '#60d040',
      color: '#ffffff',
      padding: '12px',
      borderRadius: '8px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '18px'
    },
    buttonRow: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '10px'
    },
    actionButton: {
      flex: 1,
      padding: '8px 0',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 'bold',
      fontSize: '12px',
      cursor: 'pointer',
      textAlign: 'center'
    }
  };

  // Fungsi pembantu untuk memformat angka biasa menjadi Rupiah (Rp)
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(angka);
  };

  return (
    <div style={styles.card}>
      {/* Menampilkan nama dinamis dari data yang diinput */}
      <div style={styles.title}>{data.nama_lengkap || data.nama}</div>
      
      <div style={styles.amountRow}>
        <div style={styles.amountBox}>
          {formatRupiah(data.jumlah_pinjaman || 2000000)}
        </div>
        <div style={styles.amountBox}>
          {formatRupiah(data.jumlah_pinjaman || 2000000)}
        </div>
      </div>

      <div style={styles.buttonRow}>
        <button style={{ ...styles.actionButton, backgroundColor: '#80e000', color: '#042914' }}>
          Setuju
        </button>
        
        {/* Tombol Cek untuk mengarah ke halaman detail pengajuan */}
        <button 
          onClick={onDetailClick} 
          style={{ ...styles.actionButton, backgroundColor: '#80e000', color: '#042914' }}
        >
          Cek
        </button>
        
        <button style={{ ...styles.actionButton, backgroundColor: '#b80000', color: '#ffffff' }}>
          Tolak
        </button>
      </div>
    </div>
  );
}

export default LoanCard;