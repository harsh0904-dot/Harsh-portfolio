import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  buttonLabel?: string;
  col1Image2?: string;
  col2Image?: string;
  isPowerBI?: boolean;
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'Analytics & Dashboarding',
    name: 'Multi-Domain Analytics Portfolio',
    description: 'Built and deployed a multi-page interactive analytics platform using Streamlit and Plotly, delivering domain-specific dashboards with 2D/3D visualizations, geographic maps, and KPI scorecards for E-commerce, Travel, and Food Delivery (Zomato) datasets.',
    liveUrl: 'https://github.com/harsh0904-dot/streamlit-analytics-portfolio',
    buttonLabel: 'View Code',
    techStack: ['Streamlit', 'Plotly', 'Python', 'Pandas', 'NumPy'],
    col1Image2: '/code_editor_generic.png',
    col2Image: '/multidomain_analytics.png',
  },
  {
    number: '02',
    category: 'Real-Time KPI Monitoring',
    name: 'Live Monitoring Analytics Dashboard',
    description: 'Designed and deployed a production-ready, multi-page analytics dashboard using Streamlit with modular architecture, persistent session state, caching, and interactive 2D/3D visualizations (Plotly, PyVista) to support near real-time KPI monitoring and operational decision-making.',
    liveUrl: 'https://github.com/harsh0904-dot/Live_Monitoring_Analytics_Dashboard',
    buttonLabel: 'View Code',
    techStack: ['Python', 'Streamlit', 'Plotly', 'PyVista', 'Pandas', 'NumPy'],
    col1Image2: '/code_editor_generic.png',
    col2Image: '/live_monitoring.png',
  },
  {
    number: '03',
    category: 'Business Intelligence',
    name: 'Multi-Domain Power BI Analytics Portfolio',
    description: 'Designed and delivered 5 end-to-end Power BI dashboards (Retail, Finance, Marketing, Healthcare, HR) via a complete SQL → Python → Power BI/DAX workflow, producing KPI-driven executive reporting on revenue, risk, ROI, patient outcomes, and workforce attrition.',
    liveUrl: 'https://github.com/harsh0904-dot/Data-Analytics-Projects',
    buttonLabel: 'View Code',
    techStack: ['SQL', 'Python', 'Power BI', 'DAX'],
    isPowerBI: true,
  },
  {
    number: '04',
    category: 'Data Engineering',
    name: 'ETL & Analytics Platform for Test Management',
    description: 'Built an end-to-end data warehouse integrating multi-source QA data through automated ETL workflows and statistical analysis, enabling cross-project reporting and trend analysis for 15+ engineering teams.',
    techStack: ['Python', 'PostgreSQL', 'Grafana', 'REST APIs'],
    col1Image2: '/code_editor_generic.png',
    col2Image: '/etl_platform_one.png',
  },
  {
    number: '05',
    category: 'Streaming Data Pipelines',
    name: 'Real-Time Weather Alert & Monitoring System',
    description: 'Architected a scalable streaming pipeline using Apache Kafka for real-time data ingestion, with automated Telegram alerts and interactive dashboards serving 500+ users at sub-second latency.',
    techStack: ['Apache Kafka', 'PostgreSQL', 'Superset', 'Telegram API'],
    liveUrl: 'https://github.com/harsh0904-dot/Real-Time-Alert-Mechanism-System',
    buttonLabel: 'View Code',
    col1Image2: '/code_editor_generic.png',
    col2Image: '/weather_alert_one.png',
  },
  {
    number: '06',
    category: 'Machine Learning',
    name: 'Diabetes Prediction Model with Explainability',
    description: 'Achieved 85% prediction accuracy using ensemble methods and GridSearchCV hyperparameter tuning; applied SHAP and LIME so healthcare stakeholders could interpret feature importance behind predictions.',
    techStack: ['XGBoost', 'Random Forest', 'SHAP', 'LIME'],
    liveUrl: 'https://github.com/harsh0904-dot/Machine-Learning-Research-Paper',
    buttonLabel: 'View Code',
    col1Image2: '/code_editor_generic.png',
    col2Image: '/diabetes_model_one.png',
  },
  {
    number: '07',
    category: 'Natural Language Processing',
    name: 'Smart Campus Chatbot',
    description: 'Engineered a chatbot handling 100+ query types with 90%+ intent classification accuracy, integrated with campus databases for real-time schedule and resource lookups.',
    techStack: ['Python', 'NLP', 'Database Integration'],
    liveUrl: 'https://github.com/harsh0904-dot/Chatbot-Assistant',
    buttonLabel: 'View Code',
    col1Image2: '/code_editor_generic.png',
    col2Image: '/chatbot_one.png',
  },
];

