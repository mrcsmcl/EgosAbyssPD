import { useEffect, useRef, useState } from 'react';
import { Building2, User, CheckCircle, ArrowRight } from 'lucide-react';

const Orcamento = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);

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

  // Animate the total value
  useEffect(() => {
    if (isVisible) {
      const target = 199650;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setAnimatedValue(target);
          clearInterval(timer);
        } else {
          setAnimatedValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const budgetItems = [
    { label: 'Pré-Produção', value: 16000, items: ['Artista Conceitual', 'Remuneração do Proponente'] },
    { label: 'Produção / Execução', value: 106800, items: ['Artista 3D', 'Sound Designer', 'Equipamentos', 'Licenças', 'Game Designer', 'Programador'] },
    { label: 'Pós-Produção', value: 6000, items: ['Coordenação QA', 'Ministração das Oficinas'] },
    { label: 'Assessoria', value: 9200, items: ['Advogado', 'Contador'] },
    { label: 'Contrapartidas Sociais', value: 7200, items: ['Legenda descritiva', 'Intérprete de LIBRAS'] },
    { label: 'Administração', value: 54450, items: ['Captação de recursos', 'Custos de acessibilidade', 'Custos de administração'] },
  ];

  const benefits = [
    'Transforma imposto em cultura e educação',
    'Apoia a formação de novos talentos',
    'Democratiza o acesso aos games independentes',
    'Fortalece a indústria criativa brasileira',
    'Contribui para a diversidade cultural',
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <section
      id="orcamento"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-red-dark overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
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
          <p className="section-label mb-4">{'>'} INVESTIMENTO</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Orçamento do <span className="text-red">Projeto</span>
          </h2>
          <p className="text-lg text-grey max-w-2xl mx-auto">
            Valores aprovados para o desenvolvimento do protótipo jogável do jogo eletrônico
            Ego's Abyss.
          </p>
        </div>

        {/* Total Value */}
        <div
          className={`text-center mb-16 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-mono text-sm text-grey uppercase mb-2">Valor Total Aprovado</p>
          <p className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-red mb-4 animate-glow-pulse">
            {formatCurrency(animatedValue)}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 border border-red/30 rounded-full hover:border-red/50 transition-colors cursor-default group">
            <span className="font-mono text-xs text-red group-hover:scale-110 transition-transform">PRONAC 2514086</span>
            <span className="text-grey">•</span>
            <span className="font-mono text-xs text-grey">Lei Federal de Incentivo à Cultura</span>
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Breakdown List */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="font-display text-xl font-bold text-white mb-6">
              Distribuição por Etapa
            </h3>
            <div className="space-y-4">
              {budgetItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-black/50 border border-red/20 rounded-lg p-4 hover:border-red/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-red/10 transition-all cursor-default group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium group-hover:text-red transition-colors">{item.label}</span>
                    <span className="font-mono text-red font-bold group-hover:scale-110 transition-transform">
                      {formatCurrency(item.value)}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.items.map((subItem) => (
                      <span key={subItem} className="text-xs text-grey hover:text-white transition-colors">
                        {subItem}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="font-display text-xl font-bold text-white mb-6">
              Benefícios Fiscais
            </h3>

            <div className="bg-black/50 border border-red/30 rounded-lg p-6 mb-6 hover:border-red/50 transition-colors">
              <div className="text-center mb-6">
                <p className="font-display text-5xl font-bold text-red mb-2 animate-glow-pulse">100%</p>
                <p className="text-white font-medium">Dedução Fiscal</p>
                <p className="text-grey text-sm">Do valor investido</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-red/10 rounded-lg hover:bg-red/20 transition-colors cursor-default group">
                  <Building2 className="text-red mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <p className="font-mono text-2xl font-bold text-red group-hover:scale-110 transition-transform">4%</p>
                  <p className="text-xs text-grey">Pessoas Jurídicas</p>
                </div>
                <div className="text-center p-4 bg-red/10 rounded-lg hover:bg-red/20 transition-colors cursor-default group">
                  <User className="text-red mx-auto mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <p className="font-mono text-2xl font-bold text-red group-hover:scale-110 transition-transform">6%</p>
                  <p className="text-xs text-grey">Pessoas Físicas</p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 border border-red/20 rounded-lg p-6 hover:border-red/50 transition-colors">
              <p className="font-mono text-xs text-red uppercase mb-4">Ao investir, você:</p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 group/item hover:bg-red/5 p-2 rounded transition-colors cursor-default">
                    <CheckCircle className="text-green-500 group-hover/item:scale-110 transition-transform" size={18} />
                    <span className="text-grey-light text-sm group-hover/item:text-white transition-colors">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-red text-white font-medium rounded-lg hover:bg-red/80 hover:scale-105 transition-all hover:shadow-xl hover:shadow-red/30">
            QUERO INVESTIR
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </button>
          <p className="mt-4 text-grey text-sm">
            Transforme seu imposto de renda em cultura
          </p>
        </div>
      </div>
    </section>
  );
};

export default Orcamento;
