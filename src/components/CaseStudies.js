import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const CaseStudies = () => {
  const projects = [
    {
      title: 'Improving a 3D Print Review System',
      subtitle: 'Using AI to help users learn from failures while giving creators actionable feedback',
      description: 'Product Design Case Study',
      bgGradient: 'from-slate-700 via-gray-800 to-zinc-900',
      thumbnail: `${process.env.PUBLIC_URL}/images/case-studies/bambu-lab.png`,
      category: '3D Printing Platform • Product Design',
      metrics: [
        { label: 'User Reviews', value: '400+' },
        { label: 'AI Features', value: '3' },
        { label: 'Weeks', value: '4' }
      ],
      impact: 'Designed an AI-powered review system that analyzes feedback patterns and suggests helpful tags. Helps users understand why things fail while giving creators actionable insights instead of angry 1-star reviews.',
      technologies: ['Figma', 'AI/ML Design', 'User Research', 'Interaction Design'],
      link: '/case-studies/bambu-lab',
      featured: true,
      designWork: {
        deliverables: [
          'AI-powered tag suggestions that learn from review patterns',
          'Smart feedback categorization using machine learning',
          'Guided feedback flow with contextual learning moments',
          'Intelligent filter system to surface useful reviews',
          'AI analysis to separate user error from product issues'
        ]
      },
      longDescription: {
        problem: 'Users rate products poorly when they make mistakes, not understanding the real cause. Creators get punished unfairly. No one learns anything.',
        research: [
          'Used AI to analyze 400+ user reviews and identify patterns',
          'Studied community frustration on Reddit and forums',
          'Classified complaints with AI assistance: product issues vs user mistakes vs environment',
          'Found 35% of bad reviews were actually user error through data analysis'
        ],
        insights: [
          '46% complained about actual product problems',
          '35% were user mistakes (wrong setup, bad technique)',
          '19% unclear what went wrong',
          '81% gave clear feedback when prompted',
          'Most users didn\'t know their reviews hurt creator income'
        ],
        solution: [
          'Designed AI that suggests relevant tags based on review text',
          'Created smart categorization that learns from user patterns',
          'Added "what went wrong" categories so users can self-reflect',
          'Built intelligent filter system that surfaces the most helpful reviews',
          'Made feedback actionable with AI-powered insights for creators'
        ]
      }
    },
  ];

  const resumeData = {
    experience: [
      {
        company: 'Houseform',
        location: 'Boston, MA',
        role: 'Digital Designer and Co-Founder',
        period: 'Oct 2023 - Present',
        website: 'https://www.houseform.ai/',
        achievements: [
          'Designed low and high-fidelity B2B user interfaces for two standalone agentic AI products supporting hundreds of monthly users',
          'Crafted internal dashboards for data analysts, ambassador teams, and stakeholders',
          'Increased company revenue from $150 to $5000+ MRR',
          'Researched Boston real estate market to identify strategic advantages',
          'Animated demos and trailers for marketing team'
        ],
        tags: ['AI/ML', 'B2B SaaS', 'Dashboard Design']
      },
      {
        company: 'Decentagora',
        location: 'Calgary, Canada',
        role: 'Founding Designer',
        period: 'Feb 2022 - Oct 2023',
        website: 'https://decentragora.xyz/',
        achievements: [
          'Created digital campaigns and proposal designs, securing over $100,000 in venture capital funding',
          'Designed core Web3 applications including no-code Solidity contract creator and first mainnet Optimism faucet',
          'Produced weekly graphic media and animated content across LinkedIn, Instagram, Twitter, and Discord',
          'Created NFT collections supporting public goods and crafted landing pages'
        ],
        tags: ['Web3', 'Fundraising', 'Product Design']
      },
      {
        company: 'EVM Gas Station Tracker',
        location: 'Boston, MA',
        role: 'Digital Designer',
        period: 'Sept 2022 - Oct 2023',
        website: 'https://www.evmgasstation.xyz/',
        achievements: [
          'Consulted on and designed UI for real-time Ethereum gas price monitoring tool',
          'Improved UX and accessibility for thousands of weekly users',
          'Facilitated more informed transaction decisions'
        ],
        tags: ['Web3', 'Data Visualization', 'UX']
      },
      {
        company: 'Scroll Kingdom (now Omni Kingdoms)',
        location: 'Boston, MA',
        role: 'Designer and Consultant',
        period: 'Jul 2022 - Jan 2023',
        website: 'https://scroll-237a2.web.app/',
        achievements: [
          'Designed UI that achieved highest number of transactions on Scroll Testnet in summer 2022',
          'Enhanced player engagement and optimized in-game navigation',
          'Collaborated with development teams for seamless design integration'
        ],
        tags: ['Gaming', 'Web3', 'UI Design']
      }
    ],
    education: {
      school: 'Franklin Pierce University',
      location: 'Rindge, NH',
      degree: 'B.S., Business Marketing',
      graduated: 'November 2024',
      gpa: '3.66/4.00',
      awards: ['Dean\'s List (2020, 2021, 2022)', 'Honors Scholarship', 'Digital Literacy Award']
    },
    skills: {
      proficiencies: [
        'User Mapping',
        'Responsive Design',
        'Motion Design',
        'Articulating Design Decisions',
        'Agile Design',
        'User Research',
        'Pipeline Generation',
        'B2B Solutions',
        'Logo Design'
      ],
      tools: [
        'Figma',
        'Photoshop',
        'Rive.app',
        'Framer',
        'Dora',
        'Jitter',
        'Bezel',
        'Daz 3D',
        'Notion',
        'Canva',
        'GPT',
        'Midjourney'
      ],
      certificates: [
        'Bloomberg Market Concepts',
        'Google UX Course',
        'Google Analytics 4',
        'Responsive Web Design'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f0a] p-6">
      {/* Main Case Studies */}
      <div className="space-y-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="group"
          >
            <Link 
              to={project.link}
              className="block bg-[#0d1912]/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl overflow-hidden border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/30 cursor-pointer"
            >
              {/* Category Badge */}
              <div className="p-4 lg:p-6 border-b border-emerald-900/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider rounded-full border border-emerald-500/40" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    📚 Case Study
                  </span>
                  <span className="text-xs uppercase tracking-wider text-emerald-400/60 font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {project.category}
                  </span>
                      </div>
                <FiArrowUpRight className="text-emerald-400/60 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-xl" />
                      </div>
              
              {/* Project Image */}
              <div className={`h-[320px] lg:h-[380px] relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500 ${!project.thumbnail ? `bg-gradient-to-br ${project.bgGradient}` : 'bg-gray-900'}`}>
                {/* Thumbnail Image (if provided) */}
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Failed to load image:', project.thumbnail);
                    e.target.style.display = 'none';
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully:', project.thumbnail);
                  }}
                />
                  </div>
              
              {/* Project Info */}
              <div className="p-5 lg:p-6 bg-gradient-to-br from-[#0d1912]/50 to-[#0a0f0a]">
                <div className="mb-4">
                  <h3 className="text-white text-base lg:text-lg font-semibold mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">{project.subtitle}</p>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">{project.impact}</p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-2 bg-emerald-900/20 rounded-lg border border-emerald-800/30">
                        <div className="text-base lg:text-lg font-bold text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-0.5 bg-gray-800/50 text-gray-400 text-[10px] rounded-full border border-gray-700/50"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end items-center pt-3 border-t border-emerald-900/20">
                  <div className="px-4 py-2 bg-emerald-500/10 group-hover:bg-emerald-500/20 text-emerald-400 group-hover:text-emerald-300 border border-emerald-500/30 group-hover:border-emerald-500/50 rounded-lg flex items-center gap-2 transition-all duration-300 text-xs font-medium"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <span>View Case Study</span>
                    <FiArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Resume Section */}
      <motion.div
        id="resume"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="border-t border-emerald-900/30 pt-8"
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-white text-2xl lg:text-3xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
            Experience & Background
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-emerald-400 text-lg font-bold mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
            Professional Experience
          </h3>
          <div className="space-y-6">
            {resumeData.experience.map((job, index) => {
              const CardContent = (
                <>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white text-xl font-bold mb-1 group-hover:text-emerald-300 transition-colors" style={{ fontFamily: "'Sora', sans-serif" }}>
                          {job.company}
                      </h4>
                        {job.website && (
                          <FiArrowUpRight className="text-emerald-400/60 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-emerald-300 font-medium mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {job.role}
                      </p>
                      <p className="text-gray-500 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {job.location}
                      </p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 lg:mt-0" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-gray-300 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-900/20 text-emerald-400/70 text-xs rounded-full border border-emerald-800/30"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-emerald-900/10 to-teal-900/10 border border-emerald-900/30 rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                    job.website 
                      ? 'hover:border-emerald-500/50 cursor-pointer group' 
                      : ''
                  }`}
                >
                  {job.website ? (
                    <a
                      href={job.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </motion.div>
              );
            })}
          </div>
                    </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-emerald-400 text-lg font-bold mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
            Education
          </h3>
          <div className="bg-gradient-to-br from-emerald-900/10 to-teal-900/10 border border-emerald-900/30 rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                <h4 className="text-white text-xl font-bold mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {resumeData.education.school}
                </h4>
                <p className="text-emerald-300 font-medium mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {resumeData.education.degree}
                </p>
                <p className="text-gray-500 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {resumeData.education.location}
                </p>
              </div>
              <div className="text-right mt-2 lg:mt-0">
                <p className="text-gray-400 text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {resumeData.education.graduated}
                </p>
                <p className="text-emerald-400 font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                  GPA: {resumeData.education.gpa}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.education.awards.map((award, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-emerald-900/20 text-emerald-400/70 text-xs rounded-full border border-emerald-800/30"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {award}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-emerald-400 text-lg font-bold mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
            Skills & Certifications
          </h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Proficiencies */}
            <div className="bg-gradient-to-br from-emerald-900/10 to-teal-900/10 border border-emerald-900/30 rounded-2xl p-6">
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Proficiencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.proficiencies.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-gradient-to-br from-emerald-900/10 to-teal-900/10 border border-emerald-900/30 rounded-2xl p-6">
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Tool Kit
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div className="bg-gradient-to-br from-emerald-900/10 to-teal-900/10 border border-emerald-900/30 rounded-2xl p-6">
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Certificates
                      </h4>
                      <ul className="space-y-2">
                {resumeData.skills.certificates.map((cert, i) => (
                  <li key={i} className="flex gap-2 text-gray-300 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <span className="text-emerald-400">✓</span>
                    <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
        </motion.div>
            </motion.div>
      </div>
  );
};

export default CaseStudies;