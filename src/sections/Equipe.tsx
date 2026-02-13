import { useEffect, useRef, useState } from 'react';
import { User, Code, Calculator, Palette, Box, Music, Terminal, Scale } from 'lucide-react';

const Equipe = () => {
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

  const mainTeam = [
    {
      icon: User,
      role: 'Líder do Projeto',
      name: 'Marcos Maciel Candido',
      description: 'Mestre em Ciência da Computação com experiência em desenvolvimento de jogos e docência',
      credentials: ['Mestrado em Ciência da Computação', 'Game Designer', 'Desenvolvedor Unity', 'Análise de Sistemas'],
    },
    {
      icon: Code,
      role: 'Desenvolvimento e Direção',
      name: 'Alison Henrique Custódio',
      description: 'Especialista multifuncional em tecnologia e gestão estratégica',
      credentials: ['MBA em Auditoria', 'Ciências Contábeis', 'Full Stack Developer', 'Java • React • SQL'],
    },
    {
      icon: Calculator,
      role: 'Contabilidade',
      name: 'Larissa Priscila Custódio',
      description: 'Contadora especializada em perícia com 15 anos de experiência',
      credentials: ['Auditoria e Perícia', 'CFC desde 2013', 'Analista Sênior', 'Ciências Contábeis'],
    },
  ];

  const productionTeam = [
    { icon: Palette, role: 'Artista Conceitual' },
    { icon: Box, role: 'Artista 3D' },
    { icon: Music, role: 'Sound Designer' },
    { icon: Terminal, role: 'Programador' },
    { icon: Scale, role: 'Advogado' },
  ];

const technologies = [
  'Unity',
  'C#',
  'URP',
  'Shader Graph',
  'Addressables',
  'Netcode',
  'Git',
];



  return (
    <section
      id="equipe"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-red-dark overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, black 49%, black 51%, transparent 52%)`,
            backgroundSize: '20px 20px',
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
          <p className="section-label mb-4">{'>'} EQUIPE</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Quem <span className="text-red">Somos</span>
          </h2>
          <p className="text-lg text-grey max-w-2xl mx-auto">
            Profissionais dedicados unidos pela paixão em criar experiências de jogos inovadoras
          </p>
        </div>

        {/* Main Team */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainTeam.map((member, index) => (
            <div
              key={member.name}
              className={`group bg-black/50 border border-red/20 rounded-lg p-6 hover:border-red/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-red/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red/40 group-hover:scale-110 transition-all">
                <member.icon className="text-red" size={28} />
              </div>

              {/* Role */}
              <p className="font-mono text-xs text-red uppercase mb-1">{member.role}</p>

              {/* Name */}
              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-red transition-colors">{member.name}</h3>

              {/* Description */}
              <p className="text-grey-light text-sm mb-4">{member.description}</p>

              {/* Credentials as Tags */}
              <div className="flex flex-wrap gap-2">
                {member.credentials.map((credential) => (
                  <span 
                    key={credential} 
                    className="px-2 py-1 bg-red/10 border border-red/20 rounded text-xs text-grey hover:text-red hover:border-red/40 transition-all cursor-default"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Production Team */}
        <div
          className={`mb-16 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="font-display text-2xl font-bold text-white text-center mb-8">
            Equipe de <span className="text-red">Produção</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {productionTeam.map((member) => (
              <div
                key={member.role}
                className="bg-black/50 border border-red/20 rounded-lg p-4 text-center hover:border-red/50 hover:scale-105 hover:shadow-xl hover:shadow-red/10 transition-all cursor-default group"
              >
                <member.icon className="text-red mx-auto mb-3 group-hover:scale-110 transition-transform" size={24} />
                <p className="text-white text-sm group-hover:text-red transition-colors">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="font-display text-2xl font-bold text-white text-center mb-8">
            <span className="text-red">Tecnologias</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-red/20 border border-red/30 rounded-full text-red font-mono text-sm hover:bg-red/40 hover:scale-110 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipe;
