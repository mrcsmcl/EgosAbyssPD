import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Accessibility, Globe, Eye, Hand, Gamepad2, Volume2, Building2, User } from 'lucide-react';

const Impacto = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const impactItems = [
    {
      icon: GraduationCap,
      title: 'Oficinas Gratuitas',
      description: '80h de formação profissional em Game Design Narrativo e Design Interativo',
      details: ['4 oficinas síncronas online', 'Prioridade para escolas públicas', 'Certificação para participantes', 'Material didático exclusivo'],
    },
    {
      icon: Accessibility,
      title: 'Acessibilidade',
      description: 'Compromisso com a inclusão e democratização do acesso à cultura digital',
      details: ['Tradução em LIBRAS nas oficinas', 'Legendas customizáveis no jogo', 'Modo para daltônicos', 'Controles remapeáveis'],
    },
    {
      icon: Globe,
      title: 'Democratização',
      description: 'Distribuição gratuita e conteúdos educacionais',
      details: ['Protótipo gratuito em Steam e itch.io', 'Meta: 2.000 downloads em 6 meses', 'Gravações das oficinas liberadas', 'Código-fonte documentado'],
    },
  ];

  const accessibilityMeasures = [
    { icon: Eye, title: 'Legendas Customizáveis', description: 'Legendas em PT-BR para todas as falas e sons ambientes, com opções de tamanho e contraste ajustáveis.' },
    { icon: Hand, title: 'Modo para Daltônicos', description: 'Filtros e ajustes de interface que alteram a paleta de cores para diferentes tipos de daltonismo.' },
    { icon: Gamepad2, title: 'Controles Remapeáveis', description: 'Reconfiguração livre do mapeamento de teclas e botões para periféricos adaptados.' },
    { icon: Volume2, title: 'Audiodescrição', description: 'Narração descritiva em PT-BR para cenas não interativas, introdução e tutoriais.' },
  ];

  return (
    <section
      id="impacto"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(211, 28, 28, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="section-label mb-4">{'>'} IMPACTO</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Impacto <span className="text-red">Cultural</span>
          </h2>
          <p className="text-lg text-grey max-w-3xl mx-auto">
            Projeto aprovado pela Lei Federal de Incentivo à Cultura com compromisso de
            democratizar o acesso à cultura digital e formar novos profissionais para a
            indústria de jogos brasileira.
          </p>
          <div className="inline-flex items-center gap-3 mb-8 mt-10 px-4 py-2 bg-red/20 border border-red/50 rounded-full hover:bg-red/30 transition-colors cursor-default group">
            <span className="font-mono text-xs text-red uppercase">PRONAC</span>
            <span className="font-mono text-lg text-red font-bold group-hover:scale-110 transition-transform">2514086</span>
          </div>
        </div>

        {/* Impact Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {impactItems.map((item, index) => (
            <div
              key={item.title}
              className={`group bg-red-dark/50 border border-red/20 rounded-lg p-6 hover:border-red/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 bg-red/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red/40 group-hover:scale-110 transition-all">
                <item.icon className="text-red" size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-red transition-colors">{item.title}</h3>
              <p className="text-grey-light mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-sm text-grey hover:text-white transition-colors cursor-default">
                    <span className="w-1.5 h-1.5 bg-red rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Accessibility Measures */}
        <div
          className={`mb-16 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="font-display text-2xl font-bold text-white text-center mb-8">
            Medidas de <span className="text-red">Acessibilidade</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {accessibilityMeasures.map((measure) => (
              <div
                key={measure.title}
                className="bg-black/50 border border-red/20 rounded-lg p-5 hover:border-red/50 hover:scale-105 hover:shadow-xl hover:shadow-red/10 transition-all cursor-default group"
              >
                <measure.icon className="text-red mb-3 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="text-white font-medium mb-2 group-hover:text-red transition-colors">{measure.title}</h4>
                <p className="text-grey text-xs">{measure.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lei Rouanet Info */}
        <div
          className={`bg-red-dark/50 border border-red/30 rounded-xl overflow-hidden transition-all duration-700 delay-500 hover:border-red/50 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="p-8">
            <h3 className="font-display text-2xl font-bold text-white text-center mb-6">
              Como Funciona a <span className="text-red">Lei Rouanet</span>
            </h3>
            <p className="text-grey text-center max-w-3xl mx-auto mb-8">
              A Lei Federal de Incentivo à Cultura permite que empresas e pessoas físicas
              destinem parte de seus impostos de renda para projetos culturais aprovados pelo
              Ministério da Cultura.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-black/50 border border-red/20 rounded-lg p-6 text-center hover:border-red/50 hover:scale-105 transition-all cursor-default group">
                <Building2 className="text-red mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                <p className="font-mono text-4xl font-bold text-red mb-2 group-hover:scale-110 transition-transform">4%</p>
                <p className="text-white font-medium mb-1">Pessoas Jurídicas</p>
                <p className="text-grey text-sm">Empresas tributadas com base no lucro real</p>
              </div>
              <div className="bg-black/50 border border-red/20 rounded-lg p-6 text-center hover:border-red/50 hover:scale-105 transition-all cursor-default group">
                <User className="text-red mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                <p className="font-mono text-4xl font-bold text-red mb-2 group-hover:scale-110 transition-transform">6%</p>
                <p className="text-white font-medium mb-1">Pessoas Físicas</p>
                <p className="text-grey text-sm">Declarantes do Imposto de Renda modelo completo</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-white mb-4">
                <span className="text-red font-bold">100%</span> de dedução fiscal do valor investido
              </p>
              <p className="text-grey text-sm">
                Transforme seu imposto de renda em cultura. Apoie o desenvolvimento de jogos brasileiros independentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impacto;
