import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';

const BambuLabCaseStudy = () => {
  const caseStudyData = {
    title: 'Improving a 3D Print Review System',
    subtitle: 'Using AI to help users learn from failures while giving creators actionable feedback',
    hero: '/images/case-studies/bambu-lab.png',
    
    overview: {
      role: 'Product Designer & UX Researcher',
      timeline: '4 weeks',
      tools: ['Figma', 'AI/ML Analysis', 'Reddit/Forum Research', 'Manual Data Classification'],
      team: 'Solo Project'
    },
    
    background: {
      title: 'Background',
      sections: [
        {
          subtitle: 'What is Bambu Lab?',
          content: 'Bambu Lab is a leading consumer 3D printer manufacturer known for making high-speed, plug-and-play printers accessible to mainstream users. Their products have dramatically lowered the barrier to entry for 3D printing, attracting a wave of newcomers to the hobby.'
        },
        {
          subtitle: 'The MakerWorld Ecosystem',
          content: 'MakerWorld is Bambu Lab\'s model-sharing platform where creators upload 3D printable designs and users download them to print. Think of it as the "App Store" for 3D printing—creators share designs, users print them, and reviews inform the community about quality and printability.'
        },
        {
          subtitle: 'How the Ecosystem Works',
          content: 'Creators design 3D models and upload them with print profiles (settings optimized for specific materials and printers). Users download these models, print them on their Bambu Lab printers, and leave reviews based on their experience. Bambu Lab incentivizes creators through a compensation program tied to downloads and ratings—meaning reviews directly impact creator income.'
        },
        {
          subtitle: 'Why Reviews Matter',
          content: 'Reviews serve multiple critical functions: they help users discover quality models, give creators feedback to iterate, signal product quality to the platform, and determine creator compensation. However, the system doesn\'t distinguish between failures caused by model issues versus user error, environmental factors, or printer problems—creating a broken feedback loop.'
        }
      ]
    },
    
    problem: {
      title: 'The Problem',
      description: 'Users rate products poorly when they make mistakes, not understanding the real cause. Creators get punished unfairly. No one learns anything.',
      details: [
        'Bambu Lab\'s post-print rating flow prompts users to rate 3D models without surfacing relevant troubleshooting context or attribution',
        'This leads to inaccurate low-star reviews driven by user error, punishing creators unfairly',
        'Feedback is reduced to an ambiguous 1-5 star count with no actionable insights',
        'Most failures aren\'t the creator\'s fault, but there\'s no way to indicate this'
      ]
    },
    
    research: {
      title: 'Research Process',
      methods: [
        {
          name: 'Review Analysis',
          description: 'Used AI to analyze 400+ user reviews across the top 12 most-downloaded MakerWorld models',
          icon: '📊'
        },
        {
          name: 'Community Research',
          description: 'Studied community frustration patterns on Reddit and official Bambu Lab forums',
          icon: '💬'
        },
        {
          name: 'AI Classification',
          description: 'Classified complaints with AI assistance: product issues vs user mistakes vs environment',
          icon: '🤖'
        },
        {
          name: 'Data Analysis',
          description: 'Found 35% of bad reviews were actually user error through systematic data analysis',
          icon: '🔍'
        }
      ]
    },
    
    insights: {
      title: 'Key Insights',
      findings: [
        {
          stat: '46%',
          label: 'Legitimate Issues',
          description: 'Complained about actual product problems - valid creator feedback'
        },
        {
          stat: '35%',
          label: 'User Error',
          description: 'Were user mistakes (wrong setup, bad technique) - misdirected blame'
        },
        {
          stat: '19%',
          label: 'Unclear Context',
          description: 'Lacked enough detail to determine attribution - lost opportunity'
        },
        {
          stat: '81%',
          label: 'Clear Feedback',
          description: 'Gave clear feedback when prompted - shows potential for better capture'
        }
      ],
      quote: 'Most users didn\'t know their reviews hurt creator income'
    },
    
    solution: {
      title: 'The Solution',
      overview: 'Designed an AI-powered attribution system that helps users understand WHY things fail while giving creators actionable insights.',
      features: [
        {
          title: 'AI-Powered Tag Suggestions',
          description: 'Smart tags that suggest relevant categories based on review text patterns',
          icon: '✨',
          details: [
            'Analyzes review text in real-time',
            'Suggests relevant failure categories',
            'Learns from user patterns over time',
            'Reduces cognitive load for reviewers'
          ]
        },
        {
          title: 'Smart Categorization',
          description: 'Machine learning that learns from user patterns to improve accuracy',
          icon: '🎯',
          details: [
            'Separates user error from product issues',
            'Environmental factors tracked separately',
            'Builds smarter attribution over time',
            'Reduces false negative reviews'
          ]
        },
        {
          title: 'Guided Feedback Flow',
          description: 'Step-by-step prompts with contextual learning moments',
          icon: '🧭',
          details: [
            'Helps users self-reflect on failures',
            'Educational cards for common issues',
            'Troubleshooting suggestions in-flow',
            'Turns frustration into learning'
          ]
        },
        {
          title: 'Intelligent Filter System',
          description: 'Surfaces the most helpful reviews based on attribution and context',
          icon: '🔍',
          details: [
            'Filter by attribution category',
            'See verified product issues vs user error',
            'Sort by helpful votes',
            'Find relevant feedback faster'
          ]
        },
        {
          title: 'Creator Insights Dashboard',
          description: 'AI-powered insights that make feedback actionable for creators',
          icon: '📈',
          details: [
            'See patterns across all reviews',
            'Identify real product issues',
            'Filter out misdirected feedback',
            'Prioritize improvements effectively'
          ]
        }
      ]
    },
    
    impact: {
      title: 'Expected Impact',
      outcomes: [
        'Creators receive fair, actionable feedback instead of misdirected blame',
        'Users learn from failures through educational moments',
        'Platform gains more accurate product quality signals',
        'Review integrity restored through proper attribution',
        'Community trust increases as feedback becomes more helpful'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f0a] text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <img 
          src={caseStudyData.hero}
          alt={caseStudyData.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0a0f0a]"></div>
        
        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors z-10"
        >
          <FiArrowLeft className="text-xl" />
          <span className="text-sm font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Back to Portfolio</span>
        </Link>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30">
                  AI + Product Design
                </span>
                <span className="text-gray-400 text-sm">{caseStudyData.overview.timeline}</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
                {caseStudyData.title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {caseStudyData.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          <div>
            <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-2">Role</h3>
            <p className="text-white font-medium">{caseStudyData.overview.role}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-2">Timeline</h3>
            <p className="text-white font-medium">{caseStudyData.overview.timeline}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-2">Team</h3>
            <p className="text-white font-medium">{caseStudyData.overview.team}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudyData.overview.tools.map((tool, i) => (
                <span key={i} className="text-emerald-400 text-sm">{tool}{i < caseStudyData.overview.tools.length - 1 ? ',' : ''}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Background */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>
            {caseStudyData.background.title}
          </h2>
          <div className="space-y-6">
            {caseStudyData.background.sections.map((section, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/30 rounded-xl p-6 lg:p-8">
                <h3 className="text-xl font-bold mb-3 text-emerald-300" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {section.subtitle}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
          
          {/* Visual Diagram */}
          <div className="mt-8 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-2xl p-8">
            <h3 className="text-lg font-bold mb-6 text-center text-emerald-300">The MakerWorld Flywheel</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-emerald-500/20 rounded-full flex items-center justify-center border-2 border-emerald-500/50">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-bold text-emerald-300 mb-2">1. Creators Upload</h4>
                <p className="text-sm text-gray-400">Designers share models with optimized print settings</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-purple-500/20 rounded-full flex items-center justify-center border-2 border-purple-500/50">
                  <span className="text-2xl">🖨️</span>
                </div>
                <h4 className="font-bold text-purple-300 mb-2">2. Users Print</h4>
                <p className="text-sm text-gray-400">Community downloads and prints on Bambu Lab printers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-blue-500/20 rounded-full flex items-center justify-center border-2 border-blue-500/50">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="font-bold text-blue-300 mb-2">3. Reviews Impact All</h4>
                <p className="text-sm text-gray-400">Ratings affect discoverability, creator income, and community trust</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400 italic">
                When reviews are inaccurate, the entire ecosystem suffers
              </p>
            </div>
          </div>
        </motion.section>

        {/* Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
            {caseStudyData.problem.title}
          </h2>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            {caseStudyData.problem.description}
          </p>
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-800/30 rounded-2xl p-6 lg:p-8">
            <ul className="space-y-4">
              {caseStudyData.problem.details.map((detail, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="text-red-400 mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Research */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
            {caseStudyData.research.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudyData.research.methods.map((method, i) => (
              <div key={i} className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-xl p-6">
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-emerald-300">{method.name}</h3>
                <p className="text-gray-300">{method.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Insights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
            {caseStudyData.insights.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {caseStudyData.insights.findings.map((finding, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {finding.stat}
                </div>
                <div className="text-sm font-bold text-purple-300 mb-2 uppercase tracking-wider">
                  {finding.label}
                </div>
                <p className="text-sm text-gray-400">{finding.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-l-4 border-purple-500 rounded-r-xl p-6">
            <p className="text-lg italic text-gray-300">"{caseStudyData.insights.quote}"</p>
          </div>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
            {caseStudyData.solution.title}
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            {caseStudyData.solution.overview}
          </p>
          
          <div className="space-y-8">
            {caseStudyData.solution.features.map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                  </div>
                </div>
                <ul className="grid md:grid-cols-2 gap-3 ml-14">
                  {feature.details.map((detail, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-400">
                      <span className="text-emerald-400">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Impact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
            {caseStudyData.impact.title}
          </h2>
          <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-2xl p-6 lg:p-8">
            <ul className="space-y-4">
              {caseStudyData.impact.outcomes.map((outcome, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="text-emerald-400 text-xl">→</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-12 border-t border-emerald-900/30"
        >
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
            Interested in working together?
          </h3>
          <a
            href="mailto:anthony.luong@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-emerald-900/30"
          >
            Let's Talk
            <FiExternalLink />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default BambuLabCaseStudy;

