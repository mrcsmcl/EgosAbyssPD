import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Projeto', href: '#projeto' },
    { label: 'Gameplay', href: '#gameplay' },
    { label: 'Mundo', href: '#mundo' },
    { label: 'Salas', href: '#salas' },
    { label: 'Sistema', href: '#sistema' },
    { label: 'Roadmap', href: '#roadmap' },    
    { label: 'Orçamento', href: '#orcamento' },
    { label: 'Impacto', href: '#impacto' },
    { label: 'Equipe', href: '#equipe' },    
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-red/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="font-display text-xl md:text-2xl font-bold text-white hover:text-red hover:scale-105 transition-all"
            >
              EGO'S <span className="text-red">ABYSS</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {isHomePage && navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 py-2 text-sm text-grey hover:text-white hover:bg-red/10 rounded transition-all"
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/contato"
                className="px-3 py-2 text-sm text-grey hover:text-white hover:bg-red/10 rounded transition-all"
              >
                Contato
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection('#orcamento')}
                className="btn-primary text-sm hover:shadow-lg hover:shadow-red/30"
              >
                INVISTA
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 hover:bg-red/10 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {isHomePage && navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`text-xl text-grey hover:text-white transition-all hover:scale-110 ${
                isMobileMenuOpen ? 'animate-slide-up' : ''
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-xl text-grey hover:text-white transition-all hover:scale-110 ${
              isMobileMenuOpen ? 'animate-slide-up' : ''
            }`}
            style={{ animationDelay: `${navItems.length * 50}ms` }}
          >
            Contato
          </Link>
          {isHomePage && (
            <button
              onClick={() => scrollToSection('#orcamento')}
              className="btn-primary mt-4 animate-slide-up"
              style={{ animationDelay: '500ms' }}
            >
              INVISTA
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
