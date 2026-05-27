import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { styles } from "../../styles/adminStyle";

function LoanApplication() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div style={styles.page}>
        <h2 style={styles.title}>
          Loan Application
        </h2>

        <div style={styles.formContainer}>
          <input
            type="text"
            placeholder="Full Name"
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Phone Number"
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Address"
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Average Monthly Income"
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Average Monthly Expenses"
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Loan Amount Required"
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Preferred Repayment Period"
            style={styles.input}
          />

          <button
            style={styles.backButton}
            onClick={() =>
              navigate("/admin/pinjaman")
            }
          >
            Go Back
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LoanApplication;