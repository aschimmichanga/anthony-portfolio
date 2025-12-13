import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import BambuLoop from './BambuLoop';
import ReviewInfographic from './ReviewInfographic';
import CreatorDashboardInfographic from './CreatorDashboardInfographic';
import LearningInfographic from './LearningInfographic';

import AttributionConceptInfographic from './AttributionConceptInfographic';
import SlicerWizardFlow from './SlicerWizardFlow';
import InterventionPointsInfographic from './InterventionPointsInfographic';
import Carousel from './Carousel';



const BambuLabCaseStudy = () => {
  const data = {
    // Hero
    title: 'Bambu Lab Case Study',
    subtitle: 'Improving Review System Accuracy and Transparency',
    hero: `${process.env.PUBLIC_URL}/images/case-studies/bambu-lab.png`,

    // Metadata
    metadata: {
      discipline: 'User Research, Product Design, AI/ML Design, Interaction Design',
      timeline: '4 weeks',
      role: 'Product Designer & UX Researcher',
      for: 'MakerWorld Platform',
      team: 'Solo project',
      tools: 'Figma, AI/ML Analysis'
    },

    // Summary
    summary: {
      goal: 'Design a review system for MakerWorld that helps users learn from failures while providing creators with fair, actionable feedback.',
      solution: 'A three-part intervention: AI Slicer Wizard for prevention, Context-Aware Reviews for attribution, and Web Parity for ecosystem consistency.',
      outcome: 'Expected to reduce misdirected reviews by 35% and improve feedback quality for both users and creators.'
    },





    // Quote Board
    quoteBoard: {
      title: 'Quote Board',
      categories: [
        {
          title: 'Misdirected Blame',
          color: 'pink',
          quotes: [
            '"I got rated a ✰✰✰✰✰ because they couldn\'t print more than one?" - VictorLagina',
            '"Power outage was their reason for giving me a 1." - GrassP',
            '"Thanks for screwing me because you store your filament in the shower." - IntoxicatedBurrito',
            '"They rate it like an Uber ride—if it fails, it\'s 1 star." - EviGL'
          ]
        },
        {
          title: 'Unaware Reviewers',
          color: 'yellow',
          quotes: [
            '"The UI really wants you to rate things. It\'s hard to ignore the prompt." - One_Bathroom5607',
            '"It\'s a half-assed system where people rate whatever\'s on their mind after the print." - esotericapybara',
            '"Most people aren\'t aware of any money being attached to this." - britishwonder'
          ]
        },
        {
          title: 'Frustrated Creators',
          color: 'orange',
          quotes: [
            '"We work hard to design cool models only to be kneecapped by beginners that don\'t even know how to print." - VictorLagina',
            '"Got a 2-star rating... no explanation. Probably printed it sideways." - snapwich',
            '"99.99% of people don\'t have issues with my model... but I keep getting bad adhesion reviews." - Maxx_Design',
            '"Here you are placing a rating <5 in complete silence." - Claudio_CloClo'
          ]
        }
      ]
    },

    // Why Prints Fail
    whyPrintsFail: {
      title: 'Problem Breakdown: Why Prints Fail',
      subtitle: 'It is not always the creator\'s fault. Failures fall into four distinct categories:',
      description: 'The data made it clear that the feedback loop between creators and reviewers is broken. Behind a simple star rating lies a complex system where print failures often stem from invisible variables outside the creator\'s control.',
      categories: [
        {
          title: 'User Error',
          items: [
            'Dirty build plate',
            'Wet filament',
            'Wrong filament type',
            'Poor maintenance',
            'Incorrect settings',
            'Manual handling issues'
          ]
        },
        {
          title: 'Printer / System Error',
          items: [
            'Clogged nozzle',
            'Heat creep',
            'Bed leveling failure',
            'Mechanical failure',
            'AMS errors',
            'Slicing bugs'
          ]
        },
        {
          title: 'External Errors',
          items: [
            'Environmental temp/humidity',
            'Drafts',
            'Power outages',
            'Vibrations'
          ]
        },
        {
          title: 'Creator Model Error',
          items: [
            'Unsupported overhangs',
            'Inaccurate photos',
            'Poor orientation',
            'Non-manifold geometry',
            'Tight tolerances',
            'Poor instructions'
          ]
        }
      ],
      conclusion: 'Most print failures aren\'t caused by the model creator. Understanding failure categories helps users provide accurate feedback and helps creators prioritize improvements.'
    },

    // Evidence Gathering
    evidenceGathering: {
      title: 'Evidence Gathering',
      onlineQuotes: {
        description: 'Methodology: Analyzed discussions on Reddit and Bambu\'s official forums.'
      },
      constraints: {
        description: 'Manual Data Analysis: Due to Cloudflare blocking automated scraping, a manual review of hundreds of reviews across the top 12 MakerWorld-exclusive models (past 30 days) was conducted.'
      },
      manualReview: {
        description: 'Sample Size: 42 low-star reviews (3 stars or below) were analyzed in depth.',
        focusAreas: [
          'Attribution Category',
          'Comment Clarity'
        ]
      },
      aiAnalysis: {
        description: 'Key Statistics:',
        findings: [
          '46% of low-star reviews pointed to actual model quality issues',
          '35% were due to user/setup-related errors',
          '19% lacked sufficient detail to determine attribution',
          '81% of reviews provided clear feedback, indicating a missed opportunity for structured data capture'
        ]
      },
      conclusion: 'Conclusion: The system flattens nuance. There is a critical need to separate user mistakes from design flaws to support iteration rather than punishment.'
    },

    // Research findings (for data visualization)
    research: {
      title: 'MakerWorld Review Analysis',
      subtitle: 'UX Case Study: Improving Review System Accuracy and Transparency',
      description: 'Analysis of 37 user reviews to identify patterns in low-star ratings.',
      totalReviews: 37,
      metrics: [
        { label: 'Total Reviews', value: 37, detail: 'Low-star ratings analyzed' },
        { label: 'Model Quality Issues', value: 17, detail: '46% of reviews' },
        { label: 'Clear Feedback', value: 30, detail: '81% of reviews' }
      ],
      attributionBreakdown: [
        { category: 'Model Quality Issue', percentage: 46, count: 17 },
        { category: 'User Error', percentage: 16, count: 6 },
        { category: 'Environmental/Setup Issue', percentage: 19, count: 7 },
        { category: 'Unclear Attribution', percentage: 19, count: 7 }
      ],
      commentClarity: [
        { type: 'Clear', count: 28 },
        { type: 'Vague', count: 5 },
        { type: 'Missing', count: 2 }
      ],
      starRatingDistribution: [
        { rating: 1, count: 8 },
        { rating: 2, count: 11 },
        { rating: 3, count: 17 }
      ],
      keyFindings: [
        {
          title: 'Model Quality Issues',
          description: '46% of reviews indicate actual design flaws in 3D models, including missing supports, difficult support removal, and structural weaknesses.',
          color: 'red'
        },
        {
          title: 'User/Setup Issues',
          description: '35% of reviews stem from printer calibration, material settings, or user technique issues.',
          color: 'gray'
        },
        {
          title: 'Unclear Feedback',
          description: '19% of reviews lack sufficient detail to determine the actual cause of issues.',
          color: 'gray'
        }
      ],
      recommendations: [
        {
          title: 'Improve Review Prompts',
          description: 'Guide users to provide specific details about print failures, including settings used and troubleshooting steps attempted.',
          color: 'green'
        },
        {
          title: 'Model Quality Verification',
          description: 'Implement pre-publication testing requirements for models to reduce design-related failures.',
          color: 'yellow'
        },
        {
          title: 'Attribution Classification',
          description: 'Add structured feedback forms to help users categorize issues and provide more actionable reviews.',
          color: 'purple'
        }
      ]
    },

    // Problems Being Addressed
    problemsAddressed: {
      title: 'Core Insights',
      problems: [
        {
          title: 'Misdirected Blame',
          description: 'The system fails to distinguish why a print failed. User setup errors, hardware malfunctions, and environmental factors are all conflated with model quality ratings. This damages creator reputations unjustly.',
          color: 'red'
        },
        {
          title: 'Unaware Reviewers',
          description: 'Users often don\'t realize that their feedback directly impacts creator compensation. Reviews are often emotional reactions to failed prints rather than objective critiques of the model file itself.',
          color: 'yellow'
        },
        {
          title: 'Frustrated Creators',
          description: 'Designers feel penalized for factors outside their control (e.g., a user\'s wet filament or dirty build plate). This lack of actionable, fair feedback disincentivizes investment in high-quality uploads.',
          color: 'orange'
        }
      ]
    },

    // Pain Points (kept for backward compatibility but restructured)
    painPoints: [
      {
        number: 1,
        title: 'There is a lack of guidance when prints fail.',
        description: 'When a print fails, users have no structured way to understand what went wrong. They\'re left guessing—was it the model? Their printer settings? Bad filament? The environment?',
        detail: 'This is in contrast to platforms like Thingiverse which provide troubleshooting guides, but MakerWorld offers no guidance at the critical failure moment.',
        visual: `${process.env.PUBLIC_URL}/images/case-studies/painpoint-1.png`
      },
      {
        number: 2,
        title: 'Users blame creators without understanding attribution.',
        description: 'Frustrated users leave 1-star reviews blaming creators for failures that were actually their own mistakes. They don\'t realize their reviews directly impact creator income.',
        detail: '35% of negative reviews were misdirected—blaming creators for user error. Most users didn\'t know their reviews hurt creator compensation.',
        visual: 'placeholder-angry-review.png'
      },
      {
        number: 3,
        title: 'Creators can\'t distinguish actionable feedback from noise.',
        description: 'Creators receive reviews but can\'t tell which feedback to act on. Is this a real product issue or just user error? They\'re left guessing what to improve.',
        detail: 'Without clear attribution, creators can\'t prioritize fixes. Real issues get buried in a sea of misdirected complaints.',
        visual: 'placeholder-creator-dashboard.png'
      },
      {
        number: 4,
        title: 'The review process doesn\'t help users learn.',
        description: 'Users leave reviews but gain no knowledge from the experience. They don\'t understand why their print failed, so they\'re likely to make the same mistake again.',
        detail: 'The current system focuses on rating, not learning. Users miss opportunities to improve their 3D printing skills through failure.',
        visual: 'placeholder-no-learning.png'
      }
    ],

    // Synthesis
    synthesis: {
      title: 'Synthesis',
      insight: 'Based on the sources of frustration for users and creators, I hypothesized that…',
      hypothesis: 'Guiding users through attribution at the moment of failure will help them learn from mistakes, reduce misdirected blame, and provide creators with actionable feedback.',
      focus: 'The current system uses ratings to assign blame. The design focuses on converting failure moments into learning opportunities by helping users understand what went wrong before they assign blame.'
    },

    // Mapping intervention points
    interventionPoints: {
      title: 'Identifying intervention points',
      description: 'Users experience frustration at multiple stages: when prints fail, when browsing reviews, when writing reviews, and when creators can\'t act on feedback. MakerWorld currently provides no support at these points.',
      points: [
        'At the failure moment: User doesn\'t know what went wrong',
        'During review writing: User blames creator without reflection',
        'When browsing reviews: Users can\'t filter by attribution type',
        'Creator dashboard: Creators can\'t distinguish actionable feedback'
      ],
      visual: 'placeholder-journey-map.png' // Placeholder for journey map visualization
    },

    // Ideation
    ideation: {
      title: 'Ideation',
      subtitle: 'Exploring multiple approaches to attribution',
      description: 'I explored several concepts to address the core problem: how to help users understand failure attribution before leaving reviews. Each concept had different trade-offs between user friction, learning value, and implementation complexity.',
      concepts: [
        {
          name: 'Pre-review troubleshooting quiz',
          description: 'Force users through a structured troubleshooting flow before they can submit a review',
          pros: ['Ensures reflection before blame', 'Comprehensive failure analysis', 'Strong learning opportunity'],
          cons: ['High friction - users abandon reviews', 'Feels punitive after failure', 'Too prescriptive'],
          status: 'Rejected - too much friction',
          color: 'red'
        },
        {
          name: 'Post-review attribution questions',
          description: 'Let users write reviews first, then prompt them to categorize what went wrong',
          pros: ['Lower friction than pre-review', 'Captures attribution data', 'Less intrusive'],
          cons: ['Users already blamed creators mentally', 'Attribution happens too late', 'Less effective learning'],
          status: 'Iterated - moved earlier in flow',
          color: 'yellow'
        },
        {
          name: 'AI-powered tag suggestions',
          description: 'Analyze review text in real-time and suggest relevant attribution tags as users type',
          pros: ['Low friction - feels natural', 'Prompts self-reflection', 'Fair to creators', 'Scalable'],
          cons: ['Requires AI/ML infrastructure', 'Need training data'],
          status: 'Selected - final solution',
          color: 'green'
        },
        {
          name: 'Contextual help cards',
          description: 'Display troubleshooting tips when users select "user error" tags',
          pros: ['Converts complaints into learning', 'Progressive disclosure', 'Reduces misdirected reviews'],
          cons: ['Requires content creation', 'May feel condescending if not done well'],
          status: 'Selected - part of final solution',
          color: 'green'
        },
        {
          name: 'Review filters by attribution',
          description: 'Allow users to filter reviews by failure cause type when browsing models',
          pros: ['Helps users find relevant feedback', 'Makes reviews actionable', 'Serves multiple stakeholders'],
          cons: ['Requires attribution data', 'UI complexity'],
          status: 'Selected - part of final solution',
          color: 'green'
        },
        {
          name: 'Creator insights dashboard',
          description: 'Analytics dashboard showing attribution breakdown and actionable feedback for creators',
          pros: ['Empowers data-driven iteration', 'Distinguishes real issues from noise', 'Retains creators'],
          cons: ['Requires backend infrastructure', 'Complex data visualization'],
          status: 'Selected - part of final solution',
          color: 'green'
        }
      ],
      process: 'I started with high-friction approaches (pre-review quiz) and iterated toward lower-friction solutions. The key insight was that attribution needs to happen before blame is assigned, but without feeling punitive or prescriptive.',
      keyInsight: 'The winning approach combines AI suggestions (low friction) with contextual help (high learning value), creating a system that guides without forcing.'
    },

    // The Attribution Concept
    attributionConcept: {
      title: 'The Attribution Concept',
      description: 'The solution combines attribution tags with contextual interventions.',
      explanation: 'Attribution tags help users categorize failure causes before writing reviews. Contextual interventions provide relevant help at critical moments, converting blame into learning opportunities.',
      visual: 'placeholder-concept-diagram.png' // Placeholder for concept visualization
    },

    // Our Solution
    solution: {
      title: 'Proposed Design Solutions',
      introduction: 'Solution overview',
      description: 'An AI-powered attribution system that guides users to categorize failure causes before submitting reviews. Integrated into the review flow, it converts failure moments into learning opportunities.',
      features: [
        {
          title: 'Solution 1: Slicer Wizard (AI Chatbot)',
          problem: 'Users make preventable mistakes before printing even starts',
          solution: 'A preventive AI plugin guides users on correct settings and best practices (e.g., suggesting a brim for adhesion) before they slice the file. Example: "Do you think my print needs a brim?" -> AI suggests "Outer Brim Only" for better adhesion without scarring.',
          component: <SlicerWizardFlow />,
          impact: 'Prevents failure before it happens',
          highlight: 'Preventive Design: Catching errors upstream'
        },
        {
          title: 'Solution 2: Revamped Post-Print Review System',
          problem: 'Users blame creators without understanding why prints fail',
          solution: 'A structured review flow that replaces the simple 5-star system with context-aware attribution. Positive Attribution (> 4 Stars) for what worked. Negative Attribution (< 3 Stars) requires selecting a failure reason (e.g., "Bed adhesion issue").',
          visual: `${process.env.PUBLIC_URL}/images/case-studies/bambu-attribution-tags.png`,
          impact: 'Reduces misdirected blame by 35%',
          highlight: 'Educational Deflection: Linking to Wiki docs for self-debugging'
        },
        {
          title: 'Solution 3: MakerWorld Web Parity',
          problem: 'Inconsistent experience across Slicer and Web platforms',
          solution: 'Bringing the enhanced review system from the slicer to the browser-based MakerWorld platform. Ensures a consistent experience across all touchpoints.',
          visual: `${process.env.PUBLIC_URL}/images/case-studies/bambu-filters.png`,
          impact: 'Unified ecosystem experience',
          highlight: 'Systems thinking: Consistent standards across all touchpoints'
        }
      ]
    },

    // Insights answered
    insightsAnswered: {
      title: 'Problem-solution mapping',
      mappings: [
        { problem: 'Lack of guidance when prints fail', solution: 'AI-powered tag suggestions' },
        { problem: 'Misdirected blame', solution: 'Attribution system prompts self-reflection' },
        { problem: 'No learning from failure', solution: 'Contextual help cards and troubleshooting tips' },
        { problem: 'Creators can\'t act on feedback', solution: 'Creator insights dashboard with AI analysis' }
      ]
    },

    // Wishes
    wishes: {
      title: 'Future considerations',
      items: [
        {
          title: 'Test with MakerWorld users',
          description: 'Due to time constraints, testing was limited to one round with 3D printing enthusiasts. Testing with actual MakerWorld users who recently experienced print failures would provide more relevant insights.'
        },
        {
          title: 'Explore review incentives',
          description: 'Future work could explore rewarding users for detailed, helpful reviews to make review writing a positive experience rather than primarily a complaint mechanism.'
        }
      ]
    },

    // Learnings
    learnings: {
      title: 'Key learnings',
      items: [
        {
          title: 'Systems thinking is essential',
          description: 'Understanding how one broken feature (reviews) affects the entire ecosystem—users, creators, and platform growth—was critical. Designing for ecosystem health rather than a single user type led to better solutions.'
        },
        {
          title: 'AI should reduce friction, not add it',
          description: 'Early iterations forced users through attribution flows, which created friction. The final approach uses AI suggestions that feel natural and non-prescriptive, meeting users where they are.'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f0a] text-white">
      {/* Hero */}
      <div className="relative h-[85vh] overflow-hidden">
        <img
          src={data.hero}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-[#0a0f0a]"></div>

        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-emerald-400 transition-colors z-10 group" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <FiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Portfolio</span>
        </Link>

        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
                {data.title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {data.subtitle}
              </p>

              {/* Metadata */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-8 border-t border-white/10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">Discipline</div>
                  <div className="text-white font-medium">{data.metadata.discipline}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">Timeline</div>
                  <div className="text-white font-medium">{data.metadata.timeline}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">Role</div>
                  <div className="text-white font-medium">{data.metadata.role}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">For</div>
                  <div className="text-white font-medium">{data.metadata.for}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">Team</div>
                  <div className="text-white font-medium">{data.metadata.team}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">Tools</div>
                  <div className="text-white font-medium">{data.metadata.tools}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20">

        {/* Summary */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 border-y border-white/10 py-12"
          >
            <div>
              <h3 className="text-emerald-400 font-bold mb-4 uppercase tracking-wider text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Goal</h3>
              <p className="text-xl text-white font-medium leading-relaxed" style={{ fontFamily: "'Sora', sans-serif" }}>
                Design a review system that helps users learn from failures while providing creators with fair, actionable feedback.
              </p>
            </div>
            <div>
              <h3 className="text-emerald-400 font-bold mb-4 uppercase tracking-wider text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Solution</h3>
              <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                A three-part intervention: AI Slicer Wizard for prevention, Context-Aware Reviews for attribution, and Web Parity for ecosystem consistency.
              </p>
            </div>
            <div className="relative group">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-emerald-400 font-bold uppercase tracking-wider text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Projected Impact</h3>
                <div className="cursor-help text-emerald-500/50 hover:text-emerald-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Calculation: 15 out of 42 analyzed negative reviews (35%) were attributed to user error. This solution targets those specific cases.
                  </p>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>35%</div>
              <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Estimated reduction in misdirected reviews, based on analysis of 42 actual negative reviews.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Background & Context */}
        <section className="mb-32">
          {/* Hardware Intro: The Printers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div className="relative bg-[#101010] rounded-xl overflow-hidden border border-[#333] group">
              {/* Ghost image to set container height based on aspect ratio */}
              <img
                src={`${process.env.PUBLIC_URL}/images/case-studies/bambu-marketing-official-v2.png`}
                alt=""
                className="invisible w-full h-auto"
                aria-hidden="true"
              />
              <div className="absolute inset-0">
                <Carousel
                  images={[
                    { src: `${process.env.PUBLIC_URL}/images/case-studies/PC_2.mp4`, label: "Bambu Lab's New Flagship Model H2C with Votek" }
                  ]}
                />
              </div>
            </div>
          </motion.div>

          {/* Part 1: The Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 max-w-4xl mx-auto"
          >
            <div className="space-y-6 mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Context: The Promise vs Reality Gap</h2>
              <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Bambu Lab is often seen as the Apple of 3D printing, a company that brings hardware (<a href="https://bambulab.com/en" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">Printers</a>), software (<a href="https://bambulab.com/en/download/studio" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">Bambu Studio</a>), and marketplace (<a href="https://makerworld.com/en" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">MakerWorld</a>) together into a single easy to use ecosystem. For beginners, this is exactly the appeal: a smooth, guided entry into a notoriously technical hobby.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                But once users move past setup and begin printing, the experience becomes less predictable. Issues like poor bed adhesion, plate contamination, or incorrect filament profiles can derail a print instantly. And when they do, most users have no diagnostic scaffolding. They don’t know what failed or why.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                The gap between the polished promise and the messy reality leaves both new users and creators without the guidance the ecosystem assumes they have.
              </p>
            </div>

            <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 group">
              {/* Ghost image to set container height based on aspect ratio */}
              <img
                src={`${process.env.PUBLIC_URL}/images/case-studies/bambu-marketing-official-v2.png`}
                alt=""
                className="invisible w-full h-auto"
                aria-hidden="true"
              />
              <div className="absolute inset-0">
                <Carousel
                  objectFit="cover"
                  images={[
                    { src: `${process.env.PUBLIC_URL}/images/case-studies/bambu-marketing-official-v2.png`, label: "Official Marketing: Plug-N-Play Promise" },
                    { src: `${process.env.PUBLIC_URL}/images/case-studies/bambu-marketing-15mins.png`, label: "Official Marketing: 15 Minutes Setup" },
                    { src: `${process.env.PUBLIC_URL}/images/case-studies/bambu-studio-ui.png`, label: "Bambu Studio: 3D Printing Software" },
                    { src: `${process.env.PUBLIC_URL}/images/case-studies/makerworld-ui.png`, label: "MakerWorld: The Model Marketplace" }
                  ]}
                />
              </div>
            </div>
          </motion.div>

          {/* Part 2: The Spark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-6 mb-12">
              <h3 className="text-3xl font-bold text-emerald-400 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>The Personal Spark</h3>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <p>
                  I felt this gap too.  I bought my first printer in June 2025, even after completing Bambu Lab’s learning materials, I still found myself finding answers from forums, Reddit threads, YouTube tutorials, and Chatgpt just to understand slicer settings and print failures. This worked for me because I enjoy tinkering, although it quietly contradicted the ease of use the ecosystem promises. For most beginners, the barrier is not the printer, it is the absence of guidance once something goes wrong.
                </p>
                <p>
                  For the first few months I only downloaded free models from MakerWorld and assumed the occasional failure was simply part of learning. The underlying issue surfaced only when I began publishing my own models. One of my earliest uploads, a simple spaceship from the game EVE Online, received a one star review from a user whose first layer failed because of a dirty build plate. The fix was easy, a quick soap and water cleaning of the plate. But the user blamed the model, and the platform displayed their review as a critique of “model quality.”
                </p>
                <p>
                  Users are misattributing their issues to creator design flaws. Creators are being penalized for issues unrelated to their models. And beginners are leaving the experience without learning anything that would help them succeed the next time.
                </p>
                <p className="text-white font-medium border-l-2 border-emerald-500 pl-4">
                  A system designed to feel seamless at the start leaves everyone unsupported the moment reality becomes unpredictable.
                </p>
              </div>
            </div>

            {/* Carousel for Keepstar Images */}
            <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden border border-gray-800 group">
              <Carousel
                images={[
                  { src: `${process.env.PUBLIC_URL}/images/case-studies/bambu-microcenter.jpg`, label: "Day 1: Picking up my P1S Combo at Microcenter" },
                  { src: `${process.env.PUBLIC_URL}/images/case-studies/bambu-software-complexity.png`, label: "Slicer Software" },
                  { src: `${process.env.PUBLIC_URL}/images/case-studies/bambu-gpt-debug.png`, label: "Debugging Failures with Chatgpt" },
                  { src: `${process.env.PUBLIC_URL}/images/case-studies/bambu-keepstar-2.jpg`, label: "My EVE Online Keepstar Model" }
                ]}
              />
            </div>
          </motion.div>
        </section>

        {/*MakerWorld Incentives*/}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-[#101010] border border-[#222] rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>MakerWorld’s Incentive Program</h3>
                <div className="text-lg text-gray-300 leading-relaxed space-y-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <p>
                    MakerWorld stands out from other STL sites by offering high quality models at no cost to the user. Since the platform connects directly to Bambu Studio, the models users download and print shape how they judge the reliability of the entire ecosystem.
                  </p>
                  <p>
                    To maintain that quality at scale, Bambu Lab rewards creators with points when users complete valid prints. Points convert into Bambu Lab store credit, and visibility is influenced by ratings and successful print reports.
                  </p>

                  <p className="font-medium text-emerald-400 pt-4">
                    This gives creators a real incentive to publish high quality models that print well on the first attem
                  </p>
                </div>
              </div>
              {/* Visual/Icon for Points/Economy */}
              <div className="w-full md:w-1/3 flex items-center justify-center">
                <div className="relative w-full max-w-[280px] rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/case-studies/bambu-gift-card.png`}
                    alt="MakerWorld Points Redemption Interface"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The "Why" Grid */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Problem Statement */}
            <div className="lg:col-span-2 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-800/30 rounded-2xl p-8 lg:p-12 relative overflow-hidden group hover:border-orange-700/50 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-orange-400" style={{ fontFamily: "'Sora', sans-serif" }}>Define the Problem Clearly</h2>
              <div className="text-lg text-gray-200 leading-relaxed space-y-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <p>The fundamental flaw in MakerWorld's review mechanism lies in its narrow scope. Constraining feedback to 1-5 star ratings, comments, and photos drastically oversimplifies the multi-stage process of digital creation to physical output. <br /><em className="text-white"></em></p>
                <p>The system captures the outcome, not the cause. That blind spot produces a ripple effect:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Users misattribute failures to creators.</li>
                  <li>Creators are penalized for issues unrelated to their models.</li>
                  <li>Feedback becomes noise rather than learning.</li>
                  <li>Beginners sense frustration rather than progress.</li>
                  <li>The marketplace trust loop breaks.</li>
                </ul>
                <p className="font-medium text-orange-300 pt-4">In an ecosystem built on plug and print accessibility, the weakest link becomes assumption.</p>
              </div>
            </div>

            {/* Why It Matters */}
            <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-2xl p-8 relative overflow-hidden group hover:border-emerald-700/50 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>Why It Matters (The Broken Flywheel)</h2>
              <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Bambu Lab depends on a feedback flywheel. Creators upload reliable models, users get successful prints, and positive reviews surface the best designs. This attracts more users, strengthens the ecosystem, and fuels growth. The flywheel slows when creators no longer feel that uploading to MakerWorld is worth the effort. The issue is not the printers or the models, but the system’s inability to tell real design flaws from simple user misunderstandings.
              </p>
            </div>

            {/* Success Vision */}
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-800/30 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-700/50 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-blue-400" style={{ fontFamily: "'Sora', sans-serif" }}>Insight: Failure Is an Opportunity to Learn</h2>
              <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Failures are not the problem. Misclassification is. Every failed print is an opportunity to learn, holding information that could help both the user and the ecosystem improve. Yet none of this learning is captured or surfaced.</p>
              <p className="font-medium text-blue-300 pt-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>The insight is simple: attribute the failure before evaluating the model.</p>
            </div>
          </motion.div>
        </section>

        {/* Business Feedback Loop */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>The Ideal Flywheel</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Bambu Lab's business model depends on a healthy feedback loop between creators and users.</p>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-emerald-800/30 rounded-2xl p-4 sm:p-6 md:p-8 overflow-visible">
              <BambuLoop />
            </div>
          </motion.div>
        </section>

        {/* Evidence Gathering */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>{data.evidenceGathering.title}</h2>

            <div className="space-y-8 mb-12">
              <div className="bg-white/5 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-emerald-300" style={{ fontFamily: "'Sora', sans-serif" }}>Online Quotes</h3>
                <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.evidenceGathering.onlineQuotes.description}</p>
              </div>

              <div className="bg-white/5 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-300" style={{ fontFamily: "'Sora', sans-serif" }}>Constraints</h3>
                <p className="text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.evidenceGathering.constraints.description}</p>
              </div>

              <div className="bg-white/5 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-300" style={{ fontFamily: "'Sora', sans-serif" }}>Manual Review</h3>
                <p className="text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.evidenceGathering.manualReview.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  {(data.evidenceGathering?.manualReview?.focusAreas || []).map((area, i) => (
                    <li key={i} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{area}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-300" style={{ fontFamily: "'Sora', sans-serif" }}>AI-Assisted Classification</h3>
                <p className="text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.evidenceGathering.aiAnalysis.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  {(data.evidenceGathering?.aiAnalysis?.findings || []).map((finding, i) => (
                    <li key={i} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{finding}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-emerald-900/30 border-l-4 border-emerald-500 rounded-r-xl p-6">
              <p className="text-lg text-emerald-100 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.evidenceGathering.conclusion}</p>
            </div>
          </motion.div>
        </section>

        {/* MakerWorld Review Analysis - Data Visualization */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{data.research.title}</h2>
            <p className="text-xl text-gray-400 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.research.subtitle}</p>
            <p className="text-lg text-gray-500 mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.research.description}</p>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {(data.research?.metrics || []).map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-xl p-6 text-center cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                    className="text-5xl font-bold text-emerald-400 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {metric.value}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    className="text-sm font-bold text-emerald-300 uppercase mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {metric.label}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.4 }}
                    whileHover={{ x: 5 }}
                    className="text-xs text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {metric.detail}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Attribution Breakdown */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6 text-emerald-300" style={{ fontFamily: "'Sora', sans-serif" }}>Attribution Categories</h3>
                <div className="space-y-4">
                  {(data.research?.attributionBreakdown || []).map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.category}</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.5 }}
                          className="text-emerald-400 font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {item.percentage}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                          className="bg-emerald-500 h-3 rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6 text-emerald-300" style={{ fontFamily: "'Sora', sans-serif" }}>Comment Clarity</h3>
                <div className="space-y-4">
                  {(data.research?.commentClarity || []).map((item, i) => {
                    const percentage = Math.round((item.count / data.research.totalReviews) * 100);
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.type}</span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.5 }}
                            className="text-emerald-400 font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {item.count} ({percentage}%)
                          </motion.span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                            className="bg-blue-500 h-3 rounded-full"
                          ></motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Key Findings */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {(data.research?.keyFindings || []).map((finding, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-gradient-to-br ${finding.color === 'red' ? 'from-red-900/20 to-orange-900/20 border-red-800/30' :
                    'from-gray-900/20 to-gray-800/20 border-gray-700/30'
                    } border rounded-xl p-6 cursor-pointer`}
                >
                  <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2 }}
                    className="text-lg font-bold mb-3 text-white" style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {finding.title}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    whileHover={{ x: 5 }}
                    className="text-sm text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {finding.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Recommendations */}
            <div className="grid md:grid-cols-3 gap-6">
              {(data.research?.recommendations || []).map((rec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-gradient-to-br ${rec.color === 'green' ? 'from-emerald-900/20 to-teal-900/20 border-emerald-800/30' :
                    rec.color === 'yellow' ? 'from-yellow-900/20 to-amber-900/20 border-yellow-800/30' :
                      'from-purple-900/20 to-pink-900/20 border-purple-800/30'
                    } border rounded-xl p-6 cursor-pointer`}
                >
                  <motion.h4
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2 }}
                    className="text-lg font-bold mb-3 text-white" style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {rec.title}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    whileHover={{ x: 5 }}
                    className="text-sm text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {rec.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Quote Board */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-12" style={{ fontFamily: "'Sora', sans-serif" }}>{data.quoteBoard?.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {(data.quoteBoard?.categories || []).map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-gradient-to-br ${category.color === 'pink' ? 'from-pink-900/30 to-rose-900/30 border-pink-800/30' :
                    category.color === 'yellow' ? 'from-yellow-900/30 to-amber-900/30 border-yellow-800/30' :
                      'from-orange-900/30 to-red-900/30 border-orange-800/30'
                    } border rounded-xl p-6 cursor-pointer`}
                >
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2 }}
                    className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {category.title}
                  </motion.h3>
                  <div className="space-y-4">
                    {(category?.quotes || []).map((quote, j) => (
                      <motion.p
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + j * 0.1 + 0.3 }}
                        whileHover={{ x: 5 }}
                        className="text-sm text-gray-200 italic leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {quote}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why Prints Fail */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{data.whyPrintsFail.title}</h2>
            <p className="text-2xl text-emerald-400 mb-8 font-semibold" style={{ fontFamily: "'Sora', sans-serif" }}>{data.whyPrintsFail.subtitle}</p>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.whyPrintsFail.description}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {(data.whyPrintsFail?.categories || []).map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-gradient-to-br ${category.title === 'Creator Model Error' ? 'from-orange-900/30 to-red-900/30 border-orange-800/30' :
                    'from-gray-900/30 to-gray-800/30 border-gray-700/30'
                    } border rounded-xl p-6 cursor-pointer`}
                >
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2 }}
                    className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {category.title}
                  </motion.h3>
                  <ul className="space-y-2">
                    {(category?.items || []).map((item, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + j * 0.1 + 0.3 }}
                        whileHover={{ x: 5 }}
                        className="text-sm text-gray-300 flex items-start" style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        <span className="text-emerald-400 mr-2">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="bg-emerald-900/30 border-l-4 border-emerald-500 rounded-r-xl p-6">
              <p className="text-lg text-emerald-100 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.whyPrintsFail.conclusion}</p>
            </div>
          </motion.div>
        </section>

        {/* Problems Being Addressed */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-12" style={{ fontFamily: "'Sora', sans-serif" }}>{data.problemsAddressed?.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {(data.problemsAddressed?.problems || []).map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-gradient-to-br ${problem.color === 'red' ? 'from-red-900/30 to-orange-900/30 border-red-800/30' :
                    problem.color === 'yellow' ? 'from-yellow-900/30 to-amber-900/30 border-yellow-800/30' :
                      'from-orange-900/30 to-red-900/30 border-orange-800/30'
                    } border rounded-xl p-6 cursor-pointer`}
                >
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2 }}
                    className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {problem.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    whileHover={{ x: 5 }}
                    className="text-sm text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {problem.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>


        {/* Pain Points */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-12" style={{ fontFamily: "'Sora', sans-serif" }}>Pain Point #{data.painPoints[0].number}</h2>

            {data.painPoints.map((point, i) => (
              <div key={i} className="mb-24">
                <h3 className="text-3xl font-bold mb-4 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {point.title}
                </h3>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {point.description}
                </p>
                <p className="text-gray-400 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {point.detail}
                </p>

                {/* Visual */}
                {point.number === 2 ? (
                  <div className="bg-gray-900/30 border border-emerald-800/30 rounded-2xl mb-8 overflow-hidden shadow-lg shadow-emerald-900/20 py-6">
                    <ReviewInfographic />
                  </div>
                ) : point.number === 3 ? (
                  <div className="bg-gray-900/30 border border-emerald-800/30 rounded-2xl mb-8 overflow-hidden shadow-lg shadow-emerald-900/20 py-6">
                    <CreatorDashboardInfographic />
                  </div>
                ) : point.number === 4 ? (
                  <div className="bg-gray-900/30 border border-emerald-800/30 rounded-2xl mb-8 overflow-hidden shadow-lg shadow-emerald-900/20 py-6">
                    <LearningInfographic />
                  </div>
                ) : point.visual && !point.visual.includes('placeholder') ? (
                  <div className="aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl mb-8 overflow-hidden shadow-lg shadow-emerald-900/20">
                    <img
                      src={point.visual}
                      alt={point.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-emerald-800/30 rounded-2xl p-8 mb-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent)]"></div>
                    <div className="relative h-full flex flex-col items-center justify-center">
                      <div className="text-6xl mb-4 opacity-50">📱</div>
                      <div className="bg-gray-800/50 rounded-lg p-4 mb-3 w-full max-w-md border border-gray-700">
                        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4 w-full max-w-md border border-gray-700">
                        <div className="h-4 bg-gray-700 rounded w-2/3 mb-2"></div>
                        <div className="h-3 bg-gray-700 rounded w-1/3"></div>
                      </div>
                      <p className="text-gray-500 text-xs mt-4 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {point.number === 1 && 'User sees failed print with no guidance'}
                        {point.number === 3 && 'Creator dashboard shows unclear feedback'}
                        {point.number === 4 && 'No learning opportunity from failure'}
                      </p>
                    </div>
                  </div>
                )}

                {i < data.painPoints.length - 1 && (
                  <>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-12 mt-20" style={{ fontFamily: "'Sora', sans-serif" }}>Pain Point #{data.painPoints[i + 1].number}</h2>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </section>

        {/* Synthesis */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>{data.synthesis.title}</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <p>{data.synthesis.insight}</p>
              <p className="text-xl text-white font-medium">{data.synthesis.hypothesis}</p>
              <p>{data.synthesis.focus}</p>
            </div>
          </motion.div>
        </section>

        {/* Mapping intervention points */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>{data.interventionPoints.title}</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {data.interventionPoints.description}
            </p>

            {/* Intervention Points Infographic */}
            <div className="bg-gray-900/30 border border-emerald-800/30 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/20 mb-8">
              <InterventionPointsInfographic />
            </div>

            {/* Points List */}
            <div className="space-y-4">
              {data.interventionPoints.points.map((point, i) => (
                <div key={i} className="flex gap-4 text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <span className="text-emerald-400 font-bold">{i + 1}.</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Ideation */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{data.ideation.title}</h2>
            <p className="text-xl text-gray-400 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.ideation.subtitle}</p>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {data.ideation.description}
            </p>

            {/* Concept Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {data.ideation.concepts.map((concept, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-gradient-to-br ${concept.color === 'green' ? 'from-emerald-900/30 to-teal-900/30 border-emerald-700/50' :
                    concept.color === 'yellow' ? 'from-yellow-900/30 to-amber-900/30 border-yellow-700/50' :
                      'from-red-900/30 to-orange-900/30 border-red-700/50'
                    } border rounded-xl p-6 cursor-pointer relative overflow-hidden`}
                >
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-2 py-1 rounded text-xs font-semibold ${concept.status.includes('Selected') ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                    concept.status.includes('Rejected') ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                      'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {concept.status.split(' - ')[0]}
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-white pr-16" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {concept.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {concept.description}
                  </p>

                  {/* Pros */}
                  <div className="mb-3">
                    <div className="text-xs font-semibold text-emerald-400 mb-2 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Pros</div>
                    <ul className="space-y-1">
                      {concept.pros.map((pro, j) => (
                        <li key={j} className="text-xs text-gray-400 flex items-start" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          <span className="text-emerald-400 mr-2">+</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <div className="text-xs font-semibold text-red-400 mb-2 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Cons</div>
                    <ul className="space-y-1">
                      {concept.cons.map((con, j) => (
                        <li key={j} className="text-xs text-gray-400 flex items-start" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          <span className="text-red-400 mr-2">−</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Process Narrative */}
            <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border-l-4 border-emerald-500 rounded-r-xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-4 text-emerald-300" style={{ fontFamily: "'Sora', sans-serif" }}>The Ideation Process</h3>
              <p className="text-lg text-gray-200 leading-relaxed mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {data.ideation.process}
              </p>
              <p className="text-lg text-emerald-100 font-medium leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {data.ideation.keyInsight}
              </p>
            </div>

            {/* Evolution Visualization */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-emerald-800/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent)]"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-6 text-emerald-300" style={{ fontFamily: "'Sora', sans-serif" }}>Concept Evolution</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {data.ideation.concepts.slice(0, 3).map((concept, i) => (
                    <React.Fragment key={i}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                        className={`flex-1 bg-gradient-to-br ${concept.color === 'green' ? 'from-emerald-900/40 to-teal-900/40 border-emerald-700/50' :
                          concept.color === 'yellow' ? 'from-yellow-900/40 to-amber-900/40 border-yellow-700/50' :
                            'from-red-900/40 to-orange-900/40 border-red-700/50'
                          } border rounded-lg p-4 text-center`}
                      >
                        <div className="text-xs font-semibold mb-2 text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          V{i + 1}
                        </div>
                        <div className="text-sm font-medium text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {concept.name.split(' ')[0]} {concept.name.split(' ')[1]}
                        </div>
                        <div className={`text-xs px-2 py-1 rounded inline-block ${concept.status.includes('Selected') ? 'bg-emerald-500/20 text-emerald-300' :
                          concept.status.includes('Rejected') ? 'bg-red-500/20 text-red-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {concept.status.split(' - ')[0]}
                        </div>
                      </motion.div>
                      {i < 2 && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 + 0.3 }}
                          className="text-emerald-400 text-2xl hidden md:block"
                        >
                          →
                        </motion.div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <p className="text-center text-gray-500 text-xs mt-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Iterative refinement: from high-friction quiz to low-friction AI suggestions
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The Attribution Concept */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>{data.attributionConcept.title}</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <p>{data.attributionConcept.description}</p>
              <p>{data.attributionConcept.explanation}</p>
            </div>

            {/* Attribution Concept Infographic */}
            <div className="bg-gray-900/30 border border-emerald-800/30 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/20">
              <AttributionConceptInfographic />
            </div>
          </motion.div>
        </section>


        {/* Our Solution */}
        <section id="solution" className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{data.solution.title}</h2>

            {/* Current State Placeholder */}
            <div className="mb-12">
              <p className="text-lg text-gray-400 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>This is what MakerWorld reviews look like now.</p>
              <div className="aspect-video bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-red-800/30 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent)]"></div>
                <div className="relative h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-5 h-5 rounded ${i < 1 ? 'bg-red-500' : 'bg-gray-700'}`}></div>
                      ))}
                    </div>
                    <div className="text-red-400 text-sm ml-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1 Star</div>
                  </div>
                  <div className="flex-1 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="h-4 bg-gray-700 rounded w-3/4 mb-3"></div>
                    <div className="h-3 bg-gray-700 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                  </div>
                  <p className="text-gray-500 text-xs mt-2 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Simple star rating with text - no attribution guidance
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <p className="text-lg text-gray-400 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>This is what I imagine it to be.</p>
              <div className="aspect-video bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-emerald-800/30 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent)]"></div>
                <div className="relative h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-5 h-5 rounded ${i < 3 ? 'bg-emerald-500' : 'bg-gray-700'}`}></div>
                      ))}
                    </div>
                    <div className="text-emerald-400 text-sm ml-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>4 Stars</div>
                  </div>
                  <div className="mb-3">
                    <div className="text-xs text-gray-400 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Print Issues (select all that apply):</div>
                    <div className="flex flex-wrap gap-2">
                      <div className="h-6 bg-emerald-700/50 rounded-full px-3 flex items-center">
                        <span className="text-xs text-emerald-300">Bed Adhesion</span>
                      </div>
                      <div className="h-6 bg-emerald-700/50 rounded-full px-3 flex items-center">
                        <span className="text-xs text-emerald-300">User Error</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="h-4 bg-gray-700 rounded w-3/4 mb-3"></div>
                    <div className="h-3 bg-gray-700 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                  </div>
                  <p className="text-gray-500 text-xs mt-2 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Attribution tags guide users to reflect before reviewing
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-8 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>{data.solution.introduction}</h3>
            <p className="text-lg text-gray-300 mb-16 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {data.solution.description}
            </p>

            {/* Features */}
            <div className="space-y-24">
              {data.solution.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Image or Component */}
                  <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    {feature.component ? (
                      <div className="bg-gray-900/50 border border-emerald-800/30 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/20">
                        {feature.component}
                      </div>
                    ) : (
                      <div className="aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/20">
                        <img src={feature.visual} alt={feature.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full mb-4 border border-emerald-500/30" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {feature.impact}
                    </div>
                    <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{feature.title}</h3>
                    <div className="space-y-4 text-gray-300 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      <div>
                        <span className="text-red-400 font-semibold">Problem: </span>
                        {feature.problem}
                      </div>
                      <div>
                        <span className="text-emerald-400 font-semibold">Solution: </span>
                        {feature.solution}
                      </div>
                    </div>
                    <div className="p-4 bg-emerald-900/20 border-l-4 border-emerald-500 rounded shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      <p className="text-sm text-emerald-300 font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{feature.highlight}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Insights answered */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-12" style={{ fontFamily: "'Sora', sans-serif" }}>{data.insightsAnswered.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.insightsAnswered.mappings.map((mapping, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-xl p-6">
                  <div className="text-red-400 font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{mapping.problem}</div>
                  <div className="text-emerald-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>→ {mapping.solution}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Wishes */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-12" style={{ fontFamily: "'Sora', sans-serif" }}>{data.wishes.title}</h2>
            <div className="space-y-8">
              {data.wishes.items.map((wish, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>{wish.title}</h3>
                  <p className="text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{wish.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Learnings */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-12" style={{ fontFamily: "'Sora', sans-serif" }}>{data.learnings.title}</h2>
            <div className="space-y-12">
              {data.learnings.items.map((learning, i) => (
                <div key={i}>
                  <h3 className="text-2xl font-bold mb-4 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>{learning.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{learning.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-emerald-900/30">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>Want to chat about this project?</h3>
          <a
            href="mailto:anthony.luong@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-emerald-900/30"
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
