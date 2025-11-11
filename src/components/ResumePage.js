import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiDownload } from 'react-icons/fi';

const ResumePage = () => {
  useEffect(() => {
    document.title = 'Resume - Anthony Luong';
  }, []);

  const resumeData = {
    contact: {
      email: 'anthonyluong@gmail.com',
      phone: '(603) 854-1809',
      location: 'Boston, MA',
      linkedin: {
        display: 'linkedin.com/in/anthonyluong',
        url: 'https://linkedin.com/in/anthonyluong'
      },
      portfolio: {
        display: 'anthonyluong.com',
        url: 'https://anthonyluong.com'
      }
    },
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
        ]
      },
      {
        company: 'Decentagora',
        location: 'Calgary, Canada',
        role: 'Founding Designer',
        period: 'Feb 2022 - Oct 2023',
        website: 'https://decentragora.xyz/',
        achievements: [
          'Created digital campaigns and proposal designs, successfully securing over $100,000 in venture capital funding',
          'Designed core Web3 applications including a no-code Solidity contract creator, Linear attestation protocols, and the first mainnet Optimism faucet',
          'Produced weekly graphic media, animated content, and infographics for multiple platforms including LinkedIn, Instagram, Notion, Twitter, and Discord',
          'Created NFT collections that directly support public goods and crafted landing pages'
        ]
      },
      {
        company: 'EVM Gas Station Tracker',
        location: 'Boston, MA',
        role: 'Digital Designer',
        period: 'Sept 2022 - Oct 2023',
        website: 'https://www.evmgasstation.xyz/',
        achievements: [
          'Consulted on and designed the user interface for this essential tool, aimed at monitoring and reporting real-time gas prices on the Ethereum network',
          'Improved user experience and accessibility, facilitating more informed transaction decisions for thousands of weekly users'
        ]
      },
      {
        company: 'Scroll Kingdom (now Omni Kingdoms)',
        location: 'Boston, MA',
        role: 'Designer and Consultant',
        period: 'Jul 2022 - Jan 2023',
        website: 'https://scroll-237a2.web.app/',
        achievements: [
          'Designed the user interface, which achieved the highest number of transactions on the Scroll Testnet in summer of 2022',
          'Enhanced player engagement and optimized in-game navigation and functionality',
          'Collaborated with development teams to ensure seamless integration of design with back-end functionality, enhancing both user satisfaction and platform performance'
        ]
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
    <div className="min-h-screen bg-[#0a0f0a] text-white">
      {/* Header */}
      <div className="border-b border-emerald-900/30 bg-[#0a0f0a]/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="min-w-screen px-4 lg:px-8 py-4 flex justify-between">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <FiArrowLeft className="text-xl" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>
          {/* Download Resume Button */}
          <a
            href="/Anthony_Luong_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 hover:border-emerald-500/50 rounded-lg font-medium text-sm transition-all duration-300"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <FiDownload className="text-base" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
            Anthony Luong
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span>{resumeData.contact.location}</span>
            <span className="hidden sm:inline">•</span>
            <a href={`mailto:${resumeData.contact.email}`} className="hover:text-emerald-400 transition-colors">
              {resumeData.contact.email}
            </a>
            <span className="hidden sm:inline">•</span>
            <a href={resumeData.contact.linkedin.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              {resumeData.contact.linkedin.display}
            </a>
            <span className="hidden sm:inline">•</span>
            <a href={resumeData.contact.portfolio.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              {resumeData.contact.portfolio.display}
            </a>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider text-emerald-400 pl-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Professional Experience
          </h2>
          <div className="space-y-8">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="border-l-2 border-emerald-900/30 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0a0f0a]"></div>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold" style={{ fontFamily: "'Sora', sans-serif" }}>
                        {job.company}
                      </h3>
                      {job.website && (
                        <a
                          href={job.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          <FiExternalLink className="text-sm" />
                        </a>
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
                <ul className="space-y-2 mt-4">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      <span className="text-emerald-400 mt-1 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider text-emerald-400 pl-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Education
          </h2>
          <div className="border-l-2 border-emerald-900/30 pl-6 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0a0f0a]"></div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {resumeData.education.school}
                </h3>
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
                  {resumeData.education.gpa}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Awards:
              </p>
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
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider text-emerald-400 pl-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8 pl-6">
            {/* Proficiencies */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Proficiencies
              </h3>
              <ul className="space-y-2">
                {resumeData.skills.proficiencies.map((skill, i) => (
                  <li key={i} className="text-gray-300 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Tool Kit
              </h3>
              <ul className="space-y-2">
                {resumeData.skills.tools.map((tool, i) => (
                  <li key={i} className="text-gray-300 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certificates */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Certificates
              </h3>
              <ul className="space-y-2">
                {resumeData.skills.certificates.map((cert, i) => (
                  <li key={i} className="flex gap-2 text-gray-300 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <span className="text-emerald-400">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ResumePage;

