import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

const InboxNasabah = () => {
  const authContext = useAuth ? useAuth() : null;
  const user = authContext?.user;
  
  const [pesanList, setPesanList] = useState([]);
  const [namaUserLogin, setNamaUserLogin] = useState('Admin');

  useEffect(() => {
    // 1. Tentukan siapa yang login berdasarkan auth context
    let userAktif = user?.full_name || 'Admin';

    // 2. AMBIL DATA DARI LOCALSTORAGE
    const listDaftarAdmin = JSON.parse(localStorage.getItem('listStatusDaftarAdmin')) || [];
    const semuaPesan = JSON.parse(localStorage.getItem('inboxNasabah')) || [];

    // 3. OTOMATISASI PINTAR UNTUK DEMO: Jika akunnya 'Admin', mari cari nasabah terbaru
    if (userAktif.trim().toLowerCase() === 'admin') {
      if (semuaPesan.length > 0) {
        userAktif = semuaPesan[0].namaNasabah;
      } else {
        const paraNasabahPerbaikan = listDaftarAdmin.filter(item => item.status === 'Perbaikan');
        if (paraNasabahPerbaikan.length > 0) {
          userAktif = paraNasabahPerbaikan[paraNasabahPerbaikan.length - 1].name;
        }
      }
    }

    setNamaUserLogin(userAktif);

    // 4. Filter pesan berdasarkan userAktif yang sudah dinamis
    const pesanSaya = semuaPesan.filter(pesan => {
      if (!pesan.namaNasabah) return false;
      return pesan.namaNasabah.trim().toLowerCase() === userAktif.trim().toLowerCase();
    });
    
    setPesanList(pesanSaya);
  }, [user]);

  return (
    <div style={{ padding: '40px', fontFamily: "'Inter', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <h2 style={{ color: '#023015', fontWeight: '800', marginBottom: '6px' }}>📥 Kotak Masuk Notifikasi</h2>
        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '30px' }}>
          Halo <strong>{namaUserLogin}</strong>, berikut adalah pemberitahuan resmi mengenai pengajuan pinjaman Anda.
        </p>

        {pesanList.length === 0 ? (
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '16px', textAlign: 'center', border: '1px solid #e2e8f0', color: '#94a3b8' }}>
            📭 Tidak ada pesan atau feedback untuk akun "{namaUserLogin}" saat ini.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {pesanList.map((pesan) => {
              // LOGIKA WARNA DINAMIS BERDASARKAN TIPE NOTIFIKASI SUPERADMIN / ADMIN
              const tipePesan = pesan.tipe || "Perbaikan";
              const isCair = tipePesan === "Pencairan Dana";
              const isTolak = tipePesan === "Penolakan Berkas";

              // Konfigurasi style warna box penampung pesan
              const badgeBg = isCair ? '#e8fcf0' : isTolak ? '#fee2e2' : '#ffe4e6';
              const badgeText = isCair ? '#023015' : isTolak ? '#991b1b' : '#e11d48';
              const boxBg = isCair ? '#f0fdf4' : isTolak ? '#fff5f5' : '#fff5f5';
              const borderLeftColor = isCair ? '#00cc44' : isTolak ? '#ef4444' : '#ef4444';

              return (
                <div key={pesan.idPesan} style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ padding: '4px 12px', backgroundColor: badgeBg, color: badgeText, borderRadius: '20px', fontSize: '11px', fontWeight: '700' }}>
                      {tipePesan}
                    </span>
                    <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '500' }}>{pesan.tanggal}</span>
                  </div>

                  <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>{pesan.judul}</h4>
                  <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#64748b', fontWeight: '600' }}>ID Referensi: {pesan.loanId}</p>
                  
                  {/* TAMPILAN KOTAK ISI PESAN SEKARANG WARNANYA DISESUAIKAN DENGAN KEPUTUSAN STATUS */}
                  <div style={{ backgroundColor: boxBg, borderLeft: `4px solid ${borderLeftColor}`, padding: '16px', borderRadius: '0 12px 12px 0', color: '#475569', fontSize: '14px', lineHeight: '1.6', fontWeight: '500' }}>
                    <strong>Pemberitahuan Sistem:</strong>
                    <p style={{ margin: '8px 0 0 0', fontStyle: 'italic', color: '#1e293b' }}>"{pesan.isiPesan}"</p>
                  </div>

                  <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px dashed #e2e8f0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '12px' }}>🔒</span>
                    <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '600', fontStyle: 'italic' }}>
                      Pesan ini dikirim otomatis oleh sistem verifikasi. Hubungi admin lapangan jika Anda memerlukan bantuan informasi kelanjutan berkas fisik.
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};

export default InboxNasabah;