import { MapPin, Phone, Clock, Instagram, , Mail } from 'lucide-react';
import googleMapsImage from './googlemaps.jpg';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Lokasi',
    content: 'Jl. Jombang Raya, Pondok Kacang Timur'
  },
  {
    icon: Phone,
    title: 'Telepon',
    content: '0822-2140-6634'
  },
  {
    icon: Clock,
    title: 'Jam Buka',
    content: 'Setiap Hari: 07.00 - 18.00 WIB'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'cakbadim1@gmail.com'
  }
];

const socialMedia = [
  {
    icon: Instagram,
    name: 'Instagram',
    handle: '@sotocakbadim',
    url: 'https://instagram.com/sotocakbadim'
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-6 text-black-900">
          Hubungi Kami
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Kunjungi kami atau hubungi untuk informasi lebih lanjut
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informasi Kontak */}
          <div className="bg-white rounded-2xl shadow-xl p-10 transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-8">Informasi Kontak</h3>
            <div className="flex items-center mb-6">
              <span className="bg-red-100 text-red-600 rounded-full p-3 mr-4 flex items-center justify-center">
                {/* Location Pin Icon */}
                <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1 1 10 5a2.5 2.5 0 0 1 0 5.5z" fill="currentColor"/>
                </svg>
              </span>
              <div>
                <div className="font-semibold text-lg">Lokasi</div>
                <div className="text-gray-700 text-base">Jl. Jombang Raya, Pondok Kacang Timur</div>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <span className="bg-red-100 text-red-600 rounded-full p-3 mr-4 flex items-center justify-center">
                {/* Phone Icon */}
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
            19.79 19.79 0 0 1-8.63-3.07 
           19.5 19.5 0 0 1-6-6 
           19.79 19.79 0 0 1-3.07-8.67 
           A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 
           1.72 12.84 12.84 0 0 0 .7 2.81 
           2 2 0 0 1-.45 2.11L8.09 9.91 
           a16 16 0 0 0 6 6l1-1.27 
           a2 2 0 0 1 2.11-.45 
           12.84 12.84 0 0 0 2.81.7 
           2 2 0 0 1 1.99 2.03z"/>
</svg>
              </span>
              <div>
                <div className="font-semibold text-lg">Telepon</div>
                <div className="text-gray-700 text-base">0822-2140-6634</div>
              </div>
            </div>
<div className="flex items-center mb-6">
  <span className="bg-red-100 text-red-600 rounded-full p-3 mr-4 flex items-center justify-center">
    {/* Clock Icon */}
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <circle cx="12" cy="12" r="8"/>
  <path d="M12 8v4l2 2"/>
</svg>
  </span>
  <div>
    <div className="font-semibold text-lg">Jam Buka</div>
    <div className="text-gray-700 text-base">Setiap Hari: 07.00 - 18.00 WIB</div>
  </div>
</div>
            <div className="flex items-center">
              <span className="bg-red-100 text-red-600 rounded-full p-3 mr-4 flex items-center justify-center">
                {/* Email Icon */}
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <rect x="3" y="6" width="18" height="12" rx="2"/>
  <path d="M3 6l9 7 9-7"/>
</svg>
              </span>
              <div>
                <div className="font-semibold text-lg">Email</div>
                <div className="text-gray-700 text-base">cakbadim1@gmail.com</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid gap-3">
                {socialMedia.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-red-700 transition-colors hover:bg-red-100"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-red-600">
                        <Icon size={20} />
                      </span>
                      <div>
                        <div className="font-semibold leading-tight">{item.name}</div>
                        <div className="text-sm leading-tight">{item.handle}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Lokasi Kami */}
          <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={googleMapsImage}
              alt="Google Maps"
              className="absolute inset-0 w-full h-full object-cover opacity-25 scale-110"
            />
            <div className="relative z-10 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold mb-8">Lokasi Kami</h3>
            <span className="text-red-600 mb-4">
              {/* Map Pin Icon (large) */}
              <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1 1 10 5a2.5 2.5 0 0 1 0 5.5z" fill="currentColor"/>
                </svg>
            </span>
            <div className="font-semibold text-lg mb-2">Jl. Jombang Raya, Pondok Kacang Timur</div>
            <div className="text-gray-700 mb-6 text-base">Tangerang Selatan</div>
            <a
              href="https://share.google/fMIYPPiDvMyfBlylw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg mt-2 text-lg"
            >
              Buka di Google Maps
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}