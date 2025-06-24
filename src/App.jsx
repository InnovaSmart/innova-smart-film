export default function App() {
  return (
    <div className="container">
      <h1>Smart Films by Innova Smart</h1>
      <p>Tecnología de privacidad instantánea para espacios modernos. Instalación profesional en toda Puerto Rico.</p>
      <button>Solicita una cotización</button>
      <img src="/vite.svg" alt="Smart film activándose" />
      <h2>Privacidad con solo un toque</h2>
      <ul>
        <li>Transparente u opaco al instante</li>
        <li>Bloqueo de rayos UV y ahorro energético</li>
        <li>Ideal para hoteles, hospitales, oficinas y residencias</li>
        <li>Compatible con control remoto, sensor o domótica</li>
      </ul>
      <h2>¿Por qué elegir Innova Smart?</h2>
      <p>
        Somos una empresa puertorriqueña con más de 3 años de experiencia, especializada en luminarias y smart films.
        Seleccionamos cuidadosamente nuestros clientes para brindar soluciones exclusivas, inteligentes y personalizadas en toda la isla.
      </p>
      <footer>© {new Date().getFullYear()} Innova Smart LLC • Puerto Rico</footer>
    </div>
  );
}
