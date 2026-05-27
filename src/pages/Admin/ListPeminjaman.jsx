import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { styles } from "../../styles/adminStyle";

function ListPinjaman() {
  const navigate = useNavigate();

  const data = [
    {
      nama: "Sarah UMKM",
      pinjaman: "2.000.000",
      tenor: "2.000.000",
    },

    {
      nama: "Joni UMKM",
      pinjaman: "2.000.000",
      tenor: "2.000.000",
    },

    {
      nama: "Sinta UMKM",
      pinjaman: "2.000.000",
      tenor: "2.000.000",
    },
  ];

  return (
    <div>
      <Navbar />

      <div style={styles.page}>
        <h2 style={styles.title}>
          List Pinjaman
        </h2>

        {data.map((item, index) => (
          <div key={index} style={styles.card}>
            <h4>{item.nama}</h4>

            <div style={styles.cardRow}>
              <div style={styles.moneyBox}>
                {item.pinjaman}
              </div>

              <div style={styles.moneyBox}>
                {item.tenor}
              </div>
            </div>

            <div style={styles.buttonRow}>
              <button style={styles.actionBtn}>
                Setuju
              </button>

              <button
                style={styles.actionBtn}
                onClick={() =>
                  navigate("/admin/detail")
                }
              >
                Cek
              </button>

              <button style={styles.actionBtn}>
                Pending
              </button>

              <button style={styles.actionBtn}>
                Tolak
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default ListPinjaman;