interface PowerBIDomain {
  key: string;
  label: string;
  title: string;
  image: string;
  highlight: string;
  kpis: { label: string; value: string }[];
}

const POWERBI_DOMAINS: PowerBIDomain[] = [
  {
    key: 'finance',
    label: 'Finance / Retail',
    title: 'Customer & Loan Analytics',
    image: '/Customer Analytics.jpg',
    highlight: 'Analyzed credit loan data to assess home ownership distributions, employment length, and average annual income by loan grade.',
    kpis: [
      { label: 'Avg Loan Amount', value: '$11.30K' },
      { label: 'Total Members', value: '38.58K' },
      { label: 'Avg Annual Income', value: '$69.64K' },
      { label: 'Avg Installment', value: '$326.86' },
    ],
  },
  {
    key: 'marketing',
    label: 'Marketing',
    title: 'Marketing Executive Overview',
    image: '/Marketing Executive Overview.jpg',
    highlight: 'Aggregated cross-platform ad campaigns to showcase ROAS vs Profit, Conversions by Objective, and revenue vs ad spend trends.',
    kpis: [
      { label: 'Total Profit', value: '$240.70M' },
      { label: 'Total Revenue', value: '$284.16M' },
      { label: 'Avg CTR', value: '2.31%' },
      { label: 'Total Ad Spend', value: '$43.46M' },
    ],
  },
  {
    key: 'healthcare',
    label: 'Healthcare',
    title: 'Hospital Financial Performance',
    image: '/Financial & Hospital Performance.jpg',
    highlight: 'Visualized patient outcomes and insurance claims distributions with treatment cost contribution waterfall charts and Admission rank streams.',
    kpis: [
      { label: 'Insurance Claimed', value: '351' },
      { label: 'Total Patients', value: '984' },
      { label: 'Total Cost (Sum)', value: '$8.2M' },
      { label: 'Avg Length of Stay', value: '37.6 Days' },
    ],
  },
  {
    key: 'hr',
    label: 'HR Analytics',
    title: 'HR Executive Analytics',
    image: '/HR Executive Analytics.jpg',
    highlight: 'Delivered workforce attrition metrics, active employee counts, and job level salary distributions to support workforce optimization.',
    kpis: [
      { label: 'Total Employees', value: '1.47K' },
      { label: 'Active Employees', value: '1.233K' },
      { label: 'Employees Left', value: '237' },
      { label: 'Average Age', value: '36.92' },
    ],
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement>;
  onZoomImage: (src: string, title: string) => void;
}

const ProjectCard = ({ project, index, total, onZoomImage }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [selectedDomainKey, setSelectedDomainKey] = useState('finance');

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const activeDomain = POWERBI_DOMAINS.find(d => d.key === selectedDomainKey) || POWERBI_DOMAINS[0];

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh] w-full"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto h-full w-full flex flex-col gap-4 sm:gap-5 md:gap-6 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/15 bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        {/* Top row: number + meta + button */}
        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-6 shrink-0">
          <div className="flex flex-row items-start gap-3 sm:gap-6 md:gap-10 min-w-0 w-full">
            <div
              className="shrink-0 font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {project.number}
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 pt-1 sm:pt-2 md:pt-3 min-w-0 flex-1">
              <span
                className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
                style={{ fontSize: 'clamp(0.65rem, 1.2vw, 0.9rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.8rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {project.liveUrl && (
            <div className="shrink-0 self-start sm:self-auto pt-1 sm:pt-2 md:pt-3 w-full sm:w-auto">
              <LiveProjectButton
                href={project.liveUrl}
                label={project.buttonLabel || 'Live Project'}
                className="w-full sm:w-auto"
              />
            </div>
          )}
        </div>

        {/* Bottom row */}
        {project.isPowerBI ? (
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 sm:gap-6 md:gap-8 flex-1 min-h-0 overflow-y-auto md:overflow-hidden pr-1 md:pr-0">
            {/* Left Column: Interactive Control Panel */}
            <div className="flex flex-col gap-4 sm:gap-5 min-h-0 justify-between">
              {/* Description & Tech Stack */}
              <div className="flex flex-col gap-2.5">
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-[10px] sm:text-xs uppercase tracking-wider text-[#D7E2EA] bg-[#D7E2EA]/10 border border-[#D7E2EA]/15 rounded-full px-2.5 py-0.5 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Domain Tabs */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40 font-semibold">Select Analytics Domain</span>
                <div className="grid grid-cols-2 gap-2">
                  {POWERBI_DOMAINS.map(domain => (
                    <button
                      key={domain.key}
                      onClick={() => setSelectedDomainKey(domain.key)}
                      className={`rounded-xl border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 text-left ${selectedDomainKey === domain.key
                        ? 'border-[#D7E2EA] bg-[#D7E2EA]/10 text-white'
                        : 'border-[#D7E2EA]/10 bg-[#141418]/30 text-[#D7E2EA]/50 hover:border-[#D7E2EA]/30 hover:text-[#D7E2EA]'
                        }`}
                    >
                      {domain.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic KPIs Grid */}
              <div className="bg-[#141418]/50 border border-[#D7E2EA]/10 rounded-2xl p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D7E2EA]">{activeDomain.title}</span>
                  <span className="text-[9px] uppercase tracking-widest text-[#D7E2EA]/40">Live Dashboard Data</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {activeDomain.kpis.map((kpi, idx) => (
                    <div key={idx} className="flex flex-col gap-0.5 animate-fadeIn">
                      <span className="text-[9px] uppercase tracking-wider text-[#D7E2EA]/45 font-medium">{kpi.label}</span>
                      <span className="text-base sm:text-lg font-black text-[#D7E2EA] tracking-tight">{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Premium Mockup Browser Frame */}
            <div className="relative group/mockup flex flex-col min-h-[220px] md:min-h-0 h-full overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[#D7E2EA]/15 bg-[#141418]/40 shadow-2xl">
              {/* Browser title bar */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0C0C0C]/80 border-b border-[#D7E2EA]/10 shrink-0 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[9px] sm:text-[10px] text-[#D7E2EA]/40 uppercase tracking-widest ml-4 font-mono truncate max-w-[60%]">
                  powerbi://workspace/portfolio/{activeDomain.key}_dashboard
                </span>
              </div>

              {/* Dashboard Screenshot with Zoom */}
              <div
                onClick={() => onZoomImage(activeDomain.image, activeDomain.title)}
                className="flex-1 min-h-0 overflow-hidden relative cursor-zoom-in"
              >
                <img
                  src={activeDomain.image}
                  alt={activeDomain.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/mockup:scale-[1.03]"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    <Maximize2 className="h-3.5 w-3.5" />
                    Expand View
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 sm:gap-6 md:gap-8 flex-1 min-h-0 overflow-y-auto md:overflow-hidden pr-1 md:pr-0">
            {/* Left Column: Glassmorphic text details + 1 image */}
            <div className="flex flex-col gap-4 sm:gap-5 min-h-0 justify-between">
              {/* Description & Tech Stack */}
              <div className="flex flex-col gap-2.5">
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-[10px] sm:text-xs uppercase tracking-wider text-[#D7E2EA] bg-[#D7E2EA]/10 border border-[#D7E2EA]/15 rounded-full px-2.5 py-0.5 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Small code/terminal-style mockup */}
              {project.col1Image2 && (
                <div className="flex-1 min-h-0 overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[#D7E2EA]/10 bg-[#141418]/20 hidden md:block">
                  <img
                    src={project.col1Image2}
                    alt={`${project.name} preview 1`}
                    className="h-full w-full object-cover opacity-80"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              )}
            </div>

            {/* Right Column: Tall showcase image */}
            {project.col2Image && (
              <div
                onClick={() => onZoomImage(project.col2Image || '', project.name)}
                className="relative group/standard overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[#D7E2EA]/15 bg-[#141418]/20 cursor-zoom-in min-h-[220px] md:min-h-0 h-full"
              >
                <img
                  src={project.col2Image}
                  alt={`${project.name} preview 2`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/standard:scale-[1.03]"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/standard:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    <Maximize2 className="h-3.5 w-3.5" />
                    Expand View
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoomedImage, setZoomedImage] = useState<{ src: string; title: string } | null>(null);

  const handleZoom = (src: string, title: string) => {
    setZoomedImage({ src, title });
  };

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-7xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            containerRef={containerRef}
            onZoomImage={handleZoom}
          />
        ))}
      </div>

      {/* Lightbox zoom modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 sm:p-6 md:p-10 backdrop-blur-lg"
          >
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-6 right-6 text-[#D7E2EA]/60 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
              aria-label="Close zoom modal"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border border-[#D7E2EA]/15 bg-[#141418]/50 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={zoomedImage.src}
                alt={zoomedImage.title}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
            <span className="mt-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#D7E2EA] bg-[#D7E2EA]/10 border border-[#D7E2EA]/15 rounded-full px-4 py-1.5">
              {zoomedImage.title}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
