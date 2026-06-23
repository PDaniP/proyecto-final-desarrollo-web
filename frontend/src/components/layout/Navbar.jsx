import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2 style={styles.logo}>Inicio</h2>
      </Link>

      <div style={styles.buttons}>
        <Link to="/login" style={styles.button}>
          Login
        </Link>

        <Link to="/registro" style={styles.button}>
          Registro
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#222",
  },
  logo: {
    color: "#fff",
  },
  buttons: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default Navbar;
