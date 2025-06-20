import "./index.css";

export default function SmartFilmPage() {
  const features = [
    "Transparente u opaco al instante",
    "Bloqueo de rayos UV y ahorro energético",
    "Ideal para hoteles, hospitales, oficinas y residencias",
    "Compatible con control remoto, sensor o domótica"
  ];

  const sectors = [
    "Hoteles",
    "Oficinas",
    "Hospitales",
    "Residencias",
    "Salas de Conferencia",
    "Consultorios"
  ];

  return (
    <div className="site-wrapper">
      <header className="hero">
        <h1>Smart Films by Innova Smart</h1>
        <p>
          Tecnología de privacidad instantánea para espacios modernos. Instalación profesional en toda Puerto Rico.
        </p>
        <button className="cta-button">Solicita una cotización</button>
      </header>

      <section className="features">
        <div className="image-block">
          <img src="/smart-film-demo.gif" alt="Smart film activándose" />
        </div>
        <div className="feature-list">
          <h2>Privacidad con solo un toque</h2>
          <ul>
            {features.map((text, idx) => (
              <li key={idx}>✔️ {text}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about">
        <h2>¿Por qué elegir Innova Smart?</h2>
        <p>
          Somos una empresa puertorriqueña con más de 3 años de experiencia, especializada en luminarias y smart films. Seleccionamos cuidadosamente nuestros clientes para brindar soluciones exclusivas, inteligentes y personalizadas en toda la isla.
        </p>
      </section>

      <section className="sectors">
        {sectors.map((title, idx) => (
          <div key={idx} className="sector-card">
            <h3>{title}</h3>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Innova Smart LLC • Puerto Rico</p>
      </footer>
    </div>
  );
}
