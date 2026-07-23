import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

function Navbar({ user }) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("Todo");
  const [search, setSearch] = useState("");

  const wrapperRef = useRef(null);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log({ search, category });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar__left">
        <h1 className="navbar__logo">Animanga</h1>
      </div>

      <div className="navbar__center">
        <div className={styles.search}>
          <select
            className={styles.category}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Todo</option>
            <option>Anime</option>
            <option>Manga</option>
            <option>Characters</option>
          </select>

          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.input}
            onKeyDown={handleSearch}
          />

          <button
            type="button"
            className={styles.searchButton}
            onClick={() => console.log({ search, category })}
            aria-label="Buscar"
          >
            🔍
          </button>
        </div>
      </div>

      <div className="navbar__right">
        {!user ? (
          <div className="flex gap-sm">
            <button className="btn btn-ghost">Login</button>
            <button className="btn btn-primary">Registro</button>
          </div>
        ) : (
          <div className={styles.userWrapper} ref={wrapperRef}>
            <button
              className={styles.userMenu}
              onClick={handleToggle}
              aria-expanded={open}
            >
              <span>{user.name}</span>
            </button>

            {open && (
              <div className={styles.dropdown}>
                <button>Perfil</button>
                <button>Cerrar sesion</button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
