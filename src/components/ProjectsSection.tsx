import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  description: string;
  githubUrl: string;
  image: string;
  tech: string[];
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'DevOps · Infrastructure',
    name: 'CapitalX',
    description: 'A comprehensive DevOps infrastructure project with automated deployment pipelines, container orchestration, and cloud-native architecture.',
    githubUrl: 'https://github.com/aaftabparmar-DevOps-Eng/CapitalX.git',
    image: '/capitalx.png',
    tech: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'],
  },
  {
    number: '02',
    category: 'Cloud · Full Stack',
    name: 'Wanderlust',
    description: 'Mega travel application project showcasing cloud infrastructure, microservices architecture, and scalable deployment strategies.',
    githubUrl: 'https://github.com/aaftabparmar-DevOps-Eng/Wanderlust-Mega-Project.git',
    image: '/wanderlust.png',
    tech: ['AWS', 'Microservices', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    number: '03',
    category: 'DevOps · Automation',
    name: 'Online Shopping App',
    description: 'E-commerce application with automated deployment, monitoring, and scaling. Built with modern DevOps practices and cloud infrastructure.',
    githubUrl: 'https://github.com/aaftabparmar-DevOps-Eng/online_shopping_app.git',
    image: '/onlineshop.png',
    tech: ['Docker', 'Jenkins', 'AWS', 'Terraform', 'Ansible'],
  },
  {
    number: '04',
    category: 'AI · Cloud Native',
    name: 'AI-Powered Docker',
    description: 'Advanced Docker implementation with AI integration, temporal agents, and automated container management using cutting-edge technologies.',
    githubUrl: 'https://github.com/aaftabparmar-DevOps-Eng/strands-temporal-agents.git',
    image: '/ai-docker.png',
    tech: ['Docker', 'AI/ML', 'Python', 'Temporal', 'Cloud'],
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

const ProjectCard = ({ project, index, total, containerRef }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky w-full"
      style={{ 
        top: `${96 + index * 28}px`,
        height: '85vh',
      }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto h-full w-full flex flex-col gap-4 sm:gap-6 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/[0.06] bg-[#0C0C0C] p-5 sm:p-6 md:p-8 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl" />
        </div>

        {/* TOP ROW - Number + Category + Name + GitHub */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:justify-between gap-3 sm:gap-6 shrink-0">
          <div className="flex flex-row items-start gap-3 sm:gap-6 md:gap-10 min-w-0 w-full">
            
            {/* 3D ANIMATED NUMBER - Full rotate, wapas same, dark color */}
            <div
              className="shrink-0 font-black leading-none select-none"
              style={{ 
                fontSize: 'clamp(2.5rem, 10vw, 140px)',
                perspective: '500px',
              }}
            >
              <motion.span
                className="block"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{
                  rotateX: isHovered ? [0, 360, 0] : 0,
                  rotateY: isHovered ? [0, 180, 0] : 0,
                  scale: isHovered ? 1.1 : 1,
                  color: isHovered ? 'rgba(59, 130, 246, 0.12)' : 'rgba(255,255,255,0.05)',
                }}
                transition={{
                  duration: isHovered ? 1.5 : 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {project.number}
              </motion.span>
            </div>

            <div className="flex flex-col gap-1 sm:gap-3 pt-1 sm:pt-3 md:pt-4 min-w-0 flex-1">
              <span
                className="font-light uppercase tracking-widest text-blue-400/40"
                style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-white leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* 3D ANIMATED GITHUB BUTTON - Color Highlighted */}
          <div className="shrink-0 self-start sm:self-auto pt-1 sm:pt-2 md:pt-3 w-full sm:w-auto">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2.5 sm:px-6 sm:py-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.1em] w-full sm:w-auto"
              style={{ perspective: '300px' }}
              animate={{
                rotateY: isHovered ? [0, 360, 0] : 0,
                scale: isHovered ? 1.05 : 1,
                borderColor: isHovered ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255,255,255,0.1)',
                backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255,255,255,0.05)',
                color: isHovered ? '#93c5fd' : 'rgba(255,255,255,0.6)',
                boxShadow: isHovered ? '0 0 25px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.1)' : 'none',
              }}
              transition={{
                duration: isHovered ? 1.2 : 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <motion.svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                animate={{
                  rotateZ: isHovered ? [0, 360, 0] : 0,
                  scale: isHovered ? 1.2 : 1,
                  color: isHovered ? '#60a5fa' : 'currentColor',
                }}
                transition={{ duration: isHovered ? 0.8 : 0.3, ease: 'easeInOut' }}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </motion.svg>
              <motion.span
                animate={{
                  color: isHovered ? '#93c5fd' : 'rgba(255,255,255,0.6)',
                }}
              >
                GitHub
              </motion.span>
            </motion.a>
          </div>
        </div>

        {/* Description + Tech Tags */}
        <div className="relative z-10 shrink-0">
          <p
            className="text-white/35 font-light leading-relaxed max-w-2xl mb-3"
            style={{ fontSize: 'clamp(0.75rem, 1.1vw, 0.95rem)' }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-[11px] font-mono text-white/25 bg-white/[0.02] border border-white/[0.04] rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* IMAGE - Full visible, object-contain */}
        <div className="relative z-10 flex-1 min-h-0 rounded-3xl overflow-hidden border border-white/[0.04] bg-black/20">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="w-full h-full object-contain"
            loading="lazy"
            draggable={false}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.parentElement) {
                target.parentElement.innerHTML = '<div class="h-full w-full flex items-center justify-center text-white/10 text-6xl">🚀</div>';
              }
            }}
          />
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      className="relative z-10 w-full bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <FadeIn y={40}>
        <div className="text-center mb-16 sm:mb-20 md:mb-28">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-mono tracking-[0.3em] text-blue-400/60 uppercase">
            / Projects
          </span>
          <h2
            className="font-black uppercase leading-[0.9] tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.2))',
            }}
          >
            Featured Work
          </h2>
        </div>
      </FadeIn>

      {/* Cards Container */}
      <div ref={containerRef} className="mx-auto max-w-7xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            containerRef={containerRef}
          />
        ))}
      </div>

      {/* GitHub CTA */}
      <FadeIn y={30}>
        <div className="text-center mt-12">
          <a
            href="https://github.com/aaftabparmar-DevOps-Eng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-3 text-xs font-mono text-white/40 uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 group"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            More on GitHub
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </FadeIn>
    </section>
  );
};

export default ProjectsSection;
