import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoanApplicationAdmin = () => {
  const navigate = useNavigate();
  const [listPengajuan, setListPengajuan] = useState([]);

  useEffect(() => {
    const dataLokal = localStorage.getItem('listStatusDaftarAdmin');
    if (dataLokal) {
      setListPengajuan(JSON.parse(dataLokal));
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#fafafa", minHeight: "100vh", fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column" }}>
      
      {/* NAVBAR */}
      <div style={{ backgroundColor: "#023015", padding: "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ color: "#fff", margin: 0, fontSize: "16px", fontWeight: "bold" }}>Amartha Empower</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => navigate('/admin/dashboard')} style={{ padding: "8px 16px", backgroundColor: "#00cc44", color: "#fff", border: "none", borderRadius: "6px", fontSize: "12px", fontWeight: "bold" }}>Dashboard</button>
          <button style={{ padding: "8px 16px", backgroundColor: "#00cc44", color: "#fff", border: "none", borderRadius: "6px", fontSize: "12px", fontWeight: "bold" }}>Profile</button>
          <button style={{ padding: "8px 16px", backgroundColor: "#00cc44", color: "#fff", border: "none", borderRadius: "6px", fontSize: "12px", fontWeight: "bold" }}>Modul</button>
          <button style={{ padding: "8px 16px", backgroundColor: "#00cc44", color: "#fff", border: "none", borderRadius: "6px", fontSize: "12px", fontWeight: "bold" }}>Komunitas</button>
        </div>
      </div>

      <div style={{ flex: 1, padding: "50px 40px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
            <h2 style={{ color: "#023015", fontSize: "26px", fontWeight: "800", margin: 0 }}>Loan Application Admin</h2>
            <button onClick={() => navigate('/admin/dashboard')} style={{ padding: "10px 20px", backgroundColor: "#fff", border: "2px solid #023015", borderRadius: "10px", color: "#023015", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
              📋 Kembali ke Dashboard
            </button>
          </div>

          <div style={{ backgroundColor: "#fff", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ backgroundColor: "#023015" }}>
                  <th style={{ padding: "20px 16px", color: "#fff", fontSize: "13px", fontWeight: "800" }}>ID Pengajuan</th>
                  <th style={{ padding: "20px 16px", color: "#fff", fontSize: "13px", fontWeight: "800" }}>Nama Nasabah</th>
                  <th style={{ padding: "20px 16px", color: "#fff", fontSize: "13px", fontWeight: "800" }}>Nominal</th>
                  <th style={{ padding: "20px 16px", color: "#fff", fontSize: "13px", fontWeight: "800" }}>Tenor</th>
                  <th style={{ padding: "20px 16px", color: "#fff", fontSize: "13px", fontWeight: "800" }}>Status Tahapan</th>
                  <th style={{ padding: "20px 16px", color: "#fff", fontSize: "13px", fontWeight: "800", textAlign: "center" }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {listPengajuan.map((item) => (
                  <tr key={item.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "18px 16px", fontSize: "14px", color: "#64748b" }}>{item.id}</td>
                    <td style={{ padding: "18px 16px", fontSize: "14px", fontWeight: "700", color: "#1e293b" }}>{item.name}</td>
                    <td style={{ padding: "18px 16px", fontSize: "14px", fontWeight: "600" }}>Rp {item.amount.toLocaleString('id-ID')}</td>
                    <td style={{ padding: "18px 16px", fontSize: "14px", color: "#475569" }}>{item.tenor}</td>
                    <td style={{ padding: "18px 16px" }}>
                      <span style={{ 
                        padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "700",
                        backgroundColor: item.status.toLowerCase() === 'pending' ? '#f1f5f9' : '#e0f2fe',
                        color: item.status.toLowerCase() === 'pending' ? '#475569' : '#0369a1'
                      }}>
                        {item.status}
                      </span>
                    </td>
                    <td style={{ padding: "18px 16px", textAlign: "center" }}>
                      {item.status.toLowerCase() === 'pending' ? (
                        <button onClick={() => navigate('/admin/verification', { state: { loanData: item } })} style={{ padding: "8px 16px", backgroundColor: "#023015", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "700", fontSize: "12px", cursor: "pointer" }}>
                          🔍 Periksa Berkas
                        </button>
                      ) : (
                        <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "700" }}>Sudah Diproses</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div style={{ backgroundColor: "#023015", padding: "32px 40px", color: "#fff", fontSize: "13px" }}>
        <p style={{ margin: 0, textAlign: "center", color: "#64748b", fontSize: "11px" }}>© 2026 Amartha Empower Company. All Right Reserved</p>
      </div>

    </div>
  );
};

export default LoanApplicationAdmin;