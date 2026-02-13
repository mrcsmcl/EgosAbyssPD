import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const Mundo = () => {
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

  const characters = [
    {
      image: '/dr-krauss.jpg',
      role: 'O Criador',
      name: 'Dr. Dorian Krauss',
      description:
        'Psiquiatra e neurocientista brilhante, mas de ética questionável. Dedicou sua vida a desvendar os mistérios da mente humana. Criador do Projeto Onirium.',
      traits: ['Pioneiro em mapeamento neural', 'Métodos controversos', 'Voz perturbadoramente calma'],
      quote: 'Esta é, de fato, a representação visual e tangível do seu próprio subconsciente.',
    },
    {
      image: '/isaac.jpg',
      role: 'A Cobaia / Protagonista',
      name: 'Isaac L.',
      description:
        'Indivíduo que sofre há muito tempo com problemas psicológicos profundos. Desesperado por uma solução, aceitou o convite para ser a cobaia do Projeto Onirium.',
      traits: ['Determinado a encontrar cura', 'Facilmente sobrecarregado', 'Representa o ID e Ego'],
      quote: 'Eu preciso enfrentar meus medos. Não há outro caminho.',
    },
    {
      image: '/liam.jpg',
      role: 'O Operador Ego / Protagonista',
      name: 'Liam K.',
      description:
        'Amigo próximo de Isaac e assistente do Dr. Krauss. Opera o Sistema E.G.O., monitorando Isaac em tempo real através de dados psicológicos e físicos.',
      traits: ['Calmo sob pressão', 'Preocupação crescente', 'Representa o Ego e Superego'],
      quote: 'As salas são manifestações do seu próprio labirinto mental. Sua missão é navegar por esse inferno pessoal.',
    },
  ];

  return (
    <section
      id="mundo"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-red-dark overflow-hidden"
    >
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
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="section-label mb-4">{'>'} O MUNDO</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            O Projeto <span className="text-red">Onirium</span>
          </h2>
          <p className="text-lg text-grey max-w-3xl mx-auto">
            O jogo se desenrola inteiramente dentro da mente do protagonista, manifestada
            visualmente como um complexo de instalações de segurança e pesquisa em ruínas,
            externamente organizado, mas internamente caótico, cheio de bloqueios, memórias e medos.
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <div
              key={character.name}
              className={`group relative bg-black/50 border border-red/20 rounded-lg overflow-hidden hover:border-red/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Character Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Role Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-red/80 rounded-full">
                  <p className="font-mono text-xs text-white uppercase">{character.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name */}
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {character.name}
                </h3>

                {/* Description */}
                <p className="text-grey-light text-sm mb-4">{character.description}</p>

                {/* Traits */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {character.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-2 py-1 bg-red/10 text-red/80 text-xs font-mono rounded"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <div className="pt-4 border-t border-red/20">
                  <Quote className="text-red/50 mb-2" size={16} />
                  <p className="text-sm text-grey italic">"{character.quote}"</p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-lg bg-red/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>

        {/* Narrative Block */}
        <div
          className={`mt-16 py-10 md:py-14 px-8 min-h-[18rem] bg-black/50 border border-red/20 rounded-lg transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-mono text-xs text-red uppercase mb-3">A TECNOLOGIA EXPERIMENTAL</p>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Uma Revolução na Terapia
              </h3>
              <div className="space-y-3 text-grey-light text-sm">
                <p>
                  O <span className="text-red">Projeto Onirium</span> é uma tecnologia neurocientífica experimental 
                  disruptiva desenvolvida para permitir a <span className="text-red">transferência da consciência humana</span> 
                  para uma representação digitalizada e tangível da própria psique do indivíduo.
                </p>
                <p>
                  Fundamentado na premissa de uma terapia revolucionária, o protocolo visa a exploração e o tratamento 
                  de traumas profundos e desequilíbrios psicológicos diretamente em sua fonte subconsciente.
                </p>
                <p>
                  O sistema opera através de um processo de <span className="text-red">estimulação neural profunda</span>, onde o 
                  sujeito é imerso em um domínio ontológico que espelha sua estrutura mental. Este ambiente é processado visualmente 
                  a partir das percepções do indivíduo, convertendo bloqueios mentais e memórias em uma arquitetura complexa passível 
                  de navegação e interação física.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-red/10 border border-red/30 rounded hover:bg-red/20 transition-colors cursor-pointer group">
                <p className="font-mono text-xs text-red uppercase mb-2">Interface de Controle</p>
                <p className="text-white font-mono group-hover:translate-x-2 transition-transform">SISTEMA E.G.O.</p>
                <p className="text-grey text-sm">Environmental Guidance Overview</p>
              </div>
              <div className="p-4 bg-red/10 border border-red/30 rounded hover:bg-red/20 transition-colors cursor-pointer group">
                <p className="font-mono text-xs text-red uppercase mb-2">Representação Visual</p>
                <p className="text-white group-hover:translate-x-2 transition-transform">Psique em Tempo Real</p>
                <p className="text-grey text-sm">Baseada na arquitetura de segurança</p>
              </div>
              <div className="p-4 bg-red/10 border border-red/30 rounded hover:bg-red/20 transition-colors cursor-pointer group">
                <p className="font-mono text-xs text-red uppercase mb-2">Protocolos</p>
                <p className="text-white group-hover:translate-x-2 transition-transform">Segurança Experimental</p>
                <p className="text-grey text-sm">Nível de risco: ELEVADO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mundo;
