import { useState, type FormEvent, type MouseEvent } from "react";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/projects.css";
import "./styles/contact.css";
import "./styles/responsive.css";
import pythonLogo from "../../assets/letter.png";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [areProjectsOpen, setAreProjectsOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    closeMenu();
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage(
      "Formularz nie jest gotowy. Kliknij email obok.",
    );
  };

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
            href="https://www.linkedin.com/in/kamil-siwek-ba611b42a/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            LinkedIn
          </a>

          <a href="#kontakt" onClick={scrollToContact}>Kontakt</a>

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

      <section id="kontakt" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-intro">
          <span className="section-label">NAPISZ DO MNIE</span>
          <h2 id="contact-title">Porozmawiajmy<br />o Twoim pomyśle.</h2>
          <p>
            Masz pytanie, propozycję współpracy albo ciekawy projekt?
            Wypełnij formularz.
          </p>
          <a className="contact-email" href="mailto:lxqd@wp.pl">lxqd@wp.pl</a>
        </div>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Imię</label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="Twoje imię" required />
            </div>

            <div className="form-field">
              <label htmlFor="email">Adres e-mail</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="ty@example.com" required />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="subject">Temat</label>
            <input id="subject" name="subject" type="text" placeholder="W czym mogę pomóc?" required />
          </div>

          <div className="form-field">
            <label htmlFor="message">Wiadomość</label>
            <textarea id="message" name="message" rows={6} placeholder="Opowiedz krótko o swoim pomyśle..." required />
          </div>

          <button className="contact-submit" type="submit">
            <span>WYŚLIJ WIADOMOŚĆ</span>
            <span aria-hidden="true">↗</span>
          </button>

          <p className="form-status" role="status" aria-live="polite">
            {formMessage}
          </p>
        </form>
      </section>
      
    </main>
  );
}

export default Home;
