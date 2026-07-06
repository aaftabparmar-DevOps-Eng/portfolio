import { useEffect, useRef } from 'react';
import FadeIn from './FadeIn';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let fired = false;
    const goToAbout = () => {
      if (fired) return;
      fired = true;
      const about = document.getElementById('about');
      if (about) about.scrollIntoView({ behavior: 'auto', block: 'start' });
    };
    const onWheel = (e: WheelEvent) => {
      if (fired) return;
      if (e.deltaY <= 0) return;
      if (window.scrollY > 50) return;
      e.preventDefault();
      goToAbout();
    };
    const onKey = (e: KeyboardEvent) => {
      if (fired) return;
      if (window.scrollY > 50) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToAbout();
      }
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image - Full Screen */}
      <img src="/aaftab.png" alt="" className="absolute inset-0 h-full w-full object-cover scale-110 blur-2xl opacity-60" />
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Right Side Image - Hidden on mobile */}
      <div className="absolute inset-0 hidden md:flex items-center justify-end">
        <img src="/aaftab.png" alt="Aaftab Parmar" className="relative z-10 h-[85vh] w-auto object-contain rounded-2xl shadow-2xl shadow-black/50 mr-4 md:mr-10" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Content Layer */}
      <div className="relative z-20 flex min-h-screen flex-col px-5 sm:px-6 md:px-10 py-6">
        
        {/* Navigation - Scrollable on mobile */}
        <FadeIn delay={0} y={-20} className="relative">
          <div className="flex items-center gap-1 overflow-x-auto pb-2 scrollbar-hide">
            <a href="#about" className="group relative flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-2.5 py-2 hover:bg-white/10 hover:border-white/30 transition-all duration-300 shrink-0">
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 text-[8px] font-bold text-white">01</span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] text-white/70 group-hover:text-white transition-colors">About</span>
            </a>
            <span className="text-white/10 text-xs">|</span>
            <a href="#services" className="group relative flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-2.5 py-2 hover:bg-white/10 hover:border-white/30 transition-all duration-300 shrink-0">
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 text-[8px] font-bold text-white">02</span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] text-white/70 group-hover:text-white transition-colors">Skills</span>
            </a>
            <span className="text-white/10 text-xs">|</span>
            <a href="#projects" className="group relative flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-2.5 py-2 hover:bg-white/10 hover:border-white/30 transition-all duration-300 shrink-0">
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 text-[8px] font-bold text-white">03</span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] text-white/70 group-hover:text-white transition-colors">Projects</span>
            </a>
            <span className="text-white/10 text-xs">|</span>
            <a href="#contact" className="group relative flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-2.5 py-2 hover:bg-white/10 hover:border-white/30 transition-all duration-300 shrink-0">
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-[8px] font-bold text-white">04</span>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] text-white/70 group-hover:text-white transition-colors">Contact</span>
            </a>
            
            {/* Resume Button */}
            <span className="text-white/10 text-xs">|</span>
            <a
              href="/aaftab.pdf"
              download="Aaftab_Parmar_Resume.pdf"
              className="group relative flex items-center gap-1.5 rounded-full border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-2.5 py-2 hover:from-blue-500/20 hover:to-purple-500/20 hover:border-white/30 hover:scale-105 transition-all duration-300 shrink-0"
            >
              <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] text-white/70 group-hover:text-white transition-colors">
                Resume
              </span>
            </a>
          </div>
        </FadeIn>

        {/* Main Content - Centered properly */}
        <div className="flex flex-1 flex-col justify-center -mt-8">
          <div className="w-full max-w-7xl">
            
            <FadeIn delay={0.3} y={25}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1.5 mb-2 group hover:bg-white/10 hover:border-purple-400/30 transition-all duration-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
                <span className="text-xs sm:text-sm font-light tracking-[0.2em] text-white/50 uppercase group-hover:text-white/80 transition-colors duration-500">
                  My name is
                </span>
                <span className="text-purple-400/40 text-sm">→</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} y={35}>
              <h1 className="font-light tracking-wide text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                Aaftab Parmar
              </h1>
            </FadeIn>

            <FadeIn delay={0.65} y={20}>
              <p className="mt-2 text-[11px] sm:text-xs font-light tracking-[0.2em] text-white/50 uppercase">
                DevOps & Cloud Engineer
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-0.5 w-10 bg-gradient-to-r from-purple-400 to-purple-400/0 rounded-full" />
                <div className="w-1 h-1 rounded-full bg-purple-400" />
                <div className="h-0.5 w-4 bg-gradient-to-r from-purple-400 to-transparent rounded-full" />
              </div>
            </FadeIn>

            <FadeIn delay={0.85} y={25}>
              <p className="mt-4 text-sm sm:text-base font-light leading-relaxed text-white/60 max-w-lg">
                I take raw infrastructure and turn it into scalable, automated systems. Using modern DevOps tools and cloud platforms, I build environments that deploy faster, scale effortlessly, and run reliably.
              </p>
            </FadeIn>

            <FadeIn delay={1.1} y={30}>
              <div className="mt-6">
                <h2 className="font-light tracking-wider" style={{ fontSize: 'clamp(1.1rem, 3vw, 2rem)', background: 'linear-gradient(to right, #60a5fa, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Welcome to my portfolio.
                </h2>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pb-4">
          <FadeIn delay={1.3} y={20}>
            <a href="#about" className="group flex flex-col items-center gap-2">
              <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.3em] text-white/50 transition group-hover:text-white/70">Scroll</span>
              <div className="relative h-10 w-px overflow-hidden bg-white/20">
                <span className="absolute inset-x-0 top-0 h-1/2 w-full bg-white/70" style={{ animation: 'scrollLine 1.8s ease-in-out infinite' }} />
              </div>
            </a>
          </FadeIn>
        </div>
      </div>

      <style>{`@keyframes scrollLine { 0% { transform: translateY(-100%); } 100% { transform: translateY(200%); } }`}</style>
    </section>
  );
};

export default HeroSection;
