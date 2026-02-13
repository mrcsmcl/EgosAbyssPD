import { useEffect, useRef, useState } from 'react';
import { Gamepad2, Monitor, Mail } from 'lucide-react';
import { FaDiscord, FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const gameLinks = [
    { label: 'Sobre', href: '#projeto' },
    { label: 'História', href: '#mundo' },
    { label: 'Gameplay', href: '#gameplay' },
    { label: 'Galeria', href: '#salas' },
  ];

  const communityLinks = [
    { label: 'Discord', href: '#' },
    { label: 'Fórum', href: '#' },
    { label: 'Wiki', href: '#' },
    { label: 'Suporte', href: '#' },
  ];

  const legalLinks = [
    { label: 'Privacidade', href: '#' },
    { label: 'Termos', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'Contato', href: '/contato' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      ref={sectionRef}
      className="relative bg-black border-t border-red/20 overflow-hidden"
    >
      {/* CTA Section */}
      <div className="relative py-16 md:py-34 bg-red-dark/30">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, transparent 48%, white 49%, white 51%, transparent 52%)`,
              backgroundSize: '30px 30px',
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Adentre o <span className="text-red">Abismo</span>
            </h2>
            <p className="text-lg text-grey mb-8">
              Em breve disponível. Adicione à sua lista de desejos.
            </p>

            {/* Platform Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="flex items-center gap-3 px-6 py-3 bg-red/20 border border-red/50 rounded-lg hover:bg-red/30 hover:scale-105 transition-all group">
                <Gamepad2 className="text-red group-hover:scale-110 transition-transform" size={24} />
                <span className="text-white">Steam</span>
              </button>
              <button className="flex items-center gap-3 px-6 py-3 bg-red/20 border border-red/50 rounded-lg hover:bg-red/30 hover:scale-105 transition-all group">
                <Monitor className="text-red group-hover:scale-110 transition-transform" size={24} />
                <span className="text-white">itch.io</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <button className="w-10 h-10 bg-red/20 border border-red/30 rounded-full flex items-center justify-center hover:bg-red/30 hover:scale-110 hover:border-red/50 transition-all group">
                <FaDiscord className="text-red group-hover:scale-110 transition-transform" size={18} />
              </button>
              <button className="w-10 h-10 bg-red/20 border border-red/30 rounded-full flex items-center justify-center hover:bg-red/30 hover:scale-110 hover:border-red/50 transition-all group">
                <FaXTwitter className="text-red group-hover:scale-110 transition-transform" size={18} />
              </button>
              <button className="w-10 h-10 bg-red/20 border border-red/30 rounded-full flex items-center justify-center hover:bg-red/30 hover:scale-110 hover:border-red/50 transition-all group">
                <FaYoutube className="text-red group-hover:scale-110 transition-transform" size={18} />
              </button>
              <button className="w-10 h-10 bg-red/20 border border-red/30 rounded-full flex items-center justify-center hover:bg-red/30 hover:scale-110 hover:border-red/50 transition-all group">
                <FaInstagram className="text-red group-hover:scale-110 transition-transform" size={18} />
              </button>
            </div>

            {/* Contact CTA Button */}
            <Link
              to="/contato"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red text-white font-mono text-lg uppercase rounded-lg hover:bg-red/80 hover:scale-105 hover:shadow-2xl hover:shadow-red/30 transition-all group"
            >
              <Mail className="group-hover:scale-110 transition-transform" size={24} />
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>

      {/* Ministério da Cultura Logo Section */}
      <div className="border-t border-red/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex flex-col items-center gap-4 transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="font-mono text-xs text-grey uppercase tracking-wider">Realização</p>
            <a 
              href="https://www.gov.br/cultura" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src="https://www.gov.br/cultura/pt-br/centrais-de-conteudo/marcas-e-logotipos/marcas-atualizadas/minc-govbr_horizontal_preto-1.png"
                alt="Ministério da Cultura - Governo Federal"
                className="h-16 md:h-20 w-auto opacity-60 hover:opacity-100 transition-all duration-300 filter invert group-hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-red/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Logo */}
            <div className="col-span-2 md:col-span-1">
              {isHomePage ? (
                <button
                  onClick={() => scrollToSection('#hero')}
                  className="font-display text-2xl font-bold text-white mb-4 block hover:text-red transition-colors"
                >
                  EGO'S <span className="text-red">ABYSS</span>
                </button>
              ) : (
                <Link
                  to="/"
                  className="font-display text-2xl font-bold text-white mb-4 block hover:text-red transition-colors"
                >
                  EGO'S <span className="text-red">ABYSS</span>
                </Link>
              )}
              <p className="text-grey text-sm">
                Um jogo de terror psicológico cooperativo que explora as profundezas da mente humana.
              </p>
            </div>

            {/* Game Links */}
            <div>
              <p className="font-mono text-xs text-red uppercase mb-4">Jogo</p>
              <ul className="space-y-2">
                {gameLinks.map((link) => (
                  <li key={link.label}>
                    {isHomePage ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-grey text-sm hover:text-white hover:translate-x-1 transition-all inline-block"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={`/${link.href}`}
                        className="text-grey text-sm hover:text-white hover:translate-x-1 transition-all inline-block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Links */}
            <div>
              <p className="font-mono text-xs text-red uppercase mb-4">Comunidade</p>
              <ul className="space-y-2">
                {communityLinks.map((link) => (
                  <li key={link.label}>
                    <button className="text-grey text-sm hover:text-white hover:translate-x-1 transition-all inline-block">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <p className="font-mono text-xs text-red uppercase mb-4">Legal</p>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    {link.href === '/contato' ? (
                      <Link
                        to={link.href}
                        className="text-grey text-sm hover:text-white hover:translate-x-1 transition-all inline-block"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button className="text-grey text-sm hover:text-white hover:translate-x-1 transition-all inline-block">
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-red/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-grey text-sm text-center md:text-left">
              © 2025 Ego's Abyss. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-red">v0.1.0</span>
              <span className="font-mono text-xs text-grey">BUILD_STABLE</span>
              <span className="font-mono text-xs text-red">PRONAC: 2514086</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="border-t border-red/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className={`text-center font-display text-lg text-grey italic transition-all duration-700 delay-400 hover:text-red cursor-default ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            "Mergulhe nas profundezas da sua própria mente"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
