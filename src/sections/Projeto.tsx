import { useEffect, useRef, useState } from 'react';
import { FileText, Quote } from 'lucide-react';

const Projeto = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState<string>('');
  const [statusText, setStatusText] = useState<string>('EM ESPERA');
  const [connectionText, setConnectionText] = useState<string>('AGUARDANDO');
  const FULL_TEXT = '> Inicializando interface neural...\n> Sincronizando ondas cerebrais...\n> Conexão estabilizada.';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Terminal typing effect - character by character
  useEffect(() => {
    if (!isVisible) return;

    const fullText = FULL_TEXT;
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        // typing finished -> update status/connection
        setStatusText('ATIVO');
        setConnectionText('ESTABELECIDA');
        clearInterval(typingInterval);
      }
    }, 50); // 50ms per character

    return () => clearInterval(typingInterval);
  }, [isVisible]);

  // compute progress (0-100) from typedText vs full text
  const progress = Math.min(100, Math.round((typedText.length / Math.max(1, FULL_TEXT.length)) * 100));

  return (
    <section
      id="projeto"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-red-dark overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="section-label mb-4">
              {'>'} O PROJETO
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Onirium:
              <br />
              <span className="text-red">A Fronteira Final</span>
              <br />
              da Mente
            </h2>
            <div className="space-y-4 text-grey-light">
              <p className="hover:text-white transition-colors cursor-default">
                O <strong className="text-white">Dr. Dorian Krauss</strong> dedicou sua vida a
                desvendar os mistérios da consciência humana. Seu{' '}
                <span className="text-red">Projeto Onirium</span> é uma tecnologia
                experimental que permite que a consciência de um indivíduo seja transferida
                para uma representação digitalizada de sua própria psique.
              </p>
              <p className="hover:text-white transition-colors cursor-default">
                O objetivo: uma terapia revolucionária onde pacientes enfrentam seus traumas
                diretamente na fonte. Mas a mente é um labirinto perigoso. E nem todos os
                que entram... conseguem sair.
              </p>
              <p className="hover:text-white transition-colors cursor-default">
                Inspirado nos círculos do{' '}
                <span className="text-red">Inferno de Dante</span> e nos conceitos de{' '}
                <span className="text-red">Freud</span>, o jogo propõe uma jornada
                introspectiva única, onde cada sala representa um aspecto da psique humana.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-black/30 border-l-4 border-red rounded-r-lg hover:bg-black/50 transition-colors group cursor-pointer">
              <Quote className="text-red mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="font-display text-xl text-white italic group-hover:text-red transition-colors">
                "A mente humana é o último território inexplorado. E eu pretendo mapeá-la."
              </p>
              <p className="text-grey mt-2 text-sm group-hover:text-white transition-colors">— Dr. Dorian Krauss</p>
            </div>
          </div>

          {/* Right Content - Classified Card */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative group">
              {/* Classified Document */}
              <div className="bg-black border border-red/50 rounded-lg p-8 transform rotate-1 group-hover:rotate-0 transition-all duration-500 hover:shadow-2xl hover:shadow-red/20">
                {/* Stamp */}
                <div className="absolute -top-4 -right-4 bg-red text-white font-mono text-xs px-4 py-2 rounded transform rotate-12 group-hover:scale-110 transition-transform">
                  CONFIDENCIAL
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-red group-hover:scale-110 transition-transform" size={32} />
                  <div>
                    <p className="font-mono text-xs text-grey uppercase">PROJETO</p>
                    <p className="font-mono text-xl text-red">ONIRIUM</p>
                  </div>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between border-b border-red/20 pb-2 group/item hover:bg-red/5 p-2 rounded transition-colors cursor-pointer">
                    <span className="text-grey">STATUS:</span>
                    <span className={statusText === 'ATIVO' ? 'text-green-500 animate-pulse' : 'text-grey'}>{statusText}</span>
                  </div>
                  <div className="flex justify-between border-b border-red/20 pb-2 group/item hover:bg-red/5 p-2 rounded transition-colors cursor-pointer">
                    <span className="text-grey">SUJEITO:</span>
                    <span className="text-white">ISAAC L.</span>
                  </div>
                  <div className="flex justify-between border-b border-red/20 pb-2 group/item hover:bg-red/5 p-2 rounded transition-colors cursor-pointer">
                    <span className="text-grey">OPERADOR:</span>
                    <span className="text-white">ASSIST. LIAM K.</span>
                  </div>
                  <div className="flex justify-between pt-2 group/item hover:bg-red/5 p-2 rounded transition-colors cursor-pointer">
                    <span className="text-grey">CONEXÃO:</span>
                    <span className={connectionText === 'ESTABELECIDA' ? 'text-green-500' : 'text-grey'}>{connectionText}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-grey">PROFUNDIDADE:</span>
                    <span className={progress === 100 ? 'text-green-500' : 'text-red'}>{progress}%</span>
                  </div>
                  <div className="h-2 bg-red/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Data Stream - Terminal Effect */}
                <div className="mt-6 p-3 bg-black rounded font-mono text-xs border border-green-500/30 min-h-[4.5rem] shadow-lg shadow-green-500/10">
                  <pre className="text-green-500 whitespace-pre-wrap font-mono">
                    {typedText}
                    <span className="animate-pulse">_</span>
                  </pre>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-red/20 rounded-lg -z-10 group-hover:border-red/40 transition-colors" />
              <div className="absolute -bottom-8 -left-8 w-full h-full border border-red/10 rounded-lg -z-20 group-hover:border-red/30 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projeto;
