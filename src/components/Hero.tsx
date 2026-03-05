import logo from "./Gambar Soto.jpeg";

export function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
             src={logo}
             alt="Soto"
             className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Soto Cak Badim
        </h2>
        <p className="text-xl md:text-3xl mb-4 drop-shadow-md">
          Soto Lamongan Asli & Autentik
        </p>
        <p className="text-lg md:text-xl mb-8 drop-shadow-md max-w-2xl mx-auto">
          Nikmati kelezatan soto ayam dan soto daging dengan cita rasa khas Lamongan yang menggugah selera
        </p>
        <button
          onClick={scrollToMenu}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl"
        >
          Lihat Menu Kami
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}