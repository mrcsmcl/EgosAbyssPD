import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false, vx: 0, vy: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking with velocity
    const handleMouseMove = (e: MouseEvent) => {
      const vx = e.clientX - lastMousePos.current.x;
      const vy = e.clientY - lastMousePos.current.y;
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true, vx, vy };
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Brain wireframe animation
    const particles: { x: number; y: number; vx: number; vy: number; connections: number[]; originalX: number; originalY: number }[] = [];
    const numParticles = 80;
    const connectionDistance = 120;

    // Initialize particles in brain-like shape
    for (let i = 0; i < numParticles; i++) {
      const angle = (i / numParticles) * Math.PI * 2;
      const radius = 150 + Math.random() * 100;
      const x = canvas.width / 2 + Math.cos(angle) * radius * (0.8 + Math.random() * 0.4);
      const y = canvas.height / 2 + Math.sin(angle) * radius * (1 + Math.random() * 0.3);
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        connections: [],
        originalX: x,
        originalY: y,
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.005;

      // Update particles
      particles.forEach((p, i) => {
        // Gentle floating motion
        p.x += p.vx + Math.sin(time + i) * 0.2;
        p.y += p.vy + Math.cos(time + i * 0.5) * 0.2;

        // Mouse interaction
        if (mouseRef.current.active) {
          const mouseDistX = mouseRef.current.x - p.x;
          const mouseDistY = mouseRef.current.y - p.y;
          const mouseDist = Math.sqrt(mouseDistX * mouseDistX + mouseDistY * mouseDistY);
          const mouseSpeed = Math.sqrt(mouseRef.current.vx ** 2 + mouseRef.current.vy ** 2);
          
          if (mouseDist < 250) {
            // Fast mouse = repulsion (explosion effect)
            if (mouseSpeed > 15) {
              const repelForce = (250 - mouseDist) / 250 * mouseSpeed * 0.03;
              p.vx -= (mouseDistX / mouseDist) * repelForce;
              p.vy -= (mouseDistY / mouseDist) * repelForce;
            } 
            // Slow/normal mouse = stronger attraction
            else {
              const attractForce = (250 - mouseDist) / 250 * 1.2;
              p.vx += (mouseDistX / mouseDist) * attractForce * 0.3;
              p.vy += (mouseDistY / mouseDist) * attractForce * 0.3;
            }
          }
        }

        // Restore to original position (elastic effect)
        const restoreDistX = p.originalX - p.x;
        const restoreDistY = p.originalY - p.y;
        const restoreDist = Math.sqrt(restoreDistX * restoreDistX + restoreDistY * restoreDistY);
        if (restoreDist > 10) {
          p.vx += (restoreDistX / restoreDist) * 0.02;
          p.vy += (restoreDistY / restoreDist) * 0.02;
        }

        // Keep particles in brain shape
        const dx = p.x - canvas.width / 2;
        const dy = p.y - canvas.height / 2;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 320) {
          p.vx -= dx * 0.001;
          p.vy -= dy * 0.001;
        }

        // Friction to prevent excessive speed
        p.vx *= 0.95;
        p.vy *= 0.95;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#d31c1c';
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(211, 28, 28, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToProjeto = () => {
    const element = document.querySelector('#projeto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Status Labels removed */}

        {/* Main Title - Fonte Serif estilo Versão 02 */}
        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold text-white mb-2 animate-slide-up stagger-1 tracking-tight">
          EGO'S
        </h1>
        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold text-red mb-8 animate-slide-up stagger-2 tracking-tight">
          ABYSS
        </h1>

        {/* Subtitle - Fonte Serif */}
        <p className="font-display text-2xl sm:text-3xl md:text-4xl text-grey mb-6 animate-slide-up stagger-3 tracking-wide">
          O Abismo do Ego
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-grey max-w-2xl mx-auto mb-12 animate-slide-up stagger-4 leading-relaxed">
          Mergulhe nas profundezas da mente. Um jogo de{' '}
          <span className="text-red">terror psicológico cooperativo</span> onde a
          realidade é apenas uma ilusão do seu subconsciente.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={scrollToProjeto}
          className="flex flex-col items-center text-grey hover:text-white transition-colors group"
        >
          <span className="font-mono text-xs uppercase tracking-wider mb-2 group-hover:text-red transition-colors">
            DESCER
          </span>
          <ChevronDown size={24} className="group-hover:text-red transition-colors" />
        </button>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-24 left-4 w-16 h-16 border-l-2 border-t-2 border-red/30 animate-pulse-slow" />
      <div className="absolute top-24 right-4 w-16 h-16 border-r-2 border-t-2 border-red/30 animate-pulse-slow" />
      <div className="absolute bottom-24 left-4 w-16 h-16 border-l-2 border-b-2 border-red/30 animate-pulse-slow" />
      <div className="absolute bottom-24 right-4 w-16 h-16 border-r-2 border-b-2 border-red/30 animate-pulse-slow" />
    </section>
  );
};

export default Hero;
