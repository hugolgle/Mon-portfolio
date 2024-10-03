import { useEffect, useState } from "react";
import "./header.scss";
import { Outlet } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [clickHamburger, setClickHamburger] = useState(false);

  const handleOpenHamburger = () => {
    setClickHamburger(true);
  };

  const handleCloseHamburger = () => {
    setClickHamburger(false);
  };

  return (
    <>
      <header>
        <a href="/" className="logo">
          Hugo
        </a>
        <div className={`nav ${clickHamburger ? "open" : ""}`}>
          <a href="/" className="logoResp">
            Hugo
          </a>
          <a href="#home" onClick={handleCloseHamburger}>
            Accueil
          </a>
          <a href="#about" onClick={handleCloseHamburger}>
            À propos de moi
          </a>
          <a href="#project" onClick={handleCloseHamburger}>
            Mes projets
          </a>
          <a href="#xpPro" onClick={handleCloseHamburger}>
            Expériences professionelles
          </a>
          <a href="#contact" onClick={handleCloseHamburger}>
            Contact
          </a>
        </div>
        <a href="./images/CV.pdf" target="_blank" className="linkCv">
          Voir mon CV
        </a>
        <button
          onClick={clickHamburger ? handleCloseHamburger : handleOpenHamburger}
          className={`hamburger ${clickHamburger ? "open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <div className="container my-4">
        <Outlet />
      </div>
    </>
  );
}
