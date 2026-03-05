import logo from "./Foto-Soto-Buka-bersama.jpeg";
import logo1 from "./Logo.jpeg"
import { Award, Users, Clock, Heart } from 'lucide-react';


const features = [
  {
    icon: Award,
    title: 'Resep Autentik',
    description: 'Resep turun-temurun langsung dari Lamongan dengan bumbu rahasia yang khas'
  },
  {
    icon: Users,
    title: 'Dipercaya Ribuan Pelanggan',
    description: 'Telah melayani ribuan pelanggan dengan kepuasan tinggi'
  },
  {
    icon: Clock,
    title: 'Buka Setiap Hari',
    description: 'Siap melayani Anda setiap hari dengan jam operasional yang fleksibel'
  },
  {
    icon: Heart,
    title: 'Dibuat dengan Cinta',
    description: 'Setiap mangkuk soto dibuat dengan perhatian dan dedikasi penuh'
  }
];

export function AboutSection() {
  return (
    <section id="tentang" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tentang Kami
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                  src={logo}
                    alt="Foto Soto"
                 className="w-full h-full object-cover"
                />
            </div>
            {/* Logo Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <img src={logo1} alt="Logo Cak Badim" className="w-24 h-24 rounded-[10px]" />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Soto Lamongan Asli Sejak Dulu
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <span className="font-semibold text-red-600">Soto Cak Badim</span> adalah warisan kuliner khas Lamongan yang telah dipercaya oleh masyarakat. Kami menyajikan soto dengan resep tradisional yang autentik, menggunakan bahan-bahan pilihan dan bumbu berkualitas tinggi.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Dengan dua pilihan menu utama - Soto Ayam dan Soto Daging - kami berkomitmen untuk memberikan pengalaman kuliner yang tak terlupakan. Setiap mangkuk soto kami dibuat dengan penuh dedikasi dan cinta, menjaga keaslian rasa Lamongan yang legendaris.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Kunjungi kami dan rasakan kehangatan serta kelezatan soto Lamongan yang sesungguhnya!
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}