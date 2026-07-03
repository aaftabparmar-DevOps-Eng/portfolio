import FadeIn from './FadeIn';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex w-full items-center overflow-hidden px-6 md:px-10 py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating DevOps icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { icon: '🐳', x: '5%', y: '15%', delay: 0 },
          { icon: '☸️', x: '90%', y: '20%', delay: 0.5 },
          { icon: '☁️', x: '8%', y: '75%', delay: 1 },
          { icon: '⚙️', x: '85%', y: '70%', delay: 1.5 },
          { icon: '🐧', x: '50%', y: '10%', delay: 0.8 },
          { icon: '🔄', x: '45%', y: '85%', delay: 2 },
        ].map((item, i) => (
          <span
            key={i}
            className="absolute text-2xl sm:text-3xl opacity-[0.07] hover:opacity-20 transition-opacity duration-1000"
            style={{
              left: item.x,
              top: item.y,
              animation: `float3D ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${item.delay}s`,
            }}
          >
            {item.icon}
          </span>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        
        {/* Section Label */}
        <FadeIn delay={0} y={30}>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-blue-400/60 uppercase">
              / About
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-400/20 to-transparent" />
          </div>
        </FadeIn>

        {/* 3D Glass Card - Main About */}
        <FadeIn delay={0.2} y={50}>
          <div 
            className="relative rounded-3xl p-8 md:p-12 lg:p-16"
            style={{
              background: 'rgba(255, 255, 255, 0.015)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
              transform: 'perspective(1000px) rotateX(1deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Card hover glow */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.06), transparent 60%)',
              }}
            />

            <div className="relative">
              {/* Heading */}
              <h2
                className="font-black uppercase leading-[0.9] tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                style={{ 
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  filter: 'drop-shadow(0 0 60px rgba(168, 85, 247, 0.3))',
                }}
              >
                About Me
              </h2>

              {/* Subtitle */}
              <p className="mt-2 text-sm sm:text-base font-light text-white/35 uppercase tracking-[0.25em]">
                DevOps & Cloud Engineer
              </p>

              {/* Decorative line */}
              <div className="mt-8 flex items-center gap-2">
                <div className="h-0.5 w-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                <div className="h-0.5 w-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                <div className="h-0.5 w-3 bg-gradient-to-r from-pink-400/60 to-transparent rounded-full" />
              </div>

              {/* About Text */}
              <p 
                className="mt-8 font-light leading-relaxed text-white/60"
                style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}
              >
                I'm Aaftab Parmar, a BCA 3rd-year student with a strong passion for DevOps, Cloud Engineering, and automation. I enjoy building scalable, reliable, and cloud-native systems that bridge the gap between development and operations. From containerizing applications with Docker to orchestrating them with Kubernetes, I love transforming complex infrastructure into efficient, automated environments. My experience includes working with AWS, Terraform, Ansible, Linux, and CI/CD pipelines, with a constant focus on Infrastructure as Code and continuous delivery. I believe in continuous learning, solving real-world problems, and creating systems that are resilient, maintainable, and built to scale. Every project I work on is an opportunity to learn, innovate, and move one step closer to becoming a world-class Cloud and DevOps Engineer.
              </p>

              {/* Status badge */}
              <div className="mt-8 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-mono text-white/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 3D Education Card - Separate */}
        <FadeIn delay={0.5} y={50}>
          <div 
            className="relative mt-6 rounded-2xl p-6 md:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05))',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(15px)',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
              transform: 'perspective(800px) rotateX(-1deg) rotateY(1deg)',
              transformStyle: 'preserve-3d',
              transition: 'all 0.5s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(800px) rotateX(-1deg) rotateY(1deg) scale(1)';
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              {/* University Icon */}
              <div className="shrink-0">
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.15)',
                  }}
                >
                  🎓
                </div>
              </div>

              {/* Education Details */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-blue-400/60 uppercase">
                    Education
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-400/15 to-transparent" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white/90 mt-2">
                  Bachelor of Computer Applications
                </h3>
                
                <p className="text-sm md:text-base font-medium text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mt-1">
                  Vidhyadeep University
                </p>
                
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <span className="text-xs font-mono text-white/40">
                    3rd Year
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs font-mono text-white/40">
                    2024 - Present
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-green-400/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Pursuing
                  </span>
                </div>
              </div>

              {/* Animated glow orb behind icon on hover */}
              <div className="hidden md:block">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @keyframes float3D {
          0%, 100% { 
            transform: translateY(0) translateZ(0) rotate(0deg); 
          }
          25% { 
            transform: translateY(-25px) translateZ(40px) rotate(5deg); 
          }
          50% { 
            transform: translateY(-10px) translateZ(20px) rotate(-3deg); 
          }
          75% { 
            transform: translateY(-30px) translateZ(50px) rotate(2deg); 
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
