import FadeIn from './FadeIn';

const SKILLS = [
  {
    number: '01',
    title: 'Containerization',
    icon: '🐳',
    skills: ['Docker', 'Docker Compose', 'Container Registry'],
    description:
      'Packaging applications into lightweight, portable containers. Multi-container orchestration, image optimization, and secure container workflows.',
    color: 'from-blue-400 to-cyan-400',
    bgGlow: 'rgba(59, 130, 246, 0.1)',
  },
  {
    number: '02',
    title: 'Orchestration',
    icon: '☸️',
    skills: ['Kubernetes', 'Helm', 'Pod Management'],
    description:
      'Managing containerized applications at scale. Automated deployment, scaling, and load balancing across clusters with zero downtime.',
    color: 'from-purple-400 to-violet-400',
    bgGlow: 'rgba(168, 85, 247, 0.1)',
  },
  {
    number: '03',
    title: 'Cloud Platforms',
    icon: '☁️',
    skills: ['AWS', 'EC2', 'S3', 'Lambda', 'EKS'],
    description:
      'Designing cloud-native architectures on AWS. Compute, storage, serverless, and managed Kubernetes services for highly available applications.',
    color: 'from-amber-400 to-orange-400',
    bgGlow: 'rgba(251, 191, 36, 0.1)',
  },
  {
    number: '04',
    title: 'Infrastructure as Code',
    icon: '⚙️',
    skills: ['Terraform', 'Ansible'],
    description:
      'Provisioning and managing infrastructure through code. Version-controlled, repeatable, and automated environment setups for any cloud provider.',
    color: 'from-emerald-400 to-green-400',
    bgGlow: 'rgba(52, 211, 153, 0.1)',
  },
  {
    number: '05',
    title: 'CI/CD Pipelines',
    icon: '🔄',
    skills: ['Jenkins', 'GitHub Actions'],
    description:
      'Automating build, test, and deployment workflows. Continuous integration and delivery pipelines that ship code faster and safer.',
    color: 'from-pink-400 to-rose-400',
    bgGlow: 'rgba(244, 114, 182, 0.1)',
  },
  {
    number: '06',
    title: 'GitOps & CD',
    icon: '🚀',
    skills: ['ArgoCD', 'Flux', 'GitOps Workflows'],
    description:
      'Git as the single source of truth for declarative infrastructure and applications. Automated sync and drift detection for Kubernetes clusters.',
    color: 'from-teal-400 to-emerald-400',
    bgGlow: 'rgba(45, 212, 191, 0.1)',
  },
  {
    number: '07',
    title: 'Monitoring & Logging',
    icon: '📊',
    skills: ['Prometheus', 'Grafana'],
    description:
      'Real-time infrastructure monitoring, alerting, and visualization. Custom dashboards and proactive issue detection before they impact users.',
    color: 'from-red-400 to-pink-400',
    bgGlow: 'rgba(248, 113, 113, 0.1)',
  },
  {
    number: '08',
    title: 'Networking',
    icon: '🌐',
    skills: ['VPC', 'DNS', 'Load Balancers', 'CDN', 'Firewall'],
    description:
      'Designing secure, scalable network architectures. Cloud networking, traffic management, and connectivity for distributed systems.',
    color: 'from-indigo-400 to-blue-400',
    bgGlow: 'rgba(99, 102, 241, 0.1)',
  },
  {
    number: '09',
    title: 'Scripting & Automation',
    icon: '🐧',
    skills: ['Bash', 'Python', 'Linux', 'YAML'],
    description:
      'Writing automation scripts for system administration, deployment tasks, and routine operations. Efficient Linux system management.',
    color: 'from-yellow-400 to-amber-400',
    bgGlow: 'rgba(250, 204, 21, 0.1)',
  },
  {
    number: '10',
    title: 'Version Control',
    icon: '📦',
    skills: ['Git', 'GitHub'],
    description:
      'Collaborative development with branching strategies, code reviews, and version management. Git workflows for infrastructure and applications.',
    color: 'from-cyan-400 to-blue-400',
    bgGlow: 'rgba(6, 182, 212, 0.1)',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative w-full px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particleFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Section Header */}
      <FadeIn delay={0} y={40}>
        <div className="text-center mb-16 sm:mb-24">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-mono tracking-[0.3em] text-blue-400/60 uppercase">
            / Skills
          </span>
          
          <h2
            className="font-black uppercase leading-[0.9] tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.2))',
            }}
          >
            Tech Stack
          </h2>
          
          <p className="mt-4 text-sm text-white/30 font-light tracking-wider max-w-md mx-auto">
            Tools and technologies I use to build, deploy, and scale
          </p>

          {/* Decorative line */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 bg-gradient-to-r from-transparent to-blue-400/40 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <div className="h-0.5 w-8 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <div className="h-0.5 w-8 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
            <div className="h-0.5 w-8 bg-gradient-to-r from-pink-400/40 to-transparent rounded-full" />
          </div>
        </div>
      </FadeIn>

      {/* Skills Grid */}
      <div className="mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {SKILLS.map((skill, i) => (
            <FadeIn key={skill.number} delay={i * 0.06} y={40}>
              <div
                className="group relative rounded-2xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 cursor-default"
                style={{
                  background: 'rgba(255, 255, 255, 0.015)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${skill.bgGlow}, transparent 60%)`,
                  }}
                />

                {/* Animated border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `1px solid ${skill.bgGlow.replace('0.1', '0.3')}`,
                  }}
                />

                <div className="relative">
                  {/* Number + Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-2xl md:text-3xl font-black text-white/[0.03] group-hover:text-white/[0.08] transition-all duration-500 leading-none">
                      {skill.number}
                    </span>
                    <span 
                      className="text-3xl md:text-4xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                      style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}
                    >
                      {skill.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg md:text-xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent mb-3`}
                  >
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/40 font-light leading-relaxed mb-5 group-hover:text-white/55 transition-colors duration-500">
                    {skill.description}
                  </p>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] md:text-[11px] font-mono text-white/30 bg-white/[0.02] border border-white/[0.04] rounded-lg px-2.5 py-1.5 group-hover:text-white/50 group-hover:border-white/10 group-hover:bg-white/[0.04] transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Corner shine effect on hover */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 100% 0%, ${skill.bgGlow}, transparent 70%)`,
                      borderRadius: '0 16px 0 0',
                    }}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <FadeIn delay={0.7} y={30}>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '10', label: 'Skills', icon: '🛠️' },
              { value: '30+', label: 'Tools', icon: '🔧' },
              { value: '∞', label: 'Learning', icon: '📚' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-2xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-sm p-5 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500"
              >
                <span className="text-2xl">{stat.icon}</span>
                <p className="mt-2 text-2xl md:text-3xl font-black text-white/80">{stat.value}</p>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Bottom quote */}
      <FadeIn delay={0.8} y={30}>
        <div className="mt-12 text-center">
          <div className="inline-block rounded-2xl border border-white/[0.04] bg-gradient-to-r from-white/[0.01] to-white/[0.02] backdrop-blur-sm px-8 py-4">
            <p className="text-xs md:text-sm font-mono text-white/25 italic">
              &gt; Infrastructure as Code. Automation as Lifestyle. Cloud as Playground.
            </p>
          </div>
        </div>
      </FadeIn>

      <style>{`
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          25% { transform: translateY(-30px) translateX(15px); opacity: 0.8; }
          50% { transform: translateY(-15px) translateX(-10px); opacity: 0.4; }
          75% { transform: translateY(-40px) translateX(5px); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
