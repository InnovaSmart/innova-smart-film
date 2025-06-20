export default function SmartFilmPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Smart Films by Innova Smart</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Tecnología de privacidad instantánea para espacios modernos. Instalación profesional en toda Puerto Rico.
        </p>
        <button className="px-6 py-3 rounded-2xl text-lg shadow-md bg-blue-600 text-white">
          Solicita una cotización
        </button>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/smart-film-demo.gif"
          alt="Smart film activándose"
          className="rounded-2xl shadow-xl"
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Privacidad con solo un toque</h2>
          <ul className="space-y-2">
            {["Transparente u opaco al instante",
              "Bloqueo de rayos UV y ahorro energético",
              "Ideal para hoteles, hospitales, oficinas y residencias",
              "Compatible con control remoto, sensor o domótica"].map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-600">✔️</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">¿Por qué elegir Innova Smart?</h2>
        <p className="max-w-2xl mx-auto">
          Somos una empresa puertorriqueña con más de 3 años de experiencia, especializada en luminarias y smart films. Seleccionamos cuidadosamente nuestros clientes para brindar soluciones exclusivas, inteligentes y personalizadas en toda la isla.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Hoteles", icon: "🏨" },
          { title: "Oficinas", icon: "🏢" },
          { title: "Hospitales", icon: "🏥" },
          { title: "Residencias", icon: "🏠" },
          { title: "Salas de Conferencia", icon: "📽️" },
          { title: "Consultorios", icon: "🩺" }
        ].map((item, idx) => (
          <div key={idx} className="rounded-2xl shadow-md text-center py-6 bg-white">
            <div className="space-y-2">
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </section>

      <section className="text-center space-y-4 bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold">¿Listo para transformar tu espacio?</h2>
        <p className="max-w-xl mx-auto">
          Contáctanos hoy y recibe una demostración personalizada con la tecnología de smart film líder en Puerto Rico.
        </p>
        <button className="px-6 py-3 rounded-2xl text-lg shadow-md bg-blue-600 text-white">
          Contáctanos
        </button>
      </section>
    </div>
  );
}

