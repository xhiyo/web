import  { useState } from "react";
import { Check } from "lucide-react";
import daftarMenuImg from './Daftar Menu.jpg';
import sotoDagingImg from './Soto Daging.jpeg';
import sotoAyamImg from './Soto Ayam.jpeg';

export function MenuSection() {
  const [overlayImg, setOverlayImg] = useState<string | null>(null);
  const [overlayTitle, setOverlayTitle] = useState<string | null>(null);

  // Example menuItems array
  const menuItems = [
    {
      id: 1,
      name: "Soto Ayam",
      image: sotoAyamImg, // Use the imported local image
      description: "Soto ayam Lamongan dengan kuah kuning khas, dilengkapi dengan ayam suwir, toge, kol, seledri, dan bawang goreng. Disajikan dengan sambal, kecap, dan jeruk nipis.",
      price: "Rp 15.000",
      features: ["Ayam Pilihan", "Kuah Segar", "Bumbu Tradisional", "Porsi Besar"]
    },
    {
      id: 2,
      name: "Soto Daging",
      image: sotoDagingImg, // Use the imported local image
      description: "Soto daging sapi Lamongan dengan daging empuk dan kuah kuning yang gurih. Dilengkapi dengan isian lengkap seperti tauge, kol, seledri, dan bawang goreng renyah.",
      price: "Rp 17.000",
      features: ["Daging Empuk", "Kuah Gurih", "Resep Turun-Temurun", "Halal & Higienis"]
    }
  ];

  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center cursor-pointer"
              onClick={() => {
                setOverlayImg(item.image);
                setOverlayTitle(item.name);
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover rounded-[20px] overflow-hidden mb-4"
                style={{ maxWidth: 400 }}
              />
              <h3 className="text-2xl font-bold text-center mb-2 text-red-700">{item.name}</h3>
              <p className="text-gray-600 text-center mb-2">{item.description}</p>
              <p className="text-xl font-bold text-red-600 text-center mb-4">{item.price}</p>
              <ul className="flex flex-wrap justify-center gap-2 mb-2">
                {item.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                  >
                    <span className="mr-1"><Check size={16} /></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Daftar Menu Photo Box */}
        <div
          className="md:col-span-2 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl mb-12 max-w-4xl mx-auto cursor-pointer"
          onClick={() => {
            setOverlayImg(daftarMenuImg);
            setOverlayTitle("Daftar Menu");
          }}
        >
          <h3 className="text-3xl font-bold mb-6 text-red-600">Daftar Menu</h3>
          <img
            src={daftarMenuImg}
            alt="Daftar Menu"
            className="rounded-lg shadow w-full h-auto object-contain"
            style={{ maxHeight: 600 }}
          />
        </div>
      </div>
      {/* Overlay Modal */}
      {overlayImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setOverlayImg(null)}
        >
          <div
            className="bg-white rounded-xl p-6 shadow-2xl max-w-2xl w-full flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 text-red-700">{overlayTitle}</h3>
            <img
              src={overlayImg}
              alt={overlayTitle ?? ""}
              className="rounded-lg shadow w-full h-auto object-cover"
              style={{ maxHeight: '80vh' }}
            />
            <button
              className="mt-6 px-6 py-2 bg-red-600 text-white rounded font-bold hover:bg-red-700"
              onClick={() => setOverlayImg(null)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}