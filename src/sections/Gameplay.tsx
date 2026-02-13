import { useEffect, useRef, useState } from 'react';
import { Eye, Radio, Users, Puzzle, Clock, AlertTriangle } from 'lucide-react';

const Gameplay = () => {
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

  const cobaiaAbilities = [
    'Visão em primeira pessoa (FPS) imersiva',
    'Exploração de ambientes 3D detalhados',
    'Resolução de puzzles físicos',
    'Fuga de Manifestações Psíquicas',
  ];

  const operadorAbilities = [
    'Interface complexa rica em dados',
    'Múltiplas visões de câmeras',
    'Mapa holográfico interativo 2D',
    'Análise de dados psíquicos e físicos',
  ];

  const sistemaModulos = [
    { code: 'PPU', name: 'Projeção Perceptiva', desc: 'Feed de vídeo em tempo real' },
    { code: 'VMS', name: 'Monitoramento Visual', desc: 'Central de controle de câmeras' },
    { code: 'NAV-OS', name: 'Navegação Holográfica', desc: 'Mapeamento em tempo real' },
    { code: 'CMD', name: 'Manipulação Cognitiva', desc: 'Terminal de comandos' },
  ];

  const stats = [
    { icon: Users, value: '2', label: 'Jogadores', sublabel: 'Cooperativo Assimétrico' },
    { icon: Puzzle, value: '9', label: 'Salas', sublabel: 'Do Labirinto Mental' },
    { icon: Clock, value: '20-30', label: 'Minutos', sublabel: 'Duração da Demo' },
    { icon: AlertTriangle, value: '16+', label: 'Classificação', sublabel: 'Indicativa' },
  ];

  return (
    <section
      id="gameplay"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-25 pointer-events-none">
        <img
          src="/isaac.png"
          alt="Isaac"
          className="w-full h-full object-contain object-left"
        />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-25 pointer-events-none">
        <img
          src="/liam.png"
          alt="Liam"
          className="w-full h-full object-contain object-right"
        />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(211, 28, 28, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(211, 28, 28, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
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
          <p className="section-label mb-4">{'>'} GAMEPLAY</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Cooperação <span className="text-red">Assimétrica</span>
          </h2>
          <p className="text-lg text-grey max-w-2xl mx-auto">
            O coração de Ego's Abyss. Dois jogadores, visões complementares, habilidades
            distintas. A comunicação constante e o trabalho em equipe são absolutamente
            essenciais para a sobrevivência.
          </p>
        </div>

        {/* Player Roles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Cobaia Card */}
          <div
            className={`card-dark border-glow transition-all duration-700 delay-100 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red/10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red/20 rounded-lg flex items-center justify-center group-hover:bg-red/40 transition-colors">
                <Eye className="text-red" size={24} />
              </div>
              <div>
                <p className="font-mono text-xs text-grey uppercase">A COBAIA</p>
                <h3 className="font-display text-2xl font-bold text-white">ISAAC L.</h3>
              </div>
            </div>

            <p className="text-grey-light mb-6 hover:text-white transition-colors">
              Você é Isaac, um indivíduo que sofre há muito tempo com problemas psicológicos
              profundos. Desesperado por uma solução, aceitou ser a cobaia do Projeto Onirium.
            </p>

            <div className="mb-6">
              <p className="font-mono text-xs text-red uppercase mb-3">Experiência</p>
              <ul className="space-y-2">
                {cobaiaAbilities.map((ability, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-grey-light hover:text-white transition-colors cursor-default group/item">
                    <span className="w-1.5 h-1.5 bg-red rounded-full group-hover/item:scale-150 transition-transform" />
                    {ability}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs text-red uppercase mb-3">Habilidades</p>
              <div className="flex flex-wrap gap-2">
                {['Posicionar Câmeras', 'Interagir com painéis', 'Comunicação', 'Furtividade'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-red/20 text-red text-xs font-mono rounded hover:bg-red/40 hover:scale-105 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Operador Card */}
          <div
            className={`card-dark border-glow transition-all duration-700 delay-200 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red/10 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red/20 rounded-lg flex items-center justify-center">
                <Radio className="text-red" size={24} />
              </div>
              <div>
                <p className="font-mono text-xs text-grey uppercase">O OPERADOR EGO</p>
                <h3 className="font-display text-2xl font-bold text-white">LIAM K.</h3>
              </div>
            </div>

            <p className="text-grey-light mb-6 hover:text-white transition-colors">
              Você é Liam, amigo próximo de Isaac. Opera o Sistema E.G.O. em uma sala de
              controle, monitorando os sinais vitais e o fluxo de dados psíquicos em tempo real.
            </p>

            <div className="mb-6">
              <p className="font-mono text-xs text-red uppercase mb-3">Experiência</p>
              <ul className="space-y-2">
                {operadorAbilities.map((ability, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-grey-light hover:text-white transition-colors cursor-default group/item">
                    <span className="w-1.5 h-1.5 bg-red rounded-full group-hover/item:scale-150 transition-transform" />
                    {ability}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs text-red uppercase mb-3">Módulos do Sistema</p>
              <div className="grid grid-cols-2 gap-2">
                {sistemaModulos.map((modulo) => (
                  <div
                    key={modulo.code}
                    className="px-3 py-2 bg-red/10 border border-red/30 rounded hover:bg-red/20 hover:border-red/50 transition-all cursor-default group"
                  >
                    <p className="font-mono text-xs text-red group-hover:scale-105 transition-transform inline-block">{modulo.code}</p>
                    <p className="text-xs text-grey-light">{modulo.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-red-dark/50 border border-red/20 rounded-lg p-6 text-center hover:border-red/50 hover:scale-105 hover:shadow-xl hover:shadow-red/10 transition-all cursor-default group"
            >
              <stat.icon className="text-red mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
              <p className="font-display text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-red transition-colors">
                {stat.value}
              </p>
              <p className="font-mono text-sm text-red uppercase">{stat.label}</p>
              <p className="text-xs text-grey mt-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gameplay;
