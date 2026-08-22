import { useState } from "react";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/projects.css";
import "./styles/responsive.css";
import pythonLogo from "../../assets/letter.png";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [areProjectsOpen, setAreProjectsOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="app">

      {/* NAVBAR */}

      <header className="navbar">

        <div className="logo">
          <img src={pythonLogo} alt="Python" />
        </div>

        <nav
          id="main-navigation"
          className={`nav-links ${isMenuOpen ? "nav-links--open" : ""}`}
          aria-label="Główna nawigacja"
        >
          <a
            href="https://github.com/siwyy1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            GitHub
          </a>
          <a
            href="https://www.kaggle.com/siwekk"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Kaggle
          </a>          

          <a
            href="https://huggingface.co/Siwy1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Hugging Face
          </a>

          <a
            href="https://www.linkedin.com/in/kamil-siwek-ba611b42a/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            LinkedIn
          </a>

          <a href="mailto:lxqd@wp.pl" onClick={closeMenu}>Email</a>

        </nav>

        <button
          className={`menu-toggle ${isMenuOpen ? "menu-toggle--open" : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>

      {/* HERO */}

      <section className="hero">

        <div className="overlay"></div>

        <div className="hero-content">

          <h1>Siwy</h1>

          <span className="hero-subtitle">
            PASJONAT IT
          </span>

          <p>

            Interesuje mnie rola
            <strong> ML Engineer </strong>
            oraz tworzenie modeli sztucznej inteligencji.

            <br />

            Uwielbiam odkrywać dane,
            budować rozwiązania
            i automatyzować procesy.

            <br />

            Nie ograniczam się do jednej dziedziny —
            stale eksploruję nowe technologie
            i rozwijam się w różnych niszach IT.

          </p>

          <div className="projects-dropdown">
            <button
              className="primary projects-toggle"
              type="button"
              aria-expanded={areProjectsOpen}
              aria-controls="projects-list"
              onClick={() => setAreProjectsOpen((isOpen) => !isOpen)}
            >
              <span>ZOBACZ PROJEKTY</span>
              <span
                className={`projects-arrow ${areProjectsOpen ? "projects-arrow--open" : ""}`}
                aria-hidden="true"
              >
                ↓
              </span>
            </button>

            <div
              id="projects-list"
              className={`projects-list ${areProjectsOpen ? "projects-list--open" : ""}`}
            >
              <p>Lista projektów pojawi się wkrótce.</p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;
