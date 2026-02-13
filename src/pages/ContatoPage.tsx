import { useEffect, useRef, useState } from 'react';
import { Mail, MessageSquare, User, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { FaDiscord, FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';

const ContatoPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica de envio real
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contato@egosabyss.com', link: 'mailto:contato@egosabyss.com' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <main
        ref={sectionRef}
        className="relative py-24 md:py-32 overflow-hidden"
      >
        {/* Background Pattern */}
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
          {/* Back Button */}
          <Link
            to="/"
            className={`inline-flex items-center gap-2 mb-8 text-grey hover:text-red transition-all group ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
            <span>Voltar ao site</span>
          </Link>

          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="section-label mb-4">{'>'} CONTATO</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Entre em <span className="text-red">Contato</span>
            </h1>
            <p className="text-lg text-grey max-w-2xl mx-auto">
              Tem alguma dúvida sobre o projeto? Quer fazer parte da equipe ou apoiar através da Lei Rouanet?
              Estamos prontos para conversar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="bg-red-dark/50 border border-red/20 rounded-lg p-8 hover:border-red/40 transition-all">
                <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <MessageSquare className="text-red" size={28} />
                  Envie uma Mensagem
                </h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="text-green-500 mb-4 animate-bounce" size={64} />
                    <p className="font-display text-2xl text-white mb-2">Mensagem Enviada!</p>
                    <p className="text-grey">Retornaremos em breve</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-mono text-red uppercase mb-2">
                        Nome
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-grey" size={18} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-black/50 border border-red/20 rounded-lg text-white placeholder-grey focus:border-red/50 focus:outline-none focus:ring-2 focus:ring-red/20 transition-all"
                          placeholder="Seu nome completo"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-mono text-red uppercase mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-grey" size={18} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-black/50 border border-red/20 rounded-lg text-white placeholder-grey focus:border-red/50 focus:outline-none focus:ring-2 focus:ring-red/20 transition-all"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-mono text-red uppercase mb-2">
                        Assunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-red/20 rounded-lg text-white placeholder-grey focus:border-red/50 focus:outline-none focus:ring-2 focus:ring-red/20 transition-all"
                        placeholder="Sobre o que deseja falar?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-mono text-red uppercase mb-2">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-black/50 border border-red/20 rounded-lg text-white placeholder-grey focus:border-red/50 focus:outline-none focus:ring-2 focus:ring-red/20 transition-all resize-none"
                        placeholder="Descreva sua mensagem aqui..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-red text-white font-mono uppercase rounded-lg hover:bg-red/80 hover:scale-[1.02] transition-all group"
                    >
                      <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                      Enviar Mensagem
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {/* Contact Details */}
              <div className="bg-red-dark/50 border border-red/20 rounded-lg p-8 mb-6 hover:border-red/40 transition-all">
                <h3 className="font-display text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.link}
                      className="flex items-center gap-4 p-4 bg-black/50 border border-red/20 rounded-lg hover:border-red/50 hover:scale-[1.02] transition-all group"
                    >
                      <div className="w-12 h-12 bg-red/20 rounded-lg flex items-center justify-center group-hover:bg-red/40 transition-all">
                        <info.icon className="text-red group-hover:scale-110 transition-transform" size={24} />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-grey uppercase">{info.label}</p>
                        <p className="text-white group-hover:text-red transition-colors">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-red-dark/50 border border-red/20 rounded-lg p-8 mb-6 hover:border-red/40 transition-all">
                <h3 className="font-display text-2xl font-bold text-white mb-6">Redes Sociais</h3>
                <div className="grid grid-cols-4 gap-4">
                  <a
                    href="#"
                    className="flex flex-col items-center gap-3 p-4 bg-black/50 border border-red/20 rounded-lg hover:border-red/50 hover:scale-110 transition-all group"
                  >
                    <FaDiscord className="text-red group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-xs text-grey group-hover:text-white transition-colors">Discord</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center gap-3 p-4 bg-black/50 border border-red/20 rounded-lg hover:border-red/50 hover:scale-110 transition-all group"
                  >
                    <FaXTwitter className="text-red group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-xs text-grey group-hover:text-white transition-colors">X</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center gap-3 p-4 bg-black/50 border border-red/20 rounded-lg hover:border-red/50 hover:scale-110 transition-all group"
                  >
                    <FaYoutube className="text-red group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-xs text-grey group-hover:text-white transition-colors">YouTube</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center gap-3 p-4 bg-black/50 border border-red/20 rounded-lg hover:border-red/50 hover:scale-110 transition-all group"
                  >
                    <FaInstagram className="text-red group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-xs text-grey group-hover:text-white transition-colors">Instagram</span>
                  </a>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-black/50 border border-red/30 rounded-lg p-6 hover:border-red/50 transition-all">
                <p className="font-mono text-xs text-red uppercase mb-2">Lei Rouanet</p>
                <p className="text-white mb-4">
                  Interessado em apoiar o projeto através da Lei Federal de Incentivo à Cultura?
                </p>
                <a
                  href="/#orcamento"
                  className="inline-flex items-center gap-2 text-red hover:text-white transition-colors group"
                >
                  Saiba mais sobre investimento
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContatoPage;
