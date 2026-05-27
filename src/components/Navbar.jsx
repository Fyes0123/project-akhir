import { styles } from "../styles/adminStyle";

function Navbar() {
  return (
    <div style={styles.navbar}>
      <h3>Amartha Empower</h3>

      <div>
        <button style={styles.navButton}>
          Inbox
        </button>

        <button style={styles.navButton}>
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default Navbar;