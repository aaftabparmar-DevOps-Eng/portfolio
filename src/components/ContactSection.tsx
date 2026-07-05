import { Mail, Phone, Linkedin, Github, ArrowUpRight, MapPin } from 'lucide-react';
import FadeIn from './FadeIn';

interface ContactMethod {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  color: string;
  bgGlow: string;
  iconBg: string;
  iconColor: string;
}

const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aaftabparmar29@gmail.com',
    href: 'mailto:aaftabparmar29@gmail.com',
    color: 'from-blue-400 to-cyan-400',
    bgGlow: 'rgba(59, 130, 246, 0.1)',
    iconBg: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    iconColor: '#ffffff',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98981 80782',
    href: 'tel:+919898180782',
    color: 'from-green-400 to-emerald-400',
    bgGlow: 'rgba(52, 211, 153, 0.1)',
    iconBg: 'linear-gradient(135deg, #22c55e, #10b981)',
    iconColor: '#ffffff',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/aaftab-parmar',
    href: 'https://www.linkedin.com/in/aaftab-parmar-173941343/',
    color: 'from-blue-500 to-indigo-500',
    bgGlow: 'rgba(59, 130, 246, 0.1)',
    iconBg: 'linear-gradient(135deg, #2563eb, #4f46e5)',
    iconColor: '#ffffff',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@aaftabparmar-DevOps-Eng',
    href: 'https://github.com/aaftabparmar-DevOps-Eng',
    color: 'from-purple-400 to-pink-400',
    bgGlow: 'rgba(168, 85, 247, 0.1)',
    iconBg: 'linear-gradient(135deg, #a855f7, #ec4899)',
    iconColor: '#ffffff',
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/2 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <FadeIn y={40}>
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-mono tracking-[0.3em] text-blue-400/60 uppercase">
            / Contact
          </span>
          
          <h2
            className="font-black uppercase leading-[0.9] tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.2))',
            }}
          >
            Get In Touch
          </h2>
          
          <p className="mt-4 text-sm text-white/30 font-light tracking-wider max-w-md mx-auto">
            Let's build something amazing together
          </p>
        </div>
      </FadeIn>

      {/* Contact Cards Grid */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {CONTACT_METHODS.map((method, i) => {
          const Icon = method.icon;
          const isExternal = method.href.startsWith('http');

          return (
            <FadeIn key={method.label} delay={i * 0.1} y={30}>
              <a
                href={method.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group relative flex flex-col justify-between gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-sm p-6 sm:p-7 md:p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
              >
                {/* Card glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${method.bgGlow}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex items-start justify-between">
                  
                  {/* 3D ANIMATED ICON */}
                  <div 
                    className="rounded-xl p-3.5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg"
                    style={{
                      background: method.iconBg,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                      transform: 'perspective(200px) rotateY(0deg)',
                      transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'perspective(200px) rotateY(15deg) rotateX(-5deg) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'perspective(200px) rotateY(0deg) rotateX(0deg) scale(1)';
                    }}
                  >
                    <Icon
                      className="transition-all duration-500"
                      style={{ color: method.iconColor }}
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <ArrowUpRight
                      className="text-white/20 group-hover:text-white/60 group-hover:rotate-45 transition-all duration-500"
                      size={20}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <div className="relative z-10 flex flex-col gap-2">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/30 group-hover:text-white/50 transition-colors duration-500">
                    {method.label}
                  </span>
                  <span
                    className={`font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent break-all leading-tight`}
                    style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)' }}
                  >
                    {method.value}
                  </span>
                </div>

                {/* Bottom gradient line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </FadeIn>
          );
        })}
      </div>

      {/* Location Card */}
      <FadeIn delay={0.5} y={30}>
        <div className="mt-8 mx-auto max-w-5xl">
          <div 
            className="relative rounded-2xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-sm p-6 sm:p-8 overflow-hidden group hover:scale-[1.01] transition-all duration-500"
          >
            {/* Glow effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 10% 50%, rgba(59, 130, 246, 0.06), transparent 60%)',
              }}
            />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              {/* Location Icon - 3D Animated */}
              <div 
                className="shrink-0 rounded-2xl p-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.1)',
                  transform: 'perspective(200px) rotateY(0deg)',
                  transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'perspective(200px) rotateY(15deg) rotateX(-5deg) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(200px) rotateY(0deg) rotateX(0deg) scale(1)';
                }}
              >
                <MapPin
                  className="text-blue-400 group-hover:text-blue-300 transition-colors duration-500"
                  size={28}
                  strokeWidth={1.5}
                />
              </div>

              {/* Location Details */}
              <div className="flex-1">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/30 mb-2 block">
                  Location
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white/80 group-hover:text-white transition-colors duration-500">
                  Surat, Gujarat
                </h3>
                <p className="text-sm text-white/30 font-light tracking-wider mt-1">
                  🇮🇳 India
                </p>
              </div>

              {/* Decorative dots */}
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-pink-400/60" />
              </div>

              {/* Animated pulse ring */}
              <div className="hidden sm:block shrink-0">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-blue-400 animate-ping opacity-75" />
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/40 via-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </FadeIn>

      {/* Footer */}
      <FadeIn delay={0.7} y={20}>
        <div className="mx-auto mt-16 sm:mt-20 max-w-5xl flex flex-col items-center gap-3 border-t border-white/[0.04] pt-8 text-center sm:flex-row sm:justify-between">
          <span className="text-xs font-mono tracking-wider text-white/20">
            © 2026 Aaftab Parmar
          </span>
          <span className="text-xs font-mono tracking-wider text-white/20">
            DevOps & Cloud Engineer
          </span>
          <span className="text-xs font-mono tracking-wider text-white/20">
            Built with ❤️
          </span>
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactSection;
