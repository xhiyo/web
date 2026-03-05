import logo from "./Logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Soto Cak Badim" className="h-16 w-16 rounded-[10px]" />
              <div>
                <h3 className="text-xl font-bold">Soto Cak Badim</h3>
                <p className="text-sm text-gray-400">Lamongan</p>
              </div>
            </div>
            <p className="text-gray-400">
              Soto Lamongan asli dengan resep turun-temurun. Nikmati kelezatan soto ayam dan soto daging khas Lamongan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#tentang" className="text-gray-400 hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#kontak" className="text-gray-400 hover:text-white transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Jam Operasional</h4>
            <div className="space-y-2 text-gray-400">
              <p>Senin - Minggu</p>
              <p className="text-white font-semibold">07.00 - 18.00 WIB</p>
              <p className="mt-4">Telepon:</p>
              <p className="text-white font-semibold">0822-2140-6634</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Soto Cak Badim. All rights reserved.
          </p>
          <p>
            Author : Fabian Ardana 
          </p>
        </div>
      </div>
    </footer>
  );
}