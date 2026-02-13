import { useEffect, useRef, useState } from 'react';
import { getAssetPath } from '@/lib/utils';
import { 
  Eye, 
  Video, 
  Activity, 
  Brain, 
  Map, 
  Sliders, 
  Terminal, 
  MessageSquare,
  Wifi,
  CheckCircle
} from 'lucide-react';

const Sistema = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Dynamic status values
  const [latency, setLatency] = useState(12);
  const [integrity, setIntegrity] = useState(98.7);
  
  // Psychic data values
  const [sanity, setSanity] = useState(72);
  const [stress, setStress] = useState(45);
  const [repression, setRepression] = useState(68);
  
  // Physical data values
  const [heartRate, setHeartRate] = useState(92);
  const [oxygenation, setOxygenation] = useState(97);
  const [muscleTension, setMuscleTension] = useState<'BAIXA' | 'NORMAL' | 'ELEVADA' | 'CRÍTICA'>('ELEVADA');
  const [conductance, setConductance] = useState(4.2);
  
  // Terminal typing effect
  const [terminalText, setTerminalText] = useState('');
  const TERMINAL_FULL_TEXT = '> Inicializando módulos...\n[OK] PPU conectado\n[OK] VMS sincronizado\n[OK] DSM ativo\n[OK] PSM calibrado\n> Sistema pronto.\n> Aguardando comandos...';

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
  
  // Animate latency and integrity
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setLatency(prev => {
        const change = Math.random() * 4 - 2; // -2 to +2
        return Math.max(8, Math.min(20, prev + change));
      });
      
      setIntegrity(prev => {
        const change = Math.random() * 0.6 - 0.3; // -0.3 to +0.3
        return Math.max(95, Math.min(100, prev + change));
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isVisible]);
  
  // Animate psychic data
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setSanity(prev => {
        const change = Math.random() * 6 - 3;
        return Math.max(60, Math.min(85, prev + change));
      });
      
      setStress(prev => {
        const change = Math.random() * 8 - 4;
        return Math.max(35, Math.min(65, prev + change));
      });
      
      setRepression(prev => {
        const change = Math.random() * 6 - 3;
        return Math.max(55, Math.min(80, prev + change));
      });
    }, 1800);
    
    return () => clearInterval(interval);
  }, [isVisible]);
  
  // Animate physical data
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setHeartRate(prev => {
        const change = Math.random() * 10 - 5;
        return Math.max(75, Math.min(110, Math.round(prev + change)));
      });
      
      setOxygenation(prev => {
        const change = Math.random() * 2 - 1;
        return Math.max(94, Math.min(100, Math.round(prev + change)));
      });
      
      const tensions: Array<'BAIXA' | 'NORMAL' | 'ELEVADA' | 'CRÍTICA'> = ['BAIXA', 'NORMAL', 'ELEVADA', 'CRÍTICA'];
      setMuscleTension(tensions[Math.floor(Math.random() * tensions.length)]);
      
      setConductance(prev => {
        const change = Math.random() * 0.4 - 0.2;
        return Math.max(3.5, Math.min(5.5, parseFloat((prev + change).toFixed(1))));
      });
    }, 2500);
    
    return () => clearInterval(interval);
  }, [isVisible]);
  
  // Terminal typing effect
  useEffect(() => {
    if (!isVisible) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < TERMINAL_FULL_TEXT.length) {
        setTerminalText(TERMINAL_FULL_TEXT.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);
    
    return () => clearInterval(typingInterval);
  }, [isVisible]);

  const modules = [
    {
      number: '01',
      code: 'PPU',
      name: 'Perceptual Projection Unit',
      namePt: 'Unidade de Projeção Perceptiva',
      description: 'Feed de vídeo em tempo real da perspectiva da cobaia',
      icon: Eye,
      image: getAssetPath('/system-ppu.jpg'),
    },
    {
      number: '02',
      code: 'VMS',
      name: 'Visual Monitoring Suite',
      namePt: 'Suíte de Monitoramento Visual',
      description: 'Central de controle de múltiplas câmeras',
      icon: Video,
      image: getAssetPath('/system-vms.jpg'),
    },
    {
      number: '03',
      code: 'DSM',
      name: 'Data Stream Monitor',
      namePt: 'Monitor de Fluxo de Dados',
      description: 'Monitoramento de dados físicos e vitais',
      icon: Activity,
      image: getAssetPath('/system-ppu.jpg'),
    },
    {
      number: '04',
      code: 'PSM',
      name: 'Psychic State Monitor',
      namePt: 'Monitor de Estado Psíquico',
      description: 'Análise do estado mental e emocional',
      icon: Brain,
      image: getAssetPath('/system-psm.jpg'),
    },
    {
      number: '05',
      code: 'NAV-OS',
      name: 'Navigation & Overview System',
      namePt: 'Sistema de Navegação',
      description: 'Mapeamento holográfico interativo',
      icon: Map,
      image: getAssetPath('/system-nav-os.jpg'),
    },
    {
      number: '06',
      code: 'ENV-CTRL',
      name: 'Environmental Control Protocol',
      namePt: 'Controle Ambiental',
      description: 'Interação limitada com o ambiente',
      icon: Sliders,
      image: getAssetPath('/system-vms.jpg'),
    },
    {
      number: '07',
      code: 'CMD',
      name: 'Cognitive Manipulation Directive',
      namePt: 'Diretiva de Manipulação',
      description: 'Terminal de comandos de baixo nível',
      icon: Terminal,
      image: getAssetPath('/system-cmd.jpg'),
    },
    {
      number: '08',
      code: 'COMM-Link',
      name: 'Communication & Log Link',
      namePt: 'Link de Comunicação',
      description: 'Canal de comunicação e registro',
      icon: MessageSquare,
      image: getAssetPath('/system-cmd.jpg'),
    },
  ];

  const statusData = [
    { label: 'STATUS', value: 'ONLINE', icon: CheckCircle, color: 'text-green-500' },
    { label: 'LATÊNCIA', value: `${Math.round(latency)}ms`, icon: Wifi, color: 'text-red' },
    { label: 'INTEGRIDADE', value: `${integrity.toFixed(1)}%`, icon: Activity, color: 'text-red' },
    { label: 'CONEXÃO', value: 'ESTÁVEL', icon: CheckCircle, color: 'text-green-500' },
  ];

  return (
    <section
      id="sistema"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-red-dark overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 0, 0, 0.5) 1px, transparent 1px)`,
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
          <p className="section-label mb-4">{'>'} INTERFACE</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Sistema <span className="text-red">E.G.O.</span>
          </h2>
          <p className="text-lg text-grey max-w-2xl mx-auto">
            Environmental Guidance Overview — A interface que conecta dois mundos
          </p>
        </div>

        {/* Status Panel */}
        <div
          className={`mb-12 p-6 bg-black/50 border border-red/30 rounded-lg transition-all duration-700 delay-100 hover:border-red/50 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statusData.map((status, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <status.icon className={`mx-auto mb-2 ${status.color} group-hover:scale-110 transition-transform`} size={24} />
                <p className="font-mono text-xs text-grey uppercase mb-1">{status.label}</p>
                <p className={`font-mono text-xl font-bold ${status.color}`}>{status.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modules Grid with Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((module, index) => (
            <div
              key={module.code}
              className={`group relative bg-black/50 border border-red/20 rounded-lg overflow-hidden hover:border-red/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-red/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 2) * 50}ms` }}
            >
              {/* Module Image */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={module.image}
                  alt={module.namePt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                
                {/* Number */}
                <div className="absolute top-2 right-2 font-mono text-xs text-red/70">
                  {module.number}
                </div>

                {/* Icon */}
                <div className="absolute bottom-2 left-2 w-10 h-10 bg-red/20 rounded-lg flex items-center justify-center group-hover:bg-red/40 transition-colors">
                  <module.icon className="text-red" size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Code */}
                <p className="font-mono text-lg text-red font-bold mb-1">{module.code}</p>

                {/* Name */}
                <p className="text-white text-sm font-medium mb-1">{module.namePt}</p>
                <p className="text-grey text-xs mb-2">{module.name}</p>

                {/* Description */}
                <p className="text-grey text-xs">{module.description}</p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-lg bg-red/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>

        {/* Data Visualization Preview */}
        <div
          className={`mt-12 grid lg:grid-cols-3 gap-6 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Psychic Data */}
          <div className="bg-black/50 border border-red/20 rounded-lg p-6 hover:border-red/50 transition-colors group">
            <p className="font-mono text-xs text-red uppercase mb-4">Dados Psíquicos</p>
            <div className="space-y-4">
              <div className="group/bar cursor-pointer">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-grey group-hover/bar:text-white transition-colors">Sanidade</span>
                  <span className="text-white">{Math.round(sanity)}%</span>
                </div>
                <div className="h-2 bg-red/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-yellow-500 transition-all duration-1000 ease-in-out" 
                    style={{ width: `${sanity}%` }}
                  />
                </div>
              </div>
              <div className="group/bar cursor-pointer">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-grey group-hover/bar:text-white transition-colors">Estresse</span>
                  <span className="text-white">{Math.round(stress)}%</span>
                </div>
                <div className="h-2 bg-red/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-yellow-500 transition-all duration-1000 ease-in-out" 
                    style={{ width: `${stress}%` }}
                  />
                </div>
              </div>
              <div className="group/bar cursor-pointer">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-grey group-hover/bar:text-white transition-colors">Repressão</span>
                  <span className="text-white">{Math.round(repression)}%</span>
                </div>
                <div className="h-2 bg-red/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-500 to-red transition-all duration-1000 ease-in-out" 
                    style={{ width: `${repression}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Physical Data */}
          <div className="bg-black/50 border border-red/20 rounded-lg p-6 hover:border-red/50 transition-colors">
            <p className="font-mono text-xs text-red uppercase mb-4">Dados Físicos</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between group cursor-pointer hover:bg-red/5 p-2 rounded transition-colors">
                <span className="text-grey text-sm group-hover:text-white transition-colors">Frequência Cardíaca</span>
                <span className="font-mono text-red group-hover:scale-110 transition-transform">{heartRate} BPM</span>
              </div>
              <div className="flex items-center justify-between group cursor-pointer hover:bg-red/5 p-2 rounded transition-colors">
                <span className="text-grey text-sm group-hover:text-white transition-colors">Oxigenação</span>
                <span className="font-mono text-red group-hover:scale-110 transition-transform">{oxygenation}%</span>
              </div>
              <div className="flex items-center justify-between group cursor-pointer hover:bg-red/5 p-2 rounded transition-colors">
                <span className="text-grey text-sm group-hover:text-white transition-colors">Tensão Muscular</span>
                <span className="font-mono text-red group-hover:scale-110 transition-transform">{muscleTension}</span>
              </div>
              <div className="flex items-center justify-between group cursor-pointer hover:bg-red/5 p-2 rounded transition-colors">
                <span className="text-grey text-sm group-hover:text-white transition-colors">Condutância</span>
                <span className="font-mono text-red group-hover:scale-110 transition-transform">{conductance.toFixed(1)} μS</span>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="bg-black/50 border border-green-500/30 rounded-lg p-6 font-mono text-xs hover:border-green-500/50 transition-colors shadow-lg shadow-green-500/5">
            <p className="text-red uppercase mb-4">Terminal E.G.O.</p>
            <div className="min-h-[120px] text-green-500">
              <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                {terminalText.split('\n').map((line, index) => (
                  <div key={index}>
                    {line.startsWith('[OK]') ? (
                      <span><span className="text-green-500">{line.substring(0, 4)}</span>{line.substring(4)}</span>
                    ) : line.startsWith('>') ? (
                      <span><span className="text-red">{'>'}</span>{line.substring(1)}</span>
                    ) : (
                      line
                    )}
                  </div>
                ))}
                <span className="animate-pulse">_</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sistema;
