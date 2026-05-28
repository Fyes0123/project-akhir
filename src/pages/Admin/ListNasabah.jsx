import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { styles } from "../../styles/adminStyle";

function ListNasabah() {
  const data = [
    {
      nama: "Sarah UMKM",
      pinjaman: "2.000.000",
      tenor: "Tenor Pinjaman",
      progress: "75%",
    },

    {
      nama: "Joni UMKM",
      pinjaman: "2.000.000",
      tenor: "2.000.000",
      progress: "50%",
    },

    {
      nama: "Sinta UMKM",
      pinjaman: "2.000.000",
      tenor: "2.000.000",
      progress: "25%",
    },

    {
      nama: "Lara UMKM",
      pinjaman: "2.000.000",
      tenor: "2.000.000",
      progress: "0%",
    },
  ];

  return (
    <div>
      <Navbar />

      <div style={styles.page}>
        <h2 style={styles.title}>
          List Nasabah
        </h2>

        {data.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardTop}>
              <h4>{item.nama}</h4>

              <button style={styles.actionBtn}>
                Act
              </button>
            </div>

            <div style={styles.cardRow}>
              <div style={styles.moneyBox}>
                {item.pinjaman}
              </div>

              <div style={styles.moneyBox}>
                {item.tenor}
              </div>
            </div>

            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: item.progress,
                }}
              />
            </div>

            <p>{item.progress}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default ListNasabah;