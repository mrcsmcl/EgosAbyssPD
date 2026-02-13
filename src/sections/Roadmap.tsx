import { useEffect, useRef, useState } from 'react';
import { Calendar, CheckCircle2, Circle, Clock, Monitor, Cpu, Gamepad2, Upload } from 'lucide-react';

const Roadmap = () => {
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

  const phases = [
    {
      title: 'Pré-Produção',
      subtitle: 'Planejamento e Design',
      period: 'Jan/2026 - Mar/2026',
      duration: '3 meses',
      status: 'in-progress',
      icon: Calendar,
      items: [
        { text: 'GDD Revisado', done: true },
        { text: 'Arte Conceitual Final', done: true },
        { text: 'Greyboxing', done: false },
        { text: 'Roteiro Detalhado', done: false },
      ],
    },
    {
      title: 'Produção / Execução',
      subtitle: 'Desenvolvimento Principal',
      period: 'Abr/2026 - Mar/2027',
      duration: '12 meses',
      status: 'pending',
      icon: Cpu,
      items: [
        { text: '2 Salas Completas', done: false },
        { text: 'Sistema E.G.O.', done: false },
        { text: 'IA das Manifestações', done: false },
        { text: '2 Faixas de Trilha Sonora', done: false },
      ],
    },
    {
      title: 'Pós-Produção',
      subtitle: 'Polimento e Entrega',
      period: 'Abr/2027 - Jun/2027',
      duration: '3 meses',
      status: 'pending',
      icon: CheckCircle2,
      items: [
        { text: 'QA Completo', done: false },
        { text: 'Acessibilidade Implementada', done: false },
        { text: '4 Oficinas Realizadas', done: false },
        { text: 'Protótipo Publicado', done: false },
      ],
    },
  ];

  const specs = [
    { icon: Monitor, label: 'Plataforma', value: 'PC (Windows)' },
    { icon: Gamepad2, label: 'Motor', value: 'Unity' },
    { icon: Upload, label: 'Distribuição', value: 'Steam / itch.io' },
    { icon: Clock, label: 'Duração', value: '20-30 min' },
  ];

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
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
          <p className="section-label mb-4">{'>'} ROADMAP</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Cronograma <span className="text-red">& Status</span>
          </h2>
          <p className="text-lg text-grey max-w-2xl mx-auto">
            Acompanhe o desenvolvimento do projeto ao longo de 18 meses da jornada para trazer
            o Ego's Abyss à realidade.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 bg-red/20 border border-red/50 rounded-full hover:bg-red/30 transition-colors cursor-default group">
            <Clock className="text-red group-hover:scale-110 transition-transform" size={18} />
            <span className="font-mono text-sm text-red">
              18 Meses • 01/01/2026 a 30/06/2027
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red/20 hidden lg:block" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={phase.title}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="bg-red-dark/50 border border-red/30 rounded-lg p-6 hover:border-red/50 hover:shadow-xl hover:shadow-red/10 transition-all cursor-default group">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <phase.icon className="text-red group-hover:scale-110 transition-transform" size={24} />
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-mono ${
                                phase.status === 'in-progress'
                                  ? 'bg-yellow-500/20 text-yellow-500'
                                  : phase.status === 'completed'
                                  ? 'bg-green-500/20 text-green-500'
                                  : 'bg-grey/20 text-grey'
                              }`}
                            >
                              {phase.status === 'in-progress'
                                ? 'EM ANDAMENTO'
                                : phase.status === 'completed'
                                ? 'CONCLUÍDO'
                                : 'PENDENTE'}
                            </span>
                          </div>
                          <h3 className="font-display text-2xl font-bold text-white group-hover:text-red transition-colors">{phase.title}</h3>
                          <p className="text-grey">{phase.subtitle}</p>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 mb-4 text-sm">
                        <Calendar className="text-red" size={16} />
                        <span className="text-white">{phase.period}</span>
                        <span className="text-grey">({phase.duration})</span>
                      </div>

                      {/* Items */}
                      <ul className="space-y-2">
                        {phase.items.map((item) => (
                          <li key={item.text} className="flex items-center gap-3 group/item hover:bg-red/5 p-2 rounded transition-colors cursor-default">
                            {item.done ? (
                              <CheckCircle2 className="text-green-500 group-hover/item:scale-110 transition-transform" size={18} />
                            ) : (
                              <Circle className="text-grey group-hover/item:text-red transition-colors" size={18} />
                            )}
                            <span className={item.done ? 'text-white' : 'text-grey group-hover/item:text-white transition-colors'}>
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex justify-center">
                    <div
                      className={`w-4 h-4 rounded-full border-4 border-black transition-all hover:scale-150 ${
                        phase.status === 'in-progress'
                          ? 'bg-yellow-500 animate-pulse'
                          : phase.status === 'completed'
                          ? 'bg-green-500'
                          : 'bg-grey'
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="bg-red-dark/50 border border-red/20 rounded-lg p-4 text-center hover:border-red/50 hover:scale-105 hover:shadow-xl hover:shadow-red/10 transition-all cursor-default group"
            >
              <spec.icon className="text-red mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="font-mono text-xs text-grey uppercase mb-1">{spec.label}</p>
              <p className="text-white font-medium group-hover:text-red transition-colors">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
