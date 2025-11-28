import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';

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
      solution: 'An attribution system with AI-powered tag suggestions that prompts users to categorize failure causes before submitting reviews.',
      outcome: 'Expected to reduce misdirected reviews by 35% and improve feedback quality for both users and creators.'
    },
    
    // Problem Statement
    problemStatement: {
      title: 'Problem Statement',
      content: 'Bambu Lab\'s current post-print rating flow prompts users to rate the 3D model—whether or not the print succeeded—without surfacing relevant troubleshooting context or attribution. This leads to inaccurate low-star reviews driven by user error or "invisible" setup issues, not inherent model flaws. As a result, creators are unfairly penalized, and feedback is reduced to an ambiguous 1-5 star count. Rather than a learning opportunity, both parties are left in the dark about what went wrong or why, making it harder to iterate—especially as more inexperienced (novice) users enter the ecosystem expecting a seamless, plug-and-print experience.'
    },
    
    // Why it matters
    whyItMatters: {
      title: 'Why it matters',
      content: 'This is a broken business feedback loop that damages Bambu Lab\'s ecosystem. When prints fail and reviews misattribute the cause, trust erodes, creators disengage, and content quality declines. This reduces product confidence and impacts printer and accessory sales. Fixing this restores clarity, realigns incentives, and improves outcomes for users and creators.'
    },
    
    // Success Vision
    successVision: {
      title: 'Success Vision',
      content: 'Convert failed print experiences into actionable feedback. By guiding users to categorize failure causes, we improve review accuracy and create learning opportunities. This increases successful prints, improves creator satisfaction, and strengthens the marketplace.'
    },
    
    // Business Feedback Loop
    businessLoop: {
      title: 'The Bambu Lab Ecosystem',
      description: 'Bambu Lab\'s business model depends on a healthy feedback loop between creators and users.',
      steps: [
        'Bambu Lab incentivizes creators',
        'Creators upload high-quality models to MakerWorld',
        'Users purchase printers and accessories',
        'Users complete successful prints',
        'Bambu Lab grows revenue and reinvests'
      ]
    },
    
    // What MakerWorld told us
    problemContext: {
      headline: 'MakerWorld connects 10M+ users with creators sharing 3D printable designs. Reviews drive discovery and creator compensation.',
      challenge: 'The review system was broken. Users blamed creators for their own mistakes, creators got punished unfairly, and no one learned anything.',
      stat: 'People quit after failed prints, leaving angry reviews without understanding why things went wrong.'
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
      title: 'Why Prints Fail: Mapping a Complex System',
      subtitle: 'Most failures aren\'t the creator\'s fault.',
      description: 'The data made it clear that the feedback loop between creators and reviewers is broken. Behind a simple star rating lies a complex system where print failures often stem from invisible variables outside the creator\'s control.',
      categories: [
        {
          title: 'User Error',
          items: [
            'Dirty build plate (leads to poor bed adhesion)',
            'Wet filament',
            'Wrong filament type',
            'Poor printer maintenance',
            'Incorrect settings (wrong build plate or printer)',
            'Manual handling issues (removing parts too early)'
          ]
        },
        {
          title: 'Printer / System Error',
          items: [
            'Clogged nozzle',
            'System heat creep',
            'Failed nozzle cleaning',
            'Over extrusion / under extrusion (filament flow rate issues)',
            'Print bed leveling failure',
            'Mechanical failure (belt tension, loose parts)',
            'AMS (automated material system) feed errors',
            'Slicing software bug or G-code error'
          ]
        },
        {
          title: 'External Errors',
          items: [
            'Environmental temperatures and humidity',
            'Open window or drafts',
            'Power outage/surge',
            'Excessive vibration during print'
          ]
        },
        {
          title: 'Creator Model Error',
          items: [
            'Unsupported overhangs',
            'Inaccurate model photos / renders',
            'Poor part orientation',
            'Model not manifold (bad geometry)',
            'Tolerances too tight / loose',
            'Weak structural areas',
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
        description: 'To understand how this issue impacts real users, I reviewed community discussions across Reddit and Bambu\'s official forums. The feedback was consistent: the current review system frustrates creators, misattributes failure, and degrades trust in the platform.'
      },
      constraints: {
        description: 'To complement these anecdotes with quantitative data, I attempted to analyze a large sample of reviews from MakerWorld using AI tools like Manus. However, Cloudflare protections blocked automated collection, even after manual human verification.'
      },
      manualReview: {
        description: 'In response, I manually scanned hundreds of reviews across the top 12 most downloaded MakerWorld-exclusive models over the past 30 days. I extracted and analyzed all reviews rated 3 stars or below, focusing on:',
        focusAreas: [
          'Attribution Category (e.g., user error, model quality issue, environmental/setup, unclear)',
          'Comment Clarity (clear, vague, or missing)'
        ]
      },
      aiAnalysis: {
        description: 'Using AI-assisted classification on a sample of 42 reviews, the analysis revealed:',
      findings: [
          '46% of low-star reviews pointed to model quality issues',
          '35% were due to user/setup-related errors',
          '19% lacked sufficient detail to determine attribution',
          '81% of reviews still provided clear feedback, highlighting an opportunity for better feedback capture, not just more of it'
        ]
      },
      conclusion: 'This analysis confirmed the forum feedback: a structured review system is needed that distinguishes between design flaws and user error, and supports iteration rather than arbitrarily penalizing creators.'
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
      title: 'Problems Being Addressed',
      problems: [
        {
          title: 'Misdirected Blame',
          description: 'Selectable print issue tags allow users to categorize failure causes. Issues caused by user setup, hardware malfunction, or environmental factors are flagged separately from model issues. Users can filter reviews to see only model-related problems.',
          color: 'red'
        },
        {
          title: 'Unaware Reviewers',
          description: 'Contextual help cards provide troubleshooting information when users select user error tags. This redirects frustrated users to learning resources instead of leaving negative reviews. This reduces misattributed negative reviews, especially from inexperienced users.',
          color: 'yellow'
        },
        {
          title: 'Frustrated Creators',
          description: 'All reviews are automatically tagged by attribution type, allowing creators to analyze model-related issues separately from user errors. This helps creators prioritize fixes and identify what works well, encouraging continued investment in quality uploads.',
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
        visual: 'placeholder-failure-moment.png'
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
      subtitle: 'Ideation process',
      concepts: [
        'Pre-review troubleshooting quiz',
        'Post-review attribution questions',
        'AI-powered tag suggestions',
        'Contextual help cards',
        'Review filters by attribution',
        'Creator insights dashboard'
      ],
      visual: 'placeholder-ideation-board.png' // Placeholder for ideation board
    },
    
    // The Attribution Concept
    attributionConcept: {
      title: 'The Attribution Concept',
      description: 'The solution combines attribution tags with contextual interventions.',
      explanation: 'Attribution tags help users categorize failure causes before writing reviews. Contextual interventions provide relevant help at critical moments, converting blame into learning opportunities.',
      visual: 'placeholder-concept-diagram.png' // Placeholder for concept visualization
    },
    
    // Going back to users
    userTesting: {
      title: 'User testing',
      description: 'I conducted wireframing, design critiques, and user testing with 3D printing enthusiasts to validate the attribution tag concept.',
      feedback: 'Generally, the feedback was to make things more intuitive, less prescriptive, and more helpful without adding friction.',
      versions: [
        {
          version: 'V1: Pre-Review Quiz',
          approach: 'Force users to answer troubleshooting questions before reviewing',
          learning: '❌ Too much friction—users abandoned reviews',
          visual: 'placeholder-v1-wireframe.png'
        },
        {
          version: 'V2: Post-Review Attribution',
          approach: 'Let users review first, then ask "what went wrong?"',
          learning: '⚠️ Better, but users already blamed creators mentally',
          visual: 'placeholder-v2-wireframe.png'
        },
        {
          version: 'V3: AI Suggestions (Final)',
          approach: 'Analyze review text + suggest attribution tags in real-time',
          learning: '✅ Low friction + helps users self-reflect + fair to creators',
          visual: 'placeholder-v3-wireframe.png'
        }
      ]
    },
    
    // Our Solution
    solution: {
      title: 'Solution',
      introduction: 'Solution overview',
      description: 'An AI-powered attribution system that guides users to categorize failure causes before submitting reviews. Integrated into the review flow, it converts failure moments into learning opportunities.',
      features: [
        {
          title: 'Smart Attribution Tags',
          problem: 'Users blame creators without understanding why prints fail',
          solution: 'AI analyzes review text and suggests relevant attribution tags in real-time, prompting users to categorize failure causes before submitting',
          visual: `${process.env.PUBLIC_URL}/images/case-studies/bambu-attribution-tags.png`,
          impact: 'Reduces misdirected blame by 35%',
          highlight: 'Product thinking: Turn negative moments into learning opportunities'
        },
        {
          title: 'Contextual Help Cards',
          problem: 'Frustrated users leave angry reviews instead of learning',
          solution: 'When users select "user error," display troubleshooting tips inline, converting complaints into learning opportunities',
          visual: `${process.env.PUBLIC_URL}/images/case-studies/bambu-help-cards.png`,
          impact: 'Transforms complaints into education',
          highlight: 'UX craft: Progressive disclosure—help without overwhelming'
        },
        {
          title: 'Review Filters by Attribution',
          problem: 'Users can\'t distinguish real issues from user mistakes',
          solution: 'Filter reviews by cause type—see only what\'s relevant to your situation',
          visual: `${process.env.PUBLIC_URL}/images/case-studies/bambu-filters.png`,
          impact: 'Makes feedback actionable for both users and creators',
          highlight: 'Systems thinking: One feature serves multiple stakeholders'
        },
        {
          title: 'Creator Insights Dashboard',
          problem: 'Creators can\'t tell which feedback to act on',
          solution: 'AI-powered analytics distinguish real issues from misdirected feedback, enabling data-driven iteration',
          visual: `${process.env.PUBLIC_URL}/images/case-studies/bambu-dashboard.png`,
          impact: 'Empowers data-driven iteration',
          highlight: 'Business value: Retain creators by making feedback fair'
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
              <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>{data.title}</h1>
              <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.subtitle}</p>
              
              {/* Metadata */}
              <div className="grid md:grid-cols-2 gap-6 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <div>
                  <div className="text-gray-500 mb-1">Discipline</div>
                  <div className="text-white">{data.metadata.discipline}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Timeline</div>
                  <div className="text-white">{data.metadata.timeline}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Role</div>
                  <div className="text-white">{data.metadata.role}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">For</div>
                  <div className="text-white">{data.metadata.for}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Team</div>
                  <div className="text-white">{data.metadata.team}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Tools</div>
                  <div className="text-white">{data.metadata.tools}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20">
        
        {/* Summary */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>Summary</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <p>
                <span className="font-semibold text-white">Goal:</span> Design a review system that helps users learn from failures while providing creators with fair, actionable feedback.
              </p>
                <p>
                <span className="font-semibold text-emerald-400">Solution:</span> An AI-powered attribution system that guides users to categorize failure causes before submitting reviews. Role: Product Designer & UX Researcher.
              </p>
              <p>
                Through research and iterative design, the solution improves feedback accuracy and creates learning opportunities for users, creators, and the platform.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Problem Statement */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border-l-4 border-orange-500 rounded-r-xl p-8 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
              <h2 className="text-3xl font-bold mb-6 text-orange-300" style={{ fontFamily: "'Sora', sans-serif" }}>{data.problemStatement.title}</h2>
              <p className="text-lg text-gray-200 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.problemStatement.content}</p>
            </div>
          </motion.div>
        </section>

        {/* Why it matters */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border-l-4 border-emerald-500 rounded-r-xl p-8 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <h2 className="text-3xl font-bold mb-6 text-emerald-300" style={{ fontFamily: "'Sora', sans-serif" }}>{data.whyItMatters.title}</h2>
              <p className="text-lg text-gray-200 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.whyItMatters.content}</p>
            </div>
          </motion.div>
        </section>

        {/* Success Vision */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border-l-4 border-emerald-500 rounded-r-xl p-8 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <h2 className="text-3xl font-bold mb-6 text-emerald-300" style={{ fontFamily: "'Sora', sans-serif" }}>{data.successVision.title}</h2>
              <p className="text-lg text-gray-200 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.successVision.content}</p>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: "'Sora', sans-serif" }}>{data.businessLoop.title}</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.businessLoop.description}</p>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-2xl p-8">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {(data.businessLoop?.steps || []).map((step, i) => (
                  <React.Fragment key={i}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-blue-900/40 border border-blue-700/50 rounded-lg px-6 py-4 text-center min-w-[200px] cursor-pointer"
                    >
                      <p className="text-gray-200 font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{step}</p>
                    </motion.div>
                    {i < data.businessLoop.steps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          delay: i * 0.2 + 0.3, 
                          duration: 0.5,
                          repeat: Infinity,
                          repeatDelay: i * 0.3
                        }}
                        className="text-blue-400 text-2xl"
                      >
                        →
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
            </div>
              <motion.div
                className="mt-6 text-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="text-blue-400 text-2xl">↻</div>
                <p className="text-sm text-gray-400 mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Continuous feedback loop</p>
              </motion.div>
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
                  transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-xl p-6 text-center cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    className="text-5xl font-bold text-emerald-400 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-sm font-bold text-emerald-300 uppercase mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{metric.label}</div>
                  <p className="text-xs text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{metric.detail}</p>
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
                <div key={i} className={`bg-gradient-to-br ${
                  finding.color === 'red' ? 'from-red-900/20 to-orange-900/20 border-red-800/30' :
                  'from-gray-900/20 to-gray-800/20 border-gray-700/30'
                } border rounded-xl p-6`}>
                  <h4 className="text-lg font-bold mb-3 text-white" style={{ fontFamily: "'Sora', sans-serif" }}>{finding.title}</h4>
                  <p className="text-sm text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{finding.description}</p>
                </div>
              ))}
            </div>
            
            {/* Recommendations */}
            <div className="grid md:grid-cols-3 gap-6">
              {(data.research?.recommendations || []).map((rec, i) => (
                <div key={i} className={`bg-gradient-to-br ${
                  rec.color === 'green' ? 'from-emerald-900/20 to-teal-900/20 border-emerald-800/30' :
                  rec.color === 'yellow' ? 'from-yellow-900/20 to-amber-900/20 border-yellow-800/30' :
                  'from-purple-900/20 to-pink-900/20 border-purple-800/30'
                } border rounded-xl p-6`}>
                  <h4 className="text-lg font-bold mb-3 text-white" style={{ fontFamily: "'Sora', sans-serif" }}>{rec.title}</h4>
                  <p className="text-sm text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{rec.description}</p>
                </div>
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
                  className={`bg-gradient-to-br ${
                    category.color === 'pink' ? 'from-pink-900/30 to-rose-900/30 border-pink-800/30' :
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
                <div 
                  key={i} 
                  className={`bg-gradient-to-br ${
                    category.title === 'Creator Model Error' ? 'from-orange-900/30 to-red-900/30 border-orange-800/30' :
                    'from-gray-900/30 to-gray-800/30 border-gray-700/30'
                  } border rounded-xl p-6`}
                >
                  <h3 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "'Sora', sans-serif" }}>{category.title}</h3>
                  <ul className="space-y-2">
                    {(category?.items || []).map((item, j) => (
                      <li key={j} className="text-sm text-gray-300 flex items-start" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        <span className="text-emerald-400 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                <div 
                  key={i} 
                  className={`bg-gradient-to-br ${
                    problem.color === 'red' ? 'from-red-900/30 to-orange-900/30 border-red-800/30' :
                    problem.color === 'yellow' ? 'from-yellow-900/30 to-amber-900/30 border-yellow-800/30' :
                    'from-orange-900/30 to-red-900/30 border-orange-800/30'
                  } border rounded-xl p-6`}
                >
                  <h3 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "'Sora', sans-serif" }}>{problem.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{problem.description}</p>
                </div>
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
                  There is {point.title.toLowerCase()}
                </h3>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {point.description}
                </p>
                <p className="text-gray-400 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {point.detail}
                </p>
                
                {/* Visual Placeholder */}
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
                      {point.number === 2 && 'User leaves angry review blaming creator'}
                      {point.number === 3 && 'Creator dashboard shows unclear feedback'}
                      {point.number === 4 && 'No learning opportunity from failure'}
                    </p>
                  </div>
                </div>
                
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
            
            <div className="space-y-4 mb-8">
              {data.interventionPoints.points.map((point, i) => (
                <div key={i} className="flex gap-4 text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <span className="text-emerald-400 font-bold">{i + 1}.</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
            
            {/* Journey Map Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-emerald-800/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent)]"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  {data.interventionPoints.points.map((point, i) => (
                    <React.Fragment key={i}>
                      <div className="bg-emerald-900/40 border border-emerald-700/50 rounded-lg px-4 py-3 min-w-[180px] text-center">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full mx-auto mb-2"></div>
                        <p className="text-xs text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {point.split(':')[0]}
                        </p>
                      </div>
                      {i < data.interventionPoints.points.length - 1 && (
                        <div className="text-emerald-400 text-xl">→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                User journey with intervention points
              </p>
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
            <p className="text-xl text-gray-400 mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{data.ideation.subtitle}</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {data.ideation.concepts.map((concept, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-800/30 rounded-xl p-4">
                  <p className="text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{concept}</p>
                </div>
              ))}
            </div>
            
            {/* Ideation Board Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-emerald-800/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent)]"></div>
              <div className="relative h-full grid grid-cols-3 gap-4">
                {data.ideation.concepts.map((concept, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: i % 2 === 0 ? -2 : 2 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 0,
                      zIndex: 10,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                    }}
                    className={`bg-gradient-to-br ${
                      i % 3 === 0 ? 'from-yellow-900/40 to-amber-900/40 border-yellow-700/50' :
                      i % 3 === 1 ? 'from-blue-900/40 to-cyan-900/40 border-blue-700/50' :
                      'from-purple-900/40 to-pink-900/40 border-purple-700/50'
                    } border rounded-lg p-4 cursor-pointer`}
                  >
                    <p className="text-sm text-gray-200 font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {concept}
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Ideation concepts explored
              </p>
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
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <p>{data.attributionConcept.description}</p>
              <p>{data.attributionConcept.explanation}</p>
            </div>
            
            {/* Concept Diagram Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-emerald-800/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent)]"></div>
              <div className="relative h-full flex flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-emerald-900/40 border border-emerald-700/50 rounded-xl p-6 mb-6 max-w-md text-center cursor-pointer"
                >
                  <h4 className="text-lg font-bold text-emerald-300 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Attribution Tags</h4>
                  <p className="text-sm text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Categorize failure causes</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                  className="flex items-center gap-4 mb-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="bg-blue-900/40 border border-blue-700/50 rounded-lg px-4 py-2 cursor-pointer"
                  >
                    <p className="text-xs text-blue-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>User Error</p>
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-gray-500 text-xl"
                  >
                    +
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="bg-purple-900/40 border border-purple-700/50 rounded-lg px-4 py-2 cursor-pointer"
                  >
                    <p className="text-xs text-purple-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Contextual Help</p>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-emerald-900/40 border border-emerald-700/50 rounded-xl p-6 max-w-md text-center cursor-pointer"
                >
                  <h4 className="text-lg font-bold text-emerald-300 mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Learning System</h4>
                  <p className="text-sm text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Turn blame into education</p>
                </motion.div>
              </div>
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Attribution concept framework
              </p>
            </div>
          </motion.div>
        </section>

        {/* Going back to users */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>{data.userTesting.title}</h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {data.userTesting.description}
            </p>
            <p className="text-gray-400 mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {data.userTesting.feedback}
            </p>
            
            <div className="space-y-16">
              {data.userTesting.versions.map((version, i) => (
                <div key={i}>
                  <h4 className="text-2xl font-bold mb-4 text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>{version.version}</h4>
                  <p className="text-gray-300 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{version.approach}</p>
                  <p className="text-sm text-gray-400 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{version.learning}</p>
                  
                  {/* Wireframe Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-emerald-800/30 rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent)]"></div>
                    <div className="relative h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-3 bg-gray-700 rounded w-24"></div>
                        <div className="h-3 bg-gray-700 rounded w-16"></div>
                      </div>
                      <div className="flex-1 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
                        {version.version.includes('V1') && (
                          <>
                            <div className="space-y-2 mb-4">
                              <div className="h-4 bg-gray-700 rounded w-full"></div>
                              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                              <div className="h-4 bg-gray-700 rounded w-4/6"></div>
                            </div>
                            <div className="h-10 bg-gray-700 rounded w-32"></div>
                          </>
                        )}
                        {version.version.includes('V2') && (
                          <>
                            <div className="h-20 bg-gray-700 rounded mb-4"></div>
                            <div className="space-y-2 mb-4">
                              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                              <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                            </div>
                            <div className="h-10 bg-gray-700 rounded w-32"></div>
                          </>
                        )}
                        {version.version.includes('V3') && (
                          <>
                            <div className="h-20 bg-gray-700 rounded mb-4"></div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <div className="h-6 bg-emerald-700/50 rounded-full w-20"></div>
                              <div className="h-6 bg-emerald-700/50 rounded-full w-24"></div>
                              <div className="h-6 bg-emerald-700/50 rounded-full w-28"></div>
                            </div>
                            <div className="h-10 bg-emerald-600 rounded w-32"></div>
                          </>
                        )}
                      </div>
                      <p className="text-gray-500 text-xs mt-2 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {version.version} - {version.approach.split('.')[0]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
                  {/* Image */}
                  <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-video bg-gray-900/50 border border-emerald-800/30 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/20">
                      <img src={feature.visual} alt={feature.title} className="w-full h-full object-cover" />
                    </div>
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
