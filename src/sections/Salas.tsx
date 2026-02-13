import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Brain, Flame } from 'lucide-react';

const Salas = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeRoom, setActiveRoom] = useState(0);

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

  const rooms = [
    {
      number: '01',
      name: 'The Shadow\'s Veil',
      namePt: 'O Véu da Sombra',
      freud: 'Inconsciente Profundo',
      dante: 'Limbo',
      image: '/room-01-shadows-veil.jpg',
      description: 'Uma sala de servidores labiríntica e massiva, com estantes empoeiradas repletas de dados ilegíveis e fiação exposta. Luzes de LEDs piscam erraticamente.',
      challenge: 'Navegar por um labirinto de corredores de servidores com visibilidade limitada. Decifrar padrões nos ruídos dos servidores.',
    },
    {
      number: '02',
      name: 'Narcissus\'s Mirror',
      namePt: 'O Espelho de Narciso',
      freud: 'Ideal do Ego',
      dante: 'Gula',
      image: '/room-02-narcissus-mirror.jpg',
      description: 'Uma galeria de arte ou salão de espelhos, outrora opulento, mas agora em decadência. Espelhos grandes e ornamentados, a maioria rachada.',
      challenge: 'Puzzles de luz e reflexão. Manipular espelhos para direcionar um feixe de luz e revelar uma imagem verdadeira.',
    },
    {
      number: '03',
      name: 'Oedipus\'s Complex',
      namePt: 'Complexo de Édipo',
      freud: 'Conflitos Familiares',
      dante: 'Traição',
      image: '/room-03-oedipus-complex.jpg',
      description: 'Um andar residencial fragmentado dentro do complexo, com vários apartamentos interligados. Móveis quebrados, brinquedos infantis espalhados.',
      challenge: 'Resolver pequenos quebra-cabeças narrativos envolvendo a manipulação de objetos simbólicos familiares.',
    },
    {
      number: '04',
      name: 'Repression\'s Weight',
      namePt: 'O Peso da Repressão',
      freud: 'Memórias Reprimidas',
      dante: 'Peso',
      image: '/room-04-repression-weight.jpg',
      description: 'Um porão labiríntico e claustrofóbico, sobrecarregado com pilhas de caixas, documentos velhos e lixo eletrônico.',
      challenge: 'Movimentação mais lenta. Puzzles envolvem "desenterrar" itens de pilhas de entulho com ajuda do Operador.',
    },
    {
      number: '05',
      name: 'Sublimation\'s Ascent',
      namePt: 'A Ascensão da Sublimação',
      freud: 'Diversão Construtiva',
      dante: 'Purgatório',
      image: '/room-05-sublimation-ascent.jpg',
      description: 'Uma oficina ou laboratório abandonado, mas com potencial de reativação. Ferramentas espalhadas, máquinas quebradas.',
      challenge: 'Canalizar a energia de manifestações para um propósito construtivo. Criar ferramentas para progredir.',
    },
    {
      number: '06',
      name: 'Fixation\'s Stasis',
      namePt: 'Estase da Fixação',
      freud: 'Estagnação',
      dante: 'Inveja',
      image: '/room-06-fixation-stasis.jpg',
      description: 'Uma série de escritórios ou cubículos idênticos, dispostos em um padrão repetitivo. Sensação de déjà vu constante.',
      challenge: 'Encontrar a anomalia sutil que quebra o ciclo. O Operador identifica a única diferença nas câmeras.',
    },
    {
      number: '07',
      name: 'Regression\'s Retreat',
      namePt: 'Recuo da Regressão',
      freud: 'Regressão',
      dante: 'Luxúria',
      image: '/room-07-regression-retreat.jpg',
      description: 'Uma creche ou área de recreação infantil, mas tudo está em escala ligeiramente distorcida. Brinquedos gigantes, portas minúsculas.',
      challenge: 'Agir de forma mais "primitiva": rastejar, se esconder, usar objetos de forma não convencional.',
    },
    {
      number: '08',
      name: 'Thanatos\'s Embrace',
      namePt: 'O Abraço de Thanatos',
      freud: 'Impulso de Morte',
      dante: 'Desespero',
      image: '/room-08-thanatos-embrace.jpg',
      description: 'Uma câmara de quarentena ou necrotério, com paredes de metal frias, luzes fluorescentes bruxuleantes e macas vazias.',
      challenge: 'Resistir ao impulso de desistir. "Reiniciar" sistemas de suporte de vida para trazer uma faísca de vida ao ambiente.',
    },
    {
      number: '09',
      name: 'The Ego\'s Last Stand',
      namePt: 'A Última Resistência',
      freud: 'Ego / Integração',
      dante: 'Centro',
      image: '/room-09-ego-last-stand.jpg',
      description: 'O escritório principal do Dr. Krauss ou a sala de controle central, mas em um estado de colapso e reconstrução simultânea.',
      challenge: 'A prova final. Usar todos os Fragmentos da Mente coletados para estabilizar a sala e integrar a psique.',
    },
  ];

  const nextRoom = () => {
    setActiveRoom((prev) => (prev + 1) % rooms.length);
  };

  const prevRoom = () => {
    setActiveRoom((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  const currentRoom = rooms[activeRoom];

  return (
    <section
      id="salas"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-red/20 via-transparent to-red/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="section-label mb-4">{'>'} O LABIRINTO</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            As <span className="text-red">Nove Salas</span>
          </h2>
          <p className="text-lg text-grey max-w-3xl mx-auto">
            Cada sala é uma manifestação visual de um aspecto da psique, inspirada nos
            círculos do Inferno de Dante e nos conceitos freudianos.
          </p>
        </div>

        {/* Room Carousel */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevRoom}
              className="p-3 bg-red/20 border border-red/50 rounded-lg hover:bg-red/30 transition-all hover:scale-110"
            >
              <ChevronLeft className="text-red" size={24} />
            </button>

            <div className="text-center">
              <p className="font-mono text-4xl md:text-5xl text-red font-bold">
                {currentRoom.number}
              </p>
              <p className="font-mono text-sm text-grey">/ 09</p>
            </div>

            <button
              onClick={nextRoom}
              className="p-3 bg-red/20 border border-red/50 rounded-lg hover:bg-red/30 transition-all hover:scale-110"
            >
              <ChevronRight className="text-red" size={24} />
            </button>
          </div>

          {/* Room Card */}
          <div className="bg-red-dark/80 border border-red/30 rounded-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left - Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden group">
                <img
                  src={currentRoom.image}
                  alt={currentRoom.namePt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-red-dark/80 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-dark/80 to-transparent lg:hidden" />
                
                {/* Room Number Overlay */}
                <div className="absolute top-4 left-4 font-mono text-6xl font-bold text-white/20">
                  {currentRoom.number}
                </div>
              </div>

              {/* Right - Info */}
              <div className="p-8 lg:p-12">
                {/* Title */}
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                  {currentRoom.namePt}
                </h3>
                <p className="font-display text-xl text-grey mb-6">{currentRoom.name}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3 py-2 bg-red/20 rounded hover:bg-red/30 transition-colors">
                    <Brain className="text-red" size={16} />
                    <span className="font-mono text-xs text-red uppercase">
                      {currentRoom.freud}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-red/20 rounded hover:bg-red/30 transition-colors">
                    <Flame className="text-red" size={16} />
                    <span className="font-mono text-xs text-red uppercase">
                      {currentRoom.dante}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="font-mono text-xs text-grey uppercase mb-2">Descrição</p>
                  <p className="text-grey-light">{currentRoom.description}</p>
                </div>

                {/* Challenge */}
                <div>
                  <p className="font-mono text-xs text-red uppercase mb-2">Desafio</p>
                  <p className="text-white">{currentRoom.challenge}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Room Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {rooms.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveRoom(index)}
                className={`h-3 rounded-full transition-all hover:scale-125 ${
                  index === activeRoom
                    ? 'bg-red w-8'
                    : 'bg-red/30 hover:bg-red/50 w-3'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Portal Info */}
        <div
          className={`mt-12 p-6 bg-red-dark/50 border border-red/20 rounded-lg text-center transition-all duration-700 delay-400 hover:border-red/50 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-mono text-sm text-red uppercase mb-2">Navegação: Portais Semi-aleatórios</p>
          <p className="text-grey text-sm max-w-2xl mx-auto">
            O principal método de movimentação entre as salas. Ao ativar um portal, a próxima
            sala é escolhida <span className="text-white">aleatoriamente</span> dentro de um
            conjunto pré-definido. Para acessar a Sala 9, a cobaia deve ter coletado no mínimo{' '}
            <span className="text-red">5 Fragmentos da Mente</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Salas;
