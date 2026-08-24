import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

interface DashboardProject {
  number: string;
  tag: string;
  name: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  codeUrl: string;
  liveLabel: string;
  image: string;
  accent: string;
}

const DASHBOARDS: DashboardProject[] = [
  {
    number: '01',
    tag: 'Deployed on Streamlit Cloud',
    name: 'Multi-Domain Analytics Portfolio',
    description:
      'A multi-page interactive analytics platform delivering domain-specific dashboards with 2D/3D visualizations, geographic maps, and KPI scorecards across E-commerce, Travel, and Food Delivery (Zomato) datasets. Engineered with Pandas/NumPy data cleaning pipelines and deployed end-to-end on Streamlit Cloud.',
    techStack: ['Streamlit', 'Plotly', 'Python', 'Pandas', 'NumPy', 'GitHub'],
    liveUrl: 'https://app-analytics-portfolio-j9sedvn62aob8o4ozooy5u.streamlit.app/',
    codeUrl: 'https://github.com/harsh0904-dot/streamlit-analytics-portfolio',
    liveLabel: 'Open Live App',
    image: '/multidomain_analytics.png',
    accent: '#4F8EF7',
  },
  {
    number: '02',
    tag: 'Deployed on Render',
    name: 'Live Monitoring Analytics Dashboard',
    description:
      'A production-ready, multi-page analytics dashboard with modular architecture, persistent session state, and interactive 2D/3D visualizations using Plotly and PyVista for near real-time KPI monitoring. Configured with runtime pinning, dependency compatibility, and GitHub auto-deploy workflow on Render.',
    techStack: ['Streamlit', 'Plotly', 'PyVista', 'Python', 'Pandas', 'Render'],
    liveUrl: 'https://live-monitoring-analytics-dashboard.onrender.com/',
    codeUrl: 'https://github.com/harsh0904-dot/Live_Monitoring_Analytics_Dashboard',
    liveLabel: 'Open Live App',
    image: '/live_monitoring.png',
    accent: '#56C596',
  },
];

const DashboardCard = ({ project, reverse }: { project: DashboardProject; reverse?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 rounded-[40px] border-2 border-[#D7E2EA]/10 bg-[#0F0F13] p-6 sm:p-8 md:p-10 hover:border-[#D7E2EA]/20 transition-all duration-500`}
  >
    {/* Text column */}
    <div className="flex flex-col justify-between gap-6 md:w-[45%] shrink-0">
      {/* Top: Tag + Number */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span
            className="h-2 w-2 rounded-full animate-pulse"
            style={{ background: project.accent }}
          />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#D7E2EA]/50">
            {project.tag}
          </span>
        </div>

        <div className="flex items-start gap-4">
          <span
            className="font-black leading-none text-[#D7E2EA]/10 shrink-0"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            {project.number}
          </span>
          <h3
            className="font-bold uppercase text-[#D7E2EA] leading-tight pt-1"
            style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.9rem)' }}
          >
            {project.name}
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#D7E2EA]/60 leading-relaxed font-light mt-1">
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/70 hover:border-[#D7E2EA]/30 hover:text-[#D7E2EA] transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-[#0C0C0C] transition-all duration-300 hover:opacity-90 hover:scale-[1.03] active:scale-95"
          style={{ background: project.accent }}
        >
          <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          {project.liveLabel}
        </a>
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/20 px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-[#D7E2EA]/80 transition-all duration-300 hover:border-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:scale-[1.03] active:scale-95"
        >
          <Github className="h-3.5 w-3.5" />
          View Code
        </a>
      </div>
    </div>

    {/* Preview image column */}
    <div className="relative flex-1 min-h-[240px] sm:min-h-[300px] md:min-h-0 rounded-[28px] overflow-hidden border border-[#D7E2EA]/10 group/img">
      {/* Browser chrome bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-4 py-2.5 bg-[#0C0C0C]/90 border-b border-[#D7E2EA]/10 select-none">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span
          className="text-[9px] sm:text-[10px] text-[#D7E2EA]/35 uppercase tracking-widest ml-3 font-mono truncate max-w-[65%]"
        >
          {project.liveUrl}
        </span>
        <ExternalLink className="ml-auto h-3 w-3 text-[#D7E2EA]/30" />
      </div>

      {/* Preview image */}
      <img
        src={project.image}
        alt={`${project.name} live preview`}
        className="w-full h-full object-cover object-top pt-10 transition-transform duration-700 ease-out group-hover/img:scale-[1.04]"
        loading="lazy"
        draggable={false}
      />

      {/* Hover overlay — click to open live app */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"
        style={{ background: 'rgba(0,0,0,0.55)' }}
        aria-label={`Open ${project.name} live app`}
      >
        <div
          className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-md"
        >
          <ExternalLink className="h-4 w-4" />
          Open Live App
        </div>
      </a>
    </div>
  </motion.div>
);

const DashboardsSection = () => (
  <section
    id="dashboards"
    className="relative w-full bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
  >
    {/* Subtle background glow */}
    <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4F8EF7]/[0.025] blur-[160px]" />

    <div className="mx-auto max-w-7xl relative z-10">
      {/* Section heading */}
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Dashboards
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p
          className="text-center font-light uppercase tracking-widest text-[#D7E2EA]/50 mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1rem)' }}
        >
          Live &amp; deployed — click to explore
        </p>
      </FadeIn>

      {/* Dashboard cards */}
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
        {DASHBOARDS.map((project, i) => (
          <DashboardCard key={project.number} project={project} reverse={i % 2 !== 0} />
        ))}
      </div>
    </div>
  </section>
);

export default DashboardsSection;
