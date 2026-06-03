import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PersetujuanSuperadmin = () => {
  const navigate = useNavigate();

  // fallback only if NOTHING exists in storage
  const dataMentahAwal = [];

  const [dataPengajuan, setDataPengajuan] = useState([]);

  const [selectedId, setSelectedId] = useState(null);

  // LOAD DATA
  useEffect(() => {
    const stored = localStorage.getItem('listPengajuanSuperadmin');

    let parsedData = stored ? JSON.parse(stored) : dataMentahAwal;

    // safety normalization (avoid broken fields)
    parsedData = parsedData.map(item => ({
      id: item.id ?? `fallback-${Math.random()}`,
      nama: item.nama ?? "Unknown",
      nominal: item.nominal ?? "0",
      tenor: item.tenor ?? "-",
      keperluan: item.keperluan ?? "-",
      verifikator: item.verifikator ?? "-",
      tglVerifikasi: item.tglVerifikasi ?? "-",
      statusFinal: item.statusFinal ?? "PENDING"
    }));

    setDataPengajuan(parsedData);

    if (parsedData.length > 0) {
      setSelectedId(parsedData[0].id);
    }
  }, []);

  const selectedLaporan =
    dataPengajuan.find(item => item.id === selectedId) || null;

  // ACTION HANDLER
  const handleAksi = (tipe, id) => {
    const updatedData = dataPengajuan.map(item => {
      if (item.id !== id) return item;

      return {
        ...item,
        statusFinal: tipe === 'CAIR' ? 'DISETUJUI' : 'DITOLAK'
      };
    });

    setDataPengajuan(updatedData);
    localStorage.setItem('listPengajuanSuperadmin', JSON.stringify(updatedData));

    // sync back to admin
    const listDaftarAdmin =
      JSON.parse(localStorage.getItem('listStatusDaftarAdmin')) || [];

    const updatedListAdmin = listDaftarAdmin.map(adminItem => {
      if (adminItem.name === selectedLaporan?.nama) {
        return {
          ...adminItem,
          status: tipe === 'CAIR'
            ? 'Disetujui Superadmin'
            : 'Ditolak Superadmin'
        };
      }
      return adminItem;
    });

    localStorage.setItem('listStatusDaftarAdmin', JSON.stringify(updatedListAdmin));

    // CAIR FLOW
    if (tipe === 'CAIR') {
      const nasabahAktif =
        JSON.parse(localStorage.getItem('listNasabahAktif')) || [];

      const cleanName = selectedLaporan.nama
        .replace("Ibu ", "")
        .replace(" - ", " ");

      const newNasabah = {
        idContract: `ID-AMR-${Math.floor(1000 + Math.random() * 9000)}`,
        nama: cleanName,
        totalDana: `Rp ${selectedLaporan.nominal}`,
        sisaTagihan: `Rp ${selectedLaporan.nominal}`,
        tenor: selectedLaporan.tenor,
        progresPelunasan: 0
      };

      nasabahAktif.push(newNasabah);
      localStorage.setItem('listNasabahAktif', JSON.stringify(nasabahAktif));

      const currentApproved =
        parseInt(localStorage.getItem('approvedCount') || '25');

      localStorage.setItem(
        'approvedCount',
        String(currentApproved + 1)
      );

      alert(`Dana berhasil dicairkan untuk ${selectedLaporan.nama}`);
    } else {
      alert(`Pengajuan ${selectedLaporan.nama} ditolak.`);
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Inter" }}>

      {/* LEFT LIST */}
      <div style={{ width: "360px", overflowY: "auto", padding: 20, background: "#fff" }}>
        <h4>ANTREAN</h4>

        {dataPengajuan.length === 0 && (
          <p style={{ color: "#64748b" }}>Tidak ada data masuk.</p>
        )}

        {dataPengajuan.map(item => (
          <div
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            style={{
              padding: 12,
              marginBottom: 10,
              border: selectedId === item.id ? "2px solid #034425" : "1px solid #e2e8f0",
              borderRadius: 10,
              cursor: "pointer"
            }}
          >
            <div style={{ fontWeight: 700 }}>{item.nama}</div>
            <div>Rp {item.nominal}</div>
            <div style={{ fontSize: 12, color: "#64748b" }}>
              {item.statusFinal}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT DETAIL */}
      <div style={{ flex: 1, padding: 30 }}>

        {!selectedLaporan ? (
          <p>Tidak ada data dipilih</p>
        ) : (
          <>
            <h2>{selectedLaporan.nama}</h2>
            <p>Rp {selectedLaporan.nominal}</p>
            <p>{selectedLaporan.keperluan}</p>

            {selectedLaporan.statusFinal === 'PENDING' ? (
              <div style={{ display: "flex", gap: 12 }}>
                <button
                  onClick={() => handleAksi('TOLAK', selectedLaporan.id)}
                >
                  Tolak
                </button>

                <button
                  onClick={() => handleAksi('CAIR', selectedLaporan.id)}
                >
                  Setujui
                </button>
              </div>
            ) : (
              <div>
                Status Final: {selectedLaporan.statusFinal}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PersetujuanSuperadmin;