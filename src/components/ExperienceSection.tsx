import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  bullets?: string[];
}

const EXPERIENCE_DATA: TimelineItem[] = [
  {
    title: 'QA Intern (R&D – Testing/QA)',
    subtitle: 'Arcserve',
    period: 'May 2025 – Present',
    location: 'Bangalore, India',
    bullets: [
      'Engineered automated ETL pipelines using Python (requests, pandas) and REST APIs to extract, transform, and load TestRail and Jira datasets into PostgreSQL, reducing manual reporting time by 80%',
      'Designed and deployed 5+ interactive Grafana dashboards with dynamic variables and time-series queries to track automation coverage, milestone progress, and defect distributions across 10+ projects',
      'Optimized SQL queries and database schema, improving dashboard load times by 40% and enabling real-time insights for cross-functional QA teams',
      'Implemented comprehensive logging and CSV export functionality for audit trails and regulatory compliance',
    ],
  },
  {
    title: 'AI Intern (Virtual)',
    subtitle: 'CodSoft',
    period: 'Virtual Internship',
    location: 'India',
    bullets: [
      'Developed 3 AI-powered applications including a rule-based chatbot, recommendation engine, and image captioning model using NLP and computer vision techniques',
      'Applied supervised and unsupervised learning algorithms to solve real-world problems, demonstrating end-to-end ML pipeline development',
    ],
  },
];

const EDUCATION_DATA: TimelineItem[] = [
  {
    title: 'Master of Science in Data Science',
    subtitle: 'Chanakya University',
    period: '2023 – 2025',
    location: 'Bangalore, India',
  },
  {
    title: 'Bachelor of Science (Physics, Chemistry, Mathematics)',
    subtitle: 'Dr. Bhimrao Ambedkar University',
    period: '2020 – 2023',
    location: 'Agra, India',
  },
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const items = activeTab === 'experience' ? EXPERIENCE_DATA : EDUCATION_DATA;

  return (
    <section
      id="experience"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D7E2EA]/[0.02] blur-[120px]" />

      <div className="mx-auto max-w-5xl relative z-10">
        <FadeIn y={40}>
          <h2
            className="text-center font-black uppercase text-[#D7E2EA] mb-12 sm:mb-16 leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
          >
            Timeline
          </h2>
        </FadeIn>

        {/* Tab switcher switcher */}
        <FadeIn delay={0.1} y={20}>
          <div className="flex justify-center mb-16 sm:mb-20">
            <div className="inline-flex rounded-full border border-[#D7E2EA]/15 bg-[#141418]/60 p-1 backdrop-blur-md">
              <button
                onClick={() => setActiveTab('experience')}
                className={`relative rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-[#D7E2EA] text-[#0C0C0C]'
                    : 'text-[#D7E2EA]/50 hover:text-[#D7E2EA]'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`relative rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'bg-[#D7E2EA] text-[#0C0C0C]'
                    : 'text-[#D7E2EA]/50 hover:text-[#D7E2EA]'
                }`}
              >
                Education
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Timeline body */}
        <div className="relative">
          {/* Vertical line running down the timeline */}
          <div className="absolute left-4 sm:left-8 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#D7E2EA]/20 via-[#D7E2EA]/10 to-transparent hidden sm:block" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-10 sm:gap-12"
            >
              {items.map((item, index) => (
                <div
                  key={item.title + index}
                  className="relative flex flex-col sm:flex-row gap-6 sm:gap-12 pl-0 sm:pl-16 group"
                >
                  {/* Timeline node/dot */}
                  <div className="absolute left-7.5 top-8 -translate-x-[2.5px] w-2.5 h-2.5 rounded-full bg-[#D7E2EA] border-2 border-[#0C0C0C] group-hover:scale-125 transition-transform duration-300 z-10 hidden sm:block" />

                  {/* Date & Location column */}
                  <div className="sm:w-1/4 shrink-0 flex flex-col sm:items-end sm:text-right pt-2 gap-1">
                    <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40">
                      {item.period}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                      {item.location}
                    </span>
                  </div>

                  {/* Detail card */}
                  <div className="flex-1 rounded-[28px] border-2 border-[#D7E2EA]/10 bg-[#141418]/30 p-6 sm:p-8 hover:border-[#D7E2EA]/30 transition-all duration-300 hover:bg-[#141418]/50">
                    <h3 className="text-lg sm:text-xl font-bold text-[#D7E2EA] uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-[#D7E2EA]/60 mt-1">
                      {item.subtitle}
                    </h4>

                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="mt-5 flex flex-col gap-3">
                        {item.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm sm:text-base text-[#D7E2EA]/70 font-light leading-relaxed"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D7E2EA]/45" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
