import "./App.css";

function App() {
  return (
    <main className="app">

      {/* NAVBAR */}

      <header className="navbar">

        <div className="logo">
          AI/ML
        </div>

        <nav className="nav-links">

          <a href="#">O mnie</a>

          <a href="#">Umiejętności</a>

          <a href="#">Projekty</a>

          <a href="#">Technologie</a>

          <a href="#">Kontakt</a>

        </nav>

        <div className="socials">

          <a
            href="https://github.com/siwyy1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="#">LinkedIn</a>

          <a href="mailto:lxqd@wp.pl">Email</a>

        </div>

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
            <strong> Data Scientist </strong>
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

          <div className="hero-buttons">
            
            <button className="primary">
              ZOBACZ PROJEKTY
            </button>

            <button className="secondary">
              SKONTAKTUJ SIĘ
            </button>

          </div>

        </div>

      </section>
      
    </main>
  );
}

export default App;