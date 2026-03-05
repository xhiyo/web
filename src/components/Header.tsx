import { Menu, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import logo from "./Logo.jpeg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={logo} alt="Soto Cak Badim" className="h-16 w-16 rounded-[10px]" />
            <div>
              <h1 className="text-xl font-bold text-red-600">Cak Badim</h1>
              <p className="text-sm text-gray-600">Soto Lamongan</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition-colors">
              Beranda
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-red-600 transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection('tentang')} className="text-gray-700 hover:text-red-600 transition-colors">
              Tentang Kami
            </button>
            <button onClick={() => scrollToSection('kontak')} className="text-gray-700 hover:text-red-600 transition-colors">
              Kontak
            </button>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-red-600" />
              <span className="text-gray-700">0822-2140-6634</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Beranda
              </button>
              <button onClick={() => scrollToSection('menu')} className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Menu
              </button>
              <button onClick={() => scrollToSection('tentang')} className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Tentang Kami
              </button>
              <button onClick={() => scrollToSection('kontak')} className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Kontak
              </button>
              <div className="px-4 py-2 flex items-center space-x-2 text-sm text-gray-700">
                <Phone className="w-4 h-4 text-red-600" />
                <span>0822-2140-6634</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}