import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const CaseStudies = () => {
  const projects = [
    {
      title: 'Improving a 3D Print Review System',
      subtitle: 'Using AI to help users learn from failures while giving creators actionable feedback',
      description: 'Product Design Case Study',
      bgGradient: 'from-slate-700 via-gray-800 to-zinc-900',
      thumbnail: '/images/case-studies/bambu-lab.png', // Add your image here
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
    {
      title: 'Onchain Pets',
      subtitle: 'How do we connect pet lovers in the web3 community?',
      description: 'Tokenize your dog',
      bgGradient: 'from-teal-600 to-emerald-700',
      category: 'Web3 & Blockchain',
      metrics: [
        { label: 'NFTs Minted', value: '10K+' },
        { label: 'Active Users', value: '5,000+' },
        { label: 'Trading Volume', value: '$2M+' }
      ],
      impact: 'Built a community-driven NFT platform that allows pet owners to immortalize their pets on the blockchain while connecting with like-minded collectors.',
      technologies: ['Solidity', 'React', 'Web3.js', 'IPFS'],
      link: '/case-studies/onchain-pets'
    },
    {
      title: 'Klativa',
      subtitle: 'How can we automate social media marketing for rental agents?',
      description: 'Automated Social Media Marketing',
      bgGradient: 'from-indigo-100 to-purple-100',
      category: 'Marketing Automation',
      isDark: false,
      metrics: [
        { label: 'Agents Onboarded', value: '500+' },
        { label: 'Posts Generated', value: '50K+' },
        { label: 'Engagement Up', value: '3.5x' }
      ],
      impact: 'Designed an AI-powered social media automation tool that generates property listings posts, saving agents 10+ hours per week.',
      technologies: ['React', 'OpenAI API', 'AWS', 'Figma'],
      link: '/case-studies/klativa'
    },
  ];

  const otherProjects = [
    {
      title: 'Fenway CDC Non-Profit iOS App',
      description: 'Assists Fenway residents with accessing essential services and programs while also promoting local businesses in the Boston Fenway area',
      tags: ['iOS', 'Non-Profit', 'Community'],
      year: '2023',
      link: 'https://apps.apple.com/app/fenway-cdc'
    },
    {
      title: 'Impact Networks Book Redesign',
      description: 'Led a team of three to redesign the Greenpill Network\'s book, revamping the layout and visual identity for V2 print and digital editions',
      tags: ['Design', 'Publishing', 'Web3'],
      year: '2023',
      externalLink: '/downloads/impact-networks-redesign.pdf',
      linkText: 'View PDF'
    },
    {
      title: 'Multi-chain EVM gwei Tracker',
      description: 'A real-time multi-chain Ethereum gas tracker that helps users monitor and compare transaction fees across different networks',
      tags: ['Web3', 'Tools', 'Dashboard'],
      year: '2022',
      link: 'https://github.com/anthonyluong/gwei-tracker'
    },
    {
      title: 'The First Mainnet Optimism Faucet',
      description: 'An on-chain faucet for the Optimism ecosystem, designed to onboard early users by distributing free OP tokens funded through OP DAO grants.',
      tags: ['Web3', 'DeFi', 'Optimism'],
      year: '2022',
      link: 'https://optimism-faucet.xyz'
    },
    {
      title: 'No-code Solidity ERC Contract Creator',
      description: 'Allows users to create and deploy ERC-standard tokens without writing Solidity code, making Web3 development more accessible since 2021',
      tags: ['Web3', 'No-Code', 'Developer Tools'],
      year: '2021',
      link: 'https://erc-creator.xyz'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f0a] p-6">
      {/* Main Case Studies */}
      <div className="space-y-6 lg:space-y-8 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="group cursor-pointer"
          >
            <div className="bg-[#0d1912]/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl overflow-hidden border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/30">
              {/* Category Badge */}
              <div className="p-4 lg:p-6 border-b border-emerald-900/20">
                <span className="text-xs uppercase tracking-wider text-emerald-400/60 font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.category}
                </span>
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
                
                <div className="flex justify-between items-center pt-3 border-t border-emerald-900/20">
                  <span className="text-gray-500 text-[10px]">Full case study coming soon</span>
                  <motion.a 
                    href={project.link}
                    className="text-gray-400 hover:text-emerald-400 flex items-center gap-1.5 transition-colors group/link"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-xs font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>View Details</span>
                    <FiArrowUpRight className="text-base" />
                  </motion.a>
                </div>
              </div>
                    </div>
          </motion.div>
        ))}
      </div>

      {/* Other Notable Projects */}
      <motion.div
        id="other-projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="border-t border-emerald-900/30 pt-16"
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-white text-2xl lg:text-3xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
            Other Notable Projects
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
        </div>
        
        <div className="grid gap-6 lg:gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-[#0d1912]/30 backdrop-blur-sm border border-emerald-900/30 rounded-2xl p-6 lg:p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-white text-lg lg:text-xl group-hover:text-emerald-400 transition-colors" style={{ fontFamily: "'Sora', sans-serif" }}>
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-500">{project.year}</span>
                    </div>
                  </div>
                  <FiArrowUpRight className="text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
                </div>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-emerald-900/20 text-emerald-400/70 text-xs rounded-full border border-emerald-800/30"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        {tag}
                    </span>
                    ))}
                  </div>
                {(project.link || project.externalLink) && (
                  <a 
                    href={project.link || project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 text-sm font-medium inline-flex items-center gap-1 transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {project.linkText || 'View Project'}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
  );
};

export default CaseStudies;