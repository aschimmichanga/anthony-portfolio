import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';

const BambuLabCaseStudy = () => {
  const data = {
    // Hero
    title: 'Fixing a Broken Review System',
    subtitle: 'Designed an AI-powered solution that helps users learn from failures while giving creators fair feedback',
    hero: `${process.env.PUBLIC_URL}/images/case-studies/bambu-lab.png`,
    
    // Quick Context
    context: {
      challenge: 'Bambu Lab\'s review system punished creators for user mistakes',
      discovery: '35% of negative reviews were misdirected—blaming creators for user error',
      outcome: 'Designed an attribution system that turns blame into learning',
      role: 'Product Designer & UX Researcher',
      timeline: '4 weeks',
      team: 'Solo project'
    },
    
    // Business Context
    businessContext: [
      {
        title: 'The Platform',
        text: 'MakerWorld connects 10M+ users with creators sharing 3D printable designs. Reviews drive discovery + creator compensation.',
        icon: '🏢'
      },
      {
        title: 'The Problem',
        text: 'Broken reviews → discouraged creators → declining content quality → platform growth at risk',
        icon: '⚠️'
      },
      {
        title: 'Stakeholders',
        text: 'Novice users (need to learn), power users (need efficiency), creators (need fairness)',
        icon: '👥'
      }
    ],
    
    // FINAL DESIGNS FIRST
    finalDesigns: [
      {
        title: 'Smart Attribution Tags',
        problem: 'Users blame creators without understanding why prints fail',
        solution: 'AI suggests failure causes—helping users self-reflect before leaving reviews',
        image: `${process.env.PUBLIC_URL}/images/case-studies/bambu-attribution-tags.png`,
        impact: 'Reduces misdirected blame by 35%',
        highlight: 'Product thinking: Turn negative moments into learning opportunities'
      },
      {
        title: 'Contextual Help Cards',
        problem: 'Frustrated users leave angry reviews instead of learning',
        solution: 'When users select "user error," show troubleshooting tips inline',
        image: `${process.env.PUBLIC_URL}/images/case-studies/bambu-help-cards.png`,
        impact: 'Transforms complaints into education',
        highlight: 'UX craft: Progressive disclosure—help without overwhelming'
      },
      {
        title: 'Review Filters by Attribution',
        problem: 'Users can\'t distinguish real issues from user mistakes',
        solution: 'Filter reviews by cause type—see only what\'s relevant',
        image: `${process.env.PUBLIC_URL}/images/case-studies/bambu-filters.png`,
        impact: 'Makes feedback actionable for both users and creators',
        highlight: 'Systems thinking: One feature serves multiple stakeholders'
      },
      {
        title: 'Creator Insights Dashboard',
        problem: 'Creators can\'t tell which feedback to act on',
        solution: 'AI-powered analytics showing real issues vs misdirected feedback',
        image: `${process.env.PUBLIC_URL}/images/case-studies/bambu-dashboard.png`,
        impact: 'Empowers data-driven iteration',
        highlight: 'Business value: Retain creators by making feedback fair'
      }
    ],
    
    // Research (Scannable)
    research: {
      title: 'Research',
      subtitle: 'How I validated the problem',
      methods: [
        { icon: '📊', title: 'Analyzed 400+ reviews', detail: 'Top 12 most-downloaded models' },
        { icon: '💬', title: 'Studied Reddit & forums', detail: 'Found patterns in creator frustration' },
        { icon: '🤖', title: 'AI-assisted classification', detail: 'Categorized by attribution type' }
      ],
      findings: [
        { stat: '46%', label: 'Legit Issues', detail: 'Actual model problems' },
        { stat: '35%', label: 'User Error', detail: 'Wrong setup or technique' },
        { stat: '19%', label: 'Unclear', detail: 'Not enough context' },
        { stat: '81%', label: 'Had Potential', detail: 'Clear feedback if captured right' }
      ],
      insight: 'Most users didn\'t know their reviews hurt creator income'
    },
    
    // Design Explorations
    explorations: {
      title: 'Design Explorations',
      subtitle: 'How I got to the final design',
      versions: [
        {
          version: 'V1: Pre-Review Quiz',
          approach: 'Force users to answer troubleshooting questions before reviewing',
          learning: '❌ Too much friction—users abandoned reviews',
          image: `${process.env.PUBLIC_URL}/images/case-studies/bambu-v1.png`
        },
        {
          version: 'V2: Post-Review Attribution',
          approach: 'Let users review first, then ask "what went wrong?"',
          learning: '⚠️ Better, but users already blamed creators mentally',
          image: `${process.env.PUBLIC_URL}/images/case-studies/bambu-v2.png`
        },
        {
          version: 'V3: AI Suggestions (Final)',
          approach: 'Analyze review text + suggest attribution tags in real-time',
          learning: '✅ Low friction + helps users self-reflect + fair to creators',
          image: `${process.env.PUBLIC_URL}/images/case-studies/bambu-v3.png`
        }
      ],
      keyDecision: {
        title: 'Key Design Decision',
        question: 'How do we fix attribution without adding friction?',
        answer: 'Use AI to meet users where they are—suggest tags based on what they write, rather than forcing extra steps',
        tradeoff: 'Chose suggestion over enforcement to preserve review completion rates'
      }
    },
    
    // Impact & Learnings
    impact: {
      title: 'Impact & Learnings',
      outcomes: [
        '🎯 Designed 4 interconnected features serving 3 stakeholder groups',
        '📈 Expected to reduce misdirected reviews by 35% based on research',
        '🤝 Balanced novice learning needs with power user efficiency',
        '💡 Turned a blame system into a learning system'
      ],
      skills: [
        'Systems thinking: Designed for ecosystem health, not just one user type',
        'Product sense: Identified that creator retention was the real business risk',
        'AI/ML patterns: Designed smart defaults without feeling "magic"',
        'Research: Validated with 400+ data points despite no internal access'
      ],
      nextSteps: [
        'Test with real users to validate friction vs value tradeoff',
        'Explore gamification: reward helpful, detailed reviews',
        'Consider: Should creators respond to reviews? How to prevent toxicity?'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f0a] text-white">
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src={data.hero}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0a0f0a]"></div>
        
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-emerald-400 transition-colors z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <FiArrowLeft className="text-xl" />
          <span className="text-sm font-medium">Back to Portfolio</span>
        </Link>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-500/30 mb-4 inline-block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                AI + Product Design
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{data.title}</h1>
              <p className="text-xl text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.subtitle}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        
        {/* Quick Context */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>The Challenge</h3>
              <p className="text-xl text-white font-medium" style={{ fontFamily: "'Sora', sans-serif" }}>{data.context.challenge}</p>
              <p className="text-emerald-400 mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>→ {data.context.discovery}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>The Outcome</h3>
              <p className="text-xl text-white font-medium" style={{ fontFamily: "'Sora', sans-serif" }}>{data.context.outcome}</p>
            </div>
          </div>
          
          <div className="flex gap-8 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <div><span className="text-gray-500">Role:</span> <span className="text-white">{data.context.role}</span></div>
            <div><span className="text-gray-500">Timeline:</span> <span className="text-white">{data.context.timeline}</span></div>
            <div><span className="text-gray-500">Team:</span> <span className="text-white">{data.context.team}</span></div>
          </div>
        </section>

        {/* Business Context */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>Context</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.businessContext.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-emerald-300" style={{ fontFamily: "'Sora', sans-serif" }}>{item.title}</h3>
                <p className="text-gray-300 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL DESIGNS FIRST */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Final Designs</h2>
            <p className="text-xl text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Here's what I built</p>
          </div>
          
          <div className="space-y-20">
            {data.finalDesigns.map((design, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/20">
                    <img src={design.image} alt={design.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full mb-4 border border-emerald-500/30" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {design.impact}
                  </div>
                  <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{design.title}</h3>
                  <div className="space-y-4 text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <div>
                      <span className="text-red-400 font-semibold">Problem: </span>
                      {design.problem}
                    </div>
                    <div>
                      <span className="text-emerald-400 font-semibold">Solution: </span>
                      {design.solution}
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-emerald-900/20 border-l-4 border-emerald-500 rounded shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    <p className="text-sm text-emerald-300 font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{design.highlight}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{data.research.title}</h2>
          <p className="text-xl text-gray-400 mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.research.subtitle}</p>
          
          {/* Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {data.research.methods.map((method, i) => (
              <div key={i} className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-xl p-6">
                <div className="text-4xl mb-3">{method.icon}</div>
                <h4 className="font-bold mb-2 text-emerald-300" style={{ fontFamily: "'Sora', sans-serif" }}>{method.title}</h4>
                <p className="text-sm text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{method.detail}</p>
              </div>
            ))}
          </div>
          
          {/* Findings */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {data.research.findings.map((finding, i) => (
              <div key={i} className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-emerald-400 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>{finding.stat}</div>
                <div className="text-sm font-bold text-emerald-300 uppercase mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{finding.label}</div>
                <p className="text-xs text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{finding.detail}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-emerald-900/30 border-l-4 border-emerald-500 rounded-r-xl p-6 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <p className="text-lg italic text-emerald-100" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>"{data.research.insight}"</p>
          </div>
        </section>

        {/* Design Explorations */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{data.explorations.title}</h2>
          <p className="text-xl text-gray-400 mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.explorations.subtitle}</p>
          
          <div className="space-y-12">
            {data.explorations.versions.map((version, i) => (
              <div key={i} className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <h4 className="text-xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>{version.version}</h4>
                  <p className="text-gray-300 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{version.approach}</p>
                  <p className="text-sm text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{version.learning}</p>
                </div>
                <div className="lg:col-span-2">
                  <div className="aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/20">
                    <img src={version.image} alt={version.version} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Key Decision */}
          <div className="mt-12 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-2xl p-8 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <h4 className="text-2xl font-bold mb-4 text-emerald-300" style={{ fontFamily: "'Sora', sans-serif" }}>{data.explorations.keyDecision.title}</h4>
            <div className="space-y-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <div>
                <span className="text-emerald-400 font-semibold">Question: </span>
                <span className="text-white">{data.explorations.keyDecision.question}</span>
              </div>
              <div>
                <span className="text-emerald-300 font-semibold">Answer: </span>
                <span className="text-gray-200">{data.explorations.keyDecision.answer}</span>
              </div>
              <div>
                <span className="text-gray-400 font-semibold">Tradeoff: </span>
                <span className="text-gray-300">{data.explorations.keyDecision.tradeoff}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Learnings */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: "'Sora', sans-serif" }}>{data.impact.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>Outcomes</h3>
              <ul className="space-y-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {data.impact.outcomes.map((outcome, i) => (
                  <li key={i} className="text-gray-300">{outcome}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>Skills Demonstrated</h3>
              <ul className="space-y-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {data.impact.skills.map((skill, i) => (
                  <li key={i} className="text-gray-300 text-sm">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>Next Steps</h3>
            <ul className="space-y-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {data.impact.nextSteps.map((step, i) => (
                <li key={i} className="text-gray-400 text-sm">→ {step}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-emerald-900/30">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Want to chat about this project?</h3>
          <a
            href="mailto:anthony.luong@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-emerald-900/30"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let's Talk <FiExternalLink />
          </a>
        </section>
      </div>
    </div>
  );
};

export default BambuLabCaseStudy;
